# 🎲 R3F Click Spin Cube (Beginner Notes Project)

This project shows how a **cube spins smoothly and stops slowly when clicked**, and **changes to a random color every time** using **React Three Fiber (R3F)**.

---

## 📌 Purpose of this project

- Learn **mouse click events** in R3F
- Understand **useFrame (frame loop)**
- Learn **smooth rotation + smooth stop**
- Learn **random color logic**
- Understand how **React state controls 3D objects**

---

## 📁 Project Files

- `main.jsx` → App starting point
- `App.jsx` → Contains `<Canvas>` (3D world)
- `Box.jsx` → Cube logic (click, spin, color)

---

## 🧠 Important Notes (Read Carefully)

### 🔹 Mouse events in R3F
- R3F uses **raycasting** (ray = invisible line)
- Mouse does NOT touch DOM
- Ray checks which **3D object** is under mouse
- Events are used directly on `<mesh>`

Examples:
- `onClick`
- `onPointerOver`
- `onPointerOut`

---

### 🔹 What is `useFrame`
- `useFrame` runs **every frame**
- Like a **game loop**
- Used for:
  - animation
  - rotation
  - movement

## 🔄 Spin Logic Explained (Very Simple)

### 1️⃣ Click gives speed
```js
setSpeed(0.3);

Speed is given by developer
Bigger value → faster spin
Smaller value → slower spin

2️⃣ Rotation happens every frame
meshRef.current.rotation.y += speed;

Cube rotates a little each frame
Uses current speed

3️⃣ Smooth stop using friction
setSpeed(speed * 0.95);

Meaning:
0.95 = friction (slowing power)
Speed reduces every frame
Cube stops smoothly

📌 Rule:

0.98 → spins longer
0.95 → normal
0.8 → stops fast
👉 To stop sooner → decrease 
🎨 Random Color Logic (Easy Way)
const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

Meaning:

Colors array = color box 🎨
Random index is chosen
Cube gets new color on each click

🧩 State & Ref Notes

useState
Stores color
Stores speed
useRef
Direct access to cube
Needed for rotation

✅ Final Behavior

Click cube 🖱️
Cube spins 🌀
Spin slows naturally ❄️
Cube changes color 🌈

🧪 Beginner Tips

Do NOT use setState heavily inside useFrame
Prefer small math changes per frame
Always use useRef for mesh control
R3F is like React + Game engine

🚀 Built With

React
Three.js
@react-three/fiber