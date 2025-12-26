import { Center, Float, MeshReflectorMaterial, MeshWobbleMaterial, Text3D } from "@react-three/drei";

const Text1 = () => {
  return (
  <>
   <Center>
  <Float 
     speed={5}        // move speed
     rotationIntensity={1.5} // rotate amount
     floatIntensity={2}      // up-down move
  >
 <Text3D
  font="/fonts/helvetiker_bold.typeface.json"
  size={1.5}
  height={0.3}
  bevelEnabled
  bevelSize={0.02}
  bevelThickness={0.02}
  position={[0, 1, 0]} // move first text up
>
  Hello 3D
  <meshStandardMaterial color="yellow" />
</Text3D>
</Float>
</Center>

  {/* Reflective floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial
          blur={[400, 100]}      // blur intensity
          resolution={1024}      // texture resolution
          mixStrength={0.5}      // reflection strength
          color="greenyellow"
          metalness={0.5}
          roughness={1}
          mirror={0.75}
          // mixBlur={5}
        />
      </mesh>
     
</>

  );
};

export default Text1;
