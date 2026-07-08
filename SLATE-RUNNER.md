# SLATE-RUNNER — how Claude Code turns a scout card into a pre-flight slate video

**Read this file, then do what the human's command says.** This is the operating
manual for building vox-explainer *slate cuts* end-to-end on the Mac (real shell:
ElevenLabs, Manim, fonts, the `.env` key). The Cowork sandbox cannot render or
reach ElevenLabs — you (Claude Code) can. You own the whole loop to the review MP4.

The skill that defines the craft is
`aspects/explainer/vox-explainer/SKILL.md` (the `slate cut` command). This file
adds the **runner discipline** and the **hard-won conventions** that keep the QC
gates green on the first or second try.

---

## Commands the human will type

- **`run next`** — pop the top unbuilt card from `reels/QUEUE.md`, build it to a
  review MP4, mark it done, stop. (Do ONE unless told "run next 3" / "run the queue".)
- **`slate cut <card | chapter | concept>`** — build that specific thing now.
- **`fix <reel>`** — a gate failed on a human run; read the audit, fix, re-run.
- **`change <reel>: <request>`** — a review-note change; edit the affected
  beat(s) only, recompile (the slot contract recompiles only changed slots).
- **`move on`** — stop retrying the current reel, leave it as-is, report why.

On `run next` / `slate cut`, **the human has pre-approved the credit spend** for
that card (ElevenLabs audio; NOT image generation — stills stay slates). If a
card needs anything else that bills, ask first.

---

## Unattended / silent runs (whole-book batches)
Built to run hands-off across a book's queue. The real guardrails:
- **Permissions:** true silent mode needs Claude Code launched with
  `--dangerously-skip-permissions` (or a bash+write allowlist); otherwise it
  pauses for approval on every command.
- **Prove ONE first.** Before batching a whole book, build ONE reel and eyeball
  its review MP4 — fonts right? teal right? titles Montserrat? The dangerous
  failure is fonts not visible to fontconfig: Pango **silently substitutes**, the
  gates still pass, and you get a book of wrong-font videos. Retries can't catch
  that — only your eyes can, once. Verify:
  `fc-list | grep -iE 'garamond|inter|montserrat|pt mono'` lists all four.
- **Resumable → finishes a book across sessions.** State lives in `QUEUE.md`
  (checked / `[blocked]`) and the per-reel folders. If a session ends or context
  fills, restarting with "build the next unbuilt card" continues where it left
  off — so it works through a whole book even past one session's limits.
- **Deliverable is a SLATE cut.** The one `ai` still per reel stays a slate
  (image generation is NOT auto-run, even though `FAL_KEY` exists) — you fill
  those later. Audio IS generated (spends credits, pre-approved on a build).
- **Gates ≠ taste.** Passing Gate A/B means "no crash, no overlap," not "good."
  Review the slate cuts and fire back `change <reel>: …` notes.

## The loop (per card)

**Reel location:** a reel is built **with its book**, in
`books/<book>/youtube/<slug>/` — NOT in this toolkit. `<REEL>` below means that
path (from here, `../<book>/youtube/<slug>`). `vox_run.sh <REEL>` renders in
place and pulls assets from the toolkit. `reels/` here holds only the example +
`QUEUE.md`. (Older shorthand `reels/<slug>` in the steps = `<REEL>`.)

