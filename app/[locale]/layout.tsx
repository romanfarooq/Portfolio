import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Funnel_Display } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";

import "../globals.css";

interface PageParams {
  params: Promise<{ locale: string }>;
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://roman-farooq-portfolio.vercel.app"),
    authors: [{ name: "Roman Farooq", url: "https://github.com/romanfarooq" }],
    creator: "Roman Farooq",
    publisher: "Roman Farooq",
    keywords: t.raw("keywords"),
    alternates: {
      canonical: "https://roman-farooq-portfolio.vercel.app/",
      languages: {
        "en-US": "/en",
        "zh-CN": "/zh",
      },
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "zh_CN",
      url: "https://roman-farooq-portfolio.vercel.app",
      title: t("openGraphTitle"),
      siteName: t("openGraphSiteName"),
      description: t("openGraphDescription"),
      images: [
        {
          url: "/assets/images/roman.webp",
          width: 1200,
          height: 630,
          alt: "Roman Farooq",
        },
      ],
    },
    applicationName: t("applicationName"),
    category: t("category"),
    classification: t("classification"),
    referrer: "origin-when-cross-origin",
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
      date: false,
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/assets/images/roman.webp"],
      site: "@RomanDev92",
      creator: "@RomanDev92",
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
        "max-snippet": -1,
        "max-video-preview": -1,
        "max-image-preview": "large",
      },
    },
    other: {
      github: "https://github.com/romanfarooq",
      linkedin: "https://linkedin.com/in/roman-farooq",
      instagram: "https://instagram.com/roman_farooq",
      email: "romanfarooq@outlook.com",
      location: "Lahore, Pakistan",
    },
  };
}

export function generateViewport() {
  return {
    themeColor: "#030412",
    colorScheme: "dark",
    width: "device-width",
    height: "device-height",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
    interactiveWidget: "resizes-visual",
  };
}

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={`${funnelDisplay.variable} bg-primary overflow-x-hidden antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
