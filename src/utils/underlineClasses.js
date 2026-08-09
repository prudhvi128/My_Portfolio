// ======================================================
// File: src/utils/underlineClasses.js
// Purpose: Shared animated heading underline class helper.
// Why it exists: Several section headers share an underline
//                that grows from 0 to full width once the
//                heading is revealed. Centralizing it keeps
//                the Reveal component a pure component (and
//                fast-refresh friendly) by moving the helper
//                out of the component file.
// Used In:
//   - src/sections/About.jsx, Skills.jsx, Projects.jsx,
//     Contact.jsx
// Responsibilities:
//   - Returns Tailwind classes for the animated underline.
//     `visible` toggles width 0 -> full; `extra` controls
//     alignment (pass "mx-auto" for centered headers).
// ======================================================

export const underlineClasses = (visible, extra = "mx-auto") =>
  `block mt-4 h-1 rounded-full bg-linear-to-r from-violet-500 to-violet-300 transition-all duration-500 ease-out ${
    visible ? "w-24" : "w-0"
  } ${extra}`;
