import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { ServiceDetail } from "@/components/ServiceDetail";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import {
  buildServiceJsonLd,
  getAllServiceSlugs,
  getServiceDetailBySlug,
  getServiceImageBySlug,
  getServiceIndexBySlug,
  servicePath,
} from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllServiceSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};

  const detail = getServiceDetailBySlug(raw, slug);
  if (!detail) return {};

  const locale = raw;
  const path = servicePath(locale, detail.slug);
  const image = `${siteConfig.url}${getServiceImageBySlug(detail.slug)}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: detail.metaTitle,
    description: detail.metaDescription,
    keywords: detail.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    alternates: {
      canonical: path,
      languages: {
        "en-AE": servicePath("en", detail.slug),
        "ar-AE": servicePath("ar", detail.slug),
        "x-default": servicePath(defaultLocale, detail.slug),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      title: detail.metaTitle,
      description: detail.metaDescription,
      images: [
        {
          url: image,
          alt: detail.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: detail.metaTitle,
      description: detail.metaDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();

  const detail = getServiceDetailBySlug(raw, slug);
  if (!detail) notFound();

  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const index = getServiceIndexBySlug(detail.slug);
  const card = dict.services.items[index];
  const title = card?.title ?? detail.metaTitle;
  const description = card?.description ?? detail.overview[0];
  const included = card?.items ?? [];
  const jsonLd = buildServiceJsonLd(detail, locale, title, description, included);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header dict={dict} locale={locale} />
      <main className="service-detail-main">
        <div className="section">
          <div className="container service-detail-wrap">
            <ServiceDetail detail={detail} dict={dict} locale={locale} />
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={locale} />
      <FloatingContact dict={dict} />
      <MobileStickyBar dict={dict} />
    </>
  );
}
