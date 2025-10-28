import type { Experience } from "../types";
import darvaLogo from "@/assets/images/company/darva.png";

export const experience: Experience = {
  id: "darva-web-developer",
  startDate: "2019-03-01",
  endDate: "2022-01-01",
  position: "Développeur web",
  company: {
    name: "DARVA",
    logo: darvaLogo.src,
    website: "https://www.linkedin.com/company/368950/"
  },
  location: "Région de Nantes, France",
  workType: "Freelance",
  description: "DARVA est une entreprise experte en solutions web et EDI (Echanges de Données Informatisés) basée à Niort et destinée à tous les acteurs professionnels de l'assurance. Avec Fabien JUIF, nous aidons le service BI à faciliter l'accès et la gouvernance des \"données sinistres\" pour les collaborateurs de Darva ainsi que les acteurs des métiers de l'assurance.",
  achievements: [
    "Développement de batch NodeJS pour le stockage des données des assureurs",
    "Création d'interfaces utilisateur avec l'écosystème ReactJS",
    "Facilitation de l'accès et de la gouvernance des données sinistres",
    "Travail en collaboration avec le service BI"
  ],
  skills: [
    "Développement full-stack",
    "Traitement de données",
    "Gouvernance des données",
    "Développement d'interfaces utilisateur",
    "Collaboration avec équipes métier"
  ],
  technologies: [
    "Node.js",
    "MongoDB",
    "GraphQL",
    "React.js",
    "TypeScript"
  ],
  tags: [
    "Full-stack",
    "Insurance",
    "Data Processing",
    "BI",
    "EDI",
    "GraphQL",
    "MongoDB"
  ],
  duration: "2 ans 11 mois"
}; 