import type { Lang } from '../ui.js';

export interface SoftSkill {
  name: string;
  description: string;
  icon: string;
}

export interface SoftSkills {
  title: string;
  skills: SoftSkill[];
}

const skillIcons = ['shape1', 'shape2', 'shape3'] as const;

export async function getSoftSkills(lang: Lang): Promise<SoftSkills> {
  const ui = await import(`../locales/${lang}/ui.json`).then(m => m.default);
  
  return {
    title: ui.softSkills.title,
    skills: [
      {
        name: ui.softSkills.pragmatism.name,
        description: ui.softSkills.pragmatism.description,
        icon: skillIcons[0],
      },
      {
        name: ui.softSkills.prioritization.name,
        description: ui.softSkills.prioritization.description,
        icon: skillIcons[1],
      },
      {
        name: ui.softSkills.leadership.name,
        description: ui.softSkills.leadership.description,
        icon: skillIcons[2],
      },
    ],
  };
} 