# DESIGN.md — the Vox-explainer design constitution

The visual language for vox-explainer slate cuts. This is a **reference doc, not a
pipeline dependency** — the live values are the tokens in
`aspects/explainer/vox-explainer/manim/vox_graphics.py`; this file is what they
must match, and what you point at when reviewing ("make the crimson warmer").

**Lineage, stated plainly:** the *motion-graphics grammar* (mixed media, the
two-axis shot system, newsprint collage) is a homage to Vox's explainer videos.
The **palette and type here are Bear's own**, NOT Vox's brand kit and NOT the
`brutalist/DESIGN.md` system (that's a separate product with a "no blue" rule
that does not apply here). Blue has been intentionally removed from this palette.

---

## Palette — six working colors

| token | hex | role | on cream (WCAG) |
|---|---|---|---|
| `CREAM` (ground) | `#F3EBDD` | the newsprint ground, full plane | — |
| `INK` (text) | `#2F2A26` | all body/serif text, marks; warm near-black | 11.99:1 · AAA |
| `TEAL` (accent A) | `#1F6F5C` | **good / kept / true / "apply"** — the positive data accent | 5.09:1 · AA |
| `CRIMSON` (accent B) | `#BF3339` | **bad / lost / broken / "skip"** — the negative data accent | 4.73:1 · AA |
| `SLATE` (structure) | `#3E5559` | entity cards (white text), structural neutrals | 6.70:1 · AA |
| `GOLD` (highlighter) | `#F5D061` | the single editor's-pen highlight — **fill only, NEVER text** | 1.26:1 · fails (by design: it's a highlighter bar) |

**Retired** (do not use): `NAVY #3D5A80`, `DUSTY-BLUE #5B7B9C` (redundant blues,
and blue is out), `TERRACOTTA #D35F43` (redundant with crimson, fails AA).

### Color laws
1. **Two data accents, one meaning each:** TEAL = the good/kept thing, CRIMSON =
   the bad/lost thing. State the mapping in each reel's `color_semantics`. **Never
   swap mid-film.**
2. **Gold is a highlighter, never text.** It only ever appears as a translucent
   sweep bar behind serif text (the editor's pen), used at most once per graphic.
3. **Pair color with position + a text label — always.** TEAL and CRIMSON are
   close in *brightness*, so in grayscale or for red-green colorblindness hue
   alone won't separate them. Left/right placement and an explicit label carry
   the meaning; color reinforces it. (This is the cost of dropping blue, paid down
   by layout.)
4. **Slate is structure, not a third accent.** Entity cards, neutral scaffolding.
   Keep it out of the good/bad data story.
5. Warm near-black `INK`, never pure black, never blue-black.

---

## Typography — four fonts, four jobs

| token | family | used for |
|---|---|---|
| `DISPLAY` | **Montserrat** (geometric sans) | titles, big display lines, section cards, **label chips** (`LabelChip` — white tracked caps on the accent block, echoing the kicker) |
| `SANS` | **Inter** (neutral sans) | **reserved** — no live component role since the 2026-07 amendment below; available if a future graphic needs dense UI-feeling text |
| `SERIF` | **EB Garamond** | the editorial / "Vox newsprint" serif moments — quote cards, pull-quotes, attributions, and the **underlined annotation labels** (`SerifLabel`, italic); use *when a serif is called for*, not everywhere |
| `MONO` | **PT Mono** | math + data numbers only — never the running text, never the equation body |

**Serif rule:** the newsprint soul rides on serif, so keep EB Garamond for the
places that *are* editorial (quotes, the endcard attribution, hand-lettered
marginalia — which now includes the `SerifLabel` annotations). Everything
structural/among the motion graphics is Montserrat (titles, chips). Don't set a
whole graphic in serif out of habit.

### Amendment 2026-07-08 — Inter retired from the frame
Review of built reels found the two Inter components (the chips, the underlined
annotation labels) were the only type on screen that didn't sing with the rest.
Changes, live in `vox_graphics.py`:
- `SerifLabel` → EB Garamond *italic* (was Inter bold). Sizes auto-bump ~15%
  inside the class to hold legibility, so call sites are unchanged.
- `LabelChip` → Montserrat MEDIUM, auto-uppercased tracked-caps style (was
  Inter mixed case). Sizes auto-shave ~12% inside the class so caps keep the
  old footprint.
- `SANS` (Inter) stays defined for backward compatibility but has no live role.
Existing reels show the new type on their next re-render; no scene edits needed.

### Fonts are bundled in `books/vox/fonts/` (already present)
```
fonts/EB_Garamond/   fonts/Inter/   fonts/Montserrat/   fonts/PT_Mono/
```
**But bundled ≠ visible to the renderer.** Manim/Pango resolves fonts by *family
name* ("EB Garamond", "Inter", "Montserrat", "PT Mono") via **fontconfig** — a TTF
sitting in a folder is NOT found until it's registered. One-time, on the Mac:
```
# simplest: install the families so Font Book / fontconfig see them
cp fonts/*/static/*.ttf fonts/PT_Mono/*.ttf ~/Library/Fonts/    # then re-log or `atsutil`
# or point fontconfig at the folder with a ~/.config/fontconfig/fonts.conf <dir> entry
```
Verify before rendering: `fc-list | grep -iE 'garamond|inter|montserrat|pt mono'`
should list all four. If a family is missing, Pango silently substitutes and the
render looks wrong. (The slate/burn-in text uses the bundled TTF directly, so that
part works regardless.)

---

## What implementing this changes
- `vox_graphics.py`: replace `SERIF="Georgia"`/`MONO="Menlo"` with the four tokens
  above; repoint the components (titles→DISPLAY, labels/chips→SANS, quote cards &
  attributions→SERIF, data numbers→MONO); rename the `NAVY` constant's uses to
  `TEAL #1F6F5C`; delete `DUSTY-BLUE`/`TERRACOTTA`.
- `vox_compile.py` `find_font()`: prefer the bundled `books/vox/fonts/…` before the
  system fallbacks.
- Re-renders every reel (colors + type change). Cheap per reel, but it's all of them.

**Open choice:** the accent is `TEAL #1F6F5C` by recommendation; swapping to amber
`#9A6B12` (more colorblind-separation from crimson, but large-text-only) is a
one-line change if you prefer warm over cool.
