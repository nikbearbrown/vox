# TODO — vox workshop (parked threads, 2026-07-08 session)

## Now (unblocks current builds)
- [ ] **Run the retrofit prompt** (HOWTO-adjacent, in Cowork chat log) on 2–3
  of yesterday's reels first — eyeball one before sweeping all ~19. Retrofit
  covers: topic-not-book kickers, THE EXAMPLE act, PEDAGOGY.md, work-order
  SHOTLIST.md + PROMPTS.md, new-type re-render, Watch lines.
- [ ] **Then the continue prompt** — build the remaining unbuilt
  computational-skepticism cards under full doctrine.
- [ ] Pick `metadata.topic` per book: "COMPUTATIONAL SKEPTICISM" is settled;
  decide the reallocation engine's topic string before its retrofit/builds.

## Geoplates (SVG-per-beat, zero-cost still lane)
- [ ] **GEOMETRY.md** — Clockwork/PPP doctrine condensed to the vox rules:
  primitives + booleans only, flat fills, depth by stacked opacity (no
  gradient elements ever), 6-hex palette lock, gold once per plate,
  anchor budget on any hand-drawn <path>.
- [ ] **scripts/vox_geo.py** — beat_sheet.json → geo/<BID>.svg (per-beat spec)
  → rasterize (rsvg-convert or cairosvg — install one on the Mac) →
  media/<BID>.png via the slot contract, `source: own`. Portrait recompose
  (same spec, 9:16 canvas) instead of center-crop.
- [ ] **Geoplate lint** (soft gate): primitive whitelist, palette lock,
  no <linearGradient>/<radialGradient>/<mesh>, anchor-count vs curvature-
  extrema audit for organic paths.
- [ ] **First test:** swap the two backfilled B06 slates for geoplates —
  vox-missing-mnar (blank-top income column) and vox-two-clocks (two curves).
  Draft SVGs from the Cowork session are the starting point.

## Vector lanes (SHOTLIST/PROMPTS declare a lane per slot)
- [ ] Write the **three-lane rule** into SLATE-RUNNER + SKILL prompt law:
  `geo` (hand-authored primitives, free) · `c2v` (Illustrator Concept to
  Vector) · `raster` (Midjourney/Higgsfield photo-feel; last resort for
  faces/archival).
- [ ] **c2v discipline:** draft on the 10-credit model (Gemini 2.5 / FLUX.1),
  commit on the 40-credit model only for the approved keeper; recolor to the
  six hexes (Select > Same > Fill); Simplify with the PPP audit as the
  keep-list; export SVG; pantry with beat prefix; `source: ai` + disclosure
  sidecar; log each generation's credit cost in the slot's SHOTLIST section.
  NEU plan ≈ 1,000 premium credits/mo ≈ 25 keeper gens.
- [ ] **scripts/vox_vec.sh** — the free c2v sandwich: flat-style raster in →
  vtracer → svgo/simplify with curvature-extrema audit → SVG+PNG pair into
  pantry/ with beat prefix. Requires `vtracer` install (cargo/brew).
- [ ] **FLAT style preset** named in the prompt law (alongside WARMONO/
  NATGEO): "flat geometric illustration, mid-century screen print, limited
  palette, textured fills, no outlines" — for figurative stills that should
  match the graphics plane instead of reading photographic.
- [ ] **Weekend experiment (before doctrine):** OmniSVG (NeurIPS 2025,
  Qwen2.5-VL base) and StarVector 8B locally on the M-series — sketch→SVG
  and raster→SVG quality vs the vtracer sandwich. Only write into doctrine
  if it beats the sandwich on flat art.

## Housekeeping
- [ ] Reallocation reels still live in `unreal-reels/reels/` — when they move
  to `the-reallocation-engine/youtube/`, re-point the Watch open commands in
  vids/video-ideas.md and vox/reels/QUEUE.md (one sed).
- [x] Card-location split — RESOLVED for vox: the new `vox/aspects/scout/`
  skill writes `<book>/youtube/video-ideas.md`. Legacy reallocation cards
  stay in `<book>/vids/` until that book is re-scouted; bears-doodles-scout
  (doodle builds) still uses vids/ by design.
- [ ] The QC checkers (static_scene_check, manim_layout_audit) were copied
  from unreal-reels and have since diverged — decide the canonical home
  (vox) and note it in unreal-reels so fixes don't fork.
- [ ] Reallocation queue: 11 approved unbuilt cards waiting after the
  comp-skep run.
- [ ] Verify NEU Adobe plan's actual credit allowance in-product (assumed
  1,000/mo Pro Plus for Education).

## Open questions
- [ ] Does the 9:16 short want its own geoplate compositions (portrait-first
  specs) or recomposed 16:9 specs? Decide on the first geoplate reel.
- [ ] Should PROMPTS.md carry the c2v lane's Illustrator steps inline, or
  point at GEOMETRY.md? (Lean: inline, one paste per slot — same reason
  PROMPTS.md exists.)
