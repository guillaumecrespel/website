import kojimoLogo from '@/assets/images/company/kojimo-app.png';
import type { Experience } from '../types';

export const experience: Experience = {
  id: 'kojimo-cpto',
  startDate: '2025-08-01',
  endDate: null, // aujourd'hui
  position: 'CPTO',
  company: {
    name: 'Kojimo',
    logo: kojimoLogo.src,
    website: 'https://kojimo.fr',
  },
  location: 'Nantes, Pays de la Loire, France',
  workType: 'Indépendant',
  description:
    "Kojimo, l'Accélérateur de Business pour Agents Immobiliers, est un SaaS conçu et développé par uni rakun. J'en porte la vision produit et la technique : à temps plein d'août 2025 à mai 2026, puis à temps partiel en parallèle de mes missions.",
  achievements: [],
  skills: ['Vision produit', 'Développement SaaS', 'Entrepreneuriat'],
  technologies: [],
  tags: [
    'CTO',
    'SaaS',
    'Startup',
    'Entrepreneurship',
    'Product Management',
    'Product Development',
    'Product Vision',
    'Business',
    'Strategy',
    'Vision',
  ],
};
