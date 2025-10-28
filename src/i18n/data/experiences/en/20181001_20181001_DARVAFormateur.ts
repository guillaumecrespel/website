import type { Experience } from "../types";
import darvaLogo from "@/assets/images/company/darva.png";

export const experience: Experience = {
  id: "darva-nodejs-trainer",
  startDate: "2018-10-01",
  endDate: "2018-10-01",
  position: "NodeJS Trainer",
  company: {
    name: "DARVA",
    logo: darvaLogo.src,
    website: "https://www.linkedin.com/company/368950/"
  },
  location: "Niort region, France",
  workType: "Freelance",
  description: "DARVA is a company expert in web solutions and EDI (Electronic Data Interchange) based in Niort and intended for all professional players in insurance. I intervened in the BI service to train them in server-side Javascript development with NodeJS.",
  achievements: [
    "Training over 3 weeks with theory and practice",
    "Training on the basics of Javascript ES6 syntax",
    "Explanation of the NodeJS engine and its core modules",
    "Training on asynchronism",
    "Training on stream usage",
    "Training on various tools: Koa2, mongoDB, socket.io",
    "Creation of a game API at the end of training"
  ],
  skills: [
    "Technical training",
    "Pedagogy",
    "Knowledge transfer",
    "NodeJS development",
    "Javascript ES6"
  ],
  technologies: [
    "NodeJS",
    "Javascript ES6",
    "Koa2",
    "MongoDB",
    "Socket.io"
  ],
  tags: [
    "Training",
    "Education",
    "NodeJS",
    "Javascript",
    "Insurance",
    "BI"
  ],
  duration: "1 month"
}; 