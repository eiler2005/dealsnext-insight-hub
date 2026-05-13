# Product Requirements Document — DealsNext Insight Hub

| | |
| --- | --- |
| **Document version** | 0.1 |
| **Status** | Living draft |
| **Author** | Denis Ermilov |
| **Last updated** | 2026-05-13 |
| **Companion docs** | [README](../README.md) · [Architecture](ARCHITECTURE.md) · [UI overview](UI_OVERVIEW.md) · [Engineering roadmap](IMPROVEMENTS.md) |

---

## 1. Executive summary

DealsNext Insight Hub is a single-pane-of-glass dashboard for B2B sales teams that struggle to keep deal economics, client health, and product profitability in sync. It unifies thirteen analytical surfaces — from a high-level KPI dashboard to a granular individual-conditions calculator — and weaves an AI-recommendation layer through deal and client workflows. The current release (`v0.1`) is a portfolio-grade prototype on typed mock data; the product spec below defines the target state once a backend and a real recommender are wired in.

The differentiator is **integrated re-pricing**: any change to a contract condition, discount, or commission instantly recalculates margins across every deal it touches and is visible in the same view where a sales manager makes day-to-day decisions. No CSV exports, no separate finance tool, no waiting for the analytics team.

---

## 2. Problem statement

Mid-market and enterprise B2B sales teams operate across at least four siloed surfaces:

1. **CRM** for deal stages and contact data.
2. **ERP / finance** for actual margins, costs, and individual contract terms.
3. **BI tool** for after-the-fact reporting that lags by days or weeks.
4. **Spreadsheets** for everything in between — bespoke discount approvals, client segmentation, what-if scenarios.

The cost of this fragmentation is concrete:

- **Decision latency.** A sales manager negotiating a discount cannot see the true margin impact in real time.
- **Lost upsell / cross-sell.** Signals that a client is ready for a larger contract surface in BI weeks after the buying window has closed.
- **Inconsistent contract terms.** Individual conditions drift between systems; finance and sales argue over which numbers are correct.
- **No predictive layer.** Risk of churn or SLA breach is recognised reactively, not predicted.

DealsNext Insight Hub addresses these by collapsing the four surfaces into one product that re-prices deals on edit and embeds AI signals directly into the deal and client UI.

---

## 3. Target users & personas

### 3.1 Persona A — Sales Manager (Operational)
- **Role.** Owns 30–80 active deals, negotiates terms, hits a quarterly quota.
- **Jobs-to-be-done.** Triage deals by health every morning · negotiate discounts with margin visibility · flag at-risk accounts to leadership · log activity efficiently.
- **Pain points.** Doesn't know real margin at the moment of approval · finds out about churn risk too late · spends ~1h/day reconciling sheets with CRM.
- **Success metrics.** Win rate, average margin per deal, cycle time, % of deals re-priced before close.

### 3.2 Persona B — Head of Sales / RevOps (Analytical)
- **Role.** Owns the pipeline, the playbook, and quarterly forecasting.
- **Jobs-to-be-done.** Read the funnel weekly · audit individual conditions for policy drift · attribute revenue to product lines · plan headcount and territory.
- **Pain points.** Reports are stale by the time they land · individual conditions vary by salesperson with no audit · cross-sell opportunities are not measured.
- **Success metrics.** Forecast accuracy, average sales cycle, win rate by segment, condition-policy compliance.

### 3.3 Persona C — Account Executive (Frontline)
- **Role.** Hunts new logos, defends and expands existing accounts.
- **Jobs-to-be-done.** Prepare an account before a call · spot upsell or cross-sell triggers · understand contract-term flexibility before committing.
- **Pain points.** Client history is scattered · no opinion from the system about *which* product to pitch next · no visibility into what previous AEs negotiated.
- **Success metrics.** Pipeline created, expansion revenue, qualified meetings.

---

## 4. Goals & non-goals

### 4.1 In-scope (v1.0)
- Real-time deal pricing and margin recomputation across all open deals.
- Catalog of individual conditions (discount/commission/installment) with audit trail.
- AI surface for upsell, cross-sell, churn risk, and SLA risk — embedded in deal/client views.
- Multi-screen analytics: dashboard, funnel, team monitoring, product effectiveness, client insights.
- Report builder with PDF/CSV export.

