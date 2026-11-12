import type { Lang } from '@/i18n/ui';

export const SITE_URL = 'https://guillaumecrespel.fr';

export const LOCALES: Record<Lang, { bcp47: string; og: string; label: string }> = {
  fr: { bcp47: 'fr-FR', og: 'fr_FR', label: 'Français' },
  en: { bcp47: 'en-US', og: 'en_US', label: 'English' },
};

/** Absolute URL on the production domain. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

export function homePath(lang: Lang): string {
  return `/${lang}/`;
}

export function cvPath(lang: Lang): string {
  return `/${lang}/cv/`;
}

export function cvPdfPath(lang: Lang): string {
  return `/cv/guillaume_crespel_cv_${lang}.pdf`;
}

export function ogImagePath(lang: Lang): string {
  return `/og/guillaume-crespel-${lang}.png`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}
