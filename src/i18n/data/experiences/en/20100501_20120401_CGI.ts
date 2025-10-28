import type { Experience } from "../types";
import cgiLogo from "@/assets/images/company/cgi.png";

export const experience: Experience = {
  id: "cgi-developer-ops",
  startDate: "2010-05-01",
  endDate: "2012-04-01",
  position: "Developer / Ops",
  company: {
    name: "CGI",
    logo: cgiLogo.src,
    website: "https://www.linkedin.com/company/1415/"
  },
  location: "France",
  workType: "CDI",
  description: "For the Reinette project at LaPoste in a 50-person Service Center, I carried out missions within the TMA for managing La Poste's account and center repositories.",
  achievements: [
    "Design and implementation of various application architectures",
    "Implementation of frameworks such as Spring, Struts, Hibernate, as well as proprietary LAPOSTE frameworks",
    "Management of continuous integration platforms, implementation of deployment scripts, creation of deliverables",
    "Management of Apache Tomcat and IBM Websphere components",
    "Feature estimation",
    "Supervision of a development team"
  ],
  skills: [
    "Application architecture",
    "Platform management",
    "Continuous integration",
    "Deployment",
    "Estimation",
    "Team supervision"
  ],
  technologies: [
    "Struts",
    "Java/J2E",
    "Oracle 10/11g",
    "Sybase",
    "Korn Shell",
    "Eclipse",
    "Tomcat 6.0",
    "Websphere",
    "Checkstyle",
    "PMD",
    "FindBugs",
    "Junit"
  ],
  tags: [
    "Java",
    "Enterprise",
    "La Poste",
    "TMA",
    "DevOps",
    "Team Management",
    "Legacy Systems",
    "Pragmatism",
    "Practical",
    "Architecture"
  ],
  duration: "2 years"
}; 