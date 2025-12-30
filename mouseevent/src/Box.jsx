import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Box = () => {
  const meshRef = useRef();
  const [speed, setSpeed] = useState(0);
  const [color, setColor] = useState("orange");

const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

  useFrame(() => {
    if (speed > 0.001) {
      meshRef.current.rotation.y += speed;
      setSpeed(speed * 0.9); // slow down (smooth stop)
    }
  });

  return (
    <mesh
      ref={meshRef}
      onClick={() => {
        setSpeed(0.3); // start spin
        setColor(getRandomColor()); // new random color
      }}
    >
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Box;
