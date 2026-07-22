import type { MetadataRoute } from "next";
import { getDictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  const dict = getDictionary("en");

  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: dict.meta.description,
    start_url: "/en",
    display: "standalone",
    background_color: "#f7faf8",
    theme_color: "#009739",
    lang: "en-AE",
    categories: ["business", "lifestyle"],
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
