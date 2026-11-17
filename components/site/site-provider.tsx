'use client';
import {createContext,useContext,type PropsWithChildren} from 'react';
import {useSiteState} from '../../hooks/use-site-state';

const SiteContext=createContext<ReturnType<typeof useSiteState>|null>(null);
export function SiteProvider({children}:PropsWithChildren){
  const state=useSiteState();
  return <SiteContext.Provider value={state}>{children}</SiteContext.Provider>;
}
export function useSite(){
  const state=useContext(SiteContext);
  if(!state)throw new Error('SiteProvider is required.');
  return state;
}
