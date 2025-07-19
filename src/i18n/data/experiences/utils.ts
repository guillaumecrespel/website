import type { Experience, ExperienceCollection } from "./types";

/**
 * Filter experiences by tags
 * @param experiences - Array of experiences to filter
 * @param tags - Array of tags to filter by
 * @returns Filtered experiences
 */
export function filterByTags(experiences: ExperienceCollection, tags: string[]): ExperienceCollection {
  return experiences.filter(experience => 
    tags.some(tag => experience.tags.includes(tag))
  );
}

/**
 * Filter experiences by technology
 * @param experiences - Array of experiences to filter
 * @param technology - Technology to filter by
 * @returns Filtered experiences
 */
export function filterByTechnology(experiences: ExperienceCollection, technology: string): ExperienceCollection {
  return experiences.filter(experience => 
    experience.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
}

/**
 * Get experiences sorted by date (newest first)
 * @param experiences - Array of experiences to sort
 * @returns Sorted experiences
 */
export function sortByDate(experiences: ExperienceCollection): ExperienceCollection {
  return [...experiences].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get ongoing experiences (where endDate is null)
 * @param experiences - Array of experiences to filter
 * @returns Ongoing experiences
 */
export function getOngoingExperiences(experiences: ExperienceCollection): ExperienceCollection {
  return experiences.filter(experience => experience.endDate === null);
}

/**
 * Get all unique tags from experiences
 * @param experiences - Array of experiences
 * @returns Array of unique tags
 */
export function getAllTags(experiences: ExperienceCollection): string[] {
  const allTags = experiences.flatMap(experience => experience.tags);
  return [...new Set(allTags)].sort();
}

/**
 * Get all unique technologies from experiences
 * @param experiences - Array of experiences
 * @returns Array of unique technologies
 */
export function getAllTechnologies(experiences: ExperienceCollection): string[] {
  const allTechnologies = experiences.flatMap(experience => experience.technologies);
  return [...new Set(allTechnologies)].sort();
}

/**
 * Search experiences by text (searches in position, company name, description, achievements, skills)
 * @param experiences - Array of experiences to search
 * @param searchText - Text to search for
 * @returns Filtered experiences
 */
export function searchExperiences(experiences: ExperienceCollection, searchText: string): ExperienceCollection {
  const searchLower = searchText.toLowerCase();
  
  return experiences.filter(experience => {
    const searchableText = [
      experience.position,
      experience.company.name,
      experience.description,
      ...experience.achievements,
      ...experience.skills,
      ...experience.technologies,
      ...experience.tags
    ].join(" ").toLowerCase();
    
    return searchableText.includes(searchLower);
  });
}

/**
 * Get experience duration in months
 * @param experience - Experience to calculate duration for
 * @returns Duration in months
 */
export function getDurationInMonths(experience: Experience): number {
  const startDate = new Date(experience.startDate);
  const endDate = experience.endDate ? new Date(experience.endDate) : new Date();
  
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // Average days per month
  
  return diffMonths;
}

/**
 * Format experience duration for display
 * @param experience - Experience to format duration for
 * @returns Formatted duration string
 */
export function formatDuration(experience: Experience): string {
  const months = getDurationInMonths(experience);
  
  if (months < 12) {
    return `${months} mois`;
  }
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (remainingMonths === 0) {
    return `${years} an${years > 1 ? 's' : ''}`;
  }
  
  return `${years} an${years > 1 ? 's' : ''} ${remainingMonths} mois`;
} 