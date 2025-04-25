"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { Card } from "@/components/Card";
import { Globe } from "@/components/Globe";
import { Frameworks } from "@/components/Frameworks";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import VanillaTilt, {
  type TiltOptions,
  type HTMLVanillaTiltElement,
} from "vanilla-tilt";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null!);
  const grid1Ref = useRef<HTMLDivElement>(null);
  const grid2Ref = useRef<HTMLDivElement>(null);
  const grid3Ref = useRef<HTMLDivElement>(null);
  const grid4Ref = useRef<HTMLDivElement>(null);
  const grid5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: TiltOptions = {
      max: 5,
      speed: 400,
      glare: true,
      gyroscope: false,
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
    <section
      id="about"
      className="mt-20 min-h-screen scroll-mt-12 px-5 sm:px-10 md:mt-30 lg:px-15"
    >
      <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
      <div className="mt-12 grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-6">
        {/* Grid 1 */}
        <div
          ref={grid1Ref}
          className="from-storm to-indigo relative row-span-2 flex h-[15rem] items-end overflow-hidden rounded-2xl bg-gradient-to-b p-6 duration-200 md:col-span-3 md:h-full"
        >
          <Image
            src="/assets/images/coding-pov.webp"
            alt="Coding POV"
            quality={100}
            priority={true}
            width={1828}
            height={813}
            className="absolute -top-[1rem] -right-[5rem] scale-[1.75] md:inset-y-10 md:left-50 md:scale-[3] lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="mt-2 mb-2 text-xl">Hi, I'm Roman Farooq</p>
            <p className="text-sm text-pretty text-neutral-400 md:text-base">
              A dedicated Full-Stack Developer passionate about crafting
              intuitive user experiences on the client side and building
              scalable server solutions with modern tools and best practices.
            </p>
          </div>
          <div className="pointer-evets-none from-indigo absolute inset-x-0 -bottom-4 h-1/2 bg-gradient-to-t sm:h-1/3" />
        </div>
        {/* Grid 2 */}
        <div
          ref={grid2Ref}
          className="from-storm to-indigo relative row-span-1 h-[15rem] overflow-hidden rounded-2xl bg-gradient-to-b p-6 duration-200 md:col-span-3 md:h-full"
        >
          <div
            ref={containerRef}
            className="flex h-full w-full items-center justify-center"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="React.js"
              containerRef={containerRef}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Next.js"
              containerRef={containerRef}
            />
            <Card
              style={{ rotate: "90deg", bottom: "40%", left: "80%" }}
              text="Node.js"
              containerRef={containerRef}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Flutter"
              containerRef={containerRef}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Python"
              containerRef={containerRef}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="/assets/images/cplusplus.webp"
              containerRef={containerRef}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="/assets/images/javascript.webp"
              containerRef={containerRef}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="/assets/images/nextjs.webp"
              containerRef={containerRef}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div
          ref={grid3Ref}
          className="relative row-span-1 h-[15rem] overflow-hidden rounded-2xl bg-gradient-to-tl from-[#3A3A3A] via-[#242424] to-[#3A3A3A] p-6 duration-200 md:col-span-3 md:h-full"
        >
          <div className="z-10 w-[50%]">
            <p className="mt-2 mb-2 text-xl">Time Zone</p>
            <p className="text-sm text-pretty text-neutral-400 md:text-base">
              I'm based in Lahore, Pakistan, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute top-[10%] left-[30%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div
          ref={grid4Ref}
          className="from-royal to-lavender relative row-span-1 h-[15rem] overflow-hidden rounded-2xl bg-gradient-to-b p-6 duration-200 md:col-span-2 md:h-full"
        >
          <div className="flex size-full flex-col items-center justify-center gap-4">
            <p className="mt-2 mb-2 text-center text-xl">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div
          ref={grid5Ref}
          className="from-storm to-indigo relative row-span-1 h-[15rem] overflow-hidden rounded-2xl bg-gradient-to-b px-6 py-2 duration-200 sm:p-6 md:col-span-4 md:h-full"
        >
          <div className="z-10 w-[50%]">
            <p className="mb-2 text-base sm:text-xl">Tech Stack</p>
            <p className="text-xs text-pretty text-neutral-400 sm:text-sm md:text-base">
              Proficient in TypeScript, React, Next.js, Node.js, and Express.js.
              Skilled in database management (MongoDB, PostgreSQL) and CSS
              frameworks like Tailwind CSS. Familiar with Docker, Prisma, Redux,
              Flutter, and backend development using Python and Django.
            </p>
          </div>
          <div className="absolute inset-y-0 start-[55%] h-full w-full sm:start-[50%] md:inset-y-9 md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
}
