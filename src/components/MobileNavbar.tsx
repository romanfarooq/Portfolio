import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";

import { Link } from "@/i18n/navigation";
import { Close, Menu } from "@/components/icons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function MobileNavbar() {
  const t = useTranslations("navbar");

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setIsNavOpen(false);
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="lg:hidden">
      <div className="flex items-center justify-between py-2">
        <Link
          href="/"
          className="text-xl font-bold text-neutral-300 transition-colors hover:text-white"
        >
          {t("brandName")}
        </Link>
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="cursor-pointer text-neutral-300 hover:text-white focus:outline-none"
        >
          {isNavOpen ? (
            <Close width={24} height={24} />
          ) : (
            <Menu width={24} height={24} />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {["home", "about", "experience", "education", "contact"].map(
                (section) => (
                  <li key={section} className="py-2">
                    <a
                      onClick={() => handleNavClick(section)}
                      className="cursor-pointer text-lg text-neutral-300 capitalize transition-colors hover:text-white"
                    >
                      {t(section)}
                    </a>
                  </li>
                )
              )}
              <li className="flex w-full justify-center border-t border-white/10 pt-4">
                <LanguageSwitcher onLocaleChange={() => setIsNavOpen(false)} />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
