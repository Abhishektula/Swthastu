import {guard,json} from '../security';
import {getCloudflareEnv} from '../../../lib/cloudflare';
import {handleCorporate} from '../../../lib/corporate-handler.mjs';

export async function POST(request:Request) {
  const rejected=guard(request);
  if(rejected)return rejected;
  try {return await handleCorporate(request,getCloudflareEnv());}
  catch {return json({error:'Online enquiries are temporarily unavailable. Please email swthastu@gmail.com.'},503);}
}
