'use client';

import { Card } from '@/components/ui/card';
import { getSkillTags } from '@/i18n/data/experiences/skill-mapping';
import type { Experience } from '@/i18n/data/experiences/types';
import { filterByTags } from '@/i18n/data/experiences/utils';
import type { SoftSkill } from '@/i18n/data/soft-skills';
import type { Lang } from '@/i18n/ui';
import { useTranslations } from '@/i18n/ui';
import ChromaText from './ChromaText';
import ExperienceDrawer from './ExperienceDrawer';

interface SoftSkillCardProps {
  skill: SoftSkill;
  experiences: Experience[];
  lang?: Lang;
  children?: React.ReactNode;
}

export default function SoftSkillCard({
  skill,
  experiences,
  lang = 'fr',
  children,
}: SoftSkillCardProps) {
  const t = useTranslations(lang);

  // Get relevant tags for this skill using the centralized mapping
  const relevantTags = getSkillTags(skill.id);
  const relevantExperiences = filterByTags(experiences, relevantTags);

  return (
    <ExperienceDrawer
      experiences={relevantExperiences}
      title={`${t('experiences.title')} - ${skill.name}`}
      trigger={
        <Card className="flex flex-row gap-2 p-4 relative overflow-hidden items-center bg-background cursor-pointer rounded-2xl">
          {children}
          <div className="flex flex-col gap-2">
            <ChromaText>{skill.name}</ChromaText>
            <p className="w-fit md:text-lg text-sm font-normal">{skill.description}</p>
          </div>
        </Card>
      }
      lang={lang}
    />
  );
}
