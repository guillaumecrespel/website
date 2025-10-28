import type { Experience } from "../types";
import ministereSanteLogo from "@/assets/images/company/ministere-sante.png";

export const experience: Experience = {
  id: "ministere-sante-lead-full-stack",
  startDate: "2015-07-01",
  endDate: "2016-03-01",
  position: "Lead Développeur full stack",
  company: {
    name: "Ministère des solidarités et de la santé",
    logo: ministereSanteLogo.src,
    website: "https://www.linkedin.com/company/10348835/"
  },
  location: "Région de Nantes, France",
  workType: "Freelance",
  description: "Le SIAO est Le Service Intégré de l'Accueil et de l'Orientation français. Je suis intervenu pour leur besoin concernant les urgences social, le 115.",
  achievements: [
    "Mise en place d'une stack technique moderne et cohérente",
    "Challenge sur l'ergonomie de la partie Front-End avec les équipes SIAO",
    "Mise en place de la CI/CD",
    "Formation de l'équipe de développement Back-End et Front-End"
  ],
  skills: [
    "Architecture moderne",
    "Ergonomie et UX",
    "Mise en place CI/CD",
    "Formation d'équipes",
    "Développement full-stack"
  ],
  technologies: [
    "AngularJs (1.6)",
    "Java 7",
    "SpringBoot",
    "API RESTFUL",
    "Maven",
    "Jenkins"
  ],
  tags: [
    "Lead Developer",
    "Public Sector",
    "Healthcare",
    "Social Services",
    "Emergency Services",
    "Full-stack",
    "CI/CD",
    "Training"
  ],
  duration: "9 mois"
}; 