// ======================================================
// File: src/pages/Home.jsx
// Purpose: Page-level container that assembles the portfolio
//          sections into one page.
// Why it exists: Keeps App.jsx clean by grouping sections here.
// Used In:
//   - src/App.jsx
// Responsibilities:
//   - Renders Navbar, Hero, Highlights, About, Skills, Projects,
//     and Contact.
//   - Renders the Footer.
//   - Passes the isDark theme state down to each section.
// ======================================================

// Sticky top navigation bar
import Navbar from "../sections/Navbar";

// Landing hero section (intro text + avatar visuals)
import Hero from "../sections/Hero";

// Stats strip under the hero
import Highlights from "../sections/Highlights";

// About section (info cards, bio cards, tech chips)
import About from "../sections/About";

// Skills section (2x2 technology cards + tech pills)
import Skills from "../sections/Skills";

// Projects section (project cards grid + CTA)
import Projects from "../sections/Projects";

// Contact section (contact cards + availability card)
import Contact from "../sections/Contact";

// Site footer (brand, quick links, socials, back-to-top)
import Footer from "../components/Footer";

function Home({ isDark, setIsDark }) {
  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero isDark={isDark} />
      <Highlights isDark={isDark} />
      <About isDark={isDark} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </>
  );
}

// Single page of the portfolio, composed from all sections.
export default Home;