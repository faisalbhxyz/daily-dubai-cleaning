import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/BlogArticle";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import {
  blogPath,
  buildBlogPostingJsonLd,
  getAllSlugs,
  getPostBySlug,
} from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};

  const post = getPostBySlug(slug);
  if (!post) return {};

  const locale = raw;
  const path = blogPath(locale, post.slug);
  const image = `${siteConfig.url}${post.image}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    alternates: {
      canonical: path,
      languages: {
        "en-AE": blogPath("en", post.slug),
        "ar-AE": blogPath("ar", post.slug),
        "x-default": blogPath(defaultLocale, post.slug),
      },
    },
    openGraph: {
      type: "article",
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [siteConfig.name],
      section: post.category,
      tags: post.keywords,
      images: [
        {
          url: image,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const jsonLd = buildBlogPostingJsonLd(post, locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header dict={dict} locale={locale} />
      <main className="blog-post-main">
        <div className="section">
          <div className="container blog-article-wrap">
            <BlogArticle post={post} dict={dict} locale={locale} />
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={locale} />
      <FloatingContact dict={dict} />
      <MobileStickyBar dict={dict} />
    </>
  );
}
