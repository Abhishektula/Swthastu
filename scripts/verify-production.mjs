import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { catalogue } from './verify-catalogue.mjs';
const require = createRequire(import.meta.resolve('wrangler'));
const { Miniflare } = require('miniflare');
const mf = new Miniflare({ modules:[{type:'ESModule',path:'dist/server/index.js'}], compatibilityDate:'2026-05-15', compatibilityFlags:['nodejs_compat'], d1Databases:['DB'], assets:{directory:'dist/client',binding:'ASSETS',routerConfig:{has_user_worker:true,invoke_user_worker_ahead_of_assets:true}} });
try {
  const db=await mf.getD1Database('DB');
  for(const f of readdirSync('drizzle').filter(x=>x.endsWith('.sql')).sort()) {
    for(const sql of readFileSync('drizzle/'+f,'utf8').split('--> statement-breakpoint').filter(x=>x.trim())) await db.prepare(sql).run();
  }
  for(const path of ['/','/at-work/eap','/sanctuary','/living-well','/providers','/workshops','/rituals','/retreats','/gatherings','/calendar']) {
    const r=await mf.dispatchFetch('https://localhost'+path);assert.equal(r.status,200,path);assert((await r.text()).includes('Swthastu'));
  }
  const {rituals,experiences,experiencePath}=await catalogue();
  const details=[...rituals.map(r=>({path:'/rituals/'+r.slug,item:r})),...experiences.map(item=>({path:experiencePath(item),item}))];
  for(const {path,item} of details){
    const response=await mf.dispatchFetch('https://localhost'+path);
    assert.equal(response.status,200,path);
    const html=await response.text();
    const escaped=item.name.replaceAll('&','&amp;').replaceAll("'",'&#x27;');
    assert(html.includes('<h1>'+escaped+'</h1>'),`${path}: rendered heading`);
    assert(html.includes('rel="canonical" href="https://swthastu-wellbeing.amberllama2.chatgpt.site'+path+'"'),`${path}: canonical URL`);
    assert(html.includes(item.image),`${path}: own illustration`);
  }
  const sitemap=await mf.dispatchFetch('https://localhost/sitemap.xml');
  const xml=await sitemap.text();assert.equal(sitemap.status,200);for(const {path} of details)assert(xml.includes(path+'</loc>'),path);
  for(const path of ['/rituals/does-not-exist','/workshops/does-not-exist','/does-not-exist'])assert.equal((await mf.dispatchFetch('https://localhost'+path)).status,404,path);
  const reflection=await mf.dispatchFetch('https://localhost/sanctuary?practice=daily-energy-map');
  assert((await reflection.text()).includes('Which part of my day most needs a different rhythm?'),'Ritual prompt survives navigation without private text in the URL');
  const localOrigin='https://localhost:'+new URL(await mf.ready).port;
  const post=async(path,data)=>mf.dispatchFetch('https://localhost'+path,{method:'POST',headers:{'content-type':'application/json',host:'localhost','x-forwarded-host':'localhost',origin:localOrigin},body:JSON.stringify(data)});
  const payload={name:'Migration Test',email:'test@example.com',company:'Local Test Only',role:'HR / People team',headcount:'1–49',locations:'Delhi',mode:'Office-based',needs:['Manager capability'],consent:true,adult:true};
  const rejected=await post('/api/work-enquiries',{...payload,consent:false});assert.equal(rejected.status,400);
  const saved=await post('/api/work-enquiries',payload);assert.equal(saved.status,201,await saved.clone().text());assert.equal(saved.headers.get('cache-control'),'no-store');
  const row=await db.prepare('SELECT name FROM enquiries WHERE email = ?').bind('test@example.com').first();assert.equal(row.name,'Migration Test');
  const enquiry={name:'Catalogue Test',email:'catalogue@example.com',interest:'PranaX',date:'',timezone:'Asia/Kolkata',message:'Please confirm the format.',consent:true,adult:true};
  assert.equal((await post('/api/enquiries',{...enquiry,consent:false})).status,400);
  const request=await post('/api/enquiries',enquiry);assert.equal(request.status,200,await request.clone().text());
  assert.equal((await db.prepare('SELECT interest FROM enquiries WHERE email = ?').bind(enquiry.email).first()).interest,'PranaX');
  const rishi=await mf.dispatchFetch('https://localhost/api/rishi');assert.equal(rishi.status,200);assert.equal((await rishi.json()).ready,false);
  const provider=await mf.dispatchFetch('https://localhost/api/providers');assert.equal(provider.status,401);
  console.log('PASS: all 88 production detail pages, metadata, sitemap, missing-page 404s, journal prompt handoff, experience and EAP enquiries, consent rejection, private cache headers, Rishi preview and provider authentication. Test database is ephemeral.');
} finally {await mf.dispose();}
