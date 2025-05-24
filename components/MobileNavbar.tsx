"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function MobileNavbar() {
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
            <Image
              src="/assets/icons/close.svg"
              alt="close menu icon"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/assets/icons/menu.svg"
              alt="hamburger menu icon"
              width={24}
              height={24}
            />
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
                      {section}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
