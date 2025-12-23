const Hero = ({ onChangeColor }) => {
  return (
    <div className="hero">
      <h1>3D Color Cube</h1>
      <p>React + R3F</p>
      <button onClick={onChangeColor}>Change Cube Color</button>
    </div>
  );
};

export default Hero;
