Listed directory editor
Viewed sketch.js:1-100
Viewed package.json:1-25
Viewed package.json:1-19

To get the **10-hour bonus printer**, you need 10 hours of **active coding time** tracked by Hackatime. 

Here is how the tracking works and what you can actually build to fill 10 hours without getting stuck or disqualified.

---

### Part 1: How Hackatime Tracks the 10 Hours

1. **Active keystrokes only:**
   - The WakaTime plugin only records time when you are typing or saving files in your editor.
   - If you leave the editor open and walk away, **the timer stops after 2 minutes of inactivity**.
2. **Do not use fake typing / bots:**
   - Hack Club runs anti-cheat filters and manually reviews submissions. Scripts, macro spam, or holding down spacebar will get flagged and disqualified.
3. **Verify it is tracking:**
   - Make sure your editor has WakaTime configured with your Hackatime API key (`~/.wakatime.cfg` pointing to `https://hackatime.hackclub.com/api/hackatime/v1`).
   - Open your project, type code, and check [hackatime.hackclub.com](https://hackatime.hackclub.com) to confirm the project name and minutes are increasing.
4. **Run the actual editor:**
   - Note that the receipt editor lives in `editor/`:
     ```bash
     cd editor
     npm install
     npm run dev
     ```
   - Keep your editor open on `editor/sketch.js`.

---

### Part 2: What to Build (Ideas to Fill 10 Hours of Real Coding)

Building a simple static image only takes 20 minutes, which makes getting to 10 hours tough. To spend 10 genuine hours, build a **multi-layered generative art engine** or a **data-driven receipt system** in `editor/sketch.js`.

Here is a breakdown of substantial systems you can write:

#### 1. Custom Dithering and Shading Engine (2–3 hours)
Thermal printers can only print pure black or pure white (no grays).
- Implement an **error-diffusion dithering algorithm** (like Floyd–Steinberg dithering) or a **Bayer ordered dithering matrix** in JavaScript.
- Create custom **cross-hatching** and **stippling** (dot-density) routines based on mathematical light sources.

#### 2. Procedural Landscape or Map Generator (3–4 hours)
- **Topographic Contour Map:** Use layered Perlin noise (`p.noise`) to create elevation lines that wrap around peaks, similar to a USGS survey map.
- **Dungeon / Roguelike Map:** Write a procedural dungeon generator (BSP room splitting or cellular automata) that prints a mini ASCII or tile dungeon with rooms, corridors, chests, and enemies.
- **Constellation / Starmap:** Compute celestial coordinates, draw connecting lines between star clusters, and label them with procedurally generated astronomical names.

#### 3. Mathematical & Fractal Patterns (2–3 hours)
- **Space-filling curves:** Implement a recursive Hilbert Curve or Dragon Curve flowing down the receipt tape.
- **L-System Plants:** Write a string-rewriting engine that generates unique branching trees or ferns depending on the seed.
- **Reaction-Diffusion / Cellular Automata:** Simulate a 1D or 2D cellular automaton (like Wolfram Rule 30 or Conway's Game of Life) scrolling down the length of the paper.

#### 4. A Concept-Driven Receipt Layout (2 hours)
Instead of just abstract art, format it like a real, bizarre receipt:
- Custom pixel-art header logos drawn on a 16x16 grid.
- Procedural itemized text (e.g. "Items bought from a wizard shop" or "System logs from a crashed satellite").
- Variable item counts, calculated totals, tax rates, timestamps, and realistic paper tear cut marks.

---

### Suggested 10-Hour Roadmap

| Hours | What to work on |
| :--- | :--- |
| **Hours 1–2** | Set up the structure in `editor/sketch.js`. Build receipt layout: header, custom fonts, borders, cut lines, and footer metadata. |
| **Hours 3–5** | Write your primary generative algorithm (Perlin terrain, recursive fractals, or cellular automata). |
| **Hours 6–7** | Add detail systems: shading algorithms, dot-stippling, and line density variations. |
| **Hours 8–9** | Add randomized variations tied to `receipt.seed` so each seed produces a distinct variation. Adjust layout height (up to 2000px). |
| **Hour 10** | Polish edge cases, test different seeds, export your final PNG, commit to GitHub, and submit.