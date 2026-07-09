import React from 'react';
import {
  AbsoluteFill, useCurrentFrame, useVideoConfig, spring,
} from 'remotion';
import { z } from 'zod';
import { VOX, FONT, SPRING_SMOOTH } from '../tokens/vox';

/**
 * OutroCTA — vox outro beat 2 of 2.
 * Like / comment / subscribe card on INK ground (high-contrast energy shift).
 * Author name in GOLD, handle in CREAM mono. Duration-driven. Content injected
 * per book from AUTHOR.MD by the vox-update driver.
 */
export const outroCtaSchema = z.object({
  authorName: z.string().default('Nik Bear Brown'),
  handle:     z.string().default('@NikBearBrown'),
  ctaText:    z.string().default('Like and subscribe for more.'),
});
export type OutroCtaProps = z.infer<typeof outroCtaSchema>;

const ACTIONS = ['LIKE', 'COMMENT', 'SUBSCRIBE'] as const;

export const OutroCTA: React.FC<OutroCtaProps> = ({ authorName, handle, ctaText }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const headIn    = spring({ frame,        fps, config: SPRING_SMOOTH });
  const actionsIn = spring({ frame: frame - 9,  fps, config: SPRING_SMOOTH });
  const authorIn  = spring({ frame: frame - 17, fps, config: SPRING_SMOOTH });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: VOX.INK,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `0 ${width * 0.1}px`,
      }}
    >
      {/* CTA headline */}
      <div
        style={{
          fontFamily: FONT.display,
          fontSize: height * 0.060,
          fontWeight: 700,
          color: VOX.CREAM,
          textAlign: 'center' as const,
          lineHeight: 1.15,
          letterSpacing: -0.5,
          maxWidth: width * 0.72,
          marginBottom: height * 0.055,
          opacity: headIn,
          transform: `translateY(${(1 - headIn) * 16}px)`,
        }}
      >
        {ctaText}
      </div>

      {/* action pills: LIKE · COMMENT · SUBSCRIBE */}
      <div
        style={{
          display: 'flex',
          gap: width * 0.030,
          marginBottom: height * 0.065,
          opacity: actionsIn,
          transform: `translateY(${(1 - actionsIn) * 12}px)`,
        }}
      >
        {ACTIONS.map((label) => (
          <div
            key={label}
            style={{
              fontFamily: FONT.display,
              fontSize: height * 0.028,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: 'uppercase' as const,
              color: VOX.INK,
              backgroundColor: VOX.TEAL,
              paddingTop: height * 0.016,
              paddingBottom: height * 0.016,
              paddingLeft: width * 0.022,
              paddingRight: width * 0.022,
              borderRadius: 3,
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* author name + handle */}
      <div
        style={{
          textAlign: 'center' as const,
          opacity: authorIn,
          transform: `translateY(${(1 - authorIn) * 8}px)`,
        }}
      >
        <div
          style={{
            fontFamily: FONT.display,
            fontSize: height * 0.038,
            fontWeight: 700,
            color: VOX.GOLD,
            letterSpacing: -0.5,
            marginBottom: height * 0.010,
          }}
        >
          {authorName}
        </div>
        <div
          style={{
            fontFamily: FONT.mono,
            fontSize: height * 0.026,
            color: VOX.CREAM,
            letterSpacing: 1,
            opacity: 0.60,
          }}
        >
          {handle}
        </div>
      </div>
    </AbsoluteFill>
  );
};
