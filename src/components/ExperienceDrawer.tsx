'use client';

import { Icon } from '@iconify/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import type { Experience } from '@/i18n/data/experiences/types';
import { formatDuration } from '@/i18n/data/experiences/utils';

interface ExperienceDrawerProps {
  experiences: Experience[];
  title: string;
  trigger: React.ReactNode;
  lang?: string;
}

export default function ExperienceDrawer({
  experiences,
  title,
  trigger,
  lang = 'fr',
}: ExperienceDrawerProps) {
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {trigger}
      </DrawerTrigger>

      <DrawerContent className="max-h-[90vh] bg-gradient-to-br from-accent-foreground from-60% to-transparent backdrop-blur-lg">
        <DrawerHeader className="border-b border-border">
          <DrawerTitle className="text-xl font-bold flex items-center gap-2">
            <Icon icon="heroicons:briefcase" className="size-6" />
            {title}
          </DrawerTitle>
          <p className="text-sm text-muted-foreground">
            {experiences.length} expérience{experiences.length > 1 ? 's' : ''} trouvée{experiences.length > 1 ? 's' : ''}
          </p>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-4">
            {sortedExperiences.map((experience) => (
              <Card key={experience.id} className="p-4 space-y-3">
                {/* Header */}
                <div className="flex items-start gap-3">
                  <img
                    src={experience.company.logo}
                    alt={`Logo ${experience.company.name}`}
                    className="size-12 rounded-lg object-cover"
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
                      <span className="text-xs text-muted-foreground">
                        {formatDuration(experience)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>

                {/* Achievements */}
                {experience.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Réalisations principales :</h4>
                    <ul className="space-y-1">
                      {experience.achievements.slice(0, 3).map((achievement, index) => (
                        <li key={`achievement-${experience.id}-${index}`} className="text-xs text-muted-foreground flex items-start gap-2">
                          <Icon icon="heroicons:check-circle" className="size-3 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {experience.technologies.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Technologies :</h4>
                    <div className="flex flex-wrap gap-1">
                      {experience.technologies.slice(0, 5).map((tech, index) => (
                        <Badge key={`tech-${experience.id}-${index}`} variant="default" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {experience.technologies.length > 5 && (
                        <Badge variant="default" className="text-xs">
                          +{experience.technologies.length - 5}
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {experience.tags.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Compétences :</h4>
                    <div className="flex flex-wrap gap-1">
                      {experience.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={`tag-${experience.id}-${index}`} variant="neutral" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {experience.tags.length > 3 && (
                        <Badge variant="neutral" className="text-xs">
                          +{experience.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {/* Period */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon icon="heroicons:calendar" className="size-3" />
                    <span>
                      {new Date(experience.startDate).toLocaleDateString(lang, {
                        month: 'short',
                        year: 'numeric'
                      })}
                      {' - '}
                      {experience.endDate 
                        ? new Date(experience.endDate).toLocaleDateString(lang, {
                            month: 'short',
                            year: 'numeric'
                          })
                        : 'Aujourd\'hui'
                      }
                    </span>
                  </div>
                  <a
                    href={experience.company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon icon="heroicons:arrow-top-right-on-square" className="size-3" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <DrawerFooter className="border-t border-border">
          <DrawerClose asChild>
            <Button variant="neutral" className="w-full">
              Fermer
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
} 