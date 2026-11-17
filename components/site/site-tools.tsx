'use client';
import SiteLink from './site-link';
import {useSite} from './site-provider';
export function useSiteTools(){
  const site=useSite();
  const link=(path:string,text:string)=><SiteLink href={path} onClick={()=>site.setMenu(false)}>{text}</SiteLink>;
  return {...site,link};
}
