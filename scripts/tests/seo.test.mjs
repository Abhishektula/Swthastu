import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFileSync,existsSync} from 'node:fs';
import {stripTypeScriptTypes} from 'node:module';

const url=s=>'data:text/javascript;base64,'+Buffer.from(s).toString('base64');
const read=p=>stripTypeScriptTypes(readFileSync(new URL('../../app/'+p,import.meta.url),'utf8'));
let source=read('seo.ts');
for(const name of ['rituals-data','experiences-data'])source=source.replace(`'./${name}'`,JSON.stringify(url(read(name+'.ts'))));
for(const name of ['seo-pages','seo-keywords']){
  const data=readFileSync(new URL('../../app/'+name+'.json',import.meta.url),'utf8');
  source=source.replace(`'./${name}.json'`,JSON.stringify(url('export default '+data)));
}
const {origin,indexablePaths,seoEntry}=await import(url(source));
const {pageMetadata}=await import(url(read('seo-metadata.ts').replace("'./seo'",JSON.stringify(url(source)))));

test('Imported catalogue metadata uses the production domain and rejects unknown routes',()=>{
  assert.equal(origin,'https://swthastu.com');
  assert.equal(new Set(indexablePaths).size,indexablePaths.length);
  assert(indexablePaths.includes('/corporate-booking'));
  for(const path of indexablePaths){
    const entry=seoEntry(path),metadata=pageMetadata(path);
    assert(entry.title&&entry.description,path);
    assert(existsSync('public'+entry.image),path);
    assert.equal(metadata.alternates.canonical,origin+path);
  }
  for(const path of ['/missing','/constructor','/toString','/rituals/missing'])assert.equal(pageMetadata(path),undefined);
  for(const path of ['/rishi','/sanctuary','/providers'])assert.equal(pageMetadata(path).robots.index,false);
});
