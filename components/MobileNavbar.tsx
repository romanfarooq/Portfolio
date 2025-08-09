"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Close, Menu } from "./icons";
import { Link, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

export function MobileNavbar() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("navbar");

  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleLocaleChange = (newLocale: "en" | "zh") => {
    setIsOpen(false);
    router.push("/", { locale: newLocale });
  };

  return (
    <nav className="sm:hidden">
      <div className="flex items-center justify-between py-2">
        <Link
          href="/"
          className="text-xl font-bold text-neutral-300 transition-colors hover:text-white"
        >
          Roman Farooq
        </Link>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer text-neutral-300 hover:text-white focus:outline-none"
        >
          {isOpen ? (
            <Close width={24} height={24} />
          ) : (
            <Menu width={24} height={24} />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {["home", "about", "work", "contact"].map(
                (section) => (
                  <li key={section} className="py-2">
                    <a
                      onClick={(e) => handleNavClick(e, section)}
                      className="cursor-pointer text-lg text-neutral-300 capitalize transition-colors hover:text-white"
                    >
                      {t(section)}
                    </a>
                  </li>
                ),
              )}
              <li className="flex w-full justify-center border-t border-white/10 pt-4">
                <div className="flex items-center gap-3">
                  <a
                    onClick={() => handleLocaleChange("en")}
                    className={cn(
                      "rounded px-3 py-2 text-sm transition-colors",
                      locale === "en"
                        ? "bg-white/20 text-white"
                        : "text-neutral-300 hover:bg-white/10 hover:text-white",
                    )}
                  >
                    English
                  </a>
                  <span className="text-neutral-500">|</span>
                  <a
                    onClick={() => handleLocaleChange("zh")}
                    className={cn(
                      "rounded px-3 py-2 text-sm transition-colors",
                      locale === "zh"
                        ? "bg-white/20 text-white"
                        : "text-neutral-300 hover:bg-white/10 hover:text-white",
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
