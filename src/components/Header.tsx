"use client";

import { useEffect, useState } from "react";
import {
  BrandLogo,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { LanguageToggle } from "@/components/LanguageToggle";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { serviceHref, services, siteConfig } from "@/lib/site";

export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const navLinks = dict.nav;
  const serviceItems = dict.services.items;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandLogo />

        <nav className="desktop-nav" aria-label={dict.header.primaryNav}>
          {navLinks.map((link) =>
            link.href === "#services" ? (
              <div key={link.href} className="desktop-nav-item has-submenu">
                <a href={link.href} className="desktop-nav-parent">
                  {link.label}
                </a>
                <div className="desktop-submenu" role="menu" aria-label={link.label}>
                  {serviceItems.map((service, index) => (
                    <a
                      key={service.title}
                      href={serviceHref(services[index]?.title ?? service.title)}
                      role="menuitem"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={link.href === "#home" ? "is-active" : undefined}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="header-actions">
          <LanguageToggle locale={locale} dict={dict} />
          <a
            className="header-icon-btn header-wa-icon"
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.header.chatWhatsApp}
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
            aria-label={`${dict.header.callAria} ${siteConfig.phone}`}
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
            {dict.header.whatsappNow}
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.header.closeMenu : dict.header.openMenu}
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
        <nav aria-label={dict.header.mobileNav}>
          {serviceItems.map((service, index) => (
            <a
              key={service.title}
              href={serviceHref(services[index]?.title ?? service.title)}
              onClick={closeMenu}
            >
              {service.title}
            </a>
          ))}
          <div className="mobile-lang">
            <LanguageToggle locale={locale} dict={dict} />
          </div>
        </nav>
      </div>
    </header>
  );
}
