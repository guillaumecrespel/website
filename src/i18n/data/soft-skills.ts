import type { Lang } from "../ui";

export interface SoftSkill {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface SoftSkills {
  title: string;
  skills: SoftSkill[];
}

export async function getSoftSkills(lang: Lang): Promise<SoftSkills> {
  const ui = await import(`../locales/${lang}/ui.json`).then((m) => m.default);

  return {
    title: ui.softSkills.title,
    skills: [
      {
        id: 'pragmatism',
        name: ui.softSkills.pragmatism.name,
        description: ui.softSkills.pragmatism.description,
        icon: 'shape1',
      },
      {
        id: 'prioritization',
        name: ui.softSkills.prioritization.name,
        description: ui.softSkills.prioritization.description,
        icon: 'shape2',
      },
      {
        id: 'leadership',
        name: ui.softSkills.leadership.name,
        description: ui.softSkills.leadership.description,
        icon: 'shape3',
      },
    ],
  };
}
