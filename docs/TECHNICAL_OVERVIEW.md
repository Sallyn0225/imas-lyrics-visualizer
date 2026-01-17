# Technical Overview | 技术概览

This document provides a high-level explanation of the core technical logic behind the iDOLM@STER Lyrics Archive.

## 1. Dynamic Routing & Content Collections

The project leverages **Astro Content Collections** to manage song data efficiently.

- **Data Source**: All song data is stored as Markdown files in `src/content/lyrics/`.
- **Schema**: Defined in `src/content.config.ts`, ensuring every song has required metadata like `title`, `brand`, `team`, `themeColor`, `cover`, and `audio`.
- **Dynamic Routes**: The file `src/pages/[brand]/[team]/[song].astro` acts as a universal template.
    - It uses `getStaticPaths()` to fetch all entries from the `lyrics` collection.
    - It generates slugs for `brand`, `team`, and `song` to create clean URLs (e.g., `/shiny-colors/alstroemeria/anniversary`).

## 2. "One Song, One Style" Implementation

While all songs share a single Astro component for rendering, the visual appearance is highly dynamic:

- **Theme Colors**: Each song defines a `themeColor` in its frontmatter. This color is passed to CSS variables and used for:
    - Background gradients and glowing orbs.
    - Audio player accents.
    - Progress bars and text highlights.
- **Lyrics Parsing**: A custom parser (`src/utils/lyrics-parser.ts`) processes the Markdown body into structured sections (e.g., `intro`, `chorus`, `split-view`).
- **Conditional Rendering**: The template checks for different section types and applies specific layouts (e.g., `chorus` gets a sticky background title, `split-view` creates a side-by-side layout).

## 3. Visual Effects (VFX)

### Keyword Highlighting
The `enhanceText` function in the template scans lyrics for specific keywords (defined in an array) and wraps them in spans with specialized CSS classes (e.g., `.kw-dream`, `.kw-love`). These classes trigger CSS animations and glow effects.

### Scroll-Driven Animations
We use the **Intersection Observer API** to detect when lyric lines or sections enter the viewport.
- Classes like `.reveal-text`, `.reveal-slide`, and `.reveal-blur` are applied by default.
- When an element becomes visible, the `.visible` class is added, triggering smooth CSS transitions.

## 4. Search Functionality

Search is powered by **Pagefind**, a static search library.
- **Indexing**: During the build process (`npm run build`), Pagefind scans the generated HTML files.
- **Client-side Search**: The `Search.astro` component provides a lightweight UI that queries the pre-built index, allowing for near-instant results without a backend.

## 5. View Transitions

Astro's built-in **View Transitions** are used to provide a seamless SPA-like feel. The album cover, for instance, uses a transition name to "fly" between the list view and the detail view, maintaining visual continuity.

> [!IMPORTANT]
> Since View Transitions do not perform a full page reload, all client-side JavaScript must be handled carefully to avoid "orphaned" DOM references. See **[View Transitions Scripting Guide](./VIEW_TRANSITIONS_GUIDE.md)** for mandatory implementation standards.
