import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export async function DesktopNavbar() {
  const t = await getTranslations("navbar");

  return (
    <nav className="hidden items-center justify-between lg:flex">
      <Link
        href="/"
        className="text-xl font-bold text-neutral-300 transition-colors hover:text-white"
      >
        Roman Farooq
      </Link>
      <div className="flex items-center gap-5 xl:gap-7">
        <ul className="flex flex-row items-center gap-5 xl:gap-6">
          {["home", "about", "education", "contact"].map(
            (section) => (
              <li key={section} className="py-2">
                <a
                  href={`#${section}`}
                  className="text-base text-neutral-300 capitalize transition-colors hover:text-white"
                >
                  {t(section)}
                </a>
              </li>
            )
          )}
        </ul>
        <LanguageSwitcher
          className="py-1"
          selectClassName="min-w-[8.25rem] px-3"
        />
      </div>
    </nav>
  );
}
