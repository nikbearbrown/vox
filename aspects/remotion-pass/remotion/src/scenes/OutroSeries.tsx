import React from 'react';
import {
  AbsoluteFill, useCurrentFrame, useVideoConfig, spring,
} from 'remotion';
import { z } from 'zod';
import { VOX, FONT, SPRING_SMOOTH } from '../tokens/vox';

/**
 * OutroSeries — vox outro beat 1 of 2.
 * Displays the book/series identity: eyebrow, series title, GOLD rule, tagline,
 * and GitHub slug. Duration-driven (fills any beat length). Content injected
 * per book from ABOUT.MD by the vox-update driver.
 */
export const outroSeriesSchema = z.object({
  seriesTitle: z.string(),
  tagline: z.string().default(''),
  githubSlug: z.string().default(''),
});
export type OutroSeriesProps = z.infer<typeof outroSeriesSchema>;

export const OutroSeries: React.FC<OutroSeriesProps> = ({ seriesTitle, tagline, githubSlug }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const eyeIn   = spring({ frame,       fps, config: SPRING_SMOOTH });
  const titleIn  = spring({ frame: frame - 6,  fps, config: SPRING_SMOOTH });
  const ruleIn   = spring({ frame: frame - 13, fps, config: SPRING_SMOOTH });
  const subIn    = spring({ frame: frame - 18, fps, config: SPRING_SMOOTH });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: VOX.CREAM,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `0 ${width * 0.1}px`,
      }}
    >
      {/* eyebrow */}
      <div
        style={{
          fontFamily: FONT.display,
          fontSize: height * 0.022,
          fontWeight: 700,
          letterSpacing: 3,
          textTransform: 'uppercase' as const,
          color: VOX.TEAL,
          marginBottom: height * 0.030,
          opacity: eyeIn,
          transform: `translateY(${(1 - eyeIn) * 10}px)`,
        }}
      >
        PART OF THIS SERIES
      </div>

      {/* series title */}
      <div
        style={{
          fontFamily: FONT.display,
          fontSize: height * 0.080,
          fontWeight: 800,
          color: VOX.INK,
          lineHeight: 1.05,
          textAlign: 'center' as const,
          letterSpacing: -1,
          opacity: titleIn,
          transform: `translateY(${(1 - titleIn) * 18}px)`,
          marginBottom: height * 0.026,
        }}
      >
        {seriesTitle}
      </div>

      {/* GOLD rule — grows from left */}
      <div
        style={{
          width: width * 0.12,
          height: 3,
          backgroundColor: VOX.GOLD,
          marginBottom: height * 0.030,
          opacity: ruleIn,
          transform: `scaleX(${ruleIn})`,
          transformOrigin: 'center',
        }}
      />

      {/* tagline */}
      {tagline ? (
        <div
          style={{
            fontFamily: FONT.serif,
            fontSize: height * 0.034,
            color: VOX.SLATE,
            maxWidth: width * 0.62,
            textAlign: 'center' as const,
            lineHeight: 1.5,
            marginBottom: height * 0.030,
            opacity: subIn,
            transform: `translateY(${(1 - subIn) * 10}px)`,
          }}
        >
          {tagline}
        </div>
      ) : null}

      {/* github slug */}
      {githubSlug ? (
        <div
          style={{
            fontFamily: FONT.mono,
            fontSize: height * 0.024,
            color: VOX.SLATE,
            letterSpacing: 1,
            opacity: subIn * 0.65,
            transform: `translateY(${(1 - subIn) * 6}px)`,
          }}
        >
          github.com/nikbearbrown/{githubSlug}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
