// ======================================================
// File: src/components/InfoCard.jsx
// Purpose: Single cell of the About "Information Card" grid
//          (icon, title, and two lines of text).
// Why it exists: The Education, Focus, and Goal cells share
//                the exact same layout.
// Used In:
//   - src/sections/About.jsx
// Responsibilities:
//   - Renders an IconBadge, title, line1, and line2.
//   - Applies theme-aware text colors.
// ======================================================

// Reusable icon container shared with the other cards
import IconBadge from "./IconBadge";

function InfoCard({ icon, title, line1, line2, isDark, className = "" }) {
  return (
    <div className={`flex flex-col px-6 py-6 sm:px-8 sm:py-8 ${className}`}>
      <IconBadge icon={icon} isDark={isDark} className="w-14 h-14" />

      <h3 className="mt-5 text-xl font-semibold">{title}</h3>

      <p
        className={`mt-2 text-lg ${
          isDark ? "text-slate-300" : "text-slate-700"
        }`}
      >
        {line1}
      </p>

      <p
        className={`mt-1 text-sm ${
          isDark ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {line2}
      </p>
    </div>
  );
}

// Used in the About section's Education / Focus / Goal grid.
export default InfoCard;
