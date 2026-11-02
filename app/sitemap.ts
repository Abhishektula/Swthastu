import type {MetadataRoute} from 'next';
import {rituals} from './rituals-data';
import {experiences,experiencePath} from './experiences-data';
export default function sitemap():MetadataRoute.Sitemap{const origin='https://swthastu-wellbeing.amberllama2.chatgpt.site';return ['','/about','/journeys','/living-well','/workshops','/rituals','/retreats','/gatherings','/coaches','/calendar','/at-work','/at-work/eap','/partners','/care-standards','/privacy',...experiences.map(experiencePath),...rituals.map(r=>'/rituals/'+r.slug)].map(path=>({url:origin+path,changeFrequency:'monthly',priority:path===''?1:path.split('/').length===2?.8:.6}))}
