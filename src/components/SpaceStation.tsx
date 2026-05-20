import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import type { ThreeElements } from "@react-three/fiber";

type SpaceStationProps = ThreeElements["group"] & {
  floatBaseX: number;
  floatBaseY: number;
};

export function SpaceStation({
  floatBaseX,
  floatBaseY,
  ...props
}: SpaceStationProps) {
  const group = useRef<Group>(null);

  const { scene } = useGLTF(
    "/models/iss_international_space_station.glb",
    "/draco/"
  );

  useFrame(({ clock }) => {
    if (!group.current) return;

    const elapsedTime = clock.getElapsedTime();
    group.current.position.x = floatBaseX + Math.sin(elapsedTime * 0.32) * 0.08;
    group.current.position.y = floatBaseY + Math.cos(elapsedTime * 0.38) * 0.04;
    group.current.rotation.y = -elapsedTime * 0.05;
    group.current.rotation.z = Math.sin(elapsedTime * 0.25) * 0.03;
  });

  return (
    <group
      {...props}
      ref={group}
      dispose={null}
      scale={props.scale}
      rotation={props.rotation}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/iss_international_space_station.glb", "/draco/");
