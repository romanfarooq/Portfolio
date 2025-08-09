import * as Logos from "@/components/logos";
import * as Socials from "@/components/socials";

export interface Tag {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  title: string;
  image: string;
  tags: Tag[];
  description: string;
  subDescription: string[];
}

export interface Social {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Experience {
  title: string;
  job: string;
  date: string;
  contents: string[];
}

export interface Review {
  name: string;
  img: string;
  body: string;
  username: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const projects = [
  {
    title: "Dynamic Menu",
    description:
      "A mobile app that uses AI (GPT-4o) to generate custom recipes from user diets. Built with React Native (Expo), TypeScript, Supabase, and Express. Features freemium access, paywalled premium tools, and a modular, responsive UI.",
    subDescription: [
      "Built with React Native (Expo) and TypeScript for cross-platform mobile development.",
      "Supabase used for authentication and backend services.",
      "Integrated GPT-4o API for AI-powered diet analysis and recipe generation.",
      "Freemium model with paywalled premium features and modular architecture.",
      "Responsive UI, simple text input, and future-ready for weekly menus/history.",
    ],
    image: "/assets/projects/dynamic-menu.webp",
    tags: [
      { name: "React", icon: Logos.React },
      { name: "Expo", icon: Logos.Expo },
      { name: "TypeScript", icon: Logos.TypeScript },
      { name: "React Query", icon: Logos.TanStackQuery },
      { name: "Express.js", icon: Logos.ExpressJS },
      { name: "Stripe", icon: Logos.Stripe },
      { name: "GPT-4o", icon: Logos.ChatGPT },
    ],
  },
  {
    title: "Threado Studio",
    description:
      "A web-based 3D clothing customizer enabling users to design apparel by applying and manipulating decals on 3D models.",
    subDescription: [
      "Built with Next.js and integrated Three.js using react-three-fiber for 3D rendering.",
      "Implemented real-time image/text decal placement with drag, resize, and rotate functionalities.",
      "Managed application state using Zustand for reactive and modular state management.",
      "Styled with Tailwind CSS, providing a modern and responsive UI.",
      "Included interactive dashboard with color pickers and text formatting tools for personalization.",
    ],
    image: "/assets/projects/threado.webp",
    tags: [
      { name: "Next.js", icon: Logos.NextJS },
      { name: "Three.js", icon: Logos.ThreeJS },
      { name: "TailwindCSS", icon: Logos.TailwindCSS },
      { name: "Zustand", icon: Logos.Zustand },
    ],
  },
  {
    title: "TrendTale",
    description:
      "A web/mobile app that scrapes Google Trends and generates YouTube content using GPT-4.",
    subDescription: [
      "Built with FastAPI and React for the web, React Native for mobile.",
      "Used OpenAI GPT-4 API for generating YouTube content and metadata.",
      "Integrated advanced filters and authentication system.",
      "Styled with Tailwind CSS, used Axios and Framer Motion for UI animations.",
    ],
    image: "/assets/projects/trend-tale.webp",
    tags: [
      { name: "React", icon: Logos.React },
      { name: "FastAPI", icon: Logos.FastAPI },
      { name: "React Native", icon: Logos.Expo },
      { name: "TailwindCSS", icon: Logos.TailwindCSS },
      { name: "GPT-4", icon: Logos.ChatGPT },
    ],
  },
  {
    title: "Ease-GPT Chrome Extension",
    description:
      "A Chrome extension enhancing ChatGPT with smart features and premium options.",
    subDescription: [
      "Implemented custom variables, smart search, and tabbed chat UI.",
      "Integrated Google Analytics for usage tracking and QA.",
      "Added in-app purchases for premium features and context persistence.",
    ],
    image: "/assets/projects/ease-gpt.webp",
    tags: [
      { name: "JavaScript", icon: Logos.JavaScript },
      { name: "Chrome Extension", icon: Logos.Chrome },
      { name: "Google Analytics", icon: Logos.GoogleAnalytics },
    ],
  },
  {
    title: "Sweepstakes Betting Website",
    description:
      "A prediction market platform for college basketball with sweepstakes-style betting.",
    subDescription: [
      "Built with React and Tailwind with Shadcn UI for responsive design.",
      "React frontend using TanStack Query, Chart.js, and Firebase Auth.",
      "Integrated Stripe and Coinbase for fiat and crypto payments.",
    ],
    image: "/assets/projects/sweep-stakes.webp",
    tags: [
      { name: "React", icon: Logos.React },
      { name: "TanStack Query", icon: Logos.TanStackQuery },
      { name: "TailwindCSS", icon: Logos.TailwindCSS },
      { name: "Stripe", icon: Logos.Stripe },
      { name: "Firebase", icon: Logos.Firebase },
    ],
  },
  {
    title: "Sweepstakes Admin Panel",
    description:
      "Admin dashboard for managing bets, users, and analytics in the sweepstakes platform.",
    subDescription: [
      "Implemented role-based admin access with Django Admin and SQL for data management.",
      "Built real-time analytics dashboards using Chart.js.",
      "Integrated Firebase Auth for secure admin login.",
    ],
    image: "/assets/projects/sweep-stakes-admin.webp",
    tags: [
      { name: "Django", icon: Logos.Django },
      { name: "React", icon: Logos.React },
      { name: "Chart.js", icon: Logos.Chartjs },
      { name: "Firebase", icon: Logos.Firebase },
    ],
  },
  {
    title: "AutoHub360",
    description:
      "Next.js application for car accessories search and auctions with real-time updates.",
    subDescription: [
      "Scraped car accessory data using Cheerio and Puppeteer, caching results.",
      "Developed auction system with Socket.io for live bidding and notifications.",
      "Deployed on DigitalOcean Droplet with Nginx and SSL configuration.",
    ],
    image: "/assets/projects/auto-hub360.webp",
    tags: [
      { name: "Next.js", icon: Logos.NextJS },
      { name: "Socket.io", icon: Logos.SocketIO },
      { name: "Puppeteer", icon: Logos.Puppeteer },
      { name: "Cheerio", icon: Logos.Cheerio },
    ],
  },
  {
    title: "Scottish Ashna Ashri Foundation",
    description:
      "Admin panel and backend for an Islamic non-profit with media library and donation features.",
    subDescription: [
      "Built with React and Express.js, using MongoDB and GridFS for media storage.",
      "Integrated Stripe, Google Pay, and Apple Pay for donations.",
      "Added Islamic calendar and prayer time calculations based on user location.",
    ],
    image: "/assets/projects/saaf.webp",
    tags: [
      { name: "React", icon: Logos.React },
      { name: "Express.js", icon: Logos.ExpressJS },
      { name: "MongoDB", icon: Logos.MongoDB },
      { name: "Stripe", icon: Logos.Stripe },
    ],
  },
  {
    title: "Black Pearls Website Redesign",
    description:
      "A project to transition a MEP contracting firm's website from WordPress to React, enhancing performance, animations, and localization in English and Arabic using i18next.",
    subDescription: [
      "Migrated site from WordPress to React and Tailwind CSS for improved performance.",
      "Implemented animations using Framer Motion for engaging UI transitions.",
      "Configured localization support in English and Arabic via i18next.",
      "Utilized React Icons for interactive elements and modern UI practices.",
    ],
    image: "/assets/projects/black-pearls.webp",
    tags: [
      { name: "React", icon: Logos.React },
      { name: "TailwindCSS", icon: Logos.TailwindCSS },
      { name: "i18next", icon: Logos.I18next },
      { name: "Framer Motion", icon: Logos.Motion },
    ],
  },
  {
    title: "Sirius.Net.Co Mailer",
    description:
      "Email campaign manager with bulk email, template editor, and secure login.",
    subDescription: [
      "Built with Next.js, Prisma, PostgreSQL, and NextAuth.",
      "Used React Quill for email editing and React Email for templating.",
      "Integrated two-factor authentication and Excel file import for recipient list.",
    ],
    image: "/assets/projects/mailer.webp",
    tags: [
      { name: "Next.js", icon: Logos.NextJS },
      { name: "Prisma", icon: Logos.Prisma },
      { name: "PostgreSQL", icon: Logos.PostgreSQL },
      { name: "React Quill", icon: Logos.ReactQuill },
    ],
  },
  {
    title: "CarCare Pro",
    description:
      "A mobile application aimed at revolutionizing vehicle maintenance for car owners.",
    subDescription: [
      "Manages service history, workshop recommendations, and secure history sharing.",
      "Developed using Flutter and Firebase for Android platform.",
      "Integrated Google Maps to locate workshops and predict maintenance with ML.",
      "Designed a user-friendly dashboard for maintenance reminders.",
    ],
    image: "/assets/projects/car-care-pro.webp",
    tags: [
      { name: "Flutter", icon: Logos.Flutter },
      { name: "Firebase", icon: Logos.Firebase },
      { name: "Google Maps", icon: Logos.GoogleMaps },
      { name: "Machine Learning", icon: Logos.AI },
    ],
  },
];

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/romanfarooq",
    icon: Socials.Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/roman-farooq",
    icon: Socials.LinkedIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/roman_farooq",
    icon: Socials.Instagram,
  },
];


