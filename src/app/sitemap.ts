import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
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

  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1 : 0.9,
    images,
  }));
}
