// ======================================================
// File: src/data/projects.js
// Purpose: Single source of truth for every project.
// Why it exists: Both the Projects section and the Project
//                Details page render from this one list.
// Used In:
//   - src/sections/Projects.jsx
//   - src/pages/ProjectDetails.jsx
// Responsibilities:
//   - Defines each project's slug, content, and links.
//   - Add a new object here to add a new project.
// ======================================================

// Local screenshot for the Portfolio Website project
import portfolioImg from "../assets/portfolio.webp";

export const projects = [
  // Portfolio Website Project
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built using React, Tailwind CSS, and Vite with reusable components, dark/light mode, smooth animations, responsive layouts, and clean UI.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    features: [
      "Reusable, component-based architecture",
      "Dark / light mode toggle",
      "Smooth scroll and hover animations",
      "Fully responsive layouts on every screen",
      "Dedicated case-study page for each project",
    ],
    overview:
      "This website is my personal portfolio and the home of everything I build. It presents my skills, projects, and contact details in a clean, premium interface while keeping the code easy to extend with new sections and projects.",
    problem:
      "I needed one polished place to present my work, skills, and contact details — something that feels professional, loads quickly, and looks great on every device, without relying on template code I didn't understand.",
    solution:
      "I built the portfolio from scratch with React and Tailwind CSS on Vite. Reusable components and a central project data file keep the UI consistent and make adding new sections or projects straightforward.",
    developmentProcess: [
      "Set up the Vite + React + Tailwind project and defined the visual design system.",
      "Built the reusable building blocks: icon badges, cards, chips, and pills.",
      "Composed each section (Hero, About, Skills, Projects, Contact) from those blocks.",
      "Added dark / light mode support through a single app-level state.",
      "Created a central project data file and a reusable case-study page.",
    ],
    challenges: [
      "Keeping the design consistent while many sections reuse the same card patterns.",
      "Supporting both dark and light themes without duplicated markup.",
      "Making every section fully responsive with no horizontal overflow.",
    ],
    learnings: [
      "How to design and reuse small components to keep a codebase DRY.",
      "How to manage app-wide theme state and pass it down cleanly.",
      "How to structure project data so it scales as more projects are added.",
    ],
    futureImprovements: [
      "Add a blog section for writing about what I learn.",
      "Add more screenshots and deeper case-study content.",
      "Improve Lighthouse performance and accessibility scores.",
    ],
    images: [
      // Replace / add more screenshots (local files under src/assets)
      { src: portfolioImg, alt: "Portfolio Website — home page screenshot" },
    ],
    github: "https://github.com/prudhvi128/", // Replace with GitHub repository URL
    liveDemo: "#", // Replace with deployed website URL
  },
];
