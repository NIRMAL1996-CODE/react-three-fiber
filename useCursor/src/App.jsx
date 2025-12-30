import { Canvas } from "@react-three/fiber";
import Box from "./Box";

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <Box/>
    </Canvas>
  );
};

export default App;
