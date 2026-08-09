# public

Static files served at the site root (no build processing).

## Purpose

Files in this folder are copied verbatim into the build output and
served as-is at fixed URLs like `/favicon.svg`.

## Files

| File | Purpose | Referenced by |
| --- | --- | --- |
| `favicon.svg` | Browser tab icon. | `index.html` (`<link rel="icon" href="/favicon.svg">`) |

## When to add files here

Add files that must be reachable by a fixed URL at runtime, e.g.
`/favicon.svg`, `/og-image.png`, or `/robots.txt`.

Files that are imported from JavaScript/JSX (like images) belong in
`src/assets/` instead.
