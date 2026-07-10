# NIKBEARBROWN — the default voice

**Audience.** The canonical viewer: a mid-career professional who wants to use AI
effectively in their field, given the full treatment. This is the house cut every reel
is authored in — the other audiences (MEDHAVY, HAI) are *conversions* of it.

**Narration voice.** `ELEVENLABS_VOICE_NIKBEARBROWN` (the default `metadata.voice_id`).

**Register — Teardown** (formerly *Feynman × MKBHD*). Take the thing apart, explain how
each piece actually works, and judge the design choices that put it together that way.
Feynman's intellectual honesty — explain the real machinery, strip the jargon, admit the
limits — fused with a design-critic's lens: what it optimizes for, the trade-offs, the
ecosystem. See `voices/teardown/VOICE.md`.

**Why this register.** Using AI well is a *judgment* skill, not a procedure. A capable
professional already has domain judgment; what they need is a model of what these tools
actually do — what they optimize for, where they break, the trade-offs — so they can map
that onto their own decisions. And because AI tooling changes monthly, a durable
evaluation lens outlasts any specific "do X" recipe that goes stale. Teardown hands over
the lens. It is the default because it is the house brand voice.

**Palette.** The vox default (`DESIGN.md`) — warm newsprint: cream ground, ink text,
**teal = good/kept/true**, **crimson = bad/lost/broken**, slate = structure, gold =
highlighter (fill only, never text).

**Signature tangent.** None beyond the base **equation tangent** — a bounded beat group
that breaks an equation down (five zones, ≤~45s, explains-never-derives, re-entry cue),
then hands back to the main thread.

**Pedagogy.** Concrete before abstract; open on a genuine mystery, not a definition;
explain the actual mechanism from first principles; name the trade-off instead of
selling the thing; be honest about the limits. Judge the tools — don't survey them.

---
*One of three audience charters. The matrix that ties voice + register + palette +
tangent together is `AUDIENCES.md`; the full register definitions live in `voices/`.*

---

## Outro card (final beat, every NikBearBrown / default video)

The outro is always the **LAST beat**. For a Brutalist video with an Onda
CodeBlock comment CTA, the CTA beat comes immediately before the outro.

**Pattern:** big name → tagline → divider → handle · url

```
Screen: "Nik Bear Brown
         Brutalist + Educational AI
         ——————————————————————————
         @NikBearBrown    nikbearbrown.com"

tts: "Nik Bear Brown. Brutalist and Educational A-I.
     On YouTube, at Nik Bear Brown. Nik Bear Brown dot com."
```

**Palette:** teardown (`#FFFFFF` ground / `#2A1A0E` ink / red `#C8102E` accent).
**Voice ID:** `TyW6NH39JcFb5M3xdIIk` (`ELEVENLABS_VOICE_NIKBEARBROWN`).

For the register-to-outro lookup, see `vox/REGISTERS.md`.
