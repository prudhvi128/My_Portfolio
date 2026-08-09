// ======================================================
// File: src/components/ProjectCard.jsx
// Purpose: Card showing a single project (screenshot,
//          description, technology chips, and action links).
// Why it exists: Projects are rendered from a list, so each
//                project shares one card layout.
// Used In:
//   - src/sections/Projects.jsx
// Responsibilities:
//   - Renders the project screenshot or a placeholder area.
//   - Shows the title, description, and technology chips.
//   - Renders GitHub and Live Demo buttons.
//   - Applies the portfolio's hover lift and purple glow.
// ======================================================

// Card + button icons (lucide-react)
import { GitFork, ExternalLink, Monitor } from "lucide-react";

// Technology chip reused from the About section
import TechChip from "../components/TechChip";

// Shared theme-aware card styling (background, border, shadow)
import { cardStyleShadow } from "../utils/cardStyle";

function ProjectCard({ project, isDark }) {
  const textSecondary = isDark ? "text-slate-300" : "text-slate-600";

  const image = project.images?.[0];

  // Persistent purple border highlights a featured project
  const featuredStyle = project.featured
    ? isDark
      ? "border-violet-400/40"
      : "border-violet-400/50"
    : "";

  const placeholderBg = isDark ? "bg-slate-800/40" : "bg-slate-100";

  return (
    <article
      className={`group flex flex-col h-full rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-violet-400/60 active:scale-[0.98] ${cardStyleShadow(isDark)} ${featuredStyle} overflow-hidden`}
    >
      {/* Screenshot */}
      <div className="relative aspect-video border-b overflow-hidden">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          // Placeholder shown until a screenshot is provided
          <div
            className={`w-full h-full flex flex-col items-center justify-center gap-2 ${placeholderBg}`}
          >
            <Monitor
              className={`w-10 h-10 ${
                isDark ? "text-slate-600" : "text-slate-400"
              }`}
            />
            <span
              className={`text-sm font-medium ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Project Screenshot
            </span>
          </div>
        )}

        {/* Overlay fades in on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-slate-900/0 group-hover:bg-slate-900/25 transition-colors duration-500"
        ></div>

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-sm font-medium bg-violet-500 text-white">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-2xl font-semibold">{project.title}</h3>

        <p className={`mt-3 text-base leading-7 ${textSecondary}`}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((tech) => (
            <TechChip key={tech} text={tech} isDark={isDark} />
          ))}
        </div>

        {/* Project Buttons (pinned to the bottom for equal-height cards).
            Fade in on hover for fine pointers; always visible on touch. */}
        <div className="flex flex-wrap gap-3 mt-auto pt-6 opacity-100 translate-y-0 transition-all duration-500 ease-out pointer-fine:opacity-0 pointer-fine:translate-y-2 pointer-fine:group-hover:opacity-100 pointer-fine:group-hover:translate-y-0">
          {/* GitHub button */}
          <a
            href={project.github}
            target={project.github.startsWith("http") ? "_blank" : undefined}
            rel={
              project.github.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className={`group border border-slate-400 px-4 py-3 rounded-full cursor-pointer flex items-center gap-2 hover:-translate-y-0.5 hover:bg-violet-50 hover:border-[#5634c7] hover:text-[#5634c7] transition-all duration-300 ease-out active:scale-[0.98] ${
              isDark ? "text-slate-200" : "text-black"
            }`}
          >
            <GitFork className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            GitHub
          </a>

          {/* Live Demo button */}
          <a
            href={project.liveDemo}
            target={project.liveDemo.startsWith("http") ? "_blank" : undefined}
            rel={
              project.liveDemo.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="group bg-[#3f208c] flex items-center gap-2 text-white px-5 py-3 rounded-full hover:bg-[#5634c7] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out active:scale-[0.98] cursor-pointer"
          >
            <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

// Reusable project card (used by the Projects section).
export default ProjectCard;
