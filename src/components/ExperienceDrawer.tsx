'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import { lazy, Suspense, useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import type { Experience } from '@/i18n/data/experiences/types';
import type { Lang } from '@/i18n/ui';
import { Card } from './ui';
import { Skeleton } from './ui/skeleton';

// Lazy load the drawer content for better performance
const DrawerContentComponent = lazy(() => import('./ExperienceDrawerContent'));

interface ExperienceDrawerProps {
  experiences: Experience[];
  title: string;
  trigger: React.ReactNode;
  lang?: Lang;
}

export default function ExperienceDrawer({
  experiences,
  title,
  trigger,
  lang = 'fr',
}: ExperienceDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="max-h-[95vh]">
        <DrawerHeader className="border-b border-border relative">
          <DrawerTitle className="text-xl font-bold flex items-center gap-2 pr-12">
            <Icon icon="heroicons:briefcase" className="size-6" />
            {title}
          </DrawerTitle>
        </DrawerHeader>
        <Suspense
          fallback={
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card
                    key={i}
                    className="animate-pulse flex items-start p-4 gap-4"
                  >
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 sm:w-[250px] w-[100px]" />
                      <Skeleton className="h-4 sm:w-[200px] w-[100px]" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          }
        >
          <DrawerContentComponent experiences={sortedExperiences} lang={lang} />
        </Suspense>
      </DrawerContent>
    </Drawer>
  );
}
