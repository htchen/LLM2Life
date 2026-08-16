# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Teaching material for a **three-hour, hands-on workshop** (in Traditional Chinese) that shows
**non-programmers** how to use Claude Code + GitHub to build small tools for daily life.
There is no application to ship here — the deliverable is the material itself.

Students attend with their own GitHub account and their own paid Claude account, and leave with
one public URL hosting three working tools they built during the session.

## Commands

```bash
npm install              # only needed to build slides

npm run slides           # build slides/deck.md -> dist/deck.html
npm run slides:pdf       # build slides/deck.md -> dist/deck.pdf (what you present from)
npm run slides:watch     # live preview on http://localhost:8080 while editing
npm run site             # open site/index.html locally to check the companion site
```

Slides are [Marp](https://marp.app/) Markdown. `npx` pulls the CLI, so `npm install` is optional
if you already have network access at build time.

There are no tests and no linter — prose and teaching material are the product. "Correct" here
means *a beginner can follow it without the instructor intervening*.

## The four surfaces, and why they drift

The same workshop is expressed four times, for four different readers. Editing one without the
others is the main way this repo breaks:

| Surface | Reader | Lives in |
| --- | --- | --- |
| Slides | the room, projected | `slides/deck.md` |
| Workbook | the student, at their own pace | `workbook/lab-*.md` |
| Companion site | the student, on a second screen | `site/index.html` |
| Instructor notes | whoever is teaching | `instructor/` |

`instructor/timeline.md` is the **source of truth for timings and lab order**. If a lab grows or
shrinks, update the timeline first, then propagate. When you change what students actually type,
the prompt must match verbatim in *both* `workbook/lab-N-*.md` and `site/index.html` — students
copy from the site and check their work against the workbook, and a mismatch reads as a bug in
the material.

`site/index.html` is published as an Artifact at:

    https://claude.ai/code/artifact/07d306ff-7de3-4224-96e8-74e007d1d289

**Republish to that same URL** (pass it as the `url` parameter from a conversation that didn't
publish it) — students are given the link ahead of the session, and a new URL orphans it.

It is deliberately a single self-contained file with no external subresources (no CDN, no
webfonts, no remote images) — it must work on lecture-hall wifi that blocks half the internet,
and on a phone. No webfont is loaded on purpose: CJK faces are megabytes and the CSP blocks font
CDNs, so the type personality comes from weight, scale, and spacing on the system TC stack.

## Load-bearing facts

These are verified against the current docs and shape the whole design. Do not soften them:

- **Claude Code requires a paid plan** (Pro / Max / Team / Enterprise). A free Claude account
  cannot use it. This is the single biggest way to lose students in the first fifteen minutes,
  which is why it leads `instructor/pre-workshop-email.md`.
- **The Desktop app is the primary path**, not the terminal. It bundles Claude Code, needs no
  Node.js and no CLI, and gives beginners a visual diff. The terminal is presented as optional.
- **`claude.ai/code` (web) is the rescue path** for anyone whose install fails. It needs a GitHub
  repo and is research-preview for Pro/Max/Team.
- **GitHub Pages needs a public repo** on free accounts. Students are told to make
  `my-life-tools` public at creation time — flipping it later mid-lab costs five minutes.
- **Lab 2's workflow must carry both `workflow_dispatch` and `permissions: contents: write`.**
  `workflow_dispatch` is non-negotiable: a `schedule:` trigger alone cannot be demonstrated
  inside a workshop, and a scheduled run only fires from the default branch anyway.

## Student repo shape

Everything students build goes in **one** repo (`my-life-tools`) with one folder per lab, so
GitHub setup is paid once and the three labs stay independent:

```
my-life-tools/
├── index.html      # landing page linking the three tools (built in Lab 3)
├── expenses/       # Lab 1 — local, localStorage, no build step
├── digest/         # Lab 2 — GitHub Actions writes dated Markdown files here
└── habits/         # Lab 3 — localStorage, published via Pages
```

`starter/` is the template students clone at the start. Keep it nearly empty on purpose: the
point of the workshop is that Claude Code writes the code, so anything pre-written there is a
lesson the student doesn't get to have.

## Writing conventions

- **Traditional Chinese (繁體中文, Taiwan idiom) for all prose.** Commands, code, file names, and
  literal UI labels stay in English — students must match what they see on screen. Write
  「按 **Settings** → **Pages**」, never 「按設定 → 頁面」.
- Every lab step a student performs is written as an imperative with a **verifiable end state**
  (「你應該會看到…」). Steps a beginner cannot self-check are how a room silently falls behind.
- Prompts students paste into Claude Code are fenced as `text`, never `bash` — they are not
  shell commands, and beginners genuinely make that mistake.
- Each lab ends with a **✅ 檢查點** and a **落後了？** escape hatch, so falling behind in Lab 1
  never cascades into Lab 2.
- Reference implementations live in `instructor/reference/` and are for the *instructor* to
  rescue a stuck student with. Do not link them from the workbook.
