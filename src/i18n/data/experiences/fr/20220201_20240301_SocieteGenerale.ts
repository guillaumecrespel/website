import type { Experience } from "../types";
import societeGeneraleLogo from "@/assets/images/company/societe-generale.png";

export const experience: Experience = {
  id: "societe-generale-full-stack-developer",
  startDate: "2022-02-01",
  endDate: "2024-03-01",
  position: "Développeur Full Stack",
  company: {
    name: "Societe Generale Corporate and Investment Banking - SGCIB",
    logo: societeGeneraleLogo.src,
    website: "https://www.linkedin.com/company/3496831/"
  },
  location: "Nantes, Pays de la Loire, France",
  workType: "Freelance",
  description: "L'équipe que j'ai rejointe au sein de SG Market exécution, développe un ensemble d'applications qui servent de marketplace b2b pour des produits financier.",
  achievements: [
    "Réflexion UX",
    "Optimisation frontend",
    "Développement de fonctionnalités",
    "Mise en place de test e2e"
  ],
  skills: [
    "Développement full-stack",
    "Optimisation frontend",
    "Tests E2E",
    "Marketplace B2B",
    "Produits financiers"
  ],
  technologies: [
    "React.js",
    "Redux.js",
    "C#",
    "Microsoft Azure",
    "SignalR"
  ],
  tags: [
    "Full-stack",
    "Finance",
    "B2B",
    "Marketplace",
    "Azure",
    "SignalR",
    "Redux",
    "Pragmatism",
    "Optimization",
    "UX"
  ],
  duration: "2 ans 2 mois"
}; 