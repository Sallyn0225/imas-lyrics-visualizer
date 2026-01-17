# Responsive-First Technical Standards

This guide establishes the mandatory technical standards for ensuring that the "One Song, One Style" visual experience remains flawless across all devices, particularly mobile.

## 🔍 Identified Technical Pitfalls

Recent layout issues have highlighted four core areas of failure:

1.  **Viewport Metadata Omission**: While the `BaseLayout` provides a standard viewport tag, manual overrides or missing tags in custom components can lead to incorrect initial scaling.
2.  **Typography Overshoot**: Fixed-size typography (e.g., `text-9xl`) or excessive relative units (e.g., `20vw`) that do not account for mobile screen width, leading to horizontal overflow.
3.  **Overflow Escapes**: Decorative elements using `absolute` or `fixed` positioning (watermarks, light flares, animated text) that lack `overflow-x-hidden` constraints on their parent containers.
4.  **Global Constraint Gaps**: Insufficient defensive styling on the `html` and `body` levels, allowing runaway elements to trigger horizontal scrolling.

## 🛠️ Mandatory Standards

### 1. Viewport & Root Constraints
- All pages **must** utilize the `BaseLayout` or include `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`.
- The root `body` and main container **must** enforce `overflow-x: hidden`.

### 2. Responsive Typography
- **No Fixed Giants**: Avoid using static classes like `text-9xl` for critical content on mobile.
- **Fluid Scaling**: Prefer Tailwind's responsive prefixes (e.g., `text-4xl md:text-7xl`) or the `clamp()` function for heading sizes.
- **Word Wrapping**: Ensure `break-words` or `overflow-wrap: anywhere` is applied to large titles that might contain long Japanese strings or English technical terms.

### 3. Decorative Element Containment
- Any container hosting `absolute` or `fixed` positioned background elements **must** have `overflow-hidden`.
- Watermark text should use `select-none` and `pointer-events-none` to avoid interfering with mobile touch interactions.

### 4. Layout Safety with ViewTransitions
- Ensure that elements with `transition:name` have consistent aspect ratios or are contained within wrappers that prevent layout shifts during the transition.
- Verify that mobile navigation remains functional after a transition (re-run initialization scripts if necessary via `astro:page-load`).

## ✅ Mobile Compatibility Checklist

*Must be completed by the **Frontend UI/UX Engineer** for every new custom page:*

- [ ] **Boundary Check**: Page does not exceed `100vw` at any scroll depth.
- [ ] **Typography Wrap**: All titles and lyrics wrap correctly on a 360px wide screen.
- [ ] **Touch Targets**: Interactive elements (Audio Player, Navigation) are easily tappable (min 44x44px).
- [ ] **Overflow Audit**: All large background VFX are wrapped in `overflow-hidden` containers.
- [ ] **Performance Check**: CSS animations do not cause frame drops on mobile browsers.

---
*Maintained by the Sisyphus Architecture Team | Last Updated: 2026-01-17*