export const reviews = [
  {
    name: "Adeel Ahmed",
    username: "@adeel_ahmed23",
    body: "Maintenance reminders and Google Maps integration work flawlessly.",
    img: "https://robohash.org/adeelahmed",
  },
  {
    name: "Mariam Khan",
    username: "@mariam.khan88",
    body: "The admin panel is rock-solid; managing donations and media uploads is easy.",
    img: "https://robohash.org/mariamnk",
  },
  {
    name: "Diego Ramirez",
    username: "@d.ramirez_91",
    body: "GPT-4 content generation blew us away; FastAPI backend and React frontend are clean and fast.",
    img: "https://robohash.org/diegoramirez",
  },
  {
    name: "Clara Dupont",
    username: "@clara_dupontFR",
    body: "AutoHub360 auctions run seamlessly with real-time updates.",
    img: "https://robohash.org/claradupont",
  },
  {
    name: "Ahmed Siddiqui",
    username: "@ahmed_siddiqi_7",
    body: "Mailer transformed our campaigns; bulk sends, templates, and 2FA work perfectly.",
    img: "https://robohash.org/ahmedsiddiqui",
  },
  {
    name: "Aria Thompson",
    username: "@ariathompsonX",
    body: "Admin Panel is intuitive with role-based controls and Chart.js analytics.",
    img: "https://robohash.org/ariathompson",
  },
  {
    name: "Mei Chen",
    username: "@mei.chen_1995",
    body: "Ease-GPT Chrome Extension's smart search and tabbed chats work flawlessly.",
    img: "https://robohash.org/meichen",
  },
  {
    name: "Kai Anderson",
    username: "@kai_anderson_07",
    body: "Portfolio built with Next.js and Tailwind is sleek, responsive, and easy to maintain.",
    img: "https://robohash.org/kaianderson",
  },
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
  { name: "docker", icon: Logos.Docker },
];
