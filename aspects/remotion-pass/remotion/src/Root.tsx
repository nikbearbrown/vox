import React from 'react';
import { Composition } from 'remotion';
import { BarChart, barChartSchema } from './scenes/BarChart';

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
    </>
  );
};
