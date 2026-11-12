import Site from '../site';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {rituals} from '../rituals-data';
import {pageMetadata} from '../seo-metadata';
import StructuredData from '../seo-structured-data';
type Props={params:Promise<{slug?:string[]}>;searchParams:Promise<{practice?:string|string[]}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug=[]}=await params;return pageMetadata('/'+slug.join('/'))||notFound()}
export default async function Page({params,searchParams}:Props){const {slug=[]}=await params;const path='/'+slug.join('/');if(!pageMetadata(path))notFound();const {practice}=await searchParams;const initialJournalPrompt=path==='/sanctuary'&&typeof practice==='string'?rituals.find(r=>r.slug===practice)?.prompt||'':'';return <><StructuredData path={path}/><Site initialPath={path} initialJournalPrompt={initialJournalPrompt}/></>}
