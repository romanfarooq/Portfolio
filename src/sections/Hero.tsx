"use client";

import { Suspense } from "react";
import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Loader } from "@/components/Loader";
import { HeroText } from "@/components/HeroText";
import { Astronaut } from "@/components/Astronaut";
import { SpaceStation } from "@/components/SpaceStation";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { getResponsiveConfig } from "@/lib/utils";

type ModelConfig = {
  [key in "mobile" | "desktop"]: {
    scale: number;
    position: [number, number, number];
    rotation: [number, number, number];
  };
};

const ASTRONAUT_CONFIG: ModelConfig = {
  mobile: {
    scale: 1.2,
    position: [0.1, -1, 0],
    rotation: [Math.PI / 6, Math.PI * 0.7, -Math.PI * 0.2]
  },
  desktop: {
    scale: 1.5,
    position: [1.5, -1, 0],
    rotation: [Math.PI / 6, Math.PI * 0.7, -Math.PI * 0.2]
  }
};

const STATION_CONFIG: ModelConfig = {
  mobile: {
    scale: 0.25,
    position: [-0.72, 1.6, -1.9],
    rotation: [Math.PI * 0.08, Math.PI * 0.35, -Math.PI * 0.08]
  },
  desktop: {
    scale: 0.3,
    position: [-1.75, 1.45, -1.9],
    rotation: [Math.PI * 0.08, Math.PI * 0.35, -Math.PI * 0.08]
  }
};

export function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const astronautConfig = getResponsiveConfig(ASTRONAUT_CONFIG, isMobile);
  const spaceStationConfig = getResponsiveConfig(STATION_CONFIG, isMobile);

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
            <ambientLight intensity={1.5} />
            <pointLight position={[-5, 3, 5]} intensity={2} />
            <directionalLight position={[5, 5, 5]} intensity={4} />
            <Float>
              <SpaceStation
                {...spaceStationConfig}
                floatBaseX={spaceStationConfig.position[0]}
                floatBaseY={spaceStationConfig.position[1]}
              />
            </Float>
            <Float>
              <Astronaut {...astronautConfig} />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
}
