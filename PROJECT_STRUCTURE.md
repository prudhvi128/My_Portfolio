# PROJECT_STRUCTURE.md

A beginner-friendly map of the entire portfolio project. Open this file
first if you're new to the codebase.

---

## 1. Overview

This is a React portfolio built with **Vite**, styled with **Tailwind CSS**,
and using **lucide-react** / **react-icons** for icons. It uses
**react-router-dom** for routing: the home page (`Home`) is composed of a
navbar, a hero section, a highlights strip, an about section, a skills
section, a projects section, a contact section, and a footer, while each
project has its own case-study page (`ProjectDetails`). A single `Reveal`
component (built on Framer Motion) provides the scroll-in animations, and
theme-aware card styling lives in `src/utils/cardStyle.js`.

---

## 2. Folder tree

```
portfolio/
├── .gitignore                 # Files Git should ignore (node_modules, dist, logs)
├── .oxlintrc.json             # Oxlint (linter) rules configuration
├── README.md                  # Default Vite template readme
├── PROJECT_STRUCTURE.md       # This file
├── index.html                 # HTML entry point; loads /src/main.jsx
├── package.json               # Project metadata, scripts, dependencies
├── package-lock.json          # Locked dependency versions
├── vite.config.js             # Vite + React + Tailwind plugin setup
├── public/
│   ├── README.md              # Folder documentation
│   └── favicon.svg            # Browser tab icon (linked from index.html)
└── src/
    ├── README.md              # Folder documentation
    ├── main.jsx               # Entry point — mounts <App /> inside BrowserRouter
    ├── App.jsx                # Root component; owns theme + defines routes
    ├── assets/
    │   ├── README.md
    │   ├── avatar.png         # Hero profile image
    │   ├── portfolio.png      # Portfolio project screenshot
    │   └── Sama_Prudhvi_Sai_Reddy_Resume.docx  # Resume (download button target)
    ├── components/
    │   ├── README.md
    │   ├── IconBadge.jsx      # Reusable purple icon badge (sized via className)
    │   ├── InfoCard.jsx       # Icon + title + 2 lines card cell
    │   ├── AboutCard.jsx      # Hoverable card with header + children
    │   ├── TechChip.jsx       # Technology pill (dot, or icon via the `icon` prop)
    │   ├── ProjectCard.jsx    # Project card (GitHub / Live Demo buttons)
    │   ├── ProjectHeader.jsx  # Case-study page header block
    │   ├── ImageGallery.jsx   # Clickable screenshot grid
    │   ├── ImageModal.jsx     # Fullscreen image viewer
    │   ├── ContactCard.jsx    # Contact method card (icon + link)
    │   ├── Footer.jsx         # Site footer with quick links + socials
    │   ├── ThemeToggle.jsx    # Dark/light mode switch
    │   ├── Reveal.jsx         # Scroll-reveal animation wrapper (Framer Motion)
    │   ├── ScrollToTop.jsx    # Floating back-to-top button
    │   └── BackgroundFX.jsx   # Fixed ambient background (blobs + dot grid)
    ├── data/
    │   └── projects.js        # Single source of truth for project data
    ├── pages/
    │   ├── README.md
    │   ├── Home.jsx           # Assembles the portfolio sections
    │   └── ProjectDetails.jsx # Reusable case-study page (/projects/:slug)
    ├── sections/
    │   ├── README.md
    │   ├── Navbar.jsx         # Sticky top navigation bar (router links)
    │   ├── Hero.jsx           # Landing section (text + visuals)
    │   ├── HeroLeft.jsx       # Hero text side
    │   ├── HeroRight.jsx      # Hero visual side (avatar, cards)
    │   ├── Highlights.jsx     # Stats strip under the hero
    │   ├── About.jsx          # About section (cards + tech chips)
    │   ├── Skills.jsx         # Skills section (tech card grid)
    │   ├── Projects.jsx       # Projects section (card grid + coming-soon button)
    │   └── Contact.jsx        # Contact section (cards + availability)
    ├── styles/
    │   ├── README.md
    │   └── globals.css        # Tailwind import + keyframes
    └── utils/
        ├── cardStyle.js       # Shared theme-aware card style helpers
        └── underlineClasses.js # Animated heading underline helper
```

---

## 3. Purpose of every folder

| Folder | Purpose |
| --- | --- |
| `public/` | Files copied verbatim to the site root and served at fixed URLs. |
| `src/` | All application source code. |
| `src/assets/` | Static images imported by source files (plus the resume file). |
| `src/components/` | Small reusable, theme-aware building blocks. |
| `src/data/` | Central data files (currently one: projects). |
| `src/pages/` | Page-level components (Home, ProjectDetails). |
| `src/sections/` | Large portfolio content blocks, including the Navbar. |
| `src/styles/` | Global CSS (Tailwind import, keyframes). |
| `src/utils/` | Small shared helpers (card styles, underline classes). |

