"use client";

import { Suspense } from "react";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@/components/Loader";
import { HeroText } from "@/components/HeroText";
import { Astronaut } from "@/components/Astronaut";
import { ParallaxBackground } from "@/components/ParallaxBackground";

type AstronautConfig = {
  [key in "mobile" | "desktop"]: {
    scale: number;
    position: [number, number, number];
    rotation: [number, number, number];
  };
};

const ASTRONAUT_CONFIG: AstronautConfig = {
  mobile: {
    scale: 1.2,
    position: [0.1, -1, 0],
    rotation: [Math.PI / 6, Math.PI * 0.7, -Math.PI * 0.2],
  },
  desktop: {
    scale: 1.5,
    position: [1.5, -1, 0],
    rotation: [Math.PI / 6, Math.PI * 0.7, -Math.PI * 0.2],
  },
};

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
                {...(isMobile
                  ? ASTRONAUT_CONFIG.mobile
                  : ASTRONAUT_CONFIG.desktop)}
              />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
}
