# src/styles

Global CSS for the application.

## Purpose

App-wide styles that aren't component-specific. Tailwind v4 is wired in
through the CSS `@import` here.

## Files

| File | Purpose | Used by |
| --- | --- | --- |
| `globals.css` | Imports Tailwind CSS and adds base styles (smooth scrolling). | `src/main.jsx` |

## When to add files here

Add global CSS here: Tailwind `@theme` configuration, base resets,
keyframes, custom fonts, etc. Prefer Tailwind utility classes in JSX
over writing custom CSS in this file.
