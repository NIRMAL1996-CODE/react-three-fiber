# React Three Fiber (R3F) - Environment Mapping Notes

## 1. What is Environment Mapping
- Environment mapping = using a surrounding image or HDR to make objects look shiny and real.
- Gives realistic reflections, natural lighting, and better depth.
- Sky vs Environment:
  - Sky → only background (what we see)
  - Environment → affects object (reflections + light)

**Tough words:**  
- Environment → surrounding world  
- Reflection → mirror effect  
- HDRI → high detail light image

## 2. Basic R3F Scene Setup
```jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";

const App = () => (
  <Canvas camera={{ position: [3,3,3] }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5,5,5]} />
    <OrbitControls />
    <Box />
  </Canvas>
);

export default App;

// Box.jsx
const Box = () => (
  <mesh position={[0,0,0]}>
    <boxGeometry />
    <meshStandardMaterial metalness={1} roughness={0} />
  </mesh>
);

export default Box;

Canvas → 3D world
mesh → 3D object holder
meshStandardMaterial → reacts to light
OrbitControls → rotate with mouse

3. Adding Sky (visual only)

<Sky sunPosition={[5,5,5]} />
Sky → only background, no reflection on objects
Metal/glass objects don’t react to it

4. Adding Environment (real reflections)

import { Environment } from "@react-three/drei";
<Environment preset="sunset" />
<mesh>
  <boxGeometry />
  <meshStandardMaterial metalness={1} roughness={0} />
</mesh>

Environment surrounds object for reflection + lighting
Preset options: sunset, city, studio, forest, warehouse, night
Works for metal, glass, plastic differently
Object automatically reflects environment

5. Why use Environment
Makes objects realistic
Replaces many lights → better performance
Sets mood → sunset = warm, night = dark

6. Common doubts & answers
Q: Is Environment only visible on metal objects?
A: No, all objects react. Metal shows strong reflection, plastic/glass softer.

Q: Sky + Environment different → why confusing?
A: Sky = visible background, Environment = object reflection. Can look weird if mismatch.

Q: Can we skip lights if using Environment?
A: Yes mostly, Environment provides light. Extra ambient/directional lights optional for more control.

Q: Can we use Environment inside Box component?
A: Yes, but usually scene-wide in App.js. For per-object reflections → use CubeCamera.

Q: What is Lightformer?
A: Helper to shape light inside HDR environment. Only affects reflections, not shadows.

Q: Why we need Lightformer?
A: Gives better reflections without adding real lights, useful for studio HDR.

Q: Can each box have different environment?
A: Yes, using CubeCamera. Normal Environment = one per scene. CubeCamera → per-object reflection.

7. Lightformer Example

import { Lightformer } from "@react-three/drei";
<Lightformer intensity={5} rotation-x={Math.PI / 2} position={[0,5,-5]} />

intensity → brightness
rotation/position → where light hits reflections

8. Environment Ground Properties

<Environment
  preset="city"
  ground={{ height: 5, radius: 50, scale: 100 }}
/>

height → ground level
radius → ground size
scale → texture/stretch size

9. Stage Helper
<Stage> = ready-made studio scene
Adds light + environment + floor + contact shadow
Perfect for product presentation
contactShadow → shadow under object
environment → reflection + light
preset → studio style
intensity → light brightness

<Stage
  contactShadow={{ opacity: 0.2, blur: 3 }}
  environment="sunset"
  preset="portrait"
  intensity={2}
>
  <Box />
</Stage>

10. Using positions for boxes

<mesh position={[x, y, z]}>
  <boxGeometry />
  <meshStandardMaterial metalness={1} roughness={0} />
</mesh>

[x, y, z] → coordinates (x = left/right, y = up/down, z = forward/back)

11. CubeCamera for per-object environment

import { CubeCamera, Environment } from "@react-three/drei";
const BoxWithEnv = ({ position, preset }) => (
  <CubeCamera resolution={256} frames={1}>
    {(texture) => (
      <mesh position={position}>
        <boxGeometry />
        <meshStandardMaterial metalness={1} roughness={0} envMap={texture} />
        <Environment map={texture} preset={preset} />
      </mesh>
    )}
  </CubeCamera>
);

CubeCamera → makes reflection for that object
envMap={texture} → object uses its own environment
preset → different reflections

12. Summary
Sky = background only
Environment = reflection + light for object
Metal/glass → shows reflection clearly
HDR/presets → auto-light + reflection
CubeCamera → different environment per object
Lightformer → tweak reflections in HDR
Stage → ready studio setup
Environment can replace some lights, optional extra lights for control
One-line mantra:
Sky = what you see, Environment = what object sees