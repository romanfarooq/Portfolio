import { motion, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";

import { cn, graphemes } from "@/lib/utils";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
  animateLetters?: boolean;
}

export function FlipWords({
  words,
  duration = 3000,
  className,
  animateLetters = true
}: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const currentWord = words[currentIndex % words.length];

  const scheduleNext = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, duration);
  }, [duration]);

  useEffect(() => {
    scheduleNext();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [scheduleNext]);

  return (
    <AnimatePresence onExitComplete={scheduleNext}>
      <motion.div
        key={currentWord}
        className={cn("relative z-10 inline-block max-w-full", className)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        exit={{
          x: 40,
          y: -40,
          scale: 2,
          opacity: 0,
          filter: "blur(8px)",
          position: "absolute"
        }}
      >
        {animateLetters
          ? currentWord.split(/(\s+)/u).map((word, tokenIndex) => {
              if (!word.trim()) return word;
              const wordIndex = tokenIndex / 2;
              return (
                <motion.span
                  key={word + tokenIndex}
                  className="inline-block max-w-full"
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: wordIndex * 0.3, duration: 0.3 }}
                >
                  {graphemes(word).map((letter, letterIndex) => (
                    <motion.span
                      key={word + letterIndex}
                      className="inline-block"
                      initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.2,
                        delay: wordIndex * 0.3 + letterIndex * 0.05
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              );
            })
          : currentWord}
      </motion.div>
    </AnimatePresence>
  );
}
