import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";
import { Leva } from "leva";
const App = () => {
  return (
    <>  
    <Leva collapsed /> 
      <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <Box />
      <OrbitControls />
      </Canvas>
    </>
    
  );
};

export default App;
