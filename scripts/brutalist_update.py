#!/usr/bin/env python3
"""brutalist_update.py — flip a vox beat sheet to the Brutalist standard.

Steps:
  1. Back up beat_sheet.json → beat_sheet.pre-brutalist.json
  2. Flip metadata: style_preset = brutalist-teardown, palette = teardown
  3. Prepend B00 (BrutalistTerminalOpen — terminal open with checklist)
  4. Append B99 (BrutalistCommentCTA — comment CTA, variant A/B/C/D by slug hash)
  5. Join metadata from YouTube.json if provided

Usage (from books/):
  python3 vox/scripts/brutalist_update.py \\
    --sheet cancer-biology/youtube/vox-apoptosis-resistance/beat_sheet.json \\
    --folder cancer-biology \\
    --youtube-json YouTube.json \\
    --apply
"""
import argparse, hashlib, json, shutil, sys
from pathlib import Path

TEARDOWN_META = {
    "style_preset": "brutalist-teardown",
    "ground": "#FFFFFF",
    "accents": {
        "data": ["#C8102E"],
        "annotation": "#C8102E",
        "highlighter": "#F6D8DC",
    },
    "color_semantics": (
        "TEARDOWN: flat white #FFFFFF / ink #2A1A0E / one red #C8102E. "
        "Good/kept = plain ink (label + position carry it). Red = the ONE accent."
    ),
}

CHECKLIST = [
    "✓ palette   teardown  #FFFFFF/#2A1A0E/#C8102E",
    "✓ B00       BrutalistTerminalOpen",
    "✓ B99       BrutalistCommentCTA",
    "✓ voice     NikBearBrown",
    "✓ masters   16:9 + 9:16",
    "✓ factcheck FACTCHECK.md",
    "✓ layout    band-separation",
    "✓ gate      PASS",
]

CTA_VARIANTS = {
    "A": {
        "code": (
            "// cancer-biology / apoptosis-resistance\n"
            "//\n"
            "// if this was useful, follow for more\n"
            "// @nikbearbrown  ·  brutalist.art\n"
        ),
        "narration": (
            "If this was useful, follow for more. "
            "Nik Bear Brown. brutalist dot art."
        ),
    },
    "B": {
        "code": (
            "// cancer-biology / apoptosis-resistance\n"
            "//\n"
            "// leave a comment — what was unclear?\n"
            "// @nikbearbrown  ·  brutalist.art\n"
        ),
        "narration": (
            "Leave a comment — what was unclear? "
            "Nik Bear Brown. brutalist dot art."
        ),
    },
    "C": {
        "code": (
            "// cancer-biology / apoptosis-resistance\n"
            "//\n"
            "// share if this helped someone you know\n"
            "// @nikbearbrown  ·  brutalist.art\n"
        ),
        "narration": (
            "Share if this helped someone you know. "
            "Nik Bear Brown. brutalist dot art."
        ),
    },
    "D": {
        "code": (
            "// cancer-biology / apoptosis-resistance\n"
            "//\n"
            "// subscribe for weekly explainers\n"
            "// @nikbearbrown  ·  brutalist.art\n"
        ),
        "narration": (
            "Subscribe for weekly explainers. "
            "Nik Bear Brown. brutalist dot art."
        ),
    },
}


def slug_variant(slug: str) -> str:
    h = int(hashlib.sha1(slug.encode()).hexdigest(), 16)
    return "ABCD"[h % 4]


def build_b00(title: str, topic: str) -> dict:
    cmd = f'brutalist explainer-video "{title}"'
    narration = (
        f"This is an experiment. "
        f"This is {title}. "
        f"There are other videos on {topic.title()}. "
        "www dot brutalist dot art."
    )
    return {
        "beat_id": "B00",
        "act": "INTRO",
        "narration_text": narration,
        "shot": {
            "type": "GRAPHIC",
            "source": "remotion",
            "motion": "fade",
            "remotion": {
                "pattern": "BrutalistTerminalOpen",
                "provenance": "proven-core/BrutalistTerminalOpen",
                "version": "1",
                "props": {
                    "command": cmd,
                    "checklist": CHECKLIST,
                    "topic": topic,
                },
                "rendered": {"out": "media/B00.mp4", "at": ""},
            },
        },
        "estimated_duration_s": 10.0,
        "audio_file": "mp3/beat-B00.mp3",
    }


def build_b99(slug: str, topic: str) -> dict:
    variant = slug_variant(slug)
    cta = CTA_VARIANTS[variant]
    return {
        "beat_id": "B99",
        "act": "CTA",
        "narration_text": cta["narration"],
        "shot": {
            "type": "GRAPHIC",
            "source": "remotion",
            "motion": "fade",
            "remotion": {
                "pattern": "BrutalistCommentCTA",
                "provenance": "proven-core/BrutalistCommentCTA",
                "version": "1",
                "props": {
                    "filename": "onda.ts",
                    "code": cta["code"],
                    "variant": variant,
                    "topic": topic,
                },
                "rendered": {"out": "media/B99.mp4", "at": ""},
            },
        },
        "estimated_duration_s": 5.0,
        "audio_file": "mp3/beat-B99.mp3",
    }


