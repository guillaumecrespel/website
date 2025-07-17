import { to as interpolate, useSpring } from '@react-spring/web';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { pickColor, randomBetween } from './utils';

// Linear interpolation between two hexadecimal colors
function lerpColor(a: string, b: string, t: number): string {
  const ah = a.replace('#', '');
  const bh = b.replace('#', '');
  const ar = parseInt(ah.substring(0, 2), 16);
  const ag = parseInt(ah.substring(2, 4), 16);
  const ab = parseInt(ah.substring(4, 6), 16);
  const br = parseInt(bh.substring(0, 2), 16);
  const bg = parseInt(bh.substring(2, 4), 16);
  const bb = parseInt(bh.substring(4, 6), 16);
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `#${rr.toString(16).padStart(2, '0')}${rg.toString(16).padStart(2, '0')}${rb.toString(16).padStart(2, '0')}`;
}

export function useGradientTransition(
  palette: string[],
  disableAnimation: boolean,
  initialIndex: number = 0
) {
  const [currentColor, setCurrentColor] = useState(palette[initialIndex % palette.length]);
  const [nextColor, setNextColor] = useState(palette[(initialIndex + 1) % palette.length]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Memoize palette to avoid re-renders
  const stablePalette = useMemo(() => palette, [palette]);

  const spring = useSpring({
    progress: isTransitioning ? 1 : 0,
    config: { duration: 3000 },
    onRest: () => {
      if (isTransitioning) {
        setCurrentColor(nextColor);
        setIsTransitioning(false);
      }
    },
  });

  // Callback to start transition
  const startTransition = useCallback(() => {
    const newNextColor = pickColor(currentColor, stablePalette);
    setNextColor(newNextColor);
    setIsTransitioning(true);
  }, [currentColor, stablePalette]);

  useEffect(() => {
    if (disableAnimation) return;
    
    const timeout = setTimeout(() => {
      startTransition();
    }, isTransitioning ? 3000 : randomBetween(5000, 10000));
    
    return () => clearTimeout(timeout);
  }, [isTransitioning, startTransition, disableAnimation]);

  // Memoize gradient to avoid recalculations
  const gradient = useMemo(() => {
    return interpolate([spring.progress], (p) => {
      if (!isTransitioning) {
        // Stable state: simple color
        return `radial-gradient(circle, ${currentColor} 0%, transparent 70%)`;
      } else {
        // Complex transition with color interpolation
        const interpolatedColor = lerpColor(currentColor, nextColor, p);
        return `radial-gradient(circle, ${interpolatedColor} 0%, transparent 70%)`;
      }
    });
  }, [spring.progress, currentColor, nextColor, isTransitioning]);

  return { gradient };
} 