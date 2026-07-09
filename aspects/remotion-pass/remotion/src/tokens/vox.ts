// vox palette + motion tokens — the single place the whole bench retints.
// Values are DESIGN.md's six working colors. Two data accents, one meaning each:
// TEAL = the good/kept/true thing, CRIMSON = the bad/lost/broken thing.
export const VOX = {
  CREAM: '#F3EBDD',   // newsprint ground
  INK: '#2F2A26',     // warm near-black — all body text/marks
  TEAL: '#1F6F5C',    // good / kept / true  (accent A)
  CRIMSON: '#BF3339', // bad / lost / broken (accent B)
  SLATE: '#3E5559',   // structure / entity cards
  GOLD: '#F5D061',    // highlighter fill ONLY, never text
} as const;

// Family names fall back to system faces until the bundled Montserrat / EB Garamond /
// PT Mono TTFs are loaded (see loadVoxFonts, wired in the real toolkit project).
export const FONT = {
  display: 'Montserrat, "Helvetica Neue", Arial, sans-serif', // titles, labels (tracked caps)
  serif: '"EB Garamond", Georgia, serif',                     // quotes, editorial moments
  mono: '"PT Mono", "SF Mono", Menlo, monospace',             // data numbers + math only
} as const;

// House spring — calm, effectively no overshoot (DESIGN: no overshoot, one focal moment).
export const SPRING_SMOOTH = { damping: 30, stiffness: 110, mass: 1 } as const;
