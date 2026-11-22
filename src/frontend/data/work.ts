import compnayLogo from "../images/ozone-api-logo.png";

export type WorkExperience = {
  company: string;
  role: string;
  period: string;
  logo?: string;
  description?: string;
};

export const workExperiences: WorkExperience[] = [
  {
    company: "GSS",
    role: "Senior Software Engineer (seconded by Ozone API)",
    period: "Jul 2025 – present",
    description: "Led Orient Insurance’s Open Finance integration into production and helped Ajman Bank migrate vendors in one month.",
  },
  {
    company: "ozoeneapi",
    role: "senior engineer",
    period: "2025 - present",
    description: "Engineered payments for CBUAE region with 99% uptime",
    logo: compnayLogo,
  },
  {
    company: "ozoneaepi",
    role: "software engineer",
    period: "2024 - early '25",
    description: "built data sharing endpoints, middleware between Third Party Payments and Banks",
    logo: compnayLogo
  },
];