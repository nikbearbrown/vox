# vox — the slate-cut explainer workshop

*Turn one concept from a book into a finished, editorial explainer video.*

**vox** is a self-contained toolkit that takes a single idea — the kind of "wait, *why*
does that happen?" moment buried in a textbook chapter — and builds it into a short,
mixed-media explainer: newsprint-collage motion graphics, cloned-voice narration, an
isotype / design-system visual plane, and a branded outro. **Length is derived from the
concept**, never chosen: a minute if it honestly fits, 3–5 for technical material, hard
cap 5:00. Every film sets up its problem and asks its question on screen **before**
answering it.

The default deliverable is a **slate cut** — a fully watchable video with the motion
graphics, narration, and outro all done, and only the AI photo-stills left as grey
"slate" placeholders for a human to fill later. Nothing bills except the narration audio,
and only once you approve the script.

> **Lineage, stated plainly.** The *motion-graphics grammar* (mixed media, newsprint
> collage, the two-axis shot system) is a homage to Vox's explainer videos. The
> **palette and type are the author's own** — not Vox Media's brand kit — and this project
> is **not affiliated with Vox Media**. See `DESIGN.md`.

## How it works

A reel moves through a phase-gated pipeline, each phase leaving a reviewable artifact:

**scout** (mine a book's chapters for candidate ideas, free) → **plan** a beat sheet +
shot list → **factcheck** every claim → **pedagogy audit** (*Gate P* — the narration must
pass before any audio spend) → **scenes** (Manim motion graphics) → **audio** (ElevenLabs
cloned-voice narration — the master clock) → **render + QC** (two independent static gates
+ a pixel-layout gate) → **outro** → a review MP4.

The audio is ground truth for all timing; the visuals conform to it. Two human sign-off
gates — the pedagogy pass and the slate-cut review — keep quality in the loop: the agent
may author them, but never signs them.

## Layout — vox is the toolkit; your content sits beside it

vox builds videos from content that sits **next to it**, as a sibling folder. Drop any
book beside `vox/` and scout it:

```
books/
├── vox/                     ← this toolkit
├── your-book/               ← any content, a sibling of vox
│   ├── chapters/            ← markdown the scout reads
│   └── youtube/             ← candidate cards + built reels land here
└── another-book/
```

The scout reads `../<book>/chapters/`, writes candidate cards to
`../<book>/youtube/video-ideas.md`, and each reel builds into `../<book>/youtube/<slug>/`.
**Any content works** — vox is the reusable engine; the books are *yours* (which is why
they are not part of this repo, and need their own backup).

## Quickstart

Requires **Python 3** (`manim`, `Pillow`, `numpy`, `requests`, `mutagen`) + **ffmpeg**,
the bundled fonts registered, and an **ElevenLabs API key**. The Remotion lane also needs
**Node**. macOS-oriented (fonts land in `~/Library/Fonts`; `open` commands assume macOS).

```bash
pip install -r requirements.txt

# one-time: register the house fonts so the renderer sees them
cp fonts/*/static/*.ttf fonts/PT_Mono/*.ttf ~/Library/Fonts/

# put your key in .env  (copy the template, then edit)
cp .env.example .env
```

Then drive it with Claude Code from the parent `books/` folder. Per reel, the build
reduces to two commands:

```bash
python3 scripts/generate_audio.py ../<book>/youtube/<slug>   # narration (spends credits)
bash    scripts/vox_run.sh        ../<book>/youtube/<slug>   # render + QC + outro + compile
```

The deliverable is `<slug>-review.mp4`. Full human guide: **`HOWTO.md`**. Machine
playbook: **`SLATE-RUNNER.md`**. Design system: **`DESIGN.md`**.

## Commands

| Command | Does |
|---|---|
| `scout <book>` | Mine a book's chapters into candidate video cards (free) |
| `slate cut <card>` / `run next` | Build a card into a review MP4 |
| `fix <reel>` / `change <reel>: …` | Repair a gate failure / apply a review note |
| `final cut <reel>` | Finalize the 16:9 master + the 9:16 short |
| `audit` | State of every reel across all books → `YOUTUBE.MD` |
| `update` | Migrate built reels to the latest specs |
| `remotion pass <reel>` | Fill slate beats with vox-palette Remotion motion graphics |
| `hai <reel>` / `medhavy <reel>` | Fork a reel into an audience variant |

## Beyond the core

- **Remotion bench** (`remotion/_bench/`) — a curated library of **367** reusable Remotion
  scenes, classified and scored, with a scene-selection playbook, for filling slate beats
  with motion graphics instead of photo stills.
- **Audience variants** (`AUDIENCES.md`) — the same reel re-cut for different audiences,
  each with its own narration voice, writing register, and colorblind-considered palette:
  **NikBearBrown** (Teardown — judge the tools), **MEDHAVY** (Wonder — research students),
  **HAI** (Pragmatist — Humanitarians AI practitioners).
- **Bear's Cubs** (`aspects/kids/`) — early-childhood concept films on the same chassis,
  under developmental-psychology law.

## Repo map

```
CLAUDE.md          the workshop router (start here if you're an agent)
HOWTO.md           human quickstart
SLATE-RUNNER.md    the full build playbook + hard-won conventions
DESIGN.md          the visual system (palette, type, color laws)
AUDIENCES.md       the audience-variant matrix
scripts/           the pipeline: generate_audio · vox_run · vox_compile · vox_outro ·
                   vox_audit · vox_update · vox_variant · vox_remotion …
aspects/           the skills: scout · explainer · remotion-pass · audit · update ·
                   hai · medhavy · kids
remotion/_bench/   the Remotion scene bench (CATALOG · SCENE-SELECTION · index.json · keepers)
voices/            writing-register definitions (wonder · pragmatist · teardown · …)
fonts/             the bundled house fonts (Montserrat · EB Garamond · PT Mono · Inter)
reels/             the worked example + the build queue
```

---

*A research / production toolkit by [nikbearbrown](https://github.com/nikbearbrown). Not
affiliated with Vox Media. Set your own `ELEVENLABS_API_KEY` in `.env` (see
`.env.example`); `.env` is gitignored, so your keys stay local.*
