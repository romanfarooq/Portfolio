import Link from "next/link";
import Image from "next/image";
import { socials } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-transparent">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      <div className="flex flex-col items-center justify-between gap-4 px-5 pt-4 pb-3 text-sm text-neutral-400 sm:flex-row sm:gap-5 sm:px-10 lg:px-20">
        <div className="order-2 flex gap-2 sm:order-1">
          <Link href="/" className="hover:underline">
            Terms & Conditions
          </Link>
          <span>|</span>
          <Link href="/" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
        <div className="order-3 flex gap-3 sm:order-2">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
        <p className="order-1 sm:order-3">
          &copy; {new Date().getFullYear()} Roman. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
