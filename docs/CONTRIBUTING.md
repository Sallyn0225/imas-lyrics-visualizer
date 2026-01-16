# Contributing Guide

Thank you for your interest in contributing to the **iDOLM@STER Lyrics Archive**! This guide will help you understand how to add new songs and follow the project's structure.

## 📁 Project Structure for Lyrics

All lyrics are stored as Markdown files in `src/content/lyrics/`. They are organized by brand:
```text
src/content/lyrics/
└── [brand-slug]/
    └── [song-slug].md
```

## 📝 Adding a New Song

To add a new song, create a `.md` file in the appropriate brand folder.

### 1. Frontmatter Schema

Every song file must include a YAML frontmatter at the top:

```yaml
---
title: "Song Title"          # The display title of the song
brand: "Shiny Colors"        # The brand name (e.g., Million Live, Shiny Colors)
team: "Alstroemeria"         # Unit or group name
themeColor: "#ff699e"        # The primary theme color (Hex code)
cover: "https://url.to/img"  # URL to the cover art
audio: "https://url.to/mp3"  # URL to the audio file
layoutType: "alstroemeria"   # The visual template to use
---
```

### 2. Markdown Body Structure

The body of the Markdown file is parsed into sections using `##` headers. This allows for specific visual treatments for different parts of the song.

Available section types:
- `## intro`: Large, thin serif text for the opening.
- `## bridge-thin`: Stylized cursive text for bridges.
- `## chorus`: Bold, large text with a large background title.
- `## chorus-alt`: Variation of the chorus layout.
- `## split-view`: Two-column layout for overlapping or dialogue-like lyrics. Use `---` to separate left and right columns.
- `## vertical-stack`: Large, stacked text for high-impact lines.

#### Example:
```markdown
## intro
First line of intro
Second line of intro

## chorus
Main chorus line 1
Main chorus line 2

## split-view
Left side lyrics
---
Right side lyrics
```

## 🎨 The "layoutType" Concept

The `layoutType` in frontmatter determines which visual template the song uses. 
- Currently, `alstroemeria` is the primary high-end template.
- Future templates (e.g., `strayslight`, `noctchill`) can be added by creating new components and mapping them in `[song].astro`.

## 🛠️ Development Workflow

1. **Add Content**: Create your `.md` file in `src/content/lyrics/`.
2. **Preview**: Run `npm run dev` to see the changes.
3. **Keyword VFX**: Keywords like "夢", "愛", and "笑顔" are automatically enhanced. You can add more in the `keywords` array within `src/pages/[brand]/[team]/[song].astro`.
