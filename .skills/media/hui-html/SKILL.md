---
name: hui-html
description: Build HUI-style glassmorphism PPT webpages with HTML and Tailwind — single-screen deck, left card-contents rail, global controls, theme switching, 3D slide transitions, and fullscreen support.
---

# HUI HTML (Glass Deck)

Build **light, glass-style** presentation pages following this skill, `references/glassmorphism-deck-patterns.md`, and the visual style contract in `references/index.html`.

## Default Style Baseline (must keep)

- **Single-screen deck**: right area only shows one slide at a time (`#deck-viewport` + stacked `section[data-deck-slide]`)
- **Global top controls**: one shared strip with theme indicator, prev/next arrows, fullscreen toggle
- **Left contents as cards**: title + one-line summary per slide card, click to jump, active card highlighted
- **Hover-to-expand contents**: contents panel expands on hover and supports vertical scrolling for later cards
- **Theme switcher**: click palette icon to cycle color themes (update gradient/background/progress/nav highlight together)
- **Stable 3D page transition**: arrow/key navigation uses **new-slide enter keyframe only** (no old-slide async exit queue) to avoid flicker/white flash under rapid clicks
- **Progress at bottom rail**: progress + CONTROL/STYLE grouped at sidebar bottom
- **Style/Icon parity with reference**: visual style and control icon language must match `references/index.html` (do not replace with alternative emoji/icon set)
- **No right-side scrollbar**: right main/viewport must stay single-screen without visible vertical scrollbar in normal desktop presentation mode

## When to Use

- User wants “HTML + Tailwind PPT 风格网页”, “玻璃态演示页”, “单屏切页网页”
- Need a static/shareable deck-like web page with strong visual rhythm
- Need quick multi-theme switching without build tooling

## Layout Contract

1. **Left sidebar** (`~25%`):
   - Brand, overview, contents cards
   - Bottom group: learning progress + control/style notes
2. **Right main** (`~75%`):
   - Global chrome at top (only one set of arrows/toggles)
   - Slide viewport below (`relative` container + absolute stacked slides)
3. **No inter-slide scroll in main column**:
   - Slide switching must be controlled by `show(index)` only
   - Do not allow visible right-side scrollbar; split/condense content to keep each slide within one screen

## Interaction Contract

- `data-deck-nav-item` + `data-deck-index` map strictly to slide index
- `show(index)` updates:
  - slide visibility/z-index (synchronous normalization for all slides first)
  - nav active style
  - progress text and bar
  - reveal animations
  - nav auto-scroll to active card
- Prev/next disabled at bounds
- Keyboard supports Left/Right + PageUp/PageDown
- Avoid Space key takeover

## Implementation Rules

- Tailwind utility-first, minimal custom CSS
- Use `references/index.html` as the default visual/style baseline (spacing rhythm, glass layering, control chrome, theme token behavior, and nav-card treatment)
- Keep icons/components style-consistent with `references/index.html` (prefer same SVG icon family and sizing)
- Keep accessibility labels on control buttons (`aria-label`, `title`)
- Support `prefers-reduced-motion` fallback for transition-heavy effects
- Keep pastel/light background and high text contrast
- For 3D transitions, prefer CSS keyframes (`slide-enter-left/right`) over JS `requestAnimationFrame + timeout` chains

## Workflow

1. Confirm slide count and one-line summary per slide
2. Build left rail cards first (with `data-deck-index`)
3. Build right viewport and `show(index)` logic
4. Add theme tokens + switcher + fullscreen
5. Align overall style details against `references/index.html` (glass hierarchy, card sizing rhythm, chrome/button tone, progress block treatment)
6. Verify icon set parity with `references/index.html` and remove emoji/icon substitutions
7. Verify no visible right-side scrollbar at target desktop viewport (if overflow appears, shorten/split content)
8. Verify nav/arrow/key sync and active card scroll alignment
9. Stress-test rapid prev/next clicks (no opacity residue, no white frame, no stuck state)

## Starter Reference

- Copy patterns from: [references/glassmorphism-deck-patterns.md](references/glassmorphism-deck-patterns.md)
- Follow the style language from: [references/index.html](references/index.html) as the primary look-and-feel baseline
