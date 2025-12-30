import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";
// import { meshBounce } from "@react-three/drei";
const Box = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered); // changes cursor to pointer when hovered
  useFrame(() => {
    if (hovered) {
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh
      ref={meshRef}
      // raycast={meshBounce} old verison of drei not need now.
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      scale={hovered ? 2 : 1}
    >
      <boxGeometry />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;
