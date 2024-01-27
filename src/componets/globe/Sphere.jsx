import { useFrame, useLoader } from "@react-three/fiber";
import black from "../../assets/textures/blackTexture.jpg";

import * as THREE from "three";
import { useRef } from "react";

export const Sphere = (props) => {
  const blackMap = useLoader(THREE.TextureLoader, black);
  const earthRef = useRef();
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
  });
  return (
    <>
      <ambientLight intensity={1} />
      <spotLight position={(0, 64, 32)} />
      <mesh ref={earthRef} {...props}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial map={blackMap} />
      </mesh>
    </>
  );
};
