'use client';

import { useMemo } from 'react';
import { HALO_POSITIONS } from './constants';
import { Halo } from './Halo';
import type { BackgroundHalosProps } from './types';
import { useBackgroundHalos } from './useBackgroundHalos';

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
      {HALO_POSITIONS.map((halo, i) => (
        <Halo
          key={halo.key}
          halo={halo}
          gradient={gradients[i]}
          config={config}
          disableAnimation={!isAnimationEnabled}
          breathingEnabled={breathingEnabled}
        />
      ))}
    </div>
  );
}
