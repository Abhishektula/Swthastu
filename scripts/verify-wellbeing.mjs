import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
function transformSync(source){return {code:ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText}}
const module=await import('data:text/javascript;base64,'+Buffer.from(transformSync(fs.readFileSync('app/journal-crypto.ts','utf8'),{loader:'ts',format:'esm'}).code).toString('base64'));
const message=JSON.stringify({text:'Private thought: I need a gentler day.',mood:'Unsettled'});
const a=await module.seal(message,'My private passphrase 2026'),b=await module.seal(message,'My private passphrase 2026');
assert.notEqual(a.ciphertext,b.ciphertext);assert(!JSON.stringify(a).includes('Private thought'));
assert.equal(await module.unseal(a,'My private passphrase 2026'),message);
await assert.rejects(()=>module.unseal(a,'Wrong private passphrase'));
const bad={...a,ciphertext:a.ciphertext.slice(0,-4)+'AAAA'};await assert.rejects(()=>module.unseal(bad,'My private passphrase 2026'));
await assert.rejects(()=>module.seal(message,'short'));
const data=await import('data:text/javascript;base64,'+Buffer.from(transformSync(fs.readFileSync('app/data.ts','utf8'),{loader:'ts',format:'esm'}).code).toString('base64'));
const workshops=await import('data:text/javascript;base64,'+Buffer.from(transformSync(fs.readFileSync('app/workshops.ts','utf8'),{loader:'ts',format:'esm'}).code).toString('base64'));
const photos=[0,2,13,...data.programmes.map(p=>p[4]),4,'old-7','old-1','old-23','old-14','old-12',...data.festivals.map(f=>f[3]),'old-18','old-20','old-24',...workshops.workshops.map(w=>'workshop-'+w.slug)];
assert.equal(new Set(photos.map(String)).size,photos.length,'Each editorial photograph must have one assigned content placement');
const hashes=photos.map(p=>{const path='public/images/'+(typeof p==='number'?'story-'+p:p)+'.webp';assert(fs.existsSync(path),path);return fs.readFileSync(path).toString('base64')});assert.equal(new Set(hashes).size,hashes.length,'No duplicate photograph files');
const site=fs.readFileSync('app/site.tsx','utf8');assert(!site.includes('localStorage.setItem(\'swthastu-journal\''));assert(!site.includes('Aarohan'));
for(const e of workshops.calendarEntries){assert(e.start<=e.end);assert(!Number.isNaN(Date.parse(e.start)));}
const sanctuary=fs.readFileSync('app/sanctuary.tsx','utf8');assert(!sanctuary.includes("fetch("),'Journal must not silently send entries');assert(sanctuary.includes('providerConsent')&&sanctuary.includes('shareConsent')&&sanctuary.includes('saveConsent'));
const api=fs.readFileSync('app/api/providers/route.ts','utf8');assert(api.includes('eq(providers.userId,user.userId)'),'Provider operations must scope records to signed-in account');assert(api.includes('z.literal(true)'));
console.log(`PASS: authenticated journal encryption; random IVs; wrong-key and tamper rejection; ${photos.length} unique photographs; temporary-journal boundaries; account-scoped provider operations; calendar date validity.`);
