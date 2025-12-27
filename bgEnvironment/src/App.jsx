import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import Box from "./Box";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5] }}>
      {/* <ambientLight intensity={0.5} />
      <directionalLight position={[0, 3, 3]} /> */}
      {/* <Sky sunPosition={[5, 5, 5]} /> */}
      <OrbitControls />
      <Box />
    </Canvas>
  );
};

export default App;
