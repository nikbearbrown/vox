import React from 'react';
import {Composition} from 'remotion';
import {BarChart, barChartSchema} from './scenes/BarChart';
import {OutroSeries, outroSeriesSchema} from './scenes/OutroSeries';
import {OutroCTA, outroCtaSchema} from './scenes/OutroCTA';
import {BrutalistTerminalOpen, brutalistTerminalOpenSchema} from './scenes/BrutalistTerminalOpen';
import {BrutalistCommentCTA, brutalistCommentCTASchema} from './scenes/BrutalistCommentCTA';
import {MedhavyTerminalAsk, medhavyTerminalAskSchema} from './scenes/MedhavyTerminalAsk';
import {MedhavyCodeBlock, medhavyCodeBlockSchema} from './scenes/MedhavyCodeBlock';
import {MedhavyOpen, medhavyOpenSchema} from './scenes/MedhavyOpen';
import {MedhavyOutro, medhavyOutroSchema} from './scenes/MedhavyOutro';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BarChart"
        component={BarChart}
        durationInFrames={180}
        fps={30}
        width={1280}
        height={720}
        schema={barChartSchema}
        defaultProps={{
          title: 'Your model called 200 loans "99% safe." Count the ones that paid:',
          unit: '',
          accentIndex: 3,
          data: [
            {label: 'Predicted', value: 200},
            {label: 'Paid yr1', value: 188},
            {label: 'Paid yr2', value: 176},
            {label: 'Paid yr3', value: 170},
          ],
        }}
      />
      <Composition
        id="OutroSeries"
        component={OutroSeries}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
        schema={outroSeriesSchema}
        defaultProps={{eyebrow: 'CLAUDE COWORK', line: 'Part of the Claude Cowork series.'}}
      />
      <Composition
        id="OutroCTA"
        component={OutroCTA}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
        schema={outroCtaSchema}
        defaultProps={{line: 'Like and subscribe for more.', handle: '@nikbearbrown'}}
      />
      <Composition
        id="BrutalistTerminalOpen"
        component={BrutalistTerminalOpen}
        durationInFrames={360}
        fps={30}
        width={1920}
        height={1080}
        schema={brutalistTerminalOpenSchema}
        defaultProps={{
          command: 'brutalist explainer-video "Why Cancer Cells Are Harder to Kill"',
          checklist: [
            '✓ palette   teardown  #FFFFFF/#2A1A0E/#C8102E',
            '✓ B00       BrutalistTerminalOpen',
            '✓ B99       BrutalistCommentCTA',
            '✓ voice     NikBearBrown',
            '✓ masters   16:9 + 9:16',
            '✓ factcheck FACTCHECK.md',
            '✓ layout    band-separation',
            '✓ gate      PASS',
          ],
          topic: 'CANCER BIOLOGY',
        }}
      />
      <Composition
        id="BrutalistCommentCTA"
        component={BrutalistCommentCTA}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        schema={brutalistCommentCTASchema}
        defaultProps={{
          filename: 'onda.ts',
          code: '// cancer-biology / apoptosis-resistance\n//\n// if this was useful, follow for more\n// @nikbearbrown  ·  brutalist.art\n',
          variant: 'A',
          topic: 'CANCER BIOLOGY',
        }}
      />
      <Composition
        id="MedhavyTerminalAsk"
        component={MedhavyTerminalAsk}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
        schema={medhavyTerminalAskSchema}
        defaultProps={{
          command: 'claude "write a Manim scene:\n  photoelectric effect, Na (Φ=2.28 eV)\n  photons 700 / 546 / 300 nm\n  eject e⁻ if hν > Φ;  speed ∝ √(hν−Φ)"',
          topic: 'CLAUDE CODE · MANIM',
          segment: 'PHOTOELECTRIC EFFECT',
          runningText: 'generating scene…',
        }}
      />
      <Composition
        id="MedhavyTerminalAsk916"
        component={MedhavyTerminalAsk}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
        schema={medhavyTerminalAskSchema}
        defaultProps={{
          command: 'claude "write a Manim scene:\n  photoelectric effect, Na (Φ=2.28 eV)\n  photons 700 / 546 / 300 nm\n  eject e⁻ if hν > Φ;  speed ∝ √(hν−Φ)"',
          topic: 'CLAUDE CODE · MANIM',
          segment: 'PHOTOELECTRIC EFFECT',
          runningText: 'generating scene…',
        }}
      />
      <Composition
        id="MedhavyCodeBlock"
        component={MedhavyCodeBlock}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
        schema={medhavyCodeBlockSchema}
        defaultProps={{
          filename: 'photoelectric.py',
          segment: 'PHOTOELECTRIC EFFECT',
          topic: 'CLAUDE CODE · MANIM',
          code: '# photoelectric.py  —  Claude Code output\nPHI = 2.28          # eV  sodium work function\n\nclass PhotoelectricScene(Scene):\n    def construct(self):\n        for lam in [700, 546, 300]:\n            E = 1240 / lam\n            K = max(0.0, E - PHI)  # ← the physics\n            if K > 0:\n                self.play(GrowArrow(Arrow(ORIGIN, UP*np.sqrt(K))))',
        }}
      />
      <Composition
        id="MedhavyCodeBlock916"
        component={MedhavyCodeBlock}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
        schema={medhavyCodeBlockSchema}
        defaultProps={{
          filename: 'photoelectric.py',
          segment: 'PHOTOELECTRIC EFFECT',
          topic: 'CLAUDE CODE · MANIM',
          code: '# photoelectric.py  —  Claude Code output\nPHI = 2.28          # eV  sodium work function\n\nclass PhotoelectricScene(Scene):\n    def construct(self):\n        for lam in [700, 546, 300]:\n            E = 1240 / lam\n            K = max(0.0, E - PHI)  # ← the physics\n            if K > 0:\n                self.play(GrowArrow(Arrow(ORIGIN, UP*np.sqrt(K))))',
        }}
      />
      <Composition
        id="MedhavyOpen"
        component={MedhavyOpen}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        schema={medhavyOpenSchema}
        defaultProps={{
          topic: 'MEDHAVY AI',
          lines: [
            'Medhavy AI',
            'Also known as Medhavi',
            'मेधावी (Medhavy): From Sanskrit, meaning',
            '"intelligent" or "intellectually brilliant"',
            '— the perfect name for our AI-powered',
            '  intelligent learning systems.',
          ],
        }}
      />
      <Composition
        id="MedhavyOpen916"
        component={MedhavyOpen}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
        schema={medhavyOpenSchema}
        defaultProps={{
          topic: 'MEDHAVY AI',
          lines: [
            'Medhavy AI',
            'Also known as Medhavi',
            'मेधावी (Medhavy): From Sanskrit, meaning',
            '"intelligent" or "intellectually brilliant"',
            '— the perfect name for our AI-powered',
            '  intelligent learning systems.',
          ],
        }}
      />
      <Composition
        id="MedhavyOutro"
        component={MedhavyOutro}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
        schema={medhavyOutroSchema}
        defaultProps={{
          brand: 'Medhavy',
          tagline: 'AI-powered intelligent learning systems',
          handle: '@MedhavyAI',
          url: 'medhavy.com',
        }}
      />
      <Composition
        id="MedhavyOutro916"
        component={MedhavyOutro}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
        schema={medhavyOutroSchema}
        defaultProps={{
          brand: 'Medhavy',
          tagline: 'AI-powered intelligent learning systems',
          handle: '@MedhavyAI',
          url: 'medhavy.com',
        }}
      />
    </>
  );
};
