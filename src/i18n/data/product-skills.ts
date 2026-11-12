import { getDictionary, type Lang } from '../ui';

export interface ProductSkill {
  id: 'scalability' | 'business' | 'vision';
  name: string;
  description: string;
  icon: string;
}

export interface ProductSkills {
  title: string;
  skills: ProductSkill[];
}

const SKILLS = [
  { id: 'scalability', icon: 'shape4' },
  { id: 'business', icon: 'shape5' },
  { id: 'vision', icon: 'shape6' },
] as const;

export function getProductSkills(lang: Lang): ProductSkills {
  const ui = getDictionary(lang).productSkills;

  return {
    title: ui.title,
    skills: SKILLS.map(({ id, icon }) => ({
      id,
      icon,
      name: ui[id].name,
      description: ui[id].description,
    })),
  };
}
