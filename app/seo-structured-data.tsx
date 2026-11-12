import { origin, seoEntry } from './seo';

export function serializeStructuredData(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export default function StructuredData({ path }: { path: string }) {
  const entry = seoEntry(path);
  if (!entry || entry.index === false) return null;
  const url = origin + path;
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', item: origin + '/' }];
  if (segments.length > 1) {
    const parent = '/' + segments.slice(0, -1).join('/');
    breadcrumbs.push({ name: seoEntry(parent)!.title.split(' | ')[0], item: origin + parent });
  }
  if (segments.length) breadcrumbs.push({ name: entry.title.split(' | ')[0], item: url });
  const graph: object[] = [{
    '@type': 'WebPage', '@id': url + '#webpage', url,
    name: entry.title, description: entry.description,
    isPartOf: { '@id': origin + '/#website' }, inLanguage: 'en',
  }];
  if (path === '/') graph.push(
    { '@type': 'Organization', '@id': origin + '/#organization', name: 'Swthastu', url, logo: origin + '/images/logo.webp' },
    { '@type': 'WebSite', '@id': origin + '/#website', name: 'Swthastu', url, publisher: { '@id': origin + '/#organization' } },
  );
  if (segments.length) graph.push({
    '@type': 'BreadcrumbList', itemListElement: breadcrumbs.map((item, index) => ({ '@type': 'ListItem', position: index + 1, ...item })),
  });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData({ '@context': 'https://schema.org', '@graph': graph }) }} />;
}
