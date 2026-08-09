// ======================================================
// File: src/components/ImageGallery.jsx
// Purpose: Responsive grid of clickable project screenshots.
// Why it exists: The project page's gallery is reused by every
//                project and needs consistent hover behavior.
// Used In:
//   - src/pages/ProjectDetails.jsx
// Responsibilities:
//   - Renders screenshots in a responsive grid.
//   - Applies a zoom-on-hover animation.
//   - Opens the fullscreen viewer when an image is clicked.
// ======================================================

// Shared theme-aware card styling (background, border, shadow)
import { cardStyleShadow } from "../utils/cardStyle";

// Scroll-reveal wrapper (gallery images fade in one by one)
import Reveal from "./Reveal";

function ImageGallery({ images, isDark, onImageClick }) {
  // Responsive columns based on how many screenshots exist
  let gridClass = "grid grid-cols-1 gap-6";
  if (images.length === 1) gridClass += " max-w-2xl mx-auto";
  else if (images.length === 2) gridClass += " sm:grid-cols-2";
  else gridClass += " sm:grid-cols-2 lg:grid-cols-3";

  return (
    // Image Gallery
    <div className={gridClass}>
      {images.map((image, index) => (
        <Reveal key={image.src} variant="up" delay={index * 80}>
          <button
            onClick={() => onImageClick(index)}
            aria-label={`Open ${image.alt} in fullscreen`}
            className={`group relative aspect-video rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-violet-400/60 active:scale-[0.98] ${cardStyleShadow(isDark)}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </button>
        </Reveal>
      ))}
    </div>
  );
}

// Reusable screenshot gallery (used by the project page).
export default ImageGallery;
