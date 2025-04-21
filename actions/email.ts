"use server";

import { Resend } from "resend";
import { ContactEmail } from "../emails/ContactEmail";
import { contactFormSchema } from "../lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());

    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        error: result.error.errors.map((error) => error.message).join(", "),
      };
    }

    const validatedData = result.data;

    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact from ${validatedData.name}`,
      react: ContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      }),
    });

    if (response.data?.id) {
      return {
        success: true,
        message: "Email sent successfully",
      };
    } else if (response.error) {
      return {
        success: false,
        error: "Failed to send email",
      };
    }
  } catch (error) {
    return {
      success: false,
      error: "Failed to send email",
    };
  }
}
