export interface Company {
  name: string;
  logo: string;
  website: string;
}

export interface Experience {
  id: string;
  startDate: string;
  endDate: string | null; // null pour "aujourd'hui"
  position: string;
  company: Company;
  location: string;
  workType: "Freelance" | "CDI" | "CDD" | "Stage" | "Indépendant";
  description: string;
  achievements: string[];
  skills: string[];
  technologies: string[];
  tags: string[];
  duration: string; // ex: "7 ans 6 mois"
}

export type ExperienceCollection = Experience[]; 