import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Cube from "./Cube";

const App = () => {
  return (
    <>
      <h1>3D Image Carousel Cylinder</h1>
      <p>My first React Three Fiber project.I wrapped a PNG texture on a rotating 3D cylinder.</p>

      <Canvas camera={{fov:65}}>
       <OrbitControls/>
       <ambientLight/>
       <Cube/>
    </Canvas>
    </>
    
  )
};

export default App;
