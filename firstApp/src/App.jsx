import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Cube from "./Cube";

const App = () => {
  return (
    <Canvas camera={{fov:65}}>
       <OrbitControls/>
       <ambientLight/>
       <Cube/>
    </Canvas>
  )
};

export default App;
