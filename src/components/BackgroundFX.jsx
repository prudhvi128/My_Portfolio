// ======================================================
// File: src/components/BackgroundFX.jsx
// Purpose: Fixed ambient background that makes the glass
//          cards stand out.
// Why it exists: A subtle, premium background layer (soft
//                radial wash + gradient blobs + faint dot
//                grid) sits behind every page. The
//                semi-transparent cards pick up the soft
//                color behind their glass background.
// Used In:
//   - src/App.jsx (rendered once, behind all routes)
// Responsibilities:
//   - Renders a fixed, pointer-transparent layer (-z-10).
//   - Draws the theme base color, a subtle radial wash, and
//     a barely visible dot grid.
//   - Places three blurred gradient blobs (top-left,
//     bottom-right, center) with a very slow drift.
//   - Switches the palette between light and dark themes.
// Performance:
//   - Blobs animate transform only (translate3d), so the
//     compositor handles them; blur is never animated.
//   - Fixed layer, overflow hidden, behind all content.
// ======================================================

import { useEffect } from "react";

// Blob recipe: positioning wrapper + size/blur + slow drift + per-theme color
const BLOBS = [
  {
    id: "top-left",
    wrapper: "absolute -top-[20%] -left-[12%]",
    size: "w-[46vw] h-[46vw] max-w-[760px] max-h-[760px] blur-[96px]",
    anim: "animate-blob-1",
    light: "radial-gradient(circle at 50% 50%, rgba(125, 211, 252, 0.16), transparent 65%)",
    dark: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.16), transparent 65%)",
  },
  {
    id: "bottom-right",
    wrapper: "absolute -bottom-[22%] -right-[14%]",
    size: "w-[44vw] h-[44vw] max-w-[720px] max-h-[720px] blur-[96px]",
    anim: "animate-blob-2",
    light: "radial-gradient(circle at 50% 50%, rgba(196, 181, 253, 0.2), transparent 65%)",
    dark: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 65%)",
  },
  {
    id: "center",
    wrapper: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    size: "w-[26vw] h-[26vw] max-w-[430px] max-h-[430px] blur-3xl",
    anim: "animate-blob-3",
    light: "radial-gradient(circle at 50% 50%, rgba(221, 214, 254, 0.2), transparent 65%)",
    dark: "radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.16), transparent 65%)",
  },
];

// Faint dot grid (low alpha + low layer opacity => roughly 5-8% visible)
const dots = (color) => ({
  backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
  backgroundSize: "26px 26px",
});

// Subtle radial wash behind everything
const baseRadial = (isDark) =>
  isDark
    ? "radial-gradient(1100px circle at 15% 0%, rgba(49, 46, 129, 0.3), transparent 60%), radial-gradient(1000px circle at 90% 100%, rgba(30, 58, 138, 0.25), transparent 60%)"
    : "radial-gradient(1100px circle at 15% 0%, rgba(221, 214, 254, 0.35), transparent 60%), radial-gradient(1000px circle at 90% 100%, rgba(186, 230, 253, 0.3), transparent 60%)";

function BackgroundFX({ isDark }) {
  const baseBg = isDark ? "#020617" : "#ffffff";
  const dotColor = isDark
    ? "rgba(203, 213, 225, 0.4)"
    : "rgba(100, 116, 139, 0.32)";

  // Keep the page edge (overscroll area) the same color as the theme
  useEffect(() => {
    document.body.style.backgroundColor = baseBg;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [baseBg]);

  return (
    // Fixed ambient layer, painted behind all content
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Solid theme base (matches the app's root background) */}
      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          isDark ? "bg-slate-950" : "bg-white"
        }`}
      />

      {/* Soft radial wash */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: baseRadial(isDark) }}
      />

      {/* Faint dot grid */}
      <div className="absolute inset-0 opacity-[0.07]" style={dots(dotColor)} />

      {/* Drifting gradient blobs */}
      {BLOBS.map((blob) => (
        <div key={blob.id} className={`absolute ${blob.wrapper}`}>
          <div
            className={`${blob.size} ${blob.anim} rounded-full will-change-transform`}
            style={{ backgroundImage: isDark ? blob.dark : blob.light }}
          />
        </div>
      ))}
    </div>
  );
}

// Ambient background rendered behind the portfolio routes.
export default BackgroundFX;
