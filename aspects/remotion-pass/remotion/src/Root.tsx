import React from 'react';
import { Composition } from 'remotion';
import { BarChart, barChartSchema } from './scenes/BarChart';
import { OutroSeries, outroSeriesSchema } from './scenes/OutroSeries';
import { OutroCTA, outroCtaSchema } from './scenes/OutroCTA';
import { SlateCard, slateCardSchema } from './scenes/SlateCard';

// Each vox scene is one Composition. width/height/fps mirror the vox 16:9 master
// (the compiler retimes the rendered clip to the beat's actual_duration_s, so
// durationInFrames here is just a sensible authoring default).
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
            { label: 'Predicted', value: 200 },
            { label: 'Paid yr1', value: 188 },
            { label: 'Paid yr2', value: 176 },
            { label: 'Paid yr3', value: 170 },
          ],
        }}
      />
      <Composition
        id="OutroSeries"
        component={OutroSeries}
        durationInFrames={180}
        fps={30}
        width={1280}
        height={720}
        schema={outroSeriesSchema}
        defaultProps={{
          seriesTitle: 'The Reallocation Engine',
          tagline: 'An evidence-first job search system for international students.',
          githubSlug: 'the-reallocation-engine',
        }}
      />
      <Composition
        id="OutroCTA"
        component={OutroCTA}
        durationInFrames={150}
        fps={30}
        width={1280}
        height={720}
        schema={outroCtaSchema}
        defaultProps={{
          authorName: 'Nik Bear Brown',
          handle: '@NikBearBrown',
          ctaText: 'Like and subscribe for more.',
        }}
      />
      <Composition
        id="SlateCard"
        component={SlateCard}
        durationInFrames={180}
        fps={30}
        width={1280}
        height={720}
        schema={slateCardSchema}
        defaultProps={{
          headline: 'Two job postings. Same employer. Same title.',
          eyebrow: 'COLD OPEN',
          topic: 'THE REALLOCATION ENGINE',
        }}
      />
    </>
  );
};
