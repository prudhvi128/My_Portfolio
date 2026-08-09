// ======================================================
// File: src/components/ImageModal.jsx
// Purpose: Fullscreen image viewer shown when a gallery image
//          is clicked.
// Why it exists: Every project's gallery opens the same
//                fullscreen viewer.
// Used In:
//   - src/pages/ProjectDetails.jsx
// Responsibilities:
//   - Shows the selected image centered on a blurred backdrop.
//   - Handles ESC, click-outside, and X button to close.
//   - Supports Prev / Next + arrow keys for multiple images.
//   - Locks body scrolling while open and restores it on close.
// ======================================================

import { useEffect, useRef } from "react";

// Modal icons (lucide-react)
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function ImageModal({ image, images, onClose, onPrev, onNext }) {
  const hasMultiple = images.length > 1;

  const dialogRef = useRef(null);

  // ESC Key Handler + body scroll lock while the modal is open
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (hasMultiple && event.key === "ArrowLeft") onPrev();
      if (hasMultiple && event.key === "ArrowRight") onNext();
    };

    // Disable body scrolling while the modal is open
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Restore body scrolling after closing
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext, hasMultiple]);

  // Move focus into the modal for keyboard users
  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  return (
    // Fullscreen Modal
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md animate-[fadeIn_0.25s_ease]"
      role="dialog"
      aria-modal="true"
      aria-label={`${image.alt} — fullscreen view`}
      onClick={onClose}
    >
      {/* Close (X) */}
      <button
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous Image */}
      {hasMultiple && (
        <button
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-1/2 hover:scale-105 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Image */}
      {hasMultiple && (
        <button
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-1/2 hover:scale-105 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="max-w-full max-h-full outline-none"
      >
        {/* key forces a fresh entrance animation when navigating */}
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl animate-[zoomIn_0.3s_ease-out]"
        />
      </div>
    </div>
  );
}

// Reusable fullscreen image viewer (used by the project page).
export default ImageModal;
