// ======================================================
// File: src/utils/cardStyle.js
// Purpose: Shared theme-aware card styling (background,
//          border, shadow, and glass effects).
// Why it exists: Many cards and badges repeat the same
//                dark/light color pairs. Centralizing them
//                means a future design change (shadow, border,
//                or glass effect) happens in exactly one place.
// Used In:
//   - All sections, card components, and the navbar
// Responsibilities:
//   - Exports helpers that map isDark -> a Tailwind class string.
// ======================================================

// Standard translucent card: background + border only.
// Used by section badges, which must stay shadow-free.
export const cardStyle = (isDark) =>
  isDark
    ? "bg-slate-900/40 border border-violet-500/20"
    : "bg-white border border-violet-100";

// Standard card plus a base shadow (AboutCard, ProjectCard, ...)
export const cardStyleShadow = (isDark) => `${cardStyle(isDark)} shadow-lg`;

// Solid card used by the Highlights strip
export const cardStyleSolid = (isDark) =>
  isDark
    ? "bg-slate-900 border border-slate-700 shadow-xl"
    : "bg-white border border-slate-200 shadow-xl";

// Overlay cards that float on the hero visual
export const cardStyleOverlay = (isDark) =>
  isDark
    ? "bg-slate-900/95 border border-slate-700 shadow-xl backdrop-blur-md"
    : "bg-slate-50/95 border border-slate-200 shadow-xl backdrop-blur-md";

// Translucent "glass" used by the navbar bar and mobile menu.
// Background only: backdrop-blur/shadow/border live in the consuming
// classes so the exact navbar look is preserved.
export const glassStyle = (isDark) =>
  isDark ? "bg-slate-100/10" : "bg-slate-100/50";
