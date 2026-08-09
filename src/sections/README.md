# src/sections

Large content blocks of the portfolio.

## Purpose

Each section is a full-width block with its own heading, layout, and
content. Sections receive the `isDark` theme prop and are mounted by a
page component (`pages/Home.jsx`).

## Files

| File | Purpose | Used by |
| --- | --- | --- |
| `Navbar.jsx` | Sticky top navigation bar: logo, section links, active underline, mobile menu, theme toggle. | `pages/Home.jsx`, `pages/ProjectDetails.jsx` |
| `Hero.jsx` | Landing section; composes the text side and the visual side. | `pages/Home.jsx` |
| `HeroLeft.jsx` | Text side of the hero: greeting, name, tagline, description, buttons (resume download + view projects), social links. | `sections/Hero.jsx` |
| `HeroRight.jsx` | Visual side of the hero: avatar, floating About card, and Tech Stack card. Uses `assets/avatar.png`. | `sections/Hero.jsx` |
| `Highlights.jsx` | Stats strip: Building, B.Tech CSE, Learning, Open to. Uses `components/IconBadge.jsx`. | `pages/Home.jsx` |
| `About.jsx` | About section: info cards, bio cards, and tech chips. Uses `components/AboutCard.jsx`, `InfoCard.jsx`, `IconBadge.jsx`, `TechChip.jsx`. | `pages/Home.jsx` |
| `Skills.jsx` | Skills section: 2x2 tech card grid + learning banner. Uses `components/AboutCard.jsx`, `IconBadge.jsx`, `TechChip.jsx` (icon variant). | `pages/Home.jsx` |
| `Projects.jsx` | Projects section: responsive project card grid + a centered "More Projects Coming Soon..." button. Uses `components/ProjectCard.jsx`, `IconBadge.jsx`, and `data/projects.js`. | `pages/Home.jsx` |
| `Contact.jsx` | Contact section: contact method cards (incl. resume download), thank-you banner, availability card. Uses `components/ContactCard.jsx`, `AboutCard.jsx`, `IconBadge.jsx`, `TechChip.jsx`. | `pages/Home.jsx` |

## When to add files here

Add a new section block here (e.g. Testimonials) and mount it inside
`pages/Home.jsx`. The navbar already links to all current section anchors.
