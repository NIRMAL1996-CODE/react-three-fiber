import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const Cube = () => {
  return (
    <Canvas>
     <OrbitControls/>
    <mesh >
      <boxGeometry/>
      <meshBasicMaterial />
    </mesh>

    </Canvas>
    
  );
};

export default Cube;
