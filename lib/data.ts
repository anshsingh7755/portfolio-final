import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
SiTypescript;
import {
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiBlockchaindotcom,
  SiCivicrm,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
//@ts-ignore
import Autobackend from "@/public/autobackend.png";
//@ts-ignore
import VV from "@/public/vangaurd_vogue.png";
//@ts-ignore
import SP from "@/public/sp.png";
//@ts-ignore
import IW from "@/public/iw.png";
import { color } from "framer-motion";
export const skillsDataMap = [
  { text: "CRM", icon: React.createElement(SiCivicrm), color: "#3178c6" },
  { text: "HTML", icon: React.createElement(FaHtml5), color: "#e34c26" },
  { text: "CSS", icon: React.createElement(FaCss3Alt), color: "#264de4" },
  {
    text: "JavaScript",
    icon: React.createElement(SiJavascript),
    color: "#f7df1e",
  },
  {
    text: "TypeScript",
    icon: React.createElement(SiTypescript),
    color: "#3178c6",
  },
  { text: "React", icon: React.createElement(FaReact), color: "#61dbfb" },
  {
    text: "React Native",
    icon: React.createElement(TbBrandReactNative),
    color: "#61dbfb",
  },
  { text: "Next.js", icon: React.createElement(SiNextdotjs), color: "#38bdf8" },
  { text: "Node.js", icon: React.createElement(FaNodeJs), color: "#68a063" },
  { text: "Git", icon: React.createElement(FaGitAlt), color: "#f34f29" },
  {
    text: "Tailwind",
    icon: React.createElement(SiTailwindcss),
    color: "#38b2ac",
  },
  { text: "Prisma", icon: React.createElement(SiPrisma), color: "#38bdf8" },
  { text: "MongoDB", icon: React.createElement(SiMongodb), color: "#4ea94b" },
  { text: "Redux", icon: React.createElement(SiRedux), color: "#764abc" },
  { text: "Express", icon: React.createElement(SiExpress), color: "#38bdf8" },
  { text: "SQL", icon: React.createElement(SiMysql), color: "#4479a1" },
  { text: "Python", icon: React.createElement(FaPython), color: "#3776ab" },
  {
    text: "Web3",
    icon: React.createElement(SiBlockchaindotcom),
    color: "#00a1d9",
  },
];
export const skills = Object.fromEntries(
  skillsDataMap.map((skill) => [skill.text.toLowerCase(), skill])
);
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full stack Developer Intern",
    company: "Brained",
    location: "Remote",
    description:
      "Developed resilient Restful APIs with NodeJS, adeptly managing MongoDB and SQL databases. Proficient in Git for efficient project management. Collaborated with cross-functional teams to integrate APIs with ReactJS and Redux frontend. Skilled in client communication, translating business needs into tech solutions.",
    icon: React.createElement(LuGraduationCap),
    date: "04/2021 - 10/2021",
  },
  {
    title: "Web Devleopment Intern",
    company: "The Sparks Foundation",
    location: "Remote",
    description:
      "Utilized MongoDB, Express, React, and Node.js to craft a dynamic application seamlessly integrating frontend and backend. Implemented RESTful APIs for efficient frontend-backend communication, enabling swift data retrieval and storage. Employed Git for version control to uphold codebase integrity",
    icon: React.createElement(LuGraduationCap),
    date: "11/2022 - 12/2022",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Refr",
    location: "Remote",
    description: `Built interactive, responsive pixel-perfect UIs for a complete
mobile app from scratch. Developed a social recommendation app that lets users earn
credits that can be used as cash in the app. Developed a vendor-side web app for businesses listed in the
social recommendation app.

`,
    icon: React.createElement(CgWorkAlt),
    date: "07/2023 - 10/2023",
  },
  {
    title: "Free Lancer",
    company: "Jash Agrawal Tech",
    location: "Remote",
    description: `As a freelancer, I utilized MongoDB, Express, React, and Node.js to create dynamic applications that seamlessly integrated frontend and backend functionality. Implemented RESTful APIs for efficient communication and employed Git for version control to ensure codebase integrity. I am open to new opportunities`,
    icon: React.createElement(FaReact),
    date: "08/2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AutoBackend",
    description:
      "I worked on this awesome startup project for 6 years.Where Users can automatically generate complete backend code with database queries",
    tags: [
      skills["react"],
      skills["redux"],
      skills["next.js"],
      skills["node.js"],
      skills["typescript"],
      skills["sql"],
      skills["tailwind"],
    ],
    imageUrl: Autobackend,
    link: "https://autobackend.vercel.app/",
  },
  {
    title: "Vangaurd Vogue",
    description:
      "Vanguard Vogue: Anime apparel e-commerce site. Collaborated closely with the client to craft a custom interface reflecting their unique style.",
    tags: [
      skills["react"],
      skills["redux"],
      skills["next.js"],
      skills["node.js"],
      skills["typescript"],
      skills["tailwind"],
    ],
    imageUrl: VV,
    link: "https://vangaurd-vogue.vercel.app/",
  },
  {
    title: "Ielts Wizardz",
    description:
      "Designed and built website for IELTS Wizardz, showcasing their comprehensive study abroad services and impressive track record of student success.",
    tags: [
      skills["react"],
      skills["crm"],
      skills["next.js"],
      skills["node.js"],
      skills["typescript"],
      skills["tailwind"],
    ],
    imageUrl: IW,
    link: "https://www.ieltswizardz.com/",
  },
  {
    title: "Surya Prakash Silk Mills",
    description:
      "Engineered a captivating website for Surya Prakash Silk Mills, meticulously presenting their exquisite range of products.",
    tags: [
      skills["react"],
      skills["next.js"],
      skills["node.js"],
      skills["typescript"],
      skills["tailwind"],
    ],
    imageUrl: SP,
    link: "https://suryaprakashsilkmills.com/",
  },
] as const;

export const descriptionData = `Hey there, I'm Jash Agrawal, a dedicated Full Stack Developer with a flair for JavaScript, React, Redux, NodeJs, and SQL. With a Bachelor's in Computer Engineering from the University Of Mumbai, I'm all about crafting solutions that make a difference.

Problem-solving is my jam. There's nothing quite like the rush of cracking a tough nut and finding the perfect solution.

Currently, I'm immersed in building a groundbreaking application that aims to revolutionize the way businesses connect with their customers. Picture this: a platform where businesses can list their stores and seamlessly transform our client app into their very own e-commerce powerhouse. Users can browse, order, book appointments, or dive into an educational adventure – all within one app. It's a game-changer, and I'm thrilled to be a part of it.

Outside of coding, you'll find me kicking a football around, hitting the gym, or diving into a gaming session. I believe in the mantra of 'work hard, party hard.'

If you're looking for someone to bring innovation and dedication to your team, or if you just want to chat about exciting opportunities, hit me up! Let's create something amazing together.`;
