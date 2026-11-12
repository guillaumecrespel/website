import type { Experience } from '@/i18n/data/experiences/types';
import type { Profile } from '@/i18n/data/profile';
import { type SaaS, UNIRAKUN_URL } from '@/i18n/data/saas';
import type { Technology } from '@/i18n/data/technologies';
import type { Lang } from '@/i18n/ui';
import { absoluteUrl, LOCALES, SITE_URL } from './site';

/**
 * Schema.org graph helpers. Every page shares the same `Person` and `WebSite`
 * nodes (stable @id), so search and answer engines consolidate one entity.
 */

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const UNIRAKUN_ID = `${UNIRAKUN_URL}/#organization`;

type Node = Record<string, unknown>;

export function personNode(params: {
  lang: Lang;
  profile: Profile;
  imageUrl: string;
  currentMissions: Experience[];
  technologies: Technology[];
  knowsAbout: string[];
}): Node {
  const { lang, profile, imageUrl, currentMissions, technologies, knowsAbout } = params;
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: profile.name,
    givenName: profile.givenName,
    familyName: profile.familyName,
    jobTitle: profile.role,
    description: profile.description,
    url: absoluteUrl(`/${lang}/`),
    image: imageUrl,
    ...(profile.email ? { email: `mailto:${profile.email}` } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location.city,
      addressRegion: profile.location.region,
      addressCountry: profile.location.country,
    },
    sameAs: profile.socialLinks.filter((link) => link.professional).map((link) => link.url),
    knowsAbout: [...knowsAbout, ...technologies.map((tech) => tech.name)],
    hasOccupation: {
      '@type': 'Occupation',
      name: profile.role,
      occupationLocation: { '@type': 'City', name: profile.location.city },
      skills: knowsAbout.join(', '),
    },
    worksFor: currentMissions.map((mission) =>
      mission.id === 'uni-rakun-co-founder-developer'
        ? { '@id': UNIRAKUN_ID }
        : { '@type': 'Organization', name: mission.company.name },
    ),
  };
}

/** Unirakun: the company that builds, hosts and runs the apps. */
export function unirakunNode(products: SaaS[]): Node {
  return {
    '@type': 'Organization',
    '@id': UNIRAKUN_ID,
    name: 'Unirakun',
    alternateName: 'uni rakun',
    legalName: 'Meta Rakun',
    url: `${UNIRAKUN_URL}/`,
    founder: { '@id': PERSON_ID },
    owns: products.map((product) => ({ '@id': `${product.url}#app` })),
  };
}

export function websiteNode(profile: Profile): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: profile.name,
    inLanguage: Object.values(LOCALES).map((locale) => locale.bcp47),
    publisher: { '@id': PERSON_ID },
  };
}

export function profilePageNode(params: {
  lang: Lang;
  url: string;
  title: string;
  description: string;
  imageUrl: string;
  dateModified: string;
}): Node {
  return {
    '@type': 'ProfilePage',
    '@id': `${params.url}#page`,
    url: params.url,
    name: params.title,
    description: params.description,
    inLanguage: LOCALES[params.lang].bcp47,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': PERSON_ID },
    about: { '@id': PERSON_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: params.imageUrl },
    dateModified: params.dateModified,
  };
}

export function softwareNodes(products: SaaS[], lang: Lang): Node[] {
  return products.map((product) => ({
    '@type': 'SoftwareApplication',
    '@id': `${product.url}#app`,
    name: product.name,
    description: product.description,
    url: product.url,
    applicationCategory: product.category,
    operatingSystem: 'Web',
    inLanguage: LOCALES[lang].bcp47,
    author: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID },
    publisher: { '@id': UNIRAKUN_ID },
  }));
}

export function faqNode(items: { q: string; a: string }[], url: string): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function graph(nodes: Node[]): string {
  // Escape "<" so the JSON can never close the surrounding <script> tag.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(
    /</g,
    '\\u003c',
  );
}
