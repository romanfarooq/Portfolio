"use server";

import { z } from "zod";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";
import { ContactEmail } from "@/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const t = await getTranslations("contact");

  try {
    const contactFormSchema = z.object({
      name: z
        .string()
        .nonempty({
          message: t("form.validation.nameRequired"),
        })
        .max(50, {
          message: t("form.validation.nameMaxLength"),
        }),
      email: z.email({
        message: t("form.validation.emailInvalid"),
      }),
      message: z
        .string()
        .min(10, {
          message: t("form.validation.messageMinLength"),
        })
        .max(1000, {
          message: t("form.validation.messageMaxLength"),
        }),
    });

    const data = Object.fromEntries(formData.entries());

    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        error: result.error.issues.map((error) => error.message).join(", "),
      };
    }

    const validatedData = result.data;

    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "romanfarooq@outlook.com",
      subject: `New Portfolio Contact from ${validatedData.name}`,
      react: ContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      }),
    });

    if (response.data?.id) {
      return {
        success: true,
        message: t("alerts.success"),
      };
    } else if (response.error) {
      return {
        success: false,
        error: t("alerts.emailError"),
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: t("alerts.emailError"),
    };
  }
}
