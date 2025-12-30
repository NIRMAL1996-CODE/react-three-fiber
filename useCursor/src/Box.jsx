import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={(e) => {
        e.stopPropagation(); // stop event going back
        document.body.style.cursor = "pointer"; // hand cursor
      }}
      onPointerLeave={() => {
        document.body.style.cursor = "default"; // normal cursor
      }}
    >
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Box;
