# CS Games 2025 — Web Competition

A 2D side-scrolling platformer built from scratch in React + TypeScript, rendered entirely with the HTML5 Canvas API — no game engine. Built solo under a fixed time limit for the **CS Games 2025 Web Competition** (Université Laval), scored against the organizers' rubric.

![Gameplay demo](Documentation/demo.gif)

## What it does

- A collapsible sidebar nav that shrinks its labels down to emoji at small widths
- A canvas-rendered platformer with a camera that follows a controllable character
- Interactive trees that can be chopped down, resized, added, and removed via drag handles
- A "mystery cube" that blocks the player and reacts to contact with sound and animation
- Mushrooms that, over repeated pickups, unlock character selection and a rainbow "ghost trail" effect
- Storm clouds that invert canvas colors, flip the app into a persistent dark theme, and spawn rain with splash particles on ground contact
- Draggable ground props (bottles, bushes, flowers) that fall under gravity if dropped mid-air, with a "ghost" placeholder while repositioning
- A hidden Easter Egg page that unlocks after the player's first mushroom pickup

## Notable implementation details

- **No game engine** — the render loop, collision detection, gravity, and camera-follow are hand-rolled with `requestAnimationFrame`
- **Custom pixel-level color remapping**: the rainbow ghost-trail effect is produced by a hand-written function that recolors the character's PNG pixel-by-pixel at runtime — not a pre-baked asset or image tool
- **Object-oriented game entities**: independent game objects (`Player`, `Ground`, `Tree`, `MysteryBlock`, `Shrooms`, sky variants) share a common `GameAsset` interface (`render`, `handleUserInput`); `Player` and `Camera` use the Singleton pattern
- **Persistent state**: character choice, dark theme, and prop positions survive a page refresh

## Tech stack

React 19 · TypeScript · Vite 7 · React Router 7 · HTML5 Canvas API · Vitest + Testing Library (configured) · ESLint 9

## Running locally

```bash
cd frontend
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run lint      # lint
```

## Project origin

This repo was built solo against the official competition brief and grading rubric, preserved in [`Documentation/COMPETITION_BRIEF_EN.md`](Documentation/COMPETITION_BRIEF_EN.md) (French original: [`COMPETITION_BRIEF_FR.md`](Documentation/COMPETITION_BRIEF_FR.md)). Third-party art and sound credits are in [`ATTRIBUTION.md`](ATTRIBUTION.md).
