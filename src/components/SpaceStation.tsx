import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";

export function SpaceStation(props: ThreeElements["group"]) {
  const { scene } = useGLTF(
    "/models/iss_international_space_station.glb",
    "/draco/"
  );

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/iss_international_space_station.glb", "/draco/");
