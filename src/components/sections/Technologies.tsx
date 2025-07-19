'use client';

import TechnologyCard from '@/components/TechnologyCard';
import Marquee from '@/components/ui/marquee';
import type { Experience } from '@/i18n/data/experiences/types';
import type { Technologies as TechnologiesData } from '@/i18n/data/technologies';

interface TechnologiesProps {
  technologies: TechnologiesData;
  experiences?: Experience[];
}

/**
 * Technologies component displays technology cards in animated marquee rows
 * Client Component - needed for TechnologyCard interactivity
 */
export default function Technologies({ technologies, experiences = [] }: TechnologiesProps) {
  // Shuffle technologies randomly (client-side)
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledTechnologies = shuffleArray(technologies.technologies);
  const technologiesPerRow = Math.ceil(shuffledTechnologies.length / 3);

  const technologyRows = [
    shuffledTechnologies.slice(0, technologiesPerRow),
    shuffledTechnologies.slice(technologiesPerRow, technologiesPerRow * 2),
    shuffledTechnologies.slice(technologiesPerRow * 2),
  ];

  return (
    <section className="mt-4 w-full">
      <div className="md:px-6 px-4 md:max-w-screen-lg mx-auto">
        <p className="text-left font-bold text-sm">{technologies.title}</p>
      </div>
      <div className="flex flex-col gap-6 mt-4">
        {technologyRows.map(
          (
            rowTechnologies: typeof technologies.technologies,
            rowIndex: number,
          ) => {
            const rowKey = rowTechnologies.map((tech) => tech.name).join('-');
            return (
              <Marquee
                key={rowKey}
                className="py-2"
                direction={rowIndex === 1 ? 'right' : 'left'}
              >
                <div className="flex gap-4 px-4">
                  {rowTechnologies.map((technology) => (
                    <TechnologyCard
                      key={technology.name}
                      technology={technology}
                      experiences={experiences}
                    />
                  ))}
                </div>
              </Marquee>
            );
          },
        )}
      </div>
    </section>
  );
}
