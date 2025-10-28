import type { Experience } from "../types";
import cgiLogo from "@/assets/images/company/cgi.png";

export const experience: Experience = {
  id: "cgi-developer-ops",
  startDate: "2010-05-01",
  endDate: "2012-04-01",
  position: "Développeur / Ops",
  company: {
    name: "CGI",
    logo: cgiLogo.src,
    website: "https://www.linkedin.com/company/1415/"
  },
  location: "France",
  workType: "CDI",
  description: "Pour le projet Reinette de LaPoste dans un Centre de service de 50 personnes, j'ai effectué des mission au sein de la TMA de gestion des référentiels des comptes et centres de La Poste.",
  achievements: [
    "Conception et réalisation de l'architecture de diverses applications",
    "Mise en place de Framework tel que Spring, Struts, Hibernate, ainsi que des Framework propriétaire LAPOSTE",
    "Gestion des plateformes d'intégration continue, implémentation des scripts de déploiement, de création de livrable",
    "Gestion des composants Apache Tomcat et IBM Websphere",
    "Chiffrage de fonctionnalité",
    "Encadrement d'une équipe de développement"
  ],
  skills: [
    "Architecture d'applications",
    "Gestion de plateformes",
    "Intégration continue",
    "Déploiement",
    "Chiffrage",
    "Encadrement d'équipe"
  ],
  technologies: [
    "Struts",
    "Java/J2E",
    "Oracle 10/11g",
    "Sybase",
    "Korn Shell",
    "Eclipse",
    "Tomcat 6.0",
    "Websphere",
    "Checkstyle",
    "PMD",
    "FindBugs",
    "Junit"
  ],
  tags: [
    "Java",
    "Enterprise",
    "La Poste",
    "TMA",
    "DevOps",
    "Team Management",
    "Legacy Systems",
    "Pragmatism",
    "Practical",
    "Architecture"
  ],
  duration: "2 ans"
}; 