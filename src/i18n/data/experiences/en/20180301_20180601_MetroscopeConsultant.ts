import type { Experience } from "../types";
import metroscopeLogo from "@/assets/images/company/metroscope.png";

export const experience: Experience = {
  id: "metroscope-consultant-architecture",
  startDate: "2018-03-01",
  endDate: "2018-06-01",
  position: "Software Architecture Consultant",
  company: {
    name: "Metroscope",
    logo: metroscopeLogo.src,
    website: "https://www.linkedin.com/company/11456139/"
  },
  location: "Paris region, France",
  workType: "Freelance",
  description: "Metroscope is a startup, subsidiary of the EDF group, composed of about ten people. With Fabien JUIF, we challenged their MVP to produce a first version on a solid and efficient stack.",
  achievements: [
    "Reflection on database structure",
    "Reflection on appropriate Front-end and Back-End technologies to use",
    "Implementation of Front-End and Back-End technical foundation",
    "Implementation of CI/CD",
    "Assistance with agile project management (scrum)"
  ],
  skills: [
    "Software architecture",
    "Technology choices",
    "CI/CD implementation",
    "Agile project management",
    "Scrum",
    "Database design"
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
  duration: "4 months"
}; 