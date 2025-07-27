import type { Experience, ExperienceCollection } from './types';

/**
 * Filter experiences by tags
 */
export function filterByTags(experiences: Experience[], tags: string[]): Experience[] {
  if (!tags.length) return experiences;
  
  return experiences.filter(experience => 
    experience.tags.some(tag => 
      tags.some(searchTag => 
        tag.toLowerCase().includes(searchTag.toLowerCase())
      )
    )
  );
}

/**
 * Search experiences by text
 */
export function searchExperiences(experiences: Experience[], query: string): Experience[] {
  if (!query.trim()) return experiences;
  
  const searchTerm = query.toLowerCase();
  
  return experiences.filter(experience => 
    experience.position.toLowerCase().includes(searchTerm) ||
    experience.company.name.toLowerCase().includes(searchTerm) ||
    experience.description.toLowerCase().includes(searchTerm) ||
    experience.skills.some(skill => skill.toLowerCase().includes(searchTerm)) ||
    experience.technologies.some(tech => tech.toLowerCase().includes(searchTerm)) ||
    experience.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

/**
 * Sort experiences by date (newest first)
 */
export function sortExperiencesByDate(experiences: Experience[]): Experience[] {
  return [...experiences].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Calculate seniority in months for a technology
 */
export function calculateTechnologySeniority(experiences: Experience[], technology: string): number {
  return experiences
    .filter(exp => exp.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    ))
    .reduce((total, exp) => {
      const startDate = new Date(exp.startDate);
      const endDate = exp.endDate ? new Date(exp.endDate) : new Date();
      const months = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30.44);
      return total + Math.round(months);
    }, 0);
}

/**
 * Load experiences based on language
 */
export async function loadExperiences(lang: string): Promise<ExperienceCollection> {
  try {
    if (lang === 'en') {
      const { experiences } = await import('./en');
      return experiences;
    } else {
      const { experiences } = await import('./fr');
      return experiences;
    }
  } catch (error) {
    console.error(`Error loading experiences for language ${lang}:`, error);
    // Fallback to French experiences
    const { experiences } = await import('./fr');
    return experiences;
  }
}

/**
 * Load experiences for a specific language
 */
export async function getExperiences(lang: string): Promise<ExperienceCollection> {
  if (lang === 'en') {
    const { experiences } = await import('./en/index.js');
    return experiences;
  } else {
    const { experiences } = await import('./fr/index.js');
    return experiences;
  }
}

/**
 * Get experiences for a specific technology
 */
export function getExperiencesForTechnology(experiences: Experience[], technology: string): Experience[] {
  return experiences.filter(exp => 
    exp.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
}

/**
 * Format seniority display
 */
export function formatSeniority(months: number): string {
  if (months < 12) {
    return `${months} month${months > 1 ? 's' : ''}`;
  }
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (remainingMonths === 0) {
    return `${years} year${years > 1 ? 's' : ''}`;
  }
  
  return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
} 