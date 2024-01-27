/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 planet2.gltf 
*/

import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Planet(props) {
  const { nodes, materials } = useGLTF(
    "/3Dmodels/stylized_planet/planet2/planet2.gltf"
  );
  const globeRef = useRef();
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    globeRef.current.rotation.y = elapsedTime / 6;
  });
  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={1} />
      <spotLight position={(0, 64, 32)} />
      <group>
        <group ref={globeRef}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Clouds}
            rotation={[0.484, 0.424, 0.042]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.Planet}
            rotation={[0.384, 0.424, 0.042]}
          />
        </group>
      </group>
      <PerspectiveCamera
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={22.895}
        position={[5.953, 0.804, 0]}
        rotation={[-Math.PI / 2, 1.424, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("/3Dmodels/stylized_planet/planet2/planet2.gltf");
