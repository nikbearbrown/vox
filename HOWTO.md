# HOWTO — run the vox video factory (human quickstart)

This is the human's guide. The machine method is in `SLATE-RUNNER.md`; the design
system is in `DESIGN.md`. You drive Claude Code; it builds the slate cuts.

A **slate cut** = a finished, watchable explainer video with the AI photo-stills
left as grey "slate" placeholders for you to fill later. Everything else (motion
graphics, narration audio, outro) is done. **Length is whatever the concept
needs**: a minute if it truly fits, typically 3–5 minutes for technical material,
never over 5 — a concept that needs more splits into two videos. Every film sets
up its problem and asks its question before answering it.

---

## Layout — vox is the toolkit; your content sits beside it

`vox/` is a self-contained **toolkit**, not a book. It builds videos from content that
sits **next to it**, as a sibling folder. To make videos from a book — yours or anyone's
— drop the content beside `vox/` and scout it:

```
books/
├── vox/                     ← the toolkit (this repo)
├── your-book/               ← any content, a sibling of vox
│   ├── chapters/            ← markdown the scout reads (NN-*.md)
│   └── youtube/             ← the scout + the builds write here
│       ├── video-ideas.md   ← candidate cards
│       └── <slug>/          ← each built reel
└── another-book/            ← as many as you like
```

The scout reads `../<book>/chapters/`, writes candidate cards to
`../<book>/youtube/video-ideas.md`, and each reel builds into
`../<book>/youtube/<slug>/`. **Any content works** — the scout can make a video idea
from any book placed as a sibling, not only the ones shipped here. The separation is
deliberate: `vox/` is the reusable engine you clone and update; the books are *your*
content kept beside it — which is why they are **not** part of the vox repo, and need
their own backup. Launch Claude Code from the parent `books/` folder (next section) so
it sees `vox/` and every sibling book at once.

---

## One-time setup (do this once, on this Mac)

1. **Register the fonts** so the renderer can see them (bundled-in-a-folder is not
   enough — Manim finds fonts by name via fontconfig):
   ```bash
   cp vox/fonts/*/static/*.ttf vox/fonts/PT_Mono/*.ttf ~/Library/Fonts/
   ```
2. **Verify all four appear** (if any is missing, the render silently uses the
   wrong font — fix before building anything):
   ```bash
   fc-list | grep -iE 'garamond|inter|montserrat|pt mono'
   ```
3. Confirm the toolchain: `python3 -c "import manim, PIL, numpy, requests, mutagen"`
   and `which ffmpeg`.

---

## Every session: launch Claude Code

From the **books** folder (so `books/CLAUDE.md` auto-loads and routes into `vox/`),
with permissions skipped so it runs hands-off:
```bash
cd /Users/bear/Documents/CoWork/bear-textbooks/books
claude --dangerously-skip-permissions
```

---

## Scout — mine a book for candidates (run this before anything else on a new book)

The scout reads a book's chapters and writes **candidate cards** into
`<book>/youtube/video-ideas.md` — one card per concept that passes the vox bar
(a concrete key case, a gap-formula question, one mechanism, one visual object,
an example seed, exclusions, a score). It builds nothing and bills nothing; you
skim the cards, pick the good ones, and add them to `vox/reels/QUEUE.md` (or
say `slate cut <card>`). The skill is `vox/aspects/scout/SKILL.md`.

```
Read vox/CLAUDE.md and vox/aspects/scout/SKILL.md plus its reference files. Scout the book computational-skepticism-for-ai: run python3 vox/aspects/scout/scripts/scan_book.py computational-skepticism-for-ai for the chapter manifest, read the chapters, and append candidate cards for every qualifying concept to computational-skepticism-for-ai/youtube/video-ideas.md in the vox card format. Do not renumber or edit existing cards — continue the numbering. Report how many new candidates you found, how many scored 8 or higher, and the file path. Build nothing.
```

To re-score an existing list instead, replace the middle with: "rank the existing
cards in <book>/youtube/video-ideas.md against the selection rubric — adjust
scores, flag splits/merges/drops, change nothing else."

---

## The prompts (copy-paste; the ONE thing you swap is the book folder name —
`computational-skepticism-for-ai` below. Cards live in `<book>/youtube/video-ideas.md`
for this book; the-reallocation-engine keeps its cards in `<book>/vids/video-ideas.md`.)

### 1) Prove ONE first — ALWAYS do this before batching a book
Builds a single reel so you can eyeball fonts, teal, and the new pedagogy shape
before spending on the rest.
```
Read vox/CLAUDE.md and vox/SLATE-RUNNER.md. Run `fc-list | grep -iE 'garamond|inter|montserrat|pt mono'` and confirm all four fonts appear. Then build exactly ONE slate cut for the book computational-skepticism-for-ai: take the top unbuilt card in computational-skepticism-for-ai/youtube/video-ideas.md and follow the FULL SLATE-RUNNER loop — plan with the act structure (cold open key case, THE QUESTION beat, problem before mechanism, an EXAMPLE act before the recap on the 16:9 cut, recap endcard naming the topic — never the book title or chapter number on screen), length derived (≤5:00), factcheck with terms table, pedagogy audit written to PEDAGOGY.md ending VERDICT: PASS (generate_audio.py refuses without it), scenes, isolated Gate A, audio, vox_run.sh. Build into computational-skepticism-for-ai/youtube/<slug>/. When done, add the Watch line (absolute-path open command) to the card and the QUEUE row. Stop after that one reel and give me the open command for the review MP4.
```
Watch it and check, in order: right fonts (Montserrat titles + chips in tracked
caps, EB Garamond quotes and italic annotation labels — NO Inter)? Teal not navy?
Does it open on a concrete case and ASK its question before answering? Is the
length what the concept needed (not padded, not rushed)? A simple made-up worked
example right before the outro? Endcard names the topic (not the book title)?
SHOTLIST has a per-slot section — beat-id-prefixed prompt + archive links — for
every slate? If yes → run the book. If not → tell me what's off.

