import acoladLogo from '@/assets/images/company/acolad.png';
import type { Experience } from '../types';

export const experience: Experience = {
  id: 'acolad-full-stack-engineer',
  startDate: '2026-06-01',
  endDate: null, // aujourd'hui
  position: 'Ingénieur Full Stack',
  company: {
    name: 'Acolad group',
    logo: acoladLogo.src,
    website: 'https://www.acolad.com/',
  },
  location: 'Nantes, Pays de la Loire, France',
  workType: 'Freelance',
  description:
    "Acolad, n°1 européen de la traduction et de la localisation (désormais partie du groupe RWS), aide de grandes entreprises comme L'Oréal, Air France ou IBM à diffuser leurs contenus dans plus de 500 combinaisons de langues, en alliant IA et expertise de plus de 10 000 linguistes. Mon rôle : faire le lien entre produit et technique, avec une casquette volontairement polyvalente.",
  achievements: [
    'Full-stack : APIs et services en .NET / C#, interfaces en React & TypeScript',
    "Agents IA : conception et développement d'une application d'agents IA, de l'idée à la production",
    'Produit : cadrage des besoins, UX, priorisation avec les équipes métier',
    'Transverse : accompagnement des équipes et partage de bonnes pratiques',
    "Objectifs : livrer vite des fonctionnalités utiles et réellement utilisées, mettre l'IA là où elle apporte une vraie valeur, construire des outils fiables, sécurisés et maintenables",
  ],
  skills: [
    'Développement full-stack',
    "Conception d'agents IA",
    'Cadrage produit et UX',
    'Priorisation avec les équipes métier',
    "Accompagnement d'équipes",
  ],
  technologies: ['.NET', 'C#', 'React.js', 'TypeScript', 'LLM', 'Agents IA'],
  tags: [
    'Full-stack',
    'IA',
    'AI',
    'LLM',
    'Product Management',
    'Product Development',
    'UX',
    'Priorisation',
    'Prioritization',
    'Pragmatism',
    'Mentoring',
    'Leadership',
    'Enterprise',
    'International',
  ],
};
