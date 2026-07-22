import Image from "next/image";
import { blogPosts } from "@/lib/site";

export function Blog() {
  return (
    <section id="blog" className="section blog-section" aria-labelledby="blog-heading">
      <div className="container">
        <p className="eyebrow">From our blog</p>
        <h2 id="blog-heading">Expert Cleaning Tips & Home Care Insights</h2>
        <p className="section-lead">
          Stay informed with professional cleaning advice, practical maintenance tips, and
          expert recommendations from the Daily Dubai Cleaning team.
        </p>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.title} className="blog-card">
              <div className="blog-media">
                <Image
                  src={post.image}
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
