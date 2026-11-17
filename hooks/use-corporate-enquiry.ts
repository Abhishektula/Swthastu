'use client';
import {useRef,useState,type FormEvent} from 'react';

export function useCorporateEnquiry(){
  const [token,setToken]=useState(''),[busy,setBusy]=useState(false),[error,setError]=useState(''),[reference,setReference]=useState(''),[resetKey,setResetKey]=useState(0);
  const submission=useRef({body:'',id:''});
  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();if(busy)return;
    setError('');
    const form=new FormData(event.currentTarget);
    if(!form.getAll('programmes').length){setError('Please choose at least one programme interest.');return;}
    if(!token){setError('Please complete the verification before sending.');return;}
    const data={...Object.fromEntries(form),programmes:form.getAll('programmes'),flexible:form.has('flexible'),consent:form.has('consent')};
    const body=JSON.stringify(data);
    if(submission.current.body!==body)submission.current={body,id:crypto.randomUUID()};
    setBusy(true);
    try{
      const response=await fetch('/api/corporate-bookings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...data,requestId:submission.current.id,token}),signal:AbortSignal.timeout(30000)});
      const result=await response.json() as {status?:string;error?:string;id?:string};
      if(!response.ok||result.status!=='accepted')throw new Error(result.error||'We could not confirm your enquiry was sent. Please retry.');
      setReference(result.id??'');
    }catch(cause){setError(cause instanceof Error&&cause.name!=='TimeoutError'?cause.message:'We could not confirm your enquiry was sent. Please retry or email swthastu@gmail.com.');}
    finally{setBusy(false);setToken('');setResetKey(value=>value+1);}
  }
  return {token,setToken,busy,error,reference,resetKey,submit};
}
