import type { Lang } from '../../ui';
import { experiences as en } from './en';
import { experiences as fr } from './fr';
import type { Experience, ExperienceCollection } from './types';

const COLLECTIONS: Record<Lang, ExperienceCollection> = { fr, en };

/** Build-time reference date: durations of ongoing missions grow with each build. */
const NOW = new Date();

/** Months since year 0, so ranges can be compared and merged. */
function monthIndex(date: Date): number {
  return date.getUTCFullYear() * 12 + date.getUTCMonth();
}

function parseDate(iso: string): Date {
  return new Date(`${iso.slice(0, 10)}T00:00:00Z`);
}

export function isOngoing(experience: Experience): boolean {
  return experience.endDate === null;
}

/** Inclusive month range covered by a mission (LinkedIn convention). */
export function monthRange(experience: Experience): [number, number] {
  const start = monthIndex(parseDate(experience.startDate));
  const end = experience.endDate ? monthIndex(parseDate(experience.endDate)) : monthIndex(NOW);
  return [start, Math.max(start, end)];
}

export function durationInMonths(experience: Experience): number {
  const [start, end] = monthRange(experience);
  return end - start + 1;
}

/** Number of distinct months covered by several missions (overlaps counted once). */
export function coveredMonths(experiences: Experience[]): number {
  const months = new Set<number>();
  for (const experience of experiences) {
    const [start, end] = monthRange(experience);
    for (let m = start; m <= end; m++) months.add(m);
  }
  return months.size;
}

/** Ongoing missions first, then most recent start date first. */
export function sortExperiences(experiences: Experience[]): Experience[] {
  return [...experiences].sort((a, b) => {
    if (isOngoing(a) !== isOngoing(b)) return isOngoing(a) ? -1 : 1;
    return parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime();
  });
}

export function getExperiences(lang: Lang): ExperienceCollection {
  return sortExperiences(COLLECTIONS[lang] ?? COLLECTIONS.fr);
}

/** Kept for backwards compatibility with older call sites. */
export async function loadExperiences(lang: Lang): Promise<ExperienceCollection> {
  return getExperiences(lang);
}

export function filterByTags(experiences: Experience[], tags: string[]): Experience[] {
  if (!tags.length) return experiences;
  const needles = tags.map((tag) => tag.toLowerCase());
  return experiences.filter((experience) =>
    experience.tags.some((tag) => {
      const value = tag.toLowerCase();
      return needles.some((needle) => value.includes(needle));
    }),
  );
}

export function formatMonth(lang: Lang, iso: string): string {
  return new Intl.DateTimeFormat(lang, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parseDate(iso));
}

export function formatDuration(lang: Lang, months: number): string {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const unit = (value: number, kind: 'year' | 'month') =>
    new Intl.NumberFormat(lang, {
      style: 'unit',
      unit: kind,
      unitDisplay: 'long',
    }).format(value);
  if (years === 0) return unit(rest, 'month');
  if (rest === 0) return unit(years, 'year');
  return `${unit(years, 'year')} ${unit(rest, 'month')}`;
}

export function formatPeriod(lang: Lang, experience: Experience, presentLabel: string): string {
  const start = formatMonth(lang, experience.startDate);
  const end = experience.endDate ? formatMonth(lang, experience.endDate) : presentLabel;
  return start === end ? start : `${start} – ${end}`;
}

/** Whole years since the first mission started. */
export function yearsOfExperience(experiences: Experience[]): number {
  const first = Math.min(...experiences.map((exp) => monthRange(exp)[0]));
  return Math.floor((monthIndex(NOW) - first) / 12);
}

/** Distinct client companies (own ventures such as uni rakun or Kojimo are not clients). */
export function countCompanies(experiences: Experience[]): number {
  return new Set(
    experiences
      .filter((exp) => exp.workType !== 'Indépendant')
      .map((exp) => exp.company.name.toLowerCase()),
  ).size;
}

export function getCurrentMissions(experiences: Experience[]): Experience[] {
  return experiences.filter(isOngoing);
}

/** City part of a location label, e.g. "Nantes" from "Nantes region, France". */
export function cityOf(location: string): string {
  return location
    .split(',')[0]
    .replace(/^(Région de|Region de)\s+/i, '')
    .replace(/\s+(region|area)$/i, '')
    .trim();
}
