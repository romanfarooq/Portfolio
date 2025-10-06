import type { Metadata, Viewport } from "next";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Funnel_Display } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";

import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: Omit<PageProps<"/[locale]">, "searchParams">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://romanfarooq.vercel.app"),
    authors: [{ name: "Roman Farooq", url: "https://github.com/romanfarooq" }],
    creator: "Roman Farooq",
    publisher: "Roman Farooq",
    keywords: t.raw("keywords"),
    generator: "Next.js",
    manifest: "/manifest.webmanifest",
    assets: ["/assets", "/draco", "/models"],
    pinterest: {
      richPin: true
    },
    appleWebApp: {
      capable: true,
      title: t("title"),
      statusBarStyle: "black-translucent"
    },
    alternates: {
      canonical: "https://romanfarooq.vercel.app/",
      languages: {
        "en-US": "/en",
        "zh-CN": "/zh"
      }
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
      shortcut: "/favicon.ico"
    },
    openGraph: {
      type: "website",
      countryName: "Pakistan",
      emails: ["romanfarooq@outlook.com"],
      locale: locale === "en" ? "en_US" : "zh_CN",
      url: "https://romanfarooq.vercel.app",
      title: t("openGraphTitle"),
      siteName: t("openGraphSiteName"),
      description: t("openGraphDescription"),
      images: [
        {
          url: "/assets/images/roman.webp",
          width: 1200,
          height: 630,
          alt: "Roman Farooq"
        }
      ]
    },
    applicationName: t("applicationName"),
    category: t("category"),
    classification: t("classification"),
    referrer: "origin-when-cross-origin",
    formatDetection: {
      date: false,
      email: false,
      address: false,
      telephone: false
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/assets/images/roman.webp"],
      site: "@TheRomanFarooq",
      creator: "@TheRomanFarooq"
    },
    verification: {
      google: "kp1SzfMW4-YoGuTNP3YrE5AzIZ9lAfpXXmocVTl5zVg",
      yandex: "b13e5b1aac4144f0",
      me: "mailto:romanfarooq@outlook.com"
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      noimageindex: false,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
      googleBot: {
        index: true,
        follow: true,
        nocache: false,
        noimageindex: false,
        "max-snippet": -1,
        "max-video-preview": -1,
        "max-image-preview": "large"
      }
    },
    other: {
      github: "https://github.com/romanfarooq",
      instagram: "https://instagram.com/roman_farooq",
      linkedin: "https://linkedin.com/in/roman-farooq"
    }
  };
}

export function generateViewport(): Viewport {
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
    interactiveWidget: "resizes-visual"
  };
}

const funnelDisplay = Funnel_Display({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

export default async function RootLayout({
  params,
  children
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body
        className={cn(
          funnelDisplay.className,
          "bg-primary overflow-x-hidden antialiased"
        )}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
