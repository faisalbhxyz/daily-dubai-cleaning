import Image from "next/image";
import { CheckIcon } from "@/components/Icons";
import type { Dictionary } from "@/lib/i18n/types";

export function WhoWeAre({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-card">
          <div className="about-copy">
            <p className="about-eyebrow">
              {dict.about.eyebrow}
              <span className="how-accent" aria-hidden />
            </p>
            <h2 id="about-heading">{dict.about.title}</h2>
            <p>{dict.about.body}</p>
            <ul className="check-list">
              {dict.about.checks.map((item) => (
                <li key={item}>
                  <span className="check-badge" aria-hidden>
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a className="about-btn" href="#quote">
              {dict.about.cta}
            </a>
          </div>

          <div className="about-media">
            <Image
              src="/images/home-vacuum.jpeg"
              alt={dict.about.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
