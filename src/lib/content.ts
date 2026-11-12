import {
  getTechnologyLevel,
  getTechnologyTotalDuration,
  type TechnologyLevel,
} from '@/i18n/data/experiences/technology-mapping';
import {
  countCompanies,
  getCurrentMissions,
  getExperiences,
  yearsOfExperience,
} from '@/i18n/data/experiences/utils';
import { getOffers } from '@/i18n/data/offers';
import { getProductSkills } from '@/i18n/data/product-skills';
import { getProfile } from '@/i18n/data/profile';
import { getSaaS } from '@/i18n/data/saas';
import { EXPERIENCE_SECTORS, listSectors } from '@/i18n/data/sectors';
import { getSoftSkills } from '@/i18n/data/soft-skills';
import { getTechnologies, type Technology } from '@/i18n/data/technologies';
import { getDictionary, type Lang } from '@/i18n/ui';

export interface RankedTechnology extends Technology {
  months: number;
  level: TechnologyLevel;
}

const LEVEL_ORDER: Record<TechnologyLevel, number> = {
  expert: 4,
  senior: 3,
  intermediate: 2,
  beginner: 1,
  learning: 0,
};

/**
 * Everything a page needs, computed once from the i18n data so the home page,
 * the CV, the PDF and llms.txt always tell the same story.
 */
export function getSiteContent(lang: Lang) {
  const profile = getProfile(lang);
  const experiences = getExperiences(lang);
  const saas = getSaaS(lang);
  const technologies = getTechnologies(lang);
  const sectors = listSectors(lang, [
    ...experiences.map((exp) => EXPERIENCE_SECTORS[exp.id]),
    ...saas.saas.map((product) => product.sector),
  ]);

  const rankedTechnologies: RankedTechnology[] = technologies.technologies
    .map((technology) => {
      const months = getTechnologyTotalDuration(technology.id, experiences);
      return { ...technology, months, level: getTechnologyLevel(months) };
    })
    .sort(
      (a, b) =>
        LEVEL_ORDER[b.level] - LEVEL_ORDER[a.level] ||
        b.months - a.months ||
        a.name.localeCompare(b.name),
    );

  return {
    lang,
    ui: getDictionary(lang),
    profile,
    experiences,
    currentMissions: getCurrentMissions(experiences),
    productSkills: getProductSkills(lang),
    softSkills: getSoftSkills(lang),
    offers: getOffers(lang),
    saas,
    technologies,
    rankedTechnologies,
    sectors,
    stats: {
      years: yearsOfExperience(experiences),
      companies: countCompanies(experiences),
      products: saas.saas.length,
      sectors: sectors.length,
    },
  };
}

export type SiteContent = ReturnType<typeof getSiteContent>;

/** Topics for JSON-LD `knowsAbout`, beyond the technology list. */
export function expertiseTopics(lang: Lang): string[] {
  return lang === 'fr'
    ? [
        'Direction technique (CTO)',
        'Stratégie produit',
        'Architecture logicielle',
        'Architecture hexagonale',
        'Domain-Driven Design',
        'Développement full-stack',
        'IA générative',
        'Lean Startup',
        "Recrutement et management d'équipes tech",
      ]
    : [
        'Technical leadership (CTO)',
        'Product strategy',
        'Software architecture',
        'Hexagonal architecture',
        'Domain-Driven Design',
        'Full-stack development',
        'Generative AI',
        'Lean Startup',
        'Hiring and managing tech teams',
      ];
}

/** Build date, used for `dateModified` and the CV footer. */
export const BUILD_DATE = new Date();
