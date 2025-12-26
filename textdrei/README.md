# R3F Text & Float Notes

## 1. `Text` (from `@react-three/drei`)

* **What:** 3D text helper.
* **Creates:** Mesh + geometry internally (no manual mesh needed).
* **Use:** Labels, headings, signs inside 3D scene.

### Common Props

* `position` → `[x, y, z]` → place text in 3D.
* `fontSize` → size of text.
* `color` → text color.
* `anchorX="center"` → horizontal center alignment.
* `anchorY="middle"` → vertical center alignment.

### Example

```jsx
<Text
  position={[0, 2, 0]}
  fontSize={0.5}
  color="orange"
  anchorX="center"
  anchorY="middle"
>
  Hello 3D
</Text>
```

**Kid meaning:**

* `Text` = real 3D letters in your scene.

---

## 2. `Float` (from `@react-three/drei`)

* **What:** Animation helper.
* **Use:** Make any object or text float & rotate automatically.
* **Wrap:** Put mesh or `Text` inside it.

### Common Props

* `speed` → how fast it floats.
* `floatIntensity` → how high it moves.
* `rotationIntensity` → how much it rotates.

### Example (Text + Float)

```jsx
<Float speed={2} floatIntensity={1.5} rotationIntensity={0.5}>
  <Text
    position={[0, 2, 0]}
    fontSize={0.5}
    color="orange"
    anchorX="center"
    anchorY="middle"
  >
    Floating Text
  </Text>
</Float>
```

**Kid meaning:**

* `Float` = magic air movement.

---

## 3. Text vs Html (Quick Rule)

* `Text` → real **3D**, affected by camera & lights.
* `Html` → normal **HTML**, glued to 3D position.

**Memory line:**

> 3D letters → `Text` | Web UI → `Html`
