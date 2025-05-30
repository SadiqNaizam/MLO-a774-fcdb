import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface HeaderProps {
  className?: string;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({
  className,
  title = "WEEKLY STATUS DASHBOARD" as const,
}) => {
  const startDate = "06/19/2024" as const;
  const endDate = "06/25/2024" as const;

  return (
    <header
      className={cn(
        'flex items-center justify-between px-6 h-16 bg-card text-card-foreground',
        // Per layout requirements: header.layout specifies 'bg-surface', 'h-16', 'px-6'.
        // 'bg-card' is used as 'surface' is aliased to 'card' background in the dark theme CSS variables.
        className
      )}
    >
      <h1 className="text-xl font-semibold tracking-wider text-foreground">
        {title}
      </h1>
      <div className="flex items-center space-x-2 text-sm">
        <span className="text-muted-foreground">ENTER START DATE</span>
        <ArrowRight className="h-4 w-4 text-muted-foreground" />
        <span className="font-medium text-foreground">{startDate}</span>
        <span className="text-muted-foreground ml-4">THROUGH</span>
        <span className="font-medium text-foreground ml-2">{endDate}</span>
      </div>
    </header>
  );
};

export default Header;
