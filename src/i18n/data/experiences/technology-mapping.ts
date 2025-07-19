import type { Experience } from './types';

export interface TechnologyExperience {
  technologyId: string;
  experienceId: string;
  duration: number; // en mois
  level: 'beginner' | 'intermediate' | 'expert' | 'senior';
  context: string; // description courte de l'usage
}

// Mapping des technologies vers les expériences
export const technologyExperienceMapping: TechnologyExperience[] = [
  // React.js
  {
    technologyId: 'react',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Développement frontend avec React, TypeScript et Supabase'
  },
  {
    technologyId: 'react',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Frontend modulable pour système de caisse international'
  },
  {
    technologyId: 'react',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Marketplace B2B pour produits financiers'
  },
  {
    technologyId: 'react',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Interfaces utilisateur pour données d\'assurance'
  },
  {
    technologyId: 'react',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Développement frontend pour startup EDF'
  },
  {
    technologyId: 'react',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Applications web/mobile d\'aide à l\'accès aux soins'
  },

  // TypeScript
  {
    technologyId: 'typescript',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Architecture moderne avec TypeScript'
  },
  {
    technologyId: 'typescript',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Développement frontend typé'
  },
  {
    technologyId: 'typescript',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Full-stack avec TypeScript'
  },
  {
    technologyId: 'typescript',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Développement web avec TypeScript'
  },

  // Node.js
  {
    technologyId: 'nodejs',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Backend avec Node.js et Supabase'
  },
  {
    technologyId: 'nodejs',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Batch NodeJS pour traitement de données'
  },
  {
    technologyId: 'nodejs',
    experienceId: 'cmc-contentflow-lead-full-stack',
    duration: 4,
    level: 'senior',
    context: 'Stack MEAN avec Node.js'
  },

  // MongoDB
  {
    technologyId: 'mongodb',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Base de données pour données d\'assurance'
  },
  {
    technologyId: 'mongodb',
    experienceId: 'cmc-contentflow-lead-full-stack',
    duration: 4,
    level: 'senior',
    context: 'Stack MEAN avec MongoDB'
  },

  // PostgreSQL
  {
    technologyId: 'postgresql',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Base de données avec Supabase'
  },
  {
    technologyId: 'postgresql',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Base de données pour système de caisse'
  },

  // GraphQL
  {
    technologyId: 'graphql',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'API GraphQL pour données d\'assurance'
  },
  {
    technologyId: 'graphql',
    experienceId: 'uni-rakun-co-founder-developer',
    duration: 90,
    level: 'expert',
    context: 'APIs GraphQL pour startups'
  },

  // Redux
  {
    technologyId: 'redux-toolkit',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'State management pour marketplace'
  },
  {
    technologyId: 'redux-toolkit',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'State management avec redux-saga'
  },

  // Zustand
  {
    technologyId: 'zustand',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'State management pour frontend modulable'
  },

  // Docker
  {
    technologyId: 'docker',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Containerisation pour startup'
  },
  {
    technologyId: 'docker',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Déploiement containerisé'
  },

  // Kubernetes
  {
    technologyId: 'kubernetes',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Orchestration pour système international'
  },
  {
    technologyId: 'kubernetes',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Orchestration pour startup'
  },

  // Jest
  {
    technologyId: 'jest',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Tests unitaires pour frontend'
  },
  {
    technologyId: 'jest',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Tests pour applications santé'
  },

  // Cypress
  {
    technologyId: 'cypress',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Tests E2E pour startup'
  },
  {
    technologyId: 'cypress',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Tests E2E pour marketplace'
  },

  // Java
  {
    technologyId: 'java',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Backend Java avec Quarkus'
  },
  {
    technologyId: 'java',
    experienceId: 'ministere-sante-lead-full-stack',
    duration: 9,
    level: 'senior',
    context: 'Backend Java avec SpringBoot'
  },
  {
    technologyId: 'java',
    experienceId: 'cgi-developer-ops',
    duration: 24,
    level: 'expert',
    context: 'Développement Java/J2E'
  },

  // Supabase
  {
    technologyId: 'supabase',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Backend as a Service pour SaaS'
  },

  // Datadog
  {
    technologyId: 'datadog',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Monitoring pour système de caisse'
  },

  // WebSocket
  {
    technologyId: 'websocket',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Communication temps réel pour caisse'
  },

  // REST
  {
    technologyId: 'rest',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'APIs REST pour système de caisse'
  },
  {
    technologyId: 'rest',
    experienceId: 'ministere-sante-lead-full-stack',
    duration: 9,
    level: 'senior',
    context: 'APIs RESTful pour services sociaux'
  },

  // Tailwind CSS
  {
    technologyId: 'tailwindcss',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Styling pour frontend modulable'
  },
  {
    technologyId: 'tailwindcss',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Styling moderne pour SaaS'
  },

  // RAG (Retrieval-Augmented Generation)
  {
    technologyId: 'rag',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'IA générative pour extraction de données'
  },

  // Git
  {
    technologyId: 'git',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Versioning pour projet SaaS'
  },
  {
    technologyId: 'git',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Versioning pour système international'
  },
  {
    technologyId: 'git',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Versioning pour marketplace'
  },
  {
    technologyId: 'git',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Versioning pour données d\'assurance'
  },
  {
    technologyId: 'git',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Versioning pour startup'
  },
  {
    technologyId: 'git',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Versioning pour applications santé'
  },
  {
    technologyId: 'git',
    experienceId: 'cmc-contentflow-lead-full-stack',
    duration: 4,
    level: 'senior',
    context: 'Versioning pour plateforme publicitaire'
  },
  {
    technologyId: 'git',
    experienceId: 'ministere-sante-lead-full-stack',
    duration: 9,
    level: 'senior',
    context: 'Versioning pour services sociaux'
  },
  {
    technologyId: 'git',
    experienceId: 'cgi-developer-ops',
    duration: 24,
    level: 'expert',
    context: 'Versioning pour applications La Poste'
  },
  {
    technologyId: 'git',
    experienceId: 'uni-rakun-co-founder-developer',
    duration: 90,
    level: 'expert',
    context: 'Versioning pour accompagnement startups'
  },

  // Vitest
  {
    technologyId: 'vitest',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Tests unitaires pour marketplace'
  },
  {
    technologyId: 'vitest',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Tests unitaires pour système de caisse'
  },

  // Playwright
  {
    technologyId: 'playwright',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Tests E2E pour marketplace'
  },
  {
    technologyId: 'playwright',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Tests E2E pour système de caisse'
  },
  {
    technologyId: 'playwright',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Tests E2E pour SaaS agricole'
  },

  // Netlify
  {
    technologyId: 'netlify',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Déploiement pour SaaS'
  },

  // Vite
  {
    technologyId: 'vite',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Build tool pour React/TypeScript'
  },
  {
    technologyId: 'vite',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Build tool pour frontend modulable'
  },
  {
    technologyId: 'vite',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Build tool pour marketplace'
  },
  {
    technologyId: 'vite',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Build tool pour interfaces utilisateur'
  },
  {
    technologyId: 'vite',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Build tool pour startup'
  },
  {
    technologyId: 'vite',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Build tool pour applications santé'
  },

  // Hono
  {
    technologyId: 'hono',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Backend moderne pour SaaS'
  },

  // Next.js
  {
    technologyId: 'nextjs',
    experienceId: 'uni-rakun-co-founder-developer',
    duration: 90,
    level: 'expert',
    context: 'Framework React pour accompagnement startups'
  },

  // React Router
  {
    technologyId: 'react-router',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Routing pour marketplace B2B'
  },

  // Astro
  {
    technologyId: 'astro',
    experienceId: 'uni-rakun-co-founder-developer',
    duration: 90,
    level: 'expert',
    context: 'Framework pour sites statiques et accompagnement'
  },

  // JavaScript
  {
    technologyId: 'javascript',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Développement web côté client'
  },
  {
    technologyId: 'javascript',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Développement frontend pour applications santé'
  },

  // GitHub
  {
    technologyId: 'github',
    experienceId: 'uni-rakun-co-founder-developer',
    duration: 90,
    level: 'expert',
    context: 'Hébergement code pour accompagnement startups'
  },
  {
    technologyId: 'github',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Versioning pour startup'
  },
  {
    technologyId: 'github',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Versioning pour applications santé'
  },

  // Firebase
  {
    technologyId: 'firebase',
    experienceId: 'uni-rakun-co-founder-developer',
    duration: 90,
    level: 'expert',
    context: 'BaaS pour accompagnement startups'
  },

  // Vercel
  {
    technologyId: 'vercel',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Déploiement pour SaaS'
  },

  // Heroku
  {
    technologyId: 'heroku',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Déploiement pour startup'
  },

  // OpenAI
  {
    technologyId: 'openai',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'IA pour extraction de données financières'
  },

  // LangChain
  {
    technologyId: 'langchain',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Framework IA pour traitement de données'
  },

  // NLP
  {
    technologyId: 'nlp',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Traitement langage naturel pour extraction'
  },

  // Hugging Face
  {
    technologyId: 'huggingface',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Modèles IA pour traitement de données'
  },

  // MCP
  {
    technologyId: 'mcp',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Protocole IA pour intégration'
  },

  // Vibe Coding
  {
    technologyId: 'vibeCoding',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Outils IA pour développement'
  },

  // Claude
  {
    technologyId: 'claude',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'IA pour assistance développement'
  },

  // Mistral
  {
    technologyId: 'mistral',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'IA pour traitement de données'
  },

  // Pinecone
  {
    technologyId: 'pinecone',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Base vectorielle pour IA'
  },

  // Sass
  {
    technologyId: 'sass',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Styling pour SaaS'
  },
  {
    technologyId: 'sass',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Styling pour frontend modulable'
  },
  {
    technologyId: 'sass',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Styling pour marketplace'
  },
  {
    technologyId: 'sass',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Styling pour interfaces utilisateur'
  },
  {
    technologyId: 'sass',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Styling pour startup'
  },
  {
    technologyId: 'sass',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Styling pour applications santé'
  },

  // Redis
  {
    technologyId: 'redis',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Cache pour marketplace B2B'
  },

  // Elasticsearch
  {
    technologyId: 'elasticsearch',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Recherche pour marketplace'
  },

  // Terraform
  {
    technologyId: 'terraform',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Infrastructure as Code pour marketplace'
  },

  // Ansible
  {
    technologyId: 'ansible',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Automatisation déploiement pour marketplace'
  },

  // Azure
  {
    technologyId: 'azure',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Cloud pour marketplace B2B'
  },

  // Figma
  {
    technologyId: 'figma',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Design pour marketplace'
  },
  {
    technologyId: 'figma',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Design pour système de caisse'
  },
  {
    technologyId: 'figma',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Design pour SaaS'
  },

  // Prometheus
  {
    technologyId: 'prometheus',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Monitoring pour marketplace'
  },

  // Grafana
  {
    technologyId: 'grafana',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Visualisation métriques pour SaaS'
  },
  {
    technologyId: 'grafana',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Visualisation métriques pour marketplace'
  },

  // Sentry
  {
    technologyId: 'sentry',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Monitoring erreurs pour SaaS'
  },

  // OAuth 2.0
  {
    technologyId: 'oauth2',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Authentification pour SaaS'
  },
  {
    technologyId: 'oauth2',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Authentification pour système de caisse'
  },
  {
    technologyId: 'oauth2',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Authentification pour marketplace'
  },
  {
    technologyId: 'oauth2',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Authentification pour startup'
  },
  {
    technologyId: 'oauth2',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Authentification pour applications santé'
  },

  // JWT
  {
    technologyId: 'jwt',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Tokens pour SaaS'
  },
  {
    technologyId: 'jwt',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Tokens pour système de caisse'
  },
  {
    technologyId: 'jwt',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Tokens pour marketplace'
  },
  {
    technologyId: 'jwt',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Tokens pour startup'
  },
  {
    technologyId: 'jwt',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Tokens pour applications santé'
  },
];

/**
 * Get experiences for a specific technology
 */
export function getTechnologyExperiences(
  technologyId: string,
  experiences: Experience[]
): { experience: Experience; techExp: TechnologyExperience }[] {
  const techExperiences = technologyExperienceMapping.filter(
    (te) => te.technologyId === technologyId
  );

  return techExperiences
    .map((techExp) => {
      const experience = experiences.find((exp) => exp.id === techExp.experienceId);
      return experience ? { experience, techExp } : null;
    })
    .filter((item): item is { experience: Experience; techExp: TechnologyExperience } => item !== null)
    .sort((a, b) => b.techExp.duration - a.techExp.duration);
}

/**
 * Calculate total experience duration for a technology
 */
export function getTechnologyTotalDuration(technologyId: string): number {
  return technologyExperienceMapping
    .filter((te) => te.technologyId === technologyId)
    .reduce((total, te) => total + te.duration, 0);
}

/**
 * Get seniority level for a technology based on total duration
 */
export function getTechnologySeniority(totalMonths: number): string {
  if (totalMonths >= 60) return 'Expert';
  if (totalMonths >= 36) return 'Senior';
  if (totalMonths >= 18) return 'Intermédiaire';
  return 'Débutant';
} 