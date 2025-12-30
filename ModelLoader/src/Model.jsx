// import { useGLTF } from "@react-three/drei";

// const Model = () => {
//   const model = useGLTF("/car.glb");

//   return <primitive object={model.scene} scale={0.9} position-y={-0.2}/>;
// };

// export default Model;

import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const Model = () => {
  const gltf = useGLTF("/hand.glb");
  const { actions } = useAnimations(gltf.animations, gltf.scene);

  // actions["AnimationName"]?.play(); // start animation
useEffect(() => {
    const names = Object.keys(actions);
    console.log("Available animations:", names);
    if (names[0]) actions[names[0]].play();
  }, [actions]);
  return <primitive object={gltf.scene} scale={0.9}/>;
};
export default Model;