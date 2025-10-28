import type { Experience } from "../types";
import societeGeneraleLogo from "@/assets/images/company/societe-generale.png";

export const experience: Experience = {
  id: "societe-generale-full-stack-developer",
  startDate: "2022-02-01",
  endDate: "2024-03-01",
  position: "Full Stack Developer",
  company: {
    name: "Societe Generale Corporate and Investment Banking - SGCIB",
    logo: societeGeneraleLogo.src,
    website: "https://www.linkedin.com/company/3496831/"
  },
  location: "Nantes, Pays de la Loire, France",
  workType: "Freelance",
  description: "The team I joined within SG Market execution develops a set of applications that serve as a B2B marketplace for financial products.",
  achievements: [
    "UX thinking",
    "Frontend optimization",
    "Feature development",
    "E2E test implementation"
  ],
  skills: [
    "Full-stack development",
    "Frontend optimization",
    "E2E testing",
    "B2B marketplace",
    "Financial products"
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
  duration: "2 years 2 months"
}; 