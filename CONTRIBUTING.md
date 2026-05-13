# Contributing to DealsNext Insight Hub

Thanks for taking the time to look at this project. It is primarily a personal portfolio surface, but pull requests, suggestions, and bug reports are welcome — especially anything that closes an item from [`docs/IMPROVEMENTS.md`](docs/IMPROVEMENTS.md).

## Code of conduct

This project follows the [Contributor Covenant](https://www.contributor-covenant.org/) v2.1. Be excellent to each other.

## Local setup

**Prerequisites:** Node.js 20+ and npm.

```sh
git clone https://github.com/eiler2005/dealsnext-insight-hub.git
cd dealsnext-insight-hub
npm install
npm run dev        # http://localhost:8080
```

Before opening a PR, run:

```sh
npm run lint
npm run build
```

Both should succeed locally; CI (once `IMP-19` lands) will gate PRs on the same checks plus tests.

## Branching

- `main` is the integration branch. Treat it as protected once CI exists.
- Feature work: `feat/<short-slug>` — e.g. `feat/deals-typing`.
- Bug fixes: `fix/<short-slug>` — e.g. `fix/sidebar-z-index`.
- Docs: `docs/<short-slug>` — e.g. `docs/improvements-update`.
- Chores: `chore/<short-slug>` — e.g. `chore/deps-bump`.

One concern per branch. If a PR grows beyond ~400 lines of diff (excluding lockfiles and snapshots), split it.

## Commit style

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>
```

Allowed `type` values: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `build`, `ci`, `revert`.

Examples:

- `feat(deals): add SLA filter to the deals table`
- `fix(sidebar): correct collapsed-state focus ring`
- `docs(architecture): document target data flow`
- `refactor(deals): extract dealBadges config`
- `chore(deps): bump vite to 5.4.10`

The subject line is imperative, lowercase, no trailing period, ≤ 72 characters. A longer body is welcome, separated by a blank line, wrapped at 100 columns.

## Pull request checklist

Before requesting review, make sure:

- [ ] Your branch is rebased on the latest `main`.
- [ ] `npm run lint` exits 0 (with the rules in `eslint.config.js` as they are at your time of writing).
- [ ] `npm run build` succeeds.
- [ ] You added or updated tests when relevant (post `IMP-13`).
- [ ] You added screenshots or a short screen recording for any UI change.
- [ ] You linked the PR to the relevant `IMP-XX` from [`docs/IMPROVEMENTS.md`](docs/IMPROVEMENTS.md) if applicable.
- [ ] You did not edit anything in `src/components/ui/` (vendored shadcn primitives — see [Coding standards](#coding-standards)).
- [ ] You did not introduce new `any`. Existing `any` should shrink with each PR, not grow.

## Coding standards

- **Strict TypeScript.** New code does not introduce `any`. Use a `unknown` + narrowing if you genuinely don't know the shape.
- **Functional components and hooks.** No class components.
- **Component naming.** `PascalCase` files for React components; `camelCase` for hooks (`useDealsQuery.ts`); `kebab-case` is reserved for static asset filenames.
- **Feature folders.** New feature components go under `src/components/<feature>/`. Don't put them in `components/ui/`.
- **`components/ui/` is vendored.** It contains shadcn/ui primitives. We do not edit them — we compose around them. If a primitive lacks a prop, wrap it in a feature component.
- **Imports use the `@/` alias** for anything under `src/`.
- **No barrel `index.ts` files** (yet). They make Vite's dependency graph noisier and hide where symbols originate.
- **CSS via Tailwind.** Avoid inline `style={{...}}`. The escape hatch is the `cn()` helper in `src/lib/utils.ts`.
- **Mock data goes through `src/data/mockData.ts`** until `IMP-05` introduces `src/services/`. After that, pages and hooks read from services, not directly from `data/`.

## Reporting issues

Open a GitHub issue with:

- A short, specific title.
- Steps to reproduce.
- Expected vs. actual behaviour.
- Browser + OS + screenshots if it's a UI bug.

Once `IMP-20` lands, issue forms will guide you through the right template.

## License of contributions

By contributing, you agree that your changes are licensed under the [MIT License](LICENSE), the same license the project uses.
