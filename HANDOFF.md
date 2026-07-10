# HANDOFF — vox workshop (books/vox)

Written 2026-07-08 from a Cowork session. **The repository is the source of
truth, not this file** — verify anything that matters by reading the files
(grep, open, run the gates). This summary can be stale the moment another
session commits; parts of the repo were already changed in parallel by Claude
Code sessions this handoff did not audit (marked below).

## What this is
The self-contained workshop that turns scout candidate cards into vox-explainer
videos (editorial paper-collage explainers), plus sibling skills that share the
chassis: a scout, a kids/early-childhood skill with a song mode, and a Remotion
slate-filler. Reels build into each book's `youtube/<slug>/`; this folder holds
the scripts, QC gates, fonts, design constitution, and skills. Operating manual:
`/Users/bear/Documents/CoWork/bear-textbooks/books/vox/SLATE-RUNNER.md`.

## Current state (verified on disk at write time)
- Git: repo `github.com/nikbearbrown/vox`, branch main, 5 local commits, ~18
  uncommitted paths (NEU.md, aspects/neu/, remotion token edits, AUDIENCES.md,
  SLATE-RUNNER.md and others modified). Push state unverified.
- **Stale git lock files**: the Cowork device bridge cannot delete files, so
  `.git/index.lock` (and possibly `HEAD.lock` / `tmp_obj_*`) may be present and
  will block git until removed on the Mac:
  `cd /Users/bear/Documents/CoWork/bear-textbooks/books/vox && rm -f .git/*.lock && find .git/objects -name 'tmp_obj_*' -delete`
- **Security**: `.env` (ElevenLabs key) was tracked in an early pushed commit.
  It is gitignored now, but the key was on GitHub — rotation was advised and is
  not confirmed done. `.env` must never be committed.
- 19 built comp-skep reels exist in
  `/Users/bear/Documents/CoWork/bear-textbooks/books/computational-skepticism-for-ai/youtube/`;
  a Gate W fleet audit found 99 errors (92 = GOLD used as text color). A fix
  prompt was written in the session chat; whether it was run is unverified.

## Decisions made this session (each lives in the named file)
- **Type**: SerifLabel → EB Garamond italic; LabelChip → Montserrat tracked
  caps; Inter retired from the frame. `DESIGN.md` (2026-07-08 amendment),
  `aspects/explainer/vox-explainer/manim/vox_graphics.py`.
- **Format doctrine**: length derived from the concept, hard cap 5:00 (over →
  split); mandatory act structure COLD OPEN (key case) → THE QUESTION (gap
  formula) → PROBLEM → MECHANISM → IMPLICATION → THE EXAMPLE (16:9 only,
  made-up worked instance, dropped from 9:16) → RECAP. Topic, never the book
  title or chapter number, on screen. `SLATE-RUNNER.md`.
- **Gates** (never bypassed): Gate F = paperwork set (FACTCHECK.md +
  SHOTLIST.md + PROMPTS.md) in `scripts/vox_run.sh`; GATE P = pedagogy audit,
  `generate_audio.py` refuses without `PEDAGOGY.md` ending `VERDICT: PASS`;
  Gate W = independent WCAG/margins/overlap AST check,
  `tmp/qc-tooling/wcag_margin_check.py` (note: modified after this session by
  parallel work — read it fresh). Gate K = kids pedagogy validator,
  `aspects/kids/scripts/kids_gate.py`.
- **SHOTLIST is a typed work order** (per-slot sections, archive links,
  beat-id-prefixed prompts) and **PROMPTS.md is the extracted paste surface**.
  Built cards and QUEUE rows carry absolute-path `open …-review.mp4` commands.
- **Final cut** = 16:9 master (refuses open slates) + 9:16 short, both to the
  reel's `mp4/`; stills mirrored to `images/`. Pantry law: beat-id filenames,
  audio stripped, center-cut long clips, slow-to-fit short ones, >3× slow →
  `replace_log.md`. `SLATE-RUNNER.md`, `scripts/vox_compile.py`.
- **Scout** lives in `aspects/scout/` (cards → `<book>/youtube/video-ideas.md`,
  new card fields: Topic, Key case, The Question, Example seed, Length band,
  Still lanes).
- **Kids skill** in `aspects/kids/`: Gate K laws (pacing 4–9s, question →
  silent 2–4s pause → confirm, 3–5 varied exemplars + one minimal-pair
  contrast, one <15s jingle, co-viewing close, concept×age map — no numerals
  or drawing tutorials for 1–3), closed 8-pose host library
  (`reference/characters.md`, placeholder sheet `host/character-sheet.svg`),
  [STAR] token registry with GitHub-raw refs (`reference/star-tokens.md`,
  identity-stable-not-pixel-identical law), and SONG MODE
  (`scripts/song_prompts.py`: lyrics → beats → PROMPTS.md; volunteers pick;
  Midjourney video clips → pantry; song is the only audio track).
- **Worked song example**:
  `/Users/bear/Documents/CoWork/bear-textbooks/books/kids/songs/godel-unprovable-truths/`
  — 48 beats, all scenes authored, PROMPTS.md paste-ready. Blocked on: the
  character ref images (`aspects/kids/host/refs/star.png`, `godel.png`) do not
  exist yet and the repo must be pushed public for Midjourney to fetch the raw
  URLs; `song.mp3` not yet recorded.

## Parallel work NOT audited by this handoff (read before relying)
`aspects/audit/` (YOUTUBE.MD state report), `aspects/update/` (outro
migration), `aspects/hai/` and `aspects/medhavy/` (audience variant cuts),
`aspects/neu/` + `NEU.md` + `AUDIENCES.md` (audience system),
`aspects/remotion-pass/` (fills slate beats from the template bench at
`remotion/_bench/` — 331+ harvested tsx files across 7 collections; license
provenance unchecked before any public push), `scripts/vox_variant.py`,
recent edits to `wcag_margin_check.py` and `vox_graphics.py`.

## Working constraints
- ElevenLabs spend is pre-approved only on `run next`/`slate cut`; image/video
  generation is never auto-run. Gates are never bypassed; a failed audit means
  the beat sheet is rewritten, not annotated around.
- Cowork operational note: the uploads bridge can serve stale file snapshots
  when re-staging a previously staged path — sessions keep local canonical
  copies and re-verify before committing over newer work.

## Open items (fuller list: `TODO.md` in this folder)
Retrofit the 19 built reels to current doctrine (prompt in chat history / can
be rewritten from SLATE-RUNNER); run the Gate W gold-text fix; geoplate
machinery (GEOMETRY.md, vox_geo.py, lint); vtracer sandwich script; three-lane
docs; reallocation queue (11 unbuilt cards, cards in `vids/`); first cubs
episode + series jingle; character refs + repo push + key rotation; reconcile
remotion-pass with today's doctrine; bench license check.

## Key files
`SLATE-RUNNER.md` (playbook) · `DESIGN.md` (visual constitution) · `HOWTO.md`
(human quickstart + paste prompts, incl. scout) · `CLAUDE.md` (commands) ·
`TODO.md` · `AUDIENCES.md`/`NEU.md` (unaudited) · `aspects/` (skills) ·
`scripts/` (pipeline) · `tmp/qc-tooling/` (gates A/B/W) · `reels/QUEUE.md`.
