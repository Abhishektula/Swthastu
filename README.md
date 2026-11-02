# Swthastu

Source repository for the Swthastu wellbeing website.

## Next.js + Tailwind CSS

Official Next.js App Router with React, TypeScript and Tailwind CSS v4. OpenNext packages the Next.js application for the existing Cloudflare Workers host. The website retains its pages, imagery, EAP enquiries, provider applications, private browser journal and Rishi endpoint.

## Development

Use Node.js 22.13 or newer and the pinned pnpm version in package.json.

- `pnpm install --frozen-lockfile`
- `pnpm dev` — Next.js development server, with local Cloudflare bindings.
- `pnpm typecheck`
- `pnpm build:next` — standard Next.js production build.
- `pnpm start` — standard Next.js production server. Database endpoints require Cloudflare bindings; use the Worker preview for complete local integration testing.
- `pnpm build` — Next.js production build, OpenNext conversion and Sites deployment package in dist.
- `pnpm preview:worker` — local preview of the production Worker.

For local D1, apply migrations with `pnpm exec wrangler d1 migrations apply DB --local`. The UUID in wrangler.json is a local placeholder; the existing Sites deployment provisions the real DB binding from .openai/hosting.json. Do not deploy that placeholder to a separate Cloudflare account; configure that account's own database first.

Optional Rishi configuration: OPENAI_API_KEY and OPENAI_MODEL are server-only environment variables. Without a key, the existing guided-preview mode remains available. Never use NEXT_PUBLIC_ for credentials. Do not commit .env or .dev.vars files.

Tailwind theme and utilities are imported through app/globals.css and compiled using @tailwindcss/postcss. Existing editorial styles are preserved in the components layer; Tailwind utilities can override them. Preflight is omitted to preserve the established typography and form defaults.

Publishing uses the existing project identity and database migrations. The build copies hosting metadata and migrations into dist/.openai, preserving the previous Sites build integration without a Vite plugin. No Vite or Vinext runtime is used.

## Published experience collection

- 5 workshops: affirmations, forgiveness and boundaries, living with grief, self-love, and working with negative thoughts.
- 64 ritual detail pages with practice steps, suitability, care guidance and reflection prompts.
- 13 retreat journeys and 6 gatherings, each connected to its relevant practices.
- Search and filters by need, time, support and programme; private journal prompt handoff; saved retreats; consent-based enquiries.
- A distinct editorial image for every experience detail page, plus canonical metadata and a sitemap.

The public site is https://swthastu-wellbeing.amberllama2.chatgpt.site. This source import corresponds to published version 6, source commit `5264f26f95bfc9f9063cb1d2049d8fd197243662`. Build caches and local credentials are excluded.

## Verification

After installing dependencies:

```sh
pnpm typecheck
node scripts/verify-catalogue.mjs
node scripts/verify-wellbeing.mjs
pnpm build
node scripts/verify-production.mjs
```

The production verification uses an ephemeral local database. It checks all 88 detail routes, their metadata and image references, the sitemap, missing-page responses, the journal prompt handoff, and consent-gated experience and EAP enquiries. It does not submit test enquiries to the live website.
