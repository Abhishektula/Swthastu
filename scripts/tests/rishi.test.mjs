import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFileSync} from 'node:fs';
import {stripTypeScriptTypes} from 'node:module';

const url=source=>`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
const read=path=>stripTypeScriptTypes(readFileSync(new URL(path,import.meta.url),'utf8'));
const wisdom=url(read('../../app/wisdom.ts'));
const language=url(read('../../lib/rishi-language.ts'));
const prompt=url(read('../../lib/rishi-prompt.ts').replace("'../app/wisdom'",JSON.stringify(wisdom)).replace("'./rishi-language'",JSON.stringify(language)));
const schema=url(read('../../lib/rishi-schema.ts').replace("'zod'",JSON.stringify(import.meta.resolve('zod'))));
const security=url(read('../../app/api/security.ts'));
const gemini=url(read('../../lib/gemini.ts'));

async function route(path,env){
  let source=read(path);
  source=source.replace(/import \{getCloudflareEnv\} from '[^']+';/,`const getCloudflareEnv=()=>(${JSON.stringify(env)});`);
  source=source.replace(/'[^']*rishi-schema'/,JSON.stringify(schema)).replace(/'[^']*rishi-prompt'/,JSON.stringify(prompt)).replace(/'[^']*gemini'/,JSON.stringify(gemini)).replace(/'[^']*security'/,JSON.stringify(security));
  return import(url(source));
}
const body={adult:true,consent:true,mode:'reflect',language:'hi-IN',history:[{role:'user',text:'I need some quiet.'}]};
const request=(value=body,headers={})=>new Request('https://swthastu.com/api/rishi/voice',{method:'POST',headers:{'Content-Type':'application/json',origin:'https://swthastu.com',...headers},body:JSON.stringify(value)});

test('Rishi voice rejects foreign origin, absent consent/age and missing key before contacting Gemini',async()=>{
  const {POST}=await route('../../app/api/rishi/voice/route.ts',{});
  assert.equal((await POST(request(body,{origin:'https://evil.test'}))).status,403);
  assert.equal((await POST(request({...body,adult:false}))).status,400);
  assert.equal((await POST(request({...body,consent:false}))).status,400);
  assert.equal((await POST(request({...body,history:Array(81).fill(body.history[0])}))).status,413);
  assert.equal((await POST(request(body,{'Content-Type':'text/plain'}))).status,415);
  assert.equal((await POST(request())).status,503);
});

test('Rishi voice creates a constrained single-use token and never exposes its permanent key',async()=>{
  const {POST}=await route('../../app/api/rishi/voice/route.ts',{GEMINI_API_KEY:'server-only-test-key'});
  const previous=globalThis.fetch;let calls=0;
  globalThis.fetch=async(endpoint,options)=>{
    calls++;assert.equal(endpoint,'https://generativelanguage.googleapis.com/v1beta/auth_tokens');
    assert.equal(options.headers['x-goog-api-key'],'server-only-test-key');
    const payload=JSON.parse(options.body);assert.equal(payload.uses,1);
    assert(Date.parse(payload.newSessionExpireTime)-Date.now()<=60000);
    assert(Date.parse(payload.expireTime)-Date.now()<=600000);
    const setup=payload.bidiGenerateContentSetup;
    assert.equal(setup.model,'models/gemini-3.8-live');
    assert.deepEqual(setup.generationConfig.responseModalities,['AUDIO']);
    assert.equal(setup.generationConfig.speechConfig.voiceConfig.prebuiltVoiceConfig.voiceName,'Charon');
    const instructions=setup.systemInstruction.parts[0].text;
    assert(instructions.includes('Language: hi-IN'));assert(instructions.includes('Current mode: reflect'));
    assert(instructions.includes('I need some quiet.'));assert(instructions.includes('Never diagnose'));
    assert.deepEqual(setup.inputAudioTranscription,{});assert.deepEqual(setup.outputAudioTranscription,{});
    return Response.json({name:'short-lived-test-token'});
  };
  try{
    const response=await POST(request());assert.equal(response.status,200);
    assert.equal(response.headers.get('Cache-Control'),'no-store');
    const data=await response.json();assert.deepEqual(data,{token:'short-lived-test-token',model:'models/gemini-3.8-live'});
    assert(!JSON.stringify(data).includes('server-only-test-key'));assert.equal(calls,1);
    globalThis.fetch=async()=>Response.json({error:{message:'secret provider detail'}},{status:429});
    const failed=await POST(request());assert.equal(failed.status,503);assert(!(await failed.text()).includes('secret provider detail'));
  }finally{globalThis.fetch=previous}
});

test('Gemini powers consented text chat, preserves roles and leaves preview available without keys',async()=>{
  const preview=await route('../../app/api/rishi/route.ts',{});
  assert.deepEqual(await preview.GET().json(),{ready:false,voiceReady:false});
  assert.equal((await (await preview.POST(request({...body,message:'Hello'}))).json()).mode,'preview');
  const connected=await route('../../app/api/rishi/route.ts',{GEMINI_API_KEY:'server-only-test-key'});
  assert.deepEqual(await connected.GET().json(),{ready:true,voiceReady:true});
  const previous=globalThis.fetch;
  globalThis.fetch=async(endpoint,options)=>{
    assert(endpoint.includes('gemini-3.8-flash:generateContent'));
    const payload=JSON.parse(options.body);assert.equal(payload.contents.at(-1).parts[0].text,'Hello');
    return Response.json({candidates:[{content:{parts:[{text:'A quiet moment is yours.'}]}}]});
  };
  try{
    assert.deepEqual(await (await connected.POST(request({...body,message:'Hello'}))).json(),{mode:'ai',reply:'A quiet moment is yours.'});
    assert.equal((await (await connected.POST(request({...body,message:'I want to kill myself'}))).json()).mode,'support');
  }finally{globalThis.fetch=previous}
});

test('Multilingual voice keeps early session context instead of just the last six messages',async()=>{
  const {sessionSchema}=await import(schema);
  const {deviceSpeechLanguage,languageDirection}=await import(language);
  for(const choice of ['auto','hi-en','hi-en-sa','hi-IN','en-IN','en-US','sa-IN']){
    assert(sessionSchema.safeParse({...body,language:choice}).success);
    assert(languageDirection(choice).length>30);
  }
  assert.equal(deviceSpeechLanguage('hi-en'),'hi-IN');
  assert.equal(deviceSpeechLanguage('auto'),'hi-IN');
  assert.equal(deviceSpeechLanguage('sa-IN'),'hi-IN');
  const history=[{role:'user',text:'Call me Priya. I prefer Hinglish and my exam is tomorrow.'},...Array(12).fill({role:'assistant',text:'I hear you.'})];
  const {POST}=await route('../../app/api/rishi/voice/route.ts',{GEMINI_API_KEY:'test'});
  const previous=globalThis.fetch;
  globalThis.fetch=async(_,options)=>{
    const instructions=JSON.parse(options.body).bidiGenerateContentSetup.systemInstruction.parts[0].text;
    assert(instructions.includes(history[0].text));
    assert(instructions.includes('Use natural Hinglish'));
    assert(instructions.includes('Do not assume facts, invent memories'));
    return Response.json({name:'short-lived-test-token'});
  };
  try{assert.equal((await POST(request({...body,language:'hi-en',history}))).status,200)}finally{globalThis.fetch=previous}
});

test('Microphone worklet converts hardware sample rates to bounded little-endian PCM',async()=>{
  const vm=await import('node:vm');
  const source=readFileSync(new URL('../../public/rishi-microphone.js',import.meta.url),'utf8');
  for(const rate of [16000,24000,44100,48000]){
    let Processor;const chunks=[];
    const sandbox={sampleRate:rate,AudioWorkletProcessor:class{port={postMessage:bytes=>chunks.push(bytes)}},registerProcessor:(_,value)=>{Processor=value}};
    vm.runInNewContext(source,sandbox);const processor=new Processor();
    for(let i=0;i<rate/128;i++)processor.process([[new Float32Array(128).fill(.5)]]);
    assert(chunks.length>=24&&chunks.length<=25);
    assert.equal(chunks[0].byteLength,1280);assert.equal(new DataView(chunks[0]).getInt16(0,true),16383);
  }
});
