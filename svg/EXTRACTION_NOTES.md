# VOX EPS/AI object extraction notes

Generated with `SCRIPTS/vox/extract_vector_objects.py`.

- Output count: 1,143 SVG files.
- Output families: 340 `animal-element-*` SVGs and 803 `movie-abstract-*` SVGs.
- Names are source-based stable names, not semantic object labels, because the Illustrator/EPS sources do not contain object names.
- `manifest.csv` maps each output SVG to its generated label/source slug.
- The full all-file extraction initially filled the disk while processing `abstract art*`; that incomplete abstract-only output was removed and replaced with this targeted animal/movie pass.
- Known import failures observed before the targeted run was interrupted: `movie abstract (16)`, `(34)`, `(57)`, `(60)`, and `(77)`, plus their `_1` variants.
- The targeted run was stopped after output stopped increasing and Inkscape hung during `--query-all`; completed SVGs were kept and validated as well-formed XML.
