import type { Experience } from "../types";
import metroscopeLogo from "@/assets/images/company/metroscope.png";

export const experience: Experience = {
  id: "metroscope-consultant-architecture",
  startDate: "2018-03-01",
  endDate: "2018-06-01",
  position: "Consultant en architecture logiciel",
  company: {
    name: "Metroscope",
    logo: metroscopeLogo.src,
    website: "https://www.linkedin.com/company/11456139/"
  },
  location: "Région de Paris, France",
  workType: "Freelance",
  description: "Metroscope est une startup, filiale du groupe EDF, composée d'une dizaine de personnes. Avec Fabien JUIF, nous avons challengé leur MVP afin de produire une première version sur une stack solide et efficace.",
  achievements: [
    "Réflexion sur la structure de base de données",
    "Réflexion sur les technologies adéquates Front-end et Back-End à utiliser",
    "Mise en place du socle technique Front-End et Back-End",
    "Mise en place d'une CI / CD",
    "Aide à la gestion de projet agile (scrum)"
  ],
  skills: [
    "Architecture logicielle",
    "Choix technologiques",
    "Mise en place de CI/CD",
    "Gestion de projet agile",
    "Scrum",
    "Conception de base de données"
  ],
  technologies: [
    "ReactJS",
    "Redux",
    "k-ramel",
    "react-vis",
    "D3.js",
    "JSS",
    "Java 8",
    "SpringBoot",
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
    "Architecture",
    "Consulting",
    "Startup",
    "Energy",
    "EDF",
    "MVP",
    "CI/CD",
    "Agile",
    "Scrum",
    "Prioritization",
    "Strategy",
    "Vision"
  ],
  duration: "4 mois"
}; 