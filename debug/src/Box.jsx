import { useControls } from "leva";

const Box = () => {
  const { position, rotation, scale, visible, color } = useControls("box",{
    position: { value: [-1, 0, 0], step: 0.1 },   // x y z move
    rotation: { value: [0, 0, 0], step: 0.1 },   // x y z rotate
    scale: { value: 1, min: 0.5, max: 3, step: 0.1 }, // size
    visible: true,                              // show / hide
    color: { value: "yellow"}
  });
   const { sposition, srotation, sscale, svisible, scolor } = useControls("sphere",{
    sposition: { value: [1, 0, 0], step: 0.1 },   // x y z move
    srotation: { value: [0, 0, 0], step: 0.1 },   // x y z rotate
    sscale: { value: 1, min: 0.5, max: 3, step: 0.1 }, // size
    svisible: true,                              // show / hide
    scolor: { value: "lightblue"}
  });

  return (
    <>
    <mesh position={position} rotation={rotation} scale={scale} visible={visible}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>

    <mesh position={sposition} rotation={srotation} scale={sscale} visible={svisible}>
      <sphereGeometry />
      <meshStandardMaterial color={scolor} />
    </mesh>
    </>
  );
};

export default Box;
