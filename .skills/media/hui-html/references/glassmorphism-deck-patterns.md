# HUI HTML — Glass Deck Patterns

Use with `hui-html`.

## Page shell

```html
<body class="min-h-screen text-slate-800 antialiased">
  <div class="flex min-h-screen flex-col gap-4 p-4 lg:flex-row lg:gap-6 lg:p-6">
    <!-- aside: brand + overview + card contents + bottom progress/control -->
    <!-- main data-deck-main: overflow-hidden -->
    <!--   #deck-global-chrome -->
    <!--   #deck-viewport (relative) + absolute stacked slides -->
  </div>
</body>
```

## Left contents cards

- One card per slide with:
  - index/title
  - one-line summary
- Required attributes:
  - `data-deck-nav-item`
  - `data-deck-index="0...n-1"`
- Hover behavior:
  - collapsed by default
  - expand + `overflow-y-auto` on hover

## Right viewport stacking

- Container: `#deck-viewport` (`relative min-h-0 flex-1`)
- Slide: `section[data-deck-slide]` (`absolute inset-0`)
- Active slide: visible + top z-index
- Inactive slide: hidden, no pointer events

## Required controls

- Palette button: cycle predefined themes (all related UI colors sync)
- Fullscreen toggle: enter/exit fullscreen, icon + label sync
- Prev/next arrows: call `show(current ± 1)` with bounds

## 3D transition baseline

- Use **enter-only** classes on slides:
  - `slide-enter-left/right`
  - `slide-active`
- Recommended: CSS keyframe-driven enter animation (short, smooth, low-angle)
- Add perspective on viewport
- Keep reduced-motion fallback
- Avoid JS exit timers for old slide under rapid clicking (common source of flicker/white frame)

## show(index) checklist

- Clamp index to `[0, total-1]`
- First normalize all slides to deterministic base state (hidden/visible + class cleanup)
- Toggle slide visibility/z state
- Update active nav card styles
- Scroll nav container to active card
- Update progress text/bar
- Reset active slide `scrollTop`
- Trigger reveal-in for active slide
- Apply enter class to new slide only, then clear class after animation end/window
