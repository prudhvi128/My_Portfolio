# src/components

Reusable, presentational components shared across sections.

## Purpose

Small, theme-aware building blocks that keep sections DRY and visually
consistent. Every component here receives an `isDark` prop (or renders
the app-wide theme toggle) and owns its own Tailwind classes.

## Files

| File | Purpose | Used by |
| --- | --- | --- |
| `IconBadge.jsx` | Purple rounded icon badge (sized via `className`, icon size via `iconClassName`). | `AboutCard.jsx`, `InfoCard.jsx`, `Highlights.jsx`, `About.jsx`, `Skills.jsx`, `Projects.jsx`, `Contact.jsx`, `ContactCard.jsx`, `HeroRight.jsx` |
| `InfoCard.jsx` | Icon + title + two-line text cell. | `sections/About.jsx` (Education / Focus / Goal) |
| `AboutCard.jsx` | Hoverable card with icon+title header and body `children`. | `sections/About.jsx`, `Skills.jsx`, `Contact.jsx` |
| `TechChip.jsx` | Rounded pill showing a technology name (dot by default; add an `icon` prop for an icon variant). | `sections/About.jsx`, `Skills.jsx`, `Contact.jsx`, `ProjectCard.jsx`, `ProjectHeader.jsx`, `pages/ProjectDetails.jsx` |
| `ProjectCard.jsx` | Project card: screenshot, description, tech chips, and GitHub / Live Demo buttons. | `sections/Projects.jsx` (all projects) |
| `ProjectHeader.jsx` | Case-study header: back button, hero image, title, tech badges, GitHub/Live Demo buttons. | `pages/ProjectDetails.jsx` |
| `ImageGallery.jsx` | Responsive grid of clickable screenshots with zoom-on-hover. | `pages/ProjectDetails.jsx` |
| `ImageModal.jsx` | Fullscreen viewer: blurred backdrop, ESC / click-outside / X / arrow keys, body scroll lock, fade + scale animation. | `pages/ProjectDetails.jsx` |
| `ContactCard.jsx` | Clickable contact method card: icon, title, description, arrow. Opens external links in a new tab; supports `download`. | `sections/Contact.jsx` (contact cards) |
| `Footer.jsx` | Site footer: brand, quick links, social links, and back-to-top button. | `pages/Home.jsx` |
| `ThemeToggle.jsx` | Dark/light mode switch. | `sections/Navbar.jsx` |
| `Reveal.jsx` | Scroll-reveal wrapper (fade up/left/right/scale) that replays on every entry. | Sections, `Footer.jsx`, `ImageGallery.jsx`, `pages/ProjectDetails.jsx` |
| `ScrollToTop.jsx` | Floating back-to-top button that fades in after 400px. | `App.jsx` |
| `BackgroundFX.jsx` | Fixed ambient background (radial wash, gradient blobs, dot grid). | `App.jsx` |

## When to add files here

Add a component here when it is (or could be) reused in two or more
places, or when it isolates repeated JSX away from a large section file.
