<?xml version="1.0" encoding="UTF-8"?>
<lexicon version="1.0"
  xmlns="http://www.w3.org/2005/01/pronunciation-lexicon"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.w3.org/2005/01/pronunciation-lexicon
    http://www.w3.org/TR/2007/CR-pronunciation-lexicon-20071212/pls.xsd"
  alphabet="ipa"
  xml:lang="en-US">

  <!--
    vox/pronunciation.pls — W3C PLS lexicon for ElevenLabs TTS
    Alias mode: works with eleven_multilingual_v2 and all newer models.
    IPA phoneme mode: requires eleven_flash_v2 or eleven_v3.
    Upload via: POST /v1/pronunciation-dictionaries/add-from-file
    Store returned dictionary_id + version_id in vox/.env.
    See vox/PRONUNCIATION.md for the full wiring guide.
  -->

  <!-- Brand names -->
  <lexeme>
    <grapheme>Medhavy</grapheme>
    <alias>med dahvy</alias>
    <!-- IPA fallback for flash/v3: <phoneme>/mɛˈdɑːvi/</phoneme> -->
  </lexeme>

  <lexeme>
    <grapheme>Medhavi</grapheme>
    <alias>med dahvy</alias>
  </lexeme>

  <!-- Math / science terms -->
  <lexeme>
    <grapheme>cosine</grapheme>
    <alias>co sign</alias>
    <!-- IPA fallback: <phoneme>/ˈkoʊˌsaɪn/</phoneme> -->
  </lexeme>

  <lexeme>
    <grapheme>sine</grapheme>
    <alias>sign</alias>
    <!-- IPA fallback: <phoneme>/saɪn/</phoneme> -->
  </lexeme>

</lexicon>
