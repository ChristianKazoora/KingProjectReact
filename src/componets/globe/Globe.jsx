import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useState, ref } from "react";
import CanvasLoader from "../CanvasLoader";
import * as THREE from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { animated as a } from "@react-spring/web";
import useActive from "./useActive";
import Header from "../Header";
const Globe = ({ items, active, hide }) => {
  const spring = useSpring({
    width: active === null ? "83.33vw" : "100vw", // animate the width based on the viewport width
    config: { tension: 300, friction: 0 }, // adjust the animation config
  });

  return (
    <div
      className={`${
        hide
          ? "hidden"
          : "absolute grid  h-full w-full grid-rows-1 grid-flow-col transition-all ease-in-out "
      }`}
    >
      {items.map((item) => (
        <a.div // use the web animation component
          key={item.id}
          className={`${spring.width} ${
            active === item.id ? "" : "w-10/12 h-auto  justify-self-center"
          }`} // use the spring width and the col-span classes
        >
          <Canvas>
            <Suspense fallback={<CanvasLoader />}>
              {/* <OrbitControls enableZoom={false} /> */}
              <AnimatedItem item={item} active={active} />
            </Suspense>
          </Canvas>
        </a.div>
      ))}
    </div>
  );
};

// create a custom component that uses react-spring
const AnimatedItem = ({ item, active }) => {
  // use the useSpring hook to create a spring animation
  const spring = useSpring({
    scale: active === item.id ? 2 : item.props.scale, // animate the scale based on the
    config: { tension: 150, friction: 350 }, // adjust the animation config
  });

  return (
    <animated.mesh scale={spring.scale}>
      <item.component {...item.props} />
    </animated.mesh>
  );
};

export default Globe;

// import { Canvas, useThree } from "@react-three/fiber";
// import { Suspense, useState, useEffect } from "react";
// import CanvasLoader from "../CanvasLoader";
// import { Sphere } from "./Sphere";
// import { Planet } from "./Planet2";
// import { Football } from "./Football";

// import * as THREE from "three";
// import CameraControls from "camera-controls";
// import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { useSpring, animated } from "@react-spring/three";
// // You need to call this once at the start of your app
// CameraControls.install({ THREE: THREE });
// const items = [
//   { id: 0, component: Football, props: { scale: 1.5 } },
//   { id: 1, component: Planet, props: { scale: 1.35 } },
//   { id: 2, component: Sphere, props: { scale: 1.45 } },
// ];

// const Globe = () => {
//   const camera = (
//     <PerspectiveCamera
//       makeDefault={false}
//       far={1000}
//       near={0.1}
//       fov={22.895}
//       position={[5.953, 0.804, 10]}
//       rotation={[-Math.PI / 2, 1.424, Math.PI / 2]}
//     />
//   );
//   const [active, setActive] = useState(null);
//   return (
//     <div className="grid h-full w-full grid-rows-1 grid-flow-col transition-all ease-in-out">
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className={active === item.id ? "w-full" : "w-10/12 hidden md:block"}
//           onClick={() => {
//             setActive(item.id);
//           }}
//         >
//           <Canvas camera={camera}>
//             <Suspense fallback={<CanvasLoader />}>
//               <OrbitControls enableZoom={false} />
//               <AnimatedItem item={item} active={active} /> // use a custom
//               component
//             </Suspense>
//           </Canvas>
//         </div>
//       ))}
//     </div>
//   );
// };

// // create a custom component that uses react-spring
// const AnimatedItem = ({ item, active }) => {
//   // use the useSpring hook to create a spring animation
//   const spring = useSpring({
//     scale: active === item.id ? 3 : item.props.scale, // animate the scale based on the active state
//     config: { tension: 150, friction: 150 }, // adjust the animation config
//   });
//   return (
//     <animated.mesh scale={spring.scale}>
//       <item.component {...item.props} />
//     </animated.mesh>
//   );
// };

