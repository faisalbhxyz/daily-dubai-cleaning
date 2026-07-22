import type { Metadata } from "next";
import { Cairo, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import {
  defaultLocale,
  getDirection,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { serviceAreas, serviceImages, siteConfig } from "@/lib/site";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};

  const locale = raw;
  const dict = getDictionary(locale);
  const path = `/${locale}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} – ${dict.meta.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.description,
    keywords: [...dict.meta.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Cleaning Services",
    applicationName: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: path,
      languages: {
        "en-AE": "/en",
        "ar-AE": "/ar",
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.twitterDescription,
    },
    icons: {
      icon: [{ url: "/logo.png", type: "image/png" }, { url: "/favicon.ico" }],
      apple: "/logo.png",
      shortcut: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

function buildJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  const path = `/${locale}`;
  const inLanguage = locale === "ar" ? "ar-AE" : "en-AE";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}${path}`,
        name: siteConfig.name,
        description: dict.meta.description,
        inLanguage,
        publisher: { "@id": `${siteConfig.url}/#business` },
      },
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        image: [
          `${siteConfig.url}/logo.png`,
          `${siteConfig.url}/images/cleaner-hero.jpeg`,
        ],
        logo: `${siteConfig.url}/logo.png`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        url: siteConfig.url,
        description: dict.meta.description,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.2048,
          longitude: 55.2708,
        },
        areaServed: serviceAreas.map((area) => ({
          "@type": "Place",
          name: area,
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.rating,
          reviewCount: siteConfig.reviewCount,
          bestRating: "5",
          worstRating: "1",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: locale === "ar" ? "خدمات التنظيف" : "Cleaning Services",
          itemListElement: dict.services.items.map((service, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              image: `${siteConfig.url}${serviceImages[index]}`,
              provider: { "@id": `${siteConfig.url}/#business` },
              areaServed: {
                "@type": "City",
                name: "Dubai",
              },
            },
            position: index + 1,
          })),
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          areaServed: "AE",
          availableLanguage: ["English", "Arabic"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}${path}/#faq`,
        mainEntity: dict.faq.items.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw;
  const dir = getDirection(locale);
  const jsonLd = buildJsonLd(locale);
  const fontClass =
    locale === "ar"
      ? `${cairo.variable} ${montserrat.variable}`
      : montserrat.variable;

  return (
    <html lang={locale === "ar" ? "ar-AE" : "en-AE"} dir={dir} className={`${fontClass} h-full`}>
      <body className={`min-h-full antialiased${locale === "ar" ? " is-arabic" : ""}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
