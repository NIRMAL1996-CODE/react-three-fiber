# useFrame vs Three.js Animation Loop (Easy Notes)

## What is `useFrame`?
`useFrame` = runs code **every frame**  
(frame = one screen refresh, ~60 times per second)

Used in **React Three Fiber (R3F)**.

---

## Real-world example
Like a **fan** 🌀  
- Fan keeps spinning  
- It needs constant power  
- `useFrame` gives that power every frame

---

## What can `useFrame` do?
`useFrame` is **NOT only for rotation**.

It is used for:
- Rotation (turning object)
- Movement (going left/right)
- Animation (smooth change)
- Camera follow (camera chasing object)
- Physics update (gravity = falling)

**Key idea:**  
`useFrame` = continuous (never stopping) update

---

## Same thing in pure Three.js?
Yes ✅

### Three.js uses:
`requestAnimationFrame`

- It creates an **animation loop**  
(loop = repeat forever)
- Runs code again and again

---

## Relation (very important)
- **Three.js → `requestAnimationFrame`**
- **React Three Fiber → `useFrame`**

Both do the **same job**  
Difference = syntax (way of writing)

---

## Why `useFrame` exists?
Because:
- React friendly
- Cleaner code
- No manual loop setup
- Automatically managed by R3F

---

## When to use what? (Golden Rule)
- **Always moving → `useFrame`**
- **Move once → animation (GSAP, Drei)**
- **Instant change → React state (`useState`)**

---

## One-line summary
`useFrame` is the React version of Three.js’s `requestAnimationFrame`  
Used for **continuous real-time updates** in 3D scenes.
