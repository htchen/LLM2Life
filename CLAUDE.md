# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Teaching material for a **three-hour, hands-on workshop** (in Traditional Chinese) that shows
**non-programmers** how to use AI + GitHub to build small working tools.
There is no application to ship here — the deliverable is the material itself.

**The audience is high-school teachers, attending as seed teachers.** That sets up a
teacher-to-teacher bootstrap with two returns:

1. They re-run this workshop for other teachers at their own school — which is why the
   `instructor/` layer (timeline, insights, troubleshooting, pre-workshop email) is part of the
   deliverable, not backstage material, and why the repo is CC BY 4.0.
2. They use what they learned to build tools that support their own teaching — 高中教材製作與
   輔助教學 is the project domain, not a generic personal-productivity tool.

**Students never need an account.** The tool a teacher builds is a web page their students
*use*; the students do not use Claude or GitHub. This is a deliberate design decision that
sidesteps the age and consent restrictions on both services — do not introduce a step that
requires a student to sign up for anything.

**The default track is the free one, in `variant-free/`**: claude.ai's free chat plus the GitHub
web UI, no subscription and no install. The repo root holds the **Claude Code (paid) version**,
kept for sessions where the host pays or students already have Pro or above. The folders were
deliberately NOT swapped when the free version became primary — root is still the paid material —
so read the version label before editing, not the path.

Students attend with their own GitHub account and their own Claude account (free is enough on the
default track), and leave with a public URL hosting the working tool they built during the session.

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

**Both versions have all four.** The paths above are the paid version's; the free version's are
the same names under `variant-free/`. Every drift rule below applies within a version, never
across the two.

`instructor/timeline.md` is the **source of truth for timings and lab order**. If a lab grows or
shrinks, update the timeline first, then propagate — including the slide-number column, which is
easy to leave stale. When you change what students actually type, the prompt must match verbatim
in *both* `workbook/lab-N-*.md` and `site/index.html` — students copy from the site and check
their work against the workbook, and a mismatch reads as a bug in the material.

`instructor/insights.md` is the **source of truth for the argument** — the four 🧠 segments
(three 3-minute interludes plus the 12-minute closing). Slides carry only the conclusions; the
reasoning, the evidence, and the Q&A rebuttals live there. Never edit an insight slide without
reconciling it with that file, or the speaker ends up defending a claim the notes don't support.

Both `site/index.html` files are published to **GitHub Pages**, not as Artifacts — see the
`web/` section for the mapping. The Artifact URLs they used to live at (`07d306ff…` paid,
`f9e2701f…` free) are **superseded**; do not republish to them and do not cite them.

The move was forced by the bootstrap use case: teachers take this material back to their own
schools and hand the link to their students. An Artifact is private by default and needs a login
plus sharing permissions, so a classroom of students mostly cannot open one. A Pages URL is
plain, public, and needs no account.

Each companion site is deliberately a single self-contained file with no external subresources (no CDN, no
webfonts, no remote images) — it must work on lecture-hall wifi that blocks half the internet,
and on a phone. No webfont is loaded on purpose: CJK faces are megabytes and the CSP blocks font
CDNs, so the type personality comes from weight, scale, and spacing on the system TC stack.

## `web/`: the public front door, not a second companion site

`web/index.html` is the project's **landing page**, published to GitHub Pages at
`https://htchen.github.io/LLM2Life/` by `.github/workflows/pages.yml`. The workflow publishes
exactly eight files, and nothing else:

| Published as | Source |
| --- | --- |
| `/` | `web/index.html` |
| `/pre-workshop.html` | `variant-free/site/pre-workshop.html` (free — the default track) |
| `/pre-workshop-paid.html` | `site/pre-workshop.html` (Claude Code) |
| `/handbook.html` | `variant-free/site/index.html` (free — the default track) |
| `/handbook-paid.html` | `site/index.html` (Claude Code) |
| `/seed-teacher.html` | `web/seed-teacher.html` (guide for teachers re-running the workshop) |
| `/slides.html` | `variant-free/slides/deck.md` — **built by Marp in CI**, not copied |
| `/slides-paid.html` | `slides/deck.md` — built by Marp in CI |

The unqualified names are the free ones on purpose: those are the links students are given.
All four student-facing pages share the `htchen.github.io` origin, so each must keep a
**distinct `localStorage` key** — currently `llm2life-preworkshop-free-v1`, `…-v1`,
`llm2life-free.progress`, `llm2life.progress`. Two pages sharing a key silently overwrite each
other's checkboxes and progress.

Keep the roles apart:

- **Pages is the only home for the 隨堂網站.** Publishing a second copy anywhere — an Artifact,
  a personal site — means half the room reads a stale one. The old Artifact URLs are retired.
- **The two `site/pre-workshop.html` files are the source of truth for the prep pages.** Pages
  serves copies. Never edit a copy — there is none in the repo to edit, and hand-editing the
  published output is silently overwritten on the next push. The free page is a content rewrite
  of the paid one that keeps its entire stylesheet and component classes; restyle both together
  or neither.
- **The landing page deliberately carries no numbers that drift** — no slide count, no
  per-segment minutes, no total page counts. It links to `instructor/timeline.md` instead. When
  you change timings, you should not need to touch `web/`. Keep it that way.
- It follows the same self-contained rule as `site/index.html` (no CDN, no webfonts, no remote
  images) and reuses that file's exact CSS custom properties, so the two read as one project.

Only the two Artifact URLs are duplicated between `README.md` and `web/index.html`. If either
ever changes, both files need the edit.

