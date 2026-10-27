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

export const educations = [
  {
    id: "ucp",
    institution: "bachelors.institute",
    logo: "/assets/images/ucp.webp",
    href: "https://ucp.edu.pk/",
    location: "location",
    degrees: [{ id: "bachelors", start: "2020-10", end: "2024-07" }]
  },
  {
    id: "punjabCollege",
    institution: "intermediate.institute",
    logo: "/assets/images/punjab-colleges.webp",
    href: "https://pgc.edu/",
    location: "location",
    degrees: [{ id: "intermediate", start: "2018-09", end: "2020-06" }]
  },
  {
    id: "punjabSchool",
    institution: "matriculation.institute",
    logo: "/assets/images/punjab-school.webp",
    href: "https://www.thepunjabschool.edu.pk/",
    location: "location",
    degrees: [{ id: "matriculation", start: "2016-03", end: "2018-05" }]
  }
] as const;

export const experiences = [
  {
    id: "limelight",
    logo: "/assets/images/limelight.webp",
    company: "limelight.company",
    href: "https://www.limelight.pk/",
    employment: "fullTime",
    workplace: "onSite",
    positions: [{ id: "limelight", start: "2026-09", end: null }]
  },
  {
    id: "suparco",
    logo: "/assets/images/suparco.webp",
    company: "suparco.company",
    href: "https://suparco.gov.pk/",
    employment: "internship",
    workplace: "onSite",
    positions: [{ id: "suparco", start: "2025-11", end: "2026-05" }]
  },
  {
    id: "vixels",
    logo: "/assets/images/vixels.webp",
    company: "vixels.company",
    href: "https://vixels.dev/",
    employment: "fullTime",
    workplace: "onSite",
    positions: [
      { id: "vixelsEngineer", start: "2025-03", end: "2025-11" },
      { id: "vixelsAssociate", start: "2024-09", end: "2025-02" }
    ]
  },
  {
    id: "pepsico",
    logo: "/assets/images/pepsico.webp",
    company: "pepsico.company",
    href: "https://www.pepsico.com/",
    employment: "internship",
    workplace: "hybrid",
    positions: [{ id: "pepsico", start: "2024-07", end: "2024-08" }]
  }
] as const;

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
