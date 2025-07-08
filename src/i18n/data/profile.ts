import type { Lang } from '../ui.js';

export interface Profile {
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

const socialLinks = [
  {
    icon: 'fa6-brands:linkedin-in',
    url: 'https://www.linkedin.com/in/guillaume-crespel',
  },
  {
    icon: 'fa6-brands:github',
    url: 'https://github.com/guillaumecrespel',
  },
  {
    icon: 'malt',
    url: 'https://www.malt.fr/profile/guillaumecrespel',
  },
  {
    icon: 'fa6-brands:strava',
    url: 'https://www.strava.com/athletes/12685779',
  },
] as const;

export async function getProfile(lang: Lang): Promise<Profile> {
  const ui = await import(`../locales/${lang}/ui.json`).then(m => m.default);
  
  return {
    name: ui.profile.name,
    title: ui.profile.title,
    description: ui.profile.description,
    socialLinks: [
      {
        label: ui.social.linkedin,
        icon: socialLinks[0].icon,
        url: socialLinks[0].url,
      },
      {
        label: ui.social.github,
        icon: socialLinks[1].icon,
        url: socialLinks[1].url,
      },
      {
        label: ui.social.malt,
        icon: socialLinks[2].icon,
        url: socialLinks[2].url,
      },
      {
        label: ui.social.strava,
        icon: socialLinks[3].icon,
        url: socialLinks[3].url,
      },
    ],
  };
} 