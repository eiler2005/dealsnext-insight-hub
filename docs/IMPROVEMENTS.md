# Engineering Roadmap — IMPROVEMENTS

> Companion to [README](../README.md), [PRD](PRD.md), and [ARCHITECTURE](ARCHITECTURE.md).
>
> This file is the single source of truth for **what is broken or missing in the codebase and what we plan to do about it**. Each item is independent enough to be picked up as a single PR and has observable acceptance criteria.

---

## Legend

### Priority

| Tag | Meaning |
| --- | --- |
| **P0** | Recruiter-visible or blocks the production-readiness story. Do first. |
| **P1** | Correctness, safety, or DX. Do once P0 is clear. |
| **P2** | Polish, future-proofing, nice-to-have. |

### Effort

| Tag | Range |
| --- | --- |
| **XS** | ≤ 1 h |
| **S** | 1–3 h |
| **M** | 3–8 h |
| **L** | 1–3 days |
| **XL** | ≥ 3 days |

### Areas

`Typing` · `State` · `Performance` · `Testing` · `Tooling` · `Docs` · `Security` · `DX`

### Item template

```
### IMP-XX — Short name
- Priority: P0 | P1 | P2
- Effort:   XS | S | M | L | XL
- Area:     <one of the areas above>
- Files:    <relevant paths>
- Problem:  <2–3 sentences>
- Proposed fix:
  - <bullet>
- Acceptance criteria:
  - [ ] <observable check>
```

---

## A. Typing

### IMP-01 — Eliminate `filters: any` props
- **Priority:** P0
- **Effort:** S
- **Area:** Typing
- **Files:** `src/pages/Deals.tsx`, `src/pages/TeamMonitoring.tsx`, `src/components/deals/DealsFilters.tsx`, `src/components/team-monitoring/TeamFilters.tsx`, `src/components/client-insights/ClientFilters.tsx`.
- **Problem:** Filter payloads pass between pages and their child filter components as `any`. The page contains 20–30 lines of filtering logic that *assumes* a shape, but the compiler cannot enforce it. Any renamed field will fail silently at runtime.
- **Proposed fix:**
  - Define `DealsFilters`, `TeamFilters`, `ClientFilters` interfaces colocated with each filter component.
  - Replace `(filters: any)` with the new types in page-level `handleFiltersChange`.
  - Use `keyof` and discriminated unions to type the option arrays.
- **Acceptance criteria:**
  - [ ] No `any` in the three pages and three filter components named above.
  - [ ] `npm run lint` passes with `@typescript-eslint/no-explicit-any` set to `error`.
  - [ ] Renaming a filter field surfaces a compile error in both the page and the filter component.

### IMP-02 — Replace `Record<string, any>` configs
- **Priority:** P0
- **Effort:** S
- **Area:** Typing
- **Files:** `src/components/deals/DealsTable.tsx`, `src/components/deals/DealsCards.tsx`, `src/components/team-monitoring/TeamKpiCards.tsx`, `src/components/layout/Sidebar.tsx`.
- **Problem:** Status, SLA, and marginality badge maps are declared as `Record<string, any>`. Icon maps lose the `LucideIcon` constraint. Any mistyped key compiles but renders nothing.
- **Proposed fix:**
  - Introduce a `BadgeVariant` union type (e.g. `'success' | 'warning' | 'danger' | 'muted'`).
  - Type icon maps as `Record<StatusKey, LucideIcon>`.
  - Move the configs to a shared module per feature (see also `IMP-08`).
- **Acceptance criteria:**
  - [ ] No `Record<string, any>` left in the listed files.
  - [ ] Adding a new status key without updating the icon map fails to compile.

### IMP-03 — Strongly type modal & sidebar props
- **Priority:** P1
- **Effort:** S
- **Area:** Typing
- **Files:** `src/components/reports-export/ReportDetailModal.tsx`, `src/components/individual-conditions/ConditionDetailModal.tsx`, `src/components/product-registry/ProductCardSidebar.tsx`, `src/components/product-registry/ProductRadarChart.tsx`, `src/components/sales-funnel/FunnelChart.tsx`.
- **Problem:** Detail panels accept their payload as `any`, defeating the point of the typed `mockData.ts` upstream.
- **Proposed fix:** Import the relevant entity type from `mockData.ts` (later `services/`) and use it directly.
- **Acceptance criteria:**
  - [ ] No `any` in any of the listed files.
  - [ ] Props match the shapes exported by `mockData.ts`.

