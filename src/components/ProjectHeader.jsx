// ======================================================
// File: src/components/ProjectHeader.jsx
// Purpose: Top of a project's case-study page — back button,
//          hero image, title, description, tech badges, and
//          the GitHub / Live Demo buttons.
// Why it exists: Every project page opens with the same
//                header block.
// Used In:
//   - src/pages/ProjectDetails.jsx
// Responsibilities:
//   - Renders the back-to-projects link.
//   - Renders the hero screenshot (or a placeholder).
//   - Shows the title, description, and tech badges.
//   - Renders the GitHub and Live Demo buttons.
// ======================================================

// Router link for the back button
import { Link } from "react-router-dom";

// Header icons (lucide-react)
import { ArrowLeft, GitFork, ExternalLink, Monitor } from "lucide-react";

// Technology chip reused from the About section
import TechChip from "./TechChip";

// Shared theme-aware card styling (background, border, shadow)
import { cardStyleShadow } from "../utils/cardStyle";

function ProjectHeader({ project, isDark }) {
  const textSecondary = isDark ? "text-slate-300" : "text-slate-600";

  const image = project.images?.[0];

  return (
    <div className="flex flex-col items-center text-center">
      {/* Back Button */}
      <Link
        to="/#projects"
        className={`self-start flex items-center gap-2 border border-slate-400 px-5 py-2.5 rounded-full hover:-translate-y-1 hover:bg-violet-50 hover:border-[#5634c7] hover:text-[#5634c7] transition-all duration-300 ${
          isDark ? "text-slate-200" : "text-black"
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      {/* Hero Image */}
      <div
        className={`mt-10 w-full max-w-4xl rounded-3xl overflow-hidden ${cardStyleShadow(isDark)}`}
      >
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            className="w-full aspect-video object-cover"
          />
        ) : (
          // Placeholder shown until a screenshot is provided
          <div
            className={`w-full aspect-video flex flex-col items-center justify-center gap-2 ${
              isDark ? "bg-slate-800/40" : "bg-slate-100"
            }`}
          >
            <Monitor
              className={`w-12 h-12 ${
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
      </div>

      {/* Title */}
      <h1 className="mt-10 text-5xl md:text-6xl font-bold">{project.title}</h1>

      {/* Description */}
      <p className={`mt-4 max-w-2xl text-lg leading-8 ${textSecondary}`}>
        {project.description}
      </p>

      {/* Technology Badges */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {project.technologies.map((tech) => (
          <TechChip key={tech} text={tech} isDark={isDark} />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {/* GitHub button */}
        <a
          href={project.github}
          target={project.github.startsWith("http") ? "_blank" : undefined}
          rel={
            project.github.startsWith("http") ? "noopener noreferrer" : undefined
          }
          className={`border border-slate-400 px-6 py-3 rounded-full cursor-pointer flex items-center gap-2 hover:-translate-y-1 hover:bg-violet-50 hover:border-[#5634c7] hover:text-[#5634c7] transition-all duration-300 ${
            isDark ? "text-slate-200" : "text-black"
          }`}
        >
          <GitFork className="w-5 h-5" />
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
          className="bg-[#3f208c] flex items-center gap-2 text-white px-7 py-3 rounded-full hover:bg-[#5634c7] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          <ExternalLink className="w-5 h-5" />
          Live Demo
        </a>
      </div>
    </div>
  );
}

// Project page header, rendered by ProjectDetails.jsx.
export default ProjectHeader;
