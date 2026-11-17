'use client';
import Link from 'next/link';
import ContactFields from './ContactFields';
import ProgrammeFields from './ProgrammeFields';
import LogisticsFields from './LogisticsFields';
import Turnstile from './Turnstile';
import {useCorporateEnquiry} from '../../../hooks/use-corporate-enquiry';

export default function CorporateForm({siteKey,ready}:{siteKey:string;ready:boolean}){
  const form=useCorporateEnquiry();
  if(form.reference)return <div className="corporate-form" role="status"><span className="eyebrow">ENQUIRY SUBMITTED</span><h2>Thank you for<br/>thinking of your team.</h2><p>Your enquiry has been accepted for email delivery to swthastu@gmail.com. We’ll use your contact details to discuss the next steps.</p><p className="smallnote">Reference: {form.reference}<br/>Availability and booking are confirmed separately.</p><Link className="textbutton" href="/retreats">Explore our retreats</Link></div>;
  return <form className="corporate-form" onSubmit={form.submit} aria-busy={form.busy}><h2>Tell us about your team.</h2><p className="smallnote">Fields marked * are required. Your budget is an estimate for the whole group.</p><ContactFields/><ProgrammeFields/><LogisticsFields/><div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div><label className="corporate-check"><input type="checkbox" name="consent" required/> <span>I agree to share these details with Swthastu by email so the team can respond to this enquiry. This is not marketing consent. <Link className="underline" href="/privacy">Privacy & care</Link> *</span></label>{ready?<Turnstile siteKey={siteKey} resetKey={form.resetKey} onToken={form.setToken}/>:<p role="status">Online enquiries are temporarily unavailable. Please <a className="underline" href="mailto:swthastu@gmail.com">email swthastu@gmail.com</a>.</p>}{form.error&&<p role="alert" className="corporate-error">{form.error}</p>}<button className="button" type="submit" disabled={!ready||!form.token||form.busy}>{form.busy?'Sending your enquiry…':'Send corporate enquiry'}</button><p className="smallnote corporate-delivery">Sent to swthastu@gmail.com. No payment or booking commitment.</p></form>;
}
