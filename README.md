# Swthastu

Wellbeing website built with Next.js App Router, React, TypeScript and Tailwind CSS. Cloudflare Workers serves pages and APIs through OpenNext; D1 stores enquiries and provider applications. This repository incorporates the integrations from the sibling `swthastu server/swthastu` checkout.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before changing or committing code. See [production operations](docs/production.md) for release gates and recovery.

## Local development

Use Node.js >=22.13.0 and the pnpm version pinned in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm db:migrate:local
pnpm dev
```

Open http://127.0.0.1:3000. Local D1 state is stored in ignored `.wrangler/state`. Copy `.dev.vars.example` to `.dev.vars` for optional local Worker secrets. Never commit real keys or private visitor data.

## Verification

```sh
pnpm check
pnpm build:cloudflare
pnpm test:production
```

`check` runs ESLint, TypeScript, journal encryption/privacy checks, catalogue checks, and security/integration tests. `test:production` bundles the Worker with Wrangler's dry run, then exercises rendered routes and API persistence using an ephemeral local database. It does not deploy or contact the live site.

`pnpm build` builds native Next.js output. `pnpm start` serves it on port 3000; database APIs need Cloudflare bindings, so use `pnpm preview` for complete runtime testing. `preview` builds the Cloudflare bundle and starts a local Worker. Rendered SEO checks can run against it with `pnpm test:seo http://127.0.0.1:8787`.

The `Verify` GitHub Actions workflow performs the checks and Cloudflare build on Linux. It does not need production credentials or deploy the application. Use Linux CI or WSL if OpenNext encounters Windows-specific build limitations.

## Deployment

`wrangler.jsonc` is the authoritative Cloudflare configuration. It retains the server checkout's Worker, account, D1 database and domain targets. Confirm these targets before any remote operation. The old Sites build/package scripts and placeholder `wrangler.json` have been removed; `.openai/hosting.json` is retained as historical hosting identity and is not used by the Cloudflare commands.

1. Configure Cloudflare Access as below and run `pnpm deploy:check`.
2. Authenticate Wrangler locally or supply `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` through the CI secret store.
3. Back up existing data and review the remote database target. Apply migrations explicitly with `pnpm db:migrate:remote`.
4. Run the verification commands above, then `pnpm deploy`.
5. Complete the live checks in [production operations](docs/production.md).

`deploy` validates binding configuration, lints, type-checks, runs focused tests, builds through OpenNext, runs local production checks and uploads the Worker. It does not run remote migrations automatically. Missing Access settings block deployment.

## Provider authentication

Configure one Cloudflare Access self-hosted application for `/providers`, `/providers/*`, `/api/providers`, and `/api/providers/*` on every public hostname, including the Workers subdomain if enabled. Use an Allow policy and an identity provider; do not bypass protection. Set these non-secret values in `wrangler.jsonc`:

```json
"vars": {
  "ACCESS_TEAM_DOMAIN": "https://your-team.cloudflareaccess.com",
  "ACCESS_AUD": "your-64-character-application-audience"
}
```

The server verifies the JWT signature, issuer, audience, expiry and identity. Applications remain scoped to the verified user. Local provider APIs fail closed without a valid identity. Existing ChatGPT Sites account IDs differ from Access IDs; migrating provider ownership requires an explicit verified mapping.

## Corporate booking enquiries

`/corporate-booking` submits a validated team brief through Turnstile and Resend to `swthastu@gmail.com`. The browser cannot override the recipient. Reply-To is the organiser's email; retries reuse an idempotency key for the same brief.

- Configure `CORPORATE_FROM_EMAIL` with a verified Resend sender domain and `TURNSTILE_SITE_KEY` with a widget valid for every serving hostname.
- Store `RESEND_API_KEY` and `TURNSTILE_SECRET_KEY` using Wrangler secret prompts.
- Send a controlled live enquiry after deployment and verify inbox receipt and Reply-To. Simulated mail tests do not prove delivery.

Without configuration, the page offers direct email contact. Corporate briefs are not stored in D1. General enquiries and workplace enquiries remain in D1 and do not send email notifications.

## Rishi text and voice

Rishi supports written conversation, browser dictation, and Gemini live voice. Set `GEMINI_API_KEY` as a Worker secret to enable Gemini. Optional server-only settings are `GEMINI_MODEL` and `GEMINI_LIVE_MODEL`; verify model availability and quota in the key's project. `OPENAI_API_KEY` and `OPENAI_MODEL` provide the legacy text provider when Gemini is not configured.

```sh
pnpm exec wrangler secret put GEMINI_API_KEY --config wrangler.jsonc
```

Use the same secret prompt for other credentials. Never use `NEXT_PUBLIC_` for keys. `/api/rishi` reports configured capabilities, not key validity or quota. Without AI credentials, guided preview remains available.

Adult confirmation and sharing consent precede model requests. The live endpoint issues short-lived, constrained tokens and keeps the permanent key on the server. Calls stop after nine minutes; microphone capture stops when the call ends, the page is hidden, navigation occurs, or a connection fails. Check these behaviors on real devices before release. Conversations are temporary on the page; infrastructure and model providers may retain operational data.

## Project layout

- `app/`: pages, APIs, catalogue, metadata and existing editorial styles.
- `components/site/`, `hooks/`, `lib/`: shared UI, browser behavior and integrations.
- `worker/index.ts`: request limits, identity-header stripping and response headers.
- `db/`, `drizzle/`: D1 schema and versioned migrations.
- `scripts/tests/`: local security and integration tests with simulated providers.

The catalogue includes 64 rituals, 5 workshops, 13 retreats and 6 gatherings. The journal keeps temporary text in memory and saves only explicitly requested encrypted copies in the browser. Real availability, fees, provider approval and bookings require human confirmation.

Framework references: [OpenNext setup](https://opennext.js.org/cloudflare/get-started), [Access JWT validation](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/authorization-cookie/validating-json/), [D1 migrations](https://developers.cloudflare.com/d1/reference/migrations/).
