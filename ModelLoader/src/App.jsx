import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <OrbitControls/>

    <ambientLight intensity={5} />
    <directionalLight position={[5, 5, 5]} intensity={1} />

      <Model/>
    </Canvas>
  );
};

export default App;
