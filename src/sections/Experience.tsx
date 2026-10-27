"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { experiences } from "@/constants";
import { Timeline } from "@/components/Timeline";
import { ExperienceDates } from "@/components/ExperienceDates";
import { Orbit, ExternalLink } from "@/components/icons";

export function Experience() {
  const t = useTranslations("experience");

  return (
    <Timeline
      id="experience"
      title={t("title")}
      illustration={<Orbit />}
      entries={experiences.map((experience) => ({
        id: experience.id,
        header: (
          <div className="flex items-start gap-4">
            <Image
              src={experience.logo}
              alt={t(experience.company)}
              width={56}
              height={56}
              sizes="56px"
              unoptimized
              loading="eager"
              className="size-14 shrink-0 rounded-xl bg-white object-contain p-1.5 ring-1 ring-white/10"
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-white xl:text-2xl">
                  <a
                    href={experience.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:text-lavender inline-flex items-center gap-2 transition-colors focus-visible:underline"
                  >
                    {t(experience.company)}
                    <ExternalLink className="group-hover:text-lavender size-4 shrink-0 text-neutral-500 transition-colors" />
                  </a>
                </h3>
                {experience.positions.some(
                  (position) => position.end === null
                ) && (
                  <span className="text-mint inline-flex items-center gap-2 text-[11px] font-medium tracking-wide">
                    <span className="bg-mint size-1.5 rounded-full shadow-[0_0_8px_rgba(110,231,183,0.5)]" />
                    {t("present")}
                  </span>
                )}
              </div>
              {experience.id === "suparco" && (
                <p className="mt-1 max-w-md text-xs leading-relaxed text-neutral-400">
                  {t("suparco.fullName")}
                </p>
              )}
              <p className="mt-1.5 text-xs text-neutral-400 sm:text-[13px]">
                {t(experience.employment)}
                <span aria-hidden="true" className="px-2 text-neutral-600">
                  /
                </span>
                {t(experience.workplace)}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                {t("location")}
              </p>
            </div>
          </div>
        ),
        content: (
          <div className="space-y-7">
            {experience.positions.map((position, index) => (
              <div
                key={position.id}
                className={cn(index > 0 && "border-t border-white/8 pt-6")}
              >
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h4 className="text-base font-medium text-neutral-100 sm:text-lg">
                    {t(`${position.id}.title`)}
                  </h4>
                  <ExperienceDates start={position.start} end={position.end} />
                </div>
                <div className="space-y-1.5 text-[15px] leading-6 text-neutral-400">
                  {(t.raw(`${position.id}.contents`) as string[]).map(
                    (content) => (
                      <p key={content}>{content}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        )
      }))}
    />
  );
}
