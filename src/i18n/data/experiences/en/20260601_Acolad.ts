import acoladLogo from '@/assets/images/company/acolad.png';
import type { Experience } from '../types';

export const experience: Experience = {
  id: 'acolad-full-stack-engineer',
  startDate: '2026-06-01',
  endDate: null, // today
  position: 'Full Stack Engineer',
  company: {
    name: 'Acolad group',
    logo: acoladLogo.src,
    website: 'https://www.acolad.com/',
  },
  location: 'Nantes, Pays de la Loire, France',
  workType: 'Freelance',
  description:
    "Acolad, Europe's leading translation and localization company (now part of the RWS group), helps large companies such as L'Oréal, Air France and IBM deliver their content in more than 500 language pairs, combining AI with the expertise of more than 10,000 linguists. My role: bridging product and engineering, with a deliberately versatile hat.",
  achievements: [
    'Full-stack: APIs and services in .NET / C#, interfaces in React & TypeScript',
    'AI agents: design and development of an AI agents application, from idea to production',
    'Product: scoping needs, UX and prioritization with business teams',
    'Cross-team: supporting teams and sharing engineering best practices',
    'Goals: ship useful features that people actually use, put AI where it brings real value, build reliable, secure and maintainable tools',
  ],
  skills: [
    'Full-stack development',
    'AI agent design',
    'Product scoping and UX',
    'Prioritization with business teams',
    'Team support',
  ],
  technologies: ['.NET', 'C#', 'React.js', 'TypeScript', 'LLM', 'AI agents'],
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
