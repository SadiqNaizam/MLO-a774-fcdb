import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MetricCardData {
  id: string;
  title: string;
  value: string;
  description?: string;
}

const metricsData: MetricCardData[] = [
  {
    id: 'revenue',
    title: 'REVENUE',
    value: '$92,463',
  },
  {
    id: 'production',
    title: 'PRODUCTION OUTPUT',
    value: '315',
  },
  {
    id: 'satisfaction',
    title: 'CUSTOMER SATISFACTION SCORE',
    value: '91%',
  },
  {
    id: 'attendance',
    title: 'EMPLOYEE ATTENDANCE',
    value: '96%',
  },
];

interface MetricsCardsProps {
  className?: string;
}

const MetricsCards: React.FC<MetricsCardsProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {metricsData.map((metric) => (
        <Card key={metric.id} className="bg-card text-card-foreground shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-foreground">
              {metric.value}
            </div>
            {metric.description && (
              <p className="text-xs text-muted-foreground pt-1">
                {metric.description}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MetricsCards;
