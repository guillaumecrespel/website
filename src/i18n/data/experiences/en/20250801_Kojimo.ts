import kojimoLogo from '@/assets/images/company/kojimo-app.png';
import type { Experience } from '../types';

export const experience: Experience = {
  id: 'kojimo-cpto',
  startDate: '2025-08-01',
  endDate: null, // today
  position: 'CPTO',
  company: {
    name: 'Kojimo',
    logo: kojimoLogo.src,
    website: 'https://kojimo.fr',
  },
  location: 'Nantes, Pays de la Loire, France',
  workType: 'Indépendant',
  description:
    'Kojimo, the Business Accelerator for Real Estate Agents, is a SaaS designed and built by uni rakun. I own its product vision and engineering: full-time from August 2025 to May 2026, then part-time alongside my missions.',
  achievements: [],
  skills: ['Product vision', 'SaaS development', 'Entrepreneurship'],
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
