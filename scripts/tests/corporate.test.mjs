import assert from 'node:assert/strict';
import {test} from 'node:test';
import {handleCorporate} from '../../lib/corporate-handler.mjs';
import {validateCorporate} from '../../lib/corporate-validation.mjs';
import {corporateOptions,corporateProgrammes} from '../../lib/corporate-options.mjs';

const env={RESEND_API_KEY:'test-only',CORPORATE_FROM_EMAIL:'Team <bookings@example.com>',TURNSTILE_SITE_KEY:'site-key',TURNSTILE_SECRET_KEY:'test-secret'};
const payload={name:'Asha',company:'Example Team',role:'HR',email:'asha@example.com',phone:'+91 99999 99999',location:'Delhi',requirements:'Step-free venue',date:'',flexible:true,programmes:[corporateProgrammes[0]],consent:true,website:'',requestId:crypto.randomUUID(),token:'test-token',...Object.fromEntries(Object.entries(corporateOptions).map(([key,values])=>[key,values[0]]))};
const request=(changes={})=>new Request('https://example.com/api/corporate-bookings',{method:'POST',body:JSON.stringify({...payload,...changes})});
const proof={success:true,action:'corporate-booking',hostname:'example.com'};

test('Corporate form rejects invalid contact, options, consent and dates',()=>{
  assert.equal(validateCorporate(payload).company,'Example Team');
  assert.equal(validateCorporate({...payload,requirements:'Line one\r\nLine two'}).requirements,'Line one\nLine two');
  for(const changes of [{consent:false},{email:'a@b'},{email:'a@example.com\r\nBcc: attacker@example.com'},{phone:'abc123'},{format:'Other'},{programmes:[]},{programmes:['Fake']},{date:'2027-02-30'},{date:'2020-01-01'},{requirements:'x'.repeat(2001)},{website:'spam'}])assert.throws(()=>validateCorporate({...payload,...changes}));
});
test('Corporate endpoint refuses unconfigured, malformed and oversized requests',async()=>{
  const fetcher=()=>{throw new Error('Must not send')};
  assert.equal((await handleCorporate(request(),{},fetcher)).status,503);
  assert.equal((await handleCorporate(request({consent:false}),env,fetcher)).status,400);
  assert.equal((await handleCorporate(request({requestId:'invalid'}),env,fetcher)).status,400);
  assert.equal((await handleCorporate(request({requirements:'x'.repeat(13000)}),env,fetcher)).status,413);
});
test('Failed, foreign-host and wrong-action verification never sends mail',async()=>{
  for(const result of [{...proof,success:false},{...proof,hostname:'evil.example'},{...proof,action:'login'}]){
    let calls=0;
    const response=await handleCorporate(request(),env,async()=>{calls++;return Response.json(result)});
    assert.equal(response.status,400);assert.equal(calls,1);
  }
});
test('Corporate mail uses the fixed inbox, reply-to, complete brief and stable retry key',async()=>{
  const messages=[];
  const fetcher=async(url,options)=>{
    if(url.includes('siteverify'))return Response.json(proof);
    messages.push(options);return Response.json({id:'mail-id'});
  };
  for(let i=0;i<2;i++)assert.equal((await handleCorporate(request({to:'attacker@example.com'}),env,fetcher)).status,200);
  const mail=JSON.parse(messages[0].body);
  assert.deepEqual(mail.to,['swthastu@gmail.com']);assert.equal(mail.reply_to,payload.email);
  assert.ok(mail.text.includes(payload.requirements));assert.ok(mail.text.includes(payload.teamSize));
  assert.equal(messages[0].headers['Idempotency-Key'],messages[1].headers['Idempotency-Key']);
  await handleCorporate(request({company:'Changed Team'}),env,fetcher);
  assert.notEqual(messages[0].headers['Idempotency-Key'],messages[2].headers['Idempotency-Key']);
});
test('Mail rejection or network failure never reports a successful enquiry',async()=>{
  for(const fail of [()=>Response.json({error:'rejected'},{status:403}),()=>{throw new Error('Timeout')}]){
    const response=await handleCorporate(request(),env,async url=>url.includes('siteverify')?Response.json(proof):fail());
    assert.equal(response.status,503);assert.ok((await response.json()).error);
  }
});
