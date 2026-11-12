import { getDictionary, type Lang } from '../ui';

export const SECTOR_IDS = [
  'agriculture',
  'retail',
  'finance',
  'insurance',
  'health',
  'public',
  'energy',
  'media',
  'logistics',
  'realEstate',
  'construction',
  'sport',
  'language',
] as const;

export type SectorId = (typeof SECTOR_IDS)[number];

/** Industry of each mission, keyed by experience id. */
export const EXPERIENCE_SECTORS: Record<string, SectorId | null> = {
  'acolad-full-stack-engineer': 'language',
  'kojimo-cpto': 'realEstate',
  'cockpit-agriculture-interim-cto': 'agriculture',
  'decathlon-senior-frontend-developer': 'retail',
  'societe-generale-full-stack-developer': 'finance',
  'darva-web-developer': 'insurance',
  'darva-nodejs-trainer': 'insurance',
  'santeclair-lead-frontend-developer': 'health',
  'ministere-sante-lead-full-stack': 'public',
  'metroscope-frontend-developer': 'energy',
  'metroscope-consultant-architecture': 'energy',
  'cmc-contentflow-lead-full-stack': 'media',
  'cgi-developer-ops': 'logistics',
  // uni rakun is a studio: its sectors come from the SaaS it ships.
  'uni-rakun-co-founder-developer': null,
};

export function getSectorLabel(lang: Lang, id: SectorId): string {
  return getDictionary(lang).sectors[id];
}

/** Ordered, de-duplicated list of sectors covered by the given ids. */
export function listSectors(
  lang: Lang,
  ids: (SectorId | null | undefined)[],
): { id: SectorId; label: string }[] {
  const present = new Set(ids.filter((id): id is SectorId => Boolean(id)));
  return SECTOR_IDS.filter((id) => present.has(id)).map((id) => ({
    id,
    label: getSectorLabel(lang, id),
  }));
}
