import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Roman Farooq | Software Engineer",
    short_name: "Roman Farooq - Portfolio",
    description:
      "Software Engineer building web, mobile, and data applications with a direction in embedded systems, space technology, and Earth observation.",
    lang: "en-US",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#030412",
    theme_color: "#030412",
    orientation: "portrait-primary",
    categories: ["portfolio", "developer", "technology", "engineering"],
    icons: [
      {
        src: "/icon3.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icon4.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
