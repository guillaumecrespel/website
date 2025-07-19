'use client';

import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { getTechnologyExperiences, getTechnologySeniority, getTechnologyTotalDuration } from '@/i18n/data/experiences/technology-mapping';
import type { Experience } from '@/i18n/data/experiences/types';
import type { Technology } from '@/i18n/data/technologies';
import type { Lang } from '@/i18n/ui';
import { useI18n } from '@/i18n/utils';
import { Badge } from './ui/badge';

interface TechnologyCardProps {
  technology: Technology;
  experiences?: Experience[];
  lang?: Lang;
  ui?: {
    close: string;
    learnMore: string;
    description: string;
  };
}

export default function TechnologyCard({
  technology,
  experiences = [],
  lang,
  ui,
}: TechnologyCardProps) {
  const { t } = useI18n(lang);
  
  const technologyExperiences = getTechnologyExperiences(technology.id, experiences);
  const totalDuration = getTechnologyTotalDuration(technology.id);
  const seniority = getTechnologySeniority(totalDuration);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex flex-row gap-2 relative overflow-hidden items-center w-fit font-black text-sm min-w-fit flex-shrink-0 bg-gradient-to-r from-accent-foreground to-transparent backdrop-blur-lg cursor-pointer">
          {(technology.iconColor || technology.iconBlack) && (
            <Icon
              icon={technology.iconColor || technology.iconBlack}
              className="size-10"
              style={{ color: technology.color }}
            />
          )}
          <p className="w-fit font-bold">{technology.name}</p>
        </Button>
      </DrawerTrigger>

      <DrawerContent className="max-h-[90vh] bg-gradient-to-br from-accent-foreground from-60% to-transparent backdrop-blur-lg">
        <DrawerHeader className="border-b border-border">
          <div className="flex items-center gap-3">
            {(technology.iconColor || technology.iconBlack) && (
              <div
                className="size-14 rounded-lg border-2 border-border flex items-center justify-center"
                style={{ borderColor: technology.color }}
              >
                <Icon
                  icon={technology.iconColor || technology.iconBlack}
                  className="size-10"
                  style={{ color: technology.color }}
                />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <DrawerTitle className="text-xl font-bold">
                {technology.name}
              </DrawerTitle>
              <Badge variant="default">{technology.category}</Badge>
            </div>
          </div>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">
                {ui?.description || String(t('technologies.description'))}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {technology.description}
              </p>
            </div>

            {/* Seniority and Experience */}
            <div className="space-y-3">
              {totalDuration > 0 ? (
                <>
                  <div className="flex items-center gap-2">
                    <Icon icon="heroicons:clock" className="size-4" />
                    <span className="font-semibold text-sm">Mon expérience :</span>
                    <Badge variant="default" className="text-xs">
                      {seniority} ({totalDuration} mois)
                    </Badge>
                  </div>
                  
                  {technologyExperiences.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Expériences d'utilisation :</h4>
                      <div className="space-y-2">
                        {technologyExperiences.map(({ experience, techExp }) => (
                          <div key={experience.id} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">
                                {experience.position} chez {experience.company.name}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {techExp.context}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 ml-2">
                              <Badge variant="neutral" className="text-xs">
                                {techExp.duration} mois
                              </Badge>
                              <Badge variant="default" className="text-xs">
                                {techExp.level}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon icon="heroicons:academic-cap" className="size-4" />
                    <span className="font-semibold text-sm">Mon expérience :</span>
                    <Badge variant="neutral" className="text-xs">
                      En apprentissage
                    </Badge>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/30">
                    <div className="flex items-start gap-3">
                      <Icon icon="heroicons:light-bulb" className="size-5 text-muted-foreground mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Projets personnels & formation continue</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          J'explore cette technologie dans le cadre de projets personnels, 
                          de formations et d'expérimentations. Toujours en veille technologique 
                          pour rester à jour avec les dernières innovations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {technology.link && (
              <a
                href={technology.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge variant="neutral">
                  {ui?.learnMore || String(t('technologies.learnMore'))}
                  <Icon
                    icon="heroicons:arrow-top-right-on-square"
                    className="size-4"
                  />
                </Badge>
              </a>
            )}
          </div>
        </div>

        <DrawerFooter className="border-t border-border">
          <DrawerClose asChild>
            <Button variant="neutral" className="w-full">
              {ui?.close || String(t('technologies.close'))}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
