import {z} from 'zod';
import {workNeeds,headcounts,workRoles,workModes} from './work-options';
export const workEnquirySchema=z.object({name:z.string().trim().min(2).max(100),email:z.string().email().max(200),company:z.string().trim().min(2).max(120),role:z.enum(workRoles),headcount:z.enum(headcounts),locations:z.string().trim().min(2).max(120),mode:z.enum(workModes),needs:z.array(z.enum(workNeeds)).min(1).max(6),consent:z.literal(true),adult:z.literal(true)}).strict();
