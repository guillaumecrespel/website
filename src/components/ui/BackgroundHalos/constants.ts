import type { HaloCssPosition } from './types';

export const HALO_POSITIONS: HaloCssPosition[] = [
  {
    style: { top: '50%', left: 0, transform: 'translate(-50%, -50%)' },
    key: 'middle-left',
  },
  {
    style: { top: 0, right: 0, transform: 'translate(50%, -50%)' },
    key: 'top-right',
  },
  {
    style: { bottom: 0, right: 0, transform: 'translate(50%, 50%)' },
    key: 'bottom-right',
  },
];
