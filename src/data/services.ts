import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Frontend Development",
    icons: [
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/redux.svg",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "I build dynamic and responsive web applications.",
    description: "I specialize in creating engaging and scalable web applications using React.js and Next.js. My focus is on delivering seamless user experiences, responsive designs, and robust frontend architectures tailored to your business needs.",
  },
  {
    id: 2,
    title: "UI/UX Implementation",
    icons: [
      "/skills/css.svg",
      "/skills/sass.svg",
      "/skills/javascript.svg",
      "/skills/react.svg",
      "/images/logical-thinking.png",
    ],
    shortDescription: "I translate designs into pixel-perfect interfaces.",
    description: "I bring designs to life by implementing pixel-perfect, accessible, and highly responsive user interfaces using modern CSS frameworks like Tailwind CSS, Material UI, and Flowbite.",
  },
  {
    id: 3,
    title: "Backend Integration",
    icons: [
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/firebase.svg",
      "/skills/socket-io.png",
      "/skills/mongodb.svg",
    ],
    shortDescription: "I integrate RESTful APIs and real-time backend services.",
    description: "I seamlessly integrate robust backend services using REST APIs and WebSocket connections. With experience in Node.js, Express, Firebase, and real-time databases, I ensure your application handles data efficiently.",
  },
  {
    id: 4,
    title: "Enterprise Solutions",
    icons: [
      "/images/collaboration.png",
      "/images/analytical-skills.png",
      "/skills/git.svg",
      "/skills/github.svg",
      "/skills/ubuntu.png",
    ],
    shortDescription: "I build complex HRMS, CRM, and Management platforms.",
    description: "I evaluate and develop enterprise-level management platforms, including HRMS, CRM, and project management tools, with features like role-based access control, analytics dashboards, and complex state management.",
  },
  {
    id: 5,
    title: "Performance Optimization",
    icons: [
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/images/logical-thinking.png",
      "/skills/aws.svg",
      "/images/analytical-skills.png",
    ],
    shortDescription: "I optimize applications for maximum speed and scalability.",
    description: "I optimize application performance by minimizing main-thread work, lazy loading components, managing cache with React Query, and deploying on robust platforms like Vercel and Firebase Hosting.",
  },
  {
    id: 6,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/firebase.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I manage state and optimize complex data structures.",
    description: "I manage and architect databases for complex applications. Whether using MongoDB, Postgres, MySQL, or Drizzle ORM, I design scalable schemas and implement efficient queries for data integrity and high availability.",
  },
];

export default services;
