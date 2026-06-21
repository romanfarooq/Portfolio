import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { isRtlLocale } from "@/i18n/routing";
import { FlipWords } from "@/components/FlipWords";

export function HeroText() {
  const locale = useLocale();
  const t = useTranslations("hero");
  const isRtl = isRtlLocale(locale);

  const variants = {
    hidden: { opacity: 0, x: isRtl ? 50 : -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div
      className={cn(
        "z-10 flex h-[90vh] w-full flex-col justify-center gap-5 bg-clip-text px-5 pt-20 text-center sm:px-10 md:px-5 lg:px-15",
        isRtl ? "md:items-end md:text-right" : "md:items-start md:text-left"
      )}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <motion.h1
        className="w-full text-4xl font-medium text-white md:text-3xl"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      >
        {t("greeting")}
      </motion.h1>
      <div
        className={cn(
          "flex w-full flex-col items-center",
          isRtl ? "md:items-end" : "md:items-start"
        )}
      >
        <motion.p
          className="w-full text-5xl font-medium text-neutral-100 [unicode-bidi:plaintext] md:text-5xl md:font-medium"
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
          className="w-full"
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
          className="w-full pt-3 text-4xl font-black text-neutral-100 [unicode-bidi:plaintext] md:text-4xl md:font-medium"
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
