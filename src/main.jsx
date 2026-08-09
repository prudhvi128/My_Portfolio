// ======================================================
// File: src/main.jsx
// Purpose: Application entry point — mounts <App /> into the
//          DOM and loads global styles.
// Why it exists: Vite loads this module from index.html.
// Used In:
//   - index.html (via <script type="module" src="/src/main.jsx">)
// Responsibilities:
//   - Renders the app inside React.StrictMode.
//   - Imports the global Tailwind stylesheet.
// ======================================================
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Client-side routing (enables /projects/:slug pages)
import { BrowserRouter } from "react-router-dom";
// Global Tailwind styles (all utility classes originate here)
import "./styles/globals.css";

// Root application component
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