### 4.2 Out-of-scope (v1.0)
- **Authentication & RBAC** — assumed to be handled by the host org's SSO; not in this product surface.
- **Multi-tenant SaaS plumbing** — single-tenant deployment per customer.
- **Billing & subscription management** — out of scope for the product itself.
- **Native mobile apps** — responsive web only, optimised for ≥ 1024 px.
- **Real ML training pipeline** — the recommender is a consumer of an external model service.
- **CRM replacement** — DealsNext consumes CRM data; it does not replace activity tracking, telephony, or contact management.

---

## 5. User stories (by epic)

### EP-01 — Dashboard
| ID | Story | Acceptance criteria |
| --- | --- | --- |
| US-01-01 | *As a Sales Manager, I want to see the top KPIs on a single screen, so that I can decide where to focus my morning.* | KPIs: revenue, margin %, win rate, average cycle · time-period selector (week/month/quarter) · loads in < 1.5 s on warm cache. |
| US-01-02 | *As a Head of Sales, I want AI insights surfaced on the dashboard, so that I know which trends need investigation.* | At least 3 insight cards · each card links to the deal/client/product that produced it. |
| US-01-03 | *As any user, I want a quick-nav strip, so that I can jump to the four most-used screens without using the sidebar.* | Quick-nav exposes Deals, Products, Conditions, AI Growth · keyboard-accessible. |

### EP-02 — Deals
| ID | Story | Acceptance criteria |
| --- | --- | --- |
| US-02-01 | *As a Sales Manager, I want to filter the pipeline by stage, margin band, and SLA risk, so that I can triage daily.* | Filters compose · URL reflects current filter state · empty-state handled. |
| US-02-02 | *As any user, I want a dense table view and a card view of the same deals, so that I can switch reading modes.* | Toggle preserves filter state · both views support sort. |
| US-02-03 | *As a Sales Manager, I want bulk actions (export, archive, reassign), so that I can move quickly.* | Bulk-action bar appears on selection · destructive actions require confirm. |

### EP-03 — Team monitoring
| ID | Story | Acceptance criteria |
| --- | --- | --- |
| US-03-01 | *As a Head of Sales, I want SLA and workload per team member, so that I can rebalance.* | Member list with workload, win rate, SLA breach count · sortable. |
| US-03-02 | *As a Head of Sales, I want to drill into one member's deals, so that I can coach.* | Detail view with active deals, recent activity, conditions used. |

### EP-04 — Client insights
| ID | Story | Acceptance criteria |
| --- | --- | --- |
| US-04-01 | *As an AE, I want segments and trend lines per client, so that I can prep for a call.* | Segments: top, growing, at-risk · trend chart for revenue and margin. |
| US-04-02 | *As an AE, I want a per-client history of conditions and AI flags, so that I can negotiate from context.* | Linked from `ClientRegistry` and `Deals`. |

### EP-05 — Product effectiveness & registry
| ID | Story | Acceptance criteria |
| --- | --- | --- |
| US-05-01 | *As RevOps, I want to compare products on ROI and margin, so that I can prioritise the catalog.* | Comparison table with sort · radar chart per product. |
| US-05-02 | *As a Sales Manager, I want a deep product card with history, so that I can explain the product to a client.* | Card surfaces lifecycle, profit forecast, recent deals. |

### EP-06 — Sales funnel
| ID | Story | Acceptance criteria |
| --- | --- | --- |
| US-06-01 | *As RevOps, I want stage-by-stage conversion and drop-off, so that I can find the leak.* | Funnel chart with absolute and relative numbers · click a stage → see deals stuck there. |

### EP-07 — AI recommendations
| ID | Story | Acceptance criteria |
| --- | --- | --- |
| US-07-01 | *As an AE, I want upsell and cross-sell suggestions on a client view, so that I can act on them.* | Each suggestion includes confidence and expected revenue effect · dismissible. |
| US-07-02 | *As a Head of Sales, I want a risk feed of deals with SLA or churn risk, so that I can intervene.* | Risk feed sorted by predicted impact. |

### EP-08 — Reports & exports
| ID | Story | Acceptance criteria |
| --- | --- | --- |
| US-08-01 | *As any user, I want to build a report from filters and export to CSV/PDF, so that I can share offline.* | Saved-report concept · scheduled email is a roadmap item, not v1. |

### EP-09 — Registries (Product / Client)
| ID | Story | Acceptance criteria |
| --- | --- | --- |
| US-09-01 | *As RevOps, I want a single source of truth for products and clients, so that conditions reference clean records.* | CRUD on registries (read-only in v0.1) · search and tag-filter. |

