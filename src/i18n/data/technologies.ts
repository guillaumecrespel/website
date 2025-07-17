import type { Lang } from '../ui.js';

export interface Technology {
  name: string;
  id: string;
  iconBlack: string;
  iconColor: string;
  description: string;
  link: string;
  color: string;
  category: string;
}

export interface Technologies {
  title: string;
  technologies: Technology[];
}

/**
 * Get technologies data for the current locale
 */
export async function getTechnologies(lang: Lang): Promise<Technologies> {
  const ui = await import(`../locales/${lang}/ui.json`).then((m) => m.default);
  const techDict = await import(`../locales/${lang}/technologies.json`).then(
    (m) => m.default,
  );

  const technologies: Technology[] = [
    // Frontend Frameworks
    {
      id: 'react',
      name: techDict.react.name,
      iconBlack: 'simple-icons:react',
      iconColor: 'logos:react',
      description: techDict.react.description,
      link: 'https://react.dev/',
      color: '#61DAFB',
      category: 'frontend',
    },
    {
      id: 'nextjs',
      name: techDict.nextjs.name,
      iconBlack: 'simple-icons:nextdotjs',
      iconColor: 'logos:nextjs-icon',
      description: techDict.nextjs.description,
      link: 'https://nextjs.org/',
      color: '#000000',
      category: 'frontend',
    },
    {
      id: 'react-router',
      name: techDict.reactRouter.name,
      iconBlack: 'simple-icons:reactrouter',
      iconColor: 'logos:react-router',
      description: techDict.reactRouter.description,
      link: 'https://reactrouter.com/',
      color: '#CA4245',
      category: 'frontend',
    },
    {
      id: 'astro',
      name: techDict.astro.name,
      iconBlack: 'simple-icons:astro',
      iconColor: 'logos:astro-icon',
      description: techDict.astro.description,
      link: 'https://astro.build/',
      color: '#FF5D01',
      category: 'frontend',
    },

    // State Management
    {
      id: 'zustand',
      name: techDict.zustand.name,
      iconBlack: 'devicon-plain:zustand',
      iconColor: 'devicon:zustand',
      description: techDict.zustand.description,
      link: 'https://zustand-demo.pmnd.rs/',
      color: '#000000',
      category: 'state',
    },
    {
      id: 'redux-toolkit',
      name: techDict.reduxToolkit.name,
      iconBlack: 'simple-icons:redux',
      iconColor: 'logos:redux',
      description: techDict.reduxToolkit.description,
      link: 'https://redux-toolkit.js.org/',
      color: '#764ABC',
      category: 'state',
    },

    // Build Tools
    {
      id: 'vite',
      name: techDict.vite.name,
      iconBlack: 'simple-icons:vite',
      iconColor: 'logos:vitejs',
      description: techDict.vite.description,
      link: 'https://vitejs.dev/',
      color: '#646CFF',
      category: 'build',
    },

    // Testing
    {
      id: 'vitest',
      name: techDict.vitest.name,
      iconBlack: 'simple-icons:vitest',
      iconColor: 'logos:vitest',
      description: techDict.vitest.description,
      link: 'https://vitest.dev/',
      color: '#6E9F18',
      category: 'testing',
    },
    {
      id: 'playwright',
      name: techDict.playwright.name,
      iconBlack: 'simple-icons:playwright',
      iconColor: 'logos:playwright',
      description: techDict.playwright.description,
      link: 'https://playwright.dev/',
      color: '#2EAD33',
      category: 'testing',
    },
    {
      id: 'cypress',
      name: techDict.cypress.name,
      iconBlack: 'devicon-plain:cypressio',
      iconColor: 'devicon:cypressio',
      description: techDict.cypress.description,
      link: 'https://www.cypress.io/',
      color: '#17202C',
      category: 'testing',
    },
    {
      id: 'jest',
      name: techDict.jest.name,
      iconBlack: 'simple-icons:jest',
      iconColor: 'logos:jest',
      description: techDict.jest.description,
      link: 'https://jestjs.io/',
      color: '#C21325',
      category: 'testing',
    },

    // Styling & UI
    {
      id: 'tailwindcss',
      name: techDict.tailwindcss.name,
      iconBlack: 'simple-icons:tailwindcss',
      iconColor: 'logos:tailwindcss-icon',
      description: techDict.tailwindcss.description,
      link: 'https://tailwindcss.com/',
      color: '#06B6D4',
      category: 'styling',
    },
    {
      id: 'sass',
      name: techDict.sass.name,
      iconBlack: 'simple-icons:sass',
      iconColor: 'logos:sass',
      description: techDict.sass.description,
      link: 'https://sass-lang.com/',
      color: '#CC6699',
      category: 'styling',
    },

    // Languages
    {
      id: 'typescript',
      name: techDict.typescript.name,
      iconBlack: 'simple-icons:typescript',
      iconColor: 'logos:typescript-icon',
      description: techDict.typescript.description,
      link: 'https://www.typescriptlang.org/',
      color: '#3178C6',
      category: 'language',
    },
    {
      id: 'javascript',
      name: techDict.javascript.name,
      iconBlack: 'simple-icons:javascript',
      iconColor: 'logos:javascript',
      description: techDict.javascript.description,
      link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
      color: '#F7DF1E',
      category: 'language',
    },

    // Backend & Runtime
    {
      id: 'nodejs',
      name: techDict.nodejs.name,
      iconBlack: 'simple-icons:nodedotjs',
      iconColor: 'logos:nodejs-icon',
      description: techDict.nodejs.description,
      link: 'https://nodejs.org/',
      color: '#339933',
      category: 'backend',
    },
    {
      id: 'hono',
      name: techDict.hono.name,
      iconBlack: 'simple-icons:hono',
      iconColor: 'logos:hono',
      description: techDict.hono.description,
      link: 'https://hono.dev/',
      color: '#262626',
      category: 'backend',
    },

    // Databases
    {
      id: 'postgresql',
      name: techDict.postgresql.name,
      iconBlack: 'simple-icons:postgresql',
      iconColor: 'logos:postgresql',
      description: techDict.postgresql.description,
      link: 'https://www.postgresql.org/',
      color: '#4169E1',
      category: 'database',
    },
    {
      id: 'mongodb',
      name: techDict.mongodb.name,
      iconBlack: 'simple-icons:mongodb',
      iconColor: 'logos:mongodb-icon',
      description: techDict.mongodb.description,
      link: 'https://www.mongodb.com/',
      color: '#47A248',
      category: 'database',
    },
    {
      id: 'redis',
      name: techDict.redis.name,
      iconBlack: 'simple-icons:redis',
      iconColor: 'logos:redis',
      description: techDict.redis.description,
      link: 'https://redis.io/',
      color: '#DC382D',
      category: 'database',
    },
    {
      id: 'elasticsearch',
      name: techDict.elasticsearch.name,
      iconBlack: 'simple-icons:elasticsearch',
      iconColor: 'logos:elasticsearch',
      description: techDict.elasticsearch.description,
      link: 'https://www.elastic.co/elasticsearch/',
      color: '#005571',
      category: 'database',
    },

    // Containerization & Orchestration
    {
      id: 'docker',
      name: techDict.docker.name,
      iconBlack: 'simple-icons:docker',
      iconColor: 'logos:docker-icon',
      description: techDict.docker.description,
      link: 'https://www.docker.com/',
      color: '#2496ED',
      category: 'container',
    },
    {
      id: 'kubernetes',
      name: techDict.kubernetes.name,
      iconBlack: 'simple-icons:kubernetes',
      iconColor: 'logos:kubernetes',
      description: techDict.kubernetes.description,
      link: 'https://kubernetes.io/',
      color: '#326CE5',
      category: 'container',
    },
    {
      id: 'terraform',
      name: techDict.terraform.name,
      iconBlack: 'simple-icons:terraform',
      iconColor: 'logos:terraform-icon',
      description: techDict.terraform.description,
      link: 'https://www.terraform.io/',
      color: '#7B42BC',
      category: 'container',
    },
    {
      id: 'ansible',
      name: techDict.ansible.name,
      iconBlack: 'simple-icons:ansible',
      iconColor: 'logos:ansible',
      description: techDict.ansible.description,
      link: 'https://www.ansible.com/',
      color: '#EE0000',
      category: 'container',
    },

    // Cloud Platforms
    {
      id: 'aws',
      name: techDict.aws.name,
      iconBlack: 'simple-icons:amazonaws',
      iconColor: 'logos:aws',
      description: techDict.aws.description,
      link: 'https://aws.amazon.com/',
      color: '#FF9900',
      category: 'cloud',
    },
    {
      id: 'azure',
      name: techDict.azure.name,
      iconBlack: 'simple-icons:microsoftazure',
      iconColor: 'logos:azure-icon',
      description: techDict.azure.description,
      link: 'https://azure.microsoft.com/',
      color: '#0078D4',
      category: 'cloud',
    },
    {
      id: 'google-cloud',
      name: techDict.googleCloud.name,
      iconBlack: 'simple-icons:googlecloud',
      iconColor: 'logos:google-cloud',
      description: techDict.googleCloud.description,
      link: 'https://cloud.google.com/',
      color: '#4285F4',
      category: 'cloud',
    },

    // Version Control
    {
      id: 'git',
      name: techDict.git.name,
      iconBlack: 'simple-icons:git',
      iconColor: 'logos:git-icon',
      description: techDict.git.description,
      link: 'https://git-scm.com/',
      color: '#F05032',
      category: 'vcs',
    },
    {
      id: 'github',
      name: techDict.github.name,
      iconBlack: 'simple-icons:github',
      iconColor: 'logos:github-icon',
      description: techDict.github.description,
      link: 'https://github.com/',
      color: '#181717',
      category: 'vcs',
    },

    // Design & Prototyping
    {
      id: 'figma',
      name: techDict.figma.name,
      iconBlack: 'simple-icons:figma',
      iconColor: 'logos:figma',
      description: techDict.figma.description,
      link: 'https://figma.com/',
      color: '#F24E1E',
      category: 'design',
    },

    // APIs & Data
    {
      id: 'graphql',
      name: techDict.graphql.name,
      iconBlack: 'simple-icons:graphql',
      iconColor: 'logos:graphql',
      description: techDict.graphql.description,
      link: 'https://graphql.org/',
      color: '#E10098',
      category: 'api',
    },

    // Backend as a Service
    {
      id: 'supabase',
      name: techDict.supabase.name,
      iconBlack: 'simple-icons:supabase',
      iconColor: 'logos:supabase-icon',
      description: techDict.supabase.description,
      link: 'https://supabase.com/',
      color: '#3ECF8E',
      category: 'baas',
    },
    {
      id: 'firebase',
      name: techDict.firebase.name,
      iconBlack: 'simple-icons:firebase',
      iconColor: 'logos:firebase',
      description: techDict.firebase.description,
      link: 'https://firebase.google.com/',
      color: '#FFCA28',
      category: 'baas',
    },

    // Deployment & Hosting
    {
      id: 'vercel',
      name: techDict.vercel.name,
      iconBlack: 'simple-icons:vercel',
      iconColor: 'logos:vercel-icon',
      description: techDict.vercel.description,
      link: 'https://vercel.com/',
      color: '#000000',
      category: 'hosting',
    },
    {
      id: 'netlify',
      name: techDict.netlify.name,
      iconBlack: 'simple-icons:netlify',
      iconColor: 'logos:netlify',
      description: techDict.netlify.description,
      link: 'https://www.netlify.com/',
      color: '#00C7B7',
      category: 'hosting',
    },
    {
      id: 'heroku',
      name: techDict.heroku.name,
      iconBlack: 'simple-icons:heroku',
      iconColor: 'logos:heroku-icon',
      description: techDict.heroku.description,
      link: 'https://heroku.com/',
      color: '#430098',
      category: 'hosting',
    },

    // Monitoring & Analytics
    {
      id: 'datadog',
      name: techDict.datadog.name,
      iconBlack: 'simple-icons:datadog',
      iconColor: '',
      description: techDict.datadog.description,
      link: 'https://www.datadoghq.com/',
      color: '#632CA6',
      category: 'monitoring',
    },
    {
      id: 'prometheus',
      name: techDict.prometheus.name,
      iconBlack: 'simple-icons:prometheus',
      iconColor: 'logos:prometheus',
      description: techDict.prometheus.description,
      link: 'https://prometheus.io/',
      color: '#E6522C',
      category: 'monitoring',
    },
    {
      id: 'grafana',
      name: techDict.grafana.name,
      iconBlack: 'simple-icons:grafana',
      iconColor: 'logos:grafana',
      description: techDict.grafana.description,
      link: 'https://grafana.com/',
      color: '#F46800',
      category: 'monitoring',
    },
    {
      id: 'sentry',
      name: techDict.sentry.name,
      iconBlack: 'simple-icons:sentry',
      iconColor: '',
      description: techDict.sentry.description,
      link: 'https://sentry.io/',
      color: '#FB4226',
      category: 'monitoring',
    },

    // Security
    {
      id: 'oauth2',
      name: techDict.oauth2.name,
      iconBlack: 'devicon-plain:oauth',
      iconColor: 'devicon:oauth',
      description: techDict.oauth2.description,
      link: 'https://oauth.net/2/',
      color: '#2C5282',
      category: 'security',
    },
    {
      id: 'jwt',
      name: techDict.jwt.name,
      iconBlack: 'simple-icons:jsonwebtokens',
      iconColor: '',
      description: techDict.jwt.description,
      link: 'https://jwt.io/',
      color: '#000000',
      category: 'security',
    },

    // Data & AI
    {
      id: 'openai',
      name: techDict.openai.name,
      iconBlack: 'logos:openai-icon',
      iconColor: 'simple-icons:openai',
      description: techDict.openai.description,
      link: 'https://platform.openai.com/',
      color: '#412991',
      category: 'ai',
    },
    {
      id: 'langchain',
      name: techDict.langchain.name,
      iconBlack: '',
      iconColor: 'simple-icons:langchain',
      description: techDict.langchain.description,
      link: 'https://www.langchain.com/',
      color: '#000000',
      category: 'ai',
    },
    {
      id: 'rag',
      name: techDict.rag.name,
      iconBlack: '',
      iconColor: '',
      description: techDict.rag.description,
      link: 'https://en.wikipedia.org/wiki/Retrieval-augmented_generation',
      color: '#000000',
      category: 'ai',
    },
    {
      id: 'nlp',
      name: techDict.nlp.name,
      iconBlack: '',
      iconColor: '',
      description: techDict.nlp.description,
      link: 'https://en.wikipedia.org/wiki/Natural_language_processing',
      color: '#000000',
      category: 'ai',
    },
    {
      id: 'huggingface',
      name: techDict.huggingface.name,
      iconBlack: 'simple-icons:huggingface',
      iconColor: '',
      description: techDict.huggingface.description,
      link: 'https://huggingface.co/',
      color: '#FFD21F',
      category: 'ai',
    },
    {
      id: 'mcp',
      name: techDict.mcp.name,
      iconBlack: 'simple-icons:imessage',
      iconColor: '',
      description: techDict.mcp.description,
      link: 'https://github.com/modelcontext/protocol',
      color: '#000000',
      category: 'ai',
    },
    {
      id: 'vibeCoding',
      name: techDict.vibeCoding.name,
      iconBlack: '',
      iconColor: '',
      description: techDict.vibeCoding.description,
      link: 'https://vibecoding.com/',
      color: '#000000',
      category: 'ai',
    },
    {
      id: 'claude',
      name: techDict.claude.name,
      iconBlack: 'simple-icons:claude',
      iconColor: 'logos:claude-icon',
      description: techDict.claude.description,
      link: 'https://www.anthropic.com/',
      color: '#000000',
      category: 'ai',
    },
    {
      id: 'mistral',
      name: techDict.mistral.name,
      iconBlack: 'simple-icons:mistralai',
      iconColor: 'logos:mistral-ai-icon',
      description: techDict.mistral.description,
      link: 'https://mistral.ai/',
      color: '#0057B7',
      category: 'ai',
    },

    // Vector Databases
    {
      id: 'pinecone',
      name: techDict.pinecone.name,
      iconBlack: 'logos:pinecone-icon',
      iconColor: '',
      description: techDict.pinecone.description,
      link: 'https://www.pinecone.io/',
      color: '#45A1FF',
      category: 'database',
    },
  ];

  return {
    title: ui.technologies.title,
    technologies,
  };
}
