import type { Metadata, Viewport } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Roman Farooq's Portfolio",
  description:
    "Roman Farooq is a full-stack web developer with a passion for building beautiful and functional websites.",
  metadataBase: new URL("https://roman-farooq-portfolio.vercel.app"),
  authors: [{ name: "Roman Farooq", url: "https://github.com/romanfarooq" }],
  creator: "Roman Farooq",
  publisher: "Roman Farooq",
  keywords: [
    "Roman Farooq",
    "web developer",
    "full-stack developer",
    "frontend developer",
    "backend developer",
    "mobile app developer",
    "software engineer",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roman-farooq-portfolio.vercel.app",
    title: "Roman Farooq's Portfolio",
    description:
      "Roman Farooq is a full-stack web developer with a passion for building beautiful and functional websites.",
    siteName: "Roman Farooq's Portfolio",
    images: [
      {
        url: "/assets/images/roman.webp",
        width: 1200,
        height: 630,
        alt: "Roman Farooq",
      },
    ],
  },
  applicationName: "Roman Farooq's Portfolio",
  category: "Portfolio",
  classification: "Portfolio, Web Development, Software Engineering",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
    date: false,
  },
  twitter: {
    card: "summary_large_image",
    site: "Roman Farooq Portfolio",
    title: "Roman Farooq's Portfolio",
    description:
      "Roman Farooq is a full-stack web developer with a passion for building beautiful and functional websites.",
    images: ["/assets/images/roman.webp"],
    creator: "@TheRomanFarooq",
  },
  verification: {
    google: "kp1SzfMW4-YoGuTNP3YrE5AzIZ9lAfpXXmocVTl5zVg",
    yandex: "b13e5b1aac4144f0",
    me: "mailto:theromanfarooq@gmail.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    github: "https://github.com/romanfarooq",
    linkedin: "https://linkedin.com/in/roman-farooq",
    instagram: "https://instagram.com/roman_farooq",
  },
};

export const viewport: Viewport = {
  themeColor: "#02020B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${funnelDisplay.variable} overflow-x-hidden bg-[#030412] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
