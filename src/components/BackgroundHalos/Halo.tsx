import { animated } from '@react-spring/web';
import { memo, useMemo } from 'react';
import styles from './BackgroundHalos.module.css';
import type { useGradientTransition } from './useGradientTransition';
import type { getConfig } from './utils';

export const Halo = memo(({ 
  style, 
  gradient, 
  config, 
  disableAnimation,
  breathingEnabled = false
}: {
  style: React.CSSProperties;
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
    ...style,
    background: gradient.gradient,
    filter: `blur(${config.blur})`,
    opacity: config.opacity,
    zIndex: config.zIndex,
    // Force creation of new layer to avoid conflicts
    isolation: 'isolate' as const,
  }), [gradient.gradient, config.blur, config.opacity, config.zIndex, style]);

  return (
    <animated.div
      className={haloClass}
      style={haloStyle}
    />
  );
});

Halo.displayName = 'Halo'; 