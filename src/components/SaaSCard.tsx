'use client';

import { Card } from '@/components/ui/card';
import type { SaaS } from '@/i18n/data/saas';
import ChromaText from './ChromaText';

interface SaaSCardProps {
  saas: SaaS;
  children?: React.ReactNode;
}

export default function SaaSCard({ saas, children }: SaaSCardProps) {
  return (
    <a
      href={saas.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      aria-label={`Visiter ${saas.name} - ${saas.description}`}
    >
      <Card className="flex flex-row gap-2 p-4 relative overflow-hidden items-center bg-background cursor-pointer rounded-2xl hover:opacity-80 transition-opacity">
        <div
          className="flex items-center justify-center rounded-lg"
          style={{
            backgroundColor: saas.bgColor,
            width: '72px',
            minWidth: '72px',
            height: '72px',
          }}
        >
          <div
            className="[&_svg_path]:!fill-current"
            style={{
              color: saas.fgColor,
            }}
          >
            {children}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <ChromaText>{saas.name}</ChromaText>
          <p className="w-fit md:text-lg text-sm font-normal">{saas.description}</p>
        </div>
      </Card>
    </a>
  );
}
