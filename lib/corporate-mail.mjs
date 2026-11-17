import {corporateLabels} from './corporate-options.mjs';

export function corporateReady(env) {
  return Boolean(env.RESEND_API_KEY && env.CORPORATE_FROM_EMAIL && env.TURNSTILE_SITE_KEY && env.TURNSTILE_SECRET_KEY);
}

export async function sendCorporate(data,id,env,fetcher=fetch) {
  const text = ['Corporate booking enquiry',`Reference: ${id}`,...Object.entries(corporateLabels).map(([key,label])=>`${label}: ${Array.isArray(data[key])?data[key].join(', '):typeof data[key]==='boolean'?(data[key]?'Yes':'No'):data[key]||'Not specified'}`),'Consent: contact me about this enquiry.','This is an enquiry, not a confirmed booking.'].join('\n\n');
  const digest = await crypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify(data)));
  const hash = Array.from(new Uint8Array(digest),byte=>byte.toString(16).padStart(2,'0')).join('');
  const response = await fetcher('https://api.resend.com/emails',{
    method:'POST',signal:AbortSignal.timeout(15000),
    headers:{Authorization:`Bearer ${env.RESEND_API_KEY}`,'Content-Type':'application/json','Idempotency-Key':`corporate/${id}/${hash}`},
    body:JSON.stringify({from:env.CORPORATE_FROM_EMAIL,to:['swthastu@gmail.com'],reply_to:data.email,subject:`Corporate booking enquiry — ${data.company}`,text}),
  });
  if (!response.ok || !(await response.json()).id) throw new Error('Mail service unavailable');
}
