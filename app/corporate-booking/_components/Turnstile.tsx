'use client';
import Script from 'next/script';
import {useEffect,useRef,useState} from 'react';

declare global {interface Window {turnstile?:{render:(element:HTMLElement,options:Record<string,unknown>)=>string;remove:(id:string)=>void}}}
export default function Turnstile({siteKey,resetKey,onToken}:{siteKey:string;resetKey:number;onToken:(token:string)=>void}){
  const container=useRef<HTMLDivElement>(null);
  const [loaded,setLoaded]=useState(false),[failed,setFailed]=useState(false);
  useEffect(()=>{
    if(!loaded||!container.current||!window.turnstile)return;
    const api=window.turnstile;
    const id=api.render(container.current,{sitekey:siteKey,action:'corporate-booking',size:'flexible','response-field':false,callback:(value:string)=>{setFailed(false);onToken(value)},'expired-callback':()=>onToken(''),'error-callback':()=>{onToken('');setFailed(true)}});
    return ()=>api.remove(id);
  },[loaded,siteKey,resetKey,onToken]);
  return <div className="corporate-verification"><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={()=>setLoaded(true)} onError={()=>setFailed(true)}/><div ref={container}/>{failed&&<p role="alert" className="smallnote">Verification could not load. Refresh this page or email us directly.</p>}</div>;
}
