// ======================================================
// File: src/App.jsx
// Purpose: Root component that owns the app-wide dark mode
//          state and defines the routes.
// Why it exists: Centralizes isDark/setIsDark so every page
//                receives the same theme prop, and maps URLs
//                to pages via React Router.
// Used In:
//   - src/main.jsx
// Responsibilities:
//   - Manages the isDark theme state.
//   - Applies dark/light background classes.
//   - Defines the "/" and "/projects/:slug" routes.
//   - Scrolls to sections / the top on navigation.
// ======================================================
import { useEffect, useState } from "react";

// Framer Motion config (disables transform animations for reduced-motion users)
import { MotionConfig } from "framer-motion";

// Router hooks
import { Routes, Route, useLocation } from "react-router-dom";

// Page composed of all portfolio sections
import Home from "./pages/Home";

// Reusable case-study page for a single project
import ProjectDetails from "./pages/ProjectDetails";

// Floating back-to-top button (fades in after 400px of scrolling)
import ScrollToTop from "./components/ScrollToTop";

// Fixed ambient background layer (radial wash + gradient blobs + dot grid)
import BackgroundFX from "./components/BackgroundFX";

// Scrolls to the section in the URL hash, or the top otherwise
function ScrollToSection() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <MotionConfig reducedMotion="user">
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {/* Ambient background sits behind all pages (theme-aware) */}
        <BackgroundFX isDark={isDark} />
        <ScrollToSection />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Home isDark={isDark} setIsDark={setIsDark} />}
          />
          <Route
            path="/projects/:slug"
            element={<ProjectDetails isDark={isDark} setIsDark={setIsDark} />}
          />
          <Route
            path="*"
            element={<Home isDark={isDark} setIsDark={setIsDark} />}
          />
        </Routes>
      </div>
    </MotionConfig>
  );
}

// Root component mounted by src/main.jsx.
export default App;