1. **Plan.** Read the source chapter named on the card. Write
   `<REEL>/beat_sheet.json` and `SHOTLIST.md`: narration ≤28 words/beat, one
   shot `type × source × motion` per beat, a color law, and the card's
   EXCLUSIONS copied into `metadata.note`. Slug is kebab-case and descriptive
   of the mechanism (e.g. `vox-comma-orphan`), not the card number.

   **SHOTLIST is a typed WORK ORDER, not a summary.** The histogram, rhythm
   check, act map, color law, and exclusion confirmations are the top half.
   The bottom half is one section PER SLOT the human fills (`STILL · ai`,
   archive STILL, DOCUMENT scan, `COMPOSITE · ai`), each carrying:
   - the beat id in the section header;
   - public-archive search links (Wikimedia/archive.org/etc.) wherever a
     real asset might exist, with any provenance notes;
   - a paste-ready generative prompt in its own fenced code block that
     BEGINS with the beat id — `B02, 43-year-old Max Born, 1926, German
     physicist at his desk in Göttingen, …` — so downloaded results map
     back to their beats without bookkeeping;
   - PROMPT LAW: name the object, the count, the geometry, the
     distribution, the material, the camera angle, the light source, and
     the exclusions. A vague noun phrase returns thirty different images;
     a specified one returns variations of the right image.
   A shotlist with no per-slot sections for its fill-in beats is
   INCOMPLETE — vox-wave-function's SHOTLIST.md is the reference shape.

   **Also write `<REEL>/PROMPTS.md`** — the prompts EXTRACTED: one fenced,
   beat-id-prefixed prompt block per open slot and nothing else, so the
   human can work down the file pasting into generators without hunting
   through the shotlist. SHOTLIST.md keeps the full work order (links,
   provenance, prompt law); PROMPTS.md is the paste surface. `vox_run.sh`
   refuses to render without FACTCHECK.md + SHOTLIST.md + PROMPTS.md.

   **Length law — derived, never chosen.** Build the arc the concept needs,
   then count: a minute if it honestly fits, typically 3–5 minutes for
   technical material, **hard cap 5:00**. If the honest treatment runs past
   5:00, do NOT compress — split into two cards, each with its own question,
   and tell the human.

   **Act structure — the film must ASK its question before answering it.**
   Beats group into acts, in this order:
   - **COLD OPEN** (1–3 beats): a concrete situation and its stakes. No
     thesis, no verdict yet.
   - **THE QUESTION** (1 beat, mandatory): name the film's one question,
     on screen (card or dek) AND in narration. If you cannot write this
     beat, the card isn't ready to build.
   - **THE PROBLEM** (2–5 beats): the setup the answer needs — the naive
     expectation and why a reasonable person holds it. This is what makes
     the answer land; never skip to solutions.
   - **THE MECHANISM** (the bulk, 2–4 acts separated by section cards):
     why reality diverges from the naive expectation.
   - **THE IMPLICATION** (1–3 beats): where this bites in the real world.
   - **THE EXAMPLE** (16:9 full cut only — mandatory, 1–3 beats, right
     before RECAP): a simple, realistic, MADE-UP instance of the mechanism
     just taught, walked end to end with small concrete numbers and names
     ("your model says 99% on 200 loans; count them: 170 paid"). Invented
     but plausible; every invented number is labeled illustrative in
     FACTCHECK. The 9:16 derivative cut DROPS this act — its shorter
     length is correct without it.
   - **RECAP** (endcard): question → answer, one line.
   A ~1-minute film collapses PROBLEM into the cold open and skips section
   cards, but THE QUESTION beat and the RECAP are mandatory at every length.

   **Media economy at length:** roughly one `STILL · ai` beat per 90s of
   runtime (a 4-minute film earns 2–3 stills), placed at act boundaries.
2. **Factcheck.** Write `reels/<slug>/FACTCHECK.md`: every claim in narration,
   viz, and card copy → verdict (✓ / minor / WRONG) + source line + fix. Verify
   numbers against the chapter; label any illustrative number as illustrative;
   honor every exclusion (confirm the excluded material appears nowhere).
   Include a **terms table**: every technical term in the narration → the beat
   where it debuts → the earlier beat that creates the need for it (the
   pedagogy audit checks this). `vox_run.sh` refuses to render without this
   file.
3. **Pedagogy audit (GATE P — free, REQUIRED before audio).** Audit the beat
   sheet's narration + shotlist against the teaching rules and write
   `<REEL>/PEDAGOGY.md`. `generate_audio.py` REFUSES to spend credits unless
   that file ends with a `VERDICT: PASS` line. The checklist:
   - **Act structure** present and in order (cold open → question → problem →
     mechanism → implication → recap); map every beat to its act.
   - **Key-case cold open:** one concrete instance of the mystery, SHOWN not
     summarized; no thesis or verdict before THE QUESTION beat.
   - **Gap formula on THE QUESTION beat:** "X should predict Y; here's the
     case where it didn't; why?" — named on screen AND in narration.
   - **Utility-framing lint:** narration contains none of "is critical for" /
     "important to understand" / "we'll cover" / "in this video". Mystery
     framing, never usefulness framing, in the opening acts.
   - **Vocabulary law:** no technical term debuts before the beat that made
     the viewer want a name for it — verify against FACTCHECK's terms table.
     Definitions are endpoints, not starting points.
   - **Equations:** every equation runs as an EQUATIONS.md tangent (beat
     group, five zones, ≤~45s, explains never derives, values claim spoken,
     re-entry cue) — or is excluded by the card and appears nowhere.
   - **Recap endcard:** restates question → answer in one line and names
     the TOPIC (kicker style: "COMPUTATIONAL SKEPTICISM") — never the full
     book title, never a chapter number, on screen or in narration. The
     reel is the intuition half, the chapter is the rigor half; that
     contract lives in `metadata.source`, FACTCHECK, and the upload
     description — not in on-screen text.
   - **The example act (16:9):** the full cut carries THE EXAMPLE right
     before RECAP; its invented numbers are labeled illustrative in
     FACTCHECK. The 9:16 short drops it.
   - **Length law:** derived duration ≤ 5:00; if over, split (see Plan).
   If ANY item fails: **rewrite the beat sheet — never annotate around a
   failure** — then re-run this audit (and refresh FACTCHECK if the rewrite
   changed any claims). End the file with `VERDICT: PASS` or
   `VERDICT: REWRITE — <reasons>`.
