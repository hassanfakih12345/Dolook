import { notFound } from "next/navigation";
import { ar } from "./ar";
import { isLocale, type Locale } from "./config";
import { en, type Dictionary } from "./en";

const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Resolves the `[locale]` route param, 404ing on anything unknown. */
export async function resolveLocale(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { locale, dict: getDictionary(locale) };
}

export type { Dictionary };
export * from "./config";
