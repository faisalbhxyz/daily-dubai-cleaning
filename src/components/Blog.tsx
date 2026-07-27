import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { blogPath, getFeaturedPosts } from "@/lib/blog";

export function Blog({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const posts = getFeaturedPosts(3);

  return (
    <section id="blog" className="section blog-section" aria-labelledby="blog-heading">
      <div className="container">
        <p className="eyebrow">{dict.blog.eyebrow}</p>
        <h2 id="blog-heading">{dict.blog.title}</h2>
        <p className="section-lead">{dict.blog.lead}</p>

        <div className="blog-grid">
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
                  <h3>{post.title}</h3>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="blog-section-cta">
          <Link href={blogPath(locale)} className="btn btn-primary">
            {dict.blog.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
