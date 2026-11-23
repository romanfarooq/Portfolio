import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { cn } from "@/lib/utils";
import { Meta } from "@/components/logos";
import { Globe } from "@/components/Globe";
import { isRtlLocale } from "@/i18n/routing";
import { Frameworks } from "@/components/Frameworks";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export async function About() {
  const locale = await getLocale();
  const t = await getTranslations("about");
  const isRtl = isRtlLocale(locale);
  const metaCertSkills = t.raw("metaCertSkills") as string[];

  return (
    <section
      id="about"
      className="mt-20 scroll-mt-20 px-5 sm:px-10 md:mt-30 lg:px-15"
    >
      <h2 className="text-3xl font-bold md:text-4xl">{t("title")}</h2>
      <div className="mt-12 grid grid-cols-1 gap-4 md:auto-rows-fr md:grid-cols-6">
        <header className="relative row-span-2 flex min-h-60 items-end overflow-hidden rounded-2xl border border-violet-300/25 bg-[radial-gradient(ellipse_at_top_left,#674095_0%,#382052_45%,#1c122e_100%)] p-6 transition-[border-color,box-shadow] duration-300 hover:border-violet-300/25 hover:shadow-lg hover:shadow-violet-950/15 md:col-span-3 md:h-full">
          <Image
            src="/assets/images/coding-pov.webp"
            alt={t("codingImageAlt")}
            width={1280}
            height={720}
            priority={true}
            className="pointer-events-none absolute inset-0 size-full [mask-image:linear-gradient(to_bottom,black_45%,transparent_95%)] object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-6 h-px bg-linear-to-r from-violet-300/70 to-transparent"
          />
          <div className="relative z-10">
            <h3 className="mt-2 mb-2 text-xl font-medium">{t("greeting")}</h3>
            <p className="text-sm text-neutral-300 md:text-base">
              {t("description")}
            </p>
          </div>
        </header>
        <article className="row-span-1 h-full min-h-60 overflow-hidden rounded-2xl border border-sky-300/25 bg-[radial-gradient(ellipse_at_top_right,#174b75_0%,#102d4a_45%,#0b192d_100%)] px-6 py-4 transition-[border-color,box-shadow] duration-300 hover:border-sky-200/50 hover:shadow-lg hover:shadow-sky-950/30 md:col-span-3 md:p-6">
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-200/10 p-2 md:h-16 md:w-16">
                <Meta width={40} height={40} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-white md:text-xl">
                  {t("metaCertTitle")}
                </h3>
                <p className="text-sm text-sky-100/70">
                  {t("metaCertSubtitle")}
                </p>
              </div>
            </div>
            <p className="text-xs text-neutral-200 md:text-sm">
              {t("metaCertDescription")}
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              {metaCertSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-sky-200/10 px-1.5 py-0.5 md:px-3 md:py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href="https://www.coursera.org/account/accomplishments/professional-cert/XEPX26FAB3MY"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-sky-200/30 bg-sky-200/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none md:px-5 md:py-2 md:text-sm"
            >
              {t("viewCertificate")}
            </a>
          </div>
        </article>
        <aside className="relative row-span-1 h-60 overflow-hidden rounded-2xl border border-teal-300/20 bg-[radial-gradient(ellipse_at_bottom_right,#165650_0%,#0b302e_45%,#091b21_100%)] p-6 transition-[border-color,box-shadow] duration-300 hover:border-teal-200/40 hover:shadow-lg hover:shadow-violet-950/15 md:col-span-3 md:h-full">
          <div className="relative z-10 w-1/2">
            <h3 className="mt-2 mb-2 text-xl font-medium">
              {t("locationTitle")}
            </h3>
            <p className="text-sm text-neutral-300 md:text-base">
              {t("locationDescription")}
            </p>
          </div>
          <figure
            className={cn(
              "absolute top-1/12",
              isRtl ? "right-1/4 md:right-1/3" : "left-1/4 md:left-1/3"
            )}
          >
            <Globe />
          </figure>
        </aside>
        <aside className="relative row-span-1 h-full overflow-hidden rounded-2xl border border-amber-200/25 bg-[radial-gradient(ellipse_at_top_left,#694424_0%,#3a291f_45%,#211c21_100%)] p-6 transition-[border-color,box-shadow] duration-300 hover:border-amber-200/40 hover:shadow-lg hover:shadow-violet-950/15 md:col-span-2">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -end-16 -top-16 size-48 rounded-full border border-amber-200/15 shadow-[0_0_0_28px_#fde68a08,0_0_0_56px_#fde68a05]"
          />
          <div className="relative flex size-full flex-col items-center justify-center gap-4">
            <h3 className="mt-2 mb-2 text-center text-base md:text-xl">
              {t("academicCollaboration")}
            </h3>
            <CopyEmailButton />
          </div>
        </aside>
        <article className="relative row-span-1 h-full overflow-hidden rounded-2xl border border-indigo-300/25 bg-[#131a30] px-6 py-2 transition-[border-color,box-shadow] duration-300 hover:border-violet-300/25 hover:shadow-lg hover:shadow-violet-950/15 sm:p-6 md:col-span-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(#a5b4fc07_1px,transparent_1px),linear-gradient(90deg,#a5b4fc07_1px,transparent_1px)] bg-size-[28px_28px]"
          />
          <div className="relative z-10 w-1/2">
            <h3 className="mb-2 text-base sm:text-xl">{t("techStackTitle")}</h3>
            <p className="text-xs text-neutral-200 md:text-sm lg:text-base">
              {t("techStackDescription")}
            </p>
          </div>
          <div className="absolute inset-y-0 inset-s-7/12 h-full w-full sm:inset-s-1/2 md:inset-y-9 md:scale-125">
            <Frameworks />
          </div>
        </article>
      </div>
    </section>
  );
}
