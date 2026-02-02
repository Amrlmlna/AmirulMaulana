export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  stack: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  images: string[];
  githubUrl?: string;
  downloadUrl?: string; // For APKs or Installers
  liveUrl?: string; // For live websites
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "cv-master",
    title: "CV MASTER",
    category: "Mobile AI Platform",
    stack: "Flutter, Dart, OpenAI API",
    year: "2024",
    description: "An AI-powered mobile application that generates professional, ATS-friendly resumes tailored to specific job descriptions. Built with Flutter for seamless cross-platform performance.",
    challenge: "Parsing unstructured job descriptions and mapping them to user experiences with high accuracy.",
    solution: "Fine-tuned LLM prompts and a robust PDF generation engine built natively in Dart.",
    images: ["/placeholder/cv-master-1.jpg"],
    githubUrl: "https://github.com/Amrlmlna/cv-master",
    // downloadUrl: "https://github.com/Amrlmlna/cv-master/releases/download/v1.0.0/app-release.apk",
  },
  {
    id: "02",
    slug: "meditrack",
    title: "MEDITRACK",
    category: "Healthcare Platform",
    stack: "Next.js, TypeScript, PostgreSQL",
    year: "2024",
    description: "A comprehensive healthcare management system designed for Indonesian medical facilities. Allows patients to track medical history and book consultations with specialists.",
    challenge: "Overcoming severe rate limits and incomplete documentation in the standard public healthcare API.",
    solution: "Reverse-engineered undocumented government API endpoints to aggregated real-time bed availability and hospital metadata.",
    images: ["/placeholder/meditrack-1.jpg"],
    githubUrl: "https://github.com/Amrlmlna/meditrack",
  },
  {
    id: "03",
    slug: "ternary",
    title: "TERNARY",
    category: "AI Desktop Tool",
    stack: "Electron, TypeScript, Local LLM",
    year: "2023",
    description: "A privacy-first, local AI app builder. It runs entirely on the user's machine, allowing for secure, offline AI development similar to Lovable or v0 but private.",
    challenge: "Orchestrating local model inference without blocking the UI thread.",
    solution: "Offloaded inference to background worker threads and optimized IPC communication in Electron.",
    images: ["/Ternary.png"],
    githubUrl: "https://github.com/TernaryStudio/Ternary",
    downloadUrl: "https://ternary-pre-domain.vercel.app/",
  },
  {
    id: "04",
    slug: "nirmala",
    title: "NIRMALA",
    category: "IoT Ecosystem",
    stack: "Flutter, MQTT, C++",
    year: "2023",
    description: "An integrated IoT mobile application for smart village monitoring. 'Nirmala' connects sensors and control modules for real-time environmental tracking.",
    challenge: "Maintaining stable connections with low-power microcontroller devices in remote areas.",
    solution: "Built a resilient MQTT broker architecture with offline-first data caching in the mobile app.",
    images: ["/Nirmala.png"],
  },
  {
    id: "05",
    slug: "Bahontobungku",
    title: "BAHONTOBUNGKU",
    category: "Goverment Web",
    stack: "React, Tailwind, Node.js, MySQL",
    year: "2023",
    description: "The official digital portal for Bahontobungku Village, designed to streamline public services and enhance government transparency. This platform serves as a central hub for administrative updates, tourism promotion, and community resources, bridging the gap between local leadership and residents.",
    challenge: "Overcoming the lack of digital infrastructure to provide centralized information and efficient public services for the community.",
    solution: "Developed a responsive full-stack web platform with a dynamic content management system, digitizing village records and enabling transparent communication between the government and citizens.",
    images: ["/Bahontobungku.png"],
    githubUrl: "https://github.com/RasyaRahmatSyaban/project-desa/graphs/contributors",
    liveUrl: "https://bahontobungku.cloud/",
  },
];
