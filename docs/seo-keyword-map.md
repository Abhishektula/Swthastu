# SEO implementation and keyword map

Source: `D:\swthastu\Swthastu Keywords.xlsx`, `Sheet1`, inspected 2026-11-11. The workbook contains estimated volume and difficulty ranges without a research source or date. Treat these as supplied planning estimates, not verified search demand. The source workbook is unchanged and is not shipped in public assets.

## Search intent mapped to existing content

| Source cells | Search intent | Destination | Implementation |
| --- | --- | --- | --- |
| A7 | wellness retreat for families | `/retreats`, `/retreats/kutumbh` | Titles and descriptions describe retreat concepts and enquiry-based availability. |
| A8:A9 | how to set a sankalpa; sankalpa meaning | `/rituals/one-honest-sankalpa` | Instructional title and description explain an achievable intention, matching the existing practice. |
| A10 | mauna silent practice | `/rituals/mauna-moments` | Title and description identify the optional eight-minute practice. |
| A11 | daily gratitude journal prompts | `/rituals/gratitude-in-three-lines`, `/rituals` | Public practice targets the query; the personal journal remains noindex. |
| A14 | family gratitude activities | `/retreats/kutumbh` | Family connection is supported. Exact gratitude-activity targeting is deferred until the page includes a suitable family practice. |
| A15 | intergenerational bonding activities | `/rituals/a-story-worth-keeping` | Title and description focus on the existing consent-based storytelling activity. |
| A19:A20 | online stress management coach; online mindfulness coaching | `/coaches` | Mindfulness coaching intent is supported; describe enquiries and format preferences, not a live directory or confirmed appointment. Avoid treatment claims. |
| A21:A22, A25 | corporate wellness program; mindfulness workshop for employees; employee stress management workshop | `/at-work` | Target corporate wellbeing workshops and programme scoping. Avoid claiming a specific employee workshop is bookable before its scope is agreed. |
| A3:A6 | silence, mindfulness, Himalaya and digital detox retreat intent | `/retreats/inner-himalaya` | Use supported quiet and reflection language. No geographic Himalayan retreat, confirmed Indian location or digital-detox programme is asserted. |

## Deferred terms and content gaps

| Source cells | Terms | Reason |
| --- | --- | --- |
| A2 | ayurvedic wellness retreat | No verified Ayurvedic clinical retreat offering or practitioner credentials on the matching pages. Existing Ayurveda-informed education is not a substitute. |
| A12 | pranayama for stress relief | Existing rituals advise natural breathing. No matching pranayama instruction or substantiated therapeutic outcome. |
| A13 | two minute mindfulness exercises | The shortest published ritual is five minutes. Do not change practice timings for a search term. |
| A16:A18 | AI journaling app; AI mindfulness coach; AI wellness companion | My Space is a private browser journal; Rishi can operate as a guided preview. Neither is advertised as a fully operational AI product. |
| A23:A24, A26:A28 | UK, Dubai and UAE services | No verified local delivery footprint, venue, dates or local service page. |
| B32:B44 | US city keywords | Deferred pending verified New York, Los Angeles, Bay Area, Austin or New Jersey services and useful local content. |
| B48:B56 | UK city keywords | Deferred pending verified London, Manchester, Birmingham, Leicester or Scotland services and useful local content. |
| B60:B67 | UAE city keywords | Deferred pending verified Dubai, Abu Dhabi or Sharjah services and useful local content. |
| B71:B77 | other market tests | Deferred pending verified Toronto, Singapore, Sydney or Doha services. Estimated opportunity alone does not establish local availability. |

No keyword meta tags, artificial city pages, fabricated reviews, Event offers, clinical schema or unsupported prices were added. This follows Google's guidance on [descriptive titles](https://developers.google.com/search/docs/appearance/title-link), [page-specific snippets](https://developers.google.com/search/docs/appearance/snippet) and [accurate structured data](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## Technical implementation

- `app/seo-pages.json` owns base-page copy and indexing decisions. `app/seo-keywords.json` owns selected workbook-driven detail overrides. Other detail pages derive unique copy from their actual practice or experience.
- `app/seo.ts` owns the existing production origin and shared route inventory. Change this origin when moving to a verified custom domain; canonical URLs, social URLs, schema and sitemap share it.
- Query parameters do not create new canonical URLs. Missing routes retain HTTP 404 and noindex behavior.
- All indexable routes appear once in the sitemap. No invented last-modified dates are emitted.
- Personal journal, Rishi and provider-account screens are noindex and omitted from the sitemap. Crawlers may access those pages to read the directive; robots.txt is not a privacy or authentication boundary.
- JSON-LD uses WebPage, homepage WebSite/Organization, and breadcrumbs. Script serialization escapes `<` to prevent closing-script injection. Social metadata uses real existing public images.
- No additional dependencies were installed.

## Production verification

Run `pnpm build:next`, start the built app on port 3100, then run `node scripts/verify-seo.mjs`. An alternative local origin can be passed as its first argument. The checks inspect rendered server responses for all 106 routes: unique titles and descriptions, one H1, canonical URLs, Open Graph/Twitter consistency, real image assets, parseable structured data, indexing decisions, sitemap membership, query handling and 404s. Existing catalogue and wellbeing checks remain applicable.

This task prepares source changes; it does not publish them. Full Cloudflare packaging previously failed on Windows at OpenNext symlink creation and still needs verification in the deployment build environment. After publishing, validate the public origin, submit `/sitemap.xml` in the verified Search Console property and review rich-result and indexing reports. Search engines may rewrite titles/snippets; metadata does not guarantee ranking or inclusion.
