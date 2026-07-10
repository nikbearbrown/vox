# REGISTERS.md — outro lookup + tts substitution table

## Outro by register

Every vox reel ends on an outro beat. Pick the outro by the video's register/audience:

| Register / audience | Outro | Voice env var | Details |
|---|---|---|---|
| **Medhavy** | Medhavy outro (MedhavyOutro) | `ELEVENLABS_VOICE_MEDHAVY` | `MEDHAVY.md § Outro card` |
| **Humanitarians AI (HAI)** | Humanitarians AI outro | `ELEVENLABS_VOICE_HUMANITARIANS` | `HAI.md § Outro card` |
| **Everything else** | NikBearBrown outro (default) | `ELEVENLABS_VOICE_NIKBEARBROWN` | `NIKBEARBROWN.md § Outro card` |

**Outro is always the FINAL beat.** For a Brutalist video with an Onda CodeBlock
comment CTA, the CTA comes immediately before the outro.

---

## tts substitution table

When writing `narration_text` for ElevenLabs, apply these rewrites to avoid
mispronunciation. Once `vox/PRONUNCIATION.md`'s dictionary is live and wired,
entries marked ✦ are handled automatically; others remain manual.

| Written in text / on-screen | Write in `narration_text` | Notes |
|---|---|---|
| `Medhavy` | `med dahvy` ✦ | Open-ah, like Davos: meh-DAH-vee |
| `Medhavi` | `med dahvy` ✦ | Same pronunciation |
| `@MedhavyAI` | `at med dahvy A-I` ✦ | |
| `medhavy.com` | `med dahvy dot com` ✦ | |
| `AI` / `A.I.` | `A-I` | ElevenLabs reads "AI" as "ay-eye" reliably on most voices |
| `cosine` | `co sign` ✦ | ElevenLabs reads "cosine" as "co-seen" |
| `sine` | `sign` ✦ | ElevenLabs reads "sine" as "seen" |
| `brutalist.art` | `brutalist dot art` | |
| `@NikBearBrown` | `at Nik Bear Brown` | |
| `nikbearbrown.com` | `Nik Bear Brown dot com` | |
| `@humanitariansai` | `at humanitarians A-I` | |
| `humanitarians.ai` | `humanitarians dot A-I` | |
| `.com` (any domain) | `dot com` | |

✦ = will be handled by pronunciation dictionary once wired (see `PRONUNCIATION.md`).

---

## Outro screen templates

Copy-paste templates for the three outros:

### Medhavy
```
Screen: "Medhavy — AI-powered intelligent learning systems
         YouTube @MedhavyAI    medhavy.com"
tts: "med dahvy. A-I-powered intelligent learning systems.
     On YouTube, at med dahvy A-I. med dahvy dot com."
```

### Humanitarians AI
```
Screen: "Humanitarians AI
         We teach what AI can and cannot do.
         @humanitariansai    humanitarians.ai"
tts: "Humanitarians A-I. We teach what A-I can and cannot do.
     On YouTube, at humanitarians A-I. humanitarians dot A-I."
```

### NikBearBrown (default)
```
Screen: "Nik Bear Brown
         Brutalist + Educational AI
         @NikBearBrown    nikbearbrown.com"
tts: "Nik Bear Brown. Brutalist and Educational A-I.
     On YouTube, at Nik Bear Brown. Nik Bear Brown dot com."
```
