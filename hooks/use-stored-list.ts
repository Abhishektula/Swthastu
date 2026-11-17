'use client';
import {useMemo,useSyncExternalStore} from 'react';

function subscribe(notify:()=>void){
  window.addEventListener('storage',notify);
  window.addEventListener('swthastu-storage',notify);
  return ()=>{
    window.removeEventListener('storage',notify);
    window.removeEventListener('swthastu-storage',notify);
  };
}
const serverSnapshot=()=>null;
export const isString=(value:unknown):value is string=>typeof value==='string';

export function useStoredList<T>(key:string,valid:(value:unknown)=>value is T){
  const raw=useSyncExternalStore(subscribe,()=>{
    try{return localStorage.getItem(key)}catch{return null}
  },serverSnapshot);
  const items=useMemo(()=>{
    try{const value:unknown=JSON.parse(raw||'[]');return Array.isArray(value)?value.filter(valid):[]}catch{return []}
  },[raw,valid]);
  function save(next:T[]){
    localStorage.setItem(key,JSON.stringify(next));
    window.dispatchEvent(new Event('swthastu-storage'));
  }
  return [items,save] as const;
}
