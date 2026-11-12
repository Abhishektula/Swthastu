import type { Metadata } from 'next';
import { origin, seoEntry } from './seo';

export function pageMetadata(path: string): Metadata | undefined {
  const entry = seoEntry(path);
  if (!entry) return;
  const { title, description, image, index = true } = entry;
  return {
    title: { absolute: title }, description,
    alternates: { canonical: origin + path },
    robots: { index, follow: true, googleBot: { index, follow: true, 'max-image-preview': 'large' } },
    openGraph: { type: 'website', title, description, url: origin + path, siteName: 'Swthastu', images: [{ url: origin + image, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [origin + image] },
  };
}
