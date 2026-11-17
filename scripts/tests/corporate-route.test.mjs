import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFileSync} from 'node:fs';
import {stripTypeScriptTypes} from 'node:module';

const moduleUrl=source=>`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
const security=moduleUrl(stripTypeScriptTypes(readFileSync(new URL('../../app/api/security.ts',import.meta.url),'utf8')));
let source=stripTypeScriptTypes(readFileSync(new URL('../../app/api/corporate-bookings/route.ts',import.meta.url),'utf8'));
source=source.replace("'../security'",JSON.stringify(security));
source=source.replace("import {getCloudflareEnv} from '../../../lib/cloudflare';",'const getCloudflareEnv=()=>({});');
source=source.replace("'../../../lib/corporate-handler.mjs'",JSON.stringify(new URL('../../lib/corporate-handler.mjs',import.meta.url).href));
const {POST}=await import(moduleUrl(source));

test('Corporate Next.js endpoint enforces same-origin JSON submission',async()=>{
  const request=headers=>new Request('https://example.com/api/corporate-bookings',{method:'POST',headers,body:'{}'});
  assert.equal((await POST(request({'content-type':'application/json',origin:'https://evil.example'}))).status,403);
  assert.equal((await POST(request({'content-type':'application/json','sec-fetch-site':'cross-site'}))).status,403);
  assert.equal((await POST(request({'content-type':'text/plain'}))).status,415);
  assert.equal((await POST(request({'content-type':'application/json',origin:'https://example.com'}))).status,503);
});
