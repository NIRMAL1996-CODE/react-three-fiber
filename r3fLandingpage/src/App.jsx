import { useState } from "react";
import Scene from "./components/Scene";
import Hero from "./components/Hero";

const App = () => {
  const [color, setColor] = useState("orange");

 const changeColor = () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  setColor(randomColor);
};

  return (
    <>
      <Hero onChangeColor={changeColor} />
      <Scene color={color} />
    </>
  );
};

export default App;
