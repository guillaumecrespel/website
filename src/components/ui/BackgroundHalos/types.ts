import type { SpringValue } from "@react-spring/web";

export interface HaloCssPosition {
  style: React.CSSProperties;
  key: string;
}

export interface HaloConfig {
  colors: string[];
  blur: string;
  opacity: number;
  durationMin: number;
  durationMax: number;
  sizeMinPercent: number;
  sizeMaxPercent: number;
  zIndex: number;
}

export interface BackgroundHalosProps {
  className?: string;
  breathingEnabled?: boolean;
  gradientEnabled?: boolean;
}

export interface HaloState {
  size: number;
  color: string;
}

export interface HaloSpring {
  color: SpringValue<string>;
  size: SpringValue<number>;
}