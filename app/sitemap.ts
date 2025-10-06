import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://romanfarooq.vercel.app/en",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://romanfarooq.vercel.app/zh",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
