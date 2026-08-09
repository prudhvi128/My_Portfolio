// ======================================================
// File: src/sections/Projects.jsx
// Purpose: Projects section — a responsive grid of project
//          cards that link to their case-study pages.
// Why it exists: Shows the developer's work; each card opens
//                a full project details page.
// Used In:
//   - src/pages/Home.jsx
// Responsibilities:
//   - Renders the "My Work" header.
//   - Renders the responsive project card grid.
//   - Renders the centered "More Projects Coming Soon..." button.
//   - Reads project data from src/data/projects.js.
// ======================================================

// Section + button icons (lucide-react)
import { Briefcase, Sparkles } from "lucide-react";

// Purple icon badge reused across the portfolio
import IconBadge from "../components/IconBadge";

// Reusable project card
import ProjectCard from "../components/ProjectCard";

// Central project data
import { projects } from "../data/projects";

// Shared theme-aware card styling (background, border)
import { cardStyle } from "../utils/cardStyle";

// Scroll-reveal wrapper + heading underline styles
import Reveal from "../components/Reveal";
import { underlineClasses } from "../utils/underlineClasses";

function Projects({ isDark }) {
  const subtitleText = isDark ? "text-slate-300" : "text-slate-600";
  const badgeText = isDark ? "text-slate-200" : "text-slate-700";

  return (
    // Projects Section
    <section
      id="projects"
      className="scroll-mt-20 w-full max-w-[1500px] mx-auto px-6 sm:px-10 py-24"
    >
      {/* Header */}
      <Reveal variant="up">
        {({ visible }) => (
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div
              className={`flex items-center gap-3 px-4 py-2 rounded-full ${cardStyle(isDark)}`}
            >
              <IconBadge icon={Briefcase} isDark={isDark} className="w-8 h-8" />
              <span className={`font-medium ${badgeText}`}>My Work</span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold">
              Featured <span className="text-violet-500">Projects</span>
            </h2>

            {/* Underline grows from 0 to full once the section appears */}
            <span className={underlineClasses(visible)} />

            {/* Subtitle */}
            <p className={`mt-4 max-w-[600px] text-lg leading-8 ${subtitleText}`}>
              Projects I've built while learning modern web development and
              solving real-world problems.
            </p>
          </div>
        )}
      </Reveal>

      {/* Cards Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Reveal key={project.slug} variant="up" delay={index * 120} className="h-full">
            <ProjectCard project={project} isDark={isDark} />
          </Reveal>
        ))}
      </div>

      {/* More Projects Coming Soon — single outlined button (not a banner) */}
      <Reveal variant="up" delay={200}>
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() =>
              alert("I said coming soon! Not to click me! 😤")
            }
            className={`group border border-slate-400 px-7 py-3 rounded-full cursor-pointer text-base flex items-center gap-2 hover:-translate-y-0.5 hover:bg-violet-50 hover:border-[#5634c7] hover:text-[#5634c7] hover:shadow-xl transition-all duration-300 ease-out active:scale-[0.98] ${
              isDark ? "text-slate-200" : "text-black"
            }`}
          >
            <Sparkles className="w-5 h-5 text-violet-500 transition-transform duration-300 group-hover:translate-x-1" />
            More Projects Coming Soon...
          </button>
        </div>
      </Reveal>
    </section>
  );
}

// Projects section rendered by the Home page.
export default Projects;
