const Cube = () => {
  return (
    <>
    <mesh position={[-2, 0.5, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>

     <mesh position={[2, 1, 0]}>
      <sphereGeometry />
      <meshStandardMaterial color="skyblue" />
    </mesh>

     <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="green" />
    </mesh>
    </>
  );
};

export default Cube;
