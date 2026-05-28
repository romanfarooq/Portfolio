"use client";

import { Suspense } from "react";
import { useLocale } from "next-intl";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Float, Environment } from "@react-three/drei";

import { isRtlLocale } from "@/i18n/routing";
import { getModelConfigs } from "@/lib/model-config";
import { Loader } from "@/components/Loader";
import { HeroText } from "@/components/HeroText";
import { Astronaut } from "@/components/Astronaut";
import { SpaceStation } from "@/components/SpaceStation";
import { ParallaxBackground } from "@/components/ParallaxBackground";

export function Hero() {
  const locale = useLocale();
  const isRtl = isRtlLocale(locale);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { astronautConfig, spaceStationConfig } = getModelConfigs({
    isRtl,
    isMobile
  });

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
              <SpaceStation isRtl={isRtl} {...spaceStationConfig} />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
}
