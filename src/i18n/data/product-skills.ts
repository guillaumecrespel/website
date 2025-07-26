import type { Lang } from '../ui';

export interface ProductSkill {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ProductSkills {
  title: string;
  skills: ProductSkill[];
}

export async function getProductSkills(lang: Lang): Promise<ProductSkills> {
  const ui = await import(`../locales/${lang}/ui.json`).then((m) => m.default);

  return {
    title: ui.productSkills.title,
    skills: [
      {
        id: 'scalability',
        name: ui.productSkills.scalability.name,
        description: ui.productSkills.scalability.description,
        icon: 'shape4',
      },
      {
        id: 'business',
        name: ui.productSkills.business.name,
        description: ui.productSkills.business.description,
        icon: 'shape5',
      },
      {
        id: 'vision',
        name: ui.productSkills.vision.name,
        description: ui.productSkills.vision.description,
        icon: 'shape6',
      },
    ],
  };
}
