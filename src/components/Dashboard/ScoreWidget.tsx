import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card'; // Only Card and CardContent needed for overall container
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis
} from 'recharts';

interface ScoreWidgetProps {
  className?: string;
}

interface ScoreData {
  id: string;
  label: string;
  value: number;
}

const scoresData: ScoreData[] = [
  { id: 'score1', label: 'SCORE #1', value: 85 },
  { id: 'score2', label: 'SCORE #2', value: 73 },
  { id: 'score3', label: 'SCORE #3', value: 92 },
  { id: 'score4', label: 'SCORE #4', value: 54 },
  { id: 'score5', label: 'SCORE #5', value: 75 },
];

const IndividualScoreCircle: React.FC<{ score: ScoreData }> = ({ score }) => {
  const chartData = [{ name: score.label, value: score.value }];
  return (
    <div className="flex flex-col items-center">
      <div style={{ width: 120, height: 120 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="65%"
            outerRadius="85%"
            barSize={12} // Thickness of the bar
            data={chartData}
            startAngle={90}
            endAngle={90 + (score.value / 100) * 360 * -1} // Dynamic end angle for clockwise fill starting from top
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
              axisLine={false}
            />
            <RadialBar
              background={{ fill: 'hsl(var(--card-foreground) / 0.15)' }} // Track color
              dataKey='value'
              cornerRadius={10} // Rounded ends
              fill="hsl(var(--primary))"
              angleAxisId={0}
            />
            {/* Custom label for center text */}
            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="text-2xl font-bold"
              style={{ fill: 'hsl(var(--primary))' }}
            >
              {score.value}
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{score.label}</p>
    </div>
  );
};

const ScoreWidget: React.FC<ScoreWidgetProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground shadow-lg', className)}>
      <CardContent className="p-6 flex flex-wrap justify-around items-center gap-4">
        {scoresData.map((score) => (
          <IndividualScoreCircle key={score.id} score={score} />
        ))}
      </CardContent>
    </Card>
  );
};

export default ScoreWidget;
