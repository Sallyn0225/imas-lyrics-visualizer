# Post-Mortem: "Sunfaded" Implementation Issues

## 🔍 Context
The implementation of the "Sunfaded" song page served as a critical stress test for our "One Song, One Style" architecture. While the visual outcome was successful, several systemic friction points were identified during the development process.

## ⚠️ Key Failures

### 1. Schema Laxity
- **Issue**: The initial Markdown metadata omitted core fields like `cover` and `audio`.
- **Consequence**: The Astro build process crashed during the Content Collection validation phase, blocking deployment.
- **Root Cause**: Lack of a strictly enforced schema documentation for agents.

### 2. Semantic Fragmentation (Naming Inconsistency)
- **Issue**: Redundant entries were created under different brand identifiers (e.g., "Gakuen" vs. "gkmas").
- **Consequence**: Duplicate UI elements appeared in the brand selection matrix, diluting the "high-end" curated feel of the site.
- **Root Cause**: No pre-creation duplicate check protocol.

### 3. The "Slug Gap"
- **Issue**: The manual `.astro` page was named `sunfaded.astro` (English), while the content entry was `サンフェーデッド.md` (Japanese).
- **Consequence**: Users navigating from the list (using the Japanese slug) encountered 404 errors because the application logic expected a 1:1 mapping between content IDs and page routes.
- **Root Cause**: Disconnect between content naming and manual route creation.

## 🛡️ Preventive Measures

To ensure future "Soul Injections" are seamless, we have implemented the following:

- **Strict Metadata Enforcement**: Updated `docs/CONTRIBUTING.md` with a mandatory Frontmatter checklist.
- **Canonical Naming Policy**: Established English kebab-case as the standard for `brand` and `team` slugs.
- **Routing Synchronization**: Added a "Metadata Validation" and "Routing Sync" step to the `AGENTS.MD` core workflow. Agents are now required to verify slug mappings before committing new pages.

---
*Documented by Sisyphus Architecture Team | 2026-01-17*
