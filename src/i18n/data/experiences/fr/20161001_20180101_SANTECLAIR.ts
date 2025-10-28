import type { Experience } from "../types";
import santeclairLogo from "@/assets/images/company/santeclair.png";

export const experience: Experience = {
  id: "santeclair-lead-frontend-developer",
  startDate: "2016-10-01",
  endDate: "2018-01-01",
  position: "Lead Développeur - front-end",
  company: {
    name: "SANTECLAIR",
    logo: santeclairLogo.src,
    website: "https://www.linkedin.com/company/1919614/"
  },
  location: "Région de Nantes, France",
  workType: "Freelance",
  description: "Santéclair est un réseau de mutuelle avec une DSI de 20 personnes. J'ai été leur responsable technique Front-End pour le développement d'application web / mobile d'aide à l'accès au soin.",
  achievements: [
    "Formation des équipes à ces nouvelles technologies",
    "Contact de partenariat avec des sociétés permettant la réservation en ligne (Pages Jaunes, MonDocteur, Doctolib)",
    "Acteur de l'agilisation de la société",
    "Acteur de l'évolution des process et de la plateforme CI",
    "Développement de l'application TrouvTonDoc : géolocalisation de professionnels de santé, calcul du RAC, prise de rendez-vous en ligne",
    "Développement de l'application Devis Dentaire : réalisation de devis dentaire en ligne avec ergonomie simplifiée et calcul de RAC",
    "Développement de l'application Télémédecine : mise en relation d'un assuré avec des services comme MesDocteurs"
  ],
  skills: [
    "Leadership technique",
    "Formation d'équipes",
    "Gestion de partenariats",
    "Agilisation d'entreprise",
    "Évolution des process",
    "Développement d'applications mobiles",
    "Contributions open source"
  ],
  technologies: [
    "ReactJS",
    "Redux",
    "redux-saga",
    "Webpack",
    "Babel",
    "ESLint",
    "Jest",
    "CircleCI",
    "Github",
    "Docker"
  ],
  tags: [
    "Lead Developer",
    "Healthcare",
    "Insurance",
    "Mobile",
    "Partnerships",
    "Agile",
    "Open Source",
    "Training",
    "Leadership",
    "Team Management",
    "Prioritization",
    "Process",
    "UX",
    "Product Design"
  ],
  duration: "1 an 4 mois"
}; 