import type { Locale } from "./config";
import { ar } from "./ar";
import { en } from "./en";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ar,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export type { Dictionary };
