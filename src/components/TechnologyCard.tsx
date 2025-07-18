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
import type { Technology } from '@/i18n/data/technologies';
import type { Lang } from '@/i18n/ui';
import { useI18n } from '@/i18n/utils';
import { Badge } from './ui/badge';

interface TechnologyCardProps {
  technology: Technology;
  lang?: Lang;
  ui?: {
    close: string;
    learnMore: string;
    description: string;
  };
}

export default function TechnologyCard({
  technology,
  lang,
  ui,
}: TechnologyCardProps) {
  const { t } = useI18n(lang);

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
