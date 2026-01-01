import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// generate positions once (outside component)
// make 50 sparkle positions
const sparklesPositions = [];
for (let i = 0; i < 50; i++) {
  const x = (Math.random() - 0.5) * 2; // left/right
  const y = Math.random() * 2;         // up
  const z = (Math.random() - 0.5) * 2; // forward/back
  sparklesPositions.push([x, y, z]);
}

const Sparkles = () => {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.01; // spin sparkles
  });

  return (
    <group ref={group}>
      {sparklesPositions .map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="cyan" emissive="cyan" />
        </mesh>
      ))}
    </group>
  );
};

export default Sparkles;
