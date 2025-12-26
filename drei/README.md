# React Three Fiber (R3F) Notes

## 1. HTML in R3F (`<Html>` from drei)

* Purpose: Put **normal HTML** (text, buttons, images) inside 3D scene.
* Creates: A `<div>` in DOM.
* Props:

  * `position` → `[x, y, z]` → 3D location.
  * `wrapperClass` → CSS class for styling wrapper div.
  * `center` → align text center on point.
  * `distanceFactor` → scale text with camera distance.
  * `transform` → follow mesh transforms.
  * `occlude` → hide text when blocked by mesh.

    * Can be `true` (all meshes) or `[refs]` (specific meshes).
  * `sprite` → always faces camera.
  * `style` → inline CSS styling.
  * `fullscreen` → ignore 3D, fill screen.
  * `zIndexRange` → control render order.

**Example:**

```jsx
<Html
  position={[0, 1.2, 0]}
  wrapperClass="label"
  center
  distanceFactor={6}
  occlude={[sphereRef, cubeRef]}
>
  Hello
</Html>
```

## 2. Controls in R3F (`@react-three/drei`)

### OrbitControls

* Moves **camera**, not objects.
* Rotate, pan, zoom scene.
* Use case: user rotates around 3D product.
* Kid example: move your eyes around toys.

### PivotControls

* Lightweight helper for **one object**.
* Move, rotate, scale object interactively.
* Props: `anchor` → pivot point.
* Kid example: drag toy with hand.

### TransformControls

* Editor-like tool for **one object**.
* Full move, rotate, scale gizmo.
* Requires `useRef` to target mesh.
* Kid example: toolbox to adjust toy.
* Heavier than PivotControls.

**Rule:**

* Pivot = simple, quick adjustments.
* Transform = editor-level precise control.

**Example PivotControls:**

```jsx
<PivotControls anchor={[0, 0, 0]}>
  <mesh>
    <boxGeometry />
    <meshStandardMaterial color="orange" />
  </mesh>
</PivotControls>
```

**Example TransformControls:**

```jsx
const boxRef = useRef();
<TransformControls object={boxRef} />
<mesh ref={boxRef}>
  <boxGeometry />
  <meshStandardMaterial color="blue" />
</mesh>
```

## 3. useRef

* Purpose: reference a mesh/object for controls or animations.
* Needed for TransformControls and occlude array in Html.
* Example:

```jsx
const cubeRef = useRef();
<mesh ref={cubeRef}></mesh>
<Html occlude={[cubeRef]}></Html>
```

## 4. Occlude

* Makes `<Html>` **hide when a mesh comes in front**.
* Can be boolean (`true`) → all meshes
* Or array of refs → only specified objects hide it.
* Kid example: text disappears when toy blocks it.

## 5. Key Rules / Memory Tips

* Normal website → no 3D controls needed.
* `<Html>` → only use when you want HTML **inside 3D**.
* PivotControls → lightweight, one object, quick adjustments.
* TransformControls → full editor, precise, heavy.
* OrbitControls → rotate camera around scene.
* `useRef` → pointer to object for controls/occlude.
