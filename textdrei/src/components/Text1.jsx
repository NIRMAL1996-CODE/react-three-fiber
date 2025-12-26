import { Center, Float, Text3D } from "@react-three/drei";

const Text1 = () => {
  return (
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
    bevelThickness={0.02}>
    Hello 3D
    <meshStandardMaterial color="yellow" />
  </Text3D>
  </Float>
</Center>

  );
};

export default Text1;
