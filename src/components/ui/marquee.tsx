import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
}

export default function Marquee({
  children,
  className = '',
  direction = 'left',
}: MarqueeProps) {
  const isReverse = direction === 'right';

  return (
    <div
      className={cn('relative flex w-full overflow-x-hidden group', className)}
    >
      <div
        className={cn(
          'flex whitespace-nowrap group-hover:pause',
          isReverse ? 'animate-marquee-reverse' : 'animate-marquee',
        )}
      >
        {children}
      </div>

      <div
        className={cn(
          'absolute top-0 flex whitespace-nowrap group-hover:pause',
          isReverse ? 'animate-marquee2-reverse' : 'animate-marquee2',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
