import { getDictionary, type Lang } from '../ui';

export interface Offer {
  id: 'interim' | 'build' | 'architecture' | 'mentoring';
  name: string;
  description: string;
  icon: string;
  /** Experience ids that back this offer with a real mission. */
  references: string[];
}

const OFFERS = [
  {
    id: 'interim',
    icon: 'lucide:compass',
    references: ['cockpit-agriculture-interim-cto', 'uni-rakun-co-founder-developer'],
  },
  {
    id: 'build',
    icon: 'lucide:rocket',
    references: [
      'uni-rakun-co-founder-developer',
      'metroscope-consultant-architecture',
      'cmc-contentflow-lead-full-stack',
    ],
  },
  {
    id: 'architecture',
    icon: 'lucide:blocks',
    references: [
      'decathlon-senior-frontend-developer',
      'societe-generale-full-stack-developer',
      'santeclair-lead-frontend-developer',
    ],
  },
  {
    id: 'mentoring',
    icon: 'lucide:graduation-cap',
    references: ['darva-nodejs-trainer', 'metroscope-frontend-developer'],
  },
] as const;

export function getOffers(lang: Lang): { title: string; lead: string; offers: Offer[] } {
  const ui = getDictionary(lang).offers;
  return {
    title: ui.title,
    lead: ui.lead,
    offers: OFFERS.map((offer) => ({
      ...offer,
      references: [...offer.references],
      name: ui[offer.id].name,
      description: ui[offer.id].description,
    })),
  };
}