---

## B. State & data layer

### IMP-04 — Activate or remove TanStack Query
- **Priority:** P0
- **Effort:** M
- **Area:** State
- **Files:** `src/App.tsx:24,27`, new `src/hooks/useDealsQuery.ts`.
- **Problem:** `QueryClient` is instantiated and provided, but no page calls `useQuery`. The provider provides nothing.
- **Proposed fix:**
  - Add a single query hook (`useDealsQuery(filters)`) that wraps the existing fixture import in a `queryFn`.
  - Have `Deals` consume it with proper loading/empty/error states.
  - Document the query-key convention in `ARCHITECTURE.md`.
- **Acceptance criteria:**
  - [ ] At least one page reads its data via `useQuery`.
  - [ ] Query-key convention documented and applied consistently.
  - [ ] Removing the `QueryClientProvider` breaks the build (sanity check that the provider is actually used).

### IMP-05 — Service layer over `mockData.ts`
- **Priority:** P1
- **Effort:** M
- **Area:** State
- **Files:** `src/data/mockData.ts` (564 lines), new `src/services/dealsService.ts`, `clientsService.ts`, etc.
- **Problem:** Pages import fixtures directly. There is no seam to swap in a real API.
- **Proposed fix:**
  - Wrap each entity slice of `mockData.ts` in an async service function returning `Promise<T>`.
  - Pages and hooks import from `services/`, not `data/`.
  - Add a `MOCK_DELAY_MS` constant so the UI can render real skeletons.
- **Acceptance criteria:**
  - [ ] Zero direct imports of `mockData.ts` outside `src/services/`.
  - [ ] Each service function has a typed return.
  - [ ] Swapping `dealsService.fetch` to a real `fetch()` call requires no UI changes.

### IMP-06 — Lift filter logic into hooks
- **Priority:** P1
- **Effort:** M
- **Area:** State
- **Files:** `src/pages/Deals.tsx`, `src/pages/TeamMonitoring.tsx`, new `src/hooks/useDealsFilters.ts`, `useTeamFilters.ts`.
- **Problem:** ~30 lines of filtering logic live inside each page. Pages should orchestrate, not compute.
- **Proposed fix:** A `useDealsFilters()` hook returns `{ filters, setFilters, filtered }`. Pages consume it.
- **Acceptance criteria:**
  - [ ] Pages contain no filtering logic — only composition.
  - [ ] Hooks have unit tests once `IMP-13` is in place.

---

## C. Component decomposition

### IMP-07 — Break up monster pages
- **Priority:** P1
- **Effort:** L
- **Area:** DX
- **Files:** `src/pages/IndividualConditions.tsx` (366 LOC), `src/pages/AboutSystem.tsx` (311 LOC), `src/pages/ProductEffectiveness.tsx` (294 LOC).
- **Problem:** Pages over ~200 lines hide their structure. Code review costs more, regressions slip through.
- **Proposed fix:** Extract subcomponents into `src/components/<feature>/`. Page becomes a slim orchestrator.
- **Acceptance criteria:**
  - [ ] Each of the three pages is ≤ 150 lines.
  - [ ] No subcomponent depends on a private export of a page.

### IMP-08 — Deduplicate badge configs
- **Priority:** P1
- **Effort:** S
- **Area:** DX
- **Files:** `src/components/deals/DealsTable.tsx`, `src/components/deals/DealsCards.tsx`.
- **Problem:** `statusConfig`, `slaConfig`, `marginalityConfig` are copy-pasted between the two views. Drift is inevitable.
- **Proposed fix:** Extract to `src/components/deals/getDealBadges.ts` (or `dealBadges.ts`). Both consumers import the same source.
- **Acceptance criteria:**
  - [ ] One source of truth for each badge config.
  - [ ] Both views render identical badges for the same input.

### IMP-09 — Remove inline styles in `ProductRegistry`
- **Priority:** P2
- **Effort:** XS
- **Area:** DX
- **Files:** `src/pages/ProductRegistry.tsx` (around lines 127–140 and the surrounding rows).
- **Problem:** Inline `style={{...}}` for badges and rows bypasses Tailwind's design tokens.
- **Proposed fix:** Convert to Tailwind classes or `cn()` variants.
- **Acceptance criteria:**
  - [ ] Zero `style={{...}}` in the page.

