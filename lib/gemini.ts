type Part={text:string}|{inlineData:{mimeType:string;data:string}};
type Content={role:string;parts:Part[]};

export async function geminiReply(config:Cloudflare.Env,instructions:string,contents:Content[]){
  const model=config.GEMINI_MODEL||'gemini-3.8-flash';
  const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,{
    method:'POST',signal:AbortSignal.timeout(25000),
    headers:{'x-goog-api-key':config.GEMINI_API_KEY!,'Content-Type':'application/json'},
    body:JSON.stringify({systemInstruction:{parts:[{text:instructions}]},contents,generationConfig:{maxOutputTokens:1200}}),
  });
  if(!response.ok)throw new Error('Gemini unavailable');
  const data=await response.json() as {candidates?:{content?:{parts?:{text?:string;thought?:boolean}[]}}[]};
  const reply=data.candidates?.[0]?.content?.parts?.filter(p=>!p.thought).map(p=>p.text||'').join('\n').trim();
  if(!reply)throw new Error('Empty Gemini response');
  return reply;
}
