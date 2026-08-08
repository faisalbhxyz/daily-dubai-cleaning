import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import {
  getAllServiceSlugs,
  getServiceImageBySlug,
  getServiceIndexBySlug,
  servicePath,
  type ServiceDetail as ServiceDetailData,
} from "@/lib/services";
import { services, siteConfig } from "@/lib/site";

export function ServiceDetail({
  detail,
  dict,
  locale,
}: {
  detail: ServiceDetailData;
  dict: Dictionary;
  locale: Locale;
}) {
  const index = getServiceIndexBySlug(detail.slug);
  const card = dict.services.items[index];
  const title = card?.title ?? detail.metaTitle;
  const description = card?.description ?? detail.overview[0];
  const included = card?.items ?? [];
  const image = getServiceImageBySlug(detail.slug);
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(title)}`;

  const otherServices = getAllServiceSlugs()
    .filter((slug) => slug !== detail.slug)
    .slice(0, 4)
    .map((slug) => {
      const otherIndex = getServiceIndexBySlug(slug);
      return {
        slug,
        title: dict.services.items[otherIndex]?.title ?? services[otherIndex]?.title ?? slug,
      };
    });

  return (
    <article className="service-detail">
      <nav className="blog-breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href={`/${locale}`}>{dict.serviceDetail.home}</Link>
          </li>
          <li>
            <Link href={`/${locale}#services`}>{dict.serviceDetail.servicesLabel}</Link>
          </li>
          <li aria-current="page">{title}</li>
        </ol>
      </nav>

      <p className="service-detail-eyebrow">{dict.services.eyebrow}</p>
      <h1 className="service-detail-title">{title}</h1>
      <p className="service-detail-lead">{description}</p>

      <div className="service-detail-hero">
        <Image
          src={image}
          alt={detail.imageAlt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 900px"
        />
      </div>

      <div className="service-detail-cta-top" aria-label={dict.serviceDetail.bookNow}>
        <a className="service-btn service-btn-call" href={siteConfig.phoneHref}>
          <PhoneIcon className="h-4 w-4" />
          {siteConfig.phone}
        </a>
        <a
          className="service-btn service-btn-wa"
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {dict.services.whatsappUs}
        </a>
        <a className="service-btn service-btn-email" href={mailto}>
          {dict.serviceDetail.emailUs}
        </a>
      </div>

      <div className="service-detail-prose">
        {detail.overview.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>

      {included.length > 0 ? (
        <section className="service-detail-section" aria-labelledby="included-heading">
          <h2 id="included-heading">{dict.services.included}</h2>
          <ul className="service-detail-list">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="service-detail-section" aria-labelledby="benefits-heading">
        <h2 id="benefits-heading">{dict.serviceDetail.benefits}</h2>
        <ul className="service-detail-list">
          {detail.benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="service-detail-section" aria-labelledby="process-heading">
        <h2 id="process-heading">{dict.serviceDetail.process}</h2>
        <ol className="service-detail-steps">
          {detail.process.map((step, stepIndex) => (
            <li key={step.title}>
              <span className="service-detail-step-num" aria-hidden>
                {stepIndex + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <aside className="blog-cta-box" aria-label={dict.serviceDetail.bookNow}>
        <h2>{detail.ctaHeading}</h2>
        <p>{detail.ctaBody}</p>
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
          <a className="btn btn-email" href={mailto}>
            {siteConfig.email}
          </a>
          <Link className="btn btn-primary" href={`/${locale}#quote`}>
            {dict.serviceDetail.freeQuote}
          </Link>
        </div>
      </aside>

      {otherServices.length > 0 ? (
        <section className="service-detail-related" aria-labelledby="related-heading">
          <h2 id="related-heading">{dict.serviceDetail.otherServices}</h2>
          <ul>
            {otherServices.map((service) => (
              <li key={service.slug}>
                <Link href={servicePath(locale, service.slug)}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
