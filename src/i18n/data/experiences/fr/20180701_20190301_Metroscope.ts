import type { Experience } from "../types";
import metroscopeLogo from "@/assets/images/company/metroscope.png";

export const experience: Experience = {
  id: "metroscope-frontend-developer",
  startDate: "2018-07-01",
  endDate: "2019-03-01",
  position: "Développeur Frontend",
  company: {
    name: "Metroscope",
    logo: metroscopeLogo.src,
    website: "https://www.linkedin.com/company/11456139/"
  },
  location: "Région de Paris, France",
  workType: "Freelance",
  description: "Metroscope est une startup, filiale du groupe EDF, composée d'une dizaine de personnes. Avec Fabien JUIF, nous avons mis en place et continuons à développer le produit Metroscope sur la partie Front-End à distance. Une fois celle-ci sécurisée et en production nous avons formé nos successeurs afin qu'ils puissent être autonome sur la stack mise en place.",
  achievements: [
    "Développement Front-End",
    "Aide sur l'ergonomie du produit",
    "Entretiens et choix des successeurs",
    "Formation des successeurs",
    "Sécurisation et mise en production"
  ],
  skills: [
    "Développement frontend",
    "Ergonomie et UX",
    "Formation et transfert de compétences",
    "Recrutement",
    "Mise en production"
  ],
  technologies: [
    "ReactJS",
    "Redux",
    "k-ramel",
    "react-vis",
    "D3.js",
    "JSS",
    "Webpack",
    "Babel",
    "ESLint",
    "Cypress",
    "Jest",
    "Docker",
    "CircleCI",
    "Kubernetes",
    "Github",
    "Jira"
  ],
  tags: [
    "Frontend",
    "Startup",
    "Energy",
    "EDF",
    "Training",
    "Recruitment",
    "Production",
    "Testing",
    "Leadership",
    "UX",
    "Product Design"
  ],
  duration: "9 mois"
}; 