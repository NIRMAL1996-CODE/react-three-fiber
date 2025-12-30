import { useGLTF } from "@react-three/drei";

const Model = () => {
  const model = useGLTF("/man.glb");

  return <primitive object={model.scene} scale={0.02} position-y={-0.2}/>;
};

export default Model;
