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
/**
 * Gets a CSS variable with fallback
 */
export function getCSSVariable(name: string, fallback: string = ""): string {
  if (typeof window === "undefined") return fallback;
  try {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return value || fallback;
  } catch {
    return fallback;
  }
}

/**
 * Generates a random number between min and max
 */
export function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Picks a color from the palette avoiding the excluded color
 */
export function pickColor(exclude: string, palette: string[]): string {
  if (palette.length === 0) return "#FFC700";
  let color: string;
  let tries = 0;
  do {
    color = palette[Math.floor(Math.random() * palette.length)];
    tries++;
  } while (color === exclude && tries < 10);
  return color;
}

/**
 * Gets configuration from CSS variables
 */
export function getConfig(): HaloConfig {
  return {
    colors: [
      getCSSVariable("--halo-color-1", "#FFC700"),
      getCSSVariable("--halo-color-2", "#6F61FE"),
      getCSSVariable("--halo-color-3", "#5EF1A5"),
      getCSSVariable("--halo-color-4", "#FCA3FF"),
      getCSSVariable("--halo-color-5", "#68D4FB"),
    ].filter(Boolean),
    blur: getCSSVariable("--halo-blur", "60px"),
    opacity: 1,
    durationMin: 1000,
    durationMax: 2000,
    sizeMinPercent: 50,
    sizeMaxPercent: 70,
    zIndex: -1,
  };
} 