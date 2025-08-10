import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      userAgent: "*",
    },
    sitemap: "https://roman-farooq-portfolio.vercel.app/sitemap.xml",
  };
}
