# AUDIENCES.md — audience variants of a reel

The same beat sheets are re-cut for different audiences. Each audience is three
choices that travel together: a **narration voice** (ElevenLabs), a **writing
register** (the beat-sheet narration is rewritten in it), and a **color palette**
(the render retints to it). Palette is a named registry — see `DESIGN.md`. The
default is the reel as authored; the others are conversions.

| Audience | ElevenLabs voice (`.env`) | Register | Palette | Who they are |
|---|---|---|---|---|
| **NikBearBrown** (default) | `ELEVENLABS_VOICE_NIKBEARBROWN` — the default `metadata.voice_id` | **Teardown** (Feynman × MKBHD — the house voice; the reel as authored) | **`teardown`** — `DESIGN.md` (white / ink / **red-only** + gray; minimalist) | the canonical cut |
| **NEU** | `ELEVENLABS_VOICE_NEU` if set, else `ELEVENLABS_VOICE_NIKBEARBROWN` (Bear's — the default) | **Lecture** (course-anchored instructor cut) | **`neu`** — Northeastern brand (NU red / black / white / gold), **Lato** — `DESIGN.md` · `neu.ts` | NEU students inside a course; a professor is using the reel in class |
| **MEDHAVY** | `ELEVENLABS_VOICE_MEDHAVY` | **Wonder** (first-principles lecture cut) | **Okabe-Ito** (colorblind-safe) — `remotion/.../tokens/medhavy.ts` | advanced undergrad / master's, often doing research; the videos are *helpers* |
| **HUMANITARIANS** | `ELEVENLABS_VOICE_HUMANITARIANS` | **Pragmatist** (applied method for practitioners; failure-cases matter in high-stakes work) | **Muted editorial** (Economist/FT-adjacent) on the cream base — `remotion/.../tokens/humanitarians.ts` | busy, mid-career practitioners who need to get productive with AI fast (social-impact work) |

**`newsprint` is still here.** The former default palette (cream / ink / teal / crimson /
slate / gold — warm editorial) is preserved verbatim as an **opt-in** palette any reel
can select with `metadata.palette: newsprint`. It is simply no longer the default; the
NikBearBrown house look is now `teardown`.

## How each axis plugs in
- **Voice** — set the converted beat sheet's `metadata.voice_id` to the audience's
  ID (or wire name-resolution into `generate_audio.py` so `metadata.voice: "MEDHAVY"`
  looks up `ELEVENLABS_VOICE_MEDHAVY`). Only the converted reel's audio regenerates.
  NEU resolves `ELEVENLABS_VOICE_NEU` if set, else falls back to `ELEVENLABS_VOICE_NIKBEARBROWN`
  (Bear's voice — the default, since Bear uses NEU mode for his own slides). Other professors
  set their own `ELEVENLABS_VOICE_NEU`; Bear's voice dominates a lecture by design, nudging each
  prof to clone or choose their own.
- **Register** — rewrite each beat's `narration_text` in the audience register.
  MEDHAVY → Wonder; HUMANITARIANS → Pragmatist; NEU → Lecture (course-anchored: define
  terms, name the learning objective, cite the assigned reading, keep it assessable).
- **Palette** — the render swaps its palette tokens. Same six role keys, different
  values, so a scene retints by importing the audience palette instead of the default.
  `teardown` → red-vs-ink + label. `neu` → **label + position only** (red is brand,
  never state — Northeastern brand law). MEDHAVY → Okabe-Ito, HUMANITARIANS → muted
  editorial. **Color law still applies:** position + label carry meaning, color
  reinforces.

## NEU palette (Northeastern brand) — role map
Brand law (`brutalist/… NEU-DESIGN.md`): red = brand/emphasis/primary series only,
**never state**; gold ceremonial + large-area only; white ground only; Lato type,
regular-weight headings, sentence case.

| Role (token key) | NEU value | hex |
|---|---|---|
| ground (`CREAM`) | white | `#FFFFFF` |
| text (`INK`) | black | `#000000` |
| good/kept (`TEAL`) | black — label carries it | `#000000` |
| bad/lost (`CRIMSON`) | gray — label carries it (**never red**) | `#545454` |
| structure (`SLATE`) | gray | `#545454` |
| highlighter, fill only (`GOLD`) | NU gold — rare, large only | `#A4804A` |
| brand / emphasis / primary series (added) | NU Red | `#C8102E` |
| gridlines (added) | neutral-1 | `#E3E3E3` |

## MEDHAVY palette (Okabe-Ito) — role map
| Role (token key) | Okabe-Ito | hex |
|---|---|---|
| ground (`CREAM`) | warm eggshell off-white | `#F0EAD6` |
| text (`INK`) | black | `#000000` |
| accent A — good/kept/true (`TEAL`) | bluish green | `#009E73` |
| accent B — bad/lost/broken (`CRIMSON`) | vermillion | `#D55E00` |
| structure (`SLATE`) | neutral gray (added) | `#4D4D4D` |
| highlighter, fill only (`GOLD`) | yellow | `#F0E442` |
| categorical (multi-series) | blue · orange · sky · purple · +greens | see `MEDHAVY_CATEGORICAL` |

## HUMANITARIANS palette (muted editorial, Economist/FT-adjacent) — role map
On the vox cream base. CVD resolution (b): the good/bad pair is split across warm/cool
(petrol vs burnt orange = blue-vs-orange, safe under red-green blindness). Two blues in
play — keep navy (structure) and petrol (good) in clearly different roles/positions.

| Role (token key) | Editorial color | hex |
|---|---|---|
| ground (`CREAM`) | vox base cream | `#F3EBDD` |
| text (`INK`) | vox base warm black | `#2F2A26` |
| accent A — good/kept/true (`TEAL`) | petrol teal (cool) | `#1F4E5F` |
| accent B — bad/lost/broken (`CRIMSON`) | burnt orange (warm) | `#E4572E` |
| structure (`SLATE`) | navy | `#29335C` |
| highlighter, fill only (`GOLD`) | amber | `#F3A712` |
| tertiary — human/growth | sage (outside the good/bad pair) | `#A8C686` |

_Low-contrast on cream: amber + sage → fills / large areas + label, never fine marks._

## Signature tangents (per audience)

vox already carries the **equation tangent**: when a reel hits an equation, a bounded
beat group breaks the math down (`EQUATIONS.md` — five zones, ≤~45s, explains-never-
derives, spoken value claim, re-entry cue), then hands back to the main thread. Each
audience gets **one additional signature tangent**, applied during the register
conversion, under the same discipline:

- **a bounded aside** (a small beat group) with a **re-entry cue** back to the thread;
- **gated to a clear opportunity only** — the "(if and only if)" is load-bearing;
- **capped at 0–1 per video.** Restraint is the default: most videos carry none. The
  tangent is a *license*, never a requirement, and it never derails the arc.

| Audience | Signature tangent | Fires only when… |
|---|---|---|
| NikBearBrown | — (base equation tangent only) | — |
| NEU | **Coursework tangent** *(proposed)* | there's a clear hook to an assigned reading, problem set, or assessment |
| MEDHAVY | **Experiment tangent** | the concept clearly invites hands-on testing the viewer could run now |
| HUMANITARIANS | **Irreducibly-Human tangent** | there's a clear moment to mark the AI / human boundary |

**NEU — the coursework tangent.** When (and only when) a clear moment appears to connect
the concept to the course itself — an assigned reading, a problem set, what the exam
actually tests — NEU may take one zero-to-one aside that names it (*"this is the reading
by X"; "you'll use this on the midterm"*), then hands back with a re-entry cue. Fits the
audience (a student inside a course) and the Lecture register (course-anchored, not a
sermon). No clear course hook → it stays silent.

**MEDHAVY — the experiment tangent.** When (and only when) the material obviously
invites a little experiment, MEDHAVY may take one zero-to-one aside that says *"want to
see this yourself? try this,"* or hands the viewer a **paste-ready LLM prompt** (shown
on a prompt card they can pause and copy). Fits the audience — research students who
tinker, watching a helper video — and the Wonder register (curiosity, first-hand
discovery). No clean experiment → it does nothing.

**HUMANITARIANS — the Irreducibly-Human tangent.** HUMANITARIANS is fundamentally about
*when to use AI, when not to, and what is irreducibly human*. When (and only when) a
clear moment appears to draw the line — *"this part the AI does well; this part is the
human's, and can't be handed off"* — it may take one zero-to-one aside naming the AI /
human split. Fits the audience and the Pragmatist register (a decision boundary, not a
sermon). Line isn't clear → it stays silent.

## Variant build flow — one canonical sheet, N audience cuts

Every reel starts with **`beat_sheet.json`** (the NikBearBrown / default cut). An audience
variant is a **sibling file** — `beat_sheet.neu.json`, `beat_sheet.hai.json`,
`beat_sheet.medhavy.json` — the same reel rewritten in that audience's voice. The
canonical is never touched; each variant is generated and rebuilt independently.

Commands: **`neu <reel>`**, **`hai <reel>`**, **`medhavy <reel>`** (`scripts/vox_variant.py`
scaffolds the metadata; Claude Code does the rewrite per `aspects/{neu,hai,medhavy}/SKILL.md`).
Per variant:
1. **Scaffold** — copy `beat_sheet.json` → `beat_sheet.<aud>.json`, set metadata:
   `audience`, `voice_id` (from `.env`), `palette`, `register`, `outro_source`.
2. **Rewrite** the narration into the register (Lecture / Wonder / Pragmatist) — voice
   only, facts unchanged; apply the signature tangent (0–1, iff); swap the outro to the
   audience's `AUTHOR.MD` section (Northeastern course / Medhavy.com / Humanitarians AI).
3. **Build audience-namespaced** — new audio (the audience voice), new scenes (the
   audience palette), new slate cut. Only the variant's audio bills; GATE P still holds.
4. **Handoff** — the audience owner (NEU professors, HAI Fellows, MEDHAVY users) takes
   the slate cut and revises scenes with Claude Code by their own judgment. A variant is
   a strong starting point, not a locked master.

_Pending wiring: `generate_audio.py` / `vox_compile.py` need an `--audience` for output
namespacing + palette selection, a Manim parallel of the token sets, and the Remotion
outro compositions. Steps 1–2 (the variant sheet) work today; step 3 is manual until then.
NEU works out of the box in Bear's voice (falls back to `ELEVENLABS_VOICE_NIKBEARBROWN`); other
profs add their own `ELEVENLABS_VOICE_NEU`. Lato must be bundled in `fonts/Lato/` for the render._
