import { useGLTF } from "@react-three/drei";

const Model = () => {
  const model = useGLTF("/car.glb");

  return <primitive object={model.scene} scale={0.9} position-y={-0.2}/>;
};

export default Model;