// export default Globe;

// import { Canvas, useThree } from "@react-three/fiber";
// import { Suspense, useState, useEffect } from "react";
// import CanvasLoader from "../CanvasLoader";
// import { Sphere } from "./Sphere";
// import { Planet } from "./Planet";
// import { Football } from "./Football";
// import * as THREE from "three";
// import CameraControls from "camera-controls";
// import { OrbitControls } from "@react-three/drei";
// // You need to call this once at the start of your app
// CameraControls.install({ THREE: THREE });
// const items = [
//   { id: 0, component: Football, props: { scale: 2.2 } },
//   { id: 1, component: Planet, props: { scale: 1.8 } },
//   { id: 2, component: Sphere, props: { scale: 2 } },
// ];

// const Globe = () => {
//   const [active, setActive] = useState(null);
//   return (
//     <div className="grid h-full w-full grid-rows-1 grid-flow-col transition-all ease-in-out">
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className={active === item.id ? "w-full" : "w-10/12 hidden md:block"}
//           onClick={() => {
//             setActive(item.id);
//             item.props.scale = 5;
//           }}
//         >
//           <Canvas>
//             <Suspense fallback={<CanvasLoader />}>
//               <OrbitControls enableZoom={false} />
//               <item.component {...item.props} />
//             </Suspense>
//           </Canvas>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Globe;

// import { Canvas, useThree } from "@react-three/fiber";
// import { Suspense, useState, useEffect } from "react";
// import { OrbitControls } from "@react-three/drei";
// import CanvasLoader from "../CanvasLoader";
// import { Sphere } from "./Sphere";
// import { Planet } from "./Planet";
// import { Football } from "./Football";

// const items = [
//   { id: 0, component: <Planet scale={0.2 - 2} /> },
//   { id: 1, component: <Sphere scale={2} /> },
//   { id: 2, component: <Football scale={2} /> },
// ];

// const Globe = () => {
//   const [active, setActive] = useState(null);

//   return (
//     <div className="grid h-full w-full grid-rows-1 grid-flow-col transition-all ease-in-out">
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className={active === item.id ? "w-full" : "w-10/12 hidden md:block"}
//           onClick={() => {
//             setActive(item.id);
//           }}
//         >
//           <Canvas>
//             <Suspense fallback={<CanvasLoader />}>
//               <OrbitControls enableZoom={false} />
//               <DollyZoom active={active === item.id} />
//               {item.component}
//             </Suspense>
//           </Canvas>
//         </div>
//       ))}
//     </div>
//   );
// };
// const DollyZoom = ({ active }) => {
//   const { camera } = useThree();
//   const initialZoom = camera.zoom;
//   useEffect(() => {
//     const handleZoom = () => {
//       const newZoom = active ? 4 : 1; // Adjust the zoom levels as needed
//       camera.zoom = newZoom;
//       camera.updateProjectionMatrix();
//     };

//     handleZoom();
//     return () => {
//       //  window.removeEventListener("wheel", handleScroll);
//     };
//   }, [camera, active]);

//   return null;
// };
// export default Globe;

// import { Canvas } from "@react-three/fiber";
// import { Sphere } from "./Sphere";
// import { Suspense, useState } from "react";
// import { OrbitControls } from "@react-three/drei";
// import { Planet } from "./Planet";
// import { Football } from "./Football";
// import CanvasLoader from "../CanvasLoader";
// const components = [Planet, Sphere, Football]; // Array of components to render

// const Globe = () => {
//   return (
//     <div className="grid h-full w-full grid-rows-1 grid-flow-col">
//       {components.map((Component, index) => (
//         <div key={index} className="h-full w-3/3">
//           <Canvas>
//             <Suspense fallback={<CanvasLoader />}>
//               <OrbitControls enableZoom={false} />
//               <Component />
//             </Suspense>
//           </Canvas>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Globe;
