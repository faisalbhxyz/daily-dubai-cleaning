import type { MetadataRoute } from "next";
import { getAllPosts, blogPath } from "@/lib/blog";
import { locales } from "@/lib/i18n/config";
import { getAllServiceSlugs, getServiceImageBySlug, servicePath } from "@/lib/services";
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

  const homeEntries = locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1 : 0.9,
    images,
  }));

  const blogIndexEntries = locales.map((locale) => ({
    url: `${siteConfig.url}${blogPath(locale)}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const postEntries = getAllPosts().flatMap((post) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}${blogPath(locale, post.slug)}`,
      lastModified: new Date(post.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [`${siteConfig.url}${post.image}`],
    })),
  );

  const serviceEntries = getAllServiceSlugs().flatMap((slug) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}${servicePath(locale, slug)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${siteConfig.url}${getServiceImageBySlug(slug)}`],
    })),
  );

  return [...homeEntries, ...serviceEntries, ...blogIndexEntries, ...postEntries];
}
