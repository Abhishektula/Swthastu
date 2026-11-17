'use client';
import {type PropsWithChildren} from 'react';
import {useSite} from './site-provider';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';
import EnquiryModal from './enquiry-modal';

export default function SiteShell({children}:PropsWithChildren){
  const {path,go}=useSite();
  return <><SiteHeader/><main>{children}</main><SiteFooter/>{path!=='/rishi'&&<button className="floatrishi" onClick={()=>go('/rishi')}>Speak to Rishi <span>✧</span></button>}<EnquiryModal/></>;
}
