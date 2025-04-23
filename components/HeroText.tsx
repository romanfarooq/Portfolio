import Image from "next/image";
import { motion } from "motion/react";
import { FlipWords } from "@/components/FlipWords";

const words = ["Secure", "Modern", "Scalable"];

const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export function HeroText() {
  return (
    <div className="z-10 mt-20 rounded-3xl bg-clip-text text-center md:mt-40 md:text-left">
      {/* Desktop View */}
      <div className="hidden flex-col px-5 sm:px-10 md:flex lg:px-15">
        <motion.h1
          className="text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I&apos;m Roman
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="text-8xl font-black text-white"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
          <motion.a
            href="/documents/Roman-Farooq-CV.pdf"
            download
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
            className="mt-4 flex items-center gap-2 rounded-full border border-black/10 bg-white/10 px-7 py-2 text-xl outline-hidden transition hover:scale-110 focus-visible:scale-110 active:scale-105"
          >
            Download CV
            <Image
              src="/assets/icons/arrow-down.svg"
              alt="Download Icon"
              width={24}
              height={24}
            />
          </motion.a>
        </div>
      </div>
      {/* Mobile View */}
      <div className="relative flex h-[80vh] flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I&apos;m Roman
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="text-7xl font-bold text-white"
            />
          </motion.div>
          <motion.p
            className="text-neutral300 text-4xl font-black"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
        <div className="absolute bottom-5 flex w-full justify-center">
          <motion.a
            href="/documents/Roman-Farooq-CV.pdf"
            download
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
            className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-2 outline-hidden transition hover:scale-110 focus-visible:scale-110 active:scale-105 dark:bg-white/10"
          >
            Download CV
            <Image
              src="/assets/icons/arrow-down.svg"
              alt="Download Icon"
              width={24}
              height={24}
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
