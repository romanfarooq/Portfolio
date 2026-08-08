import { routing } from "@/i18n/routing";

declare global {
  type Locale = (typeof routing.locales)[number];
}

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
  }
}
