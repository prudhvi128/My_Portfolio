
// ======================================================
// File: src/components/ThemeToggle.jsx
// Purpose: Dark/light mode switch rendered in the navbar.
// Why it exists: Exposes the app-wide isDark/setIsDark state
//                as a clickable control.
// Used In:
//   - src/sections/Navbar.jsx
// Responsibilities:
//   - Toggles the isDark state on click.
//   - Shows sun/moon icons and a sliding knob.
// ======================================================

// Sun / Moon icons for the dark-light switch
import { Sun, Moon } from "lucide-react";
function ThemeToggle({ isDark, setIsDark }) {

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`flex relative items-center gap-3 ${isDark ? "bg-slate-700" : "bg-white"} rounded-full px-4 py-2 border border-violet-900 border-2 cursor-pointer`}
    >
      <Sun className={`z-10 transition-colors duration-300 ${
    isDark ? "text-white" : "text-black"}`}/>
      <Moon className={`z-10 transition-colors duration-300 ${
    isDark ? "text-black" : "text-white"}`}/>
      {/* Sliding knob that follows the active theme */}
      <div className={`absolute transition-transform duration-300 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#3f208c]/80 rounded-full ${isDark ? "translate-x-[30px]" : "left-[10px]"}`}></div>
    </button>
  );
}

// Dark/light mode switch used by the Navbar.
export default ThemeToggle;