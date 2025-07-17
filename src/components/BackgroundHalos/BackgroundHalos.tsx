'use client';

import { useMemo } from 'react';
import { HALO_POSITIONS } from './constants';
import { Halo } from './Halo';
import { useBackgroundHalos } from './useBackgroundHalos';

interface BackgroundHalosProps {
  className?: string;
  breathingEnabled?: boolean;
  gradientEnabled?: boolean;
}

export function BackgroundHalos({
  className = '',
  breathingEnabled = false,
  gradientEnabled = false,
}: BackgroundHalosProps) {
  const { config, gradients, isAnimationEnabled } = useBackgroundHalos(breathingEnabled, gradientEnabled);

  const containerStyle = useMemo(() => ({
    background: 'var(--halos-bg)',
    // Force creation of new layer to avoid conflicts
    isolation: 'isolate' as const,
  }), []);

  return (
    <div
      className={`fixed inset-0 w-screen h-screen overflow-hidden -z-10 ${className}`}
      aria-hidden="true"
      style={containerStyle}
    >
      {Object.entries(HALO_POSITIONS).map(([key, style], i) => (
        <Halo
          key={key}
          style={style}
          gradient={gradients[i]}
          config={config}
          disableAnimation={!isAnimationEnabled}
          breathingEnabled={breathingEnabled}
        />
      ))}
    </div>
  );
}
