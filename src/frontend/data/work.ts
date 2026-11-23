import companyLogo from "../images/ozone-api-logo.png";

export type WorkRole = {
  role: string;
  period: string;
  description: string;
};

export type WorkExperience = {
  company: string;
  logo?: string;
  roles: WorkRole[];
};

export const workExperiences: WorkExperience[] = [
  {
    company: "gss",
    roles: [
      {
        role: "Senior Software Engineer (seconded by Ozone API)",
        period: "Jul 2025 – present",
        description: "Lead Open Finance and Open Banking implementation projects across UAE banking and insurance clients, aligning delivery with evolving Central Bank of the UAE (CBUAE) requirements.",
      },
    ],
  },
  {
    company: "ozoneapi",
    logo: companyLogo,
    roles: [
      {
        role: "senior software engineer",
        period: "2025 - present",
        description: "Engineered payments for CBUAE region with 99% uptime",
      },
      {
        role: "software engineer",
        period: "2024 - early '25",
        description: "built data sharing endpoints, middleware between Third Party Payments and Banks",
      },
    ],
  },
];
