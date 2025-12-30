# 🖱️ Cursor Handling in R3F (React Three Fiber)

## 1️⃣ CSS / Tailwind cursor-pointer
- Works only for HTML elements
- Does NOT know which 3D object is hovered
- Affects the whole canvas

Example:
canvas {
  cursor: pointer;
}

Use when:
- You want cursor always pointer
- No object-level interaction needed

Kid memory:
"CSS paints everything same"

---

## 2️⃣ Manual cursor using pointer events (Best control)
- Uses R3F raycasting
- Changes cursor only when mouse touches a 3D object

Example:
onPointerEnter → cursor = pointer  
onPointerLeave → cursor = default

Use when:
- You want exact control per object
- Hover / click interactions needed

Kid memory:
"Change cursor only when touching the cube"

---

## 3️⃣ useCursor helper (Easy & clean way)
- Helper from @react-three/drei
- Automatically handles cursor
- Less code, very clean

Example idea:
useCursor(hovered)

Use when:
- You want clean code
- No custom cursor logic needed

Kid memory:
"Helper does the work for you"

---

## 🔁 Which one should I use?

- Only HTML → CSS / Tailwind
- 3D object interaction → Manual cursor OR useCursor
- Beginner friendly → useCursor
- Advanced control → Manual cursor

---

## ✅ Final rule
CSS sees canvas  
R3F sees 3D objects  
Helpers make life easy
