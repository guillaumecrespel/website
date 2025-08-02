'use client';

import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  getTechnologyExperiences,
  getTechnologySeniority,
  getTechnologyTotalDuration,
} from '@/i18n/data/experiences/technology-mapping';
import type { Experience } from '@/i18n/data/experiences/types';
import type { Technology } from '@/i18n/data/technologies';
import type { Lang } from '@/i18n/ui';
import { useI18n } from '@/i18n/utils';
import { Badge } from './ui/badge';

interface TechnologyCardProps {
  technology: Technology;
  experiences?: Experience[];
  lang?: Lang;
}

export default function TechnologyCard({
  technology,
  experiences = [],
  lang,
}: TechnologyCardProps) {
  const { t } = useI18n(lang);

  const technologyExperiences = getTechnologyExperiences(
    technology.id,
    experiences,
  );
  const totalDuration = getTechnologyTotalDuration(technology.id);
  const seniority = getTechnologySeniority(totalDuration);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex flex-row gap-2 relative overflow-hidden items-center w-fit font-black text-sm min-w-fit flex-shrink-0 bg-background backdrop-blur-lg cursor-pointer">
          {(technology.iconColor || technology.iconBlack) && (
            <Icon
              icon={technology.iconColor || technology.iconBlack}
              className="size-10"
              style={{ color: technology.color }}
              aria-hidden="true"
            />
          )}
          <p className="w-fit font-bold">{technology.name}</p>
        </Button>
      </DrawerTrigger>

      <DrawerContent className="max-h-[95vh]">
        <DrawerHeader className="border-b border-border relative">
          <div className="flex items-center gap-3 pr-12">
            {(technology.iconColor || technology.iconBlack) && (
              <div
                className="size-14 rounded-lg border-2 border-border flex items-center justify-center"
                style={{ borderColor: technology.color }}
              >
                <Icon
                  icon={technology.iconColor || technology.iconBlack}
                  className="size-10"
                  style={{ color: technology.color }}
                  aria-hidden="true"
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
                {t('technologies.description')}
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
                    <Icon
                      icon="heroicons:clock"
                      className="size-4"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-sm">
                      {t('experiences.seniority.title')} :
                    </span>
                    <Badge variant="default" className="text-xs">
                      {seniority} ({totalDuration}{' '}
                      {t('experiences.seniority.months')})
                    </Badge>
                  </div>

                  {technologyExperiences.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">
                        {t('experiences.skills.technologies')} :
                      </h4>
                      <div className="space-y-2">
                        {technologyExperiences.map(
                          ({ experience, techExp }) => (
                            <div
                              key={experience.id}
                              className="flex items-center justify-between p-2 bg-muted/50 rounded-lg"
                            >
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">
                                  {experience.position} {t('experiences.at')}{' '}
                                  {experience.company.name}
                                </p>
                                <p className="text-xs text-muted-foreground truncate">
                                  {techExp.context}
                                </p>
                              </div>
                              <div className="flex items-center gap-2 ml-2">
                                <Badge variant="neutral" className="text-xs">
                                  {techExp.duration}{' '}
                                  {t('experiences.seniority.months')}
                                </Badge>
                                <Badge variant="default" className="text-xs">
                                  {techExp.level}
                                </Badge>
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon
                      icon="heroicons:academic-cap"
                      className="size-4"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-sm">
                      {t('experiences.seniority.title')} :
                    </span>
                    <Badge variant="neutral" className="text-xs">
                      {t('experiences.seniority.ongoing')}
                    </Badge>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/30">
                    <div className="flex items-start gap-3">
                      <Icon
                        icon="heroicons:light-bulb"
                        className="size-5 text-muted-foreground mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          {t('experiences.personalProjects')}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {t('experiences.learningDescription')}
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
                aria-label={`En savoir plus sur ${technology.name}`}
              >
                <Badge variant="neutral">
                  {t('technologies.learnMore')}
                  <Icon
                    icon="heroicons:arrow-top-right-on-square"
                    className="size-4"
                    aria-hidden="true"
                  />
                </Badge>
              </a>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
