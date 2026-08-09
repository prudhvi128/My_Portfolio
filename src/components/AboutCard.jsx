// ======================================================
// File: src/components/AboutCard.jsx
// Purpose: Hoverable card with a header row (icon + title)
//          and a body passed via children.
// Why it exists: The "Who I Am" and "What I Do" cards are
//                structurally identical.
// Used In:
//   - src/sections/About.jsx
// Responsibilities:
//   - Renders a card with the hover lift/shadow animation.
//   - Renders the icon + title header via IconBadge.
//   - Renders arbitrary body content through children.
// ======================================================

// Reusable icon container shared with the other cards
import IconBadge from "./IconBadge";

// Shared theme-aware card styling (background, border, shadow)
import { cardStyleShadow } from "../utils/cardStyle";

function AboutCard({ icon, title, isDark, children, className = "" }) {
  return (
    <div
      className={`rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl active:scale-[0.98] ${cardStyleShadow(isDark)} ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <IconBadge icon={icon} isDark={isDark} className="w-12 h-12" />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      {/* Content */}
      {children}
    </div>
  );
}

// Used in the About section for "Who I Am" and "What I Do".
export default AboutCard;
