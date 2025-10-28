import type { Experience } from "../types";
import darvaLogo from "@/assets/images/company/darva.png";

export const experience: Experience = {
  id: "darva-nodejs-trainer",
  startDate: "2018-10-01",
  endDate: "2018-10-01",
  position: "Formateur NodeJS",
  company: {
    name: "DARVA",
    logo: darvaLogo.src,
    website: "https://www.linkedin.com/company/368950/"
  },
  location: "Région de Niort, France",
  workType: "Freelance",
  description: "DARVA est une entreprise experte en solutions web et EDI (Echanges de Données Informatisés) basée à Niort et destiné à tous les acteurs professionnels de l'assurance. Je suis intervenu dans le service BI pour les former au développement Javascript côté serveur avec NodeJS.",
  achievements: [
    "Formation sur 3 semaines avec théorie et pratique",
    "Formation aux bases de la syntaxe Javascript ES6",
    "Explication du moteur NodeJS et ses modules core",
    "Formation sur l'asynchronisme",
    "Formation sur l'utilisation des streams",
    "Formation sur différents outils : Koa2, mongoDB, socket.io",
    "Création d'une API de jeu en fin de formation"
  ],
  skills: [
    "Formation technique",
    "Pédagogie",
    "Transmission de compétences",
    "Développement NodeJS",
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
  duration: "1 mois"
}; 