import { useRef, useEffect } from "react";
import { type Group, type SkinnedMesh } from "three";
import { useSpring, useMotionValue } from "motion/react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { type ThreeElements, useFrame } from "@react-three/fiber";

export function Astronaut(props: ThreeElements["group"]) {
  const group = useRef<Group>(null);

  const { nodes, materials, animations } = useGLTF(
    "/models/tenhun_falling_spaceman_fanart.glb",
  );

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations.length > 0 && actions) {
      const actionName = animations[0].name;
      actions[actionName]?.play();
    }
  }, [actions, animations]);

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);

  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  return (
    <group {...props} ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              {[
                "Cube001_0",
                "Cube005_0",
                "Cube002_0",
                "Plane_0",
                "Cube008_0",
                "Cube004_0",
                "Cube003_0",
                "Cube_0",
                "Cube009_0",
                "Cube011_0",
              ].map((name) => (
                <skinnedMesh
                  key={name}
                  name={name}
                  geometry={(nodes[name] as SkinnedMesh).geometry}
                  material={materials["AstronautFallingTexture.png"]}
                  skeleton={(nodes[name] as SkinnedMesh).skeleton}
                />
              ))}
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");
