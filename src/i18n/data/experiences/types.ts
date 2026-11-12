export interface Company {
  name: string;
  logo: string;
  website: string;
}

export type WorkType = 'Freelance' | 'CDI' | 'CDD' | 'Stage' | 'Indépendant';

export interface Experience {
  id: string;
  /** ISO date (YYYY-MM-DD). Only the month is meaningful. */
  startDate: string;
  /** ISO date of the last month worked, or null when ongoing. */
  endDate: string | null;
  position: string;
  company: Company;
  location: string;
  workType: WorkType;
  description: string;
  achievements: string[];
  skills: string[];
  technologies: string[];
  tags: string[];
}

export type ExperienceCollection = Experience[];
