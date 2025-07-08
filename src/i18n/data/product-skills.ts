import type { Lang } from '../ui.js';

export interface ProductSkill {
  name: string;
  description: string;
  icon: string;
}

export interface ProductSkills {
  title: string;
  skills: ProductSkill[];
}

const skillIcons = ['shape4', 'shape5', 'shape6'] as const;

export async function getProductSkills(lang: Lang): Promise<ProductSkills> {
  const ui = await import(`../locales/${lang}/ui.json`).then(m => m.default);
  
  return {
    title: ui.productSkills.title,
    skills: [
      {
        name: ui.productSkills.scalability.name,
        description: ui.productSkills.scalability.description,
        icon: skillIcons[0],
      },
      {
        name: ui.productSkills.business.name,
        description: ui.productSkills.business.description,
        icon: skillIcons[1],
      },
      {
        name: ui.productSkills.vision.name,
        description: ui.productSkills.vision.description,
        icon: skillIcons[2],
      },
    ],
  };
} 