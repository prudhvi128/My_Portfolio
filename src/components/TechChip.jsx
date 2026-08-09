// ======================================================
// File: src/components/TechChip.jsx
// Purpose: Rounded pill showing a technology name, optionally
//          with an icon (the dot is shown when no icon is given).
// Why it exists: The "Currently Exploring" list and the Skills
//                grid render many identical chips/pills.
// Used In:
//   - src/sections/About.jsx
//   - src/sections/Contact.jsx
//   - src/sections/Skills.jsx
//   - src/components/ProjectCard.jsx
//   - src/components/ProjectHeader.jsx
//   - src/pages/ProjectDetails.jsx
// Responsibilities:
//   - Renders a theme-aware chip with the same hover animation.
//   - Shows an icon on the left when `icon` is provided.
// ======================================================
function TechChip({ text, icon: Icon, isDark }) {
  const chipStyle = isDark
    ? "border-violet-500/20 bg-slate-800/50 hover:border-violet-500/50"
    : "border-violet-100 bg-violet-50 hover:border-violet-300";

  const iconColor = isDark ? "text-violet-400" : "text-violet-600";

  return (
    <div
      className={`flex items-center gap-2 ${
        Icon ? "px-4 py-2.5" : "px-5 py-3"
      } rounded-full border transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10 active:scale-[0.98] cursor-default ${chipStyle}`}
    >
      {Icon ? (
        <Icon className={`w-4 h-4 ${iconColor}`} />
      ) : (
        <div className="w-2 h-2 rounded-full bg-violet-500"></div>
      )}
      <span className="font-medium">{text}</span>
    </div>
  );
}

// Used in the About section's "Currently Exploring" list and
// the Skills section's technology pills.
export default TechChip;
