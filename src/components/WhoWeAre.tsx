import Image from "next/image";
import { CheckIcon } from "@/components/Icons";

export function WhoWeAre() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-card">
          <div className="about-copy">
            <p className="about-eyebrow">
              Who we are
              <span className="how-accent" aria-hidden />
            </p>
            <h2 id="about-heading">
              Bringing Cleanliness, Comfort & Peace of Mind to Every Property in Dubai
            </h2>
            <p>
              At Daily Dubai Cleaning, we are committed to creating cleaner, healthier, and
              more comfortable living and working environments across Dubai. With a team of
              trained cleaning professionals and a customer-first approach, we deliver
              reliable cleaning solutions tailored to homes, villas, apartments, offices,
              and commercial properties.
            </p>
            <ul className="check-list">
              <li>
                <span className="check-badge" aria-hidden>
                  <CheckIcon className="h-4 w-4" />
                </span>
                We always keep you up to date on your cleaning
              </li>
              <li>
                <span className="check-badge" aria-hidden>
                  <CheckIcon className="h-4 w-4" />
                </span>
                The cleaners treat your home like their own home
              </li>
            </ul>
            <a className="about-btn" href="#quote">
              About Us
            </a>
          </div>

          <div className="about-media">
            <Image
              src="/images/home-vacuum.jpeg"
              alt="Daily Dubai Cleaning professionals cleaning a bright modern home"
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
