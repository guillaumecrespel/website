import type { Locale } from '@/lib/i18n';
import { getUIDictionary } from '@/lib/i18n';

export interface SoftSkill {
  name: string;
  description: string;
  icon: string;
}

export interface SoftSkills {
  title: string;
  skills: SoftSkill[];
}

/**
 * Get soft skills data for the current locale
 */
export async function getSoftSkills(locale: Locale): Promise<SoftSkills> {
  const ui = await getUIDictionary(locale);
  
  return {
    title: ui.softSkills.title,
    skills: [
      {
        name: ui.softSkills.pragmatism.name,
        description: ui.softSkills.pragmatism.description,
        icon: 'shape1',
      },
      {
        name: ui.softSkills.prioritization.name,
        description: ui.softSkills.prioritization.description,
        icon: 'shape2',
      },
      {
        name: ui.softSkills.leadership.name,
        description: ui.softSkills.leadership.description,
        icon: 'shape3',
      },
    ],
  };
}
