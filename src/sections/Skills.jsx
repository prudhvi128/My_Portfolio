// ======================================================
// File: src/sections/Skills.jsx
// Purpose: Skills section — a responsive 2x2 grid of
//          technology cards plus a bottom learning banner.
// Why it exists: Presents the tech stack in a structured,
//                reusable layout that matches the portfolio.
// Used In:
//   - src/pages/Home.jsx
// Responsibilities:
//   - Renders the "My Toolkit" header.
//   - Renders the responsive 2x2 skills card grid.
//   - Renders the bottom learning banner.
// ======================================================

// Section + pill icons (lucide-react)
import {
  Monitor,
  Server,
  Wrench,
  Brain,
  Toolbox,
  FileCode2,
  Palette,
  Braces,
  Atom,
  Wind,
  Code2,
  Zap,
  GitBranch,
  GitFork,
  Container,
  SquareCode,
  Coffee,
  Binary,
  Sparkles,
} from "lucide-react";

// Hoverable card reused from the About section
import AboutCard from "../components/AboutCard";

// Purple icon badge reused across the portfolio
import IconBadge from "../components/IconBadge";

// Technology pill (icon + name)
import TechChip from "../components/TechChip";

// Shared theme-aware card styling (background, border, shadow)
import { cardStyle, cardStyleShadow } from "../utils/cardStyle";

// Scroll-reveal wrapper + heading underline styles
import Reveal from "../components/Reveal";
import { underlineClasses } from "../utils/underlineClasses";

function Skills({ isDark }) {
  const subtitleText = isDark ? "text-slate-300" : "text-slate-600";
  const badgeText = isDark ? "text-slate-200" : "text-slate-700";

  // Skills cards data
  const skillCategories = [
    // Frontend Card
    {
      title: "Frontend",
      icon: Monitor,
      technologies: [
        { name: "HTML", icon: FileCode2 },
        { name: "CSS", icon: Palette },
        { name: "JavaScript", icon: Braces },
        { name: "React", icon: Atom },
        { name: "Tailwind CSS", icon: Wind },
      ],
    },
    // Backend Card
    {
      title: "Backend",
      icon: Server,
      technologies: [
        { name: "Python", icon: Code2 },
        { name: "FastAPI", icon: Zap },
      ],
    },
    // Tools Card
    {
      title: "Tools",
      icon: Wrench,
      technologies: [
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: GitFork },
        { name: "Docker", icon: Container },
        { name: "VS Code", icon: SquareCode },
      ],
    },
    // CS & AI Card
    {
      title: "CS & AI",
      icon: Brain,
      technologies: [
        { name: "Java", icon: Coffee },
        { name: "DSA", icon: Binary },
        { name: "AI / ML Basics", icon: Sparkles },
      ],
    },
  ];

  return (
    // Skills Section
    <section
      id="skills"
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
              <IconBadge icon={Toolbox} isDark={isDark} className="w-7 h-7" />
              <span className={`font-medium ${badgeText}`}>My Toolkit</span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold">
              Skills & <span className="text-violet-500">Technologies</span>
            </h2>

            {/* Underline grows from 0 to full once the section appears */}
            <span className={underlineClasses(visible)} />

            {/* Subtitle */}
            <p className={`mt-4 max-w-[600px] text-lg leading-8 ${subtitleText}`}>
              Technologies I use to build modern, scalable, and user-friendly
              applications.
            </p>
          </div>
        )}
      </Reveal>

      {/* Cards Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} variant="up" delay={index * 120}>
            <AboutCard
              icon={category.icon}
              title={category.title}
              isDark={isDark}
              className="p-8"
            >
              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mt-6">
                {category.technologies.map((tech) => (
                  <TechChip
                    key={tech.name}
                    icon={tech.icon}
                    text={tech.name}
                    isDark={isDark}
                  />
                ))}
              </div>
            </AboutCard>
          </Reveal>
        ))}
      </div>

      {/* Bottom Banner */}
      <Reveal variant="up">
        <div className={`mt-8 rounded-3xl p-6 sm:p-8 ${cardStyleShadow(isDark)}`}>
          <p className="text-center text-lg">
            ✨ Learning continuously. Building consistently. Growing every day.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

// Skills section rendered by the Home page.
export default Skills;
