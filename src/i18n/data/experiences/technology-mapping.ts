import type { Experience } from './types';
import { coveredMonths } from './utils';

export interface TechnologyExperience {
  technologyId: string;
  experienceId: string;
  duration: number; // en mois
  level: 'beginner' | 'intermediate' | 'expert' | 'senior';
  context: string; // description courte de l'usage
  contextEn: string; // English translation of context
}

// Mapping des technologies vers les expériences
export const technologyExperienceMapping: TechnologyExperience[] = [
  // Acolad (Full Stack Engineer)
  {
    technologyId: 'react',
    experienceId: 'acolad-full-stack-engineer',
    duration: 6,
    level: 'expert',
    context: "Interfaces d'une application d'agents IA",
    contextEn: 'Interfaces of an AI agents application',
  },
  {
    technologyId: 'typescript',
    experienceId: 'acolad-full-stack-engineer',
    duration: 6,
    level: 'expert',
    context: 'Front-end typé en React & TypeScript',
    contextEn: 'Typed front-end with React & TypeScript',
  },
  {
    technologyId: 'dotnet',
    experienceId: 'acolad-full-stack-engineer',
    duration: 6,
    level: 'senior',
    context: 'APIs et services en .NET / C#',
    contextEn: 'APIs and services in .NET / C#',
  },
  {
    technologyId: 'dotnet',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Back-end C# de la marketplace B2B',
    contextEn: 'C# back-end of the B2B marketplace',
  },
  // React.js
  {
    technologyId: 'react',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Développement frontend avec React, TypeScript et Supabase',
    contextEn: 'Frontend development with React, TypeScript and Supabase',
  },
  {
    technologyId: 'react',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Frontend modulable pour système de caisse international',
    contextEn: 'Modular frontend for an international point-of-sale system',
  },
  {
    technologyId: 'react',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Marketplace B2B pour produits financiers',
    contextEn: 'B2B marketplace for financial products',
  },
  {
    technologyId: 'react',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: "Interfaces utilisateur pour données d'assurance",
    contextEn: 'User interfaces for insurance data',
  },
  {
    technologyId: 'react',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Développement frontend pour startup EDF',
    contextEn: 'Frontend development for an EDF startup',
  },
  {
    technologyId: 'react',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: "Applications web/mobile d'aide à l'accès aux soins",
    contextEn: 'Web/mobile apps helping people access healthcare',
  },

  // TypeScript
  {
    technologyId: 'typescript',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Architecture moderne avec TypeScript',
    contextEn: 'Modern architecture with TypeScript',
  },
  {
    technologyId: 'typescript',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Développement frontend typé',
    contextEn: 'Typed frontend development',
  },
  {
    technologyId: 'typescript',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Full-stack avec TypeScript',
    contextEn: 'Full-stack with TypeScript',
  },
  {
    technologyId: 'typescript',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Développement web avec TypeScript',
    contextEn: 'Web development with TypeScript',
  },

  // Node.js
  {
    technologyId: 'nodejs',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Backend avec Node.js et Supabase',
    contextEn: 'Backend with Node.js and Supabase',
  },
  {
    technologyId: 'nodejs',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Batch NodeJS pour traitement de données',
    contextEn: 'Node.js batch jobs for data processing',
  },
  {
    technologyId: 'nodejs',
    experienceId: 'cmc-contentflow-lead-full-stack',
    duration: 4,
    level: 'senior',
    context: 'Stack MEAN avec Node.js',
    contextEn: 'MEAN stack with Node.js',
  },

  // MongoDB
  {
    technologyId: 'mongodb',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: "Base de données pour données d'assurance",
    contextEn: 'Database for insurance data',
  },
  {
    technologyId: 'mongodb',
    experienceId: 'cmc-contentflow-lead-full-stack',
    duration: 4,
    level: 'senior',
    context: 'Stack MEAN avec MongoDB',
    contextEn: 'MEAN stack with MongoDB',
  },

  // PostgreSQL
  {
    technologyId: 'postgresql',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Base de données avec Supabase',
    contextEn: 'Database with Supabase',
  },
  {
    technologyId: 'postgresql',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Base de données pour système de caisse',
    contextEn: 'Database for a point-of-sale system',
  },

  // GraphQL
  {
    technologyId: 'graphql',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: "API GraphQL pour données d'assurance",
    contextEn: 'GraphQL API for insurance data',
  },
  {
    technologyId: 'graphql',
    experienceId: 'uni-rakun-co-founder-developer',
    duration: 90,
    level: 'expert',
    context: 'APIs GraphQL pour startups',
    contextEn: 'GraphQL APIs for startups',
  },

  // Redux
  {
    technologyId: 'redux-toolkit',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'State management pour marketplace',
    contextEn: 'State management for a marketplace',
  },
  {
    technologyId: 'redux-toolkit',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'State management avec redux-saga',
    contextEn: 'State management with redux-saga',
  },

  // Zustand
  {
    technologyId: 'zustand',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'State management pour frontend modulable',
    contextEn: 'State management for a modular frontend',
  },

  // Docker
  {
    technologyId: 'docker',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Containerisation pour startup',
    contextEn: 'Containerization for a startup',
  },
  {
    technologyId: 'docker',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Déploiement containerisé',
    contextEn: 'Containerized deployment',
  },

  // Kubernetes
  {
    technologyId: 'kubernetes',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Orchestration pour système international',
    contextEn: 'Orchestration for an international system',
  },
  {
    technologyId: 'kubernetes',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Orchestration pour startup',
    contextEn: 'Orchestration for a startup',
  },

  // Jest
  {
    technologyId: 'jest',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Tests unitaires pour frontend',
    contextEn: 'Unit tests for the frontend',
  },
  {
    technologyId: 'jest',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Tests pour applications santé',
    contextEn: 'Testing for healthcare applications',
  },

  // Cypress
  {
    technologyId: 'cypress',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Tests E2E pour startup',
    contextEn: 'E2E tests for a startup',
  },
  {
    technologyId: 'cypress',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Tests E2E pour marketplace',
    contextEn: 'E2E tests for a marketplace',
  },

  // Java
  {
    technologyId: 'java',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Backend Java avec Quarkus',
    contextEn: 'Java backend with Quarkus',
  },
  {
    technologyId: 'java',
    experienceId: 'ministere-sante-lead-full-stack',
    duration: 9,
    level: 'senior',
    context: 'Backend Java avec SpringBoot',
    contextEn: 'Java backend with Spring Boot',
  },
  {
    technologyId: 'java',
    experienceId: 'cgi-developer-ops',
    duration: 24,
    level: 'expert',
    context: 'Développement Java/J2E',
    contextEn: 'Java/J2EE development',
  },

  // Supabase
  {
    technologyId: 'supabase',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Backend as a Service pour SaaS',
    contextEn: 'Backend as a Service for SaaS',
  },

  // Datadog
  {
    technologyId: 'datadog',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Monitoring pour système de caisse',
    contextEn: 'Monitoring for a point-of-sale system',
  },

  // WebSocket
  {
    technologyId: 'websocket',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Communication temps réel pour caisse',
    contextEn: 'Real-time communication for point-of-sale',
  },

  // REST
  {
    technologyId: 'rest',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'APIs REST pour système de caisse',
    contextEn: 'REST APIs for a point-of-sale system',
  },
  {
    technologyId: 'rest',
    experienceId: 'ministere-sante-lead-full-stack',
    duration: 9,
    level: 'senior',
    context: 'APIs RESTful pour services sociaux',
    contextEn: 'RESTful APIs for social services',
  },

  // Tailwind CSS
  {
    technologyId: 'tailwindcss',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Styling pour frontend modulable',
    contextEn: 'Styling for a modular frontend',
  },
  {
    technologyId: 'tailwindcss',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Styling moderne pour SaaS',
    contextEn: 'Modern styling for SaaS',
  },

  // RAG (Retrieval-Augmented Generation)
  {
    technologyId: 'rag',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'IA générative pour extraction de données',
    contextEn: 'Generative AI for data extraction',
  },

  // Git
  {
    technologyId: 'git',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Versioning pour projet SaaS',
    contextEn: 'Version control for a SaaS project',
  },
  {
    technologyId: 'git',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Versioning pour système international',
    contextEn: 'Version control for an international system',
  },
  {
    technologyId: 'git',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Versioning pour marketplace',
    contextEn: 'Version control for a marketplace',
  },
  {
    technologyId: 'git',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: "Versioning pour données d'assurance",
    contextEn: 'Version control for insurance data',
  },
  {
    technologyId: 'git',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Versioning pour startup',
    contextEn: 'Version control for a startup',
  },
  {
    technologyId: 'git',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Versioning pour applications santé',
    contextEn: 'Version control for healthcare applications',
  },
  {
    technologyId: 'git',
    experienceId: 'cmc-contentflow-lead-full-stack',
    duration: 4,
    level: 'senior',
    context: 'Versioning pour plateforme publicitaire',
    contextEn: 'Version control for an advertising platform',
  },
  {
    technologyId: 'git',
    experienceId: 'ministere-sante-lead-full-stack',
    duration: 9,
    level: 'senior',
    context: 'Versioning pour services sociaux',
    contextEn: 'Version control for social services',
  },
  {
    technologyId: 'git',
    experienceId: 'cgi-developer-ops',
    duration: 24,
    level: 'expert',
    context: 'Versioning pour applications La Poste',
    contextEn: 'Version control for La Poste applications',
  },
  {
    technologyId: 'git',
    experienceId: 'uni-rakun-co-founder-developer',
    duration: 90,
    level: 'expert',
    context: 'Versioning pour accompagnement startups',
    contextEn: 'Version control for startup support',
  },

  // Vitest
  {
    technologyId: 'vitest',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Tests unitaires pour marketplace',
    contextEn: 'Unit tests for a marketplace',
  },
  {
    technologyId: 'vitest',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Tests unitaires pour système de caisse',
    contextEn: 'Unit tests for a point-of-sale system',
  },

  // Playwright
  {
    technologyId: 'playwright',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Tests E2E pour marketplace',
    contextEn: 'E2E tests for a marketplace',
  },
  {
    technologyId: 'playwright',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Tests E2E pour système de caisse',
    contextEn: 'E2E tests for a point-of-sale system',
  },
  {
    technologyId: 'playwright',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Tests E2E pour SaaS agricole',
    contextEn: 'E2E tests for an agricultural SaaS',
  },

  // Netlify
  {
    technologyId: 'netlify',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Déploiement pour SaaS',
    contextEn: 'Deployment for SaaS',
  },

  // Vite
  {
    technologyId: 'vite',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Build tool pour React/TypeScript',
    contextEn: 'Build tool for React/TypeScript',
  },
  {
    technologyId: 'vite',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Build tool pour frontend modulable',
    contextEn: 'Build tool for a modular frontend',
  },
  {
    technologyId: 'vite',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Build tool pour marketplace',
    contextEn: 'Build tool for a marketplace',
  },
  {
    technologyId: 'vite',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Build tool pour interfaces utilisateur',
    contextEn: 'Build tool for user interfaces',
  },
  {
    technologyId: 'vite',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Build tool pour startup',
    contextEn: 'Build tool for a startup',
  },
  {
    technologyId: 'vite',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Build tool pour applications santé',
    contextEn: 'Build tool for healthcare applications',
  },

  // Hono
  {
    technologyId: 'hono',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Backend moderne pour SaaS',
    contextEn: 'Modern backend for SaaS',
  },

  // Next.js
  {
    technologyId: 'nextjs',
    experienceId: 'uni-rakun-co-founder-developer',
    duration: 90,
    level: 'expert',
    context: 'Framework React pour accompagnement startups',
    contextEn: 'React framework for startup support',
  },

  // React Router
  {
    technologyId: 'react-router',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Routing pour marketplace B2B',
    contextEn: 'Routing for a B2B marketplace',
  },

  // Astro
  {
    technologyId: 'astro',
    experienceId: 'uni-rakun-co-founder-developer',
    duration: 90,
    level: 'expert',
    context: 'Framework pour sites statiques et accompagnement',
    contextEn: 'Framework for static sites and startup support',
  },

  // JavaScript
  {
    technologyId: 'javascript',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Développement web côté client',
    contextEn: 'Client-side web development',
  },
  {
    technologyId: 'javascript',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Développement frontend pour applications santé',
    contextEn: 'Frontend development for healthcare applications',
  },

  // GitHub
  {
    technologyId: 'github',
    experienceId: 'uni-rakun-co-founder-developer',
    duration: 90,
    level: 'expert',
    context: 'Hébergement code pour accompagnement startups',
    contextEn: 'Code hosting for startup support',
  },
  {
    technologyId: 'github',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Versioning pour startup',
    contextEn: 'Version control for a startup',
  },
  {
    technologyId: 'github',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Versioning pour applications santé',
    contextEn: 'Version control for healthcare applications',
  },

  // Firebase
  {
    technologyId: 'firebase',
    experienceId: 'uni-rakun-co-founder-developer',
    duration: 90,
    level: 'expert',
    context: 'BaaS pour accompagnement startups',
    contextEn: 'BaaS for startup support',
  },

  // Vercel
  {
    technologyId: 'vercel',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Déploiement pour SaaS',
    contextEn: 'Deployment for SaaS',
  },

  // Heroku
  {
    technologyId: 'heroku',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Déploiement pour startup',
    contextEn: 'Deployment for a startup',
  },

  // OpenAI
  {
    technologyId: 'openai',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'IA pour extraction de données financières',
    contextEn: 'AI for financial data extraction',
  },

  // LangChain
  {
    technologyId: 'langchain',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Framework IA pour traitement de données',
    contextEn: 'AI framework for data processing',
  },

  // NLP
  {
    technologyId: 'nlp',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Traitement langage naturel pour extraction',
    contextEn: 'Natural language processing for extraction',
  },

  // Hugging Face
  {
    technologyId: 'huggingface',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Modèles IA pour traitement de données',
    contextEn: 'AI models for data processing',
  },

  // MCP
  {
    technologyId: 'mcp',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Protocole IA pour intégration',
    contextEn: 'AI protocol for integration',
  },

  // Vibe Coding
  {
    technologyId: 'vibeCoding',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Outils IA pour développement',
    contextEn: 'AI tools for development',
  },

  // Claude
  {
    technologyId: 'claude',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'IA pour assistance développement',
    contextEn: 'AI for development assistance',
  },

  // Mistral
  {
    technologyId: 'mistral',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'IA pour traitement de données',
    contextEn: 'AI for data processing',
  },

  // Pinecone
  {
    technologyId: 'pinecone',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Base vectorielle pour IA',
    contextEn: 'Vector database for AI',
  },

  // Sass
  {
    technologyId: 'sass',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Styling pour SaaS',
    contextEn: 'Styling for SaaS',
  },
  {
    technologyId: 'sass',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Styling pour frontend modulable',
    contextEn: 'Styling for a modular frontend',
  },
  {
    technologyId: 'sass',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Styling pour marketplace',
    contextEn: 'Styling for a marketplace',
  },
  {
    technologyId: 'sass',
    experienceId: 'darva-web-developer',
    duration: 35,
    level: 'expert',
    context: 'Styling pour interfaces utilisateur',
    contextEn: 'Styling for user interfaces',
  },
  {
    technologyId: 'sass',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Styling pour startup',
    contextEn: 'Styling for a startup',
  },
  {
    technologyId: 'sass',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Styling pour applications santé',
    contextEn: 'Styling for healthcare applications',
  },

  // Redis
  {
    technologyId: 'redis',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Cache pour marketplace B2B',
    contextEn: 'Caching for a B2B marketplace',
  },

  // Elasticsearch
  {
    technologyId: 'elasticsearch',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Recherche pour marketplace',
    contextEn: 'Search for a marketplace',
  },

  // Terraform
  {
    technologyId: 'terraform',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Infrastructure as Code pour marketplace',
    contextEn: 'Infrastructure as Code for a marketplace',
  },

  // Ansible
  {
    technologyId: 'ansible',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Automatisation déploiement pour marketplace',
    contextEn: 'Deployment automation for a marketplace',
  },

  // Azure
  {
    technologyId: 'azure',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Cloud pour marketplace B2B',
    contextEn: 'Cloud for a B2B marketplace',
  },

  // Figma
  {
    technologyId: 'figma',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Design pour marketplace',
    contextEn: 'Design for a marketplace',
  },
  {
    technologyId: 'figma',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Design pour système de caisse',
    contextEn: 'Design for a point-of-sale system',
  },
  {
    technologyId: 'figma',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Design pour SaaS',
    contextEn: 'Design for SaaS',
  },

  // Prometheus
  {
    technologyId: 'prometheus',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Monitoring pour marketplace',
    contextEn: 'Monitoring for a marketplace',
  },

  // Grafana
  {
    technologyId: 'grafana',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Visualisation métriques pour SaaS',
    contextEn: 'Metrics visualization for SaaS',
  },
  {
    technologyId: 'grafana',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Visualisation métriques pour marketplace',
    contextEn: 'Metrics visualization for a marketplace',
  },

  // Sentry
  {
    technologyId: 'sentry',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Monitoring erreurs pour SaaS',
    contextEn: 'Error monitoring for SaaS',
  },

  // OAuth 2.0
  {
    technologyId: 'oauth2',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Authentification pour SaaS',
    contextEn: 'Authentication for SaaS',
  },
  {
    technologyId: 'oauth2',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Authentification pour système de caisse',
    contextEn: 'Authentication for a point-of-sale system',
  },
  {
    technologyId: 'oauth2',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Authentification pour marketplace',
    contextEn: 'Authentication for a marketplace',
  },
  {
    technologyId: 'oauth2',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Authentification pour startup',
    contextEn: 'Authentication for a startup',
  },
  {
    technologyId: 'oauth2',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Authentification pour applications santé',
    contextEn: 'Authentication for healthcare applications',
  },

  // JWT
  {
    technologyId: 'jwt',
    experienceId: 'cockpit-agriculture-interim-cto',
    duration: 7,
    level: 'expert',
    context: 'Tokens pour SaaS',
    contextEn: 'Tokens for SaaS',
  },
  {
    technologyId: 'jwt',
    experienceId: 'decathlon-senior-frontend-developer',
    duration: 15,
    level: 'senior',
    context: 'Tokens pour système de caisse',
    contextEn: 'Tokens for a point-of-sale system',
  },
  {
    technologyId: 'jwt',
    experienceId: 'societe-generale-full-stack-developer',
    duration: 26,
    level: 'senior',
    context: 'Tokens pour marketplace',
    contextEn: 'Tokens for a marketplace',
  },
  {
    technologyId: 'jwt',
    experienceId: 'metroscope-frontend-developer',
    duration: 9,
    level: 'senior',
    context: 'Tokens pour startup',
    contextEn: 'Tokens for a startup',
  },
  {
    technologyId: 'jwt',
    experienceId: 'santeclair-lead-frontend-developer',
    duration: 16,
    level: 'expert',
    context: 'Tokens pour applications santé',
    contextEn: 'Tokens for healthcare applications',
  },
];

