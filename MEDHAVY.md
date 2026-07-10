# MEDHAVY — the research-student voice

**Audience.** Advanced undergraduates and master's students, often doing research. The
videos are **helpers** — support alongside their own work, not the primary curriculum.

**Narration voice.** `ELEVENLABS_VOICE_MEDHAVY`.

**Register — Wonder.** A single, flowing explanation in the register of the great
science lectures: one hook, first principles, playful clarity, intellectual honesty. The
purer cut — no workshop scaffolding, no drills, ~3,000 words — a lecture you can't stop
reading. See `voices/wonder/VOICE.md`.

**Why this register.** A research student already has the drive and the problem in front
of them; the most valuable thing a short helper can do is make a concept *click* at a
first-principles level, honestly, including where it breaks down. "I finally understand
*why* this works" is worth more to a researcher than a worked procedure. Wonder builds
durable understanding, respects a capable reader, and never hand-holds. (It beats
Teardown here because the researcher needs to *understand*, not primarily to *judge
tools*; it beats Pragmatist because drills aren't what deepen a concept.)

**Palette — Okabe-Ito** (the colorblind-safe gold standard) on a **warm eggshell**
ground (`#F0EAD6`). Accessibility *is* the value for a research audience.
**bluish-green `#009E73` = good/kept**, **vermillion `#D55E00` = bad/lost** (the
CVD-safe pair), a **neutral gray `#4D4D4D` = structure** (added outside the eight),
**yellow `#F0E442` = highlighter** (fill only), and the full Okabe-Ito set as the
**categorical palette** for multi-series data. **Color law:** position + an explicit
label carry meaning; color only reinforces — the whole point of the palette.
Tokens: `aspects/remotion-pass/remotion/src/tokens/medhavy.ts`.

**Signature tangent — the experiment tangent** (0–1 per video, *only* on a clear
opportunity). When the material obviously invites a little experiment, MEDHAVY may take
one aside: *"want to see this yourself? try this,"* or a **paste-ready LLM prompt** on a
card the viewer can pause and copy. Fits research students who tinker. No clean
experiment → it does nothing.

**Pedagogy.** First principles over procedure; curiosity as the engine; honesty about
limits; and — uniquely to MEDHAVY — a license to nudge the viewer from watching to
*doing*: run it, paste the prompt, see it for yourself.

---
*One of three audience charters. See `AUDIENCES.md` for the full matrix and `voices/`
for the register definitions.*

---

## Video register rules

These rules apply to every video built in the Medhavy register. They are
enforced at build time by the visual + fact gates.

### Bookends (required on every Medhavy reel)

**FIRST beat — Medhavy intro** (MedhavyOpen, Onda terminal style)
```
Screen lines:
  Medhavy AI
  Also known as Medhavi
  मेधावी (Medhavy): From Sanskrit, meaning
  "intelligent" or "intellectually brilliant"
  — the perfect name for our AI-powered
    intelligent learning systems.

tts: "med dahvy A-I. From Sanskrit — meaning intelligent, or intellectually
     brilliant. The perfect name for our A-I-powered intelligent learning systems."
```

**LAST beat — Medhavy outro** (MedhavyOutro card)
```
Screen: "Medhavy — AI-powered intelligent learning systems
         YouTube @MedhavyAI    medhavy.com"

tts: "med dahvy. A-I-powered intelligent learning systems.
     On YouTube, at med dahvy A-I. med dahvy dot com."
```

### Pronunciation split (all beats, permanent rule)
| In | Write |
|----|-------|
| `narration_text` / tts | `med dahvy` · `med dahvy dot com` · `at med dahvy A-I` |
| on-screen text / props | `Medhavy` · `medhavy.com` · `@MedhavyAI` |

Never feed ElevenLabs the literal spelling "Medhavy" — it renders as "med-HAH-vee"
only via the alias `med dahvy` (open-ah, like Davos: meh-DAH-vee). Once the
pronunciation dictionary (`vox/PRONUNCIATION.md`) is live and wired into the audio
step, beats may use "Medhavy" directly and the dict handles the rewrite.

### Pipeline rules
- **Always run the visual + fact gate** — never skip.
- **16:9** = the full reel: Medhavy intro → all content beats → Medhavy outro.
- **9:16 Short** = ONE example only (strongest/most dramatic single segment), run
  through the 16:9→9:16 reformatter (true portrait reflow, not a center-crop),
  wrapped in Medhavy intro + Medhavy outro. **Hard gate: strictly < 3:00**
  (target ≤ 2:55). If ≥ 3:00, fail and trim.

### Remotion compositions (established)
| Composition | Aspect | Use |
|---|---|---|
| `MedhavyOpen` / `MedhavyOpen916` | 16:9 / 9:16 | Brand intro beat |
| `MedhavyTerminalAsk` / `MedhavyTerminalAsk916` | 16:9 / 9:16 | CLI prompt beat |
| `MedhavyCodeBlock` / `MedhavyCodeBlock916` | 16:9 / 9:16 | Code display beat |
| `MedhavyOutro` / `MedhavyOutro916` | 16:9 / 9:16 | Brand outro beat |
