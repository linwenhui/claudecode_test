---
name: slidev
description: Create and present web-based slide decks using Slidev with Markdown, Vue components, code highlighting, animations, and export options. Use when building technical presentations, code walkthroughs, teaching materials, or developer-focused PPT content.
---

# Slidev

Use Slidev to build developer-friendly presentations with Markdown-first authoring.

## When to Use

- Build technical PPT/decks from Markdown
- Present code snippets with syntax highlighting and animations
- Create teaching slides with diagrams or equations
- Export decks to PDF/PPTX/PNG for sharing

## Quick Start

```bash
pnpm create slidev
pnpm run dev
pnpm run build
pnpm run export
```

## Common Notes

- Default local preview is usually `http://localhost:3030`
- Export may require `playwright-chromium`:

```bash
pnpm add -D playwright-chromium
```

## References

- Docs: https://sli.dev
- Themes: https://sli.dev/resources/theme-gallery
- Showcases: https://sli.dev/resources/showcases
