import { Sparkles, useGLTF } from "@react-three/drei";

const Cube = () => {
  const portal = useGLTF("/portal.glb");
  return (     
<>
   <primitive object={portal.scene} scale={0.5} castShadow/>;
   <Sparkles />
    </>
  );
};

export default Cube;
