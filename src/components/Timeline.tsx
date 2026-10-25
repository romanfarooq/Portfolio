import type { ReactNode } from "react";

import { TimelineItem, type TimelineEntry } from "@/components/TimelineItem";

interface TimelineProps {
  id: string;
  title: string;
  entries: TimelineEntry[];
  illustration: ReactNode;
}

export function Timeline({ id, title, entries, illustration }: TimelineProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative mt-24 scroll-mt-24 px-5 sm:px-10 md:mt-36 lg:px-15"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-96 bg-[radial-gradient(ellipse_at_70%_30%,rgba(122,78,200,0.09),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="relative isolate mb-8 flex min-h-40 items-center overflow-hidden border-b border-white/10 py-8 md:mb-10 md:min-h-56">
        <div className="relative z-10 max-w-[80%]">
          <h2
            id={`${id}-title`}
            className="text-4xl leading-tight font-semibold tracking-tight wrap-anywhere text-neutral-100 sm:text-5xl md:text-6xl"
          >
            {title}
          </h2>
        </div>
        <div
          aria-hidden="true"
          className="text-lavender/30 pointer-events-none absolute -inset-e-24 top-0 h-full w-80 sm:inset-e-0 md:w-100"
        >
          {illustration}
        </div>
      </div>
      <div className="relative">
        {entries.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            last={index === entries.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
