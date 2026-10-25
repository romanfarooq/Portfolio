import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function DesktopNavbar() {
  const t = useTranslations("navbar");

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="hidden items-center justify-between lg:flex">
      <Link
        href="/"
        className="text-xl font-bold text-neutral-300 transition-colors hover:text-white"
      >
        {t("brandName")}
      </Link>
      <div className="flex items-center gap-5 xl:gap-7">
        <ul className="flex flex-row items-center gap-5 xl:gap-6">
          {["home", "about", "experience", "education", "contact"].map(
            (section) => (
              <li key={section} className="py-2">
                <a
                  onClick={() => handleNavClick(section)}
                  className="cursor-pointer text-base text-neutral-300 capitalize transition-colors hover:text-white"
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
