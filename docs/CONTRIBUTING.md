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

### 1. File Naming & Directory Structure

- **Directory**: `src/content/lyrics/[brand-slug]/[team-slug]/`
- **Filename**: Use the song's original title (e.g., `サンフェーデッド.md`).
- **Slugs**: Slugs must be consistent. If a custom page is created, its filename in `src/pages/` must match the entry ID or be explicitly mapped.

### 2. Frontmatter Schema (Mandatory)

Every song file must include a YAML frontmatter. Missing mandatory fields will cause build failures.

```yaml
---
title: "Song Title"          # [Mandatory] The display title (e.g., "サンフェーデッド")
brand: "Brand Name"          # [Mandatory] Use canonical English IDs for logic (e.g., "gkmas")
team: "Unit Name"           # [Mandatory] Canonical ID (e.g., "shinosawa-hiro")
themeColor: "#9d93ad"        # [Mandatory] Primary theme color (Hex)
cover: "https://url.to/img"  # [Mandatory] URL to the cover art
audio: "https://url.to/mp3"  # [Mandatory] URL to the audio file
layoutType: "experimental"   # [Mandatory] Template type
---
```

**Naming Conventions:**
- **Brand**: Use lowercase kebab-case for slugs (e.g., `shiny-colors`, `gkmas`). Avoid mixing Japanese and English in data fields intended for routing.
- **Team**: Use lowercase kebab-case (e.g., `alstroemeria`, `shinosawa-hiro`).

### 3. Custom Page Mapping (Soul Injection)

When creating a custom `.astro` page for a song (e.g., `src/pages/gkmas/shinosawa-hiro/sunfaded.astro`):
- Ensure the routing logic in `[song].astro` (the fallback) correctly identifies if a custom page exists.
- **Critical**: If the custom page uses an English slug (`sunfaded`) but the Markdown uses a Japanese title (`サンフェーデッド`), you must register this mapping in the site's navigation/routing configuration to avoid 404s.

### 4. Markdown Body Structure

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
