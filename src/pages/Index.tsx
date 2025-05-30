import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import MetricsCards from '../components/Dashboard/MetricsCards';
import BarChartWidget from '../components/Dashboard/BarChartWidget';
import TotalProductsWidget from '../components/Dashboard/TotalProductsWidget';
import LineChartWidget from '../components/Dashboard/LineChartWidget';
import ScoreWidget from '../components/Dashboard/ScoreWidget';

/**
 * WeeklyStatusPage serves as the main page for the Weekly Status Dashboard.
 * It utilizes MainAppLayout for the overall page structure including the header,
 * and arranges various dashboard widgets such as MetricsCards, BarChartWidget,
 * TotalProductsWidget, LineChartWidget, and ScoreWidget in a responsive grid layout.
 */
const WeeklyStatusPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* MetricsCards displayed at the top, taking full width */}
      <MetricsCards />

      {/* 
        A responsive grid for BarChart, TotalProducts, and LineChart widgets.
        On medium screens and above (md), it's a 2-column grid.
        BarChartWidget and TotalProductsWidget take one column each.
        LineChartWidget spans two columns.
        On smaller screens, all widgets stack in a single column.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BarChartWidget />
        <TotalProductsWidget />
        {/* LineChartWidget internally handles its col-span for responsiveness based on screen size */}
        {/* It's configured in its own component to be md:col-span-2 */}
        <LineChartWidget className="md:col-span-2" />
      </div>

      {/* ScoreWidget displayed below the grid, taking full width */}
      <ScoreWidget />
    </MainAppLayout>
  );
};

export default WeeklyStatusPage;