4. **Scenes.** Write `reels/<slug>/vox_scenes.py`: one `class B##_Name(Scene)`
   per GRAPHIC / CARD / DOCUMENT / COMPOSITE beat whose `source` is `own`. STILL
   `ai` beats get NO scene (they compile as slates). Follow the CONVENTIONS below.
5. **Static pre-flight (free, do this BEFORE audio).** Run the isolated Gate A on
   every scene (see CONVENTIONS → "isolated check"). Fix until clean. This catches
   the errors that otherwise waste a render.
6. **Audio (GATE 0 — spends credits, pre-approved on `run next`).**
   `python3 scripts/generate_audio.py reels/<slug>` — writes per-beat mp3s +
   `mp3/timings.json` and back-fills `actual_duration_s` into the beat sheet.
   Refuses to run without GATE P's `VERDICT: PASS` (step 3).
7. **Machine pass.** `bash scripts/vox_run.sh reels/<slug>` — Gate A → renders →
   Gate B (pixel audit) → slot → outro → `--review` compile. Produces
   `reels/<slug>/<slug>-review.mp4`.
8. **Gate-fix loop.** If Gate A or B fails, read `<REEL>/layout_audit.md`
   (+ the annotated PNGs), fix the named scene, re-run step 7. **Cap: 5 attempts.**
   If still failing, STOP, leave the reel with its logs, mark it `[blocked]` in
   `QUEUE.md`, and move to the next card. Never bypass a gate (`VOX_QC=0`).
9. **Done.** Report: slug, beat count, duration, the review MP4 path, which
   slots are still slates (the `ai` stills), and any residual warning. Mark the
   card done in `reels/QUEUE.md`, and put a copy-pasteable open command — with
   the ABSOLUTE path — in BOTH places:
   - on the built card in the book's video-ideas file, as a new field:
     `- Watch: \`open /Users/bear/Documents/CoWork/bear-textbooks/books/<book>/youtube/<slug>/<slug>-review.mp4\``
   - on the QUEUE done row: `→ \`open /Users/…/<slug>-review.mp4\``
   Full path, never relative — the human pastes it into any terminal without
   thinking about the current directory.

---

## CONVENTIONS (the hard-won rules — obey all of them)

### Gate A (static check) — its mock is strict
- **Single-method `.animate` only.** `mob.animate.set_fill(c, 1)` is fine;
  `mob.animate.set_fill(c,1).set_opacity(1)` CRASHES the checker's mock
  (`'_Anim' object has no attribute ...`). `set_fill(color, 1)` already sets fill
  opacity — you rarely need the second call.
- **Every scene needs real shape motion.** A scene that only recolors / changes
  opacity registers as "1 distinct shape-state → repeated animation" ERROR. Add a
  Grow / Create / Transform / `.animate.scale` / `.animate.shift` on some shape.
