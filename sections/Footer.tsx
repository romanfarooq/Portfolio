import Image from "next/image";
import { mySocials } from "@/constants/data";

export default function Footer() {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 px-5 pb-3 text-sm text-neutral-400 sm:px-10 lg:px-15">
      <div className="w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={social.icon} alt={social.name} width={20} height={20} />
          </a>
        ))}
      </div>
      <p>&copy; {new Date().getFullYear()} Roman. All rights reserved.</p>
    </section>
  );
}
