import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion
} from "motion/react";

import { cn } from "@/lib/utils";

export interface TimelineEntry {
  id: string;
  header: ReactNode;
  content: ReactNode;
}

export function TimelineItem({
  entry,
  last
}: {
  entry: TimelineEntry;
  last: boolean;
}) {
  const segmentRef = useRef<HTMLDivElement>(null);
  const waypointRef = useRef<HTMLDivElement>(null);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: segmentRef,
    offset: ["start 65%", "end 65%"]
  });

  const { scrollYProgress: waypointProgress } = useScroll({
    target: waypointRef,
    offset: ["center 65%", "center 64%"]
  });

  const color = useTransform(waypointProgress, (progress) =>
    progress > 0 ? "var(--color-lavender)" : "#404040"
  );

  return (
    <article className="group relative ps-9 sm:ps-14 lg:ps-20">
      <div
        ref={segmentRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-s-2 top-15 h-full w-px sm:inset-3 sm:top-17",
          last && "invisible"
        )}
      >
        <motion.div
          data-timeline-progress
          style={{ scaleY: scrollYProgress }}
          className="from-lavender/30 to-lavender absolute inset-0 origin-top bg-linear-to-b"
        />
      </div>
      <div
        ref={waypointRef}
        data-timeline-waypoint
        aria-hidden="true"
        className="bg-midnight absolute -inset-2 top-11 z-10 flex size-8 items-center justify-center rounded-full sm:-inset-1 sm:top-13"
      >
        <motion.span
          style={{ backgroundColor: color, borderColor: color }}
          className="size-3 rounded-full border"
        />
      </div>
      <motion.div
        initial={false}
        whileInView={
          reduceMotion ? undefined : { opacity: [0.65, 1], y: [12, 0] }
        }
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 border-b border-white/8 py-8 group-last:border-0 sm:py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-12"
      >
        <header className="min-w-0">{entry.header}</header>
        <div className="min-w-0">{entry.content}</div>
      </motion.div>
    </article>
  );
}
