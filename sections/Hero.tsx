"use client";

import { Suspense } from "react";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@/components/Loader";
import { HeroText } from "@/components/HeroText";
import { Astronaut } from "@/components/Astronaut";
import { ParallaxBackground } from "@/components/ParallaxBackground";

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section
      id="home"
      className="flex min-h-screen items-start justify-center overflow-hidden px-5 sm:px-10 md:items-start md:justify-start lg:px-15"
    >
      <HeroText />
      <ParallaxBackground />
      <figure className="absolute inset-0 h-screen w-screen">
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.23 : undefined}
                position={isMobile ? [0, -1.5, 0] : undefined}
              />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
}