---

## 4. Purpose of every file

### Root level

| File | Purpose |
| --- | --- |
| `index.html` | HTML shell. Has the `<div id="root">` and loads `/src/main.jsx`. Also links `/favicon.svg`. |
| `vite.config.js` | Registers the React and Tailwind plugins; treats `.docx` files as assets. |
| `package.json` | Lists scripts (`dev`, `build`, `lint`, `preview`) and dependencies (incl. `react-router-dom`, `framer-motion`, `react-icons`). |
| `.oxlintrc.json` | Configures the Oxlint linter (React rules). |

### src/

| File | Purpose |
| --- | --- |
| `src/main.jsx` | **Entry point.** Creates the React root and renders `<App />` inside `BrowserRouter`. Imports global styles. |
| `src/App.jsx` | Root component. Owns the `isDark` state, defines the routes, and scrolls to sections on navigation. |
| `src/assets/avatar.png` | Hero profile photo, used in `HeroRight.jsx`. |
| `src/assets/portfolio.png` | Portfolio project screenshot, imported by `data/projects.js`. |
| `src/assets/Sama_Prudhvi_Sai_Reddy_Resume.docx` | Resume file downloaded by the Resume buttons (Hero, Contact, Footer). |
| `src/data/projects.js` | Central list of all projects (slug, content, images, links). |
| `src/styles/globals.css` | Imports Tailwind; adds smooth scrolling, the motion keyframes, and reduced-motion fallbacks. |
| `src/utils/cardStyle.js` | Exports `cardStyle`, `cardStyleShadow`, `cardStyleSolid`, `cardStyleOverlay`, `glassStyle`. |
| `src/utils/underlineClasses.js` | Exports `underlineClasses(visible, extra)` for section heading underlines. |

### src/components/

| File | Purpose | Used by |
| --- | --- | --- |
| `IconBadge.jsx` | Purple rounded icon badge (icon + themed colors). | `AboutCard`, `InfoCard`, `Highlights`, `About`, `Skills`, `Projects`, `Contact`, `ContactCard`, `HeroRight` |
| `InfoCard.jsx` | Icon + title + two lines of text (grid cell). | `About` |
| `AboutCard.jsx` | Hoverable card with icon/title header and body children. | `About`, `Skills`, `Contact` |
| `TechChip.jsx` | Rounded technology pill (dot by default, icon via `icon` prop). | `About`, `Skills`, `Contact`, `ProjectCard`, `ProjectHeader`, `ProjectDetails` |
| `ProjectCard.jsx` | Card with screenshot, description, tech chips, and GitHub / Live Demo buttons. | `Projects` |
| `ProjectHeader.jsx` | Case-study header: back button, hero image, title, badges, action buttons. | `ProjectDetails` |
| `ImageGallery.jsx` | Responsive grid of clickable screenshots (zoom on hover). | `ProjectDetails` |
| `ImageModal.jsx` | Fullscreen viewer: ESC / click-outside / X / arrows, body scroll lock. | `ProjectDetails` |
| `ContactCard.jsx` | Clickable contact method card (icon, title, description, arrow). | `Contact` |
| `Footer.jsx` | Footer: brand, quick links, social links, back-to-top button. | `Home` |
| `ThemeToggle.jsx` | Dark/light toggle with sliding knob. | `Navbar` |
| `Reveal.jsx` | Scroll-reveal wrapper (fade up / left / right / scale) that replays on every entry. | Sections, cards, footer, gallery |
| `ScrollToTop.jsx` | Floating back-to-top button that fades in after 400px. | `App` |
| `BackgroundFX.jsx` | Fixed ambient background layer (radial wash, gradient blobs, dot grid). | `App` |

### src/pages/, src/sections/

| File | Purpose | Used by |
| --- | --- | --- |
| `Navbar.jsx` | Sticky nav: logo, section links (router `Link`s), active highlight, mobile menu, theme toggle. | `Home`, `ProjectDetails` |
| `Home.jsx` | Composes `Navbar`, `Hero`, `Highlights`, `About`, `Skills`, `Projects`, `Contact`, `Footer`. | `App` |
| `ProjectDetails.jsx` | Case-study page: header, case-study sections, gallery, fullscreen viewer. | `App` |
| `Hero.jsx` | Full-height landing section; composes left/right sides. | `Home` |
| `HeroLeft.jsx` | Hero text: badge, name, tagline, description, buttons, socials. | `Hero` |
| `HeroRight.jsx` | Hero visuals: avatar, About Me card, Tech Stack card. | `Hero` |
| `Highlights.jsx` | 4-item stats strip under the hero (data-driven + `IconBadge`). | `Home` |
| `About.jsx` | About content: info cards, bio cards, tech chips. | `Home` |
| `Skills.jsx` | Skills content: 2x2 tech card grid + banner. | `Home` |
| `Projects.jsx` | Projects content: card grid + coming-soon button. | `Home` |
| `Contact.jsx` | Contact content: contact cards, thank-you banner, availability card. | `Home` |

