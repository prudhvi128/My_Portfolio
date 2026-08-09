// ======================================================
// File: src/components/ScrollToTop.jsx
// Purpose: Floating back-to-top button that fades in after
//          scrolling 400px.
// Why it exists: Lets visitors jump to the top from long pages
//                (the home page and project detail pages).
// Used In:
//   - src/App.jsx (rendered above the routes)
// Responsibilities:
//   - Fades/slides in once the user scrolls past 400px.
//   - Smooth-scrolls to the top on click.
// ======================================================

import { useEffect, useState } from "react";

// Arrow icon (lucide-react)
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`group fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:bg-[#3f208c] hover:border-[#3f208c] hover:shadow-xl cursor-pointer ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 text-slate-900 transition-colors duration-300 group-hover:text-white" />
    </button>
  );
}

// Floating back-to-top control rendered app-wide.
export default ScrollToTop;
