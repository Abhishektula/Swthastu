import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {catalogue} from './verify-catalogue.mjs';
import {checkPage} from './verify-seo-page.mjs';

const base=process.argv[2]||'http://localhost:3100';
const pages=JSON.parse(readFileSync('app/seo-pages.json','utf8'));
const {rituals,experiences,experiencePath}=await catalogue();
const paths=[...Object.keys(pages),...rituals.map(r=>'/rituals/'+r.slug),...experiences.map(experiencePath)];
const indexed=paths.filter(path=>pages[path]?.index!==false);
const sitemap=await fetch(base+'/sitemap.xml');
assert.equal(sitemap.status,200);
const xml=await sitemap.text();
assert.equal((xml.match(/<loc>/g)||[]).length,indexed.length);
const titles=new Set(),descriptions=new Set();
for(const path of paths){
  const response=await fetch(base+path,{headers:{'user-agent':'Googlebot'}});
  assert.equal(response.status,200,path);
  checkPage(await response.text(),path,pages[path]?.index!==false,titles,descriptions,xml);
}
for(const path of ['/missing-page','/rituals/missing','/workshops/missing']){
  const response=await fetch(base+path,{headers:{'user-agent':'Googlebot'}});
  assert.equal(response.status,404,path);
  assert.match(await response.text(),/name="robots" content="noindex"/);
}
for(const path of ['/rituals?need=Calm','/sanctuary?practice=one-honest-sankalpa']){
  const html=await (await fetch(base+path,{headers:{'user-agent':'Googlebot'}})).text();
  assert(html.includes('rel="canonical" href="https://swthastu-wellbeing.amberllama2.chatgpt.site'+path.split('?')[0]+'"'));
}
const robots=await fetch(base+'/robots.txt');assert.equal(robots.status,200);
assert.match(await robots.text(),/Disallow: \/api\/[\s\S]*Sitemap: https:\/\/swthastu-wellbeing.amberllama2.chatgpt.site\/sitemap.xml/);
console.log(`PASS: ${paths.length} rendered routes; ${indexed.length} sitemap URLs; unique metadata, social images, JSON-LD, indexing policies, canonical queries and 404s.`);
