import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./components/Cube";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 3, 5], fov: 60 }}>
      <ambientLight />
      <directionalLight position={[1,2,3]} intensity={1.5}/>
      <ambientLight intensity={0.5}/>
      <OrbitControls />
      <Cube />
    </Canvas>
  );
};

export default App;
