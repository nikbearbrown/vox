# CLAUDE.md — the Vox slate-cut workshop

This folder does **one thing**: turn a scout candidate card into a pre-flight
**vox-explainer slate cut** (a finished editorial explainer video with slates in
the human image slots). **Length is derived from the concept, never chosen up
front:** a minute if it honestly fits, typically 3–5 minutes for technical
material, hard cap 5:00 — past that, split into two videos, each with its own
question. Every film must SET UP THE PROBLEM and ask its question on screen
before answering it (see SLATE-RUNNER's act structure). It is fully self-contained — the scripts, the
QC gates, the Manim graphics library, and the outro mascot clips are all here.
Ignore any other skills, plugins, books, or pipelines; nothing outside this
folder is needed to build a video.

## Sibling skill: Bear's Cubs (early-childhood, ages 1–5)
`aspects/kids/SKILL.md` — concept films (colors, shapes, numbers) on the same
chassis but under developmental-psychology law, validated by **Gate K**
(`aspects/kids/scripts/kids_gate.py`) BEFORE audio: pacing 4–9s, question →
silent-pause → confirm, 3–5 varied exemplars + one contrast, one <15s jingle,
co-viewing close, age-band runtime caps. Episodes: `books/kids/<series>/<slug>/`.

## Sibling lane: the Remotion pass (fill slate beats with motion graphics)
`aspects/remotion-pass/SKILL.md` — fills **slate beats** (beats with no
`media/<BID>.mp4` and no `manim/<BID>.mp4`) with a **vox-palette Remotion scene**,
rendered to `media/<BID>.mp4` (the compiler's top slot; it conforms the duration).
Template-first from the 367-keeper bench (`remotion/_bench/`, catalog + index),
create-on-gap, **human-gated promotion** into the proven-core project
(`aspects/remotion-pass/remotion/`). One-time setup needs **Node.js/npm** (see that
SKILL.md + the project `README.md`); everything else in this workshop is Python.

## Your operating manual
Read **`SLATE-RUNNER.md`** first — it is the complete playbook (the build loop
and every hard-won convention that keeps the QC gates green). The craft spec is
**`aspects/explainer/vox-explainer/SKILL.md`** (the Manim/own lane); the Remotion
lane spec is **`aspects/remotion-pass/SKILL.md`**.

## Commands
- `scout <book>` — mine a book's chapters for candidate cards into
  `../<book>/youtube/video-ideas.md` (free, no billing). The scout skill is
  `aspects/scout/SKILL.md`; it produces review cards, never videos.
- `run next` — build the top unbuilt card in `reels/QUEUE.md`, stop.
- `slate cut <card | chapter | concept>` — build that specific thing.
- `fix <reel>` / `change <reel>: <request>` — repair a gate failure / apply a review note.
- `remotion pass <reel>` — fill the reel's slate beats that carry a
  `shot.remotion.pattern` with vox-palette Remotion scenes → `media/<BID>.mp4`
  (`scripts/vox_remotion.py`; needs Node/npm — see `aspects/remotion-pass/SKILL.md`).
- `audit` — scan every book's `youtube/` reels, check state (slate-cut / 16:9 / 9:16 /
  complete / blocked), and write `vox/YOUTUBE.MD`. Deterministic + idempotent — a pure
  function of disk, so on a limit/restart just re-run it (`scripts/vox_audit.py`).
- `update [<reel>|--all]` — reconcile built reels to the latest specs: strip the old
  mascot outro (restore pristine narration, FREE), delete out-of-sync/orphan audio, and
  (next phase) append the Remotion outro + regenerate ONLY the new audio. Dry-run by
  default → `vox/UPDATE.md`; `--apply` strips (`scripts/vox_update.py`).
- `hai <reel>` / `medhavy <reel>` — fork the reel into an audience variant
  (`beat_sheet.hai.json` / `beat_sheet.medhavy.json`): the same reel rewritten in that
  audience's register + voice + palette + outro, with the canonical `beat_sheet.json`
  left untouched. `scripts/vox_variant.py` scaffolds the metadata; Claude Code does the
  register rewrite per `aspects/{hai,medhavy}/SKILL.md` + `AUDIENCES.md`.
- `final cut <reel>` — pantry intake, 16:9 master (refuses open slates), AND
  the 9:16 short (drops THE EXAMPLE act) — both into `<reel>/mp4/`. Posting
  to YouTube is a separate pass with its own rules.
- `move on` — stop retrying the current reel, report why.

On `run next` / `slate cut` the human has pre-approved the **ElevenLabs audio**
spend for that card. Image generation is NOT pre-approved — the `ai` stills stay
slates until the human fills them. Nothing else bills.

## Layout
```
scripts/          vox_run.sh · generate_audio.py · vox_compile.py · vox_outro.py · vox_remotion.py · …
aspects/scout/    the vox scout (SKILL.md · reference/ · scripts/scan_book.py)
tmp/qc-tooling/   static_scene_check.py (Gate A) · manim_layout_audit.py (Gate B)
aspects/explainer/vox-explainer/   SKILL.md · manim/vox_graphics.py (shared components)
aspects/remotion-pass/   SKILL.md · remotion/ (Node project: tokens + proven-core scenes)
aspects/audit/    SKILL.md — youtube-state auditor (scripts/vox_audit.py → YOUTUBE.MD)
aspects/update/   SKILL.md — spec/outro reconciler (scripts/vox_update.py → UPDATE.MD)
aspects/hai/ · aspects/medhavy/   SKILL.md — audience variants (scripts/vox_variant.py)
AUDIENCES.md · NIKBEARBROWN.md · MEDHAVY.md · HAI.md   the audience matrix + charters
voices/           the writing-register definitions (wonder · pragmatist · teardown · …)
remotion/_bench/  the 367-keeper Remotion quarry — CATALOG.md · SCENE-SELECTION.md · index.json
YOUTUBE.MD        state of every reel across all books (regenerated by `audit`)
UPDATE.MD         spec-drift report across built reels (regenerated by `update`)
bearbrown/        green-screen mascot clips for the outro law (moving to Remotion — see remotion-pass)
reels/_example-comma-orphan/   a complete worked reel — copy its shape
reels/QUEUE.md    the approved build list
                  (built reels live WITH their book: ../<book>/youtube/<slug>/ — not here)
.env              ELEVENLABS_API_KEY   (before audio: `set -a; . ./.env; set +a`)
```

## Where the videos live — WITH the book, in `youtube/`
Books are **sibling folders** one level up, and each book owns its videos in a
`youtube/` directory. The candidate cards are `../<book>/youtube/video-ideas.md`;
each reel is **built into `../<book>/youtube/<slug>/`** — NOT here in the toolkit.
Source chapters are `../<book>/chapters/<file>.md`. So: read cards + chapters from
`../<book>/`, build the reel into `../<book>/youtube/<slug>/`. `vox_run.sh` takes
the reel path anywhere, renders in place, and pulls its assets from this toolkit.

## First-run smoke test (verify the toolchain on this machine)
```bash
cd /Users/bear/Documents/CoWork/bear-textbooks/books/vox
python3 -c "import manim, PIL, numpy, requests, mutagen; print('py deps ok')"
which ffmpeg && fc-list | grep -i 'georgia\|gelasio' | head -1
# Gate A on the bundled example (no render, no network):
T=$(mktemp -d); cp reels/_example-comma-orphan/vox_scenes.py "$T/"
PYTHONPATH=aspects/explainer/vox-explainer/manim \
  python3 tmp/qc-tooling/static_scene_check.py "$T/vox_scenes.py" --class B04_TwoTables; rm -rf "$T"
```
If those pass, `run next` will work end to end.

## Two commands the build reduces to (per reel)
```bash
python3 scripts/generate_audio.py ../<book>/youtube/<slug>   # GATE 0 audio (spends credits)
bash    scripts/vox_run.sh        ../<book>/youtube/<slug>   # render + QC + outro + review compile
```
The deliverable is `../<book>/youtube/<slug>/<slug>-review.mp4`.
