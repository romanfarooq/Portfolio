import { defineRouting } from "next-intl/routing";

export const locales = [
  "en",
  "zh",
  "de",
  "fr",
  "es",
  "it",
  "nl",
  "sv",
  "fi",
  "ar",
  "ur",
  "ja"
] as const;

export type Locale = (typeof locales)[number];

export const rtlLocales = ["ar", "ur"] as const;

export const localeLabels = {
  en: "English",
  zh: "中文",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  nl: "Nederlands",
  sv: "Svenska",
  fi: "Suomi",
  ar: "العربية",
  ur: "اردو",
  ja: "日本語"
} satisfies Record<Locale, string>;

export const localePathnames = {
  en: "/en",
  zh: "/zh",
  de: "/de",
  fr: "/fr",
  es: "/es",
  it: "/it",
  nl: "/nl",
  sv: "/sv",
  fi: "/fi",
  ar: "/ar",
  ur: "/ur",
  ja: "/ja"
} satisfies Record<Locale, `/${string}`>;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localeCookie: true,
  localeDetection: true
});

export function isRtlLocale(locale: string) {
  return (rtlLocales as readonly string[]).includes(locale);
}
