import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import { blogImages } from "@/lib/site";

export function Blog({ dict }: { dict: Dictionary }) {
  return (
    <section id="blog" className="section blog-section" aria-labelledby="blog-heading">
      <div className="container">
        <p className="eyebrow">{dict.blog.eyebrow}</p>
        <h2 id="blog-heading">{dict.blog.title}</h2>
        <p className="section-lead">{dict.blog.lead}</p>

        <div className="blog-grid">
          {dict.blog.posts.map((post, index) => (
            <article key={post.title} className="blog-card">
              <div className="blog-media">
                <Image
                  src={blogImages[index] ?? blogImages[0]}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="blog-body">
                <p className="blog-category">{post.category}</p>
                <h3>{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
