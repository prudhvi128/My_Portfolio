// ======================================================
// File: src/components/ContactCard.jsx
// Purpose: Clickable card for a contact method (email,
//          LinkedIn, GitHub, or resume download).
// Why it exists: The Contact section renders four identical
//                contact method cards.
// Used In:
//   - src/sections/Contact.jsx
// Responsibilities:
//   - Renders the icon, title, and description.
//   - Renders an arrow that scales on hover.
//   - Applies the hover lift / border / shadow animation.
//   - Opens external links in a new tab.
// ======================================================

// Card icons (lucide-react)
import { ArrowUpRight } from "lucide-react";

// Purple icon badge reused across the portfolio
import IconBadge from "./IconBadge";

// Shared theme-aware card styling (background, border, shadow)
import { cardStyleShadow } from "../utils/cardStyle";

function ContactCard({ icon, title, description, href, download, isDark }) {
  const textSecondary = isDark ? "text-slate-300" : "text-slate-600";

  // Open external links in a new tab; skip mailto / placeholder links
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group flex flex-col h-full p-6 rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-violet-400/60 active:scale-[0.98] cursor-pointer ${cardStyleShadow(isDark)}`}
    >
      {/* Icon + arrow */}
      <div className="flex items-start justify-between">
        <IconBadge icon={icon} isDark={isDark} className="w-14 h-14" />
        <ArrowUpRight className="w-6 h-6 text-violet-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>

      {/* Description */}
      <p className={`mt-1.5 text-sm leading-6 break-words ${textSecondary}`}>
        {description}
      </p>
    </a>
  );
}

// Reusable contact method card (used by the Contact section).
export default ContactCard;
