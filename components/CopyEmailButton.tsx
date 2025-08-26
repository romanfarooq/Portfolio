"use client";

import { useState } from "react";
import { Copy, CopyDone } from "./icons";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";

const CONTACT_EMAIL = "romanfarooq@outlook.com";

export function CopyEmailButton() {
  const t = useTranslations("copyEmail");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="bg-primary w-48 cursor-pointer overflow-hidden rounded-full px-1 py-4 text-center text-sm font-extralight"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            key="copied"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <CopyDone width={24} height={24} />
            {t("copiedMessage")}
          </motion.p>
        ) : (
          <motion.p
            key="copy"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Copy width={24} height={24} />
            {t("copyButton")}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
