import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-7xl">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
