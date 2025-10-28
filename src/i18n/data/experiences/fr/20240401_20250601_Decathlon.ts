import type { Experience } from "../types";
import decathlonLogo from "@/assets/images/company/decathlon.png";

export const experience: Experience = {
  id: "decathlon-senior-frontend-developer",
  startDate: "2024-04-01",
  endDate: "2025-06-01",
  position: "Senior Frontend Developer",
  company: {
    name: "Decathlon France",
    logo: decathlonLogo.src,
    website: "https://www.linkedin.com/company/6150/"
  },
  location: "Nantes, Pays de la Loire, France",
  workType: "Freelance",
  description: "Objectif, monter une petite équipe pour redéfinir le système de caisse de decathlon Monde !",
  achievements: [
    "Création d'un frontend modulable pour s'adapter au différent cas d'utilisation de chaque Pays",
    "Reflexion et mise en place d'une architecture hexagonale au sein d'un contexte DDD",
    "Communication avec les différents périphériques comme les bacs RFID",
    "Intégration des services au sein d'un hardware existant avec un environnement Kubernetes",
    "Pyramide de test respectée au travers d'E2E et de test d'intégration"
  ],
  skills: [
    "Architecture hexagonale",
    "Domain Driven Design (DDD)",
    "Communication avec périphériques",
    "Intégration hardware",
    "Tests E2E et d'intégration",
    "Développement frontend modulaire"
  ],
  technologies: [
    "Java",
    "React.js",
    "TypeScript",
    "Quarkus",
    "PostgreSQL",
    "Kubernetes",
    "Datadog",
    "zustand",
    "WebSocket",
    "REST"
  ],
  tags: [
    "Frontend",
    "Architecture",
    "DDD",
    "Hardware Integration",
    "Testing",
    "Kubernetes",
    "Retail",
    "International",
    "Scalabilité",
    "Modular",
    "Pragmatism",
    "Enterprise"
  ],
  duration: "1 an 3 mois"
}; 