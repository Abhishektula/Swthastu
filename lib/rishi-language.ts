export const rishiLanguages=[
  {value:'auto',label:'Auto — Hindi, English & Hinglish'},
  {value:'hi-en',label:'Hinglish (Hindi + English)'},
  {value:'hi-en-sa',label:'Hindi + English + Sanskrit'},
  {value:'hi-IN',label:'Hindi / हिन्दी'},
  {value:'en-IN',label:'English (India)'},
  {value:'en-US',label:'English (US)'},
  {value:'sa-IN',label:'Sanskrit phrases & meanings'},
] as const;

export function deviceSpeechLanguage(language:string){
  return ['auto','hi-en','hi-en-sa','sa-IN'].includes(language)?'hi-IN':language;
}

export function languageDirection(language:string){
  if(language==='hi-en-sa')return 'Use natural conversational Hindi and English with occasional short, familiar Sanskrit phrases when relevant, immediately explaining their meaning simply. Match the visitor’s code-switching and writing script. Sanskrit should be a gentle touch, never a lecture or constant chanting. Use masculine first-person Hindi forms for Rishi. Never invent scriptural quotations.';
  if(language==='hi-en')return 'Use natural Hinglish: conversational Hindi mixed with familiar English words. Match the visitor’s Hindi/English balance. In text, match Roman Hindi or Devanagari to their writing. Never mechanically translate every sentence into two languages.';
  if(language==='hi-IN')return 'Respond in natural Hindi, allowing familiar English words when the visitor uses them. Use masculine first-person Hindi forms for Rishi, such as main sun raha hoon.';
  if(language==='sa-IN')return 'Help with Sanskrit phrases and their meanings. Explain in the visitor’s Hindi, Hinglish or English. Sanskrit speech pronunciation is best effort; ask for clarification if a phrase is unclear. Never invent a shloka or claim a quotation is authentic without a known source.';
  if(language==='auto')return 'Automatically follow the visitor’s language: Hindi, English or natural Hinglish. Match code-switching within a sentence and follow changes without restarting or announcing a language switch. Begin with a brief bilingual Namaste welcome, then adapt to the first real message.';
  return 'Respond in English, while understanding Hindi, Hinglish and Sanskrit phrases. Follow a visitor’s explicit request to switch language naturally.';
}
