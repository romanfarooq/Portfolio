"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Close, Menu } from "@/components/icons";
import { Link, useRouter } from "@/i18n/navigation";

export function MobileNavbar() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("navbar");

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    setIsNavOpen(false);
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleLocaleChange = (
    e: React.MouseEvent<HTMLAnchorElement>,
    newLocale: "en" | "zh"
  ) => {
    e.preventDefault();
    setIsNavOpen(false);
    if (locale !== newLocale) router.push("/", { locale: newLocale });
  };

  return (
    <nav className="md:hidden">
      <div className="flex items-center justify-between py-2">
        <Link
          href="/"
          className="text-xl font-bold text-neutral-300 transition-colors hover:text-white"
        >
          Roman Farooq
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
              {["home", "about", "education", "contact"].map(
                (section) => (
                  <li key={section} className="py-2">
                    <a
                      onClick={(e) => handleNavClick(e, section)}
                      className="cursor-pointer text-lg text-neutral-300 capitalize transition-colors hover:text-white"
                    >
                      {t(section)}
                    </a>
                  </li>
                )
              )}
              <li className="flex w-full justify-center border-t border-white/10 pt-4">
                <div className="flex items-center gap-3">
                  <a
                    onClick={(e) => handleLocaleChange(e, "en")}
                    className={cn(
                      "cursor-pointer rounded px-3 py-2 text-sm transition-colors",
                      locale === "en"
                        ? "bg-white/20 text-white"
                        : "text-neutral-300 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    EN
                  </a>
                  <span className="text-neutral-500">|</span>
                  <a
                    onClick={(e) => handleLocaleChange(e, "zh")}
                    className={cn(
                      "cursor-pointer rounded px-3 py-2 text-sm transition-colors",
                      locale === "zh"
                        ? "bg-white/20 text-white"
                        : "text-neutral-300 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    中文
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
