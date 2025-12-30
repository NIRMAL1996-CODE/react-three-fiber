import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <OrbitControls/>
      <Cube position={[-1, 0, 0]} />
      <Cube position={[1, 0, 0]} />
    </Canvas>
  );
};

export default App;
