// Import SVG icons with Vite as URLs


import shape4Svg from '@/icons/shape4.svg?url';
import shape5Svg from '@/icons/shape5.svg?url';
import shape6Svg from '@/icons/shape6.svg?url';
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

export async function getProductSkills(lang: Lang): Promise<ProductSkills> {
  const ui = await import(`../locales/${lang}/ui.json`).then(m => m.default);
  
  return {
    title: ui.productSkills.title,
    skills: [
      {
        name: ui.productSkills.scalability.name,
        description: ui.productSkills.scalability.description,
        icon: shape4Svg,
      },
      {
        name: ui.productSkills.business.name,
        description: ui.productSkills.business.description,
        icon: shape5Svg,
      },
      {
        name: ui.productSkills.vision.name,
        description: ui.productSkills.vision.description,
        icon: shape6Svg,
      },
    ],
  };
} 