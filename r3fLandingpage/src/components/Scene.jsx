import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const Scene = ({ color }) => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <ambientLight />
      <Cube color={color} />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
