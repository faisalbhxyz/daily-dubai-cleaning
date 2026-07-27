import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import { blogPosts } from "./posts";
import type { BlogPost } from "./types";

export type { BlogPost, BlogFaq, BlogSection } from "./types";
export { blogPosts } from "./posts";

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  const featured = getAllPosts().filter((post) => post.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return getAllPosts().slice(0, limit);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function blogPath(locale: Locale, slug?: string) {
  return slug ? `/${locale}/blog/${slug}` : `/${locale}/blog`;
}

export function buildBlogPostingJsonLd(post: BlogPost, locale: Locale) {
  const url = `${siteConfig.url}${blogPath(locale, post.slug)}`;
  const imageUrl = `${siteConfig.url}${post.image}`;

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
            name: "Blog",
            item: `${siteConfig.url}${blogPath(locale)}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        name: post.title,
        description: post.metaDescription,
        image: [imageUrl],
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        inLanguage: locale === "ar" ? "en-AE" : "en-AE",
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/logo.png`,
          },
        },
        about: {
          "@type": "Thing",
          name: post.category,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".blog-direct-answer", ".blog-article-title"],
        },
        isPartOf: {
          "@type": "Blog",
          "@id": `${siteConfig.url}${blogPath(locale)}#blog`,
          name: `${siteConfig.name} Blog`,
          publisher: { "@id": `${siteConfig.url}/#business` },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        telephone: siteConfig.phone,
        url: siteConfig.url,
      },
    ],
  };
}

export function buildBlogIndexJsonLd(locale: Locale) {
  const url = `${siteConfig.url}${blogPath(locale)}`;
  const posts = getAllPosts();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${url}#blog`,
        name: `${siteConfig.name} Blog`,
        description:
          "Expert cleaning tips, pricing guides, and booking advice for homes and offices across Dubai.",
        url,
        inLanguage: "en-AE",
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/logo.png`,
          },
        },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: `${siteConfig.url}${blogPath(locale, post.slug)}`,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          image: `${siteConfig.url}${post.image}`,
          description: post.metaDescription,
        })),
      },
      {
        "@type": "BreadcrumbList",
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
            name: "Blog",
            item: url,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteConfig.url}${blogPath(locale, post.slug)}`,
          name: post.title,
        })),
      },
    ],
  };
}
