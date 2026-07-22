import Image from "next/image";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import type { Dictionary } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site";

function HeroLeaves({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 220" fill="none" aria-hidden>
      <g fill="currentColor">
        <path d="M120 18c-18 8-34 28-38 52 28-2 50-20 58-42-8 2-14 0-20-10z" opacity="0.95" />
        <path d="M95 48c-14 10-24 28-24 46 22 0 40-16 48-36-8 2-16 0-24-10z" opacity="0.75" />
        <path d="M148 70c-16 10-28 30-28 50 24-2 42-20 50-42-10 2-16 0-22-8z" opacity="0.85" />
        <path d="M72 110c-12 8-22 24-22 40 18 0 34-14 42-32-8 2-14 0-20-8z" opacity="0.7" />
        <path d="M130 128c-14 8-26 24-26 42 20 0 36-14 44-34-8 2-12 0-18-8z" opacity="0.8" />
        <path d="M88 168c-10 8-18 20-18 34 16 0 28-12 34-28-6 2-10 0-16-6z" opacity="0.65" />
      </g>
    </svg>
  );
}

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="home" className="hero">
      <div className="hero-shell">
        <div className="hero-media">
          <Image
            src="/images/cleaner-hero.jpeg"
            alt={dict.hero.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 1200px"
            className="hero-image"
          />
          <HeroLeaves className="hero-leaves" />
        </div>

        <div className="hero-panel">
          <h1>{dict.hero.title}</h1>
          <p className="hero-lead">{dict.hero.lead}</p>

          <div className="hero-ctas">
            <a className="hero-btn hero-btn-call" href={siteConfig.phoneHref}>
              <PhoneIcon className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <a
              className="hero-btn hero-btn-wa"
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {dict.hero.whatsappUs}
            </a>
          </div>

          <ul className="hero-traits">
            {dict.hero.traits.map((trait) => (
              <li key={trait}>
                <span className="hero-check" aria-hidden>
                  <CheckIcon />
                </span>
                {trait}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
