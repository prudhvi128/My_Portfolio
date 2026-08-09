// ======================================================
// File: src/components/IconBadge.jsx
// Purpose: Reusable purple rounded icon badge.
// Why it exists: Every card/badge repeats the same violet
//                icon container + icon color.
// Used In:
//   - src/components/AboutCard.jsx
//   - src/components/InfoCard.jsx
//   - src/sections/About.jsx
// Responsibilities:
//   - Renders the theme-aware violet icon container.
//   - Colors the icon for dark/light themes.
// ======================================================
function IconBadge({ icon: Icon, isDark, className = "", iconClassName = "w-7 h-7" }) {
  const iconBackground = isDark
    ? "bg-violet-500/10 border-violet-500/20"
    : "bg-violet-50 border-violet-100";

  const iconColor = isDark ? "text-violet-400" : "text-violet-600";

  return (
    <div
      className={`flex items-center justify-center border rounded-2xl ${iconBackground} ${className}`}
    >
      <Icon className={`${iconClassName} ${iconColor}`} />
    </div>
  );
}

// Reusable purple icon badge (used by AboutCard, InfoCard, and About).
export default IconBadge;
