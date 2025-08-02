'use client';

import { Icon } from '@iconify/react';
import type { Experience } from '@/i18n/data/experiences/types';
import type { Lang } from '@/i18n/ui';
import { useTranslations } from '@/i18n/ui';
import ExperienceDrawer from './ExperienceDrawer';
import { Button } from './ui/button';

interface AllExperiencesButtonProps {
  experiences: Experience[];
  lang?: Lang;
}

export default function AllExperiencesButton({
  experiences,
  lang = 'fr',
}: AllExperiencesButtonProps) {
  const t = useTranslations(lang);

  return (
    <ExperienceDrawer
      experiences={experiences}
      title={t('experiences.allExperiences')}
      lang={lang}
      trigger={
        <Button
          aria-label={t('experiences.allExperiences')}
          title={t('experiences.allExperiences')}
        >
          <Icon icon="heroicons:briefcase" className="size-4" />
          <span className="inline-block">{t('experiences.allExperiences')}</span>
        </Button>
      }
    />
  );
}
