import { getDictionary, type Lang } from '../ui';

export interface SoftSkill {
  id: 'pragmatism' | 'prioritization' | 'leadership';
  name: string;
  description: string;
  icon: string;
}

export interface SoftSkills {
  title: string;
  skills: SoftSkill[];
}

const SKILLS = [
  { id: 'pragmatism', icon: 'shape1' },
  { id: 'prioritization', icon: 'shape2' },
  { id: 'leadership', icon: 'shape3' },
] as const;

export function getSoftSkills(lang: Lang): SoftSkills {
  const ui = getDictionary(lang).softSkills;

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