### IMP-10 — Mark vendored shadcn primitives as read-only
- **Priority:** P2
- **Effort:** XS
- **Area:** Docs
- **Files:** `src/components/ui/sidebar.tsx` (761 LOC) and any other large vendored primitives.
- **Problem:** A 761-line file invites refactor proposals. It is vendored shadcn code; we don't touch it.
- **Proposed fix:** Add a one-line banner comment at the top: `// Vendored from shadcn/ui — do not edit. Compose around it instead.` Document in `CONTRIBUTING.md` (already done).
- **Acceptance criteria:**
  - [ ] Banner present on the relevant files.
  - [ ] No PR touches `components/ui/` except to add new vendored primitives.

---

## D. Performance

### IMP-11 — Route-level code splitting
- **Priority:** P0
- **Effort:** S
- **Area:** Performance
- **Files:** `src/App.tsx`.
- **Problem:** All 13 pages and every heavy chart library are bundled into the first chunk. First load pays for screens the user may never visit.
- **Proposed fix:**
  - Convert each route import to `React.lazy()`.
  - Wrap `<Routes>` in `<Suspense fallback={<RouteSkeleton />}>`.
  - Capture before/after gzipped first-load size in the PR description.
- **Acceptance criteria:**
  - [ ] Each page is a separate chunk in the build output.
  - [ ] First-route gzipped size ≤ 200 KB.
  - [ ] No flash of unstyled content on slow connections.

### IMP-12 — Hardcoded filter option lists → constants
- **Priority:** P2
- **Effort:** S
- **Area:** DX
- **Files:** `src/components/deals/DealsFilters.tsx`, `src/components/team-monitoring/TeamFilters.tsx`, and other filter components with `types` / `categories` / `tags` arrays.
- **Problem:** Option arrays are inlined in components, scattered across the codebase.
- **Proposed fix:** Move to `src/lib/filterOptions.ts`. Type them as `const` so TS infers literal unions.
- **Acceptance criteria:**
  - [ ] All filter option arrays imported from a single module.
  - [ ] The literal-union types feed into the typed filter interfaces from `IMP-01`.

---

## E. Testing

