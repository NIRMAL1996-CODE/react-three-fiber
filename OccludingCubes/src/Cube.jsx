import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";

const Cube = ({ position }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
useCursor(hovered);
  useFrame(() => {
    if (hovered) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerEnter={(e) => { e.stopPropagation(); setHovered(true)}}
      onPointerLeave={(e) => { e.stopPropagation(); setHovered(false)}}
      scale={hovered ? 1.5 : 1}
      
    >
      <boxGeometry />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Cube;
