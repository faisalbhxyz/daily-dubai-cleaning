import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIndex } from "@/components/BlogIndex";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { blogPath, buildBlogIndexJsonLd } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};

  const locale = raw;
  const dict = getDictionary(locale);
  const path = blogPath(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: dict.blog.indexMetaTitle,
    description: dict.blog.indexMetaDescription,
    keywords: [...dict.meta.keywords, "cleaning blog Dubai", "Dubai cleaning tips"],
    alternates: {
      canonical: path,
      languages: {
        "en-AE": blogPath("en"),
        "ar-AE": blogPath("ar"),
        "x-default": blogPath(defaultLocale),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      title: dict.blog.indexMetaTitle,
      description: dict.blog.indexMetaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.blog.indexMetaTitle,
      description: dict.blog.indexMetaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const jsonLd = buildBlogIndexJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header dict={dict} locale={locale} />
      <main>
        <BlogIndex dict={dict} locale={locale} />
      </main>
      <Footer dict={dict} locale={locale} />
      <FloatingContact dict={dict} />
      <MobileStickyBar dict={dict} />
    </>
  );
}
