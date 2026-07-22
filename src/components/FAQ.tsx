"use client";

import { useState } from "react";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { faqs, siteConfig } from "@/lib/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="section faq-section" aria-labelledby="faq-heading">
      <div className="container faq-grid">
        <div className="faq-intro">
          <p className="faq-eyebrow">
            FAQs
            <span className="how-accent" aria-hidden />
          </p>
          <h2 id="faq-heading">Frequently Asked Questions</h2>

          <aside className="faq-cta-card">
            <h3>Looking for Professional Cleaning Services in Dubai?</h3>
            <p>
              Our friendly team is ready to help with all your residential and commercial
              cleaning needs.
            </p>
            <div className="faq-cta-actions">
              <a className="faq-contact-btn faq-contact-phone" href={siteConfig.phoneHref}>
                <span className="faq-contact-icon" aria-hidden>
                  <PhoneIcon className="h-4 w-4" />
                </span>
                {siteConfig.phone}
              </a>
              <a
                className="faq-contact-btn faq-contact-wa"
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="faq-contact-icon" aria-hidden>
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                {siteConfig.phone}
              </a>
            </div>
          </aside>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-answer"
                  hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
