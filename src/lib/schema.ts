import { z } from "zod";
import type { Formats } from "next-intl";

type TFunction = (
  key: string,
  values?: Record<string, string | number | Date> | undefined,
  formats?: Formats | undefined
) => string;

export const createContactFormSchema = (t: TFunction) =>
  z.object({
    name: z
      .string()
      .min(1, { message: t("form.validation.nameRequired") })
      .max(50, { message: t("form.validation.nameMaxLength") }),
    email: z.email({ message: t("form.validation.emailInvalid") }),
    message: z
      .string()
      .min(10, { message: t("form.validation.messageMinLength") })
      .max(1000, { message: t("form.validation.messageMaxLength") })
  });

export type ContactFormData = z.infer<ReturnType<typeof createContactFormSchema>>;
