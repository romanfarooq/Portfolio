"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

interface NavigationProps {
  onLinkClick?: () => void;
}

const Navigation = ({ onLinkClick }: NavigationProps) => {
  return (
    <ul className="relative z-20 flex flex-col items-center gap-4 sm:flex-row md:gap-6">
      <li className="py-2 text-neutral-300 hover:text-white max-sm:w-full max-sm:rounded-md max-sm:px-5">
        <a
          href="#home"
          onClick={onLinkClick}
          className="text-lg transition-colors hover:text-white md:text-base"
        >
          Home
        </a>
      </li>
      <li className="py-2 text-neutral-300 hover:text-white max-sm:w-full max-sm:rounded-md max-sm:px-5">
        <a
          href="#about"
          onClick={onLinkClick}
          className="text-lg transition-colors hover:text-white md:text-base"
        >
          About
        </a>
      </li>
      <li className="py-2 text-neutral-300 hover:text-white max-sm:w-full max-sm:rounded-md max-sm:px-5">
        <a
          href="#work"
          onClick={onLinkClick}
          className="text-lg transition-colors hover:text-white md:text-base"
        >
          Work
        </a>
      </li>
      <li className="py-2 text-neutral-300 hover:text-white max-sm:w-full max-sm:rounded-md max-sm:px-5">
        <a
          href="#contact"
          onClick={onLinkClick}
          className="text-lg transition-colors hover:text-white md:text-base"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-primary/40 fixed inset-x-0 z-50 w-full backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-15">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <Link
            href="/"
            className="text-xl font-bold text-neutral-300 transition-colors hover:text-white"
          >
            Roman Farooq
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-300 hover:text-white focus:outline-none sm:hidden"
          >
            <Image
              src={
                isOpen ? "/assets/icons/close.svg" : "/assets/icons/menu.svg"
              }
              alt="toggle menu icon"
              width={24}
              height={24}
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block max-h-screen overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onLinkClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </div>
  );
}
