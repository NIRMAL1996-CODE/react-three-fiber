import { Canvas } from "@react-three/fiber";
import Cube from "./Box";
import { OrbitControls } from "@react-three/drei";
const App = () => {
  return (
    <Canvas camera={{position:[2,2,3], fov: 75 }}>
      <OrbitControls/>
      <ambientLight intensity={0.5} />
      <Cube />
    </Canvas>
  );
};

export default App;
