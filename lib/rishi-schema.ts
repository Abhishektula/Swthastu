import {z} from 'zod';

export const sessionSchema=z.object({
  mode:z.enum(['listen','reflect']),
  language:z.enum(['auto','hi-en','hi-en-sa','en-IN','en-US','hi-IN','sa-IN']),
  consent:z.literal(true),
  adult:z.literal(true),
  history:z.array(z.object({role:z.enum(['user','assistant']),text:z.string().max(6000)})).max(80).default([]),
});
export const messageSchema=sessionSchema.extend({message:z.string().trim().min(1).max(6000)});
