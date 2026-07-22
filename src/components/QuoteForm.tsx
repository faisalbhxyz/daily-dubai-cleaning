"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { CheckIcon } from "@/components/Icons";
import type { Dictionary } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site";

function SprayDecor() {
  return (
    <svg className="quote-decor" viewBox="0 0 90 110" fill="none" aria-hidden>
      <path
        d="M58 28c0-10 8-18 18-20-1 10-8 18-18 20z"
        fill="#5cae43"
        opacity="0.9"
      />
      <path
        d="M48 34c2-8 9-14 18-15-2 9-9 14-18 15z"
        fill="#5cae43"
        opacity="0.65"
      />
      <rect x="28" y="42" width="28" height="52" rx="10" fill="#f4a4b8" />
      <rect x="34" y="28" width="16" height="18" rx="4" fill="#e889a2" />
      <rect x="38" y="18" width="8" height="12" rx="3" fill="#d97690" />
      <circle cx="42" cy="16" r="3" fill="#c45f7b" />
      <path d="M34 58h16M34 68h16M34 78h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

export function QuoteForm({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!agreed) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const sqft = String(data.get("sqft") || "");
    const message = dict.quote.whatsappMessage
      .replace("{name}", name)
      .replace("{phone}", phone)
      .replace("{service}", service)
      .replace("{sqft}", sqft);
    window.open(`${siteConfig.whatsappHref}?text=${message}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
    setAgreed(true);
  }

  return (
    <section id="quote" className="section quote-section" aria-labelledby="quote-heading">
      <div className="container quote-grid">
        <form className="quote-form" onSubmit={handleSubmit}>
          <header className="quote-form-header">
            <p className="quote-eyebrow">{dict.quote.eyebrow}</p>
            <h2 id="quote-heading">{dict.quote.title}</h2>
          </header>

          <div className="quote-fields">
            <label>
              {dict.quote.name}
              <input
                name="name"
                type="text"
                required
                placeholder={dict.quote.namePlaceholder}
                autoComplete="name"
              />
            </label>
            <label>
              {dict.quote.email}
              <input
                name="email"
                type="email"
                required
                placeholder={dict.quote.emailPlaceholder}
                autoComplete="email"
              />
            </label>
            <label>
              {dict.quote.phone}
              <input
                name="phone"
                type="tel"
                required
                placeholder="+971 52 320 2314"
                autoComplete="tel"
              />
            </label>
            <label>
              {dict.quote.sqft}
              <input name="sqft" type="text" placeholder={dict.quote.sqftPlaceholder} />
            </label>
            <label className="quote-service">
              {dict.quote.service}
              <select name="service" required defaultValue="">
                <option value="" disabled>
                  {dict.quote.select}
                </option>
                {dict.quote.serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="quote-consent">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(event) => setAgreed(event.target.checked)}
              required
            />
            <span>{dict.quote.consent}</span>
          </label>

          <button type="submit" className="quote-submit">
            {dict.quote.submit}
          </button>

          {submitted ? (
            <p className="form-success" role="status">
              {dict.quote.success}
            </p>
          ) : null}
        </form>

        <div className="quote-side">
          <div className="quote-media">
            <Image
              src="/images/sofa-clean.jpeg"
              alt={dict.quote.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>

          <aside className="guarantee">
            <div className="guarantee-top">
              <span className="guarantee-check" aria-hidden>
                <CheckIcon className="h-5 w-5" />
              </span>
              <div>
                <h3>{dict.quote.guaranteeTitle}</h3>
                <p>{dict.quote.guaranteeBody}</p>
              </div>
            </div>
            <SprayDecor />
          </aside>
        </div>
      </div>
    </section>
  );
}
