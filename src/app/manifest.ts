import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Roman Farooq's AI, Software & Space Technology Portfolio",
    short_name: "Roman Farooq - Portfolio",
    description: "Roman Farooq is a Software and AI Engineer focused on RF systems, satellite communication, GIS, remote sensing, space technology, and engineering software systems.",
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
