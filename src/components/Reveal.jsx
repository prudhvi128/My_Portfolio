// ======================================================
// File: src/components/Reveal.jsx
// Purpose: Reveals its children when they scroll into view,
//          replaying every time they enter the viewport.
// Why it exists: Sections and cards share one scroll-in
//                animation (fade up / left / right / scale)
//                built on Framer Motion instead of repeating
//                observers everywhere.
// Used In:
//   - src/sections/Highlights.jsx, About.jsx, Skills.jsx
//   - src/sections/Projects.jsx, Contact.jsx
//   - src/components/Footer.jsx, ImageGallery.jsx
//   - src/pages/ProjectDetails.jsx
// Responsibilities:
//   - Animates from a hidden variant to visible each time the
//     element enters the viewport (viewport once: false).
//   - Animates back to hidden when it leaves, so scrolling away
//     and back replays the animation.
//   - Respects prefers-reduced-motion (shows content instantly).
//   - Supports a stagger delay (in milliseconds — converted to
//     seconds for Framer Motion, which expects seconds) and a
//     render-prop so callers can place animated underlines
//     exactly where they belong.
//
// Implementation note: this uses useInView + useAnimation
// controls instead of whileInView because whileInView's
// transition.delay is only honored on the first trigger; on
// re-entry the staggered delays are dropped and cards appear
// near-simultaneously. Driving controls.start() ourselves makes
// every entry deterministic.
// ======================================================

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";

// Hidden states per variant (GPU-friendly transform + opacity)
const hiddenByVariant = {
  up: { opacity: 0, y: 24 },
  left: { opacity: 0, x: -24 },
  right: { opacity: 0, x: 24 },
  scale: { opacity: 0, scale: 0.95 },
};

// Visible state every variant animates toward
const visibleState = { opacity: 1, x: 0, y: 0, scale: 1 };

// Trigger once the element enters the viewport.
// once: false is what makes the animation replay on every re-entry.
const viewportConfig = { once: false, amount: "some" };

function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  children,
}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  // Live in-view state so the render-prop callers (headings/underlines)
  // also replay every time the element enters the viewport.
  const visible = useInView(ref, viewportConfig);

  const MotionTag = motion[Tag] || motion.div;

  // Animate toward the visible state while in view; snap back to hidden
  // when it leaves so the next entry replays. Delay only applies on enter.
  // Skipped entirely under prefers-reduced-motion.
  useEffect(() => {
    if (prefersReducedMotion) return;
    if (visible) {
      controls.start(visibleState, {
        duration: 0.6,
        delay: delay / 1000,
        ease: "easeOut",
      });
    } else {
      controls.start(hiddenByVariant[variant], { duration: 0.3 });
    }
  }, [visible, controls, variant, delay, prefersReducedMotion]);

  // Reduced motion: render fully visible, no entrance animation.
  if (prefersReducedMotion) {
    return (
      <MotionTag ref={ref} className={className}>
        {typeof children === "function" ? children({ visible: true }) : children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      initial={hiddenByVariant[variant]}
      animate={controls}
      className={className}
    >
      {typeof children === "function" ? children({ visible }) : children}
    </MotionTag>
  );
}

// Scroll-reveal wrapper used across the portfolio.
export default Reveal;
