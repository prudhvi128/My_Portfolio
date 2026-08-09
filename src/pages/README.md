# src/pages

Page-level components that compose multiple sections.

## Purpose

One component per "page". `Home` is the single-page portfolio; each
project gets its own case-study page through the `/projects/:slug` route.

## Files

| File | Purpose | Used by |
| --- | --- | --- |
| `Home.jsx` | Assembles `Navbar`, `Hero`, `Highlights`, `About`, `Skills`, `Projects`, `Contact`, and `Footer` and passes the `isDark` theme prop to each. | `App.jsx` |
| `ProjectDetails.jsx` | Reusable case-study page: looks up a project by slug from `data/projects.js`, renders the header, case-study sections, gallery, and fullscreen viewer. | `App.jsx` |

## When to add files here

Add a new file here when you introduce a new route/page, e.g. a 404 page
(`NotFound.jsx`) or a blog list page, then map the route in `App.jsx`.
