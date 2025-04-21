"use client";

import Image from "next/image";
import { mySocials } from "../constants";

export default function Footer() {
  return (
    <section className="c-space flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400">
      <div className="mb-4 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <Image
              src={social.icon}
              className="h-5 w-5"
              width={20}
              height={20}
              alt={social.name}
            />
          </a>
        ))}
      </div>
      <p>&copy; {new Date().getFullYear()} Roman. All rights reserved.</p>
    </section>
  );
}
