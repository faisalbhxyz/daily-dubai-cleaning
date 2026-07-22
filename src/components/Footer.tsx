"use client";

import { FormEvent, useState } from "react";
import { BrandLogo, PhoneIcon } from "@/components/Icons";
import { navLinks, siteConfig } from "@/lib/site";

function FooterLeaves() {
  return (
    <svg className="footer-leaves" viewBox="0 0 56 40" fill="none" aria-hidden>
      <path
        d="M12 30c0-12 10-22 22-24-2 12-10 22-22 24z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M26 32c3-11 12-18 24-19-4 12-13 19-24 19z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm10 2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2zm-5 3.5A3.5 3.5 0 1112 16a3.5 3.5 0 010-7zm0 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM17 7.75a.75.75 0 110 1.5.75.75 0 010-1.5z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 4l6.7 8.9L4.4 20H7l5-5.9L16.8 20H20l-6.9-9.2L19.6 4H17l-4.7 5.5L7.2 4H4z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.6 7.2a2.7 2.7 0 00-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3a2.7 2.7 0 00-1.9 1.9A28 28 0 002 12a28 28 0 00.4 4.8 2.7 2.7 0 001.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 001.9-1.9A28 28 0 0022 12a28 28 0 00-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "X", href: siteConfig.social.twitter, Icon: XIcon },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
] as const;

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
  }

  return (
    <footer id="contact" className="site-footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-top">
            <div className="footer-cta">
              <FooterLeaves />
              <h2>Our Goal is to Wow You With Every Clean</h2>
              <a
                className="footer-wa-btn"
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer-wa-icon" aria-hidden>
                  <PhoneIcon className="h-4 w-4" />
                </span>
                WhatsApp Us
              </a>
            </div>

            <form className="footer-newsletter" onSubmit={handleSubscribe}>
              <p className="footer-label">Subscribe to Our Newsletter</p>
              <div className="footer-newsletter-row">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter our email address"
                  autoComplete="email"
                />
                <button type="submit">Subscribe</button>
              </div>
              {subscribed ? (
                <p className="footer-newsletter-success" role="status">
                  Thanks for subscribing.
                </p>
              ) : null}
            </form>
          </div>

          <div className="footer-brand-row">
            <BrandLogo variant="footer" />
            <p className="footer-slogan">Clean today, brighter tomorrow</p>
          </div>

          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-label">Quick Links</h3>
              <nav aria-label="Footer">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={index === 0 ? "is-active" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer-col">
              <h3 className="footer-label">Contact Info</h3>
              <p>{siteConfig.address}</p>
              <a className="footer-phone-pill" href={siteConfig.phoneHref}>
                <span className="footer-phone-icon" aria-hidden>
                  <PhoneIcon className="h-4 w-4" />
                </span>
                {siteConfig.phone}
              </a>
              <a className="footer-email" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>

            <div className="footer-col">
              <h3 className="footer-label">Working hours</h3>
              <dl className="hours">
                <div>
                  <dt>Mon – Fri:</dt>
                  <dd>{siteConfig.hours.weekdays}</dd>
                </div>
                <div>
                  <dt>Saturday:</dt>
                  <dd>{siteConfig.hours.saturday}</dd>
                </div>
                <div>
                  <dt>Sunday:</dt>
                  <dd>
                    <strong>{siteConfig.hours.sunday}</strong>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="footer-socials">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
