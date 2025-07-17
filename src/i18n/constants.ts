import type { Lang } from './ui';

/**
 * Constants for language management
 */
export const LANGUAGES = {
  FR: 'fr' as const,
  EN: 'en' as const,
} as const;

export const LANGUAGE_NAMES = {
  [LANGUAGES.FR]: 'Français',
  [LANGUAGES.EN]: 'English',
} as const;

export const LANGUAGE_ICONS = {
  [LANGUAGES.FR]: 'circle-flags:fr',
  [LANGUAGES.EN]: 'circle-flags:gb',
} as const;

/**
 * Get the opposite language
 */
export function getOppositeLanguage(lang: Lang): Lang {
  return lang === LANGUAGES.FR ? LANGUAGES.EN : LANGUAGES.FR;
}