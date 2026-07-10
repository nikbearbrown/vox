# PRONUNCIATION.md — ElevenLabs pronunciation dictionary

The pronunciation dictionary is the authoritative source for how brand names,
math terms, and domain-specific words are spoken in TTS. When it is wired into
`generate_audio.py`, you write the natural spelling in `narration_text` and the
dict handles the rewrite — no manual alias required.

---

## Dictionary entries

| Grapheme (written) | Alias (spoken) | IPA | Notes |
|---|---|---|---|
| `Medhavy` | `med dahvy` | /mɛˈdɑːvi/ | Open-ah like Davos: meh-DAH-vee |
| `Medhavi` | `med dahvy` | /mɛˈdɑːvi/ | Same pronunciation as Medhavy |
| `cosine` | `co sign` | /ˈkoʊˌsaɪn/ | ElevenLabs reads "cosine" as "co-seen" |
| `sine` | `sign` | /saɪn/ | ElevenLabs reads "sine" as "seen" |

### Pronunciation history (what was tried before landing here)
| Attempt | Result |
|---|---|
| `Medhavy` (literal) | mispronounced as "MED-hah-vee" or "med-HAY-vee" |
| `med havy` | heard as "med heavy" |
| `med davy` | short-a Davy (Davy Crockett), not open-ah |
| `med dahvy` | ✓ open-ah, meh-DAH-vee — current |

If `med dahvy` is still wrong: try `meh-dah-vee`, then `medahvee`.

---

## W3C PLS lexicon — `vox/pronunciation.pls`

The `.pls` file is the machine-readable form. Use **alias mode** for
`eleven_multilingual_v2` (alias rewrites the text before synthesis). IPA phoneme
mode requires `eleven_flash_v2` or `eleven_v3`.

---

## Wiring into `generate_audio.py`

### Step 1 — upload the lexicon once

```bash
# Set your API key
export ELEVENLABS_API_KEY=<your_key>

# Create the pronunciation dictionary from the PLS file
curl -s -X POST "https://api.elevenlabs.io/v1/pronunciation-dictionaries/add-from-file" \
  -H "xi-api-key: $ELEVENLABS_API_KEY" \
  -F "file=@vox/pronunciation.pls;type=application/pls+xml" \
  -F "name=vox-global" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print('id:', d['id'], 'version:', d['version_id'])"
```

Store the returned IDs in `vox/.env` (do NOT commit):
```
VOX_PRONUNCIATION_DICT_ID=<dictionary_id>
VOX_PRONUNCIATION_DICT_VERSION=<version_id>
```

### Step 2 — add to the TTS payload

In `generate_audio.py`, add `pronunciation_dictionary_locators` to the payload
inside `generate_one()`:

```python
dict_id      = os.getenv("VOX_PRONUNCIATION_DICT_ID", "")
dict_version = os.getenv("VOX_PRONUNCIATION_DICT_VERSION", "")
if dict_id and dict_version:
    payload["pronunciation_dictionary_locators"] = [
        {"pronunciation_dictionary_id": dict_id, "version_id": dict_version}
    ]
```

### Step 3 — upgrade model for IPA phoneme support (optional)

IPA phoneme rules only work on `eleven_flash_v2` / `eleven_v3`; alias mode works
on `eleven_multilingual_v2`. To A/B the brand voice on flash before committing:

```python
# In beat_sheet.json per-beat tts_voice_settings:
"tts_voice_settings": {"model_id": "eleven_flash_v2"}
```

A/B on the Medhavy brand voice first. If pronunciation is identical to
`eleven_multilingual_v2`, IPA mode is available and `pronunciation.pls` can use
`<phoneme>` elements instead of `<alias>`.

---

## To add a new entry

1. Add a row to the **Dictionary entries** table above.
2. Add a `<lexeme>` to `vox/pronunciation.pls`.
3. Re-upload the file via the API (same `add-from-file` endpoint — creates a new
   version). Update `VOX_PRONUNCIATION_DICT_VERSION` in `.env`.
4. Add the term to the manual fallback column in `REGISTERS.md` (marked ✦).
