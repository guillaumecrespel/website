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
  description: "Objective: build a small team to redefine Decathlon World's checkout system!",
  achievements: [
    "Creation of a modular frontend to adapt to different use cases for each country",
    "Design and implementation of hexagonal architecture within a DDD context",
    "Communication with various peripherals such as RFID bins",
    "Integration of services within existing hardware with a Kubernetes environment",
    "Respected test pyramid through E2E and integration testing"
  ],
  skills: [
    "Hexagonal architecture",
    "Domain Driven Design (DDD)",
    "Peripheral communication",
    "Hardware integration",
    "E2E and integration testing",
    "Modular frontend development"
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
    "Scalability",
    "Modular",
    "Pragmatism",
    "Enterprise"
  ],
  duration: "1 year 3 months"
}; 