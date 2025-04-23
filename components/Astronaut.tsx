import { useRef, useEffect } from "react";
import { type Group, type SkinnedMesh } from "three";
import { type ThreeElements, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSpring, useMotionValue } from "motion/react";

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
    <group
      {...props}
      ref={group}
      dispose={null}
      rotation={[-Math.PI / 2, -0.2, 2.2]}
      scale={props.scale || 0.3}
      position={props.position || [1.3, -1, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              <skinnedMesh
                name="Cube001_0"
                geometry={(nodes.Cube001_0 as SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube001_0 as SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube005_0"
                geometry={(nodes.Cube005_0 as SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube005_0 as SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube002_0"
                geometry={(nodes.Cube002_0 as SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube002_0 as SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Plane_0"
                geometry={(nodes.Plane_0 as SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Plane_0 as SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube008_0"
                geometry={(nodes.Cube008_0 as SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube008_0 as SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube004_0"
                geometry={(nodes.Cube004_0 as SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube004_0 as SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube003_0"
                geometry={(nodes.Cube003_0 as SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube003_0 as SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube_0"
                geometry={(nodes.Cube_0 as SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube_0 as SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube009_0"
                geometry={(nodes.Cube009_0 as SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube009_0 as SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube011_0"
                geometry={(nodes.Cube011_0 as SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube011_0 as SkinnedMesh).skeleton}
              />
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group
                name="Cube009"
                scale={1.307}
                rotation={[-2.708, 0.013, -1.447]}
              />
              <group name="Cube011" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");
