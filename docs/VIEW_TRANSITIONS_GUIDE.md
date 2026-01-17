# View Transitions Scripting Guide | 视图转场脚本开发指南

This guide defines the mandatory standards for handling JavaScript in Astro components when **View Transitions** are enabled. Following these rules ensures that interactive elements (like audio players and scroll animations) continue to function correctly after navigation.

## 1. The Core Problem: Persistent Scripts vs. New DOM

When View Transitions are active, the browser does not perform a full page reload. Instead:
1. The script runs **once** when the site is first loaded.
2. Subsequent navigations replace the `<body>` but **do not** re-execute the `<script>` tags (unless they are marked with `is:inline`).
3. **Variables defined in the top-level scope of a script persist**, but the DOM elements they refer to are destroyed and replaced.

**Result:** If you store a button in a top-level `const`, it will point to an "orphaned" element that is no longer on the screen after you navigate away and come back.

---

## 2. Mandatory Rules

### Rule A: Always use `astro:page-load`
All initialization logic (event listeners, library setups, observers) **MUST** be wrapped in the `astro:page-load` event. This event fires on the initial page load and after every navigation.

### Rule B: No Top-Level DOM Selectors
Never define DOM references at the top level of your script. All `document.getElementById` or `document.querySelector` calls must happen **inside** the initialization function called by `astro:page-load`.

---

## 3. Implementation Patterns

### ❌ The Wrong Way (Bug-prone)
In this example, `audio` and `btn` become "dead" references after navigation.

```javascript
<script>
  // WRONG: Defined at top-level. 
  // After navigation, these refer to elements that no longer exist.
  const audio = document.getElementById('audio-element');
  const btn = document.getElementById('play-btn');

  btn.addEventListener('click', () => audio.play());
</script>
```

### ✅ The Right Way (Standard)
Encapsulate everything in a function and trigger it via the life-cycle event.

```javascript
<script>
  function initPlayer() {
    // Correct: Selectors are inside the function called on every page load
    const audio = document.getElementById('audio-element');
    const btn = document.getElementById('play-btn');

    if (btn && audio) {
      btn.addEventListener('click', () => {
        if (audio.paused) audio.play();
        else audio.pause();
      });
    }
  }

  // Mandatory event wrapper
  document.addEventListener('astro:page-load', () => {
    initPlayer();
  });
</script>
```

---

## 4. Case Study: Audio Player & Intersection Observer

In our project, the `spread_the_wings.astro` custom page recently suffered from this issue. Here is the corrected pattern used for both the player and the scroll animations:

```javascript
<script>
  // 1. Keep the observer definition outside (it doesn't hold DOM refs)
  const observer = new IntersectionObserver((entries) => {
    // ... animation logic ...
  });

  function initAnimations() {
    // 2. Re-apply observation to NEW elements on every page load
    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });
  }

  function initPlayer() {
    const audio = document.getElementById('audio-element');
    // ... player logic ...
  }

  // 3. Orchestrate everything
  document.addEventListener('astro:page-load', () => {
    initAnimations();
    initPlayer();
  });
</script>
```

## 5. Summary Checklist
- [ ] Is my code wrapped in `document.addEventListener('astro:page-load', ...)`?
- [ ] Did I move all `document.querySelector` calls inside the initialization function?
- [ ] If I'm using an `IntersectionObserver`, do I re-observe elements on every `astro:page-load`?
- [ ] Have I tested "Back" and "Forward" navigation in the browser to ensure interactivity persists?
