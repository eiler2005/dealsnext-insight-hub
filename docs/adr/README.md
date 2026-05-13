# Architecture Decision Records

This directory holds **Architecture Decision Records (ADRs)** — short, immutable notes that capture *why* a non-obvious architectural choice was made. The first real record will land when the project makes the first decision that cannot be inferred by reading the code (for example: choosing REST vs GraphQL for the backend, picking an auth provider, or selecting a state-management library beyond what TanStack Query covers).

## When to write one

Write an ADR when **all** of the following are true:

- The decision has long-term, project-wide consequences.
- Reasonable engineers could disagree, and the chosen path is not the obvious one.
- The "why" is not visible in the code itself.

If a decision is reversible, local, or self-evident, skip the ADR — a clear PR description is enough.

## Format

We use the Nygard-style template, adapted slightly. Each record is a Markdown file named `NNNN-short-slug.md`, where `NNNN` is a four-digit zero-padded sequence (`0001`, `0002`, …). Records are **append-only**: never edit an accepted ADR; supersede it with a new one and link both ways.

```
# ADR-NNNN — <Short title>

- **Status:** Proposed | Accepted | Superseded by ADR-MMMM | Deprecated
- **Date:** YYYY-MM-DD
- **Decision-makers:** <names>

## Context
What problem are we solving? What constraints apply? What did we consider but reject?

## Decision
What did we decide, in one or two sentences?

## Consequences
What becomes easier? What becomes harder? What follow-up work does this imply?
```

## Status lifecycle

- **Proposed** — Up for discussion in a PR. Not yet binding.
- **Accepted** — Merged. This is now how we build.
- **Superseded** — A later ADR replaces this one. Both files cross-reference each other.
- **Deprecated** — No longer relevant; left for historical context.

## Index

_No ADRs accepted yet._ This section will list each record by number, title, and status as they are added.

## Reference

- Michael Nygard, [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions.html) — the original write-up.
- ThoughtWorks, [Lightweight Architecture Decision Records](https://www.thoughtworks.com/insights/blog/scaling-engineering-teams-via-writing-things-down-rfcs) — practical guide to running them as a team.
