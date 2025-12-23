import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cube = ({ color }) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Cube;
