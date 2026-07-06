@AGENTS.md

# meshrahman-site (WS-1)

The personal site of Mesh Rahman. Part of the Digital Presence Program; the full
document set (00-master-plan, 01-PRD, 03-TRD, 04-migration, 05-content-engine)
lives in the `InformalEngineer/ops` repo. This file is the working summary.

## STYLE: non-negotiable

**Every public-facing word on this site (essays, page copy, headlines, alt text,
newsletter blurbs) MUST follow [styleguide_mesh_v3.md](./styleguide_mesh_v3.md)
in this repo.** Read it before writing or editing any content. Hard rules that
get violated most often:

- Zero em-dashes. Search the output. Zero.
- No "it's not X, it's Y". No delve/unpack/leverage/seamless/game-changer/journey.
- No perfect triads, no rhetorical-question openers, no summary endings, no semicolons.
- First person, longer comma-connected sentences, parenthetical asides, simple words
  (English is Mesh's second language and the plainness IS the style).
- Real numbers with both units ($14,500 CAD / $10,500 USD). Self-callouts stay in.
- If a sentence sounds like a novelist wrote it, rewrite it like Mesh would say it
  at a kitchen table.

## What this site is (01-PRD summary)

Personality-led home base. Leads with range and curiosity (Minecraft channels,
Amazon FBA, subway megaprojects, data centres, rentals, homelab, truck build),
NOT credentials. P.Eng and PMP appear only as supporting facts in About and the
footer bio. Target reader: curious builder-type, 20s-40s, recognizes the
ADHD-systems framing.

**Goals:** own search for "Mesh Rahman"; ≥3% newsletter conversion; make the
breadth legible; route technical depth-seekers to informalengineer.com (the
sibling property, distinct nav button).

**Hard non-goals (do not build, do not suggest):** consultancy/services/"hire me"
anything (D6), monetization, comments, paid tiers, multi-language, search (v1).

**IA:** `/` home · `/about` (story as chapters, Minecraft before P.Eng, on
purpose) · `/essays` + `/essays/[slug]` (tags: money/career/adhd/experiments/
builds, reading time) · `/projects` (≥5 entries, each with a live element) ·
`/now` · `/reading` · `/contact` (plain mailto, no form theater).

**Launch gates (F1-F7):** hero communicates identity in ≤10 s on mobile;
newsletter signup (one field, no popups) on Home/About/essay footers; essays
with tag filtering; migrated content at final URLs before redirects flip;
Umami analytics; Lighthouse ≥95; WCAG AA (test #febe04 text on dark at real sizes).

**Phase order (Rule 2, ship gates):** skeleton (Home/About/Contact) → deploy
green → essays → projects → homelab widget LAST (Phase 3, contractually).

## Design

Dark base + #febe04 accent. One display face with character + one mono for
labels/numbers/dates. Generous whitespace on Home/About; denser notebook feel
on /now and /essays. Motion subtle and purposeful only. Design decisions get
ONE sitting each (Rule 4); no hero-redesign loops.

## TRD constraints (03-TRD)

- **Static export only** (`output: 'export'` is set in next.config.ts). No server
  runtime, no API routes, no ISR/SSR. Interactive pieces are client components
  hydrating over static HTML with meaningful fallbacks.
- Deploys via Cloudflare Pages: PR → preview URL → merge to `main` → production.
  `main` is protected; all changes go through PRs, even solo.
- The site must NEVER depend on the homelab being up. The telemetry widget
  (api.meshrahman.com, Phase 3) degrades gracefully ("lab offline, probably
  upgrading something").
- Conventional commits: `feat:`, `fix:`, `content:`, `chore:`. Content changes
  use `content:` so the git log doubles as an editorial log.
- Secrets live in Cloudflare Pages env vars / GitHub Actions secrets, never in repo.
- SEO: `Person` schema with sameAs (YouTube/GitHub/LinkedIn/IE), `Article` per
  essay, llms.txt, AI crawlers allowed, static HTML for all content.

## Process rules (00-master-plan)

- Rule 1: no new brands/domains/sections; new ideas become essays here or Lab
  Notes on IE.
- Rule 4: build sessions start with "what's the next unchecked item in the phase
  plan?", not approach reconsideration. Approach changes require a decision-log
  amendment in 00-master-plan (ops repo) first.
