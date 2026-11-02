import {z} from 'zod';
import {guard,json} from '../security';
import {getDb} from '../../../db';
import {enquiries} from '../../../db/schema';
const schema=z.object({name:z.string().trim().min(2).max(100),email:z.string().email().max(200),interest:z.string().min(2).max(200),date:z.string().max(40),timezone:z.string().max(100),message:z.string().max(1500),consent:z.literal(true),adult:z.literal(true)});
export async function POST(request:Request){const rejected=guard(request);if(rejected)return rejected;try{const raw=await request.text();if(raw.length>10000)return json({error:'Please shorten your request.'},413);const data=schema.safeParse(JSON.parse(raw));if(!data.success)return json({error:'Please check your details and consent.'},400);const id=crypto.randomUUID();const {consent,adult,...values}=data.data;await getDb().insert(enquiries).values({id,...values,consentVersion:'enquiry-v2-adult-2026-10-19',createdAt:new Date().toISOString()});return json({id,status:'requested'});}catch{return json({error:'Your request could not be saved. Please email swathastu@gmail.com.'},503);}}