### EP-10 — Individual conditions
| ID | Story | Acceptance criteria |
| --- | --- | --- |
| US-10-01 | *As a Sales Manager, I want to apply a custom discount/commission to a deal, so that I can close it.* | Form validates against policy bounds · margin delta shown before save. |
| US-10-02 | *As a Head of Sales, I want an audit list of every applied condition, so that I can enforce policy.* | Condition list with applied-by, applied-at, impact. |

---

## 6. Functional requirements

Each `FR-NN` is a contract that v1.0 of the product must satisfy. Items are deliberately scoped so that they can be tested at the UI boundary.

**Dashboard (FR-01..FR-05)**
- FR-01 — Render at least four headline KPIs (revenue, margin %, win rate, avg cycle) on `/`.
- FR-02 — Support time-period filter: week / month / quarter / custom range.
- FR-03 — Surface ≥ 3 AI insight cards, each linking to its source entity.
- FR-04 — Provide a quick-nav strip linking to Deals, Products, Conditions, AI Growth.
- FR-05 — Loading state ≤ 500 ms after route navigation.

**Deals (FR-06..FR-12)**
- FR-06 — List all deals with paging or virtualisation above 200 rows.
- FR-07 — Composable filters: stage, SLA risk, margin band, owner, client tag, free-text search.
- FR-08 — Toggleable table ⇄ card view, preserving filter state.
- FR-09 — Sort by any column in table view.
- FR-10 — Bulk actions: export, archive, reassign (confirmation required on destructive).
- FR-11 — Health badges: SLA status, margin band, deal status — colour and label.
- FR-12 — Filter state encoded in the URL.

**Team monitoring (FR-13..FR-15)**
- FR-13 — List team members with workload, win rate, SLA breach count.
- FR-14 — Drill-in to a member's deals and recent activity.
- FR-15 — Member-level filters: role, team, period.

**Client surfaces (FR-16..FR-19)**
- FR-16 — `ClientRegistry`: master list, search, tag-filter, segment badge.
- FR-17 — `ClientInsights`: per-segment KPIs and trend charts.
- FR-18 — Client detail surfaces history of deals, conditions, and AI flags.
- FR-19 — Segments: top, growing, at-risk, lost.

**Product surfaces (FR-20..FR-24)**
- FR-20 — `ProductRegistry`: catalog with comparison table.
- FR-21 — Product radar chart on the product card.
- FR-22 — `ProductEffectiveness`: KPIs per product line, sortable.
- FR-23 — Profit forecast per product (mock series in v0.1).
- FR-24 — Search and tag-filter on the catalog.

**Sales funnel (FR-25..FR-26)**
- FR-25 — Stage-by-stage funnel chart with absolute & relative numbers.
- FR-26 — Click-through from a stage to the deals stuck there.

**AI recommendations (FR-27..FR-29)**
- FR-27 — Recommendation feed with confidence and expected effect.
- FR-28 — Dismiss / snooze on each recommendation (state is local to v0.1).
- FR-29 — Risk feed sorted by predicted impact.

**Reports & exports (FR-30..FR-31)**
- FR-30 — Build a report from saved filters; export CSV and PDF.
- FR-31 — Report config persists in browser storage (v0.1) / backend (v1.0).

**Individual conditions (FR-32..FR-35)**
- FR-32 — Apply discount / commission / installment to a deal.
- FR-33 — Validate against policy bounds and show error inline.
- FR-34 — Show margin delta before save.
- FR-35 — Audit list of all applied conditions with timestamp and applier.

**Cross-cutting (FR-36..FR-38)**
- FR-36 — Global navigation: persistent sidebar + header.
- FR-37 — 404 fallback page.
- FR-38 — Toast and sonner notifications for async actions.

---

## 7. Non-functional requirements

### 7.1 Performance
- **LCP** (Largest Contentful Paint) < 2.5 s on a cold load on a 4G profile.
- **TTI** (Time to Interactive) < 3.5 s on the same profile.
- **Route transition** < 300 ms on warm cache once code-splitting (IMP-11) lands.
- **Lighthouse Performance** ≥ 85 (target after IMP-11 and IMP-18).

### 7.2 Accessibility
- **WCAG 2.1 AA** target. Colour contrast ≥ 4.5 : 1 for body text. Keyboard navigation through every interactive surface. All actionable icons have visible focus state.
- shadcn/ui (Radix-based) gives us a strong baseline; per-screen audit tracked in [`IMPROVEMENTS.md`](IMPROVEMENTS.md).

