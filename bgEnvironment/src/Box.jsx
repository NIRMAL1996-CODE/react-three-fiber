import { Environment, Lightformer, Stage } from "@react-three/drei";

const Box = () => {
  return (
    <>
    {/* Environment Mapping */}
     <Environment 
      // background 
      ground={{ height: 5, radius: 28, scale: 100 }}
     preset="forest" />
     {/* sunset, city, forest, studio, warehouse, night */}

    <mesh position={[2, 1, 0]}>
      <boxGeometry />
      <meshStandardMaterial  />
    </mesh>
     <mesh position={[-2, 1, 0]}>
      <sphereGeometry />
      <meshStandardMaterial  />
    </mesh>
    </>
  );
};

export default Box;
