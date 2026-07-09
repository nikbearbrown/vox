# Vox Remotion Bench — Scene Catalog

Classification of every reusable unit across the 7 downloaded Remotion component repos, scored for the vox science-explainer pipeline. **Filter: broad-keep** — kept anything explanatory (data, text/equation, shape/diagram) OR reusable connective tissue (transitions, backgrounds, effects, titles, audio); cut only clear UI chrome, marketing/chat, logo stings, and demo wrappers.

Keepers are copied into `_bench/<repo>/` (with each repo's shared util/lib layer) as a strip-mine reference. **Palette** column: `LOCK` = 0–2 hardcoded colors or uses theme/CSS-var tokens (easy to retint to vox cream/ink/teal/crimson); `RESTYLE(n)` = n hardcoded hex colors to recolor by hand.

## Summary

| Repo | Units | Keep | Cut | Keep % | Dominant fits |
|---|--:|--:|--:|--:|---|
| remotion-scenes | 201 | 169 | 32 | 84% | TEXT 48 · BACKGROUND 44 · EFFECT 25 · SHAPE 18 · DATA 13 |
| onda | 70 | 59 | 11 | 84% | TEXT 21 · EFFECT 10 · DATA 8 · SHAPE 5 · TITLE 5 |
| remotion-templates | 81 | 69 | 12 | 85% | TRANSITION 13 · TEXT 11 · EFFECT 11 · DATA 11 · TITLE 8 |
| remotion-bits | 40 | 39 | 1 | 98% | TEXT 13 · EFFECT 13 · SHAPE 5 · BACKGROUND 4 · DATA 3 |
| remotion-ui | 24 | 21 | 3 | 88% | DATA 8 · AUDIO 5 · TEXT 4 · TRANSITION 2 |
| clippkit | 13 | 9 | 4 | 69% | TEXT 4 · AUDIO 3 · TRANSITION 1 · EFFECT 1 |
| remocn | 44 | 1 | 43 | 2% | (UI 33 · MARKETING 10) — only wave-wipe kept |
| **TOTAL** | **473** | **367** | **106** | **78%** | |

**Highest-value lanes for vox:** DATA (charts/counters → wavefunction & energy-level plots), TEXT (reveals/typewriter → equation & term reveals), SHAPE (morph/draw-on → diagrams). onda and remotion-ui carry the cleanest token layers (easiest to palette-lock); remotion-scenes is the deepest bench by volume; remocn is effectively skippable.

---

## remotion-scenes — 201 units (169 keep / 32 cut)

| Unit | Cat | What it does | Fit | Palette | Verdict | Reason |
|---|---|---|---|---|---|---|
| BackgroundAurora | BackgroundAnimations | Aurora animated ambient background loop | BACKGROUND | LOCK | KEEP | reusable on-brand ambient background |
| BackgroundBokeh | BackgroundAnimations | Bokeh animated ambient background loop | BACKGROUND | LOCK | KEEP | reusable on-brand ambient background |
| BackgroundFlowingGradient | BackgroundAnimations | Flowing Gradient animated ambient background loop | BACKGROUND | LOCK | KEEP | reusable on-brand ambient background |
| BackgroundGeometric | BackgroundAnimations | Geometric animated ambient background loop | BACKGROUND | LOCK | KEEP | reusable on-brand ambient background |
| BackgroundGrid | BackgroundAnimations | Grid animated ambient background loop | BACKGROUND | LOCK | KEEP | reusable on-brand ambient background |
| BackgroundMeshGradient | BackgroundAnimations | Mesh Gradient animated ambient background loop | BACKGROUND | LOCK | KEEP | reusable on-brand ambient background |
| BackgroundNoiseTexture | BackgroundAnimations | Noise Texture animated ambient background loop | BACKGROUND | LOCK | KEEP | reusable on-brand ambient background |
| BackgroundPerspectiveGrid | BackgroundAnimations | Perspective Grid animated ambient background loop | BACKGROUND | LOCK | KEEP | reusable on-brand ambient background |
| BackgroundRadial | BackgroundAnimations | Radial animated ambient background loop | BACKGROUND | LOCK | KEEP | reusable on-brand ambient background |
| BackgroundWaves | BackgroundAnimations | Waves animated ambient background loop | BACKGROUND | LOCK | KEEP | reusable on-brand ambient background |
| CinematicAction | CinematicAnimations | Action-style cinematic title/opening card | TITLE | LOCK | KEEP | reusable title card treatment |
| CinematicAnime | CinematicAnimations | Anime-style cinematic title/opening card | TITLE | LOCK | KEEP | reusable title card treatment |
| CinematicDocumentary | CinematicAnimations | Documentary-style cinematic title/opening card | TITLE | LOCK | KEEP | reusable title card treatment |
| CinematicEpic | CinematicAnimations | Epic-style cinematic title/opening card | TITLE | LOCK | KEEP | reusable title card treatment |
| CinematicHorror | CinematicAnimations | Horror-style cinematic title/opening card | TITLE | LOCK | KEEP | reusable title card treatment |
| CinematicMinimalEnd | CinematicAnimations | Minimal End-style cinematic title/opening card | TITLE | LOCK | KEEP | reusable title card treatment |
| CinematicNoir | CinematicAnimations | Noir-style cinematic title/opening card | TITLE | LOCK | KEEP | reusable title card treatment |
| CinematicRomance | CinematicAnimations | Romance-style cinematic title/opening card | TITLE | RESTYLE(3) | KEEP | reusable title card treatment |
| CinematicSciFi | CinematicAnimations | Sci Fi-style cinematic title/opening card | TITLE | LOCK | KEEP | reusable title card treatment |
| CinematicVintage | CinematicAnimations | Vintage-style cinematic title/opening card | TITLE | RESTYLE(6) | KEEP | reusable title card treatment |
| DataBarChart | DataAnimations | Bar Chart data visualization component | DATA | LOCK | KEEP | core explanatory data visualization |
| DataGauge | DataAnimations | Gauge data visualization component | DATA | LOCK | KEEP | core explanatory data visualization |
| DataLineChart | DataAnimations | Line Chart data visualization component | DATA | LOCK | KEEP | core explanatory data visualization |
| DataPieChart | DataAnimations | Pie Chart data visualization component | DATA | LOCK | KEEP | core explanatory data visualization |
| DataProgressBars | DataAnimations | Progress Bars data visualization component | DATA | LOCK | KEEP | core explanatory data visualization |
| DataRanking | DataAnimations | Ranking data visualization component | DATA | LOCK | KEEP | core explanatory data visualization |
| DataStatsCards | DataAnimations | Stats Cards data visualization component | DATA | LOCK | KEEP | core explanatory data visualization |
| DataTimeline | DataAnimations | Timeline data visualization component | DATA | LOCK | KEEP | core explanatory data visualization |
| DemoAddressBar | DemoAnimations | Address Bar UI interaction demo wrapper | DEMO | RESTYLE(3) | CUT | off-brand UI/demo wrapper |
| DemoCursorClick | DemoAnimations | Cursor Click UI interaction demo wrapper | DEMO | LOCK | CUT | off-brand UI/demo wrapper |
| DemoDragDrop | DemoAnimations | Drag Drop UI interaction demo wrapper | DEMO | LOCK | CUT | off-brand UI/demo wrapper |
| DemoMenuExpand | DemoAnimations | Menu Expand UI interaction demo wrapper | DEMO | LOCK | CUT | off-brand UI/demo wrapper |
| DemoModal | DemoAnimations | Modal UI interaction demo wrapper | DEMO | LOCK | CUT | off-brand UI/demo wrapper |
| DemoPageTransition | DemoAnimations | Page Transition UI interaction demo wrapper | DEMO | LOCK | CUT | off-brand UI/demo wrapper |
| DemoScroll | DemoAnimations | Scroll UI interaction demo wrapper | DEMO | RESTYLE(3) | CUT | off-brand UI/demo wrapper |
| DemoSearchFilter | DemoAnimations | Search Filter UI interaction demo wrapper | DEMO | LOCK | CUT | off-brand UI/demo wrapper |
| DemoTextInput | DemoAnimations | Text Input UI interaction demo wrapper | DEMO | LOCK | CUT | off-brand UI/demo wrapper |
| DemoTooltip | DemoAnimations | Tooltip UI interaction demo wrapper | DEMO | LOCK | CUT | off-brand UI/demo wrapper |
| DemoWizard | DemoAnimations | Wizard UI interaction demo wrapper | DEMO | LOCK | CUT | off-brand UI/demo wrapper |
| DemoZoomFocus | DemoAnimations | Zoom Focus UI interaction demo wrapper | DEMO | LOCK | CUT | off-brand UI/demo wrapper |
| EffectChromaticAberration | EffectAnimations | Chromatic Aberration full-screen visual effect overlay | EFFECT | LOCK | KEEP | reusable connective visual effect |
| EffectDepthOfField | EffectAnimations | Depth Of Field full-screen visual effect overlay | EFFECT | LOCK | KEEP | reusable connective visual effect |
| EffectDuotone | EffectAnimations | Duotone full-screen visual effect overlay | EFFECT | LOCK | KEEP | reusable connective visual effect |
| EffectFilmGrain | EffectAnimations | Film Grain full-screen visual effect overlay | EFFECT | LOCK | KEEP | reusable connective visual effect |
| EffectGlow | EffectAnimations | Glow full-screen visual effect overlay | EFFECT | LOCK | KEEP | reusable connective visual effect |
| EffectKaleidoscope | EffectAnimations | Kaleidoscope full-screen visual effect overlay | EFFECT | LOCK | KEEP | reusable connective visual effect |
| EffectLightLeak | EffectAnimations | Light Leak full-screen visual effect overlay | EFFECT | LOCK | KEEP | reusable connective visual effect |
| EffectMatrix | EffectAnimations | Matrix full-screen visual effect overlay | EFFECT | RESTYLE(6) | KEEP | reusable connective visual effect |
| EffectNoise | EffectAnimations | Noise full-screen visual effect overlay | EFFECT | LOCK | KEEP | reusable connective visual effect |
| EffectVHS | EffectAnimations | V H S full-screen visual effect overlay | EFFECT | LOCK | KEEP | reusable connective visual effect |
| LayoutAsymmetric | LayoutAnimations | extreme asymmetric hero+detail text layout | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| LayoutDiagonal | LayoutAnimations | diagonal dynamic composition layout | SHAPE | LOCK | KEEP | reusable connective layout/effect template |
| LayoutFrameInFrame | LayoutAnimations | frame-in-frame nested composition layout | SHAPE | LOCK | KEEP | reusable connective layout/effect template |
| LayoutFullscreenType | LayoutAnimations | fullscreen kinetic typography layout | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| LayoutGiantNumber | LayoutAnimations | giant number + text stat layout | DATA | LOCK | KEEP | reusable connective layout/effect template |
| LayoutGridBreak | LayoutAnimations | grid-breaking irregular composition layout | SHAPE | LOCK | KEEP | reusable connective layout/effect template |
| LayoutLayered | LayoutAnimations | layered depth composition layout | SHAPE | LOCK | KEEP | reusable connective layout/effect template |
| LayoutMultiColumn | LayoutAnimations | multi-column parallel text layout | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| LayoutOffGrid | LayoutAnimations | intentionally off-grid composition layout | SHAPE | LOCK | KEEP | reusable connective layout/effect template |
| LayoutSplitContrast | LayoutAnimations | split-screen left/right contrast layout | DATA | LOCK | KEEP | reusable connective layout/effect template |
| LayoutVerticalMix | LayoutAnimations | vertical + horizontal mixed text layout | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| LayoutWhitespace | LayoutAnimations | minimalist whitespace-heavy text layout | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| LiquidBlob | LiquidAnimations | layered organic blob morph motion | SHAPE | LOCK | KEEP | reusable connective layout/effect template |
| LiquidCalligraphyInk | LiquidAnimations | ink/calligraphy brush stroke effect | EFFECT | RESTYLE(6) | KEEP | reusable connective layout/effect template |
| LiquidFluidWave | LiquidAnimations | full-screen fluid wave ambient background | BACKGROUND | LOCK | KEEP | reusable connective layout/effect template |
| LiquidInkSplash | LiquidAnimations | ink-splash reveal transition (Spotify-style) | TRANSITION | LOCK | KEEP | reusable connective layout/effect template |
| LiquidMorphBlob | LiquidAnimations | morphing blob cluster shape animation | SHAPE | LOCK | KEEP | reusable connective layout/effect template |
| LiquidOilSpill | LiquidAnimations | iridescent oil-spill visual effect | EFFECT | RESTYLE(3) | KEEP | reusable connective layout/effect template |
| LiquidPaintDrip | LiquidAnimations | screen-covering colorful paint drip effect | EFFECT | LOCK | KEEP | reusable connective layout/effect template |
| LiquidSplatter | LiquidAnimations | bold splatter visual effect | EFFECT | LOCK | KEEP | reusable connective layout/effect template |
| LiquidSwirl | LiquidAnimations | giant liquid swirl shape motion | SHAPE | LOCK | KEEP | reusable connective layout/effect template |
| LiquidWaterDrop | LiquidAnimations | water-drop ripple effect | EFFECT | RESTYLE(3) | KEEP | reusable connective layout/effect template |
| ListAsymmetric3 | ListAnimations | asymmetric 1-large+2-small list layout | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| ListFullscreenSequence | ListAnimations | fullscreen sequential one-by-one list reveal | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| ListHeroWithList | ListAnimations | hero item plus supporting list layout | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| ListHorizontalPeek | ListAnimations | horizontal peek-scroll list reveal | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| ListMinimalLeft | ListAnimations | left-aligned minimal list layout | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| ListNumberedVertical | ListAnimations | vertical numbered list reveal | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| ListSimpleText | ListAnimations | simple icon-free text list | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| ListStaggered | ListAnimations | zigzag staggered list reveal | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| ListStatsFocused | ListAnimations | number-forward stats list layout | DATA | LOCK | KEEP | reusable connective layout/effect template |
| ListTimeline | ListAnimations | vertical timeline list layout | DATA | LOCK | KEEP | reusable connective layout/effect template |
| ListTwoColumnCompare | ListAnimations | two-column feature comparison list | DATA | LOCK | KEEP | reusable connective layout/effect template |
| ListUnevenGrid | ListAnimations | uneven 1-large+2-small grid list | TEXT | LOCK | KEEP | reusable connective layout/effect template |
| Logo3DRotate | LogoAnimations | 3D Rotate logo reveal animation | LOGO | LOCK | CUT | brand logo reveal, cut |
| LogoGlitch | LogoAnimations | Glitch logo reveal animation | LOGO | LOCK | CUT | brand logo reveal, cut |
| LogoLightTrail | LogoAnimations | Light Trail logo reveal animation | LOGO | LOCK | CUT | brand logo reveal, cut |
| LogoMaskReveal | LogoAnimations | Mask Reveal logo reveal animation | LOGO | LOCK | CUT | brand logo reveal, cut |
| LogoMorph | LogoAnimations | Morph logo reveal animation | LOGO | LOCK | CUT | brand logo reveal, cut |
| LogoNeonSign | LogoAnimations | Neon Sign logo reveal animation | LOGO | RESTYLE(3) | CUT | brand logo reveal, cut |
| LogoParticles | LogoAnimations | Particles logo reveal animation | LOGO | LOCK | CUT | brand logo reveal, cut |
| LogoSplitScreen | LogoAnimations | Split Screen logo reveal animation | LOGO | LOCK | CUT | brand logo reveal, cut |
| LogoStamp | LogoAnimations | Stamp logo reveal animation | LOGO | LOCK | CUT | brand logo reveal, cut |
| LogoStroke | LogoAnimations | Stroke logo reveal animation | LOGO | LOCK | CUT | brand logo reveal, cut |
| ParticleBubbles | ParticleAnimations | Bubbles ambient particle effect | EFFECT | RESTYLE(3) | KEEP | reusable ambient particle effect |
| ParticleConfetti | ParticleAnimations | Confetti ambient particle effect | EFFECT | LOCK | KEEP | reusable ambient particle effect |
| ParticleFireworks | ParticleAnimations | Fireworks ambient particle effect | EFFECT | LOCK | KEEP | reusable ambient particle effect |
| ParticleLightning | ParticleAnimations | Lightning ambient particle effect | EFFECT | LOCK | KEEP | reusable ambient particle effect |
| ParticleMagneticField | ParticleAnimations | Magnetic Field ambient particle effect | EFFECT | LOCK | KEEP | reusable ambient particle effect |
| ParticleSakura | ParticleAnimations | Sakura ambient particle effect | EFFECT | RESTYLE(5) | KEEP | reusable ambient particle effect |
| ParticleShootingStars | ParticleAnimations | Shooting Stars ambient particle effect | EFFECT | LOCK | KEEP | reusable ambient particle effect |
| ParticleSmoke | ParticleAnimations | Smoke ambient particle effect | EFFECT | LOCK | KEEP | reusable ambient particle effect |
| ParticleSnow | ParticleAnimations | Snow ambient particle effect | EFFECT | RESTYLE(3) | KEEP | reusable ambient particle effect |
| ParticleSparks | ParticleAnimations | Sparks ambient particle effect | EFFECT | LOCK | KEEP | reusable ambient particle effect |
| Roller3DCarousel | RollerAnimations | 3D Carousel rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerBlur | RollerAnimations | Blur rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerCountdown | RollerAnimations | Countdown rolling text/number reveal | TEXT | RESTYLE(6) | KEEP | reusable kinetic text reveal |
| RollerDramaticStop | RollerAnimations | Dramatic Stop rolling text/number reveal | TEXT | RESTYLE(7) | KEEP | reusable kinetic text reveal |
| RollerDrum | RollerAnimations | Drum rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerFadeSlide | RollerAnimations | Fade Slide rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerFlip | RollerAnimations | Flip rolling text/number reveal | TEXT | RESTYLE(4) | KEEP | reusable kinetic text reveal |
| RollerGlitch | RollerAnimations | Glitch rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerGradientWave | RollerAnimations | Gradient Wave rolling text/number reveal | TEXT | RESTYLE(3) | KEEP | reusable kinetic text reveal |
| RollerLiquid | RollerAnimations | Liquid rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerMaskSlide | RollerAnimations | Mask Slide rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerMultiSlot | RollerAnimations | Multi Slot rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerOutlineHighlight | RollerAnimations | Outline Highlight rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerPerspectiveStripes | RollerAnimations | Perspective Stripes rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerScaleBounce | RollerAnimations | Scale Bounce rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerShuffle | RollerAnimations | Shuffle rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerSlotMachine | RollerAnimations | Slot Machine rolling text/number reveal | TEXT | RESTYLE(4) | KEEP | reusable kinetic text reveal |
| RollerSlotReveal | RollerAnimations | Slot Reveal rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerSplitFlap | RollerAnimations | Split Flap rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerTypewriter | RollerAnimations | Typewriter rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerVerticalList | RollerAnimations | Vertical List rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| RollerWave | RollerAnimations | Wave rolling text/number reveal | TEXT | LOCK | KEEP | reusable kinetic text reveal |
| Shape3DCube | ShapeAnimations | 3D Cube geometric shape animation | SHAPE | LOCK | KEEP | reusable geometric shape motion |
| ShapeCircularProgress | ShapeAnimations | Circular Progress geometric shape animation | SHAPE | LOCK | KEEP | reusable geometric shape motion |
| ShapeExplosion | ShapeAnimations | Explosion geometric shape animation | SHAPE | LOCK | KEEP | reusable geometric shape motion |
| ShapeHelix | ShapeAnimations | Helix geometric shape animation | SHAPE | LOCK | KEEP | reusable geometric shape motion |
| ShapeHexGrid | ShapeAnimations | Hex Grid geometric shape animation | SHAPE | LOCK | KEEP | reusable geometric shape motion |
| ShapeMandala | ShapeAnimations | Mandala geometric shape animation | SHAPE | LOCK | KEEP | reusable geometric shape motion |
| ShapeMorphing | ShapeAnimations | Morphing geometric shape animation | SHAPE | LOCK | KEEP | reusable geometric shape motion |
| ShapeParticleField | ShapeAnimations | Particle Field geometric shape animation | SHAPE | LOCK | KEEP | reusable geometric shape motion |
| ShapeRipples | ShapeAnimations | Ripples geometric shape animation | SHAPE | LOCK | KEEP | reusable geometric shape motion |
| ShapeSpinningRings | ShapeAnimations | Spinning Rings geometric shape animation | SHAPE | LOCK | KEEP | reusable geometric shape motion |
| Text3DFlip | TextAnimations | 3D Flip text reveal/style animation | TEXT | LOCK | KEEP | reusable text reveal component |
| TextCounter | TextAnimations | Counter text reveal/style animation | TEXT | LOCK | KEEP | reusable text reveal component |
| TextExplode | TextAnimations | Explode text reveal/style animation | TEXT | LOCK | KEEP | reusable text reveal component |
| TextGlitch | TextAnimations | Glitch text reveal/style animation | TEXT | LOCK | KEEP | reusable text reveal component |
| TextGradient | TextAnimations | Gradient text reveal/style animation | TEXT | LOCK | KEEP | reusable text reveal component |
| TextKinetic | TextAnimations | Kinetic text reveal/style animation | TEXT | LOCK | KEEP | reusable text reveal component |
| TextMaskReveal | TextAnimations | Mask Reveal text reveal/style animation | TEXT | LOCK | KEEP | reusable text reveal component |
| TextNeon | TextAnimations | Neon text reveal/style animation | TEXT | LOCK | KEEP | reusable text reveal component |
| TextScramble | TextAnimations | Scramble text reveal/style animation | TEXT | LOCK | KEEP | reusable text reveal component |
| TextSplit | TextAnimations | Split text reveal/style animation | TEXT | LOCK | KEEP | reusable text reveal component |
| TextTypewriter | TextAnimations | Typewriter text reveal/style animation | TEXT | RESTYLE(3) | KEEP | reusable text reveal component |
| TextWave | TextAnimations | Wave text reveal/style animation | TEXT | LOCK | KEEP | reusable text reveal component |
| Theme3DGlass | ThemeAnimations | 3D Glass full-scene visual style treatment | BACKGROUND | RESTYLE(3) | KEEP | reusable full-scene style template |
| Theme3DGlassThreeJS | ThemeAnimations | 3D Glass Three J S full-scene visual style treatment | BACKGROUND | RESTYLE(14) | KEEP | reusable full-scene style template |
| ThemeArtDeco | ThemeAnimations | Art Deco full-scene visual style treatment | BACKGROUND | RESTYLE(12) | KEEP | reusable full-scene style template |
| ThemeBauhaus | ThemeAnimations | Bauhaus full-scene visual style treatment | BACKGROUND | RESTYLE(4) | KEEP | reusable full-scene style template |
| ThemeBoho | ThemeAnimations | Boho full-scene visual style treatment | BACKGROUND | RESTYLE(10) | KEEP | reusable full-scene style template |
| ThemeBrutalistWeb | ThemeAnimations | Brutalist Web full-scene visual style treatment | BACKGROUND | LOCK | KEEP | reusable full-scene style template |
| ThemeCosmic | ThemeAnimations | Cosmic full-scene visual style treatment | BACKGROUND | RESTYLE(5) | KEEP | reusable full-scene style template |
| ThemeCyberpunk | ThemeAnimations | Cyberpunk full-scene visual style treatment | BACKGROUND | RESTYLE(11) | KEEP | reusable full-scene style template |
| ThemeDarkMode | ThemeAnimations | Dark Mode full-scene visual style treatment | BACKGROUND | RESTYLE(7) | KEEP | reusable full-scene style template |
| ThemeDuotone | ThemeAnimations | Duotone full-scene visual style treatment | BACKGROUND | RESTYLE(4) | KEEP | reusable full-scene style template |
| ThemeGeometricAbstract | ThemeAnimations | Geometric Abstract full-scene visual style treatment | BACKGROUND | RESTYLE(8) | KEEP | reusable full-scene style template |
| ThemeGlassmorphism | ThemeAnimations | Glassmorphism full-scene visual style treatment | BACKGROUND | RESTYLE(5) | KEEP | reusable full-scene style template |
| ThemeGradient | ThemeAnimations | Gradient full-scene visual style treatment | BACKGROUND | RESTYLE(5) | KEEP | reusable full-scene style template |
| ThemeHolographic | ThemeAnimations | Holographic full-scene visual style treatment | BACKGROUND | RESTYLE(8) | KEEP | reusable full-scene style template |
| ThemeIndustrial | ThemeAnimations | Industrial full-scene visual style treatment | BACKGROUND | RESTYLE(12) | KEEP | reusable full-scene style template |
| ThemeIsometric | ThemeAnimations | Isometric full-scene visual style treatment | BACKGROUND | RESTYLE(3) | KEEP | reusable full-scene style template |
| ThemeJapanese | ThemeAnimations | Japanese full-scene visual style treatment | BACKGROUND | RESTYLE(5) | KEEP | reusable full-scene style template |
| ThemeLuxury | ThemeAnimations | Luxury full-scene visual style treatment | BACKGROUND | RESTYLE(7) | KEEP | reusable full-scene style template |
| ThemeMemphis | ThemeAnimations | Memphis full-scene visual style treatment | BACKGROUND | RESTYLE(8) | KEEP | reusable full-scene style template |
| ThemeMinimalist | ThemeAnimations | Minimalist full-scene visual style treatment | BACKGROUND | LOCK | KEEP | reusable full-scene style template |
| ThemeMonochrome | ThemeAnimations | Monochrome full-scene visual style treatment | BACKGROUND | LOCK | KEEP | reusable full-scene style template |
| ThemeNatural | ThemeAnimations | Natural full-scene visual style treatment | BACKGROUND | RESTYLE(8) | KEEP | reusable full-scene style template |
| ThemeNeobrutalism | ThemeAnimations | Neobrutalism full-scene visual style treatment | BACKGROUND | RESTYLE(9) | KEEP | reusable full-scene style template |
| ThemeNeon | ThemeAnimations | Neon full-scene visual style treatment | BACKGROUND | RESTYLE(18) | KEEP | reusable full-scene style template |
| ThemeNeumorphism | ThemeAnimations | Neumorphism full-scene visual style treatment | BACKGROUND | RESTYLE(10) | KEEP | reusable full-scene style template |
| ThemeOrganic | ThemeAnimations | Organic full-scene visual style treatment | BACKGROUND | RESTYLE(5) | KEEP | reusable full-scene style template |
| ThemePaperCut | ThemeAnimations | Paper Cut full-scene visual style treatment | BACKGROUND | RESTYLE(5) | KEEP | reusable full-scene style template |
| ThemePop | ThemeAnimations | Pop full-scene visual style treatment | BACKGROUND | RESTYLE(6) | KEEP | reusable full-scene style template |
| ThemeRetro | ThemeAnimations | Retro full-scene visual style treatment | BACKGROUND | RESTYLE(7) | KEEP | reusable full-scene style template |
| ThemeSwiss | ThemeAnimations | Swiss full-scene visual style treatment | BACKGROUND | RESTYLE(4) | KEEP | reusable full-scene style template |
| ThemeTech | ThemeAnimations | Tech full-scene visual style treatment | BACKGROUND | LOCK | KEEP | reusable full-scene style template |
| ThemeWatercolor | ThemeAnimations | Watercolor full-scene visual style treatment | BACKGROUND | LOCK | KEEP | reusable full-scene style template |
| ThemeY2K | ThemeAnimations | Y2 K full-scene visual style treatment | BACKGROUND | RESTYLE(11) | KEEP | reusable full-scene style template |
| TransitionBlinds | TransitionAnimations | Blinds scene transition effect | TRANSITION | LOCK | KEEP | reusable scene transition effect |
| TransitionBoxReveal | TransitionAnimations | Box Reveal scene transition effect | TRANSITION | LOCK | KEEP | reusable scene transition effect |
| TransitionCircleWipe | TransitionAnimations | Circle Wipe scene transition effect | TRANSITION | LOCK | KEEP | reusable scene transition effect |
| TransitionDiagonalSlice | TransitionAnimations | Diagonal Slice scene transition effect | TRANSITION | LOCK | KEEP | reusable scene transition effect |
| TransitionFlash | TransitionAnimations | Flash scene transition effect | TRANSITION | LOCK | KEEP | reusable scene transition effect |
| TransitionGlitch | TransitionAnimations | Glitch scene transition effect | TRANSITION | LOCK | KEEP | reusable scene transition effect |
| TransitionLineSweep | TransitionAnimations | Line Sweep scene transition effect | TRANSITION | LOCK | KEEP | reusable scene transition effect |
| TransitionLiquidMorph | TransitionAnimations | Liquid Morph scene transition effect | TRANSITION | LOCK | KEEP | reusable scene transition effect |
| TransitionShutter | TransitionAnimations | Shutter scene transition effect | TRANSITION | LOCK | KEEP | reusable scene transition effect |
| TransitionZoomBlur | TransitionAnimations | Zoom Blur scene transition effect | TRANSITION | LOCK | KEEP | reusable scene transition effect |
| UIButton | UIAnimations | Button UI component animation | UI | LOCK | CUT | off-brand UI chrome component |
| UICard | UIAnimations | Card UI component animation | UI | LOCK | CUT | off-brand UI chrome component |
| UIDropdown | UIAnimations | Dropdown UI component animation | UI | LOCK | CUT | off-brand UI chrome component |
| UIForm | UIAnimations | Form UI component animation | UI | LOCK | CUT | off-brand UI chrome component |
| UILoading | UIAnimations | Loading UI component animation | UI | LOCK | CUT | off-brand UI chrome component |
| UIModal | UIAnimations | Modal UI component animation | UI | LOCK | CUT | off-brand UI chrome component |
| UINavigation | UIAnimations | Navigation UI component animation | UI | LOCK | CUT | off-brand UI chrome component |
| UITabs | UIAnimations | Tabs UI component animation | UI | LOCK | CUT | off-brand UI chrome component |
| UIToast | UIAnimations | Toast UI component animation | UI | LOCK | CUT | off-brand UI chrome component |
| UIToggle | UIAnimations | Toggle UI component animation | UI | LOCK | CUT | off-brand UI chrome component |


## onda — 70 units (59 keep / 11 cut)

| Unit | Cat | What it does | Fit | Palette | Verdict | Reason |
|---|---|---|---|---|---|---|
| audio-clip | components | Trims/loops/fades a single audio file | AUDIO | LOCK | KEEP | core audio primitive |
| audio-visualizer | components | FFT-driven waveform bars from audio | AUDIO | RESTYLE(16) | KEEP | audio visualizer, core primitive |
| bar-chart | components | Horizontal bars grow to value, staggered | DATA | LOCK | KEEP | chart, core data primitive |
| bento-grid | components | CSS grid of glass cards, staggered | UI | LOCK | CUT | pure UI layout grid |
| blur-reveal | components | Opacity+blur+rise text reveal, reference primitive | TEXT | LOCK | KEEP | signature text reveal primitive |
| bounding-box | components | Selection-marquee rectangle outline for UI regions | UI | LOCK | CUT | pure UI annotation for docs |
| browser-frame | components | Wraps content in browser chrome frame | UI | RESTYLE(9) | CUT | UI browser chrome wrapper |
| button | components | CTA pill button with press animation | UI | LOCK | CUT | UI control, not explanatory |
| callout | components | Label+arrow annotation pointing at canvas spot | SHAPE | LOCK | KEEP | explainer annotation, name-the-part |
| camera-shake | components | Deterministic decaying camera shake wrapper | EFFECT | LOCK | KEEP | reusable camera effect |
| captions | components | Word-by-word timed caption display | AUDIO | LOCK | KEEP | caption-sync data primitive |
| chapter-card | components | Numbered eyebrow + chapter title reveal | TITLE | LOCK | KEEP | chapter/section title card |
| code-block | components | Line-by-line syntax-highlighted code reveal | TEXT | RESTYLE(5) | KEEP | explanatory code teaching primitive |
| code-diff | components | Line-by-line unified diff reveal | TEXT | RESTYLE(5) | KEEP | explanatory diff teaching primitive |
| confetti | components | Seeded PRNG confetti burst, full-canvas | EFFECT | LOCK | KEEP | celebratory particle effect |
| count-up | components | Animated number counts from-to | DATA | LOCK | KEEP | core counter/stat primitive |
| cursor | components | Animated pointer travels + click ripple | UI | LOCK | CUT | UI interaction demo device |
| device-frame | components | Wraps content in phone/laptop bezel | UI | RESTYLE(4) | CUT | UI device chrome wrapper |
| draw-on | components | SVG path strokes itself in | SHAPE | LOCK | KEEP | path draw-on, reusable primitive |
| dynamic-grid | components | Diagonally drifting technical grid atmosphere | BACKGROUND | LOCK | KEEP | ambient background grid |
| end-card | components | Closing CTA + staggered handle row | TITLE | LOCK | KEEP | closing/end scene card |
| fade-in | components | Pure opacity fade for text | TEXT | LOCK | KEEP | simplest text reveal primitive |
| fade-out | components | Pure opacity fade exit for text | TEXT | LOCK | KEEP | simplest text exit primitive |
| gradient-shift | components | Drifting two-color linear gradient background | BACKGROUND | LOCK | KEEP | ambient gradient background |
| grain-overlay | components | Subtle SVG turbulence film-grain texture | BACKGROUND | LOCK | KEEP | atmospheric texture layer |
| highlight | components | Marker-style accent bar behind text | TEXT | LOCK | KEEP | emphasis reveal primitive |
| icon-pop | components | Inline stroked/filled icon path variants | SHAPE | LOCK | KEEP | reusable icon shape primitive |
| image-reveal | components | Image entrance with signature motion fingerprint | TRANSITION | LOCK | KEEP | image entrance/transition primitive |
| input-field | components | Glass UI text input, optional typing | UI | LOCK | CUT | UI form control |
| kanban-board | components | Glass columns with staggered ticket cards | UI | RESTYLE(3) | CUT | product UI board demo |
| ken-burns | components | Slow zoom+pan documentary photo motion | EFFECT | LOCK | KEEP | iconic ken-burns effect |
| line-chart | components | Left-to-right drawing line chart with dots | DATA | LOCK | KEEP | core chart data primitive |
| logo-sting | components | Branded logo draw-on + title reveal | LOGO | LOCK | CUT | branded logo reveal |
| lower-third | components | Broadcast name+role bar slides in | TITLE | LOCK | KEEP | lower-third title primitive |
| marquee | components | Seamless looping horizontal scroll ticker | EFFECT | LOCK | KEEP | ambient looping ticker |
| mask-reveal | components | Text revealed behind retreating clip mask | TEXT | LOCK | KEEP | hard-edge text reveal |
| matrix-decode | components | Characters flicker through glyphs then settle | TEXT | LOCK | KEEP | decode-style text reveal |
| mesh-gradient | components | Drifting colored blobs mesh backdrop | BACKGROUND | LOCK | KEEP | ambient mesh background |
| node-graph | components | Hub-and-spoke orbiting satellite constellation | SHAPE | RESTYLE(5) | KEEP | flow/diagram connector primitive |
| parallax | components | Slow drift over image, no zoom | EFFECT | LOCK | KEEP | lighter ken-burns-style effect |
| pie-reveal | components | Single-arc pie fills 0 to value% | DATA | LOCK | KEEP | core gauge data primitive |
| pricing-card | components | Pricing tier card with CTA button | MARKETING | RESTYLE(7) | CUT | pricing/marketing card |
| progress-bar | components | Bar fills 0 to value% | DATA | LOCK | KEEP | core progress data primitive |
| progress-steps | components | Stepper fill animates to current step | DATA | LOCK | KEEP | explanatory stage/progress indicator |
| pulsing-indicator | components | Live status dot with expanding-ring pulse | EFFECT | LOCK | KEEP | ambient live-status effect |
| quote-card | components | Word-by-word pull-quote with attribution | TITLE | LOCK | KEEP | quote/lower-third title primitive |
| rgb-glitch-text | components | RGB channel-split text with glitch bursts | EFFECT | LOCK | KEEP | glitch text effect |
| rotate-in | components | Text rotates from angle while fading | TEXT | LOCK | KEEP | rotate text reveal primitive |
| scale-in | components | Scale-from-smaller-and-fade text entrance | TEXT | LOCK | KEEP | scale text reveal primitive |
| shimmer-sweep | components | Light band sweeps across dim text | EFFECT | LOCK | KEEP | shimmer light-sweep effect |
| skeleton-card | components | Loading-placeholder card with sweep highlight | UI | LOCK | CUT | UI loading skeleton |
| slide-in | components | Translate-and-fade text entrance, 4 directions | TEXT | LOCK | KEEP | slide text reveal primitive |
| slide-out | components | Translate-and-fade text exit, mirror of slide-in | TEXT | LOCK | KEEP | slide text exit primitive |
| slot-machine-roll | components | Characters spin reel then land on target | TEXT | LOCK | KEEP | number/char roll reveal |
| split-screen | components | Two content panes side by side | SHAPE | RESTYLE(4) | KEEP | split-screen comparison layout |
| spotlight-card | components | Glass card with drifting spotlight glow | EFFECT | RESTYLE(3) | KEEP | ambient spotlight card effect |
| spotlight | components | Radial light reveal grows from point | EFFECT | LOCK | KEEP | light-sweep reveal effect |
| stagger-group | components | Reveals list items in canonical stagger | TEXT | LOCK | KEEP | core stagger composition primitive |
| stat-card | components | Counted number + staggered label + rule | DATA | LOCK | KEEP | flagship stat/metric block |
| terminal | components | Command types itself, staggered output lines | TEXT | RESTYLE(5) | KEEP | explanatory terminal teaching primitive |
| text-fade-replace | components | Crossfades cycling phrases in place | TEXT | LOCK | KEEP | kinetic text crossfade primitive |
| timeline | components | Line draws on, dots cascade, labels fade | DATA | LOCK | KEEP | core timeline data primitive |
| title-card | components | Headline blur-reveal + subtitle cascade | TITLE | LOCK | KEEP | hero title card primitive |
| tracking-in | components | Text contracts from wide tracking, fades | TEXT | LOCK | KEEP | cinematic title text entrance |
| typewriter | components | Character-by-character text reveal, linear rate | TEXT | LOCK | KEEP | typewriter text reveal primitive |
| underline | components | Text fades in, accent underline draws | TEXT | LOCK | KEEP | emphasis underline reveal primitive |
| video-clip | components | Trims/loops video clip with fingerprint fades | OTHER | LOCK | KEEP | core video media primitive |
| vignette | components | Static radial darkening at canvas edges | BACKGROUND | LOCK | KEEP | atmospheric vignette layer |
| word-rotate | components | Phrases cycle in place, one at a time | TEXT | LOCK | KEEP | kinetic phrase rotation primitive |
| word-stagger | components | Each word fades+rises in sequence | TEXT | LOCK | KEEP | clearest stagger fingerprint demo |


## remotion-templates — 81 units (69 keep / 12 cut)
| Unit | Cat | What it does | Fit | Palette | Verdict | Reason |
|---|---|---|---|---|---|---|
| animated-list | flat | Staggered list item reveal animation | TEXT | RESTYLE(3) | KEEP | reusable stagger reveal, explainer-friendly |
| animated-text | flat | Generic animated text entrance component | TEXT | LOCK | KEEP | core text-reveal connective tissue |
| area-chart | flat | Animated filled area chart | DATA | RESTYLE(6) | KEEP | data viz, core explainer need |
| blinds-transition | flat | Venetian-blinds style scene transition | TRANSITION | RESTYLE(11) | KEEP | reusable scene transition |
| bokeh-circles | flat | Soft blurred circle ambient background | BACKGROUND | LOCK | KEEP | ambient background, low color risk |
| bounce-text | flat | Bouncy spring text entrance | TEXT | RESTYLE(2) | KEEP | kinetic text reveal |
| bubble-pop-text | flat | Text pops in like bubbles | TEXT | RESTYLE(2) | KEEP | kinetic text reveal |
| camera-shake | flat | Camera-shake impact/emphasis effect | EFFECT | RESTYLE(6) | KEEP | emphasis effect, reusable |
| card-flip | flat | 3D card flip reveal transition | TRANSITION | RESTYLE(4) | KEEP | reveal mechanism, not pure UI |
| chapter-title | flat | Chapter/section title card | TITLE | RESTYLE(6) | KEEP | explicit title-card keep |
| chart-animation | flat | Generic animated chart component | DATA | RESTYLE(12) | KEEP | data viz core need |
| cinematic-title-intro | flat | Cinematic title intro sequence | TITLE | RESTYLE(4) | KEEP | title card variant |
| circular-progress | flat | Circular/radial progress gauge | DATA | RESTYLE(3) | KEEP | gauge/progress, explainer stat |
| clock-wipe | flat | Clock-hand wipe transition | TRANSITION | RESTYLE(11) | KEEP | classic wipe transition |
| comparison-chart | flat | Side-by-side comparison chart | DATA | RESTYLE(6) | KEEP | comparison data viz |
| countdown-intro | flat | Countdown-style intro sequence | TITLE | RESTYLE(4) | KEEP | explicit title-card keep |
| countdown-timer | flat | Numeric countdown timer overlay | MARKETING | RESTYLE(3) | CUT | engagement/marketing countdown gimmick |
| credits-roll | flat | Scrolling end credits roll | TITLE | RESTYLE(4) | KEEP | explicit title-card keep |
| cross-dissolve | flat | Cross-fade dissolve between scenes | TRANSITION | RESTYLE(7) | KEEP | core dissolve transition |
| donut-chart | flat | Animated donut/ring chart | DATA | RESTYLE(6) | KEEP | data viz core need |
| end-card | flat | Closing/outro end card | TITLE | RESTYLE(8) | KEEP | reusable outro title card |
| fade-through-black | flat | Fade-to-black scene transition | TRANSITION | RESTYLE(8) | KEEP | core dissolve transition |
| film-burn | flat | Film-burn textured overlay effect | EFFECT | LOCK | KEEP | archival/texture overlay effect |
| floating-bubble-text | flat | Floating bubble text animation | TEXT | RESTYLE(2) | KEEP | kinetic text reveal |
| gallery-grid | flat | Animated image grid layout | SHAPE | RESTYLE(13) | KEEP | reusable grid layout |
| geometric-patterns | flat | Abstract geometric pattern background | BACKGROUND | LOCK | KEEP | ambient/explainer background |
| glitch-text | flat | Glitch-style text distortion effect | TEXT | LOCK | KEEP | kinetic text effect |
| gradient-shift | flat | Animated shifting gradient background | BACKGROUND | RESTYLE(4) | KEEP | ambient background |
| grid-pulse | flat | Pulsing grid background effect | BACKGROUND | LOCK | KEEP | ambient/connective background |
| image-carousel | flat | Sequential image carousel display | TRANSITION | RESTYLE(7) | KEEP | reusable image sequencing |
| image-comparison-slider | flat | Before/after image comparison slider | DATA | RESTYLE(9) | KEEP | comparison visualization, explainer core |
| image-zoom-reveal | flat | Zoom-in image reveal effect | EFFECT | RESTYLE(5) | KEEP | reveal/emphasis effect |
| iris-transition | flat | Circular iris-close scene transition | TRANSITION | RESTYLE(11) | KEEP | classic iris transition |
| ken-burns | flat | Slow pan/zoom on still image | EFFECT | LOCK | KEEP | classic explainer camera move |
| letterbox-reveal | flat | Letterbox bars reveal transition | TRANSITION | RESTYLE(4) | KEEP | reveal/transition device |
| line-chart | flat | Animated line/trend chart | DATA | RESTYLE(4) | KEEP | data viz core need |
| liquid-wave | flat | Liquid wave motion background/effect | BACKGROUND | RESTYLE(3) | KEEP | ambient motion background |
| logo-blur-reveal | flat | Blur-focus reveal of a logo | LOGO | RESTYLE(3) | CUT | logo branding reveal |
| logo-bounce-drop | flat | Logo drops in with bounce | LOGO | RESTYLE(3) | CUT | logo branding reveal |
| logo-fade-reveal | flat | Logo fades into view | LOGO | RESTYLE(4) | CUT | logo branding reveal |
| logo-glitch-reveal | flat | Logo reveal via glitch effect | LOGO | RESTYLE(4) | CUT | logo branding reveal |
| logo-scale-rotate | flat | Logo scales and rotates in | LOGO | RESTYLE(3) | CUT | logo branding reveal |
| logo-spin-reveal | flat | Logo spins into place | LOGO | RESTYLE(4) | CUT | logo branding reveal |
| logo-split-reveal | flat | Logo splits apart to reveal | LOGO | RESTYLE(5) | CUT | logo branding reveal |
| logo-stroke-draw | flat | Logo outline draws itself on | LOGO | RESTYLE(5) | CUT | logo branding reveal |
| logo-typewriter | flat | Logo text types itself out | LOGO | RESTYLE(4) | CUT | logo branding reveal |
| lower-third | flat | Lower-third name/title caption bar | TITLE | RESTYLE(5) | KEEP | explicit lower-third keep |
| masonry-gallery | flat | Masonry-style image grid gallery | SHAPE | RESTYLE(13) | KEEP | reusable grid layout |
| matrix-rain | flat | Matrix-style falling code background | BACKGROUND | LOCK | KEEP | stylized ambient background |
| morph-transition | flat | Shape-morph scene transition | TRANSITION | RESTYLE(7) | KEEP | morph transition, core keep |
| noise-grain | flat | Film-grain noise texture overlay | BACKGROUND | RESTYLE(4) | KEEP | grain/ambient texture |
| notification-pop | flat | Mobile-style notification toast popup | UI | RESTYLE(7) | CUT | pure UI notification chrome |
| parallax-pan | flat | Parallax panning camera move on image | EFFECT | LOCK | KEEP | camera move, ken-burns adjacent |
| particle-explosion | flat | Particle burst explosion effect | EFFECT | LOCK | KEEP | particle effect, reusable emphasis |
| photo-stack | flat | Stacked photos scatter/fan effect | EFFECT | RESTYLE(7) | KEEP | reusable image emphasis effect |
| picture-in-picture | flat | Inset picture-in-picture video frame | SHAPE | RESTYLE(6) | KEEP | reusable inset frame layout |
| pie-chart | flat | Animated pie chart | DATA | RESTYLE(8) | KEEP | data viz core need |
| pixel-transition | flat | Pixelated dissolve scene transition | TRANSITION | LOCK | KEEP | stylized dissolve transition |
| polaroid-frame | flat | Polaroid photo frame reveal | SHAPE | RESTYLE(4) | KEEP | reusable framing device |
| popping-text | flat | Text pops in with emphasis | TEXT | RESTYLE(3) | KEEP | kinetic text reveal |
| progress-bars | flat | Animated progress/stat bars | DATA | RESTYLE(7) | KEEP | data viz core need |
| progress-steps | flat | Multi-step progress indicator | DATA | RESTYLE(12) | KEEP | timeline/progress data viz |
| pulsing-text | flat | Text pulses for emphasis | TEXT | LOCK | KEEP | kinetic text emphasis |
| push-transition | flat | Push/slide scene transition | TRANSITION | RESTYLE(11) | KEEP | slide/push transition, core keep |
| quote-card | flat | Quote callout card display | TITLE | RESTYLE(3) | KEEP | quote/lower-third style keep |
| rotating-carousel | flat | 3D rotating carousel of items | SHAPE | RESTYLE(6) | KEEP | reusable rotating display device |
| slide-text | flat | Text slides in from edge | TEXT | LOCK | KEEP | kinetic text reveal |
| slide-wipe | flat | Slide-wipe scene transition | TRANSITION | RESTYLE(8) | KEEP | slide/wipe transition, core keep |
| sound-wave | flat | Animated audio waveform visualizer | AUDIO | LOCK | KEEP | explicit audio visualizer keep |
| split-screen | flat | Side-by-side split-screen layout | SHAPE | RESTYLE(7) | KEEP | comparison/connector layout |
| spotlight-reveal | flat | Spotlight beam reveal effect | EFFECT | RESTYLE(8) | KEEP | light-sweep reveal effect |
| starfield | flat | Twinkling starfield background | BACKGROUND | LOCK | KEEP | ambient background, explainer-friendly |
| stat-counter | flat | Animated number/stat counter | DATA | RESTYLE(3) | KEEP | number-roll stat, core keep |
| subscribe-reminder | flat | Subscribe/follow channel reminder overlay | MARKETING | RESTYLE(5) | CUT | channel marketing CTA |
| text-highlight | flat | Animated text highlight/underline emphasis | TEXT | RESTYLE(4) | KEEP | text highlight, core keep |
| title-split | flat | Title splits apart into halves | TITLE | LOCK | KEEP | title card variant |
| typewriter-subtitle | flat | Typewriter-style subtitle text reveal | TEXT | LOCK | KEEP | typewriter reveal, core keep |
| vignette-pulse | flat | Pulsing vignette darkening effect | EFFECT | RESTYLE(2) | KEEP | ambient emphasis effect |
| whip-pan | flat | Fast whip-pan camera transition | EFFECT | RESTYLE(11) | KEEP | camera-move transition effect |
| zoom-pulse | flat | Rhythmic zoom pulse on image | EFFECT | LOCK | KEEP | zoom emphasis effect |
| zoom-through | flat | Zoom-through scene transition | TRANSITION | RESTYLE(5) | KEEP | zoom transition, core keep |


## remotion-bits — 40 units (39 keep / 1 cut)

| Unit | Cat | What it does | Fit | Palette | Verdict | Reason |
|---|---|---|---|---|---|---|
| BasicCounter | animated-counter | Animated counter interpolating between numbers | DATA | LOCK | KEEP | core stat-reveal component |
| CounterConfetti | animated-counter | Counter reaching 1000 with confetti burst | DATA | RESTYLE(8) | KEEP | stat reveal / reusable burst effect |
| BlurSlideWord | animated-text | Text fades, unblurs, slides up per word | TEXT | LOCK | KEEP | reusable text reveal |
| CharByChar | animated-text | Text appears character by character, staggered | TEXT | LOCK | KEEP | reusable text reveal |
| FadeIn | animated-text | Simple fade-in text animation | TEXT | LOCK | KEEP | basic reusable text fade |
| GlitchCycle | animated-text | Cycling text with glitch transitions | TEXT | LOCK | KEEP | stylized text cycling effect |
| GlitchIn | animated-text | Text glitches into existence | TEXT | LOCK | KEEP | stylized text reveal |
| MatrixRain | animated-text | Matrix-style falling code background | BACKGROUND | LOCK | KEEP | reusable animated background |
| WordByWord | animated-text | Text appears word by word, staggered | TEXT | LOCK | KEEP | reusable text reveal |
| BasicCodeBlock | code-block | Syntax highlighted code, line-by-line reveal | TEXT | LOCK | KEEP | explains code progressively |
| TypingCodeBlock | code-block | Syntax highlighted code with typing effect | TEXT | LOCK | KEEP | explains code progressively |
| ConicGradient | gradient-transition | Colorful conic gradient rotation | BACKGROUND | RESTYLE(4) | KEEP | reusable animated background |
| LinearGradient | gradient-transition | Smooth transition between linear gradients | BACKGROUND | RESTYLE(4) | KEEP | reusable background/transition |
| RadialGradient | gradient-transition | Smooth transition between radial gradients | BACKGROUND | RESTYLE(4) | KEEP | reusable background/transition |
| Fireflies | particle-system | Wandering glowing firefly particles | EFFECT | LOCK | KEEP | ambient particle effect |
| ParticlesFountain | particle-system | Bursting fountain particle effect | EFFECT | LOCK | KEEP | reusable particle burst |
| ParticlesGrid | particle-system | Particles snapping to a grid | EFFECT | RESTYLE(3) | KEEP | reusable particle effect |
| ParticlesSnow | particle-system | Falling snow particles | EFFECT | LOCK | KEEP | ambient particle effect |
| ScrollingColumns | particle-system | Four image columns scrolling in 3D scene | EFFECT | RESTYLE(20) | KEEP | reusable parallax scroll effect |
| 3DBasic | scene-3d | 3D camera transitions between steps | EFFECT | LOCK | KEEP | reusable camera-move system |
| 3DElements | scene-3d | Places arbitrary elements in 3D space | EFFECT | LOCK | KEEP | reusable 3D scene primitive |
| Carousel | scene-3d | Rotating carousel of cards in 3D | EFFECT | LOCK | KEEP | reusable 3D gallery motion |
| CubeNavigation | scene-3d | Navigate faces of a 3D cube via steps | EFFECT | LOCK | KEEP | reusable camera-move system |
| CursorFlyover | scene-3d | Camera flies over screenshot, cursor highlights areas | EFFECT | LOCK | KEEP | camera-pan highlight technique |
| FlyingThroughWords | scene-3d | Words spawn and fly past the camera | EFFECT | LOCK | KEEP | 3D text flythrough effect |
| KenBurns | scene-3d | Slow camera pan/zoom over images | EFFECT | LOCK | KEEP | classic Ken Burns camera move |
| StepTimingContext | scene-3d | Demonstrates timing-context API in 3D steps | DEMO | LOCK | CUT | dev API demo, not a visual technique |
| Terminal3D | scene-3d | 3D terminal with typewriter code | EFFECT | RESTYLE(7) | KEEP | terminal/code camera effect |
| CardStack | staggered-motion | Card stack spreads out in 3D space | SHAPE | LOCK | KEEP | reusable layout motion |
| EasingsVisualizer | staggered-motion | Visualizes easing functions with sliding squares | DATA | RESTYLE(4) | KEEP | teaches motion/easing curves |
| FractureReassemble | staggered-motion | Elements fracture apart and reassemble | SHAPE | LOCK | KEEP | reusable transition/shape motion |
| GridStagger | staggered-motion | Grid elements stagger in from center | SHAPE | LOCK | KEEP | reusable grid reveal |
| ListReveal | staggered-motion | Vertical list scales and finds its place | SHAPE | RESTYLE(4) | KEEP | reusable list reveal |
| MosaicReframe | staggered-motion | Mosaic grid reframes/rearranges | SHAPE | LOCK | KEEP | reusable grid/layout motion |
| SlideFromLeft | staggered-motion | Text slides in from left, fades in | TEXT | LOCK | KEEP | reusable text entrance |
| StaggeredFadeIn | staggered-motion | Elements fading in sequentially | TRANSITION | RESTYLE(7) | KEEP | reusable stagger fade |
| BasicTypewriter | typewriter | Simple typing animation with cursor | TEXT | LOCK | KEEP | reusable typewriter text |
| CLISimulation | typewriter | Simulates CLI typing and system output | TEXT | RESTYLE(5) | KEEP | reusable terminal/CLI effect |
| MultiTextTypewriter | typewriter | Types multiple sentences in sequence | TEXT | LOCK | KEEP | reusable typewriter text |
| VariableSpeedTypewriter | typewriter | Typewriter with variable speed, errors | TEXT | LOCK | KEEP | reusable typewriter text |


## remotion-ui — 24 units (21 keep / 3 cut)
| Unit | Cat | What it does | Fit | Palette | Verdict | Reason |
|---|---|---|---|---|---|---|
| AnimatedNumber | dataviz | Animates a numeric value counting up with formatting | DATA | LOCK | KEEP | Reusable explanatory number reveal |
| MetricBlock | dataviz | Staggered grid of labeled metrics with highlight color | DATA | RESTYLE(3) | KEEP | Reusable stat-block layout |
| ComparisonCard | dataviz | Side-by-side left/right comparison card with vs label | DATA | RESTYLE(6) | KEEP | Reusable comparison layout |
| DataCard | dataviz | Single stat card with trend, unit, prefix/suffix | DATA | RESTYLE(6) | KEEP | Reusable stat card component |
| FlowDiagram | dataviz | Animated node-and-connection flow diagram | DATA | RESTYLE(9) | KEEP | Reusable explanatory diagram |
| AudioPlayer | root | Plays audio with fade in/out and volume control | AUDIO | LOCK | KEEP | Pipeline audio playback utility |
| PieChart | root | Animated pie/donut chart with labels and percentages | DATA | LOCK | KEEP | Reusable chart component |
| InstagramPost | root | Renders a fake Instagram post card UI | MARKETING | RESTYLE(7) | CUT | Social-media mockup, off-brand |
| TweetEmbed | root | Renders a fake tweet/X post embed UI | MARKETING | RESTYLE(15) | CUT | Social-media mockup, off-brand |
| WaveformVisualizer | audio | Animated audio waveform/bar visualizer | AUDIO | LOCK | KEEP | Reusable audio visualization |
| AudioSequence | audio | Sequences audio segments with crossfade | AUDIO | LOCK | KEEP | Pipeline audio sequencing utility |
| TTSProvider | audio | Provides TTS config/context to children | AUDIO | LOCK | KEEP | Pipeline audio/TTS utility |
| CaptionSync | audio | Syncs animated captions to audio timing | AUDIO | LOCK | KEEP | Pipeline caption/audio utility |
| ParticleEffect | root | Emits animated particles with physics params | EFFECT | RESTYLE(3) | KEEP | Reusable background effect |
| LoadingSpinner | root | Renders a generic UI loading spinner | UI | LOCK | CUT | Generic app-chrome UI element |
| Character | root | Animated presenter character with pose/emotion | OTHER | RESTYLE(16) | KEEP | Presenter figure, reusable |
| TextHighlight | text | Animates a text highlight/underline pattern | TEXT | LOCK | KEEP | Reusable text emphasis effect |
| WordStagger | text | Staggers words into view with animation | TEXT | LOCK | KEEP | Reusable text reveal effect |
| TypeWriter | text | Types text out character by character | TEXT | LOCK | KEEP | Reusable text reveal effect |
| TextGlitch | text | Applies glitch animation to text | TEXT | RESTYLE(6) | KEEP | Reusable text effect |
| CrossFade | transitions | Cross-fades between two elements | TRANSITION | LOCK | KEEP | Reusable connective transition |
| DipToColor | transitions | Dips through a color between scenes | TRANSITION | LOCK | KEEP | Reusable connective transition |
| LineChart | root | Animated line chart with grid and dots | DATA | RESTYLE(6) | KEEP | Reusable chart component |
| BarChart | root | Animated bar chart with staggered bars | DATA | RESTYLE(7) | KEEP | Reusable chart component |


## clippkit — 13 units (9 keep / 4 cut)
| Unit | Cat | What it does | Fit | Palette | Verdict | Reason |
|---|---|---|---|---|---|---|
| glitch-text | components | Glitchy sporadic text distortion effect for titles/captions | TEXT | LOCK | KEEP | Text reveal, reusable connective tissue |
| bar-waveform | components | Animated bar-style audio waveform visualizer from audio data | AUDIO | LOCK | KEEP | Audio-reactive, explanatory for narration beats |
| card-flip | components | Spring-physics card flip reveals back text from front | TRANSITION | LOCK | KEEP | Usable reveal mechanism, not just UI |
| bar-loader | components | Horizontal bar loading indicator with text label | UI | LOCK | CUT | UI chrome, loading spinner not explanatory |
| linear-waveform | components | Smooth line-style audio waveform visualizer from audio data | AUDIO | LOCK | KEEP | Audio-reactive waveform, explanatory device |
| sliding-text | components | Text slides in from a direction with spring physics | TEXT | LOCK | KEEP | Text entrance, reusable connective tissue |
| screen-loader | components | Full-screen loading spinner variant overlay | UI | LOCK | CUT | UI chrome, app loading screen |
| circular-waveform | components | Circular radial bar audio waveform visualizer | AUDIO | LOCK | KEEP | Audio-reactive waveform, explanatory device |
| circular-loader | components | Circular dot-progress loading spinner with gradient | UI | RESTYLE(3) | CUT | UI chrome, progress spinner |
| toast-card | components | Animated toast notification card message with entry/exit | UI | LOCK | CUT | UI notification chrome, off-brand |
| typing-text | components | Typewriter-style text typing animation with blinking cursor | TEXT | LOCK | KEEP | Text reveal, reusable connective tissue |
| floating-card | components | Card floats up/down with spring-driven idle motion | EFFECT | LOCK | KEEP | Borderline reveal/callout, lean keep |
| popping-text | components | Characters pop in per-character with staggered delay colors | TEXT | LOCK | KEEP | Text reveal, reusable connective tissue |


## remocn — 44 units (1 keep / 43 cut)
| Unit | Cat | What it does | Fit | Palette | Verdict | Reason |
|---|---|---|---|---|---|---|
| accordion | UI | Expandable/collapsible content panel with animated height | UI | LOCK | CUT | off-brand UI chrome |
| ai-prompt-flow | MARKETING | AI chat prompt-to-answer demo with toast | MARKETING | LOCK | CUT | product demo flow not explanatory |
| alert-dialog | UI | Modal alert dialog with title/description/actions | UI | LOCK | CUT | UI chrome dialog |
| blur-in | TRANSITION | Blur-focus reveal transition with direction/distance/speed | TRANSITION | RESTYLE(4) | KEEP | reusable blur transition effect |
| button | UI | Animated button with press/hover states | UI | LOCK | CUT | generic UI chrome |
| caret | UI | Blinking text caret/cursor indicator | UI | LOCK | CUT | UI text-input chrome |
| chat-flow | MARKETING | Generic chat message thread demo flow | MARKETING | LOCK | CUT | chat marketing flow |
| checkbox | UI | Animated checkbox toggle control | UI | LOCK | CUT | UI form control |
| checkout-flow | MARKETING | E-commerce checkout/payment flow demo | MARKETING | LOCK | CUT | marketing checkout demo |
| combobox | UI | Searchable filterable dropdown combobox | UI | LOCK | CUT | UI form chrome |
| command-menu-item | UI | Single command palette list item | UI | LOCK | CUT | UI chrome piece |
| command-menu | UI | Command palette (cmd-K) search menu | UI | LOCK | CUT | UI chrome |
| context-menu | UI | Right-click context menu with highlight state | UI | LOCK | CUT | UI chrome |
| cursor | UI | Animated mouse cursor with click ripple | UI | LOCK | CUT | demo cursor not explanatory |
| dialog | UI | Modal dialog with title/description/actions | UI | LOCK | CUT | UI chrome dialog |
| drawer | UI | Slide-in drawer panel with actions | UI | LOCK | CUT | UI chrome |
| dropdown-menu-item | UI | Single dropdown menu list item | UI | LOCK | CUT | UI chrome piece |
| dropdown-menu | UI | Dropdown menu with items and trigger | UI | LOCK | CUT | UI chrome |
| field | UI | Labeled form field layout wrapper | UI | LOCK | CUT | UI form chrome |
| imessage-chat-flow | MARKETING | iMessage-style chat bubble conversation demo | MARKETING | RESTYLE(18) | CUT | chat marketing demo |
| input | UI | Text input field with states | UI | LOCK | CUT | UI form chrome |
| message-bubble | MARKETING | Single chat message bubble with reaction | MARKETING | LOCK | CUT | chat marketing element |
| onboarding-stepper-flow | MARKETING | Multi-step onboarding/plan signup flow | MARKETING | LOCK | CUT | onboarding marketing flow |
| popover | UI | Floating popover with title/description | UI | LOCK | CUT | UI chrome |
| progress | UI | Linear progress bar indicator | UI | LOCK | CUT | generic UI indicator |
| radio | UI | Radio button selection control | UI | LOCK | CUT | UI form control |
| resizable | UI | Resizable split-pane layout panel | UI | LOCK | CUT | UI layout chrome |
| select-item | UI | Single select dropdown list item | UI | LOCK | CUT | UI chrome piece |
| select | UI | Select dropdown with items and trigger | UI | LOCK | CUT | UI chrome |
| settings-toggle-flow | MARKETING | Settings panel with toggles and save | MARKETING | LOCK | CUT | app settings demo |
| sheet | UI | Slide-in sheet panel with actions | UI | LOCK | CUT | UI chrome |
| signup-flow | MARKETING | Email/password/Google signup form flow | MARKETING | LOCK | CUT | marketing signup demo |
| skeleton-block | UI | Single loading skeleton placeholder block | UI | LOCK | CUT | UI loading chrome |
| skeleton | UI | Multi-block loading skeleton layout | UI | LOCK | CUT | UI loading chrome |
| slider | UI | Draggable value slider control | UI | LOCK | CUT | UI form control |
| spinner | UI | Rotating loading spinner | UI | LOCK | CUT | UI loading chrome |
| stepper | UI | Step-progress indicator dots/bar | UI | LOCK | CUT | UI chrome indicator |
| switch | UI | Toggle switch control | UI | LOCK | CUT | UI form control |
| tabs | UI | Tabbed content panel switcher | UI | LOCK | CUT | UI chrome |
| telegram-chat-flow | MARKETING | Telegram-style chat bubble conversation demo | MARKETING | RESTYLE(21) | CUT | chat marketing demo |
| toast | UI | Toast notification popup | UI | LOCK | CUT | UI chrome notification |
| toggle-group | UI | Segmented toggle button group | UI | LOCK | CUT | UI chrome control |
| tooltip | UI | Hover tooltip label | UI | LOCK | CUT | UI chrome |
| typing-indicator | MARKETING | Chat "typing..." animated dots indicator | MARKETING | LOCK | CUT | chat marketing indicator |

