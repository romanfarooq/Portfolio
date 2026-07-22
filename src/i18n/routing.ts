import { defineRouting } from "next-intl/routing";

export const locales = [
  "en",
  "de",
  "fr",
  "es",
  "it",
  "nl",
  "sv",
  "fi",
  "cs",
  "zh",
  "ja",
  "ko",
  "ar",
  "ur"
] as const;

export type Locale = (typeof locales)[number];

export const rtlLocales = ["ar", "ur"] as const;

export const localeLabels = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  nl: "Nederlands",
  sv: "Svenska",
  fi: "Suomi",
  cs: "Čeština",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  ar: "العربية",
  ur: "اردو"
} satisfies Record<Locale, string>;

export const localePathnames = {
  en: "/en",
  de: "/de",
  fr: "/fr",
  es: "/es",
  it: "/it",
  nl: "/nl",
  sv: "/sv",
  fi: "/fi",
  cs: "/cs",
  zh: "/zh",
  ja: "/ja",
  ko: "/ko",
  ar: "/ar",
  ur: "/ur"
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
