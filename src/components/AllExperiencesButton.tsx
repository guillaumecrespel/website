'use client';

import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import type { Experience } from '@/i18n/data/experiences/types';
import ExperienceDrawer from './ExperienceDrawer';

interface AllExperiencesButtonProps {
  experiences: Experience[];
  lang?: string;
}

export default function AllExperiencesButton({
  experiences,
  lang = 'fr',
}: AllExperiencesButtonProps) {
  return (
    <ExperienceDrawer
      experiences={experiences}
      title="Toutes mes expériences"
      lang={lang}
      trigger={
        <Button className="flex items-center gap-2 bg-gradient-to-r from-accent-foreground to-transparent backdrop-blur-lg">
          <Icon icon="heroicons:briefcase" className="size-4" />
          <span className="hidden sm:inline">Voir toutes mes expériences</span>
          <span className="sm:hidden">Expériences</span>
        </Button>
      }
    />
  );
} 