def main():
    ap = argparse.ArgumentParser(
        description="Flip a vox beat sheet to the Brutalist standard."
    )
    ap.add_argument("--sheet", required=True, type=Path,
                    help="Path to beat_sheet.json")
    ap.add_argument("--folder", default="",
                    help="Book folder name (for YouTube.json lookup)")
    ap.add_argument("--youtube-json", type=Path,
                    help="Path to YouTube.json for metadata join")
    ap.add_argument("--apply", action="store_true",
                    help="Write changes (default: dry-run)")
    ap.add_argument("--force", action="store_true",
                    help="Re-apply even if already brutalist-updated")
    a = ap.parse_args()

    sheet_path = a.sheet.resolve()
    if not sheet_path.exists():
        sys.exit(f"[err] no beat_sheet.json at {sheet_path}")

    sheet = json.loads(sheet_path.read_text())
    meta = sheet["metadata"]
    slug = meta.get("slug", sheet_path.parent.name)
    title = meta.get("title", slug)
    topic = meta.get("topic", "TOPIC")
    variant = slug_variant(slug)

    # Idempotency guard
    already_done = (
        meta.get("style_preset") == "brutalist-teardown"
        and any(b["beat_id"] == "B00" for b in sheet["beats"])
    )
    if already_done and not a.force:
        print(f"[brutalist] already updated — skipping (--force to re-apply)")
        return

    print(f"[brutalist] slug:    {slug}")
    print(f"[brutalist] title:   {title[:70]}")
    print(f"[brutalist] topic:   {topic}")
    print(f"[brutalist] variant: {variant}  (CTA A/B/C/D by sha1(slug) % 4)")

    b00 = build_b00(title, topic)
    b99 = build_b99(slug, topic)

    if not a.apply:
        print("[brutalist] DRY RUN — pass --apply to write")
        print(f"  B00 narration: {b00['narration_text'][:80]}")
        print(f"  B99 narration: {b99['narration_text']}")
        print(f"  B99 code:\n" + "\n".join(
            "    " + l for l in CTA_VARIANTS[variant]["code"].splitlines()
        ))
        return

    # Backup
    backup = sheet_path.with_name("beat_sheet.pre-brutalist.json")
    shutil.copy2(sheet_path, backup)
    print(f"[brutalist] backed up → {backup.name}")

    # Flip metadata
    meta["style_preset"] = TEARDOWN_META["style_preset"]
    meta["ground"] = TEARDOWN_META["ground"]
    meta["accents"] = TEARDOWN_META["accents"]
    meta["color_semantics"] = TEARDOWN_META["color_semantics"]

    # Join YouTube.json
    if a.youtube_json:
        yt_path = Path(a.youtube_json).resolve()
        if yt_path.exists():
            yt = json.loads(yt_path.read_text())
            # YouTube.json may be a list of records or a dict keyed by slug
            if isinstance(yt, list):
                yt_entry = next(
                    (r for r in yt if r.get("slug") == slug
                     or r.get("folder") == a.folder),
                    {},
                )
            else:
                yt_entry = yt.get(slug) or yt.get(f"{a.folder}/{slug}") or {}
            if yt_entry:
                meta["youtube"] = yt_entry
                print(f"[brutalist] joined YouTube.json entry for {slug}")
            else:
                print(f"[brutalist] no matching YouTube.json entry for {slug} — skipping join")
        else:
            print(f"[brutalist] YouTube.json not found at {yt_path} — skipping join")

    # Prepend B00, append B99
    beats = sheet["beats"]
    if not any(b["beat_id"] == "B00" for b in beats):
        beats.insert(0, b00)
        print("[brutalist] prepended B00 → BrutalistTerminalOpen")
    else:
        print("[brutalist] B00 already present — skipping prepend")

    if not any(b["beat_id"] == "B99" for b in beats):
        beats.append(b99)
        print(f"[brutalist] appended B99 → BrutalistCommentCTA variant {variant}")
    else:
        print("[brutalist] B99 already present — skipping append")

    sheet_path.write_text(json.dumps(sheet, indent=1, ensure_ascii=False))
    print(f"[brutalist] ✓ wrote {sheet_path.name}")
    print(f"[brutalist] next:")
    print(f"  python3 vox/scripts/generate_audio.py "
          f"cancer-biology/youtube/vox-apoptosis-resistance --only B00 B99")
    print(f"  python3 vox/scripts/vox_remotion.py "
          f"cancer-biology/youtube/vox-apoptosis-resistance --force --only B00")
    print(f"  python3 vox/scripts/vox_remotion.py "
          f"cancer-biology/youtube/vox-apoptosis-resistance --force --only B99")


if __name__ == "__main__":
    main()
