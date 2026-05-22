export type WorkExperience = {
  company: string;
  role: string;
  period: string;
  description?: string;
};

export const workExperiences: WorkExperience[] = [
  {
    company: "ozoneapi",
    role: "Senior Engineer",
    period: "2025 - present",
    description: "Engineered payments for CBUAE region with 99% uptime",
  },
  {
    company: "Personal Projects",
    role: "Software Builder",
    period: "2025 - present",
    description: "Created projects to learn frontend engineering and product thinking.",
  },
];