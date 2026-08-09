// ======================================================
// File: src/sections/Hero.jsx
// Purpose: Landing section shown at the top of the page.
// Why it exists: Splits the hero into a text side and a visual
//                side while keeping the section layout here.
// Used In:
//   - src/pages/Home.jsx
// Responsibilities:
//   - Renders the full-height hero layout.
//   - Composes HeroLeft and HeroRight.
// ======================================================

// Text side of the hero (name, intro, buttons, socials)
import HeroLeft from "./HeroLeft";

// Visual side of the hero (avatar, about card, tech stack)
import HeroRight from "./HeroRight";

function Hero({ isDark }) {
  return (

      <section
      id="home"
      className="scroll-mt-28 min-h-[calc(100vh-5.75rem)] overflow-x-hidden flex items-center"
    >
      <div className="max-w-[1450px] mx-auto px-6 sm:px-8 w-full flex flex-col xl:flex-row items-center justify-center gap-12 sm:gap-16 xl:gap-0">
        {/* Left Side */}
        <HeroLeft isDark={isDark} />

        {/* Right Side */}
        <HeroRight isDark={isDark} />
      </div>
    </section>

  );
}

// Landing section rendered by the Home page.
export default Hero;