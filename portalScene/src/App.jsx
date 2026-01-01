import { Canvas } from "@react-three/fiber";
import Cube from "./Box";
import { OrbitControls, Sparkles } from "@react-three/drei";

const App = () => {
  return (
    <Canvas camera={{position:[1,1,3], fov: 75 }}>
      <OrbitControls/>
      <color attach="background" args={["black"]} />
      <ambientLight intensity={3} />
      <Cube />
    </Canvas>
  );
};

export default App;
