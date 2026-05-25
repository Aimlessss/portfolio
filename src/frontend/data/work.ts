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