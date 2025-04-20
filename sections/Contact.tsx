"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "../components/Alert";
import { Particles } from "../components/Particles";

interface FormData {
  name: string;
  email: string;
  message: string;
}

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
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
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

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: data.name,
          to_name: "Ali",
          from_email: data.email,
          to_email: "AliSanatiDev@gmail.com",
          message: data.message,
        },
        "pn-Bw_mS1_QQdofuV",
      );
      reset();
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      console.log(error);
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
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">Name is required</span>
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
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email?.type === "required" && (
              <span className="text-sm text-red-500">Email is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-sm text-red-500">
                Please enter a valid email
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
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-sm text-red-500">Message is required</span>
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
