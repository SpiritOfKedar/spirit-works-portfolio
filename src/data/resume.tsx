import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Flame } from "lucide-react";

export const DATA = {
  name: "Kedar Bargule",
  initials: "KB",
  url: "https://kedarbargule.dev",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Building high-performance systems with Go, C++, and TypeScript. I turn complex problems into elegant code.",
  summary:
    "I like building things from the ground up. Systems programming, full-stack apps, low-level stuff. When the code compiles, you'll find me deep in anime (Berserk is peak) or nerding out over system design.",
  avatarUrl: "/kedar_profile.jpg",
  resumeUrl: "https://drive.google.com/file/d/1GZPB1lWZO3cxzq5Yn7NLthZpkeSRYpFL/view?usp=sharing",
  skills: [
    "Go",
    "C++",
    "TypeScript",
    "React",
    "Next.js",
    "Qt/QML",
    "MongoDB",
    "Docker",
    "TailwindCSS",
    "Express.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: Flame, label: "Projects" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact@kedarworks.xyz",
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
        url: "mailto:contact@kedarworks.xyz",
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
      title: "Spirit Checker",
      href: "https://spirit-checker.vercel.app/",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "ATS Resume Checker with microservices architecture. Go backend with Fiber handles PDF/DOCX parsing, TF-IDF similarity scoring, and skill extraction. Generates weighted compatibility scores with actionable feedback.",
      technologies: [
        "Go",
        "Fiber",
        "Next.js 15",
        "TypeScript",
        "TailwindCSS",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://spirit-checker.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SpiritOfKedar/spirit-checker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/spirit-checker-preview.png",
      video: "",
    },
    {
      title: "Spirit Player",
      href: "https://github.com/SpiritOfKedar/spirit-player",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "Lightweight Linux video player built with C++17, Qt 6 (QML), and libmpv. Hardware-accelerated rendering via custom QQuickFramebufferObject with OpenGL sync. Supports Wayland/X11, subtitles, and resume playback.",
      technologies: [
        "C++17",
        "Qt 6",
        "QML",
        "libmpv",
        "OpenGL",
        "CMake",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SpiritOfKedar/spirit-player",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/spirit-player-preview.png",
      video: "",
    },
    {
      title: "Alphonse",
      href: "https://github.com/SpiritOfKedar/alphonse",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "LSM-Tree storage engine in Go achieving 731k writes/sec. Implements WAL with CRC32 checksums, skip-list MemTable, SSTables with Bloom filters (1% FPR), and tiered compaction. 2,700 lines of code.",
      technologies: [
        "Go",
        "LSM-Tree",
        "WAL",
        "Bloom Filter",
        "Skip-List",
        "Compaction",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SpiritOfKedar/alphonse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/alphonse-architecture.png",
      video: "",
    },
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
          type: "Website",
          href: "https://nerva-ai-frontend.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SpiritOfKedar/Nerva.ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nerva-ai-preview.png",
      video: "",
    },
  ],
} as const;
