## Model.jsx Notes

- `useGLTF("/car.glb")` → loads the GLB 3D model from public folder
- `model.scene` → actual 3D scene/object inside GLB
- `<primitive object={model.scene} />` → puts the model in R3F scene
- `scale={0.9}` → makes model 90% of original size
- `position-y={-0.2}` → moves model slightly down on Y-axis
- Always add **lights** so model is visible
- File must be in **public folder** (e.g., public/car.glb)

Kid memory:  
“Load model → put it in scene → resize → move a little → make it shine with light”
