import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "inventory-payment-management",
    title: "Inventory & Payment Management System",
    description:
      "Enterprise web application for managing inventory, transactions, and financial operations with import/export capabilities. Features multi-company architecture with role-based access control and real-time notifications.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["React 18", "TypeScript", "Redux Toolkit", "Socket.io", "Vite", "Tailwind CSS"],
  },
  {
    id: "nextlogin",
    title: "NextLogin",
    description:
      "Enterprise management platform with HRMS, CRM, and project management. Features include leave management, project tracking, real-time notifications, admin dashboard, analytics and reporting.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["React", "Redux Toolkit", "Material-UI", "Socket.io", "Firebase Hosting"],
  },
  {
    id: "rentably",
    title: "Rentably",
    description:
      "Peer-to-peer rental marketplace where users list items for rent and borrow from others. Built with Next.js, featuring a split payment system via Stripe, automated payouts, and real-time availability checks.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["Next.js 13", "TypeScript", "Tailwind CSS", "Redux Toolkit", "React Query", "Stripe"],
  },
  {
    id: "percentologist",
    title: "Percentologist",
    description:
      "Comprehensive financial analytics and reporting platform for healthcare practices with QuickBooks integration, featuring role-based dashboards for admins and clients with benchmark reports.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["React 17", "Styled Components", "React Query", "Redux", "Bootstrap"],
  },
  {
    id: "klink",
    title: "Klink",
    description:
      "Klink is a sleek application featuring a user-friendly interface, powered by a Firebase backend. It streamlines customer and employee data tracking, with a focus on managing leads.",
    icon: "/skills/firebase.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["React.js", "SCSS", "Firebase"],
  },
  {
    id: "biz-transact",
    title: "Biz Transact Support Frontend",
    description:
      "A React-based admin dashboard for managing business transactions, including user management, sales records, Inventory, support tickets, and B2B operations.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Firebase"],
  },
  {
    id: "e-commerce",
    title: "E-commerce Website",
    description:
      "This website has a home, category, product details, cart, Wishlist, log in, signup, etc.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["ReactJS", "NodeJS", "Express JS", "MongoDB"],
  },
];
export default projects;
