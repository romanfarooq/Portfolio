"use server";

import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

import { env } from "@/env";
import { ContactEmail } from "@/components/ContactEmail";
import { createContactFormSchema } from "@/lib/schema";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const t = await getTranslations("contact");

  try {
    const data = Object.fromEntries(formData.entries());
    const contactFormSchema = createContactFormSchema(t);
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        error: result.error.issues.map((error) => error.message).join(", ")
      };
    }

    const validatedData = result.data;

    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "theromanfarooq@gmail.com",
      subject: `New Portfolio Contact from ${validatedData.name}`,
      react: ContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message
      })
    });

    if (response.data?.id) {
      return {
        success: true,
        message: t("alerts.success")
      };
    } else if (response.error) {
      return {
        success: false,
        error: t("alerts.emailError")
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: t("alerts.emailError")
    };
  }
}
