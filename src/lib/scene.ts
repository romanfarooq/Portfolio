import { MathUtils } from "three";

type Viewport = "mobile" | "desktop";
type Vector3 = [x: number, y: number, z: number];

type ModelTransform = {
  scale: number;
  position: Vector3;
  rotation: Vector3;
};

type SceneOptions = {
  isRtl: boolean;
  isMobile: boolean;
};

const STATION_TRANSFORMS: Record<Viewport, ModelTransform> = {
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

const ASTRONAUT_TRANSFORMS: Record<Viewport, ModelTransform> = {
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

function adjustAstronautForRtl(config: ModelTransform): ModelTransform {
  const [positionX, positionY, positionZ] = config.position;

  return {
    ...config,
    position: [-positionX, positionY, positionZ - 0.5],
    rotation: [
      MathUtils.degToRad(15),
      MathUtils.degToRad(180),
      MathUtils.degToRad(5)
    ]
  };
}

function mirrorStationForRtl(config: ModelTransform): ModelTransform {
  const [positionX, positionY, positionZ] = config.position;
  const [rotationX, rotationY, rotationZ] = config.rotation;

  return {
    ...config,
    position: [-positionX, positionY, positionZ],
    rotation: [rotationX, -rotationY, -rotationZ]
  };
}

export function getSceneConfig({ isRtl, isMobile }: SceneOptions) {
  const viewport: Viewport = isMobile ? "mobile" : "desktop";

  return {
    astronautConfig:
      isRtl && viewport === "desktop"
        ? adjustAstronautForRtl(ASTRONAUT_TRANSFORMS.desktop)
        : ASTRONAUT_TRANSFORMS[viewport],
    spaceStationConfig: isRtl
      ? mirrorStationForRtl(STATION_TRANSFORMS[viewport])
      : STATION_TRANSFORMS[viewport]
  };
}
