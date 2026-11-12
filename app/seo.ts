import pages from './seo-pages.json';
import keywords from './seo-keywords.json';
import { rituals } from './rituals-data';
import { experiences, experiencePath } from './experiences-data';

export const origin = 'https://swthastu-wellbeing.amberllama2.chatgpt.site';
type Entry = { title: string; description: string; index?: boolean; image?: string };
const summaries: Record<string, Entry> = pages;
const overrides: Record<string, Entry> = keywords;
export const pagePaths = Object.keys(pages);
export const indexablePaths = [
  ...pagePaths.filter(path => summaries[path].index !== false),
  ...rituals.map(item => '/rituals/' + item.slug),
  ...experiences.map(experiencePath),
];

export function seoEntry(path: string): Entry | undefined {
  const ritual = rituals.find(item => path === '/rituals/' + item.slug);
  const experience = experiences.find(item => path === experiencePath(item));
  const item = ritual || experience;
  const entry = summaries[path] || (item && {
    title: `${item.name} | Swthastu`,
    description: ritual
      ? `${ritual.purpose} Try this ${ritual.minutes}-minute practice with steps and care guidance.`
      : `${experience!.line} Explore this ${experience!.kind.toLowerCase()} concept, with care guidance and availability confirmed by enquiry.`,
  });
  return entry && { ...entry, ...overrides[path], image: item?.image || '/images/story-0.webp' };
}