---

## 5. Entry point of the application

```
index.html
   └── src/main.jsx   (mounts <App /> inside <BrowserRouter>)
          └── src/App.jsx  (defines the routes)
```

1. The browser loads `index.html`.
2. Vite's module script loads `src/main.jsx`.
3. `main.jsx` wraps `<App />` in `<BrowserRouter>` and calls `createRoot(...).render(...)`.
4. `App.jsx` renders either `Home` (at `/`) or `ProjectDetails` (at `/projects/:slug`).

---

## 6. Routing flow

The app uses **react-router-dom**:

- `src/main.jsx` wraps the app in `BrowserRouter`.
- `src/App.jsx` defines two routes:
  - `/` → `Home` (all portfolio sections stacked vertically).
  - `/projects/:slug` → `ProjectDetails` (a reusable case-study page).
  - any other path → falls back to `Home`.
- `Navbar.jsx` uses router `Link`s (`to="/#home"`, `/#about`, etc.) that
  keep working from the case-study page too.
- `App.jsx`'s `ScrollToSection` scrolls to the section in the URL hash,
  or to the top of the page otherwise.
- The hero's "View Projects" button is a `Link` to `/#projects`.

---

## 7. Theme management flow

```
App.jsx
  const [isDark, setIsDark] = useState(true)
     │
     ├── <Home isDark={isDark} setIsDark={setIsDark} />        (route: /)
     │       ├── <Navbar ... /> ──→ <ThemeToggle /> (calls setIsDark)
     │       ├── <Hero isDark={isDark} />
     │       ├── <Highlights isDark={isDark} />
     │       ├── <About isDark={isDark} />
     │       ├── <Skills isDark={isDark} />
     │       ├── <Projects isDark={isDark} />
     │       ├── <Contact isDark={isDark} />
     │       └── <Footer isDark={isDark} />
     └── <ProjectDetails isDark={isDark} setIsDark={setIsDark} />  (route: /projects/:slug)
             └── <Navbar /> + case-study sections + gallery
```

- **State lives in one place:** `App.jsx`.
- **Reading the theme:** every section/component receives `isDark` as a
  prop and toggles between dark/light Tailwind classes.
- **Changing the theme:** `Navbar` passes `setIsDark` to `ThemeToggle`;
  clicking the toggle flips the state, and `App` re-renders everything
  with the new theme.
- There is no persistence (e.g. localStorage) yet — theme resets to
  dark on refresh.

---

## 8. Data flow between files

This app has no external data sources. Project content lives in
`src/data/projects.js` and every page/section gets it via imports:

```
data/projects.js (projects array)
   ├─▶ sections/Projects.jsx ──▶ ProjectCard
   └─▶ pages/ProjectDetails.jsx ──▶ ProjectHeader / ImageGallery / ImageModal

App.jsx ──(isDark, setIsDark)──▶ Home.jsx / ProjectDetails.jsx
   │                                 │
   │                                 ├─▶ Navbar ──▶ ThemeToggle
   │                                 ├─▶ Hero ──▶ HeroLeft / HeroRight (avatar.png)
   │                                 ├─▶ Highlights ──▶ IconBadge / cardStyleSolid
   │                                 ├─▶ About ──▶ IconBadge / InfoCard / AboutCard / TechChip
   │                                 ├─▶ Skills ──▶ AboutCard / IconBadge / TechChip
   │                                 ├─▶ Projects ──▶ ProjectCard / IconBadge / TechChip
   │                                 ├─▶ Contact ──▶ ContactCard / AboutCard / IconBadge / TechChip
   │                                 └─▶ Footer ──▶ (react-icons brand icons)
```

Direction of data is **always top-down** (props down). No child
component fetches data or manages shared state.

---

## 9. Component hierarchy

