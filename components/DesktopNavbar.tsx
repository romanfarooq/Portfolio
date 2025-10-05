import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { getLocale, getTranslations } from "next-intl/server";

export async function DesktopNavbar() {
  const locale = await getLocale();
  const t = await getTranslations("navbar");

  return (
    <nav className="hidden items-center justify-between md:flex">
      <Link
        href="/"
        className="text-xl font-bold text-neutral-300 transition-colors hover:text-white"
      >
        Roman Farooq
      </Link>
      <div className="flex items-center gap-6">
        <ul className="flex flex-row items-center gap-6">
          {["home", "about", "work", "contact"].map((section) => (
            <li key={section} className="py-2">
              <a
                href={`#${section}`}
                className="text-base text-neutral-300 capitalize transition-colors hover:text-white"
              >
                {t(section)}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-4 flex items-center gap-2">
          <Link
            href="/"
            locale="en"
            className={cn(
              "rounded px-2 py-1 text-sm transition-colors",
              locale === "en"
                ? "bg-white/20 text-white"
                : "text-neutral-300 hover:bg-white/10 hover:text-white"
            )}
          >
            EN
          </Link>
          <span className="text-neutral-500">|</span>
          <Link
            href="/"
            locale="zh"
            className={cn(
              "rounded px-2 py-1 text-sm transition-colors",
              locale === "zh"
                ? "bg-white/20 text-white"
                : "text-neutral-300 hover:bg-white/10 hover:text-white"
            )}
          >
            中文
          </Link>
        </div>
      </div>
    </nav>
  );
}
