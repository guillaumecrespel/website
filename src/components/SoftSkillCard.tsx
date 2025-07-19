'use client';

import { Icon } from '@iconify/react';
import { Card } from '@/components/ui/card';
import type { Experience } from '@/i18n/data/experiences/types';
import { filterByTags } from '@/i18n/data/experiences/utils';
import type { SoftSkill } from '@/i18n/data/soft-skills';
import ExperienceDrawer from './ExperienceDrawer';
import SvgIcon from './SvgIcon';

interface SoftSkillCardProps {
  skill: SoftSkill;
  experiences: Experience[];
}

export default function SoftSkillCard({
  skill,
  experiences,
}: SoftSkillCardProps) {
  // Map skill names to experience tags
  const skillToTagsMap: Record<string, string[]> = {
    Pragmatisme: [
      'Pragmatisme',
      'Efficiency',
      'Problem Solving',
      'Optimization',
      'Results',
    ],
    Priorisation: [
      'Priorisation',
      'Time Management',
      'Focus',
      'Strategy',
      'Planning',
    ],
    Leadership: [
      'Leadership',
      'Team Management',
      'Mentoring',
      'Communication',
      'Decision Making',
    ],
  };

  const relevantTags = skillToTagsMap[skill.name] || [];
  const relevantExperiences = filterByTags(experiences, relevantTags);

  return (
    <ExperienceDrawer
      experiences={relevantExperiences}
      title={`Expériences - ${skill.name}`}
      trigger={
        <Card className="flex flex-row gap-2 p-4 relative overflow-hidden items-center bg-gradient-to-r from-accent-foreground to-transparent backdrop-blur-lg cursor-pointer hover:opacity-80 transition-opacity">
          <SvgIcon
            src={skill.icon}
            className="h-[50px] w-[100px] absolute -top-2 -right-2"
          />
          <div className="flex flex-col gap-2">
            <p className="w-fit font-bold text-2xl">{skill.name}</p>
            <p className="w-fit md:text-lg text-sm">{skill.description}</p>
            {relevantExperiences.length > 0 && (
              <div className="flex items-center gap-2 mt-2">
                <Icon
                  icon="heroicons:briefcase"
                  className="size-4 text-muted-foreground"
                />
                <span className="text-xs text-muted-foreground">
                  {relevantExperiences.length} expérience
                  {relevantExperiences.length > 1 ? 's' : ''} liée
                  {relevantExperiences.length > 1 ? 's' : ''}
                </span>
              </div>
            )}
          </div>
        </Card>
      }
    />
  );
}