- **Check from an ISOLATED copy.** `vox_run` copies `vox_scenes.py` to a temp dir
  with no `beat_sheet.json` beside it before Gate A, because the checker's
  heuristic misfires if it can read all 11 beats at once. Reproduce that when you
  pre-check:
  ```bash
  T=$(mktemp -d); cp reels/<slug>/vox_scenes.py "$T/"
  for S in $(grep -oE 'class (B[0-9]+_[A-Za-z0-9]+)\(Scene\)' reels/<slug>/vox_scenes.py | sed 's/class //;s/(Scene)//'); do
    PYTHONPATH=aspects/explainer/vox-explainer/manim \
      python3 tmp/qc-tooling/static_scene_check.py "$T/vox_scenes.py" --class "$S" | grep -E 'ERROR|clean ·'
  done; rm -rf "$T"
  ```
  A `WARN [0 distinct]` on a pure-quote (`_quote_scene`) beat is benign — `vox_run`
  continues past it.
- **Keep explicit coords inside the frame:** ±7.1 x, ±4.0 y (safe area ±6.3 / ±3.4).

### Gate B (pixel layout audit) — only exists after a real render
- **`TEXT_ON_CURVE` is the usual failure:** a label whose box overlaps a line,
  arrow, circle, rung, platform, bar, or stick-figure. Keep every SerifLabel /
  Text / LabelChip clear of strokes — put labels above/below/beside, not on. When
  a scene has figures on a platform, the platform's title must clear the figures'
  heads (move it well above, e.g. a fixed high `y`, not `next_to(platform, UP)`).
- **Mark deliberate line-on-text `_qc_intentional = True`:** strike-throughs,
  the editor's `HandRing` (already marked in the class), a sweeping magnifier /
  read-head / signal-ring. That subtree is then exempt from `TEXT_ON_CURVE`.
- **Zero-width strokes must be zero-opacity:** `set_stroke(width=0, opacity=0)`.
  A width-0 but opacity-1 stroke still registers and can strike a label.
- Gate B samples several frames per beat, so a collision at any moment fails —
  check mid-animation positions, not just the final frame.

### Structure & rendering
- **Class name → beat id:** `vox_run` takes the id from the prefix before the
  first underscore (`B04_TwoTables` → `B04`). Name every scene `B##_Something`.
- **Reel-local `vox_scenes.py` is required** and must
  `from vox_graphics import *` (that re-exports Manim + the shared components:
  `SerifLabel`, `LabelChip`, `HandRing`, `IsotypeGrid`, `StateCard`, `_quote_scene`,
  colors `NAVY CRIMSON BLUE TERRA INK WHITE GOLD SLATE`, `SERIF`). Never render the
  shared `vox_graphics.py` for a reel — it holds only the electoral-college fixture.
- **Font-safe glyphs only.** Georgia/Gelasio renders `— · é` fine. AVOID in
  on-screen strings: `→ ✓ ≠ ×` (arrows, checks, not-equal, multiply-sign) — they
  tofu. Use words, ASCII (`x`, `->` spelled out or a drawn Arrow), or the
  middle-dot `·`. (`→` in a code COMMENT is fine; only rendered strings matter.)
