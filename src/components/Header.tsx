"use client";

import { useEffect, useState } from "react";
import {
  BrandLogo,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandLogo />

        <nav className="desktop-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.href === "#home" ? "is-active" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="header-icon-btn header-wa-icon"
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a className="header-phone" href={siteConfig.phoneHref}>
            <span className="header-phone-icon" aria-hidden>
              <PhoneIcon className="h-4 w-4" />
            </span>
            <span className="header-phone-text">{siteConfig.phone}</span>
          </a>
          <a
            className="header-icon-btn header-phone-mobile"
            href={siteConfig.phoneHref}
            aria-label={`Call ${siteConfig.phone}`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <a
            className="btn header-wa"
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Now
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
