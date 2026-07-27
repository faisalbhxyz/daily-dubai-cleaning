"use client";

import { useEffect, useState } from "react";
import {
  BrandLogo,
  CloseIcon,
  MenuIcon,
} from "@/components/Icons";
import { LanguageToggle } from "@/components/LanguageToggle";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { serviceHref, services } from "@/lib/site";

function navHref(locale: Locale, href: string) {
  if (href.startsWith("http")) return href;
  if (href.startsWith("#")) return `/${locale}${href}`;
  if (href.startsWith("/")) {
    return href.startsWith(`/${locale}`) ? href : `/${locale}${href}`;
  }
  return `/${locale}/${href}`;
}

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
        <BrandLogo href={`/${locale}`} />

        <nav className="desktop-nav" aria-label={dict.header.primaryNav}>
          {navLinks.map((link) =>
            link.href === "#services" || link.href === "/#services" ? (
              <div key={link.href} className="desktop-nav-item has-submenu">
                <a href={navHref(locale, "#services")} className="desktop-nav-parent">
                  {link.label}
                </a>
                <div className="desktop-submenu" role="menu" aria-label={link.label}>
                  {serviceItems.map((service, index) => (
                    <a
                      key={service.title}
                      href={navHref(
                        locale,
                        serviceHref(services[index]?.title ?? service.title),
                      )}
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
                href={navHref(locale, link.href)}
                className={
                  link.href === "#home" || link.href === "/"
                    ? "is-active"
                    : undefined
                }
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="header-actions">
          <LanguageToggle locale={locale} dict={dict} />
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
              href={navHref(
                locale,
                serviceHref(services[index]?.title ?? service.title),
              )}
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
