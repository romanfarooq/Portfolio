import { useFormatter, useTranslations } from "next-intl";

export function ExperienceDates({
  start,
  end
}: {
  start: string;
  end: string | null;
}) {
  const format = useFormatter();
  const t = useTranslations("experience");

  const month = (value: string) =>
    format.dateTime(new Date(`${value}-01T12:00:00Z`), {
      month: "short",
      year: "numeric",
      timeZone: "UTC"
    });

  return (
    <p className="shrink-0 text-xs leading-6 text-neutral-400 sm:text-[13px]">
      <time dateTime={start}>{month(start)}</time>
      {" — "}
      {end ? <time dateTime={end}>{month(end)}</time> : t("present")}
    </p>
  );
}
