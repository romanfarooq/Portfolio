import * as Logos from "@/components/logos";
import * as Socials from "@/components/socials";

export interface Tag {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  name: string;
  tags: Tag[];
  image: string;
}

export const educations = ["bachelors", "intermediate", "matriculation"];


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
