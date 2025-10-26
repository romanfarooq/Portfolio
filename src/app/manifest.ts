import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Roman Farooq's AI & Software Engineering Portfolio",
    short_name: "Roman Farooq - Portfolio",
    description: "Roman Farooq is an AI-focused software engineer and data science enthusiast dedicated to building intelligent, data-driven, and scalable solutions. Specializing in Python, React, Next.js, and modern machine learning integrations, Roman delivers innovative applications combining advanced analytics with user-focused design.",
    lang: "en-US",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#030412",
    theme_color: "#030412",
    orientation: "portrait-primary",
    categories: ["portfolio", "developer", "technology"],
    icons: [
      {
        src: "/assets/images/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/assets/images/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
