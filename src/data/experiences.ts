import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Jr. React Js Developer",
    company: "TechCompose Solutions Pvt. Ltd.",
    startDate: "Jul 2023",
    isCurrentJob: true,
    location: "Ahmadabad, India",
    description: [
      "Building scalable web applications and enterprise platforms.",
      "Developing HRMS, CRM, and Project Management systems with modern frontend technologies.",
      "Creating responsive UI, managing application state, and integrating REST APIs.",
      "Optimizing performance using React, Next.js, TypeScript, and modern UI frameworks.",
    ],
  },
  {
    designation: "React Js Intern",
    company: "TechCompose Solutions Pvt. Ltd.",
    startDate: "Jan 2023",
    endDate: "Jun 2023",
    isCurrentJob: false,
    location: "Ahmadabad, India",
    description: [
      "Assisted in frontend development using React.js and modern JS libraries.",
      "Worked on UI components and resolved bugs to improve application stability.",
      "Collaborated with senior developers to learn industry standard best practices.",
    ],
  },
];

export default experiences;
