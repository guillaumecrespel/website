import type { Experience } from "../types";
import cmcLogo from "@/assets/images/company/cmc-contentflow.png";

export const experience: Experience = {
  id: "cmc-contentflow-lead-full-stack",
  startDate: "2016-03-01",
  endDate: "2016-06-01",
  position: "Lead Développeur Full Stack",
  company: {
    name: "CMC (Creative Media Consulting) - ContentFlow",
    logo: cmcLogo.src,
    website: "https://www.linkedin.com/company/15238136/"
  },
  location: "Région de Paris, France",
  workType: "Freelance",
  description: "ContentFlow est une plateforme de mise en relation de grand compte avec des régies publicitaire. J'ai oeuvré lors de l'initialisation du produit afin de produire une stack MEAN cohérente.",
  achievements: [
    "Mise en place de l'architecture technique sur une stack MEAN",
    "Développement front et back de l'application",
    "Mise en place d'outil de qualité de code"
  ],
  skills: [
    "Architecture MEAN",
    "Développement full-stack",
    "Mise en place d'outils de qualité",
    "Initialisation de produit"
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
  duration: "4 mois"
}; 