// ======================================================
// File: src/sections/Highlights.jsx
// Purpose: Compact stats strip (4 items) shown below the hero.
// Why it exists: Highlights key facts at a glance.
// Used In:
//   - src/pages/Home.jsx
// Responsibilities:
//   - Renders the Building / B.Tech CSE / Learning / Open to cards.
// ======================================================

// Icons for the four highlight items
import { Pencil, GraduationCap, Target, Rocket } from "lucide-react";

// Shared theme-aware solid card styling (background, border, shadow)
import { cardStyleSolid } from "../utils/cardStyle";

// Scroll-reveal wrapper
import Reveal from "../components/Reveal";

// Purple icon badge reused across the portfolio
import IconBadge from "../components/IconBadge";

// Highlight items (icon + title + subtitle)
const highlights = [
  { icon: Pencil, title: "Building", subtitle: "Real Projects" },
  { icon: GraduationCap, title: "B.Tech CSE", subtitle: "Student" },
  { icon: Target, title: "Learning", subtitle: "Everyday" },
  { icon: Rocket, title: "Open to", subtitle: "Opportunities" },
];

function Highlights({ isDark }) {
  const subtitleText = isDark ? "text-slate-400" : "text-slate-500";

  return (
    /* =========================
        Highlights Section
    ========================== */
    <section className="py-8">
      {/* Keeps the content centered and aligned with the Hero section */}
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
        {/* Main Highlight Card */}
        <Reveal variant="up">
          <div
            className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 ${cardStyleSolid(isDark)}`}
          >
            {/* 4 Equal Columns (stack → 2 → 4 across breakpoints) */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x ${
                isDark ? "divide-slate-700" : "divide-slate-200"
              }`}
            >
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-5 px-0 sm:px-6 lg:px-8"
                >
                  {/* Icon Container */}
                  <IconBadge
                    icon={item.icon}
                    isDark={isDark}
                    className="w-14 h-14 shrink-0"
                  />

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>

                    <p className={`text-sm mt-1 ${subtitleText}`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Stats strip rendered by the Home page.
export default Highlights;
