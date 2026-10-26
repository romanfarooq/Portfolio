import { Funnel_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata, Viewport } from "next";

import { cn } from "@/lib/utils";
import { routing, isRtlLocale, localePathnames } from "@/i18n/routing";

import "@/styles/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("metadata");

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
    assets: ["/draco", "/models", "/assets"],
    pinterest: {
      richPin: true
    },
    appleWebApp: {
      capable: true,
      title: t("title"),
      statusBarStyle: "black-translucent"
    },
    alternates: {
      canonical: localePathnames[locale],
      languages: localePathnames
    },
    openGraph: {
      type: "website",
      countryName: "Pakistan",
      emails: ["theromanfarooq@gmail.com"],
      locale: locale,
      url: localePathnames[locale],
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
      yandex: "854875a833bcda72",
      me: "mailto:theromanfarooq@gmail.com"
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
  children
}: LayoutProps<"/[locale]">) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      dir={isRtlLocale(locale) ? "rtl" : "ltr"}
    >
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