### 2) Run the whole book
```
Read vox/CLAUDE.md and vox/SLATE-RUNNER.md. Build slate cuts for every unbuilt card in computational-skepticism-for-ai/youtube/video-ideas.md, one at a time, into computational-skepticism-for-ai/youtube/<slug>/. For each, follow the FULL SLATE-RUNNER loop: plan (act structure, derived length ≤5:00), factcheck with terms table, pedagogy audit (PEDAGOGY.md must end VERDICT: PASS — the audio step refuses without it; on a failed audit REWRITE the beat sheet, never annotate around it), scenes, isolated Gate A pre-flight, generate audio, run vox_run.sh. On a gate failure, read the layout_audit and fix the scene, up to 5 attempts, then mark the card [blocked] in vox/reels/QUEUE.md and move to the next. After each finished reel add the Watch line (absolute-path open command) to its card and its QUEUE row. Keep going until every card is done or blocked. Leave the ai stills as slates. Give me one status line per finished reel, each ending with its open command.
```
Go do other work. Check the book's `youtube/` as reels land — every finished card
in video-ideas.md now carries a `- Watch:` line you can paste straight into a
terminal.

### 3) Ask for a change on a reel you reviewed
```
change computational-skepticism-for-ai/youtube/<slug>: <what to change — e.g. retime B05, make the teal warmer, swap the B02 slate>
```
Only the affected beats recompile. If the change touches narration, the pedagogy
audit gets re-checked and the changed beats re-generate audio (`--only`).

### 4) Fill an AI still (optional, later — spends image credits)
```
Generate the B02 still for computational-skepticism-for-ai/youtube/<slug> from the image_prompt in its SHOTLIST.md, drop it in media/B02.png, and rerun vox_run.sh.
```

---

## Remotion pass — fill slate beats with motion graphics (Node lane)

Slate beats can be filled with vox-palette **Remotion** motion graphics instead of
(or before) AI stills. This is the only lane that needs **Node.js** — everything else
in vox is Python. Set up once, then it's one command per reel. Full spec:
`vox/aspects/remotion-pass/SKILL.md`; project details: `.../remotion/README.md`.

### One-time setup (once on this Mac)

1. **Install Node** if `node -v` fails. Homebrew:
   ```bash
   brew install node
   ```
   or nvm (no admin needed):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash && nvm install --lts
   ```
2. **Install the project's deps:**
   ```bash
   cd /Users/bear/Documents/CoWork/bear-textbooks/books/vox/aspects/remotion-pass/remotion && npm install
   ```
3. **Register the house fonts** (same four as the core setup, so the palette tokens
   resolve instead of system fallbacks):
   ```bash
   cp /Users/bear/Documents/CoWork/bear-textbooks/books/vox/fonts/*/static/*.ttf /Users/bear/Documents/CoWork/bear-textbooks/books/vox/fonts/PT_Mono/*.ttf ~/Library/Fonts/
   ```
4. **Smoke test** the render toolchain:
   ```bash
   cd /Users/bear/Documents/CoWork/bear-textbooks/books/vox/aspects/remotion-pass/remotion && npx remotion render src/index.ts BarChart out/test.mp4
   ```

### Per reel

Once the beat sheet marks slate beats with `shot.scene_type` + `shot.remotion.{pattern,
props}` (the builder chooses these from `remotion/_bench/index.json` — template-first,
create only on a real gap), fill them and re-compile:
```bash
python3 /Users/bear/Documents/CoWork/bear-textbooks/books/vox/scripts/vox_remotion.py <REEL>
bash    /Users/bear/Documents/CoWork/bear-textbooks/books/vox/scripts/vox_run.sh      <REEL>
```
`--list` shows what would be filled; `--only B04` re-renders one beat after a `change`.

### The prompt (Claude Code)
```
Read vox/CLAUDE.md and vox/aspects/remotion-pass/SKILL.md. For <REEL>, for each slate beat: decide motion-graphic vs leave-as-photo, set shot.scene_type from the SCENE-SELECTION decision tree, pick a fitting pattern from remotion/_bench/index.json (template-first; build reel-local only if nothing fits without forcing), inject the beat's content into shot.remotion.props, and run scripts/vox_remotion.py <REEL>. Stamp provenance, do not promote anything to the bench without my vet, then run vox_run.sh and give me the review MP4 open command.
```

---

## Where things land
- Cards (scout output): `<book>/youtube/video-ideas.md` — the vox scout's home
  (legacy reallocation cards sit in `<book>/vids/` until re-scouted); built
  cards carry a `- Watch:` open command with the absolute MP4 path
- Each reel: `<book>/youtube/<slug>/` — with `<slug>-review.mp4` (what you watch)
- Remaining slates are listed in each reel's `SHOTLIST.md`
- Progress checklist: `vox/reels/QUEUE.md`

## The two things that actually go wrong
1. **Wrong fonts** — if step 2 above didn't list all four, every video renders in a
   substitute font and the gates won't warn you. Fix fonts, re-render.
2. **A blocked reel** — if a scene fails its layout gate 5×, it's left with its
   `layout_audit.md` and marked `[blocked]`. Send me (Cowork) or Claude Code the
   finding and it gets cleared by hand.
3. **Audio refuses to run** — that's GATE P doing its job: the reel folder has no
   `PEDAGOGY.md` with `VERDICT: PASS`. The script must be audited (and rewritten
   if it fails) before ElevenLabs spends anything.
```
