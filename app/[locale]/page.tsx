import { Fragment } from "react";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Contact } from "@/sections/Contact";
import { Projects } from "@/sections/Projects";
import { Testimonial } from "@/sections/Testimonial";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <main className="container mx-auto max-w-7xl">
        <Hero />
        <About />
        <Projects />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
}
