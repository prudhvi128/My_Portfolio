// ======================================================
// File: src/sections/HeroLeft.jsx
// Purpose: Text side of the hero section (greeting, name,
//          tagline, description, buttons, social links).
// Why it exists: Keeps the hero readable by splitting content
//                from visuals.
// Used In:
//   - src/sections/Hero.jsx
// Responsibilities:
//   - Displays the "Available for Internships" badge.
//   - Shows the name, tagline, and description.
//   - Renders the resume + projects buttons.
//   - Renders GitHub / LinkedIn / Email links.
// ======================================================
import { useState } from "react";

// General UI icons (lucide-react)
import {
  GraduationCap,
  BadgeCheck,
  Download,
  Folder,
  FolderOpen,
} from "lucide-react";

// Brand icons for the social links
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Router link for the "View Projects" button
import { Link } from "react-router-dom";

// Resume file (imported so Vite bundles it and returns its URL)
import resume from "../assets/Sama_Prudhvi_Sai_Reddy_Resume.docx";

function HeroLeft({ isDark }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full xl:w-1/2 pr-0 xl:pr-10">
      {/* Available Badge */}
      <div
        className="animate-fade-up flex items-center gap-3.5 border border-slate-300 px-4 py-2 rounded-full bg-[#f0faf7]/95 w-fit"
        style={{ animationDelay: "0ms" }}
      >
        <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse"></div>
        <span className="font-light text-sm text-green-500">
          Available for Internships
        </span>
      </div>

      {/* Greeting */}
      <p
        className={`animate-fade-up text-2xl font-medium mt-3 ${
          isDark ? "text-slate-200" : "text-slate-700"
        }`}
        style={{ animationDelay: "80ms" }}
      >
        Hi, I'm
      </p>

      {/* Name */}
      <h1
        className="animate-fade-up text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none break-words"
        style={{ animationDelay: "140ms" }}
      >
        <p>
          Sama <span className="text-[#6129d9]">Prudhvi</span>
        </p>
        <p>Sai Reddy</p>
      </h1>

      {/* Tagline */}
      <div
        className="animate-fade-up flex gap-4 items-start mt-3"
        style={{ animationDelay: "200ms" }}
      >
        <div className="w-0.5 h-9 bg-[#5634c7]"></div>

        <p className="text-[#5634c7] text-2xl font-semibold">
          Building real projects instead of just following tutorials.
        </p>
      </div>

      {/* Tags */}
      <div
        className={`animate-fade-up flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-4 ${
          isDark ? "text-slate-200" : "text-slate-700"
        }`}
        style={{ animationDelay: "260ms" }}
      >
        <div className="flex gap-2 items-center">
          <GraduationCap className="w-5 h-5" />
          <p>Computer Science Student</p>
        </div>

        <div className="hidden sm:block w-px h-7 bg-slate-300"></div>

        <div className="flex gap-2 items-center">
          <BadgeCheck className="w-5 h-5" />
          <p>Aspiring Software Engineer</p>
        </div>
      </div>

      {/* Description */}
      <p
        className={`animate-fade-up mt-3 text-lg leading-7 ${
          isDark ? "text-slate-300" : "text-slate-700"
        }`}
        style={{ animationDelay: "320ms" }}
      >
        I'm a Computer Science student passionate about software development
        and problem-solving. I enjoy building modern web applications with
        React and continuously learning new technologies to create real-world
        impact.
      </p>

      {/* Buttons */}
      <div
        className="animate-fade-up flex flex-col sm:flex-row gap-4 mt-4"
        style={{ animationDelay: "380ms" }}
      >
        <a
          href={resume}
          download="Sama_Prudhvi_Sai_Reddy_Resume.docx"
          className="bg-[#3f208c] flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-full hover:bg-[#5634c7] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out active:scale-[0.98] cursor-pointer w-full sm:w-auto"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>

        <Link
          to="/#projects"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`group border border-slate-400 px-5 py-3.5 rounded-full cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:bg-violet-50 hover:border-[#5634c7] hover:text-[#5634c7] transition-all duration-300 ease-out active:scale-[0.98] w-full sm:w-auto ${
            isDark ? "text-slate-200" : "text-black"
          }`}
        >
          {isHovered ? (
            <FolderOpen className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          ) : (
            <Folder className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          )}

          View Projects
        </Link>
      </div>

      {/* Social Links */}
      <div
        className="animate-fade-up mt-4"
        style={{ animationDelay: "440ms" }}
      >
        <p
          className={`text-xl font-medium ${
            isDark ? "text-slate-200" : "text-slate-700"
          }`}
        >
          Let's connect
        </p>

        <div className="flex flex-wrap gap-4 mt-2.5">
          {/* GitHub */}
          <a
            href="https://github.com/prudhvi128"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-slate-900 hover:border-slate-900 group"
          >
            <FaGithub className="text-2xl text-slate-900 group-hover:text-white transition-all duration-300" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/prudhvisaireddy-sama-185435381/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#0A66C2] hover:border-[#0A66C2] group"
          >
            <FaLinkedin className="text-2xl text-[#0A66C2] group-hover:text-white transition-all duration-300" />
          </a>

          {/* Gmail */}
          <a
            href="mailto:samaprudhvisaireddy@gmail.com"
            aria-label="Send an email"
            className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#EA4335] hover:border-[#EA4335] group"
          >
            <MdEmail className="text-2xl text-[#EA4335] group-hover:text-white transition-all duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Left (text) side of the hero, rendered by Hero.jsx.
export default HeroLeft;