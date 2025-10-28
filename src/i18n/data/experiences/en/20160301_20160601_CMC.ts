import type { Experience } from "../types";
import cmcLogo from "@/assets/images/company/cmc-contentflow.png";

export const experience: Experience = {
  id: "cmc-contentflow-lead-full-stack",
  startDate: "2016-03-01",
  endDate: "2016-06-01",
  position: "Lead Full Stack Developer",
  company: {
    name: "CMC (Creative Media Consulting) - ContentFlow",
    logo: cmcLogo.src,
    website: "https://www.linkedin.com/company/15238136/"
  },
  location: "Paris region, France",
  workType: "Freelance",
  description: "ContentFlow is a platform connecting major accounts with advertising agencies. I worked during the product initialization to produce a coherent MEAN stack.",
  achievements: [
    "Implementation of technical architecture on a MEAN stack",
    "Front and back development of the application",
    "Implementation of code quality tools"
  ],
  skills: [
    "MEAN architecture",
    "Full-stack development",
    "Implementation of quality tools",
    "Product initialization"
  ],
  technologies: [
    "AngularJs (1.5)",
    "NodeJs",
    "MongoDB"
  ],
  tags: [
    "Lead Developer",
    "Full-stack",
    "MEAN Stack",
    "Advertising",
    "Product Initialization",
    "Code Quality",
    "Business",
    "Partnership",
    "Strategy"
  ],
  duration: "4 months"
}; 