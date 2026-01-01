import { Color } from "three";

const Cube = () => {
  return (
    <>
    <color attach="background" args={["black"]} />
    <mesh scale={1.5}>
      <boxGeometry/>
      <meshNormalMaterial/>
    </mesh>
    </>
  );
};

export default Cube;
