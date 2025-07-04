export const technologies = {
  title: "J'assure la partie technique",
  technologies: [
    // Frontend Frameworks
    {
      name: "React",
      iconBlack: "simple-icons:react", // existe (monochrome)
      iconColor: "logos:react",        // existe (coloré)
      description: "Framework JavaScript pour construire des interfaces utilisateur interactives et performantes avec des composants réutilisables.",
      link: "https://react.dev/",
      color: "#61DAFB",
      category: "frontend",
    },
    {
      name: "Next.js",
      iconBlack: "simple-icons:nextdotjs", // existe (monochrome)
      iconColor: "logos:nextjs-icon",      // existe (coloré)
      description: "Framework React full-stack avec rendu côté serveur, génération statique et optimisation automatique.",
      link: "https://nextjs.org/",
      color: "#000000",
      category: "frontend",
    },
    {
      name: "React Router v7",
      iconBlack: "simple-icons:reactrouter", // existe (monochrome)
      iconColor: "logos:react-router",       // existe (coloré)
      description: "Bibliothèque de routage pour React permettant la navigation entre les composants et la gestion de l'historique.",
      link: "https://reactrouter.com/",
      color: "#CA4245",
      category: "frontend",
    },
    {
      name: "Astro",
      iconBlack: "simple-icons:astro", // existe (monochrome)
      iconColor: "logos:astro-icon",   // existe (coloré)
      description: "Framework moderne pour créer des sites web rapides, orienté contenu statique et composants multi-framework.",
      link: "https://astro.build/",
      color: "#FF5D01",
      category: "frontend",
    },
  
    // State Management
    {
      name: "Zustand",
      iconBlack: "", // Non trouvé dans les sets référencés
      iconColor: "", // Non trouvé dans les sets référencés
      description: "Gestionnaire d'état minimaliste et scalable pour React.",
      link: "https://zustand-demo.pmnd.rs/",
      color: "#000000",
      category: "state",
    },
    {
      name: "Redux Toolkit",
      iconBlack: "simple-icons:redux", // existe (monochrome)
      iconColor: "logos:redux",        // existe (coloré)
      description: "Outils officiels pour simplifier l'utilisation de Redux dans les applications modernes.",
      link: "https://redux-toolkit.js.org/",
      color: "#764ABC",
      category: "state",
    },
  
    // Build Tools
    {
      name: "Vite",
      iconBlack: "simple-icons:vite", // existe (monochrome)
      iconColor: "logos:vitejs", // existe (coloré)
      description: "Outil de build ultra-rapide pour le développement web moderne.",
      link: "https://vitejs.dev/",
      color: "#646CFF",
      category: "build",
    },
  
    // Testing
    {
      name: "Vitest",
      iconBlack: "simple-icons:vitest", // existe (monochrome)
      iconColor: "logos:vitest", // existe (coloré)
      description: "Framework de test ultra-rapide pour Vite et l'écosystème moderne.",
      link: "https://vitest.dev/",
      color: "#6E9F18",
      category: "testing",
    },
    {
      name: "Playwright",
      iconBlack: "simple-icons:playwright", // existe (monochrome)
      iconColor: "logos:playwright", // Pas d'icône colorée officielle dans les sets référencés
      description: "Framework de test end-to-end moderne pour applications web.",
      link: "https://playwright.dev/",
      color: "#2EAD33",
      category: "testing",
    },
    {
      name: "Cypress",
      iconBlack: "devicon-plain:cypressio", // existe (monochrome)
      iconColor: "devicon:cypressio",        // existe (coloré)
      description: "Outil de test end-to-end pour applications web modernes.",
      link: "https://www.cypress.io/",
      color: "#17202C",
      category: "testing",
    },
    {
      name: "Jest",
      iconBlack: "simple-icons:jest", // existe (monochrome)
      iconColor: "logos:jest",        // existe (coloré)
      description: "Framework de test JavaScript avec une API simple et des snapshots.",
      link: "https://jestjs.io/",
      color: "#C21325",
      category: "testing",
    },
  
    // Styling & UI
    {
      name: "Tailwind CSS",
      iconBlack: "simple-icons:tailwindcss", // existe (monochrome)
      iconColor: "logos:tailwindcss-icon",   // existe (coloré)
      description: "Framework CSS utilitaire pour un développement rapide et moderne.",
      link: "https://tailwindcss.com/",
      color: "#06B6D4",
      category: "styling",
    },
    {
      name: "Sass",
      iconBlack: "simple-icons:sass", // existe (monochrome)
      iconColor: "logos:sass",        // existe (coloré)
      description: "Préprocesseur CSS puissant pour écrire des styles maintenables.",
      link: "https://sass-lang.com/",
      color: "#CC6699",
      category: "styling",
    },
  
    // Languages
    {
      name: "TypeScript",
      iconBlack: "simple-icons:typescript", // existe (monochrome)
      iconColor: "logos:typescript-icon",   // existe (coloré)
      description: "Sur-ensemble de JavaScript typé pour des applications robustes.",
      link: "https://www.typescriptlang.org/",
      color: "#3178C6",
      category: "language",
    },
    {
      name: "JavaScript",
      iconBlack: "simple-icons:javascript", // existe (monochrome)
      iconColor: "logos:javascript",        // existe (coloré)
      description: "Langage de programmation principal du web.",
      link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
      color: "#F7DF1E",
      category: "language",
    },
  
    // Backend & Runtime
    {
      name: "Node.js",
      iconBlack: "simple-icons:nodedotjs", // existe (monochrome)
      iconColor: "logos:nodejs-icon",      // existe (coloré)
      description: "Environnement d'exécution JavaScript côté serveur.",
      link: "https://nodejs.org/",
      color: "#339933",
      category: "backend",
    },
    {
      name: "hono",
      iconBlack: "simple-icons:hono", // Non trouvé dans les sets référencés
      iconColor: "logos:hono", // Non trouvé dans les sets référencés
      description: "Framework web ultraléger pour JavaScript/TypeScript.",
      link: "https://hono.dev/",
      color: "#262626",
      category: "backend",
    },
  
    // Databases
    {
      name: "PostgreSQL",
      iconBlack: "simple-icons:postgresql", // existe (monochrome)
      iconColor: "logos:postgresql",        // existe (coloré)
      description: "Système de gestion de base de données relationnelle open source.",
      link: "https://www.postgresql.org/",
      color: "#4169E1",
      category: "database",
    },
    {
      name: "MongoDB",
      iconBlack: "simple-icons:mongodb", // existe (monochrome)
      iconColor: "logos:mongodb-icon",   // existe (coloré)
      description: "Base de données NoSQL orientée documents.",
      link: "https://www.mongodb.com/",
      color: "#47A248",
      category: "database",
    },
    {
      name: "Redis",
      iconBlack: "simple-icons:redis", // existe (monochrome)
      iconColor: "logos:redis",        // existe (coloré)
      description: "Base de données clé-valeur en mémoire, rapide et open source.",
      link: "https://redis.io/",
      color: "#DC382D",
      category: "database",
    },
    {
      name: "Elasticsearch",
      iconBlack: "simple-icons:elasticsearch", // existe (monochrome)
      iconColor: "logos:elasticsearch",        // existe (coloré)
      description: "Moteur de recherche et d'analyse distribué.",
      link: "https://www.elastic.co/elasticsearch/",
      color: "#005571",
      category: "database",
    },
  
    // Containerization & Orchestration
    {
      name: "Docker",
      iconBlack: "simple-icons:docker", // existe (monochrome)
      iconColor: "logos:docker-icon",   // existe (coloré)
      description: "Plateforme de conteneurisation pour le développement et le déploiement.",
      link: "https://www.docker.com/",
      color: "#2496ED",
      category: "container",
    },
    {
      name: "Kubernetes",
      iconBlack: "simple-icons:kubernetes", // existe (monochrome)
      iconColor: "logos:kubernetes",        // existe (coloré)
      description: "Orchestrateur de conteneurs open source.",
      link: "https://kubernetes.io/",
      color: "#326CE5",
      category: "container",
    },
    {
      name: "Terraform",
      iconBlack: "simple-icons:terraform", // existe (monochrome)
      iconColor: "logos:terraform-icon",   // existe (coloré)
      description: "Outil d'infrastructure as code pour le provisioning cloud.",
      link: "https://www.terraform.io/",
      color: "#7B42BC",
      category: "container",
    },
    {
      name: "Ansible",
      iconBlack: "simple-icons:ansible", // existe (monochrome)
      iconColor: "logos:ansible",        // existe (coloré)
      description: "Outil d'automatisation configuration et de déploiement.",
      link: "https://www.ansible.com/",
      color: "#EE0000",
      category: "container",
    },
  
    // Cloud Platforms
    {
      name: "AWS",
      iconBlack: "simple-icons:amazonaws", // existe (monochrome)
      iconColor: "logos:aws",              // existe (coloré)
      description: "Plateforme cloud leader pour l'hébergement, le stockage et les services web.",
      link: "https://aws.amazon.com/",
      color: "#FF9900",
      category: "cloud",
    },
    {
      name: "Azure",
      iconBlack: "simple-icons:microsoftazure", // existe (monochrome)
      iconColor: "logos:azure-icon",           // existe (coloré)
      description: "Plateforme cloud de Microsoft pour le développement et le déploiement.",
      link: "https://azure.microsoft.com/",
      color: "#0078D4",
      category: "cloud",
    },
    {
      name: "Google Cloud",
      iconBlack: "simple-icons:googlecloud", // existe (monochrome)
      iconColor: "logos:google-cloud",       // existe (coloré)
      description: "Plateforme cloud de Google pour l'hébergement, l'IA et les services web.",
      link: "https://cloud.google.com/",
      color: "#4285F4",
      category: "cloud",
    },
  
    // Version Control
    {
      name: "Git",
      iconBlack: "simple-icons:git", // existe (monochrome)
      iconColor: "logos:git-icon",   // existe (coloré)
      description: "Système de gestion de versions distribué.",
      link: "https://git-scm.com/",
      color: "#F05032",
      category: "vcs",
    },
    {
      name: "GitHub",
      iconBlack: "simple-icons:github", // existe (monochrome)
      iconColor: "logos:github-icon",   // existe (coloré)
      description: "Plateforme d'hébergement et de collaboration pour le code source.",
      link: "https://github.com/",
      color: "#181717",
      category: "vcs",
    },
  
    // Design & Prototyping
    {
      name: "Figma",
      iconBlack: "simple-icons:figma", // existe (monochrome)
      iconColor: "logos:figma",        // existe (coloré)
      description: "Outil de design collaboratif pour interfaces et prototypes.",
      link: "https://figma.com/",
      color: "#F24E1E",
      category: "design",
    },
  
    // APIs & Data
    {
      name: "GraphQL",
      iconBlack: "simple-icons:graphql", // existe (monochrome)
      iconColor: "logos:graphql",        // existe (coloré)
      description: "Langage de requête pour API flexible et typée.",
      link: "https://graphql.org/",
      color: "#E10098",
      category: "api",
    },
  
    // Backend as a Service
    {
      name: "Supabase",
      iconBlack: "simple-icons:supabase", // existe (monochrome)
      iconColor: "logos:supabase-icon",   // existe (coloré)
      description: "Backend as a Service open source basé sur PostgreSQL.",
      link: "https://supabase.com/",
      color: "#3ECF8E",
      category: "baas",
    },
    {
      name: "Firebase",
      iconBlack: "simple-icons:firebase", // existe (monochrome)
      iconColor: "logos:firebase",        // existe (coloré)
      description: "Plateforme de développement d'applications mobiles et web par Google.",
      link: "https://firebase.google.com/",
      color: "#FFCA28",
      category: "baas",
    },
  
    // Deployment & Hosting
    {
      name: "Vercel",
      iconBlack: "simple-icons:vercel", // existe (monochrome)
      iconColor: "logos:vercel-icon",   // existe (coloré)
      description: "Plateforme de déploiement cloud pour sites statiques et applications serverless.",
      link: "https://vercel.com/",
      color: "#000000",
      category: "hosting",
    },
    {
      name: "Netlify",
      iconBlack: "simple-icons:netlify", // existe (monochrome)
      iconColor: "logos:netlify",        // existe (coloré)
      description: "Plateforme de déploiement et d'hébergement pour sites statiques.",
      link: "https://www.netlify.com/",
      color: "#00C7B7",
      category: "hosting",
    },
    {
      name: "Heroku",
      iconBlack: "simple-icons:heroku", // existe (monochrome)
      iconColor: "logos:heroku-icon",   // existe (coloré)
      description: "Plateforme cloud PaaS pour déployer, gérer et faire évoluer des applications.",
      link: "https://heroku.com/",
      color: "#430098",
      category: "hosting",
    },
  
    // Monitoring & Analytics
    {
      name: "Datadog",
      iconBlack: "simple-icons:datadog", // existe (monochrome)
      iconColor: "", // Pas d'icône colorée officielle dans les sets référencés
      description: "Plateforme de monitoring cloud et d'analytique.",
      link: "https://www.datadoghq.com/",
      color: "#632CA6",
      category: "monitoring",
    },
    {
      name: "Prometheus",
      iconBlack: "simple-icons:prometheus", // existe (monochrome)
      iconColor: "logos:prometheus",        // existe (coloré)
      description: "Système de monitoring et d'alerte open source.",
      link: "https://prometheus.io/",
      color: "#E6522C",
      category: "monitoring",
    },
    {
      name: "Grafana",
      iconBlack: "simple-icons:grafana", // existe (monochrome)
      iconColor: "logos:grafana",        // existe (coloré)
      description: "Plateforme open source de visualisation et d'analytique.",
      link: "https://grafana.com/",
      color: "#F46800",
      category: "monitoring",
    },
    {
      name: "Sentry",
      iconBlack: "simple-icons:sentry", // existe (monochrome)
      iconColor: "", // Pas d'icône colorée officielle dans les sets référencés
      description: "Plateforme de monitoring d'erreurs pour applications.",
      link: "https://sentry.io/",
      color: "#FB4226",
      category: "monitoring",
    },
  
    // Security
    {
      name: "OAuth 2.0",
      iconBlack: "devicon-plain:oauth", // existe (monochrome)
      iconColor: "devicon:oauth", // Pas d'icône colorée officielle dans les sets référencés
      description: "Protocole d'autorisation standard pour sécuriser les accès API.",
      link: "https://oauth.net/2/",
      color: "#2C5282",
      category: "security",
    },
    {
      name: "JWT",
      iconBlack: "simple-icons:jsonwebtokens", // existe (monochrome)
      iconColor: "", // Pas d'icône colorée officielle dans les sets référencés
      description: "Standard ouvert pour la transmission sécurisée d'informations entre parties.",
      link: "https://jwt.io/",
      color: "#000000",
      category: "security",
    },
  
    // Data & AI
    {
      name: "OpenAI API",
      iconBlack: "logos:openai-icon", // existe (monochrome)
      iconColor: "simple-icons:openai", // Pas d'icône colorée officielle dans les sets référencés
      description: "API d'intelligence artificielle avancée par OpenAI.",
      link: "https://platform.openai.com/",
      color: "#412991",
      category: "ai",
    },
    {
      name: "LangChain",
      iconBlack: "", // Non trouvé dans les sets référencés
      iconColor: "simple-icons:langchain", // Non trouvé dans les sets référencés
      description: "Framework pour construire des applications LLM composables.",
      link: "https://www.langchain.com/",
      color: "#000000",
      category: "ai",
    },
    {
      name: "RAG (Retrieval-Augmented Generation)",
      iconBlack: "", // Non trouvé dans les sets référencés
      iconColor: "", // Non trouvé dans les sets référencés
      description: "Technique combinant recherche documentaire et génération IA.",
      link: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
      color: "#000000",
      category: "ai",
    },
    {
      name: "NLP (Natural Language Processing)",
      iconBlack: "", // Non trouvé dans les sets référencés
      iconColor: "", // Non trouvé dans les sets référencés
      description: "Traitement automatique du langage naturel par ordinateur.",
      link: "https://en.wikipedia.org/wiki/Natural_language_processing",
      color: "#000000",
      category: "ai",
    },
    {
      name: "Hugging Face",
      iconBlack: "simple-icons:huggingface", // existe (monochrome)
      iconColor: "", // Pas d'icône colorée officielle dans les sets référencés
      description: "Plateforme open source pour modèles et outils IA.",
      link: "https://huggingface.co/",
      color: "#FFD21F",
      category: "ai",
    },
    {
      name: "MCP (Model Context Protocol)",
      iconBlack: "simple-icons:imessage", // Non trouvé dans les sets référencés
      iconColor: "", // Non trouvé dans les sets référencés
      description: "Protocole pour la gestion du contexte des modèles IA.",
      link: "https://github.com/modelcontext/protocol",
      color: "#000000",
      category: "ai",
    },
    {
      name: "Vibe Coding",
      iconBlack: "", // Non trouvé dans les sets référencés
      iconColor: "", // Non trouvé dans les sets référencés
      description: "Plateforme ou outil lié au développement IA (à préciser selon contexte).",
      link: "https://vibecoding.com/",
      color: "#000000",
      category: "ai",
    },
    {
      name: "Anthropic Claude",
      iconBlack: "simple-icons:claude", // Non trouvé dans les sets référencés
      iconColor: "logos:claude-icon", // Non trouvé dans les sets référencés
      description: "Modèle d'IA générative développé par Anthropic.",
      link: "https://www.anthropic.com/",
      color: "#000000",
      category: "ai",
    },
    {
      name: "Mistral",
      iconBlack: "simple-icons:mistralai", // existe (monochrome)
      iconColor: "logos:mistral-ai-icon", // Pas d'icône colorée officielle dans les sets référencés
      description: "Modèles de langage open source et API d'IA générative européenne.",
      link: "https://mistral.ai/",
      color: "#0057B7",
      category: "ai",
    },
  
    // Vector Databases
    {
      name: "Pinecone",
      iconBlack: "logos:pinecone-icon", // existe (monochrome)
      iconColor: "", // Pas d'icône colorée officielle dans les sets référencés
      description: "Base de données vectorielle pour l'IA et la recherche sémantique.",
      link: "https://www.pinecone.io/",
      color: "#45A1FF",
      category: "database",
    },
  ],
};