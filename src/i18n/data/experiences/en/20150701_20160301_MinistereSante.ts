import type { Experience } from "../types";
import ministereSanteLogo from "@/assets/images/company/ministere-sante.png";

export const experience: Experience = {
  id: "ministere-sante-lead-full-stack",
  startDate: "2015-07-01",
  endDate: "2016-03-01",
  position: "Lead Full Stack Developer",
  company: {
    name: "Ministry of Solidarity and Health",
    logo: ministereSanteLogo.src,
    website: "https://www.linkedin.com/company/10348835/"
  },
  location: "Nantes region, France",
  workType: "Freelance",
  description: "SIAO is the French Integrated Reception and Orientation Service. I intervened for their needs regarding social emergencies, the 115.",
  achievements: [
    "Implementation of a modern and coherent technical stack",
    "Challenge on the ergonomics of the Front-End part with SIAO teams",
    "Implementation of CI/CD",
    "Training of Back-End and Front-End development teams"
  ],
  skills: [
    "Modern architecture",
    "Ergonomics and UX",
    "CI/CD implementation",
    "Team training",
    "Full-stack development"
  ],
  technologies: [
    "AngularJs (1.6)",
    "Java 7",
    "SpringBoot",
    "RESTFUL API",
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
  duration: "9 months"
}; 