```
App
├── BackgroundFX
├── ScrollToTop
└── Home
    ├── Navbar
    │   └── ThemeToggle
    ├── Hero
    │   ├── HeroLeft
    │   └── HeroRight
    ├── Highlights
    │   └── IconBadge (x4)
    ├── About
    │   ├── InfoCard (x3: Education, Focus, Goal)
    │   ├── AboutCard (x2: Who I Am, What I Do)
    │   │   └── IconBadge
    │   ├── IconBadge (Currently Exploring header)
    │   └── TechChip (x6)
    ├── Skills
    │   ├── AboutCard (x4: Frontend, Backend, Tools, CS & AI)
    │   │   └── IconBadge
    │   └── TechChip (x14, with icons)
    ├── Projects
    │   └── ProjectCard (x1: Portfolio Website)
    │       └── TechChip (x4: React, Tailwind CSS, JavaScript, Vite)
    ├── Contact
    │   ├── ContactCard (x4: Email, LinkedIn, GitHub, Resume)
    │   │   └── IconBadge
    │   ├── IconBadge (Thank-you banner)
    │   └── AboutCard (Availability)
    │       ├── IconBadge (x4 rows)
    │       └── TechChip (x3: React, FastAPI, AI / ML Basics)
    └── Footer
        └── (brand, quick links, social links, back-to-top)

App ──/projects/:slug──▶ ProjectDetails
    ├── Navbar
    ├── ProjectHeader
    │   └── TechChip (technologies)
    ├── CaseStudySection (Overview / Problem / Solution / Features / ...)
    │   └── TechChip (Technologies Used) or lists / steps
    └── ImageGallery ──▶ ImageModal
```

Every section wraps its content in `Reveal` for the scroll-in animation.

---

## 10. Reusable components and where they are used

| Component | Reused in | Notes |
| --- | --- | --- |
| `IconBadge` | `AboutCard`, `InfoCard`, `Highlights`, `About`, `Skills`, `Projects`, `Contact`, `ContactCard`, `HeroRight` | Sized via `className`; icon size via `iconClassName`. |
| `InfoCard` | `About` (3 cells) | Rendered from an array in `About.jsx`. |
| `AboutCard` | `About` (2 cards), `Skills` (4 cards), `Contact` (Availability) | Body passed as `children`. |
| `TechChip` | `About`, `Skills`, `Contact`, `ProjectCard`, `ProjectHeader`, `ProjectDetails` | Rendered from the `technologies` array in `data/projects.js`; `icon` prop adds an icon (Skills). |
| `ProjectCard` | `Projects` (all projects) | Rendered from `data/projects.js`. |
| `ProjectHeader` | `ProjectDetails` | Top of every case-study page. |
| `ImageGallery` | `ProjectDetails` | Shows `project.images`. |
| `ImageModal` | `ProjectDetails` | Fullscreen viewer for gallery images. |
| `ContactCard` | `Contact` (4 cards) | Rendered from an array in `Contact.jsx`. |
| `Footer` | `Home` | Single reusable instance. |
| `ThemeToggle` | `Navbar` | Single reusable instance. |
| `Reveal` | All sections, `Footer`, `ImageGallery`, `ProjectDetails` | One scroll-reveal wrapper with variants + delay. |
| `cardStyle*` helpers | All cards | Shared theme-aware Tailwind class strings. |

---

## 11. Suggestions for future expansion

- **Fill in project links:** replace the `github` and `liveDemo` placeholder
  `"#"` values in `src/data/projects.js` with the real repository and
  deployed-site URLs.
- **Add more projects:** add a new object to the `projects` array in
  `src/data/projects.js` — the section and the case-study page pick it up
  automatically.
- **Re-link project cards to case studies:** the cards currently show only
  GitHub / Live Demo; re-add an "Explore" button that links to
  `/projects/<slug>` when you want that flow back.
- **Add more screenshots:** expand `project.images` with additional local
  screenshots under `src/assets`.
- **Extract more content to data:** the About / Skills / Contact text is
  still hardcoded in the section files; it can be moved into `src/data/`
  files and mapped over.
- **Persist theme:** save `isDark` to `localStorage` and read it on load
  in `App.jsx`.
- **Custom hooks:** move theme or scroll-spy logic into `src/hooks/`
  (`useTheme`, `useScrollSpy`) to slim down `App` and `Navbar`.
- **Add a 404 page:** create `src/pages/NotFound.jsx` and point the `*`
  route at it.
- **Swap the resume to PDF:** replace `Sama_Prudhvi_Sai_Reddy_Resume.docx`
  with a `.pdf` in `src/assets` and update the imports in `HeroLeft`,
  `Contact`, and `Footer`.

---

## 12. Common commands

```bash
npm run dev      # Start the dev server with hot reload
npm run build    # Build the production bundle into dist/
npm run lint     # Run the Oxlint linter
npm run preview  # Preview the production build locally
```
