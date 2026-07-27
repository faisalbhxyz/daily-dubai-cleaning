import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site";
import type { BlogPost } from "@/lib/blog";
import { blogPath } from "@/lib/blog";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-AE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogArticle({
  post,
  dict,
  locale,
}: {
  post: BlogPost;
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <article className="blog-article" itemScope itemType="https://schema.org/BlogPosting">
      <meta itemProp="headline" content={post.title} />
      <meta itemProp="datePublished" content={post.datePublished} />
      <meta itemProp="dateModified" content={post.dateModified} />
      <link itemProp="mainEntityOfPage" href={`${siteConfig.url}${blogPath(locale, post.slug)}`} />

      <nav className="blog-breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href={`/${locale}`}>{dict.blog.home}</Link>
          </li>
          <li>
            <Link href={blogPath(locale)}>{dict.blog.blogLabel}</Link>
          </li>
          <li aria-current="page">{post.title}</li>
        </ol>
      </nav>

      <p className="blog-category">{post.category}</p>
      <h1 className="blog-article-title" itemProp="headline">
        {post.title}
      </h1>
      <p className="blog-article-meta">
        <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
        <span aria-hidden>·</span>
        <span>{siteConfig.name}</span>
      </p>

      <div className="blog-article-hero">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 760px"
        />
      </div>

      <p className="blog-direct-answer" itemProp="description">
        <strong>{dict.blog.quickAnswer}</strong> {post.directAnswer}
      </p>

      <div className="blog-prose" itemProp="articleBody">
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            {section.list ? (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <section className="blog-faq" aria-labelledby="blog-faq-heading">
        <h2 id="blog-faq-heading">{dict.blog.faqTitle}</h2>
        <div className="blog-faq-list">
          {post.faq.map((item) => (
            <details key={item.question} className="blog-faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <aside className="blog-cta-box" aria-label={dict.blog.bookNow}>
        <h2>{post.ctaHeading}</h2>
        <p>{post.ctaBody}</p>
        <div className="blog-cta-actions">
          <a className="btn btn-call" href={siteConfig.phoneHref}>
            {dict.sticky.callNow}: {siteConfig.phone}
          </a>
          <a
            className="btn btn-whatsapp"
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.header.whatsappNow}
          </a>
          <Link className="btn btn-primary" href={`/${locale}#quote`}>
            {dict.blog.freeQuote}
          </Link>
        </div>
      </aside>
    </article>
  );
}
