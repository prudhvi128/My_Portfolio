// ======================================================
// File: src/sections/Navbar.jsx
// Purpose: Sticky top navigation bar.
// Why it exists: Provides page-wide navigation and houses the
//                theme toggle.
// Used In:
//   - src/pages/Home.jsx
// Responsibilities:
//   - Displays the logo and section anchor links.
//   - Tracks the active section highlight.
//   - Renders the theme toggle.
// ======================================================
import { useState, useEffect, useRef } from "react";

// Router link for section navigation
import { Link } from "react-router-dom";

// Dark/light mode switch
import ThemeToggle from "../components/ThemeToggle";

// Mobile menu open/close icons
import { Menu, X } from "lucide-react";

// Shared theme-aware glass styling (background) for bar + mobile menu
import { glassStyle } from "../utils/cardStyle";

// Section links (each scrolls to its section on the home page).
// Module-level so the scroll-spy effect below can depend on them stably.
const links = [
  { label: "Home", to: "/#home", key: "home" },
  { label: "About", to: "/#about", key: "about" },
  { label: "Skills", to: "/#skills", key: "skills" },
  { label: "Projects", to: "/#projects", key: "projects" },
  { label: "Contact", to: "/#contact", key: "contact" },
];

function Navbar({ isDark, setIsDark }) {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile menu panel + hamburger button refs (outside-click / focus)
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);

  // Helper: close the mobile menu (single place to change the state)
  const closeMenu = () => setIsMenuOpen(false);

  // 1. Body scroll lock: while the mobile menu is open the page behind
  //    it must not scroll; restore the previous overflow on close.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  // 2. Close on outside click: any pointer press landing outside the
  //    menu panel closes it (the toggle button stops propagation below).
  useEffect(() => {
    if (!isMenuOpen) return;
    const onPointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isMenuOpen]);

  // 3. Close on Escape: keyboard users can dismiss the menu and focus
  //    is returned to the hamburger button.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuToggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  // 4. Auto-close at md (768px) and up: the desktop nav replaces the
  //    mobile menu, so close it as soon as the viewport crosses 768px.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onViewportChange = (event) => {
      if (event.matches) closeMenu();
    };
    mq.addEventListener("change", onViewportChange);
    return () => mq.removeEventListener("change", onViewportChange);
  }, []);

  // 5. Scroll-spy + sticky state: keep the active nav link in sync with
  //    the section in view, and shrink the navbar once the page is scrolled.
  useEffect(() => {
    const sectionKeys = links.map((link) => link.key);

    const onScroll = () => {
      let current = "home";
      for (const key of sectionKeys) {
        const element = document.getElementById(key);
        // The last section whose top has passed the offset becomes active
        if (element && element.getBoundingClientRect().top <= 160) {
          current = key;
        }
      }
      setActive(current);
      setIsScrolled(window.scrollY > 10);
    };

    // Run once on mount so the initial highlight and state are correct
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu panel classes (kept mounted so exit transitions run)
  const mobileMenuBase =
    "md:hidden rounded-3xl border shadow-lg mt-4 p-4 backdrop-blur-xl " +
    "transition-all duration-300 ease-in-out";
  const mobileMenuState = isMenuOpen
    ? "opacity-100 translate-y-0 visible"
    : "opacity-0 -translate-y-2 invisible pointer-events-none";

  return (
    <nav className="flex relative w-full px-6 sticky top-0 z-50">
      {/* Overlay behind the mobile menu (dims the page, closes on click) */}
      {isMenuOpen && (
        <div
          aria-hidden="true"
          onClick={closeMenu}
          className="fixed inset-0 z-0 bg-black/50 animate-[fadeIn_0.2s_ease]"
        />
      )}

      <div
        className={`animate-fade-slide-down flex pt-3 relative z-20 justify-between items-center w-full max-w-[1500px] mx-auto px-8 rounded-full transition-all duration-300 ease-out ${glassStyle(isDark)} ${
          isScrolled
            ? "h-16 shadow-lg backdrop-blur-2xl"
            : "h-20 backdrop-blur-xl"
        }`}
      >
        {/* Left Side (Logo) */}
        <div>
          <Link to="/#home" className="text-3xl font-bold cursor-pointer">
            Prudhvi<span className="text-violet-500">.</span>
          </Link>
        </div>

        {/* Center */}
        <div
          className={`hidden md:flex gap-12 text-base font-medium ${
            isDark ? "text-slate-200" : "text-slate-700"
          }`}
        >
          {links.map((link) => (
            <div key={link.key} className="group flex flex-col items-center">
              <Link
                to={link.to}
                onClick={() => setActive(link.key)}
                className="cursor-pointer pb-2 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#3f208c]"
              >
                {link.label}
              </Link>

              <div
                className={`h-0.5 rounded-full bg-[#3f208c] transition-all duration-300 ease-out ${
                  active === link.key ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          </div>

          {/* Hamburger / close toggle (mobile only) */}
          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onPointerDown={(event) => event.stopPropagation()}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="cursor-pointer" />
            ) : (
              <Menu className="cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* ================= Mobile Menu ================= */}

      <div
        ref={menuRef}
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        className="absolute top-full left-0 right-0 mx-auto max-w-[1500px] z-10"
      >
        <div
          className={`${mobileMenuBase} ${mobileMenuState} ${
            isDark ? "border-slate-700" : "border-slate-200"
          } ${glassStyle(isDark)}`}
        >
          {links.map((link, index) => (
            <div
              key={link.key}
              className={`flex flex-col items-start transition-all duration-300 ease-out ${
                isMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 60}ms` : "0ms",
              }}
            >
              <Link
                to={link.to}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActive(link.key);
                }}
                className="w-full py-3 px-2 rounded-lg transition-all duration-300 hover:bg-violet-50 hover:text-[#3f208c]"
              >
                {link.label}
              </Link>
            </div>
          ))}

          {/* Divider */}
          <div
            className={`my-4 border-t ${
              isDark ? "border-slate-700" : "border-slate-200"
            }`}
          />

          {/* Theme Toggle */}
          <div className="flex justify-center">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          </div>
        </div>
      </div>
    </nav>
  );
}

// Top navigation bar rendered by the Home page.
export default Navbar;
