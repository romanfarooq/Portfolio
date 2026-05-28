import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "motion/react";
import type { Group } from "three";
import type { ThreeElements } from "@react-three/fiber";

type SpaceStationProps = ThreeElements["group"] & {
  isRtl: boolean;
};

export function SpaceStation({ isRtl, ...props }: SpaceStationProps) {
  const group = useRef<Group>(null);

  const { scene } = useGLTF(
    "/models/iss_international_space_station.glb",
    "/draco/"
  );

  const xPosition = useMotionValue(isRtl ? -5 : 5);
  const xSpring = useSpring(xPosition, { damping: 30 });

  useEffect(() => {
    xSpring.set(0);
  }, [xSpring]);

  useFrame(() => {
    if (group.current) {
      group.current.position.x = xSpring.get();
    }
  });

  return (
    <group {...props} dispose={null}>
      <group ref={group}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/iss_international_space_station.glb", "/draco/");
