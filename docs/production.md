# Production operations

## Source and deployment target

The application incorporates server code from the sibling
`swthastu server/swthastu` checkout at commit `1be670e`. Its Git metadata,
credentials, local runtime state and build caches were not imported. This
repository's contribution policy remains authoritative.

Use `wrangler.jsonc` for the existing `swthastu` Worker, D1 binding and
`swthastu.com`/`www.swthastu.com` domains. Verify account and database IDs against
the intended account before remote migrations or deployment. Never point a test
run at the production database.

## Release gate

- Run `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build:cloudflare`,
  and `pnpm test:production` from a clean checkout. Review lint warnings.
- Require the GitHub Actions `Verify` workflow's `verify` job and pull requests
  in default-branch protection. This file cannot configure account settings.
- Set `ACCESS_TEAM_DOMAIN` and `ACCESS_AUD`, then run `pnpm deploy:check`.
  Empty values deliberately block deployment. Verify Access policies on every
  serving hostname, including the Workers subdomain, or disable unused hostnames.
- Back up D1 and apply outstanding migrations using `pnpm db:migrate:remote`.
  Database ownership cannot be verified by a syntactically valid ID alone.
- Configure secrets in Cloudflare, using the prompts in README. Corporate mail
  and live AI remain unavailable until their providers and secrets are configured.
- Record the source commit, deployment version, migration state and test results
  in the release PR. Do not include credentials or visitor data.

## Live acceptance

After an authorised deployment, verify the following against the intended host:

1. Home, catalogue details, corporate booking and missing-page routes render;
   canonical URLs, sitemap and robots use `https://swthastu.com`.
2. Unsigned provider API calls return 401. A permitted provider can sign in,
   submit, view and withdraw their own application. A second account cannot read
   or withdraw it. Check that existing account ownership survives any mapping.
3. A controlled enquiry persists in the correct database and returns a reference.
   Missing consent is rejected. Remove the controlled test records afterward.
4. Corporate Turnstile passes on both domains; an authorised controlled enquiry
   reaches the intended inbox with correct fields and Reply-To. Confirm delivery
   in Resend as well as the inbox; API acceptance alone is insufficient.
5. Rishi text works with the intended model and quota. Voice requests microphone
   permission, responds and handles interruption. Ending the call, hiding the
   page and navigation release the microphone. Check Hindi/English on a real
   mobile device. Never use real private journal text for testing.
6. Check affected screens at 360, 768 and 1280 pixels, keyboard navigation,
   visible focus and reduced-motion behavior. Run rendered SEO checks against
   the local Worker before assessing the public host.

## Monitoring and recovery

Worker logs and traces are enabled in `wrangler.jsonc`. Review 5xx responses,
rate-limit rejections, D1 failures, mail-provider delivery failures and AI quota
errors after release. Keep request bodies, conversations, credentials and personal
data out of logs. Establish a retention policy and operational owner before
collecting production enquiries.

If a release breaks behavior, select the prior verified Worker deployment in
Cloudflare and roll back its code. Database migrations are separate: rolling
back a Worker does not undo schema or data changes. Prefer additive migrations;
review D1 backup/restore procedures before any destructive schema change. Restore
data only with an agreed target and recovery point.

Provider expiry cleanup is account-triggered; there is no scheduled retention
job. General enquiries have no email notification. There is no payment flow,
automatic appointment confirmation or public approved-practitioner roster.

## Existing Atelier debt

The imported site retains oversized legacy page/style modules, repeated styling
values and lint warnings about images/hooks. These are not evidence that the
whole repository meets Atelier's size and design laws. Keep new work focused,
centralize tokens as affected components change, and do not claim a full
accessibility or performance audit without browser measurements.

## Verification recorded on 17 November 2026

An isolated Ubuntu WSL checkout with Node.js 22.22.0 and the pinned pnpm version
passed frozen dependency installation, `pnpm check`, `pnpm build:cloudflare`,
post-build `pnpm typecheck`, and `pnpm test:production`. All 18 focused tests
passed. Local Worker checks covered 88 detail pages, metadata, missing-page
responses, journal handoff, consent rejection and enquiry persistence in an
ephemeral D1 database. No remote migrations or deployments were performed.

Native Next.js compilation also passed on Windows. Rendered SEO verification
passed for 107 routes and 104 sitemap URLs against the local Next.js server.
After dependency cleanup, lint has zero errors and 16 warnings. Windows Worker packaging encountered
OpenNext's symlink-permission limitation; the full Worker build was verified
on Linux instead. The GitHub workflow is added but has not run remotely yet.

`deploy:check` correctly refuses the current empty Access settings. Live Access
policies, service credentials, real email/voice behavior, data ownership and
remote migration state remain unverified. Browser visual QA could not run
because the browser access host was unavailable. These remain release gates.

## UI parity with the server checkout

Compared this checkout with `swthastu server/swthastu` on 17 November 2026,
including after dependency cleanup. All 107 pages, including corporate booking
with its shared navigation and footer, produced equivalent static HTML; the
comparison ignored only HTML attribute ordering. All 110 public assets, the
active stylesheets and the root layout matched byte for byte. Removed library
components, styles and views are unused by the active application.

Production fixes change storage synchronization, query initialization, typing
and navigation internals without changing the compared presentation. This
checks initial rendered markup and source assets; it is not a browser screenshot
comparison or validation of every interactive state. The server checkout was
not modified.

## Dependency and unused-code cleanup

Removed 71 unused files: the 61-component UI starter library, its utility/hook
and generator configuration, obsolete workshop rendering and card helpers,
unused vendored CSS, and the sample notes endpoint/schema. Shared navigation
retains only the state and helpers its consumers use.

Removed 18 unused runtime dependencies and `tw-animate-css`, leaving seven
runtime dependencies. The application retains Next.js, React, React DOM,
Lucide, Zod, Drizzle and the OpenNext adapter, plus required development tools.
The updated lockfile prunes 133 packages. No reachable source module was left
orphaned in the application/configuration/script import trace.

A frozen Linux install, `pnpm check`, `pnpm build:cloudflare`, post-build
`pnpm typecheck`, and `pnpm test:production` passed after cleanup. The 18
integration tests, catalogue/privacy checks and 107-page UI comparison passed.

See [OpenNext's setup and build contract](https://opennext.js.org/cloudflare/get-started)
and [D1 migration tracking](https://developers.cloudflare.com/d1/reference/migrations/)
for platform procedures.
