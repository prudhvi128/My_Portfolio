# src/data

Central data files for the portfolio.

## Purpose

Keep content separate from components so both the sections and the
case-study pages can render from one source of truth. Adding a new project
means adding one object here — no component changes needed.

## Files

| File | Purpose | Imported by |
| --- | --- | --- |
| `projects.js` | Defines every project (slug, title, description, technologies, case-study content, images, GitHub/demo links). | `sections/Projects.jsx`, `pages/ProjectDetails.jsx` |

## When to add files here

- New project → add an object to `projects.js`.
- New content type (e.g. blog posts, testimonials) → add a new file here
  and map over it in the relevant section/page.
