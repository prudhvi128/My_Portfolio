// ======================================================
// File: src/pages/ProjectDetails.jsx
// Purpose: Reusable case-study page for a single project.
// Why it exists: Every project gets a professional detail page
//                built from the same reusable components.
// Used In:
//   - src/App.jsx (route: /projects/:slug)
// Responsibilities:
//   - Looks up the project by its URL slug.
//   - Renders the header, case-study sections, and gallery.
//   - Opens the fullscreen image viewer when a shot is clicked.
// ======================================================

import { useState } from "react";

// Router hooks
import { useParams, Link } from "react-router-dom";

// List icons (lucide-react)
import {
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Rocket,
} from "lucide-react";

// Central project data
import { projects } from "../data/projects";

// Sticky top navigation bar
import Navbar from "../sections/Navbar";

// Case-study building blocks
import ProjectHeader from "../components/ProjectHeader";
import ImageGallery from "../components/ImageGallery";
import ImageModal from "../components/ImageModal";
import TechChip from "../components/TechChip";

// Scroll-reveal wrapper
import Reveal from "../components/Reveal";

// Case study section wrapper (centered heading + content)
function CaseStudySection({ title, isDark, children, delay = 0 }) {
  const textSecondary = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <Reveal variant="up" delay={delay}>
      <section>
        <h2 className="text-center text-2xl sm:text-3xl font-bold">{title}</h2>
        <div className={`mt-6 max-w-3xl mx-auto text-lg leading-8 ${textSecondary}`}>
          {children}
        </div>
      </section>
    </Reveal>
  );
}

// Bullet list for features, challenges, learnings, etc.
function CaseStudyList({ items, icon: Icon, isDark }) {
  const textSecondary = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Icon className="w-5 h-5 text-violet-500 mt-1 shrink-0" />
          <span className={`text-base leading-7 ${textSecondary}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Numbered list for the development process steps
function DevelopmentSteps({ steps, isDark }) {
  const textSecondary = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <ol className="space-y-3">
      {steps.map((step, index) => (
        <li key={step} className="flex items-start gap-3">
          <span className="w-6 h-6 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-500 flex items-center justify-center text-xs font-semibold shrink-0 mt-1">
            {index + 1}
          </span>
          <span className={`text-base leading-7 ${textSecondary}`}>{step}</span>
        </li>
      ))}
    </ol>
  );
}

function ProjectDetails({ isDark, setIsDark }) {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  // Index of the screenshot shown in the fullscreen viewer (null = closed)
  const [selectedImage, setSelectedImage] = useState(null);

  // Project not found
  if (!project) {
    return (
      <>
        <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Not Found */}
      <Reveal variant="up">
      <div className="flex flex-col items-center text-center py-32 sm:py-40 px-6 sm:px-10">
          <h1 className="text-5xl font-bold">Project not found</h1>
          <p
            className={`mt-4 text-lg ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            The project you're looking for doesn't exist yet.
          </p>
          <Link
            to="/"
            className={`mt-8 border border-slate-400 px-7 py-3 rounded-full hover:-translate-y-1 hover:bg-violet-50 hover:border-[#5634c7] hover:text-[#5634c7] transition-all duration-300 ${
              isDark ? "text-slate-200" : "text-black"
            }`}
          >
            Back to Home
          </Link>
        </div>
      </Reveal>
      </>
    );
  }

  const imageCount = project.images.length;
  const prevImage = () =>
    setSelectedImage((index) => (index - 1 + imageCount) % imageCount);
  const nextImage = () =>
    setSelectedImage((index) => (index + 1) % imageCount);

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Project Details Page */}
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 py-16">
        {/* Project Header */}
        <Reveal variant="up">
          <ProjectHeader project={project} isDark={isDark} />
        </Reveal>

        {/* Case Study Content */}
        <div className="mt-20 space-y-12 md:space-y-16">
          {/* Overview */}
          <CaseStudySection title="Overview" isDark={isDark}>
            <p>{project.overview}</p>
          </CaseStudySection>

          {/* Problem Statement */}
          <CaseStudySection title="Problem Statement" isDark={isDark}>
            <p>{project.problem}</p>
          </CaseStudySection>

          {/* Solution */}
          <CaseStudySection title="Solution" isDark={isDark}>
            <p>{project.solution}</p>
          </CaseStudySection>

          {/* Features */}
          <CaseStudySection title="Features" isDark={isDark}>
            <CaseStudyList
              items={project.features}
              icon={CheckCircle2}
              isDark={isDark}
            />
          </CaseStudySection>

          {/* Technologies Used */}
          <CaseStudySection title="Technologies Used" isDark={isDark}>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech) => (
                <TechChip key={tech} text={tech} isDark={isDark} />
              ))}
            </div>
          </CaseStudySection>

          {/* Development Process */}
          <CaseStudySection title="Development Process" isDark={isDark}>
            <DevelopmentSteps steps={project.developmentProcess} isDark={isDark} />
          </CaseStudySection>

          {/* Challenges */}
          <CaseStudySection title="Challenges" isDark={isDark}>
            <CaseStudyList
              items={project.challenges}
              icon={AlertTriangle}
              isDark={isDark}
            />
          </CaseStudySection>

          {/* What I Learned */}
          <CaseStudySection title="What I Learned" isDark={isDark}>
            <CaseStudyList
              items={project.learnings}
              icon={Lightbulb}
              isDark={isDark}
            />
          </CaseStudySection>

          {/* Future Improvements */}
          <CaseStudySection title="Future Improvements" isDark={isDark}>
            <CaseStudyList
              items={project.futureImprovements}
              icon={Rocket}
              isDark={isDark}
            />
          </CaseStudySection>

          {/* Image Gallery */}
          <CaseStudySection title="Image Gallery" isDark={isDark}>
            <ImageGallery
              images={project.images}
              isDark={isDark}
              onImageClick={setSelectedImage}
            />
          </CaseStudySection>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {selectedImage !== null && project.images[selectedImage] && (
        <ImageModal
          image={project.images[selectedImage]}
          images={project.images}
          onClose={() => setSelectedImage(null)}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}

// Case-study page rendered at /projects/:slug.
export default ProjectDetails;
