'use client';
import {useEffect} from 'react';
import {Mic,PhoneOff} from 'lucide-react';
import {useLiveVoice} from '../../hooks/use-live-voice';

type Message={role:'user'|'assistant';text:string};
export default function LiveVoicePanel({ready,adult,busy,mode,language,history,onMessage,onActive}:{ready:boolean;adult:boolean;busy:boolean;mode:string;language:string;history:Message[];onMessage:(message:Message)=>void;onActive:(active:boolean)=>void}){
  const voice=useLiveVoice({mode,language,history,onMessage});
  const {active,stop}=voice;
  useEffect(()=>{onActive(active)},[active,onActive]);
  useEffect(()=>{if(!adult&&active)stop()},[adult,active,stop]);
  return <div className="voicepanel livevoice">
    <h3>Speak to Rishi</h3>
    <p>Speak naturally in Hindi, English or Hinglish and hear Rishi respond in a warm male voice. You can also explore Sanskrit phrases and their meanings. You can interrupt or end the call at any time.</p>
    <p className="smallnote">By starting a call, you allow microphone audio and recent chat to be sent to Google Gemini and played back as spoken replies. Your browser will ask for microphone permission. Audio is shared immediately; end the call to stop sharing. Swthastu does not save recordings or transcripts in its database. Google’s processing and retention policies apply.</p>
    {!adult&&<p className="smallnote">Confirm you are 18 or older above to start a voice conversation.</p>}
    <button className={'button '+(voice.active?'recording':'')} disabled={!voice.active&&(!ready||!adult||busy)} onClick={()=>voice.active?voice.stop():void voice.start()}>
      {voice.active?<PhoneOff size={18}/>:<Mic size={18}/>} {voice.active?'End voice conversation':'Speak to Rishi'}
    </button>
    {!ready&&<p className="smallnote">Live voice is not connected yet. You can still write or dictate a message below.</p>}
    <p role="status" aria-live="polite" className="smallnote">{voice.state==='speaking'?'Rishi is speaking. You can interrupt.':voice.status}</p>
    {voice.draft&&<p className="smallnote">You: {voice.draft}</p>}
    <p className="smallnote">Use headphones for clear audio. A call lasts up to 9 minutes. Leaving this page turns the microphone off.</p>
  </div>;
}
