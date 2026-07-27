import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { blogPath, getAllPosts } from "@/lib/blog";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-AE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogIndex({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const posts = getAllPosts();

  return (
    <section className="section blog-section blog-index-section" aria-labelledby="blog-index-heading">
      <div className="container">
        <nav className="blog-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href={`/${locale}`}>{dict.blog.home}</Link>
            </li>
            <li aria-current="page">{dict.blog.blogLabel}</li>
          </ol>
        </nav>

        <p className="eyebrow">{dict.blog.eyebrow}</p>
        <h1 id="blog-index-heading">{dict.blog.indexTitle}</h1>
        <p className="section-lead">{dict.blog.indexLead}</p>

        <div className="blog-grid blog-index-grid">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link href={blogPath(locale, post.slug)} className="blog-card-link">
                <div className="blog-media">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="blog-body">
                  <p className="blog-category">{post.category}</p>
                  <h2>{post.title}</h2>
                  <p className="blog-card-excerpt">{post.metaDescription}</p>
                  <p className="blog-card-meta">
                    <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                    <span>{dict.blog.readArticle}</span>
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
