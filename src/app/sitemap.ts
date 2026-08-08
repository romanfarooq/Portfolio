import type { MetadataRoute } from "next";

import { locales, localePathnames } from "@/i18n/routing";

const SITE_URL = "https://romanfarooq.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${SITE_URL}${localePathnames[locale]}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1
  }));
}
