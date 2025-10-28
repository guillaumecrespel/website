import type { Experience } from "../types";
import metroscopeLogo from "@/assets/images/company/metroscope.png";

export const experience: Experience = {
  id: "metroscope-frontend-developer",
  startDate: "2018-07-01",
  endDate: "2019-03-01",
  position: "Frontend Developer",
  company: {
    name: "Metroscope",
    logo: metroscopeLogo.src,
    website: "https://www.linkedin.com/company/11456139/"
  },
  location: "Paris region, France",
  workType: "Freelance",
  description: "Metroscope is a startup, subsidiary of the EDF group, composed of about ten people. With Fabien JUIF, we implemented and continue to develop the Metroscope product on the Front-End remotely. Once secured and in production, we trained our successors so they could be autonomous on the implemented stack.",
  achievements: [
    "Front-End development",
    "Assistance with product ergonomics",
    "Interviews and choice of successors",
    "Training of successors",
    "Securing and putting into production"
  ],
  skills: [
    "Frontend development",
    "Ergonomics and UX",
    "Training and knowledge transfer",
    "Recruitment",
    "Production deployment"
  ],
  technologies: [
    "ReactJS",
    "Redux",
    "k-ramel",
    "react-vis",
    "D3.js",
    "JSS",
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
    "Frontend",
    "Startup",
    "Energy",
    "EDF",
    "Training",
    "Recruitment",
    "Production",
    "Testing",
    "Leadership",
    "UX",
    "Product Design"
  ],
  duration: "9 months"
}; 