# AUDIENCES.md — audience variants of a reel

The same beat sheets are re-cut for different audiences. Each audience is three
choices that travel together: a **narration voice** (ElevenLabs), a **writing
register** (the beat-sheet narration is rewritten in it), and a **color palette**
(the render retints to it). The default is the reel as authored; the others are
conversions.

| Audience | ElevenLabs voice (`.env`) | Register | Palette | Who they are |
|---|---|---|---|---|
| **NikBearBrown** (default) | `ELEVENLABS_VOICE_NIKBEARBROWN` — the default `metadata.voice_id` | **Teardown** (Feynman × MKBHD — the house voice; the reel as authored) | vox default — `DESIGN.md` (cream / ink / teal / crimson / slate / gold) | the canonical cut |
| **MEDHAVY** | `ELEVENLABS_VOICE_MEDHAVY` | **Wonder** (first-principles lecture cut) | **Okabe-Ito** (colorblind-safe) — `remotion/.../tokens/medhavy.ts` | advanced undergrad / master's, often doing research; the videos are *helpers* |
| **HUMANITARIANS** | `ELEVENLABS_VOICE_HUMANITARIANS` | **Pragmatist** (applied method for practitioners; failure-cases matter in high-stakes work) | **Muted editorial** (Economist/FT-adjacent) on the cream base — `remotion/.../tokens/humanitarians.ts` | busy, mid-career practitioners who need to get productive with AI fast (social-impact work) |

## How each axis plugs in
- **Voice** — set the converted beat sheet's `metadata.voice_id` to the audience's
  ID (or wire name-resolution into `generate_audio.py` so `metadata.voice: "MEDHAVY"`
  looks up `ELEVENLABS_VOICE_MEDHAVY`). Only the converted reel's audio regenerates.
- **Register** — rewrite each beat's `narration_text` in the audience register.
  MEDHAVY → Wonder: first-principles, intellectual honesty, wonder over drills — the
  best fit for a capable research student using a short video as a helper.
- **Palette** — the render swaps its palette tokens. Same role keys, different
  values, so a scene retints by importing the audience palette instead of `vox`.
  MEDHAVY → Okabe-Ito: bluish-green = good/kept, vermillion = bad/lost, yellow =
  highlighter (fill only), gray = structure, warm eggshell ground. **Color law still
  applies:** position + label carry meaning, color reinforces.

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
| MEDHAVY | **Experiment tangent** | the concept clearly invites hands-on testing the viewer could run now |
| HUMANITARIANS | **Irreducibly-Human tangent** | there's a clear moment to mark the AI / human boundary |

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
variant is a **sibling file** — `beat_sheet.hai.json`, `beat_sheet.medhavy.json` — the
same reel rewritten in that audience's voice. The canonical is never touched; each
variant is generated and rebuilt independently.

Commands: **`hai <reel>`** and **`medhavy <reel>`** (`scripts/vox_variant.py` scaffolds
the metadata; Claude Code does the rewrite per `aspects/{hai,medhavy}/SKILL.md`). Per
variant:
1. **Scaffold** — copy `beat_sheet.json` → `beat_sheet.<aud>.json`, set metadata:
   `audience`, `voice_id` (from `.env`), `palette`, `register`, `outro_source`.
2. **Rewrite** the narration into the register (Wonder / Pragmatist) — voice only, facts
   unchanged; apply the signature tangent (0–1, iff); swap the outro to the audience's
   `AUTHOR.MD` section (Medhavy.com / Humanitarians AI).
3. **Build audience-namespaced** — new audio (the audience voice), new scenes (the
   audience palette), new slate cut. Only the variant's audio bills; GATE P still holds.
4. **Handoff** — **HAI Fellows** (and MEDHAVY users) take the slate cut and revise scenes
   with Claude Code by their own judgment. A variant is a strong starting point, not a
   locked master.

_Pending wiring: `generate_audio.py` / `vox_compile.py` need an `--audience` for output
namespacing + palette selection, a Manim parallel of the token sets, and the Remotion
outro compositions. Steps 1–2 (the variant sheet) work today; step 3 is manual until then._
