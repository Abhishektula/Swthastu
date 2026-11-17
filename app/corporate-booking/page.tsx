import {pageMetadata} from '../seo-metadata';
import StructuredData from '../seo-structured-data';
import CorporateForm from './_components/CorporateForm';
import {getCloudflareEnv} from '../../lib/cloudflare';
import {corporateReady} from '../../lib/corporate-mail.mjs';

export const dynamic='force-dynamic';
export const metadata=pageMetadata('/corporate-booking');
export default function CorporateBookingPage(){
  let siteKey='',ready=false;
  try {const env=getCloudflareEnv();siteKey=env.TURNSTILE_SITE_KEY||'';ready=corporateReady(env);} catch {}
  return <><StructuredData path="/corporate-booking"/><div className="pageintro"><span className="eyebrow">WELLBEING FOR YOUR TEAM</span><h1>Make space for<br/><em>a healthier workplace.</em></h1><p>From a mindful pause at the office to a retreat together. Tell us what your team needs, and we’ll help shape the experience.</p></div><section className="section compact corporate-layout" aria-label="Corporate booking enquiry"><aside className="corporate-aside"><span className="eyebrow">A PROGRAMME THAT FITS</span><h2>Your team.<br/>Your rhythm.</h2><p>Choose your interests, share the practical details, and leave room for us to suggest what works.</p><ol><li>Share your brief</li><li>Discuss programmes and availability</li><li>Agree the proposal before booking</li></ol><p className="smallnote">No payment is required. Sending an enquiry does not confirm a booking.</p><a className="textbutton" href="mailto:swthastu@gmail.com">swthastu@gmail.com</a></aside><CorporateForm siteKey={siteKey} ready={ready}/></section></>;
}
