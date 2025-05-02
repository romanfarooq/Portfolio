"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "@/components/Alert";
import { sendEmail } from "@/actions/email";
import { Particles } from "@/components/Particles";
import { ContactFormData, contactFormSchema } from "@/lib/validations";

type AlertType = "success" | "danger";

interface AlertState {
  show: boolean;
  type: AlertType;
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

  const showAlertMessage = ({
    type,
    message,
  }: {
    type: AlertType;
    message: string;
  }) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) =>
        formData.append(key, value),
      );

      const result = await sendEmail(formData);

      if (!result?.success) {
        showAlertMessage({
          type: "danger",
          message: result?.error || "Something went wrong!",
        });
        return;
      }

      reset();

      showAlertMessage({
        type: "success",
        message: "Your message has been sent!",
      });
    } catch (error) {
      console.error(error);
      showAlertMessage({
        type: "danger",
        message: "Something went wrong!",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative mt-20 flex min-h-screen items-center px-5 sm:px-10 md:mt-30 lg:px-15"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={200}
        color="#ffffff"
      />
      {alert.show && <Alert type={alert.type} text={alert.message} />}
      <div className="bg-primary m-10 mx-auto flex max-w-md flex-col items-center justify-center rounded-2xl border border-white/10 p-5">
        <div className="mb-10 flex w-full flex-col items-start gap-5">
          <h2 className="text-3xl font-bold md:text-4xl">Let's Talk</h2>
          <p className="font-normal text-neutral-300">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Full Name
            </label>
            <input
              id="name"
              className="mt-2 min-h-10 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm placeholder-neutral-500 transition duration-200 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none"
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
            <label
              htmlFor="email"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <input
              id="email"
              className="mt-2 min-h-10 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm placeholder-neutral-500 transition duration-200 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none"
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
            <label
              htmlFor="message"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-2 min-h-10 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm placeholder-neutral-500 transition duration-200 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none"
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
            className="from-lavender to-royal w-full cursor-pointer rounded-md bg-radial px-1 py-3 text-center text-lg duration-200 hover:-translate-y-1"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
