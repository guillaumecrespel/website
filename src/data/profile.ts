import type { Locale } from '@/lib/i18n';
import { getUIDictionary } from '@/lib/i18n';

export interface Profile {
  avatar: string;
  name: string;
  title: string;
  description: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

/**
 * Get profile data for the current locale
 */
export async function getProfile(locale: Locale): Promise<Profile> {
  const ui = await getUIDictionary(locale);
  
  return {
    avatar: '/images/profile.jpg',
    name: ui.profile.name,
    title: ui.profile.title,
    description: ui.profile.description,
    socialLinks: [
      {
        label: ui.social.linkedin,
        icon: 'fa6-brands:linkedin-in',
        url: 'https://www.linkedin.com/in/guillaume-crespel',
      },
      {
        label: ui.social.github,
        icon: 'fa6-brands:github',
        url: 'https://github.com/guillaumecrespel',
      },
      {
        label: ui.social.malt,
        icon: 'malt',
        url: 'https://www.malt.fr/profile/guillaumecrespel',
      },
      {
        label: ui.social.strava,
        icon: 'fa6-brands:strava',
        url: 'https://www.strava.com/athletes/12685779',
      },
    ],
  };
}
