export type Locale = 'fr' | 'en';

export interface UIDictionary {
  profile: {
    name: string;
    title: string;
    description: string;
  };
  social: {
    linkedin: string;
    github: string;
    malt: string;
    strava: string;
  };
  softSkills: {
    title: string;
    pragmatism: {
      name: string;
      description: string;
    };
    prioritization: {
      name: string;
      description: string;
    };
    leadership: {
      name: string;
      description: string;
    };
  };
  productSkills: {
    title: string;
    scalability: {
      name: string;
      description: string;
    };
    business: {
      name: string;
      description: string;
    };
    vision: {
      name: string;
      description: string;
    };
  };
  technologies: {
    title: string;
  };
}

export interface TechnologyDictionary {
  [key: string]: {
    name: string;
    description: string;
  };
}

/**
 * Get UI dictionary for the current locale
 */
export async function getUIDictionary(locale: Locale): Promise<UIDictionary> {
  const ui = await import(`../locales/${locale}/ui.json`);
  return ui.default;
}

/**
 * Get technology dictionary for the current locale
 */
export async function getTechnologyDictionary(locale: Locale): Promise<TechnologyDictionary> {
  const technologies = await import(`../locales/${locale}/technologies.json`);
  return technologies.default;
}

/**
 * Get the current locale from Astro
 */
export function getCurrentLocale(): Locale {
  // @ts-ignore - Astro global is available at runtime
  return (Astro?.currentLocale as Locale) || 'fr';
}

/**
 * Get the preferred locale from browser
 */
export function getPreferredLocale(): Locale | undefined {
  // @ts-ignore - Astro global is available at runtime
  return Astro?.preferredLocale as Locale | undefined;
}

/**
 * Get all preferred locales from browser
 */
export function getPreferredLocaleList(): Locale[] {
  // @ts-ignore - Astro global is available at runtime
  return (Astro?.preferredLocaleList as Locale[]) || [];
} 