export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export const defaultLang = 'fr' as const;

export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string) {
    return getTranslation(lang, key);
  }
}

function getTranslation(lang: Lang, key: string) {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Fallback to key if translation not found
    }
  }
  
  return value || key;
}

// Import translations dynamically
const translations = {
  fr: await import('./locales/fr/ui.json').then(m => m.default),
  en: await import('./locales/en/ui.json').then(m => m.default),
}; 