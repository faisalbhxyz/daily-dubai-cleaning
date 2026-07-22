import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import {
  faqs,
  seoKeywords,
  serviceAreas,
  services,
  siteConfig,
} from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...seoKeywords],
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
    canonical: "/",
    languages: {
      "en-AE": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Best Cleaning Services in Dubai – ${siteConfig.name}`,
    description:
      "Expert residential and commercial cleaning across Dubai with trained professionals and guaranteed satisfaction.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Cleaning Services in Dubai – ${siteConfig.name}`,
    description:
      "Home, villa, office, and deep cleaning across Dubai. Call or WhatsApp for a free quote.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en-AE",
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
      description: siteConfig.description,
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
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "20:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cleaning Services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            image: `${siteConfig.url}${service.image}`,
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
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: faqs.map((faq) => ({
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE" className={`${montserrat.variable} h-full`}>
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
