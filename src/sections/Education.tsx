"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { educations } from "@/constants";
import { Timeline } from "@/components/Timeline";
import { ExperienceDates } from "@/components/ExperienceDates";
import { Telescope, ExternalLink } from "@/components/icons";

export function Education() {
  const t = useTranslations("education");

  return (
    <Timeline
      id="education"
      title={t("title")}
      illustration={<Telescope />}
      entries={educations.map((education) => ({
        id: education.id,
        header: (
          <div className="flex items-start gap-4">
            <Image
              src={education.logo}
              alt={education.institution}
              width={56}
              height={56}
              sizes="56px"
              unoptimized
              loading="eager"
              className="size-14 shrink-0 rounded-xl bg-white object-contain p-1.5 ring-1 ring-white/10"
            />
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-semibold tracking-tight text-white xl:text-2xl">
                <a
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:text-lavender inline-flex items-center gap-2 transition-colors focus-visible:underline"
                >
                  <span className="whitespace-pre-line">
                    {t(education.institution)}
                  </span>
                  <ExternalLink className="group-hover:text-lavender size-4 shrink-0 text-neutral-500 transition-colors" />
                </a>
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                {t(education.location)}
              </p>
            </div>
          </div>
        ),
        content: (
          <div className="space-y-7">
            {education.degrees.map((degree, index) => (
              <div
                key={degree.id}
                className={cn(index > 0 && "border-t border-white/8 pt-6")}
              >
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h4 className="text-base font-medium text-neutral-100 sm:text-lg">
                    {t(`${degree.id}.title`)}
                  </h4>
                  <ExperienceDates start={degree.start} end={degree.end} />
                </div>
                <div className="space-y-1.5 text-[15px] leading-6 text-neutral-400">
                  {(t.raw(`${degree.id}.contents`) as string[]).map(
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
