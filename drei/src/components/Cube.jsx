
import { Html, PivotControls } from "@react-three/drei";
import { useRef } from "react";
// import { TransformControls } from "@react-three/drei";

const Cube = () => {
 const cubeRef = useRef();
  const sphereRef = useRef();
  // const boxRef = useRef();
  return (
    <>
    {/*TransformControls 
     <TransformControls object={boxRef} />
      <mesh ref={boxRef}>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh> */}

    {/* PivotControls */}
    <PivotControls anchor={[0, 0, 0]}>
    <mesh ref={cubeRef} position={[-2, 0.5, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="yellow" />

      <Html position={[1,1,0]}
      wrapperClass="label" //like this we can give class name for div
      center
      distanceFactor={6}
      occlude={[sphereRef, cubeRef]} 
      >Hello</Html>

    </mesh>
    </PivotControls>

    <mesh ref={cubeRef} position={[-2, 0.5, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="yellow" />
    </mesh>
    
     <mesh  ref={sphereRef} position={[2, 1, 0]}>
      <sphereGeometry />
      <meshStandardMaterial color="pink" />
      
    </mesh>

     <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="green" />
    </mesh>
    

    </>
  );
};

export default Cube;
