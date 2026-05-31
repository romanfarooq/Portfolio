"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Languages } from "@/components/icons";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeLabels, locales, type Locale } from "@/i18n/routing";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent
} from "@/components/Select";

type LanguageSwitcherProps = {
  className?: string;
  selectClassName?: string;
  onLocaleChange?: () => void;
};

export function LanguageSwitcher({
  className,
  onLocaleChange,
  selectClassName
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const t = useTranslations("languageSwitcher");
  const currentLocale = locale as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    onLocaleChange?.();

    startTransition(() => {
      const query = window.location.search.slice(1);
      const hash = window.location.hash;
      const href = `${pathname}${query ? `?${query}` : ""}${hash}`;

      router.replace(href, { locale: nextLocale, scroll: false });
    });
  };

  return (
    <div className={cn("relative", className)}>
      <Select
        disabled={isPending}
        value={currentLocale}
        onValueChange={(value) => handleChange(value as Locale)}
      >
        <SelectTrigger
          aria-label={t("ariaLabel")}
          className={cn(
            "group min-w-36 rounded-full border-white/10 bg-white/[0.07] px-3.5 py-2 text-neutral-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md hover:border-white/20 hover:bg-white/11",
            "data-[state=open]:border-white/25 data-[state=open]:bg-white/13",
            selectClassName
          )}
        >
          <span className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-neutral-200 transition-colors group-hover:bg-white/15">
              <Languages className="size-3.5" aria-hidden="true" />
            </span>
            <span className="truncate">{localeLabels[currentLocale]}</span>
          </span>
        </SelectTrigger>
        <SelectContent
          side="bottom"
          align="center"
          sideOffset={8}
          className="min-w-44"
        >
          {locales.map((locale) => (
            <SelectItem key={locale} value={locale} className="py-2.5">
              <span className="flex items-center gap-2">
                <span className="w-10 text-xs font-semibold tracking-wide text-neutral-400 uppercase">
                  {locale}
                </span>
                <span>{localeLabels[locale]}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
