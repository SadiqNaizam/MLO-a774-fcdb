import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn('flex flex-col h-screen bg-background text-foreground', className)}>
      <Header />
      <main
        className={cn(
          'flex-1 min-w-0 overflow-y-auto', // From layoutRequirements.overall.sizing.mainContent
          'bg-background px-6 py-4 flex flex-col gap-6' // From layoutRequirements.mainContent.layout
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
