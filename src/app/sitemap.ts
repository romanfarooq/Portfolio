import type { MetadataRoute } from "next";

import { localePathnames, locales } from "@/i18n/routing";

const siteUrl = "https://romanfarooq.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}${localePathnames[locale]}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1
  }));
}
