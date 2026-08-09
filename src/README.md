# src

All application source code lives here.

## Purpose

The `src/` folder contains the React entry point, page composition,
portfolio sections, reusable components, static assets, shared utilities,
and global styles.

## Folders

| Folder | Purpose |
| --- | --- |
| `assets/` | Static images imported by source files (e.g. `avatar.png`, `portfolio.png`) plus the resume file. |
| `components/` | Small reusable building blocks (icon badges, cards, chips, project/contact cards, gallery, modal, footer, reveal wrapper, theme toggle). |
| `data/` | Central data files (currently one: projects). |
| `pages/` | Page-level components (Home, ProjectDetails). |
| `sections/` | Large portfolio content blocks, including the Navbar (Hero, Highlights, About, Skills, Projects, Contact). |
| `styles/` | Global CSS (Tailwind import, motion keyframes). |
| `utils/` | Small shared helpers (card styles, underline classes). |

## Files

| File | Purpose | Imported by |
| --- | --- | --- |
| `main.jsx` | Bootstraps the React app and wraps it in `BrowserRouter`. | `index.html` |
| `App.jsx` | Root component; owns the dark-mode state, mounts the background layer, and defines the routes. | `main.jsx` |

## High-level import graph

```
main.jsx (BrowserRouter)
 └── App.jsx (BackgroundFX, ScrollToTop, ScrollToSection)
     ├── pages/Home.jsx
     │   ├── sections/Navbar.jsx ──→ components/ThemeToggle.jsx
     │   ├── sections/Hero.jsx ──→ HeroLeft.jsx, HeroRight.jsx
     │   ├── sections/Highlights.jsx ──→ components/IconBadge.jsx
     │   ├── sections/About.jsx ──→ components/AboutCard.jsx,
     │   │                           components/InfoCard.jsx,
     │   │                           components/IconBadge.jsx,
     │   │                           components/TechChip.jsx
     │   ├── sections/Skills.jsx ──→ components/AboutCard.jsx,
     │   │                           components/IconBadge.jsx,
     │   │                           components/TechChip.jsx (with icons)
     │   ├── sections/Projects.jsx ──→ components/ProjectCard.jsx,
     │   │                             components/IconBadge.jsx,
     │   │                             data/projects.js
     │   │                             (ProjectCard ──→ components/TechChip.jsx)
     │   ├── sections/Contact.jsx ──→ components/ContactCard.jsx,
     │   │                            components/AboutCard.jsx,
     │   │                            components/IconBadge.jsx,
     │   │                            components/TechChip.jsx
     │   └── components/Footer.jsx
     └── pages/ProjectDetails.jsx ──→ data/projects.js,
                                        components/ProjectHeader.jsx,
                                        components/ImageGallery.jsx,
                                        components/ImageModal.jsx,
                                        components/TechChip.jsx,
                                        sections/Navbar.jsx
```

Many sections and cards wrap their content in `components/Reveal.jsx` for
the scroll-in animation and use the `cardStyle*` helpers from
`utils/cardStyle.js`.

## When to add files here

- New reusable UI pieces → `components/`
- New page-level layouts → `pages/`
- New portfolio sections → `sections/`
- New data files → `data/`
- New static images → `assets/`
- New shared helpers → `utils/`
- New global CSS → `styles/`
