import { Environment, Lightformer, Stage } from "@react-three/drei";

const Box = () => {
  return (
    <>
    {/* Environment Mapping */}
     {/* <Environment 
      // background 
      ground={{ height: 5, radius: 28, scale: 100 }}
     preset="forest" /> */}
     {/* sunset, city, forest, studio, warehouse, night */}

    {/* Custom Environment with Background and Plane */}
     {/* <Environment  background >
        <color args={["black"]} 
        attach= "background" />

          <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[10,0,0]} />
          </mesh>

      </Environment> */}

      {/*lightformer  */}

       {/* <Environment background  preset="forest" > 
     
        <Lightformer intensity={5}
        scale={10} 
        color={[10,0,0]} 
        position={[0, 0, -5]}
        form="ring" />

      </Environment> */}
       {/* <mesh position={[2, 1, 0]}>
      <boxGeometry />
      <meshStandardMaterial  />
    </mesh>
     <mesh position={[-2, 1, 0]}>
      <sphereGeometry />
      <meshStandardMaterial  />
    </mesh> */}

    {/* Stage Helper in React Three Fiber */}
    <Stage contactShadow={{opacity : 0.2, blur : 3}}
    environment="sunset"
    preset="portrait"
    intensity={2}>
       <mesh position={[2, 1, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
     <mesh position={[-2, 1, 0]}>
      <sphereGeometry />
      <meshStandardMaterial  color="yellow"/>
    </mesh>
    </Stage>
    
    </>
  );
};

export default Box;