- **Color law (see `DESIGN.md`): two accents max**, stated in
  `metadata.color_semantics`, never swapped mid-film. House pattern: **`TEAL` =
  the good/true/kept thing, `CRIMSON` = the bad/lost/broken thing**, `SLATE` =
  entity cards/structure, `GOLD` = the single editor's-pen highlight (fill only,
  never text, once per graphic). Navy/blue/terracotta are retired (aliased to
  teal/slate/crimson so legacy scenes don't crash).
- **Type roles (see `DESIGN.md`, incl. the 2026-07-08 amendment):** titles →
  `DISPLAY` (Montserrat); chips → `DISPLAY` tracked caps (`LabelChip`
  uppercases automatically); underlined annotation labels → `SERIF` italic
  (`SerifLabel`); quote cards & attributions → `SERIF` (EB Garamond); data
  numbers & math → `MONO` (PT Mono). `SANS` (Inter) is reserved — don't reach
  for it in new scenes. In a reel's title scene use `font=DISPLAY`, not
  `font=SERIF`.

### Content discipline
- **Honor the card's exclusions absolutely** — they are the whole reason a card
  is a good focused film. If the card says "no Bayes formula," the mechanism is
  carried by the visual, never an equation. Record the exclusions in the beat
  sheet note and re-confirm them in FACTCHECK. (Exclusions bound the QUESTION,
  not the length — a 4-minute film still excludes what its card excludes.)
- **Media slot economy:** roughly one `STILL · ai` beat per 90s of runtime
  (a ~1-minute film: one still, the hook plate; a 4-minute film: 2–3, at act
  boundaries). Everything else is own-Manim so slates stay cheap to fill.
- **Rhythm lint:** no more than 2 consecutive beats of the same shot type.
- **Ask before answering:** the QUESTION beat and the RECAP endcard are
  mandatory at every length (see the Plan step's act structure). A film that
  opens on its verdict has skipped its problem — that's a plan bug, not a
  style choice.
- **Topic, not book, on screen:** the title kicker and the endcard name the
  TOPIC ("COMPUTATIONAL SKEPTICISM"), never the full book title and never a
  chapter number. Put the topic in `metadata.topic` and use it for the B01
  eyebrow. Book + chapter stay in `metadata.source`, FACTCHECK, and the
  upload description.

---

## Final cut — approving a reel finalizes BOTH aspects

The master is BUILT AT 16:9. `final cut <reel>` (human approval of the slate
preview) means both deliverables, in one pass:
1. **Pantry intake** — `python3 scripts/vox_pantry.py <REEL>` slots whatever
   landed in `pantry/` (see PANTRY LAW below).
2. **16:9 master** — `python3 scripts/vox_compile.py <REEL> --height 1080`
   (no `--review`). The master REFUSES to compile with slates still open —
   every slot is filled or the cut stays a preview.
3. **9:16 short** — `python3 scripts/vox_short.py <REEL> --drop <beats>`
   then compile `short/` at height 1920. **THE EXAMPLE act is ALWAYS
   dropped from the 9:16** (the short's length is right without it), plus
   any beat that doesn't read portrait.
4. Both cuts land in **`<REEL>/mp4/`**; every filled still is mirrored into
   **`<REEL>/images/`** (vox_run keeps both in sync on every pass).
**Posting to YouTube is a SEPARATE pass** with its own scripts and its own
rules, unchanged — this workshop ends at `mp4/`.

## PANTRY LAW (media intake — what the human drops, what the machine does)
- Drop finds into `<REEL>/pantry/` with the **beat id in the filename**
  (`B01-anything.mp4`) — the prefix routes the asset to its beat.
- **Video:** audio is STRIPPED (narration is the only voice on the
  timeline). Longer than the beat → **CENTER CUT** (equal trim off head and
  tail). Shorter → **slowed to fit**, never frozen; a slow beyond 3× still
  compiles as a placeholder AND is appended to `<REEL>/replace_log.md` so
  you can swap in a longer generation later.
- **Aspect is checked:** a portrait (9:16) file named `B01…` becomes that
  beat's 9:16 OVERRIDE (`media/B01-916.*`) and is used only by the short.
  No portrait override → the short center-crops the 16:9, biased by the
  beat's `shot.focus`.
- **Stills:** DOCUMENT scans crop to 16:9 anchored top-center (the title
  must survive — check); a still under 1920px wide is flagged (the Ken
  Burns move will show upscale artifacts).
- Provenance sidecars (`<BID>.source.txt`) are stubbed automatically; AI
  media carries the disclosure line. Fill them before a final cut.

---

## Review-iteration loop (`change <reel>: ...`)

The human reviews the slate MP4 and asks for changes. Most are cheap:
- **Narration/timing tweak** → edit `narration_text` in the beat sheet, re-run
  `generate_audio.py reels/<slug> --only B0X` (only that beat), then `vox_run`.
- **Visual tweak** → edit that scene's class, re-run `vox_run` (only changed
  slots recompile).
- **Swap/add/drop a beat** → edit the beat sheet + scenes, re-run.
Always re-run the isolated Gate A after a scene edit before rendering.

---

## Where the pieces live
- Candidate cards (scout output): `books/<book>/youtube/video-ideas.md`
- Approved build queue: `reels/QUEUE.md` (in this toolkit)
- Per reel (built WITH the book): `books/<book>/youtube/<slug>/{beat_sheet.json, SHOTLIST.md, PROMPTS.md, FACTCHECK.md, PEDAGOGY.md, vox_scenes.py, replace_log.md, mp4/ (all finished cuts: review, <slug>-cut 16:9, short 9:16), images/ (every filled still), pantry/ (your intake), media/, mp3/, manim/}`
- Gate A tool: `tmp/qc-tooling/static_scene_check.py` · Gate B tool: `tmp/qc-tooling/manim_layout_audit.py`
- One-command pass: `scripts/vox_run.sh` · audio: `scripts/generate_audio.py` · compile: `scripts/vox_compile.py`
