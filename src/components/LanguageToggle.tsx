"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

function UkFlag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 40"
      aria-hidden
      focusable="false"
    >
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="5" />
      <path d="M30 0 V40 M0 20 H60" stroke="#fff" strokeWidth="13" />
      <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  );
}

function UaeFlag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 40"
      aria-hidden
      focusable="false"
    >
      <rect width="60" height="40" fill="#fff" />
      <rect y="0" width="60" height="13.33" fill="#00732F" />
      <rect y="26.67" width="60" height="13.33" fill="#000" />
      <rect width="15" height="40" fill="#FF0000" />
    </svg>
  );
}

function LangLabel({
  locale,
  text,
  muted,
}: {
  locale: Locale;
  text: string;
  muted?: boolean;
}) {
  return (
    <span
      className={muted ? "lang-toggle-current" : "lang-toggle-next"}
      aria-hidden={muted || undefined}
    >
      {locale === "en" ? (
        <UkFlag className="lang-toggle-flag" />
      ) : (
        <UaeFlag className="lang-toggle-flag" />
      )}
      <span>{text}</span>
    </span>
  );
}

export function LanguageToggle({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname() || `/${locale}`;
  const nextLocale: Locale = locale === "en" ? "ar" : "en";
  const currentLabel = locale === "en" ? dict.language.en : dict.language.ar;
  const nextLabel = nextLocale === "ar" ? dict.language.ar : dict.language.en;
  const nextHref = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${nextLocale}`) || `/${nextLocale}`;

  return (
    <Link
      href={nextHref}
      className="lang-toggle"
      hrefLang={nextLocale === "ar" ? "ar-AE" : "en-AE"}
      aria-label={dict.language.switchTo}
      title={dict.language.switchTo}
    >
      <LangLabel locale={locale} text={currentLabel} muted />
      <span className="lang-toggle-sep" aria-hidden>
        /
      </span>
      <LangLabel locale={nextLocale} text={nextLabel} />
    </Link>
  );
}
