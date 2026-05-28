"use client";

import { Suspense } from "react";
import { MathUtils } from "three";
import { Canvas } from "@react-three/fiber";
import { useLocale } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { Float, Environment } from "@react-three/drei";

import { Loader } from "@/components/Loader";
import { HeroText } from "@/components/HeroText";
import { Astronaut } from "@/components/Astronaut";
import { SpaceStation } from "@/components/SpaceStation";
import { isRtlLocale } from "@/i18n/routing";
import { ParallaxBackground } from "@/components/ParallaxBackground";

type ModelConfig = {
  [key in "mobile" | "desktop"]: {
    scale: number;
    position: [number, number, number];
    rotation: [number, number, number];
  };
};

const STATION_CONFIG: ModelConfig = {
  mobile: {
    scale: 0.5,
    position: [-0.8, 1.5, -0.85],
    rotation: [
      MathUtils.degToRad(38),
      MathUtils.degToRad(-145),
      MathUtils.degToRad(27)
    ]
  },
  desktop: {
    scale: 1,
    position: [-2.8, 1.25, -0.85],
    rotation: [
      MathUtils.degToRad(38),
      MathUtils.degToRad(-105),
      MathUtils.degToRad(33)
    ]
  }
};

const ASTRONAUT_CONFIG: ModelConfig = {
  mobile: {
    scale: 1.2,
    position: [0.1, -1, 0],
    rotation: [
      MathUtils.degToRad(30),
      MathUtils.degToRad(126),
      MathUtils.degToRad(-36)
    ]
  },
  desktop: {
    scale: 1.5,
    position: [1.5, -1, 0],
    rotation: [
      MathUtils.degToRad(30),
      MathUtils.degToRad(126),
      MathUtils.degToRad(-36)
    ]
  }
};

function adjustAstronautForRtl(config: ModelConfig["desktop"]) {
  const [positionX, positionY, positionZ] = config.position;
  return {
    ...config,
    position: [-Math.abs(positionX), positionY, positionZ - 0.1] satisfies [
      number,
      number,
      number
    ],
    rotation: [
      MathUtils.degToRad(20),
      MathUtils.degToRad(156),
      MathUtils.degToRad(-16)
    ] satisfies [number, number, number]
  };
}

function mirrorSpaceStationForRtl(config: ModelConfig["desktop"]) {
  const [positionX, positionY, positionZ] = config.position;
  const [rotationX, rotationY, rotationZ] = config.rotation;

  return {
    ...config,
    position: [-positionX, positionY, positionZ] satisfies [
      number,
      number,
      number
    ],
    rotation: [rotationX, -rotationY, -rotationZ] satisfies [
      number,
      number,
      number
    ]
  };
}

export function Hero() {
  const locale = useLocale();
  const isRtl = isRtlLocale(locale);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const viewportPreset = isMobile ? "mobile" : "desktop";
  const isRtlDesktop = isRtl && viewportPreset === "desktop";

  const astronautConfig = isRtlDesktop
    ? adjustAstronautForRtl(ASTRONAUT_CONFIG.desktop)
    : ASTRONAUT_CONFIG[viewportPreset];

  const spaceStationConfig = isRtl
    ? mirrorSpaceStationForRtl(STATION_CONFIG[viewportPreset])
    : STATION_CONFIG[viewportPreset];

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
            <Environment preset="city" resolution={128} />
            <Float>
              <Astronaut {...astronautConfig} />
            </Float>
            <Float>
              <SpaceStation {...spaceStationConfig} />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
}
