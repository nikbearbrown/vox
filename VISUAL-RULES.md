# VISUAL-RULES.md — standing rules for every rendered frame

Applies to all registers, all reels, 16:9 and 9:16. These rules are gates:
failures block the review compile. When in doubt, less is more.

---

## RULE 1 — LESS TEXT

**The frame shows the physics (or concept). The voice carries the words.**

- Labels are **short tags only**: `Na`, `E = 1.77 eV`, `e⁻`, `Δλ = 2.426 pm`.
- No sentence-length labels on a graphic. Sentences belong in `narration_text`.
- No duplicated text. If a value appears in a chip it does not appear again
  as a floating label; if it appears in the VO it need not appear on screen.

**Gate check:** cap words-per-frame; FAIL any on-screen label that reads as a
full sentence (subject + predicate, or a clause with a connector like "→",
"is", "equals" spelled out in a sentence). Tools: `wcag_margin_check.py` /
`manim_layout_audit.py`.

---

## RULE 2 — NATURAL COLORS OVERRIDE THE PALETTE

**When an element has a real-world canonical color, render it in that color,
superseding the register palette (teardown, medhavy, HAI, etc.).**

- **Light gets its spectral color by wavelength:**

  | Wavelength | Color | Hex (reference) |
  |---|---|---|
  | ~700 nm | red | `#FF0000` |
  | ~546 nm | green | `#00CC00` |
  | ~400 nm / UV | violet | `#8800FF` |
  | Map any λ → RGB via the CIE approximation |

- Named real colors likewise: stoplight red / amber / green, blood red, sky blue.
- **Palette colors (TEAL, CRIMSON, GOLD, etc.) are for abstract quantities.**
  Use them for graphs, annotations, and structural elements — not for objects
  that have a known real-world color.

**Gate check:** the palette check EXEMPTS spectral/real-color objects from the
"wrong-color" flag and instead verifies that light/wavelength objects carry the
correct spectral color. A violet arrow for a 700 nm photon is a FAIL.

---

## RULE 3 — MARGINS AND SAFE AREA

**Anything crossing the safe margin FAILS.**

| Aspect | Safe area (half-extents) | Notes |
|---|---|---|
| 16:9 | x ∈ [−6.3, 6.3], y ∈ [−3.4, 3.4] | Manim frame_width≈14.2 |
| 9:16 | x ∈ [−1.95, 1.95], y ∈ [−3.4, 3.4] | Manim frame_width≈4.5 |

- 9:16 is a **true portrait reflow** — native 1080×1920 Remotion compositions
  and portrait Manim scenes (`short/vox_scenes.py`). Never a center-crop.
- Onda terminal commands must fit the safe width. Use `shorten_title` if needed.
- Off-frame (outside the actual render frame, not just the safe area) is an
  automatic FAIL even before safe-area checking.

Gate tools: `manim_layout_audit.py` (Gate B, pixel-true), `wcag_margin_check.py`
(Gate W, text contrast + overlap). Run both; fix errors before re-rendering.

---

## RULE 4 — ASPECT AND DURATION

- **16:9** = the full reel. All content + bookends.
- **9:16 Short** = ONE example only (single strongest segment), wrapped in
  intro + outro. **Hard gate: rendered duration must be strictly < 3:00.**
  If ≥ 3:00, fail and trim (target ≤ 2:55).

---

## RULE 5 — ALWAYS GATE

**Never ship a frame without running the visual + fact gates.**

- Gate A: `static_scene_check.py` — shape variety, animation legality.
- Gate W: `wcag_margin_check.py` — contrast + text color (INK on all Text()).
- Gate B: `manim_layout_audit.py` — pixel-true safe-area and label-on-line.
- Gate F: `FACTCHECK.md` present and correct (bypass with `VOX_FACTS=0` only
  for short/ derivatives where the parent reel already carries the factcheck).
- Gate P: `PEDAGOGY.md` has bare `VERDICT: PASS` line before audio spend.

A gate failure is not a warning — the review mp4 is not compiled until all
errors are zero. Warnings are acceptable if the physics demands them (e.g.
LabelChip white-on-CRIMSON at 3.63:1 is WARN-OK per Gate W rules).
