// ======================================================
// File: src/components/Footer.jsx
// Purpose: Site footer with brand info, quick links, social
//          links, and a bottom bar with a back-to-top button.
// Why it exists: Closes the page and gives visitors quick
//                navigation and contact shortcuts.
// Used In:
//   - src/pages/Home.jsx
// Responsibilities:
//   - Renders the brand block (initial, name, tagline).
//   - Renders quick links that scroll to each section.
//   - Renders the social / resume icon links.
//   - Renders the copyright bar with a back-to-top button.
// ======================================================

// Footer icons (lucide-react)
import { Download } from "lucide-react";

// Brand icons for the social links
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Scroll-reveal wrapper
import Reveal from "./Reveal";

// Resume file (imported so Vite bundles it and returns its URL)
import resume from "../assets/Sama_Prudhvi_Sai_Reddy_Resume.docx";

function Footer({ isDark }) {
  const textSecondary = isDark ? "text-slate-300" : "text-slate-600";
  const headingText = isDark ? "text-slate-200" : "text-slate-900";
  const borderColor = isDark ? "border-slate-800" : "border-slate-200";

  // Quick links data
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Social / resume links data
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/prudhvi128",
      icon: FaGithub,
      hoverClasses: "hover:bg-slate-900 hover:border-slate-900",
      iconClasses: "text-slate-900 group-hover:text-white",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prudhvisaireddy-sama-185435381/",
      icon: FaLinkedin,
      hoverClasses: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
      iconClasses: "text-[#0A66C2] group-hover:text-white",
    },
    {
      label: "Email",
      href: "mailto:samaprudhvisaireddy@gmail.com",
      icon: MdEmail,
      hoverClasses: "hover:bg-[#EA4335] hover:border-[#EA4335]",
      iconClasses: "text-[#EA4335] group-hover:text-white",
    },
    {
      label: "Resume",
      href: resume,
      download: "Sama_Prudhvi_Sai_Reddy_Resume.docx",
      icon: Download,
      hoverClasses: "hover:bg-[#3f208c] hover:border-[#3f208c]",
      iconClasses: "text-[#3f208c] group-hover:text-white",
    },
  ];

  return (
    // Footer
    <footer className={`w-full border-t ${borderColor}`}>
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 py-16">
        {/* Main Grid */}
        <Reveal variant="up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-11 h-11 rounded-full bg-[#3f208c] flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <h3 className={`text-xl font-semibold ${headingText}`}>
                Sama Prudhvi Sai Reddy
              </h3>
            </a>
            <p className={`mt-4 max-w-xs text-base leading-7 mx-auto md:mx-0 ${textSecondary}`}>
              Building real projects instead of just following tutorials.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className={`text-lg font-semibold ${headingText}`}>
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-300 hover:text-violet-500 ${textSecondary}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Let's Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className={`text-lg font-semibold ${headingText}`}>
              Let's Connect
            </h4>
            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-4">
              {socialLinks.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    download={link.download}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className={`w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:rotate-6 hover:shadow-lg hover:shadow-violet-500/30 active:scale-[0.98] group ${link.hoverClasses}`}
                  >
                    <link.icon
                      className={`text-2xl transition-all duration-300 ${link.iconClasses}`}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        </Reveal>

        {/* Bottom Bar (scroll-to-top moved to the floating button in App) */}
        <Reveal variant="up" delay={150}>
          <div
            className={`mt-14 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6 ${borderColor}`}
          >
            <p className={`text-sm text-center md:text-left ${textSecondary}`}>
              © 2026 Sama Prudhvi Sai Reddy. All rights reserved.
            </p>

            <p className={`text-sm text-center md:text-right ${textSecondary}`}>
              Made with <span className="text-red-500">❤️</span> using React +
              Tailwind CSS
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

// Site footer rendered by the Home page.
export default Footer;
