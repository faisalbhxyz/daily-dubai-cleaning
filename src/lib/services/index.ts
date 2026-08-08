import { siteConfig, services, serviceSlug } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import { serviceDetailsAr } from "./ar";
import { serviceDetailsEn } from "./en";
import type { ServiceDetail } from "./types";

export type { ServiceDetail, ServiceProcessStep } from "./types";

const detailsByLocale: Record<Locale, ServiceDetail[]> = {
  en: serviceDetailsEn,
  ar: serviceDetailsAr,
};

export function getServiceDetails(locale: Locale): ServiceDetail[] {
  return detailsByLocale[locale];
}

export function getServiceDetailBySlug(
  locale: Locale,
  slug: string,
): ServiceDetail | undefined {
  return detailsByLocale[locale].find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => serviceSlug(service.title));
}

export function getServiceIndexBySlug(slug: string): number {
  return services.findIndex((service) => serviceSlug(service.title) === slug);
}

export function getServiceImageBySlug(slug: string): string {
  const index = getServiceIndexBySlug(slug);
  return services[index]?.image ?? services[0].image;
}

export function servicePath(locale: Locale, slug: string) {
  return `/${locale}/services/${slug}`;
}

export function buildServiceJsonLd(
  detail: ServiceDetail,
  locale: Locale,
  title: string,
  description: string,
  included: string[],
) {
  const url = `${siteConfig.url}${servicePath(locale, detail.slug)}`;
  const imageUrl = `${siteConfig.url}${getServiceImageBySlug(detail.slug)}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteConfig.url}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteConfig.url}/${locale}#services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: url,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: title,
        description,
        image: imageUrl,
        url,
        serviceType: title,
        areaServed: {
          "@type": "City",
          name: "Dubai",
        },
        provider: {
          "@type": "LocalBusiness",
          "@id": `${siteConfig.url}/#business`,
          name: siteConfig.name,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          url: siteConfig.url,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: title,
          itemListElement: included.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item,
            },
          })),
        },
      },
    ],
  };
}
