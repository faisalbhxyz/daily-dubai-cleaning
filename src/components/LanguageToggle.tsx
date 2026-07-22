"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export function LanguageToggle({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const nextLocale: Locale = locale === "en" ? "ar" : "en";
  const label = nextLocale === "ar" ? dict.language.ar : dict.language.en;

  return (
    <Link
      href={`/${nextLocale}`}
      className="lang-toggle"
      hrefLang={nextLocale === "ar" ? "ar-AE" : "en-AE"}
      aria-label={dict.language.switchTo}
      title={dict.language.switchTo}
    >
      <span className="lang-toggle-current" aria-hidden>
        {locale === "en" ? dict.language.en : dict.language.ar}
      </span>
      <span className="lang-toggle-sep" aria-hidden>
        /
      </span>
      <span className="lang-toggle-next">{label}</span>
    </Link>
  );
}
