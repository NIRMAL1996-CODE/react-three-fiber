import { Canvas } from "@react-three/fiber";
import Box from "./Box";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <Box />
    </Canvas>
  );
};

export default App;
