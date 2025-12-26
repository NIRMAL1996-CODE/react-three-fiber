import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Text1 from "./components/Text1";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight />
      <OrbitControls />
      <Text1/>
    </Canvas>
  );
};

export default App;
