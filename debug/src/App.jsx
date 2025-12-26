import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";
import { Leva } from "leva";
import { Perf } from "r3f-perf";
const App = () => {
  return (
    <>  
    <Leva collapsed /> 
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Perf position="top-left" />
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <Box />
      <OrbitControls />
      </Canvas>
    </>
    
  );
};

export default App;
