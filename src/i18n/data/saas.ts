import { getDictionary, type Lang } from '../ui';
import type { SectorId } from './sectors';

export type SaaSId = 'kojimo' | 'brikia' | 'qrakun' | 'moovi' | 'wagle' | 'woof';

export interface SaaS {
  id: SaaSId;
  name: string;
  description: string;
  url: string;
  icon: string;
  /**
   * `logo`: single-colour brand SVG recoloured with fgColor;
   * `color`: full-colour brand SVG used as-is (may carry its own background);
   * `glyph`: stroke icon used as-is.
   */
  iconKind: 'logo' | 'color' | 'glyph';
  bgColor: string;
  fgColor: string;
  /** Highlighter colour under the product name. */
  accent: string;
  sector: SectorId | null;
  /** schema.org applicationCategory. */
  category: 'BusinessApplication' | 'DeveloperApplication' | 'HealthApplication';
  status?: 'alpha' | 'beta';
}

export interface SaaSList {
  title: string;
  saas: SaaS[];
}

/** Unirakun: the brand that builds, hosts and runs the apps (legal entity: Meta Rakun). */
export const UNIRAKUN_URL = 'https://unirakun.fr';

const PRODUCTS: Omit<SaaS, 'name' | 'description'>[] = [
  {
    id: 'kojimo',
    url: 'https://kojimo.fr',
    icon: 'kojimo',
    iconKind: 'logo',
    bgColor: '#ffffff',
    fgColor: '#ffffff',
    accent: 'var(--sky)',
    sector: 'realEstate',
    category: 'BusinessApplication',
  },
  {
    id: 'brikia',
    url: 'https://brikia.app',
    icon: 'brikia',
    iconKind: 'logo',
    bgColor: '#C8553D',
    fgColor: '#ffffff',
    accent: '#C8553D',
    sector: 'construction',
    category: 'BusinessApplication',
  },
  {
    id: 'qrakun',
    url: 'https://qr.rakun.sh',
    icon: 'qrakun',
    iconKind: 'logo',
    bgColor: '#FFFFFF',
    fgColor: '#000000',
    accent: 'var(--yellow)',
    sector: null,
    category: 'BusinessApplication',
  },
  {
    id: 'moovi',
    url: 'https://moovi.run',
    icon: 'moovi',
    iconKind: 'color',
    bgColor: '#0a0a0a',
    fgColor: '#fafafa',
    accent: 'var(--main)',
    sector: 'sport',
    category: 'HealthApplication',
    status: 'beta',
  },
  {
    id: 'wagle',
    url: 'https://wagle.sh',
    icon: 'wagle',
    iconKind: 'color',
    bgColor: '#ffffff',
    fgColor: '#f2a93b',
    accent: 'var(--violet)',
    sector: null,
    category: 'DeveloperApplication',
  },
  {
    id: 'woof',
    url: 'https://woof-board.sh',
    // Same mark and colours as the woof-board.sh header (light theme).
    icon: 'lucide:paw-print',
    iconKind: 'glyph',
    bgColor: '#f2f4f1',
    fgColor: '#27302b',
    accent: 'var(--pink)',
    sector: null,
    category: 'DeveloperApplication',
    status: 'alpha',
  },
];

export function getSaaS(lang: Lang): SaaSList {
  const ui = getDictionary(lang).saas;

  return {
    title: ui.title,
    saas: PRODUCTS.map((product) => ({
      ...product,
      name: ui[product.id].name,
      description: ui[product.id].description,
    })),
  };
}
