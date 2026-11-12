import { getDictionary, type Lang } from '../ui';

export interface SocialLink {
  id: 'linkedin' | 'github' | 'malt' | 'strava';
  label: string;
  icon: string;
  url: string;
  /** Professional profiles go into JSON-LD `sameAs`; hobby ones do not. */
  professional: boolean;
}

export interface Profile {
  name: string;
  givenName: string;
  familyName: string;
  role: string;
  title: string;
  description: string;
  intro: string;
  location: { city: string; region: string; country: string; label: string };
  /**
   * Optional public contact e-mail. Leave empty to only show LinkedIn and Malt
   * as contact channels (the address would otherwise be visible to scrapers).
   */
  email: string;
  socialLinks: SocialLink[];
}

const SOCIAL_LINKS: Omit<SocialLink, 'label'>[] = [
  {
    id: 'linkedin',
    icon: 'fa6-brands:linkedin-in',
    url: 'https://www.linkedin.com/in/guillaume-crespel',
    professional: true,
  },
  {
    id: 'github',
    icon: 'fa6-brands:github',
    url: 'https://github.com/guillaumecrespel',
    professional: true,
  },
  {
    id: 'malt',
    icon: 'malt',
    url: 'https://www.malt.fr/profile/guillaumecrespel',
    professional: true,
  },
  {
    id: 'strava',
    icon: 'fa6-brands:strava',
    url: 'https://www.strava.com/athletes/12685779',
    professional: false,
  },
];

export function getProfile(lang: Lang): Profile {
  const ui = getDictionary(lang);

  return {
    name: ui.profile.name,
    givenName: 'Guillaume',
    familyName: 'Crespel',
    role: ui.profile.role,
    title: ui.profile.title,
    description: ui.profile.description,
    intro: ui.profile.intro,
    location: {
      city: 'Nantes',
      region: 'Pays de la Loire',
      country: 'FR',
      label: ui.profile.location,
    },
    email: '',
    socialLinks: SOCIAL_LINKS.map((link) => ({
      ...link,
      label: ui.social[link.id],
    })),
  };
}

export function getSocialLink(profile: Profile, id: SocialLink['id']) {
  return profile.socialLinks.find((link) => link.id === id);
}
