// ======================================================
// File: src/sections/About.jsx
// Purpose: About section — personal bio, info cards, and the
//          "Currently Exploring" technology chips.
// Why it exists: Presents the developer's background in a
//                structured, reusable layout.
// Used In:
//   - src/pages/Home.jsx
// Responsibilities:
//   - Renders the "About Me" heading and paragraphs.
//   - Renders the Education / Focus / Goal info cards.
//   - Renders the "Who I Am" and "What I Do" cards.
//   - Renders the "Currently Exploring" tech chips.
// ======================================================

// Section icons (lucide-react)
import {
  GraduationCap,
  Rocket,
  Target,
  UserRound,
  Code2,
  Lightbulb,
} from "lucide-react";

// Hoverable card used for "Who I Am" / "What I Do"
import AboutCard from "../components/AboutCard";

// Grid cell used for Education / Focus / Goal
import InfoCard from "../components/InfoCard";

// Shared theme-aware card styling (background, border, shadow)
import { cardStyleShadow } from "../utils/cardStyle";

// Scroll-reveal wrapper + heading underline styles
import Reveal from "../components/Reveal";
import { underlineClasses } from "../utils/underlineClasses";

// Purple icon badge used in the "Currently Exploring" header
import IconBadge from "../components/IconBadge";

// Pill chip for each technology in the "Currently Exploring" list
import TechChip from "../components/TechChip";

function About({ isDark }) {
  const aboutText = isDark ? "text-slate-300" : "text-slate-600";
  const primaryText = isDark ? "text-slate-300" : "text-slate-700";
  const secondaryText = isDark ? "text-slate-400" : "text-slate-500";
  const divider = isDark
    ? "border-x border-violet-500/20"
    : "border-x border-violet-100";

  const infoCards = [
    {
      icon: GraduationCap,
      title: "Education",
      line1: "B.Tech CSE",
      line2: "2025 – 2029",
    },
    {
      icon: Target,
      title: "Focus",
      line1: "Web Development",
      line2: "& Problem Solving",
      className: divider,
    },
    {
      icon: Rocket,
      title: "Goal",
      line1: "Become a",
      line2: "Software Engineer",
    },
  ];

  const techStack = [
    "React",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "DSA",
    "AI / ML Basics",
  ];

  const activities = [
    "Build modern web applications with React.",
    "Develop backend APIs using FastAPI & Python.",
    "Practice Data Structures & Algorithms.",
    "Build projects to continuously improve my skills.",
  ];

  return (
    <>
      {/* ===== Left Side ===== */}
      <section
        id="about"
        className="scroll-mt-10 w-full max-w-[1500px] mx-auto px-6 sm:px-10 pt-24"
      >
        <div className="flex flex-col lg:flex-row gap-10">
          <Reveal variant="left" className="w-full lg:w-3/5 flex flex-col">
            {({ visible }) => (
              <>
                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  About <span className="text-violet-500">Me</span>
                </h2>

                {/* Underline grows from 0 to full once the section appears */}
                <span className={underlineClasses(visible, "")} />

                {/* Paragraphs */}
                <p className={`mt-8 ml-2 text-lg leading-9 max-w-full lg:max-w-[85%] ${aboutText}`}>
                  Beyond academics, I enjoy learning by building real-world projects,
                  exploring modern technologies, and continuously improving my skills.
                </p>

                <p className={`mt-6 ml-2 text-lg leading-9 max-w-full lg:max-w-[85%] ${aboutText}`}>
                  My goal is to become a Software Engineer who creates impactful,
                  scalable, and meaningful software.
                </p>

                {/* Information Card */}
                <div className={`mt-10 rounded-3xl overflow-hidden ${cardStyleShadow(isDark)}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    {infoCards.map((card) => (
                      <InfoCard
                        key={card.title}
                        icon={card.icon}
                        title={card.title}
                        line1={card.line1}
                        line2={card.line2}
                        isDark={isDark}
                        className={card.className}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </Reveal>

          {/* ===== Right Side ===== */}
          <Reveal variant="right" className="w-full lg:w-2/5 flex flex-col gap-8 self-start">
            {/* Who I Am */}
            <AboutCard
              icon={UserRound}
              title="Who I Am"
              isDark={isDark}
              className="p-7"
            >
              <div className={`mt-2 space-y-3 leading-7 ${aboutText}`}>
                <p>
                  I am a passionate Computer Science student who enjoys building
                  modern web applications and learning through real-world
                  projects.
                </p>

                <p>
                  I continuously improve my development skills while exploring
                  backend technologies, artificial intelligence, and software
                  engineering.
                </p>
              </div>
            </AboutCard>

            {/* What I Do */}
            <AboutCard
              icon={Code2}
              title="What I Do"
              isDark={isDark}
              className="p-6"
            >
              <div className={`mt-2 space-y-3 ${primaryText}`}>
                {activities.map((activity) => (
                  <div key={activity} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                    <p>{activity}</p>
                  </div>
                ))}
              </div>
            </AboutCard>
          </Reveal>
        </div>
      </section>

      {/* ===== Currently Exploring ===== */}
      <section className="max-w-[1500px] mx-auto mt-16 px-6 sm:px-10">
        <Reveal variant="up">
          <div className={`mt-16 rounded-3xl p-6 sm:p-8 mb-4 ${cardStyleShadow(isDark)}`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <IconBadge icon={Lightbulb} isDark={isDark} className="w-14 h-14 shrink-0" />

              <div>
                <h3 className="text-2xl font-semibold">Currently Exploring</h3>

                <p className={`mt-1 ${secondaryText}`}>
                  Technologies I'm currently learning and building with.
                </p>
              </div>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8">
              {techStack.map((tech) => (
                <TechChip key={tech} text={tech} isDark={isDark} />
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

// About section rendered by the Home page.
export default About;
