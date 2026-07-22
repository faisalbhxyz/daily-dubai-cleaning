import Image from "next/image";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import type { Dictionary } from "@/lib/i18n/types";
import { serviceImages, serviceSlug, services, siteConfig } from "@/lib/site";

function HomeBadgeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M5 15.5L16 6l11 9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 14.5V25h15V14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13 25v-7h6v7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function OfficeBadgeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M6 13h20M12 8v16M16 17h5M16 21h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DeepBadgeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M7 22c4-7 9-11 18-12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 10h7l3 6H12L9 10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12.5 16v8M9.5 24h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M22 9l1 2 2.2.3-1.6 1.5.4 2.2L22 13.8 19.9 15l.4-2.2-1.6-1.5 2.2-.3L22 9z"
        fill="currentColor"
      />
    </svg>
  );
}

function MoveBadgeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="5" y="10" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <path d="M19 14h5l3 4v4h-8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="10" cy="24" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="23" cy="24" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SofaBadgeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M6 18v-3a3 3 0 013-3h14a3 3 0 013 3v3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5 18h22v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M9 25v2M23 25v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WindowBadgeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="7" y="6" width="18" height="20" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <path d="M16 6v20M7 16h18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function AreaBadgeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="5" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="17" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="5" y="17" width="22" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PaintBadgeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M8 22c0-5 4-8 8-10l2 2c-2 4-5 8-10 8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M16 12l4-4 4 4-4 4-4-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MaintenanceBadgeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M20 8a5 5 0 01-7.07 4.54L8 17.5 6.5 16l4.96-4.93A5 5 0 1120 8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 18l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="21.5" cy="10.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function CctvBadgeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M6 14l12-4v8L6 14z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="18" y="11" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <path d="M22 17v5M18 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const badgeIcons = [
  HomeBadgeIcon,
  OfficeBadgeIcon,
  DeepBadgeIcon,
  MoveBadgeIcon,
  SofaBadgeIcon,
  WindowBadgeIcon,
  AreaBadgeIcon,
  PaintBadgeIcon,
  MaintenanceBadgeIcon,
  CctvBadgeIcon,
];

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="section services-section" aria-labelledby="services-heading">
      <div className="container">
        <header className="services-header">
          <p className="services-eyebrow">
            {dict.services.eyebrow}
            <span className="how-accent" aria-hidden />
          </p>
          <h2 id="services-heading">{dict.services.title}</h2>
          <p className="section-lead">{dict.services.lead}</p>
        </header>

        <div className="services-grid">
          {dict.services.items.map((service, index) => {
            const BadgeIcon = badgeIcons[index] ?? HomeBadgeIcon;
            const anchorTitle = services[index]?.title ?? service.title;
            return (
              <article
                key={anchorTitle}
                id={`service-${serviceSlug(anchorTitle)}`}
                className="service-card"
              >
                <div className="service-media">
                  <Image
                    src={serviceImages[index] ?? serviceImages[0]}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="service-badge" aria-hidden>
                    <BadgeIcon />
                  </span>
                </div>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p className="included-label">{dict.services.included}</p>
                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={item}
                        className={itemIndex >= 4 ? "service-item-extra" : undefined}
                      >
                        {item}
                      </li>
                    ))}
                    {service.items.length > 4 ? (
                      <li className="service-item-more">
                        +{service.items.length - 4} {dict.services.more}
                      </li>
                    ) : null}
                  </ul>
                  <div className="service-actions">
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
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