## Load-bearing facts

These are verified against the current docs and shape the whole design. Do not soften them:

- **The default track needs no payment and no install.** Free claude.ai plus the GitHub web UI.
  Its cost is mechanical, not conceptual: students hand-execute the "turn text into a file" step,
  which is why every prompt there ends with 「請給我完整程式碼」 and why it runs 195 minutes
  rather than 180.
- **Claude Code requires a paid plan** (Pro / Max / Team / Enterprise). A free Claude account
  cannot use it. On the paid track this is the single biggest way to lose students in the first
  fifteen minutes, which is why it leads `instructor/pre-workshop-email.md`. It is also the whole
  reason the free track is the default.
- **On the paid track, the Desktop app is the primary path**, not the terminal. It bundles Claude
  Code, needs no Node.js and no CLI, and gives beginners a visual diff. The terminal is optional.
- **`claude.ai/code` (web) is the rescue path** for a failed paid-track install. It needs a GitHub
  repo and is research-preview for Pro/Max/Team.
- **GitHub Pages needs a public repo** on free accounts. Students are told to make
  `my-life-tools` public at creation time — flipping it later mid-lab costs five minutes.
- **The individual project stays inside a constrained technical envelope:** one primary user,
  one core problem, one demonstrable flow, and a low-risk local-first implementation. Login,
  databases, multi-user sync, payments, sensitive data, and outbound automation are deferred.
- **The optional GitHub Actions reference still requires both `workflow_dispatch` and
  `permissions: contents: write`.** It is no longer part of the required class sequence.

## Open-project sequence: progressively release control

The common exercise establishes the mechanics. After the break, students generate their own
problems, define a minimum scope, write acceptance criteria, plan 2–4 steps, and build two
iterations. **This order is load-bearing.** Do not ask AI for solutions before students have
written a problem statement, and do not let implementation begin before acceptance criteria exist.

When editing, preserve these gates:

- Students list three problems before selecting one.
- The brief contains no more than three required features and at least two explicit exclusions.
- Every implementation step has an observable acceptance method.
- The first build produces a usable core flow and is saved before the second iteration.
- The last segment stops feature work and shifts to demonstration, evidence, and the next version.

## `variant-free/`: the default track, living in a non-default folder

`variant-free/` is the free-account version: claude.ai chat + the GitHub web UI instead of
Claude Code. **It is what gets taught by default** — students on free accounts, locked-down lab
computers, or zero-budget/remote delivery are the normal case, not the exception. It duplicates
the four-surface structure (slides/workbook/site/instructor) rather than branching off the root
material, because the two versions genuinely disagree at the mechanical level — students there
hand-execute the "turn text into a file" step the paid version automates — and a shared template
would force every edit to be re-justified for a workflow it wasn't written for.

**The folder name understates its status.** Primacy was flipped in the documents (README, the
landing page, this file), not by moving files, so that the change stays reversible and no link
breaks. Do not "fix" this by assuming the root is authoritative: when a reader asks how the
workshop runs, the answer comes from `variant-free/instructor/timeline.md`.

Treat the two as sibling material with their own drift rules, neither a downstream copy of the other:

- Its `timeline.md` and `insights.md` are independent documents with a **different thesis**.
  Both versions use the same project process. The free variant additionally teaches the manual
  full-file replacement cycle and separates repeatable file operations from user judgment.
- Its prompts are **not** required to match this workshop's verbatim — every prompt there ends
  with an extra sentence demanding the complete file, which is load-bearing there and pointless
  here. Judge `variant-free/` prompt changes against its own workbook/site pair, per its own
  `README.md`, not against this repo's.
- When a project phase's *scope* changes here (a requirement added or cut, not just wording), check whether
  `variant-free/` needs the same scope change — but expect the prompt text and step mechanics to
  diverge, not match.

## Student repo shape

Everything students build goes in **one** repo (`my-life-tools`). The common exercise and personal
project stay separate, while optional examples remain available for reference:

```
my-life-tools/
├── inquiry/        # shared practice — localStorage, no build step
├── project/        # student's individual minimum viable project
├── digest/         # optional reference — GitHub Actions output
└── habits/         # optional reference — localStorage and Pages
```

`starter/` is the template students clone at the start. Keep it nearly empty on purpose: the
point of the workshop is that Claude Code writes the code, so anything pre-written there is a
lesson the student doesn't get to have.

## Writing conventions

- **Traditional Chinese (繁體中文, Taiwan idiom) for all prose.** Commands, code, file names, and
  literal UI labels stay in English — students must match what they see on screen. Write
  「按 **Settings** → **Pages**」, never 「按設定 → 頁面」.
- Use neutral, direct prose. Avoid jokes, slang, exaggerated claims, anthropomorphic judgments,
  or wording that frames the reader as incapable. Prefer 「常見問題」, 「疑難排解」,
  「需要追上進度」, 「錯誤訊息」, and 「發布成公開網站」 over playful metaphors.
- Every project step a student performs is written as an imperative with a **verifiable end state**
  (「你應該會看到…」). Steps a beginner cannot self-check are how a room silently falls behind.
- Prompts students paste into Claude Code are fenced as `text`, never `bash` — they are not
  shell commands, and beginners genuinely make that mistake.
- Each phase ends with a **✅ 檢查點**. Falling behind means preserving the current usable version
  and moving unfinished work to the next-version list, not skipping ideation or acceptance criteria.
- Reference implementations live in `instructor/reference/` and are for the *instructor* to
  use when resolving student issues. Do not link them from the workbook.
