import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area
} from 'recharts';

interface LineChartWidgetProps {
  className?: string;
}

interface TrafficDataPoint {
  date: string;
  visits: number;
  pageViews: number;
}

const websiteTrafficData: TrafficDataPoint[] = [
  { date: '06/19', visits: 65, pageViews: 18 },
  { date: '06/20', visits: 110, pageViews: 55 },
  { date: '06/21', visits: 40, pageViews: 18 },
  { date: '06/22', visits: 125, pageViews: 50 },
  { date: '06/23', visits: 80, pageViews: 35 },
  { date: '06/24', visits: 50, pageViews: 15 },
  { date: '06/25', visits: 120, pageViews: 30 },
];

const LineChartWidget: React.FC<LineChartWidgetProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground shadow-lg col-span-1 md:col-span-2', className)}>
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground">WEBSITE TRAFFIC</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <RechartsLineChart data={websiteTrafficData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorVisitsFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--card-foreground))" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="hsl(var(--card-foreground))" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
            <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={{stroke: 'hsl(var(--border))'}} />
            <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 150]} tickLine={false} axisLine={false} />
            <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 60]} tickLine={false} axisLine={false}/>
            <Tooltip 
              cursor={{ stroke: 'hsl(var(--primary))', strokeDasharray: '3 3'}}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="plainline" wrapperStyle={{fontSize: "12px", color: "hsl(var(--muted-foreground))"}}/>
            <Area 
              yAxisId="left"
              type="monotone"
              dataKey="visits"
              stroke="hsl(var(--primary))"
              fillOpacity={1}
              fill="url(#colorVisitsFill)" 
              strokeWidth={2} 
              name="Website Visits"
              dot={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="pageViews"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              name="Website Page Views"
              dot={false}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartWidget;
