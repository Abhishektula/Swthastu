import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';

const origin='https://swthastu-wellbeing.amberllama2.chatgpt.site';
function meta(html,key){
  const tag=html.match(new RegExp(`<meta (?:name|property)="${key}" content="([^"]*)"`));
  assert(tag,`Missing ${key}`);return tag[1];
}
export function checkPage(html,path,index,titles,descriptions,xml){
  const title=html.match(/<title>(.*?)<\/title>/)?.[1];
  const description=meta(html,'description');
  assert(title&&title.length<=85,path+': title');
  assert(description.length>=70&&description.length<=220,path+': description');
  assert(!titles.has(title),path+': duplicate title');titles.add(title);
  assert(!descriptions.has(description),path+': duplicate description');descriptions.add(description);
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,path+': heading');
  const canonical=html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert.equal(new URL(canonical).href,new URL(origin+path).href,path);
  assert.equal(meta(html,'og:title'),title);
  assert.equal(meta(html,'og:description'),description);
  assert.equal(new URL(meta(html,'og:url')).href,new URL(origin+path).href);
  const image=meta(html,'og:image');assert(existsSync('public'+image.slice(origin.length)),path+': share image');
  assert.equal(meta(html,'twitter:card'),'summary_large_image');
  assert.equal(meta(html,'twitter:title'),title);
  assert.equal(meta(html,'twitter:description'),description);
  assert.equal(meta(html,'twitter:image'),image);
  assert.equal(meta(html,'robots').includes('noindex'),!index);
  assert.equal(xml.includes('<loc>'+origin+path+'</loc>'),index);
  const scripts=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)];
  assert.equal(scripts.length,index?1:0,path+': schema');
  if(index){
    const data=JSON.parse(scripts[0][1]);
    assert.equal(data['@context'],'https://schema.org');
    assert.equal(data['@graph'][0].url,origin+path);
    const crumbs=data['@graph'].find(x=>x['@type']==='BreadcrumbList');
    if(path!=='/')assert.equal(crumbs.itemListElement.at(-1).item,origin+path);
  }
}
