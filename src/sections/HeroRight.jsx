// ======================================================
// File: src/sections/HeroRight.jsx
// Purpose: Visual side of the hero section (avatar, floating
//          about card, and tech stack card).
// Why it exists: Keeps the hero readable by splitting visuals
//                from content.
// Used In:
//   - src/sections/Hero.jsx
// Responsibilities:
//   - Renders the avatar with glow, ring, and dotted pattern.
//   - Renders the floating "About Me" card.
//   - Renders the floating "Tech Stack" card.
//   - Scales the fixed-size composition to fit small screens.
// ======================================================

// Hero profile image shown in the avatar circle
import avatar from "../assets/avatar.webp";

// Brand/tech icons for the tech stack grid
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFastapi,
  SiDocker,
  SiPython,
} from "react-icons/si";

// General UI icons (lucide-react)
import { User, GraduationCap, MapPin, Calendar, Code2 } from "lucide-react";

// Purple icon badge reused across the portfolio
import IconBadge from "../components/IconBadge";

// Shared theme-aware overlay card styling for the floating cards
import { cardStyleOverlay } from "../utils/cardStyle";

// Tech stack items (official brand colors, two rows of four)
const techStack = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26", delay: "0ms" },
  { name: "CSS", icon: SiCss, color: "#1572B6", delay: "300ms" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", delay: "600ms" },
  { name: "React", icon: SiReact, color: "#61DAFB", delay: "150ms" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", delay: "450ms" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", delay: "750ms" },
  { name: "Python", icon: SiPython, color: "#F7DF1E", delay: "100ms" },
  { name: "FastAPI", icon: SiFastapi, color: "#61DAFB", delay: "350ms" },
];

function HeroRight({ isDark }) {
  return (
    <div
      className="animate-scale-in w-full xl:w-1/2 relative flex items-center justify-center h-full"
      style={{ animationDelay: "250ms" }}
    >
      {/* Composition Wrapper: reserves the scaled layout box so the
          hero visual never overflows or pushes sections below it */}
      <div className="relative w-[270px] h-[322px] sm:w-[330px] sm:h-[393px] md:w-[390px] md:h-[465px] lg:w-[457px] lg:h-[545px] xl:w-[520px] xl:h-[620px]">
        {/* Scaled Content: the original 520x620 composition shrinks
            proportionally on small screens via a transform scale */}
        <div className="relative w-[520px] h-[620px] origin-top-left scale-[0.5192] sm:scale-[0.6346] md:scale-[0.75] lg:scale-[0.879] xl:scale-100">
          {/* Purple Glow */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-75 h-75 rounded-full blur-3xl transition-all duration-500 z-0 ${
              isDark ? "bg-violet-500/40" : "bg-violet-500/27"
            }`}
          ></div>

          {/* Purple Ring */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-[290px] h-[290px] rounded-full border-2 z-10 ${
              isDark ? "border-violet-500" : "border-violet-300"
            }`}
          ></div>

          {/* Dotted Pattern */}
          <div
            className="absolute right-2 top-8 w-40 h-60 opacity-35 z-10"
            style={{
              backgroundImage: `radial-gradient(circle, ${
                isDark ? "#8b5cf6" : "#7c5cff"
              } 2px, transparent 2px)`,
              backgroundSize: "20px 20px",
            }}
          ></div>

          {/* Avatar */}
          <div
            className={`animate-float absolute top-3 left-1/2 -translate-x-1/2 z-20 w-65 h-65 rounded-full p-2 ${
              isDark
                ? "bg-slate-800 border border-slate-700"
                : "bg-white border border-slate-200"
            }`}
          >
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* About Card */}
          <div
            className={`transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl absolute top-[250px] left-1/2 -translate-x-1/2 w-[460px] h-[150px] rounded-3xl p-2 z-15 ${cardStyleOverlay(isDark)}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IconBadge
                  icon={User}
                  isDark={isDark}
                  className="w-10 h-10 shrink-0"
                  iconClassName="w-5 h-5"
                />

                <p className="text-lg font-semibold">About Me</p>
              </div>

              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Details */}
            <div className="mt-0 ml-10 space-y-3">
              <div className="flex items-center gap-3 mb-1">
                <GraduationCap className="w-5 h-5 text-violet-500" />
                <p>B.Tech CSE Student</p>
              </div>

              <div className=" mb-1 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-violet-500" />
                <p>India</p>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-violet-500" />
                <p>Preparing for Software Engineering Placements</p>
              </div>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div
            className={`transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl absolute top-[425px] left-1/2 -translate-x-1/2 w-[460px] h-[190px] rounded-3xl p-3 z-15 ${cardStyleOverlay(isDark)}`}
          >
            <div className="flex items-center gap-3">
              <IconBadge
                icon={Code2}
                isDark={isDark}
                className="w-10 h-10 shrink-0"
                iconClassName="w-5 h-5"
              />

              <p className="text-lg font-semibold">Tech Stack</p>
            </div>

            <div className="flex flex-col">
              {[0, 1].map((row) => (
                <div
                  key={row}
                  className={`${
                    row === 0 ? "mt-2" : "mt-5"
                  } grid grid-cols-4 gap-6`}
                >
                  {techStack.slice(row * 4, row * 4 + 4).map((tech) => (
                    <div
                      key={tech.name}
                      className="animate-float flex flex-col items-center gap-2"
                      style={{ animationDelay: tech.delay }}
                    >
                      <tech.icon className="text-2xl" style={{ color: tech.color }} />
                      <p className="text-sm font-medium">{tech.name}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Right (visual) side of the hero, rendered by Hero.jsx.
export default HeroRight;