### IMP-13 — Set up Vitest + React Testing Library
- **Priority:** P0
- **Effort:** M
- **Area:** Testing
- **Files:** new `vitest.config.ts`, `src/test/setup.ts`, `src/**/__tests__/*.test.tsx`.
- **Problem:** Zero tests. Any refactor relies on manual click-through.
- **Proposed fix:**
  - Add Vitest, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`.
  - One smoke test per page: renders without throwing, matches a key heading.
  - Wire into CI (`IMP-19`).
- **Acceptance criteria:**
  - [ ] `npm run test` works locally and in CI.
  - [ ] 13 page smoke tests pass.
  - [ ] At least one filter hook (`useDealsFilters`) has a unit test once `IMP-06` lands.

---

## F. Tooling & DX

### IMP-14 — Enable ESLint rules
- **Priority:** P0
- **Effort:** XS
- **Area:** Tooling
- **Files:** `eslint.config.js`.
- **Problem:** `@typescript-eslint/no-unused-vars` is explicitly disabled at line 26. `no-explicit-any` is not enabled. Code that should not pass review currently passes lint.
- **Proposed fix:**
  - Set `@typescript-eslint/no-unused-vars` to `["error", { argsIgnorePattern: "^_" }]`.
  - Add `@typescript-eslint/no-explicit-any: "warn"` (escalate to `error` once `IMP-01..03` are in).
  - Add `eslint-plugin-react-hooks` rules (already installed) to the active config.
- **Acceptance criteria:**
  - [ ] `npm run lint` exits 0 after the rule is enabled (or fails for legitimate offenders that we then fix).
  - [ ] CI runs lint as a gating step.

### IMP-15 — Prettier + Husky + lint-staged + commitlint
- **Priority:** P1
- **Effort:** S
- **Area:** Tooling
- **Files:** new `.prettierrc.json`, `.prettierignore`, `.husky/pre-commit`, `.lintstagedrc.json`, `commitlint.config.cjs`.
- **Problem:** No formatter, no pre-commit hook, no commit-message convention.
- **Proposed fix:**
  - Prettier with sensible defaults (single quotes, 2-space indent, trailing commas).
  - Husky `pre-commit` runs `lint-staged` which runs `eslint --fix` and `prettier --write` on staged files.
  - `commitlint` with Conventional Commits config.
- **Acceptance criteria:**
  - [ ] A commit with unformatted code is auto-formatted before landing.
  - [ ] A commit message that does not match Conventional Commits is rejected.

### IMP-16 — Bootstrap files
- **Priority:** P1
- **Effort:** XS
- **Area:** Tooling
- **Files:** new `.nvmrc`, `.editorconfig`, `.env.example`.
- **Problem:** Node version, editor settings, and required env vars are tribal knowledge.
- **Proposed fix:**
  - `.nvmrc` pinning Node 20 LTS.
  - `.editorconfig` with 2-space indent, LF, UTF-8.
  - `.env.example` listing `VITE_API_BASE_URL` and any other env vars introduced by future work.
- **Acceptance criteria:**
  - [ ] All three files exist and are correct.
  - [ ] README references them.

### IMP-17 — Remove Lovable artefacts from code
- **Priority:** P0
- **Effort:** S
- **Area:** Tooling
- **Files:** `vite.config.ts` (line 4 import, line 15 plugin), `package.json` (`devDependencies.lovable-tagger`), `public/lovable-uploads/`, `index.html` (lines referencing Lovable in meta tags).
- **Problem:** The documentation reframes the project as the author's own work, but the code still imports `lovable-tagger`, ships its `public/lovable-uploads/` folder, and has Lovable meta tags in `index.html`. This contradicts the README.
- **Proposed fix:**
  - Remove the `componentTagger()` plugin call and its import from `vite.config.ts`.
  - Drop `lovable-tagger` from `package.json`.
  - Delete `public/lovable-uploads/` (after confirming no reference in the bundle).
  - Replace Lovable meta tags in `index.html` with real product meta (see `IMP-18`).
- **Acceptance criteria:**
  - [ ] `grep -ri "lovable" --include="*.ts" --include="*.tsx" --include="*.html" --include="*.json" src/ public/ index.html vite.config.ts package.json` returns zero matches.
  - [ ] `npm run build` succeeds after removal.

### IMP-18 — SEO & meta in `index.html`
- **Priority:** P0
- **Effort:** XS
- **Area:** Tooling
- **Files:** `index.html`.
- **Problem:** Title, description, OG/Twitter meta are placeholders inherited from the Lovable template.
- **Proposed fix:**
  - Real `<title>`: `DealsNext Insight Hub — B2B sales-analytics dashboard`.
  - Real `<meta name="description">` mirroring the README tagline.
  - `og:title`, `og:description`, `og:image`, `twitter:card`, `twitter:image`.
  - Canonical link to the live demo URL.
  - Favicon from `public/`.
- **Acceptance criteria:**
  - [ ] Sharing the live URL on Twitter / Slack / Telegram shows a correct preview.
  - [ ] Lighthouse SEO ≥ 90.

### IMP-19 — CI/CD with GitHub Actions
- **Priority:** P0
- **Effort:** S
- **Area:** Tooling
- **Files:** new `.github/workflows/ci.yml` and optionally `deploy.yml`.
- **Problem:** No CI. PRs ship without lint, build, or test verification.
- **Proposed fix:**
  - `ci.yml`: install (with cache), lint, build, test on every PR and on `main`.
  - Optional `deploy.yml` to Vercel / GitHub Pages on push to `main`.
  - Replace the static `status` badge in README with a CI status badge.
- **Acceptance criteria:**
  - [ ] PRs cannot merge with a red CI.
  - [ ] CI completes in under 3 minutes.
  - [ ] CI badge in README links to the workflow run.

---

## G. Repository chrome

### IMP-20 — `.github/` templates
- **Priority:** P1
- **Effort:** S
- **Area:** Docs
- **Files:** new `.github/ISSUE_TEMPLATE/bug_report.yml`, `.github/ISSUE_TEMPLATE/feature_request.yml`, `.github/PULL_REQUEST_TEMPLATE.md`, `.github/CODEOWNERS`, `.github/dependabot.yml`.
- **Problem:** Issues and PRs are unstructured. There is no Dependabot.
- **Proposed fix:** Standard templates plus Dependabot weekly for npm and GitHub Actions.
- **Acceptance criteria:**
  - [ ] Opening an issue or PR on GitHub shows the template.
  - [ ] Dependabot opens its first PR within a week.

### IMP-21 — `CHANGELOG.md`
- **Priority:** P2
- **Effort:** XS
- **Area:** Docs
- **Files:** new `CHANGELOG.md`.
- **Problem:** No tracked changelog.
- **Proposed fix:** Keep-a-Changelog format. First entry: `0.1.0 — Documentation refactor & repo showcase pass`.
- **Acceptance criteria:**
  - [ ] File exists, linked from README.
  - [ ] Each release tag has a matching entry.

### IMP-22 — `SECURITY.md` and `CODE_OF_CONDUCT.md`
- **Priority:** P2
- **Effort:** XS
- **Area:** Docs
- **Files:** new `SECURITY.md`, `CODE_OF_CONDUCT.md`.
- **Problem:** Standard files missing.
- **Proposed fix:** Standard templates (GitHub auto-suggests). Link both from `CONTRIBUTING.md`.
- **Acceptance criteria:**
  - [ ] Both files exist.
  - [ ] GitHub's Insights → Community Standards is fully green.

### IMP-23 — `docs/adr/` with first ADR template
- **Priority:** P2
- **Effort:** XS
- **Area:** Docs
- **Files:** `docs/adr/README.md` (already exists as a placeholder), new `docs/adr/0001-record-template.md`.
- **Problem:** ADR folder is a placeholder. No template means future decisions will not be captured.
- **Proposed fix:** Add a Nygard-style ADR template at `0001-record-template.md`. Add the first real ADR when the first architecturally-significant decision lands.
- **Acceptance criteria:**
  - [ ] Template file exists.
  - [ ] `docs/adr/README.md` describes when to write one.

---

## H. Metadata

### IMP-24 — `package.json` identity fields
- **Priority:** P0
- **Effort:** XS
- **Area:** Docs
- **Files:** `package.json`.
- **Problem:** `name: "vite_react_shadcn_ts"`, `version: "0.0.0"`, no `description`/`author`/`license`/`repository`. Looks abandoned.
- **Proposed fix:** Real identity fields. See `package.json` post this PR.
- **Acceptance criteria:**
  - [x] Applied as part of the v0.2 documentation pass.

---

## Roadmap (by phase)

### Phase 1 — Docs & DX (`v0.2`) — current PR
- **Goal:** Make the repo presentable, safe to extend, and honest about its state.
- Items: documentation files (this PR), `IMP-24` (package.json identity).
- **Estimate:** ~10 h (already complete or in progress).

### Phase 2 — Production-readiness P0s (`v0.3`–`v0.4`)
- **Goal:** Repo passes a senior-engineer review.
- Items: `IMP-01`, `IMP-02`, `IMP-04`, `IMP-11`, `IMP-13`, `IMP-14`, `IMP-17`, `IMP-18`, `IMP-19`.
- **Estimate:** ~25 h.

### Phase 3 — Quality & polish (`v0.5`)
- **Goal:** DX and architecture polish.
- Items: `IMP-03`, `IMP-05`, `IMP-06`, `IMP-07`, `IMP-08`, `IMP-15`, `IMP-16`, `IMP-20`.
- **Estimate:** ~35 h.

### Phase 4 — Long tail (`v0.6`+)
- **Goal:** Polish, future-proofing, and the first real ADRs.
- Items: `IMP-09`, `IMP-10`, `IMP-12`, `IMP-21`, `IMP-22`, `IMP-23`.
- **Estimate:** ~10 h.

---

## Status snapshot — 2026-05-13

| Phase | Items | Done | Pending |
| --- | --- | --- | --- |
| 1 — Docs & DX | 1 | 1 (`IMP-24`) | — |
| 2 — Production P0s | 9 | 0 | 9 |
| 3 — Quality & polish | 8 | 0 | 8 |
| 4 — Long tail | 6 | 0 | 6 |
| **Total** | **24** | **1** | **23** |
