import Site from '../site';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {rituals} from '../rituals-data';
import {experienceBySlug} from '../experiences-data';
const pages=['/','/about','/journeys','/retreats','/coaches','/living-well','/workshops','/rituals','/gatherings','/calendar','/providers','/rishi','/sanctuary','/partners','/privacy','/care-standards','/at-work','/at-work/eap'];
type Props={params:Promise<{slug?:string[]}>;searchParams:Promise<{practice?:string|string[]}>};
const origin='https://swthastu-wellbeing.amberllama2.chatgpt.site';
function detail(slug:string[]){return slug.length===2?(slug[0]==='rituals'?rituals.find(r=>r.slug===slug[1]):experienceBySlug(slug[0],slug[1])):undefined}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug=[]}=await params;const item=detail(slug),path='/'+slug.join('/');const title=item?item.name+' | Swthastu':path==='/living-well'?'Workshops & rituals | Swthastu':path==='/rituals'?'64 everyday rituals | Swthastu':path==='/workshops'?'Guided workshops | Swthastu':path==='/gatherings'?'Gatherings & festivals | Swthastu':path==='/retreats'?'Retreats & journeys | Swthastu':'Swthastu | Wellbeing, wherever you are';const description=item?('purpose' in item?item.purpose:item.summary):'Choose thoughtful workshops, everyday rituals, retreat journeys and gatherings by your needs, time and preferred support.';return {title,description,alternates:{canonical:origin+path},openGraph:{title,description,url:origin+path,siteName:'Swthastu',...(item?{images:[{url:origin+item.image,alt:item.name}]}:{})}}}
export default async function Page({params,searchParams}:Props){const {slug=[]}=await params;const path='/'+slug.join('/');if(!pages.includes(path)&&!detail(slug))notFound();const {practice}=await searchParams;const initialJournalPrompt=path==='/sanctuary'&&typeof practice==='string'?rituals.find(r=>r.slug===practice)?.prompt||'':'';return <Site initialPath={path} initialJournalPrompt={initialJournalPrompt}/>}
