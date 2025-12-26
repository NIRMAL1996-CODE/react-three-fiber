# Leva Notes (React 3D UI Controls)

## What is Leva?
- A GUI library for React to control variables in real-time.
- Mainly used with React Three Fiber (R3F) for 3D scenes.
- Allows changing rotation, scale, color, visibility, and more.

## Key Features
- Live controls for variables.
- Can set min, max, step for numeric values.
- Supports grouping controls into folders.
- Can collapse/expand the panel.
- One-line labels option for compact view.
- Customizable theme: accent color, background, text color.

## Folders
- Group related controls for better organization.
- Example: "Mesh Properties", "Appearance", "Monitoring", "Performance".

## Difference from lil-gui
- **Framework**: lil-gui works with plain JS, Leva works only with React.
- **Syntax**: lil-gui uses JS objects, Leva uses React hooks (`useControls`).
- **Integration**: Leva is tightly integrated with React components and JSX.

## Use Cases
- Debugging 3D objects in R3F.
- Tuning properties like rotation, scale, color in real-time.
- Creating interactive UI for demos or experiments.
