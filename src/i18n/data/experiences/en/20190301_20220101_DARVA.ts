import type { Experience } from "../types";
import darvaLogo from "@/assets/images/company/darva.png";

export const experience: Experience = {
  id: "darva-web-developer",
  startDate: "2019-03-01",
  endDate: "2022-01-01",
  position: "Web Developer",
  company: {
    name: "DARVA",
    logo: darvaLogo.src,
    website: "https://www.linkedin.com/company/368950/"
  },
  location: "Nantes region, France",
  workType: "Freelance",
  description: "DARVA is a company expert in web solutions and EDI (Electronic Data Interchange) based in Niort and intended for all professional players in insurance. With Fabien JUIF, we help the BI service facilitate access and governance of \"claims data\" for Darva collaborators as well as insurance industry players.",
  achievements: [
    "Development of NodeJS batches for storing insurer data",
    "Creation of user interfaces with the ReactJS ecosystem",
    "Facilitation of access and governance of claims data",
    "Collaboration with the BI service"
  ],
  skills: [
    "Full-stack development",
    "Data processing",
    "Data governance",
    "User interface development",
    "Collaboration with business teams"
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
  duration: "2 years 11 months"
}; 