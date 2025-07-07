import type { Locale } from '@/lib/i18n';
import { getUIDictionary } from '@/lib/i18n';

export interface ProductSkill {
  name: string;
  description: string;
  icon: string;
}

export interface ProductSkills {
  title: string;
  skills: ProductSkill[];
}

/**
 * Get product skills data for the current locale
 */
export async function getProductSkills(locale: Locale): Promise<ProductSkills> {
  const ui = await getUIDictionary(locale);
  
  return {
    title: ui.productSkills.title,
    skills: [
      {
        name: ui.productSkills.scalability.name,
        description: ui.productSkills.scalability.description,
        icon: 'shape4',
      },
      {
        name: ui.productSkills.business.name,
        description: ui.productSkills.business.description,
        icon: 'shape5',
      },
      {
        name: ui.productSkills.vision.name,
        description: ui.productSkills.vision.description,
        icon: 'shape6',
      },
    ],
  };
}
