import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Flame } from "lucide-react";

export const DATA = {
  name: "Kedar Bargule",
  initials: "KB",
  url: "https://kedarbargule.dev",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "IT Engineering Student passionate about building web applications. Currently learning and creating with React, Next.js, and TypeScript.",
  summary:
    "I'm a final year B.E. Information Technology student at [Dr. D. Y. Patil Institute of Technology, Pune](/#education). I enjoy building modern web applications and exploring new technologies. When I'm not coding, you can find me learning about system design or contributing to open source projects.",
  avatarUrl: "/berserk.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SpiritOfKedar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kedar-bargule-55053b346/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/spiritofkedar",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [],
  education: [
    {
      school: "Dr. D. Y. Patil Institute of Technology, Pimpri, Pune-18",
      href: "https://engg.dypvp.edu.in/",
      degree: "Bachelor of Engineering (Information Technology)",
      logoUrl: "/dpu.jpeg",
      start: "2023",
      end: "2026",
    },
    {
      school: "Government Polytechnic Amravati",
      href: "https://www.gpamravati.ac.in/gpamravati_new/",
      degree: "Diploma in Chemical Engineering",
      logoUrl: "/gpa.jpeg",
      start: "2020",
      end: "2023",
    },
    {
      school: "Savitribai Phule Vidyalaya, Kalamb",
      href: "https://schools.org.in/osmanabad/27290204120/savitribai-phule-highschool-kallamb.html",
      degree: "Secondary Education",
      logoUrl: "",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Nerva.ai",
      href: "https://github.com/SpiritOfKedar/Nerva.ai",
      dates: "Nov 2024 - Present",
      active: true,
      description:
        "An AI-powered mental health companion providing empathetic support and guidance for emotional well-being. Features intelligent conversations, mood tracking, and therapeutic activities powered by Google Gemini.",
      technologies: [
        "Next.js 15",
        "React 19",
        "Express.js",
        "MongoDB",
        "Google Gemini AI",
        "TailwindCSS",
        "Framer Motion",
        "Inngest",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SpiritOfKedar/Nerva.ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Spirit Search",
      href: "https://github.com/SpiritOfKedar/spiritsearch",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "An intelligent AI-powered deep research platform that conducts comprehensive, iterative research on any topic. Uses multi-stage pipelines to analyze, synthesize, and generate detailed reports with citations.",
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Groq API",
        "Exa AI",
        "Vercel AI SDK",
        "TailwindCSS 4",
        "Zustand",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SpiritOfKedar/spiritsearch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Personal Portfolio",
      href: "https://kedarbargule.dev",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "A modern, minimalist portfolio website built with Next.js 14, showcasing projects, skills, and professional experience with smooth animations and dark mode support.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://kedarbargule.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kedarbargule/portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Task Manager App",
      href: "https://github.com/kedarbargule/task-manager",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "A full-stack task management application with real-time updates, user authentication, and collaborative features. Built with a focus on productivity and user experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kedarbargule/task-manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
