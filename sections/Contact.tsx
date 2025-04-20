"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "../components/Alert";
import { sendEmail } from "../actions/email";
import { Particles } from "../components/Particles";
import { contactFormSchema, ContactFormData } from "../lib/validations";

interface AlertState {
  show: boolean;
  type: "success" | "danger";
  message: string;
}

export default function Contact() {
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    type: "success",
    message: "",
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const showAlertMessage = (type: "success" | "danger", message: string) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const result = await sendEmail(formData);

      if (!result?.success) {
        showAlertMessage("danger", result?.error || "Something went wrong!");
        return;
      }

      reset();
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      console.error(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="c-space section-spacing relative flex scroll-mt-12 items-center"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {alert.show && <Alert type={alert.type} text={alert.message} />}
      <div className="bg-primary mx-auto flex max-w-md flex-col items-center justify-center rounded-2xl border border-white/10 p-5">
        <div className="mb-10 flex w-full flex-col items-start gap-5">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              {...register("message")}
            />
            {errors.message && (
              <span className="text-sm text-red-500">
                {errors.message.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="from-lavender to-royal hover-animation w-full cursor-pointer rounded-md bg-radial px-1 py-3 text-center text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
