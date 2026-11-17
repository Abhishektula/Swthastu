'use client';
import {useEffect,useState} from 'react';
import {usePathname,useRouter} from 'next/navigation';

export function useSiteState(){
  const router=useRouter(),path=usePathname()||'/';
  const [menu,setMenu]=useState(false),[booking,setBooking]=useState(''),[status,setStatus]=useState('');
  useEffect(()=>{try{localStorage.removeItem('swthastu-journal')}catch{}},[]);
  function go(destination:string){setMenu(false);router.push(destination)}
  return {path,menu,setMenu,booking,setBooking,status,setStatus,go};
}
