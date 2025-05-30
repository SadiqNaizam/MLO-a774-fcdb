import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Boxes } from 'lucide-react';

interface TotalProductsWidgetProps {
  className?: string;
}

const totalProductsData = {
  count: 364,
  dateRange: '06/19/2024 - 06/25/2024' as const,
};

const TotalProductsWidget: React.FC<TotalProductsWidgetProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground shadow-lg flex flex-col', className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-foreground">TOTAL PRODUCTS SOLD</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center flex-grow pt-4">
        <div className="text-6xl font-bold text-primary mb-4">
          {totalProductsData.count}
        </div>
        <Boxes className="h-16 w-16 text-primary mb-3" strokeWidth={1.5} />
        <p className="text-xs text-muted-foreground">
          {totalProductsData.dateRange}
        </p>
      </CardContent>
    </Card>
  );
};

export default TotalProductsWidget;
