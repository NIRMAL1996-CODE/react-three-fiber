1. Install React Three Fiber + Drei
   Run this in your terminal inside your project folder:

   npm install three @react-three/fiber @react-three/drei

🖱️ Pointer Events & Occlusion in R3F / Drei
   stopPropagation() (for meshes)

Used on meshes in R3F
Stops pointer events from hitting objects behind the mesh

Example:
<mesh
onPointerEnter={(e) => e.stopPropagation()} // prevents hover on objects behind
/>

When to use:

Multiple objects overlap
You want only the front object to react to hover or click
Kid-style memory: “Tell the event: don’t go past me!”
occlude (for Html / Drei helpers)
Used on <Html> elements (like labels, tooltips)
Automatically hides the HTML when something is in front

Example:

<Html occlude> <div>Label</div> </Html>

You can also pass specific objects to occlude:

<Html occlude={[mesh1, mesh2]} />

When to use:

You have 3D objects in front of HTML and want the HTML to disappear behind them
Kid-style memory: “Hide me if a block is in front of me!”

Simple rules 👶

Meshes / pointer events → use stopPropagation()
HTML / labels → use occlude
They do different things but both handle “blocking” interaction or visibility