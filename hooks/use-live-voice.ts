'use client';
import {useCallback,useEffect,useRef,useState} from 'react';

type Message={role:'user'|'assistant';text:string};
type Options={mode:string;language:string;history:Message[];onMessage:(message:Message)=>void};
type LiveContent={interrupted?:boolean;turnComplete?:boolean;inputTranscription?:{text?:string};outputTranscription?:{text?:string};modelTurn?:{parts?:{inlineData?:{data:string;mimeType:string}}[]}};
type Session={context:AudioContext;stream?:MediaStream;socket?:WebSocket;node?:AudioWorkletNode;source?:MediaStreamAudioSourceNode;timer?:ReturnType<typeof setTimeout>;deadline?:ReturnType<typeof setTimeout>;controller:AbortController;playback:Set<AudioBufferSourceNode>;nextAudio:number;input:string;output:string;ready:boolean;cancelled:boolean};

export function useLiveVoice({mode,language,history,onMessage}:Options){
  const [state,setState]=useState<'idle'|'connecting'|'listening'|'speaking'>('idle');
  const [status,setStatus]=useState('');
  const [draft,setDraft]=useState('');
  const current=useRef<Session|null>(null);
  const callback=useRef(onMessage);
  useEffect(()=>{callback.current=onMessage},[onMessage]);

  const stop=useCallback((reason='Voice conversation ended. The microphone is off.',flush=true)=>{
    const session=current.current;current.current=null;
    if(session){
      session.cancelled=true;session.controller.abort();
      clearTimeout(session.timer);clearTimeout(session.deadline);
      session.node?.disconnect();session.source?.disconnect();
      session.stream?.getTracks().forEach(track=>track.stop());
      session.socket?.close();
      session.playback.forEach(source=>{try{source.stop()}catch{}});
      void session.context.close().catch(()=>{});
      if(flush&&session.input.trim())callback.current({role:'user',text:session.input.trim()});
      if(flush&&session.output.trim())callback.current({role:'assistant',text:session.output.trim()});
    }
    setState('idle');setDraft('');setStatus(reason);
  },[]);

  useEffect(()=>{
    const leave=()=>stop();
    const hidden=()=>{if(document.hidden)stop('Voice paused because you left this page. Start again when ready.')};
    window.addEventListener('pagehide',leave);document.addEventListener('visibilitychange',hidden);
    return()=>{window.removeEventListener('pagehide',leave);document.removeEventListener('visibilitychange',hidden);stop('',false)};
  },[stop]);

  async function start(){
    if(current.current)return;
    if(!navigator.mediaDevices?.getUserMedia||!window.AudioContext){setStatus('Live voice needs a browser with microphone support on HTTPS. You can write instead.');return}
    const session:Session={context:new AudioContext(),controller:new AbortController(),playback:new Set(),nextAudio:0,input:'',output:'',ready:false,cancelled:false};
    current.current=session;setState('connecting');setStatus('Connecting voice. Allow microphone access when asked.');
    window.speechSynthesis?.cancel();
    session.deadline=setTimeout(()=>stop('Voice could not connect in time. Try again or write instead.'),30000);
    try{
      // Resume during the button gesture so browsers permit spoken replies.
      await session.context.resume();
      const stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true},video:false});
      if(session.cancelled){stream.getTracks().forEach(track=>track.stop());return}
      session.stream=stream;
      setStatus('Microphone allowed. Connecting to Rishi…');
      const response=await fetch('/api/rishi/voice',{method:'POST',signal:session.controller.signal,headers:{'Content-Type':'application/json'},body:JSON.stringify({mode,language,history,adult:true,consent:true})});
      const data=await response.json() as {token?:string;model?:string;error?:string};
      if(!response.ok||!data.token)throw new Error(data.error||'Voice is unavailable. Try writing instead.');
      if(session.cancelled)return;
      await session.context.audioWorklet.addModule('/rishi-microphone.js');
      if(session.cancelled)return;
      const socket=new WebSocket('wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContentConstrained?access_token='+encodeURIComponent(data.token));
      session.socket=socket;
      socket.onopen=()=>socket.send(JSON.stringify({setup:{model:data.model}}));
      socket.onclose=()=>{if(current.current===session)stop('Voice disconnected. Start a new conversation or continue writing.')};
      socket.onerror=()=>{if(current.current===session)stop('Voice connection failed. Check your connection and try again.')};
      socket.onmessage=async event=>{
        try{
          const raw=typeof event.data==='string'?event.data:await (event.data as Blob).text();
          if(current.current!==session)return;
          const message=JSON.parse(raw) as {setupComplete?:object;error?:object;goAway?:object;serverContent?:LiveContent};
          if(message.error||message.goAway){stop('This voice session ended. Start again to continue.');return}
          if(message.setupComplete&&!session.ready){
            session.ready=true;clearTimeout(session.deadline);
            session.source=session.context.createMediaStreamSource(stream);
            session.node=new AudioWorkletNode(session.context,'rishi-microphone');
            session.node.port.onmessage=(event:MessageEvent<ArrayBuffer>)=>{
              if(!session.ready||current.current!==session||socket.readyState!==WebSocket.OPEN)return;
              if(socket.bufferedAmount>256000){stop('Voice connection is too slow. Try again on a stronger connection.');return}
              const bytes=new Uint8Array(event.data);
              let binary='';for(const byte of bytes)binary+=String.fromCharCode(byte);
              socket.send(JSON.stringify({realtimeInput:{audio:{data:btoa(binary),mimeType:'audio/pcm;rate=16000'}}}));
            };
            // The worklet emits silence to the destination; only Gemini replies are audible.
            session.source.connect(session.node);session.node.connect(session.context.destination);
            setState('listening');setStatus('Microphone on. Speak naturally; Rishi will answer aloud. You can interrupt.');
            socket.send(JSON.stringify({clientContent:{turns:[{role:'user',parts:[{text:history.length===0?'Open this new voice conversation with one brief warm welcome in the selected language. Introduce yourself as Rishi, an AI wellbeing guide, once, then listen. Do not repeat the introduction during later turns.':'Resume this voice conversation with one brief warm acknowledgement of the prior topic from session history, then invite the visitor to continue. Do not introduce yourself again, invent a topic or repeat the previous answer.'}]}],turnComplete:true}}));
            session.timer=setTimeout(()=>stop('The 9-minute voice session ended. Start again to continue.'),9*60*1000);
          }
          const content=message.serverContent;if(!content)return;
          if(content.interrupted){
            session.playback.forEach(source=>{try{source.stop()}catch{}});session.playback.clear();session.nextAudio=0;
            setState('listening');
          }
          if(content.inputTranscription?.text){session.input=(session.input+content.inputTranscription.text).slice(0,6000);setDraft(session.input)}
          if(content.outputTranscription?.text)session.output=(session.output+content.outputTranscription.text).slice(0,6000);
          for(const part of content.modelTurn?.parts||[]){
            if(!part.inlineData?.mimeType.startsWith('audio/pcm'))continue;
            const bytes=Uint8Array.from(atob(part.inlineData.data),char=>char.charCodeAt(0));
            const samples=new DataView(bytes.buffer);
            const rate=Number(/rate=(\d+)/.exec(part.inlineData.mimeType)?.[1]||24000);
            const buffer=session.context.createBuffer(1,Math.floor(bytes.length/2),rate);
            const channel=buffer.getChannelData(0);
            for(let i=0;i<channel.length;i++)channel[i]=samples.getInt16(i*2,true)/32768;
            const source=session.context.createBufferSource();source.buffer=buffer;source.connect(session.context.destination);
            session.playback.add(source);source.onended=()=>{session.playback.delete(source);if(current.current===session&&!session.playback.size)setState('listening')};
            const time=Math.max(session.context.currentTime+.02,session.nextAudio);source.start(time);session.nextAudio=time+buffer.duration;setState('speaking');
          }
          if(content.turnComplete){
            if(session.input.trim())callback.current({role:'user',text:session.input.trim()});
            if(session.output.trim())callback.current({role:'assistant',text:session.output.trim()});
            session.input='';session.output='';setDraft('');
          }
        }catch{if(current.current===session)stop('Voice playback failed. Try again or continue writing.')}
      };
    }catch(error){
      if(current.current!==session)return;
      stop(error instanceof DOMException&&error.name==='NotAllowedError'?'Microphone permission was denied. Allow it in browser settings or write instead.':error instanceof Error?error.message:'Voice could not start. Try again or write instead.');
    }
  }
  return {state,status,draft,start,stop,active:state!=='idle'};
}
