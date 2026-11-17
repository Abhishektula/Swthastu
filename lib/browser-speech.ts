export type SpeechResult={isFinal:boolean;[index:number]:{transcript:string}};
export type SpeechEvent={resultIndex:number;results:ArrayLike<SpeechResult>};
export interface SpeechRecognition {
  lang:string;
  continuous:boolean;
  interimResults:boolean;
  onresult:((event:SpeechEvent)=>void)|null;
  onerror:(()=>void)|null;
  onend:(()=>void)|null;
  start():void;
  stop():void;
  abort():void;
}
type Constructor=new()=>SpeechRecognition;
export function speechConstructor(){
  if(typeof window==='undefined')return undefined;
  const browser=window as Window & {SpeechRecognition?:Constructor;webkitSpeechRecognition?:Constructor};
  return browser.SpeechRecognition||browser.webkitSpeechRecognition;
}
