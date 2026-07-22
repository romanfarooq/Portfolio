import { MathUtils } from "three";

type HeroViewportPreset = "mobile" | "desktop";

type ModelConfig = {
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
};

const STATION_CONFIG: Record<HeroViewportPreset, ModelConfig> = {
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

const ASTRONAUT_CONFIG: Record<HeroViewportPreset, ModelConfig> = {
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
    position: [3, -1, 0],
    rotation: [
      MathUtils.degToRad(40),
      MathUtils.degToRad(125),
      MathUtils.degToRad(-50)
    ]
  }
};

function adjustAstronautForRtl(config: ModelConfig) {
  const [positionX, positionY, positionZ] = config.position;

  return {
    ...config,
    position: [-positionX, positionY, positionZ - 0.5] satisfies [
      number,
      number,
      number
    ],
    rotation: [
      MathUtils.degToRad(15),
      MathUtils.degToRad(180),
      MathUtils.degToRad(5)
    ] satisfies [number, number, number]
  };
}

function mirrorSpaceStationForRtl(config: ModelConfig) {
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

export function getModelConfigs({
  isRtl,
  isMobile
}: {
  isRtl: boolean;
  isMobile: boolean;
}) {
  const viewportPreset: HeroViewportPreset = isMobile ? "mobile" : "desktop";
  const isRtlDesktop = isRtl && viewportPreset === "desktop";

  return {
    astronautConfig: isRtlDesktop
      ? adjustAstronautForRtl(ASTRONAUT_CONFIG.desktop)
      : ASTRONAUT_CONFIG[viewportPreset],
    spaceStationConfig: isRtl
      ? mirrorSpaceStationForRtl(STATION_CONFIG[viewportPreset])
      : STATION_CONFIG[viewportPreset]
  };
}
