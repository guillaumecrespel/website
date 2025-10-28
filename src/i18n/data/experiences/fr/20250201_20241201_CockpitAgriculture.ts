import type { Experience } from "../types";
import cockpitAgricultureLogo from "@/assets/images/company/cockpit-agriculture.png";

export const experience: Experience = {
  id: "cockpit-agriculture-interim-cto",
  startDate: "2025-01-01",
  endDate: null, // aujourd'hui
  position: "Interim CTO",
  company: {
    name: "Cockpit Agriculture",
    logo: cockpitAgricultureLogo.src,
    website: "https://www.linkedin.com/company/106799350/"
  },
  location: "Nantes, Pays de la Loire, France",
  workType: "Freelance",
  description: "Développement d'une plateforme SaaS de pilotage économique pour les agriculteurs, visant à digitaliser leurs données financières et optimiser leur rentabilité.",
  achievements: [
    "Conception et développement d'une architecture moderne et pragmatique utilisant React, TypeScript et Supabase",
    "Implémentation d'un système d'OCR et d'IA générative pour l'extraction automatisée des données financières",
    "Mise en place d'une infrastructure cloud scalable et sécurisée",
    "Développement d'une interface utilisateur intuitive avec des visualisations de données en temps réel et des graphiques",
    "Implémentation de fonctionnalités d'analyse financière et d'optimisation de la rentabilité",
    "Direction technique d'une équipe de développement",
    "Conduite d'entretiens utilisateurs pour valider les besoins et améliorer l'expérience utilisateur",
    "Définition de la roadmap produit et des priorités de développement",
    "Élaboration de la stratégie technique et des choix d'architecture",
    "Contribution à l'élaboration du business plan et à la stratégie globale"
  ],
  skills: [
    "Leadership technique et vision produit",
    "Gestion d'équipe et recrutement",
    "Architecture logicielle et choix technologiques",
    "Développement full-stack",
    "Intelligence artificielle et traitement de données",
    "Gestion de projet agile",
    "Communication et relation client"
  ],
  technologies: [
    "React.js",
    "TypeScript",
    "Supabase",
    "Intelligence artificielle (IA)",
    "OCR",
    "Prompting IA",
    "Agriculture biologique",
    "NodeJs",
    "Server side"
  ],
  tags: [
    "CTO",
    "Leadership",
    "SaaS",
    "Agriculture",
    "IA",
    "OCR",
    "Full-stack",
    "Architecture",
    "Product Management",
    "Team Management",
    "Business",
    "Strategy",
    "Roadmap",
    "Vision",
    "Product Development"
  ],
  duration: "7 mois"
}; 