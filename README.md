# iDOLM@STER Lyrics Archive

> **"One Song, One Style"** — A high-end, immersive visual storytelling experience for the lyrics of the iDOLM@STER universe.

iDOLM@STER Lyrics Archive is a modern web application built with **Astro 5** and **Tailwind CSS 4**, designed to provide more than just text. Every song is treated as a unique visual performance, featuring custom players, keyword-based VFX, and scroll-driven animations.

## ✨ Core Features

- 🎭 **Immersive Visuals**: Song-specific layouts (`layoutType`) that match the group's aesthetic.
- 🎵 **Custom Audio Player**: A glassmorphic, responsive player integrated with the song's theme color.
- ✨ **Keyword VFX**: Automatic highlighting and special effects for specific lyrical keywords (e.g., "夢", "愛", "光").
- 📜 **Scroll-Driven Animations**: Content reveals and transforms as you scroll, using Intersection Observer and CSS animations.
- 🔍 **Static Search**: Fast, client-side search powered by **Pagefind**, enabling instant discovery across the entire archive.
- 📱 **Responsive Design**: Polished experience across mobile, tablet, and desktop.
- ⚡ **Performance**: Static site generation for near-instant load times and SEO optimization.

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Content Collections, View Transitions)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Search**: [Pagefind](https://pagefind.app/)
- **Fonts**: Google Fonts (Cinzel, Great Vibes, Noto Serif JP)
- **Deployment**: Optimized for static hosting (Vercel, Netlify, Cloudflare Pages)

## 🚀 Quick Start

### Prerequisites
- Node.js (Latest LTS)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/your-repo/idolmaster-lyrics.git

# Install dependencies
npm install
```

### Development
```bash
# Start the dev server
npm run dev
```

### Build & Search Indexing
Since Pagefind indexes static files, you need to build the project to update the search index:
```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

## 📖 Documentation

For detailed guides on how to contribute or add new songs, please refer to:
- [Contributing Guide](./docs/CONTRIBUTING.md) — How to add new lyrics and understand the data structure.

## 📄 License

This project is for educational and fan purposes only. iDOLM@STER is a trademark of BANDAI NAMCO Entertainment Inc.
