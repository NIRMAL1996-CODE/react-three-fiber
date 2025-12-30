## 🧩 Raycast & meshBounce Notes

### 1️⃣ What is Raycasting?

- **Raycasting** = shooting an invisible ray from a point (like mouse)  
- Checks which **3D object** it hits in the scene  
- Used for **mouse events, selection, interaction**  

---

### 2️⃣ Raycast in Three.js vs R3F

| Feature         | Three.js                     | React Three Fiber (R3F)             |
|-----------------|-----------------------------|------------------------------------|
| Event handling  | Manual, addEventListener    | Built-in React props (`onPointerEnter`, `onClick`) |
| Raycasting      | `Raycaster` class           | Automatic under the hood          |
| Pointer support | Only mouse                  | Mouse, touch, pen (all pointers)  |

**Meaning:**  
- Three.js → you must create ray and check objects manually  
- R3F → automatically handles raycasting for pointer events

---

### 3️⃣ Custom Raycast (meshBounce) old version not need now.

- You can override default raycast logic:
```jsx
<mesh raycast={meshBounce} onClick={() => console.log("hit")} />

## 🖱️ useCursor (from @react-three/drei)

### 1️⃣ What is useCursor?

- `useCursor` is a **helper hook** from Drei  
- Changes the **mouse cursor style** when hovering over objects  
- Works automatically with **pointer events**  

Important point 👶
useCursor is from @react-three/drei, not from @react-three/fiber.