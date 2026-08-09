# src/assets

Static media imported directly by source files.

## Purpose

Images and other binary assets that are bundled by Vite. Only files
that are actually imported end up in the production build.

## Files

| File | Purpose | Used by |
| --- | --- | --- |
| `avatar.png` | Profile photo shown in the hero's avatar circle. | `sections/HeroRight.jsx` |

## When to add files here

Add images, logos, or other media that are imported in JavaScript/JSX
(e.g. `import avatar from "../assets/avatar.png"`).

Files that must be reachable by a fixed URL (like `/favicon.svg`) belong
in the top-level `public/` folder instead.
