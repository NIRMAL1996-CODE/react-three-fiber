import { useGLTF } from "@react-three/drei";

const Model = () => {
  const model = useGLTF("/house.glb");

  return <primitive object={model.scene} scale={0.02} position-y={-2}/>;
};

export default Model;
