import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import ts from 'typescript';

export async function catalogue(){
  async function read(file){const code=ts.transpileModule(readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'))}
  const {rituals}=await read('app/rituals-data.ts');
  const {experiences,experiencePath}=await read('app/experiences-data.ts');
  return {rituals,experiences,experiencePath};
}
const {rituals,experiences,experiencePath}=await catalogue();
assert.equal(rituals.length,64);
assert.equal(experiences.filter(e=>e.kind==='Workshop').length,5);
assert.equal(experiences.filter(e=>e.kind==='Retreat').length,13);
assert.equal(experiences.filter(e=>e.kind==='Gathering').length,6);
const paths=[...rituals.map(r=>'/rituals/'+r.slug),...experiences.map(experiencePath)];
assert.equal(new Set(paths).size,88,'Every experience has its own URL');
const hashes=[];
for(const item of [...rituals,...experiences]){
  assert.match(item.slug,/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert(item.immediate.length>=2&&item.continuing.length>=2,`${item.name}: both benefit horizons`);
  assert(item.care.trim(),`${item.name}: suitability guidance`);
  assert(existsSync('public'+item.image),`${item.name}: image file`);
  hashes.push(createHash('sha256').update(readFileSync('public'+item.image)).digest('hex'));
}
assert.equal(new Set(hashes).size,88,'All 88 detail pages have a distinct image');
for(const r of rituals){
  assert.equal(r.steps.length,5,r.name);
  assert.equal(r.steps.reduce((sum,s)=>sum+s.minutes,0),r.minutes,`${r.name}: step timing`);
  assert(r.steps.every(s=>s.text&&s.minutes>0),r.name);
  assert(r.prompt&&r.carry&&r.adapt&&r.frequency&&r.modeDetail,r.name);
  if(/teen|child/i.test(r.audience))assert.notEqual(r.mode,'Self-guided',`${r.name}: support for younger participants`);
}
for(const e of experiences){
  assert.equal(rituals.filter(r=>r.segmentSlug===e.segmentSlug).length,2,`${e.name}: connected practices`);
  assert.equal(e.flow.length,3,e.name);
}
assert.notEqual(experiences.find(e=>e.slug==='pranax').kind,experiences.find(e=>e.slug==='prakash').kind,'PranaX and Prakash remain distinct experiences');
console.log('PASS: 88 unique routes and images; complete benefits and care guidance; 64 timed practices; all 24 experience-to-ritual connections.');
