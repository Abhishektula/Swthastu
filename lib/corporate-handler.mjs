import {validateCorporate} from './corporate-validation.mjs';
import {corporateReady,sendCorporate} from './corporate-mail.mjs';

const json = (body,status)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
export async function handleCorporate(request,env,fetcher=fetch) {
  if (!corporateReady(env)) return json({error:'Online enquiries are temporarily unavailable. Please email swthastu@gmail.com.'},503);
  let raw,data;
  try {
    const text = await request.text();
    if (new TextEncoder().encode(text).length > 12000) return json({error:'Please shorten your enquiry.'},413);
    raw = JSON.parse(text);
    data = validateCorporate(raw);
    if (!/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i.test(raw.requestId) || typeof raw.token !== 'string' || !raw.token || raw.token.length > 2048) throw new Error('Invalid verification');
  } catch { return json({error:'Please check your details, programme selections and consent.'},400); }
  try {
    const response = await fetcher('https://challenges.cloudflare.com/turnstile/v0/siteverify',{
      method:'POST',signal:AbortSignal.timeout(10000),
      body:new URLSearchParams({secret:env.TURNSTILE_SECRET_KEY,response:raw.token}),
    });
    const verified = await response.json();
    if (!response.ok || verified.success !== true || verified.action !== 'corporate-booking' || verified.hostname !== new URL(request.url).hostname) return json({error:'Verification expired or failed. Please complete it again.'},400);
    await sendCorporate(data,raw.requestId,env,fetcher);
    return json({id:raw.requestId,status:'accepted'},200);
  } catch { return json({error:'We could not confirm your enquiry was sent. Please retry or email swthastu@gmail.com.'},503); }
}
