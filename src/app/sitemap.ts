import type { MetadataRoute } from "next";
import { services, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const images = [
    ...new Set([
      `${siteConfig.url}/logo.png`,
      `${siteConfig.url}/images/cleaner-hero.jpeg`,
      ...services.map((service) => `${siteConfig.url}${service.image}`),
    ]),
  ];

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images,
    },
  ];
}
