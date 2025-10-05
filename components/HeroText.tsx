import { motion } from "motion/react";
import { FlipWords } from "@/components/FlipWords";
import { useTranslations } from "next-intl";

const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

export function HeroText() {
  const t = useTranslations("hero");

  return (
    <div className="z-10 flex h-[90vh] w-full flex-col justify-center gap-5 bg-clip-text px-5 pt-20 text-center sm:px-10 md:px-5 md:text-left lg:px-15">
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
  );
}
