import * as Logos from "@/components/logos";
import * as Socials from "@/components/socials";

export interface Tag {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  id: string;
  tags: Tag[];
  image: string;
}

export const projects = [
  {
    id: "dynamicMenu",
    image: "/assets/projects/dynamic-menu.webp",
    tags: [
      { name: "React", icon: Logos.React },
      { name: "Expo", icon: Logos.Expo },
      { name: "TypeScript", icon: Logos.TypeScript },
      { name: "React Query", icon: Logos.TanStackQuery },
      { name: "Express.js", icon: Logos.ExpressJS },
      { name: "Stripe", icon: Logos.Stripe },
      { name: "GPT-4o", icon: Logos.ChatGPT }
    ]
  },
  {
    id: "threadoStudio",
    image: "/assets/projects/threado.webp",
    tags: [
      { name: "Next.js", icon: Logos.NextJS },
      { name: "Three.js", icon: Logos.ThreeJS },
      { name: "TailwindCSS", icon: Logos.TailwindCSS },
      { name: "Zustand", icon: Logos.Zustand }
    ]
  },
  {
    id: "trendTale",
    image: "/assets/projects/trend-tale.webp",
    tags: [
      { name: "React", icon: Logos.React },
      { name: "FastAPI", icon: Logos.FastAPI },
      { name: "React Native", icon: Logos.Expo },
      { name: "TailwindCSS", icon: Logos.TailwindCSS },
      { name: "GPT-4", icon: Logos.ChatGPT }
    ]
  },
  {
    id: "easeGPT",
    image: "/assets/projects/ease-gpt.webp",
    tags: [
      { name: "JavaScript", icon: Logos.JavaScript },
      { name: "Chrome Extension", icon: Logos.Chrome },
      { name: "Google Analytics", icon: Logos.GoogleAnalytics }
    ]
  },
  {
    id: "sweepstakesBetting",
    image: "/assets/projects/sweep-stakes.webp",
    tags: [
      { name: "React", icon: Logos.React },
      { name: "TanStack Query", icon: Logos.TanStackQuery },
      { name: "TailwindCSS", icon: Logos.TailwindCSS },
      { name: "Stripe", icon: Logos.Stripe },
      { name: "Firebase", icon: Logos.Firebase }
    ]
  },
  {
    id: "sweepstakesAdmin",
    image: "/assets/projects/sweep-stakes-admin.webp",
    tags: [
      { name: "Django", icon: Logos.Django },
      { name: "React", icon: Logos.React },
      { name: "Chart.js", icon: Logos.Chartjs },
      { name: "Firebase", icon: Logos.Firebase }
    ]
  },
  {
    id: "autoHub360",
    image: "/assets/projects/auto-hub360.webp",
    tags: [
      { name: "Next.js", icon: Logos.NextJS },
      { name: "Socket.io", icon: Logos.SocketIO },
      { name: "Puppeteer", icon: Logos.Puppeteer },
      { name: "Cheerio", icon: Logos.Cheerio }
    ]
  },
  {
    id: "saaf",
    image: "/assets/projects/saaf.webp",
    tags: [
      { name: "React", icon: Logos.React },
      { name: "Express.js", icon: Logos.ExpressJS },
      { name: "MongoDB", icon: Logos.MongoDB },
      { name: "Stripe", icon: Logos.Stripe }
    ]
  },
  {
    id: "blackPearls",
    image: "/assets/projects/black-pearls.webp",
    tags: [
      { name: "React", icon: Logos.React },
      { name: "TailwindCSS", icon: Logos.TailwindCSS },
      { name: "i18next", icon: Logos.I18next },
      { name: "Framer Motion", icon: Logos.Motion }
    ]
  },
  {
    id: "mailer",
    image: "/assets/projects/mailer.webp",
    tags: [
      { name: "Next.js", icon: Logos.NextJS },
      { name: "Prisma", icon: Logos.Prisma },
      { name: "PostgreSQL", icon: Logos.PostgreSQL },
      { name: "React Quill", icon: Logos.ReactQuill }
    ]
  },
  {
    id: "carCarePro",
    image: "/assets/projects/car-care-pro.webp",
    tags: [
      { name: "Flutter", icon: Logos.Flutter },
      { name: "Firebase", icon: Logos.Firebase },
      { name: "Google Maps", icon: Logos.GoogleMaps },
      { name: "Machine Learning", icon: Logos.AI }
    ]
  }
];

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/romanfarooq",
    icon: Socials.Github
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/roman-farooq",
    icon: Socials.LinkedIn
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/roman_farooq",
    icon: Socials.Instagram
  }
];


export const education = ["bachelors", "intermediate", "matriculation"];

export const skills = [
  { name: "html5", icon: Logos.HTML5 },
  { name: "css3", icon: Logos.CSS3 },
  { name: "cplusplus", icon: Logos.CPlusPlus },
  { name: "git", icon: Logos.Git },
  { name: "github", icon: Logos.GitHub },
  { name: "stripe", icon: Logos.Stripe },
  { name: "expressjs", icon: Logos.ExpressJS },
  { name: "javascript", icon: Logos.JavaScript },
  { name: "typescript", icon: Logos.TypeScript },
  { name: "react", icon: Logos.React },
  { name: "redux", icon: Logos.Redux },
  { name: "tanstackquery", icon: Logos.TanStackQuery },
  { name: "expo", icon: Logos.Expo },
  { name: "vitejs", icon: Logos.ViteJS },
  { name: "nextjs", icon: Logos.NextJS },
  { name: "nodejs", icon: Logos.NodeJS },
  { name: "socketio", icon: Logos.SocketIO },
  { name: "flutter", icon: Logos.Flutter },
  { name: "tailwindcss", icon: Logos.TailwindCSS },
  { name: "bootstrap", icon: Logos.Bootstrap },
  { name: "threejs", icon: Logos.ThreeJS },
  { name: "material-ui", icon: Logos.MaterialUI },
  { name: "motion", icon: Logos.Motion },
  { name: "chartjs", icon: Logos.Chartjs },
  { name: "prisma", icon: Logos.Prisma },
  { name: "sql", icon: Logos.SQL },
  { name: "sqlite", icon: Logos.SQLite },
  { name: "postgresql", icon: Logos.PostgreSQL },
  { name: "mongodb", icon: Logos.MongoDB },
  { name: "firebase", icon: Logos.Firebase },
  { name: "flask", icon: Logos.Flask },
  { name: "fastapi", icon: Logos.FastAPI },
  { name: "django", icon: Logos.Django },
  { name: "python", icon: Logos.Python },
  { name: "docker", icon: Logos.Docker }
];
