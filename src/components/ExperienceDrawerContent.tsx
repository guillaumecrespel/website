'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DrawerClose, DrawerFooter } from '@/components/ui/drawer';
import type { Experience } from '@/i18n/data/experiences/types';
import type { Lang } from '@/i18n/ui';
import { useTranslations } from '@/i18n/ui';

interface ExperienceDrawerContentProps {
  experiences: Experience[];
  lang: Lang;
}

export default function ExperienceDrawerContent({ experiences, lang }: ExperienceDrawerContentProps) {
  const t = useTranslations(lang);

  return (
    <>
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-4">
          {experiences.map((experience) => (
            <Card key={experience.id} className="p-4 space-y-3">
              <div className="flex items-start gap-3">
                <img
                  src={experience.company.logo}
                  alt={`Logo ${experience.company.name}`}
                  className="size-12 rounded-lg object-cover"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg truncate">
                    {experience.position}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {experience.company.name}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="neutral" className="text-xs">
                      {experience.workType}
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {experience.description}
              </p>

              {experience.technologies.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm mb-2">{t('experiences.skills.technologies')} :</h4>
                  <div className="flex flex-wrap gap-1">
                    {experience.technologies.slice(0, 5).map((tech, index) => (
                      <Badge key={`tech-${experience.id}-${index}`} variant="default" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <DrawerFooter className="border-t border-border">
        <DrawerClose asChild>
          <Button variant="neutral" className="w-full">
            {t('experiences.close')}
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </>
  );
} 