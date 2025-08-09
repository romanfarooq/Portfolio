import { motion } from "motion/react";
import { ArrowDown } from "./icons";
import { FlipWords } from "@/components/FlipWords";
import { useTranslations } from "next-intl";

const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export function HeroText() {
  const t = useTranslations("hero");

  return (
    <div className="z-10 flex h-screen w-full flex-col justify-between bg-clip-text pt-20 text-center md:justify-center md:text-left">
      <div className="flex flex-col gap-5 px-5 sm:px-10 md:px-5 lg:px-15">
        <motion.h1
          className="text-4xl font-medium text-white md:text-3xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          {t("greeting")}
        </motion.h1>
        <div className="flex w-full flex-col items-center md:items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-100 md:text-5xl md:font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <span className="hidden md:inline">
              {t("developerText")}
              <br /> {t("dedicatedText")}
            </span>
            <span className="md:hidden">{t("buildingText")}</span>
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={t.raw("flipWords")}
              className="text-7xl font-bold text-white md:text-8xl md:font-black"
            />
          </motion.div>
          <motion.p
            className="pt-3 text-4xl font-black text-neutral-100 md:text-4xl md:font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            {t("webSolutions")}
          </motion.p>
        </div>
      </div>
      <div className="flex w-full justify-center px-5 pb-20 sm:px-10 md:mt-8 md:justify-start md:px-5 md:pb-0 lg:px-15">
        <motion.a
          href="/documents/Roman-Farooq-CV.pdf"
          download
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2 }}
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white/10 px-7 py-2 text-xl outline-hidden transition hover:scale-110 focus-visible:scale-110 active:scale-105 md:text-xl"
        >
          {t("downloadCV")}
          <ArrowDown width={24} height={24} />
        </motion.a>
      </div>
    </div>
  );
}