### 7.3 Internationalisation
- **EN and RU baseline.** README and UI overview are bilingual. UI strings to be lifted to a single i18n module (roadmap).

### 7.4 Responsive design
- **Desktop-first**, optimised for ≥ 1280 px.
- **Tablet** (≥ 768 px) — graceful degradation, no functional loss.
- **Mobile** — out of scope for v1.0; viewport renders, but layout is not optimised.

### 7.5 Security & privacy
- **No secrets in the client bundle.** All API keys remain server-side.
- **No PII in mock data.** Names, emails, and identifiers in `mockData.ts` are synthetic.
- **No client-side trust boundary.** Every authorisation decision is made on the server (when one exists).

### 7.6 Browser support
- Modern evergreen browsers: Chrome, Edge, Firefox, Safari — latest two stable releases each.

### 7.7 Observability (post-v0.1)
- Front-end error tracking (Sentry or equivalent).
- Lighthouse CI on every PR.
- Bundle-size budget enforced in CI.

---

## 8. Success metrics

Because this is currently a portfolio surface, success is measured against engineering-quality and audience-quality proxies, not paying customers:

- **Engineering signals** — Lighthouse ≥ 85, ≤ 0 ESLint errors with strict rules enabled, ≥ 60 % test coverage post-IMP-13.
- **Audience signals** — GitHub stars / forks, structured recruiter feedback, mentions in interviews and reviews.
- **Code-review checklist coverage** — every PR satisfies the CONTRIBUTING checklist; no `any` in new code.

When the product is wired to a real backend, success metrics shift to product KPIs: time-to-decision on a discount, % of deals re-priced before close, AI-suggestion accept rate, and forecast accuracy.

---

## 9. Scope of v0.1 (current release)

- All 13 screens are implemented and reachable.
- Data is sourced from `src/data/mockData.ts` (564 lines, typed).
- TanStack Query provider is mounted but no queries are defined yet — wired for future API integration.
- No authentication, no backend, no analytics events.
- Live demo at <https://dealsnext-insight-hub-02.lovable.app/>.

---

## 10. Roadmap

| Milestone | Goal | Key items |
| --- | --- | --- |
| **v0.2 — Docs & DX** | Make the repo presentable and safe to extend. | New README, PRD, ARCHITECTURE, IMPROVEMENTS · LICENSE · CONTRIBUTING · package.json identity. |
| **v0.3 — Typing & state** | Eliminate `any`; ground state in TanStack Query. | IMP-01..06, IMP-14. |
| **v0.4 — Performance & tests** | Code splitting, smoke-test coverage, CI. | IMP-11, IMP-13, IMP-19. |
| **v0.5 — Tooling & repo chrome** | Prettier, Husky, dependabot, templates. | IMP-15, IMP-16, IMP-20..23. |
| **v1.0 — Real backend** | Swap mocks for a real API; auth via SSO; real recommender. | Backend + service layer + auth integration. |

Detailed breakdown in [`IMPROVEMENTS.md`](IMPROVEMENTS.md).

---

## 11. Open questions & risks

- **Backend integration strategy.** REST vs GraphQL · DTO ownership · pagination convention. To be settled before IMP-04 lands.
- **Auth provider.** SSO via the host org's IdP (likely Okta / Azure AD) — out of scope, but the UI must assume a session is present.
- **Real AI vs mock.** What model service powers the recommender? Internal or third-party? Affects the `useAiRecommendations` hook contract.
- **Data freshness.** Real-time push vs polling vs on-demand fetch — open until we know the source-system latency budget.
- **Monetisation.** Not a question for the portfolio version; flagged so it does not creep into v1.0 scope by accident.

---

## 12. Glossary

| Term | Meaning |
| --- | --- |
| **Deal** | A sales opportunity with a client, a product, a stage, and a margin. |
| **Client** | A B2B account. May have many deals over time. |
| **Margin** | Revenue minus cost, expressed as percent or absolute value. |
| **SLA** | Service-level agreement attached to a deal — delivery or response time. |
| **Individual condition** | A bespoke contractual term (discount, commission, installment) applied to one deal or one client. |
| **Product effectiveness** | A composite of ROI, margin, win rate, and adoption per product. |
| **Funnel stage** | A position in the sales pipeline (lead → qualified → proposal → negotiation → closed). |
| **Upsell** | Selling a larger version of what the client already buys. |
| **Cross-sell** | Selling a complementary product to an existing client. |
| **Churn risk** | Predicted probability that a client will not renew or will reduce spend. |