export type TechnologyLevel = 'expert' | 'senior' | 'intermediate' | 'beginner' | 'learning';

export interface TechnologyUsage {
  experience: Experience;
  techExp: TechnologyExperience;
}

/**
 * Missions where a technology was used, longest first.
 * `experiences` must be in the page language so positions are translated.
 */
export function getTechnologyExperiences(
  technologyId: string,
  experiences: Experience[],
): TechnologyUsage[] {
  return technologyExperienceMapping
    .filter((te) => te.technologyId === technologyId)
    .map((techExp) => {
      const experience = experiences.find((exp) => exp.id === techExp.experienceId);
      return experience ? { experience, techExp } : null;
    })
    .filter((item): item is TechnologyUsage => item !== null)
    .sort(
      (a, b) =>
        coveredMonths([b.experience]) - coveredMonths([a.experience]) ||
        b.experience.startDate.localeCompare(a.experience.startDate),
    );
}

/**
 * Hands-on time with a technology, in months. Computed from mission dates so
 * ongoing missions keep counting, and overlapping missions are counted once.
 */
export function getTechnologyTotalDuration(
  technologyId: string,
  experiences: Experience[],
): number {
  return coveredMonths(
    getTechnologyExperiences(technologyId, experiences).map(({ experience }) => experience),
  );
}

export function getTechnologyLevel(totalMonths: number): TechnologyLevel {
  if (totalMonths >= 60) return 'expert';
  if (totalMonths >= 36) return 'senior';
  if (totalMonths >= 18) return 'intermediate';
  if (totalMonths > 0) return 'beginner';
  return 'learning';
}
