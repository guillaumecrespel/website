import en from './locales/en/ui.json';
import fr from './locales/fr/ui.json';

export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export const defaultLang = 'fr' as const;

export type Lang = keyof typeof languages;

export const LANGS = Object.keys(languages) as Lang[];

export type UIDictionary = typeof fr;

const dictionaries: Record<Lang, UIDictionary> = { fr, en };

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && value in languages;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  return isLang(lang) ? lang : defaultLang;
}

/** Full, typed dictionary for a language (for lists such as FAQ items). */
export function getDictionary(lang: Lang): UIDictionary {
  return dictionaries[lang];
}

type Vars = Record<string, string | number>;

function lookup(lang: Lang, key: string): unknown {
  let value: unknown = dictionaries[lang];
  for (const part of key.split('.')) {
    if (value && typeof value === 'object' && part in value) {
      value = (value as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return value;
}

/**
 * Returns a translator for a language. Keys use dot notation
 * (`nav.contact`) and `{name}` placeholders are interpolated.
 * Missing keys fall back to French, then to the key itself.
 */
export function useTranslations(lang: Lang) {
  return function t(key: string, vars?: Vars): string {
    const raw = lookup(lang, key) ?? lookup(defaultLang, key) ?? key;
    const text = typeof raw === 'string' ? raw : key;
    if (!vars) return text;
    return text.replace(/\{(\w+)\}/g, (match, name: string) =>
      name in vars ? String(vars[name]) : match,
    );
  };
}
