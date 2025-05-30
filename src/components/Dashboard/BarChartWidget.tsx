import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid
} from 'recharts';

interface BarChartWidgetProps {
  className?: string;
}

interface RegionSalesData {
  name: string;
  sales: number;
}

const salesData: RegionSalesData[] = [
  { name: 'Region 1', sales: 70 },
  { name: 'Region 2', sales: 103 },
  { name: 'Region 3', sales: 116 },
  { name: 'Region 4', sales: 35 },
  { name: 'Region 5', sales: 40 },
].sort((a,b) => a.sales - b.sales); // Sort for better visual representation

const BarChartWidget: React.FC<BarChartWidgetProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground shadow-lg', className)}>
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground">PRODUCT SALES</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <RechartsBarChart data={salesData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" horizontal={false} />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis 
              type="category" 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12} 
              width={60}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={{ fill: 'hsl(var(--muted) / 0.3)' }}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))', 
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]}>
              <LabelList dataKey="sales" position="right" style={{ fill: 'hsl(var(--foreground))', fontSize: '12px' }} />
            </Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartWidget;
