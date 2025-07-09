import Link from "next/link";
import { socials } from "@/constants/data";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-transparent">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      <div className="flex flex-col items-center justify-between gap-4 px-5 pt-4 pb-3 text-sm text-neutral-300 sm:flex-row sm:gap-5 sm:px-10 lg:px-20">
        <nav className="order-2 flex gap-2 sm:order-1">
          <Link href="/" className="hover:underline">
            Terms & Conditions
          </Link>
          <span>|</span>
          <Link href="/" className="hover:underline">
            Privacy Policy
          </Link>
        </nav>
        <nav className="order-3 flex gap-3 sm:order-2">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Icon width={20} height={20} />
              </a>
            );
          })}
        </nav>
        <p className="order-1 sm:order-3">
          &copy; {new Date().getFullYear()} Roman. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
