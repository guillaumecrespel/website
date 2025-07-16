import { animated } from '@react-spring/web';
import { memo, useMemo } from 'react';
import styles from './BackgroundHalos.module.css';
import type { HALO_POSITIONS } from './constants';
import type { useGradientTransition } from './useGradientTransition';
import type { getConfig } from './utils';

export const Halo = memo(({ 
  halo, 
  gradient, 
  config, 
  disableAnimation,
  breathingEnabled = false
}: {
  halo: typeof HALO_POSITIONS[0];
  gradient: ReturnType<typeof useGradientTransition>;
  config: ReturnType<typeof getConfig>;
  disableAnimation: boolean;
  breathingEnabled?: boolean;
}) => {
  const haloClass = useMemo(() => [
    'absolute',
    'rounded-full',
    'pointer-events-none',
    breathingEnabled ? styles['breathing-halo'] : '',
    disableAnimation ? styles['breathing-halo--disabled'] : '',
  ]
    .filter(Boolean)
    .join(' '), [disableAnimation, breathingEnabled]);

  const haloStyle = useMemo(() => ({
    ...halo.style,
    transformOrigin: 'center',
    width: '20vw',
    height: '20vh',
    background: gradient.gradient,
    filter: `blur(${config.blur})`,
    opacity: config.opacity,
    zIndex: config.zIndex,
    // Force creation of new layer to avoid conflicts
    isolation: 'isolate' as const,
  }), [halo.style, gradient.gradient, config.blur, config.opacity, config.zIndex]);

  return (
    <animated.div
      key={halo.key}
      className={haloClass}
      style={haloStyle}
    />
  );
});

Halo.displayName = 'Halo'; 