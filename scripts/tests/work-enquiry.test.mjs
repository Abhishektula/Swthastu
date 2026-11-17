import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFileSync} from 'node:fs';
import {stripTypeScriptTypes} from 'node:module';

const url=s=>'data:text/javascript;base64,'+Buffer.from(s).toString('base64');
const read=p=>stripTypeScriptTypes(readFileSync(new URL('../../'+p,import.meta.url),'utf8'));
const options=url(read('app/work-options.ts'));
const schema=url(read('app/work-schema.ts').replace("'./work-options'",JSON.stringify(options)).replace("'zod'",JSON.stringify(import.meta.resolve('zod'))));
const security=url(read('app/api/security.ts'));
const source=read('app/api/work-enquiries/route.ts')
  .replace("'../security'",JSON.stringify(security))
  .replace("'../../work-schema'",JSON.stringify(schema))
  .replace("import {getDb} from '../../../db';","export const rows=[]; const getDb=()=>({insert:()=>({values:async row=>rows.push(row)})});")
  .replace("import {enquiries} from '../../../db/schema';","const enquiries={};");
const {POST,rows}=await import(url(source));
const payload={name:'Test Person',email:'test@example.com',company:'Test Company',role:'HR / People team',headcount:'50–199',locations:'Delhi',mode:'Hybrid / remote',needs:['Manager capability'],consent:true,adult:true};
const request=(data,origin='https://swthastu.com')=>new Request('https://swthastu.com/api/work-enquiries',{method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify(data)});

test('Work enquiries require same origin, consent and adulthood before storing the brief',async()=>{
  assert.equal((await POST(request(payload,'https://example.com'))).status,403);
  for(const data of [{...payload,consent:false},{...payload,adult:false},{...payload,needs:[]}])assert.equal((await POST(request(data))).status,400);
  assert.equal(rows.length,0);
  const response=await POST(request(payload));
  assert.equal(response.status,201);
  assert.equal(response.headers.get('cache-control'),'no-store');
  assert.equal(rows.length,1);
  assert.equal(rows[0].consentVersion,'work-enquiry-v1-adult-2026-10-19');
  assert.match(rows[0].message,/Organisation: Test Company/);
});
