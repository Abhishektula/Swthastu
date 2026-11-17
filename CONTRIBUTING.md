# Contributing and committing

These rules apply equally to the repository owner, maintainers, contributors,
and AI coding agents. Every merged change must solve a concrete problem and
leave the repository understandable. Commit count and lines added are not goals.

## Decide whether the change belongs

Before editing, describe the bug, requested outcome, or maintenance need in one
sentence. Define how you will verify it. A linked issue is useful, but a clear
problem statement in the pull request is sufficient for small fixes.

- Search the repository before adding a component, helper, dependency, or pattern.
  Reuse or improve the existing implementation first.
- Choose the smallest complete solution. Remove obsolete code made unnecessary
  by your change.
- Keep unrelated refactors, formatting, dependency upgrades, and features out of
  the patch. Propose them separately with their own reason.
- Do not add speculative abstractions, unused exports, placeholder features,
  commented-out code, duplicate components, or configuration for hypothetical use.
- Documentation, accessibility, security fixes, and useful code deletion are valid
  contributions. Explain their benefit as clearly as a feature.

## Preserve Atelier standards

Use the project's existing design and implementation as context. When Atelier is
available, read its relevant laws and project overlays before editing. The rules
below are the shared baseline even for contributors without the plugin.

- Keep each module responsible for one coherent task. Aim for at most 250
  whitespace-separated words per source file; 350 is the ceiling when splitting
  would harm cohesion. Docs, lockfiles, generated files, migrations, JSON/YAML
  data, and vendored code are exempt. Do not minify code to evade this rule.
- Existing oversized files are not a reason for a repository-wide rewrite.
  Extract only what the task needs; explain any remaining size violation in the
  PR and resolve it before merge or obtain an explicit, documented exception.
- Reuse components and centralized design tokens in `app/globals.css`. Preserve
  Swthastu's established palette, typography, and editorial character. Changes to
  the design system need an explicit rationale and visual evidence.
- Keep layouts calm, spacing deliberate, icons consistent, and motion purposeful.
  Avoid decorative gradients, heavy card shadows, gratuitous animation, fake
  dashboards, and generic filler copy. Respect reduced motion and keyboard use.
- UI changes need checks at 360, 768, and 1280 pixels, plus before/after images
  of affected states. Check both themes if the affected surface supports them.
- Fix shared logic at its source. Add the smallest meaningful regression check
  for nontrivial behavior; use existing verification scripts where practical.

## Work in a focused branch

Create a descriptive branch such as `fix/enquiry-consent` or
`docs/contribution-policy` from the current default branch. Use a pull request for
changes to the default branch, including owner changes. Review your own diff
before requesting review; ask another maintainer to review when available.

Keep each commit coherent and independently understandable. A feature may need
several commits, but avoid empty commits, repeated save-point commits, and vague
messages such as `update`, `fix stuff`, or `AI changes`. Squash exploratory and
fixup commits before merge. Never rewrite shared history without coordination.

## Commit messages

Use `type(scope): specific outcome`, with an optional scope. Write a short,
imperative subject; add a body when the reason or tradeoff needs explanation.

| Type | Use |
| --- | --- |
| `feat` | Requested behavior or capability |
| `fix` | Correct an observable defect |
| `refactor` | Simplify structure without changing behavior |
| `perf` | Improve performance with evidence |
| `docs` | Improve documentation |
| `test` | Improve meaningful verification |
| `chore` | Necessary tooling, dependency, or repository maintenance |
| `revert` | Undo a specific change and explain why |

Examples:

```text
fix(enquiries): reject submissions without consent
refactor(catalogue): reuse experience path generation
docs: define contribution and commit requirements
```

For breaking changes, use `!` after the type/scope and explain the migration in
the body with `BREAKING CHANGE:`. A correctly formatted message alone does not
justify an unnecessary change.

## Validate the actual change

Use Node.js and the pinned pnpm version described in [README.md](README.md).
Install dependencies with `pnpm install --frozen-lockfile`.

| Change | Required evidence before merge |
| --- | --- |
| Documentation only | Check wording, relative links, referenced paths/commands, and `git diff --check` |
| Source code or configuration | `pnpm lint`, `pnpm typecheck`, and checks for the affected behavior |
| Catalogue, images, or wellbeing/journal behavior | Relevant scripts below, in addition to source checks |
| Runtime, routes, forms, database, SEO, or deployment | Full build and local production verification below, in addition to source checks |
| UI | Source checks, relevant behavior checks, and responsive/keyboard/visual evidence |

Existing focused checks:

```sh
node scripts/verify-catalogue.mjs
node scripts/verify-wellbeing.mjs
```

For changes requiring production verification, run in this order:

```sh
pnpm build:cloudflare
pnpm test:production
```

The production verification uses an ephemeral local database. Never submit test
enquiries to the live site. Record the actual commands and results in the PR.
If a check fails or cannot run, state the failure or blocker; do not claim it
passed. Resolve relevant failures before merge. A pre-existing failure needs
evidence and an explicit maintainer decision recorded in the PR.

## Inspect exactly what you commit

Review both unstaged and staged changes. Stage explicit paths, then inspect them:

```sh
git status --short
git diff
git add path/to/changed-file
git diff --cached --stat
git diff --cached
git diff --cached --check
git commit -m "docs: define contribution and commit requirements"
```

Replace the path and message for your task. Do not blindly stage the whole
working tree or include someone else's changes.

- Never commit credentials, `.env*`, `.dev.vars*`, private journal/enquiry data,
  logs containing personal data, or local account/tool state.
- Exclude build output, caches, coverage, `node_modules`, and temporary AI output.
  Keep legitimate source assets, migrations, and required vendored files.
- Change `package.json` and `pnpm-lock.yaml` together when dependencies change.
  Explain why an existing dependency or native API cannot satisfy the need.
- Do not hand-edit generated artifacts to hide a source defect or regenerate
  unrelated files. Avoid mass formatting and line-ending churn.

## Merge gate

Use the [pull request template](.github/pull_request_template.md). A reviewer must
be able to identify the problem, understand every changed file, and reproduce
the validation. Unexplained code, unrelated changes, missing evidence, and
unresolved design regressions must be addressed before merging.

AI-assisted changes follow exactly the same rules. The submitting human owns the
diff and must understand it; generated explanations are not verification.

The `Verify` GitHub Actions workflow runs lint, type checking, tests, the
Cloudflare build, and local production checks. Repository administrators must
make its `verify` job required in branch protection and require pull requests
to enforce the merge gate. Commit hooks and branch protection are not installed
by this guide.
