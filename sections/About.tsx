"use client";

import Image from "next/image";
import VanillaTilt, { type HTMLVanillaTiltElement } from "vanilla-tilt";
import { useRef, useEffect } from "react";
import { Card } from "../components/Card";
import { Globe } from "../components/Globe";
import { Frameworks } from "../components/Frameworks";
import { CopyEmailButton } from "../components/CopyEmailButton";

export default function About() {
  const gridContainer = useRef<HTMLDivElement>(null!);
  const grid1Ref = useRef<HTMLDivElement>(null);
  const grid2Ref = useRef<HTMLDivElement>(null);
  const grid3Ref = useRef<HTMLDivElement>(null);
  const grid4Ref = useRef<HTMLDivElement>(null);
  const grid5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    };
    const nodes = [
      grid1Ref.current,
      grid2Ref.current,
      grid3Ref.current,
      grid4Ref.current,
      grid5Ref.current,
    ];
    nodes.forEach((node) => {
      if (node) VanillaTilt.init(node, options);
    });
    return () => {
      nodes.forEach((node) => {
        if (node && (node as unknown as HTMLVanillaTiltElement).vanillaTilt) {
          (node as unknown as HTMLVanillaTiltElement).vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <section id="about" className="c-space section-spacing scroll-mt-12">
      <h2 className="text-heading">About Me</h2>
      <div className="mt-12 grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-6">
        {/* Grid 1 */}
        <div
          ref={grid1Ref}
          className="grid-default-color grid-1 flex items-end"
        >
          <Image
            src="/assets/coding-pov.webp"
            className="absolute -top-[1rem] -right-[5rem] scale-[1.75] md:inset-y-10 md:left-50 md:scale-[3] lg:scale-[2.5]"
            alt="Coding POV"
            quality={100}
            priority={true}
            width={1828}
            height={813}
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Roman Farooq</p>
            <p className="subtext">
              A dedicated Full-Stack Developer skilled in modern frameworks like
              React, Next.js, and Express.js, delivering optimized and
              responsive web and mobile applications.
            </p>
          </div>
          <div className="pointer-evets-none from-indigo absolute inset-x-0 -bottom-4 h-1/2 bg-gradient-to-t sm:h-1/3" />
        </div>
        {/* Grid 2 */}
        <div ref={grid2Ref} className="grid-default-color grid-2">
          <div
            ref={gridContainer}
            className="flex h-full w-full items-center justify-center"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="React.js"
              containerRef={gridContainer}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Next.js"
              containerRef={gridContainer}
            />
            <Card
              style={{ rotate: "90deg", bottom: "40%", left: "80%" }}
              text="Node.js"
              containerRef={gridContainer}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Flutter"
              containerRef={gridContainer}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Python"
              containerRef={gridContainer}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/cplusplus.webp"
              containerRef={gridContainer}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/javascript.webp"
              containerRef={gridContainer}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/dart.webp"
              containerRef={gridContainer}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div ref={grid3Ref} className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Lahore, Pakistan, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute top-[10%] left-[30%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div ref={grid4Ref} className="grid-special-color grid-4">
          <div className="flex size-full flex-col items-center justify-center gap-4">
            <p className="headtext text-center">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div ref={grid5Ref} className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext text-justify">
              Proficient in Full-Stack Web and Mobile Development with key
              languages like Python, JavaScript, and TypeScript. Experienced in
              frameworks such as React.js, Next.js, Node.js, Express.js, and
              Flutter. Also skilled in Database Management (MongoDB, MySQL) and
              utilizing tools like Git and GitHub to build optimized and
              scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 start-[50%] h-full w-full md:inset-y-9 md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
}
