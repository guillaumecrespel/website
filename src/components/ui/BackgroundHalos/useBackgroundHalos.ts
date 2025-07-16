import { useMemo } from 'react';
import { useGradientTransition } from './useGradientTransition';
import { getConfig } from './utils';

export function useBackgroundHalos(breathingEnabled: boolean, gradientEnabled: boolean) {
  const config = useMemo(() => getConfig(), []);
  
  // Generate unique random indices for starting colors
  const randomIndices = useMemo(() => {
    const indices = [];
    const availableIndices = [...Array(config.colors.length).keys()];
    
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * availableIndices.length);
      indices.push(availableIndices.splice(randomIndex, 1)[0]);
    }
    
    return indices;
  }, [config.colors.length]);
  
  // Hooks at top-level (required) - each halo with unique random starting color
  const gradient0 = useGradientTransition(config.colors, !gradientEnabled, randomIndices[0]);
  const gradient1 = useGradientTransition(config.colors, !gradientEnabled, randomIndices[1]);
  const gradient2 = useGradientTransition(config.colors, !gradientEnabled, randomIndices[2]);
  
  // Generate array with map
  const gradients = useMemo(() => [gradient0, gradient1, gradient2], [gradient0, gradient1, gradient2]);

  return {
    config,
    gradients,
    isAnimationEnabled: breathingEnabled || gradientEnabled,
  };
} 