// Import SVG icons with Vite as URLs
import shape1Svg from '@/icons/shape1.svg?url';
import shape2Svg from '@/icons/shape2.svg?url';
import shape3Svg from '@/icons/shape3.svg?url';
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

export async function getSoftSkills(lang: Lang): Promise<SoftSkills> {
  const ui = await import(`../locales/${lang}/ui.json`).then(m => m.default);
  
  return {
    title: ui.softSkills.title,
    skills: [
      {
        name: ui.softSkills.pragmatism.name,
        description: ui.softSkills.pragmatism.description,
        icon: shape1Svg,
      },
      {
        name: ui.softSkills.prioritization.name,
        description: ui.softSkills.prioritization.description,
        icon: shape2Svg,
      },
      {
        name: ui.softSkills.leadership.name,
        description: ui.softSkills.leadership.description,
        icon: shape3Svg,
      },
    ],
  };
} 