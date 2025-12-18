
import { useTexture} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";
// import { TextureLoader } from "three";

const Cube = () => {
 let texture= useTexture("./p2.png");
  // const texture = new TextureLoader().load("/car.png"); 
let meshref=useRef(null); 
  useFrame(() => {
    meshref.current.rotation.y += 0.01;
  });
  return (
    <group rotation={[0, -0.2, 0.3]}>
    <mesh ref={meshref}  >
      {/* <boxGeometry args={[3,3,3]}/> */}
      <cylinderGeometry args={[2, 2, 2, 62, 62, true]} />
      <meshStandardMaterial map={texture} transparent side={2} />
    </mesh>
  </group>
  );
};

export default Cube;
