---
name: docx
description: Handle Word document (.docx) creation, editing, and analysis. Use this skill when the user needs to create, modify, or extract content from Word documents.
license: Proprietary. LICENSE.txt has complete terms
---

# DOCX Document Guide

## Overview

Work with `.docx` files (ZIP archives containing XML) for creating and editing Word documents.

## Creating Documents

### docx-js (TypeScript)

```typescript
import { Document, Packer, Paragraph, TextRun, Table, WidthType } from "docx";

const doc = new Document({
    sections: [{
        properties: {
            page: {
                size: {
                    orientation: "portrait",
                    width: 12240,  // US Letter width in DXA
                    height: 15840, // US Letter height in DXA
                },
            },
        },
        children: [
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Hello World",
                        bold: true,
                    }),
                ],
            }),
        ],
    }],
});

await Packer.toBuffer(doc, "output.docx");
```

### python-docx (Python)

```python
from docx import Document
from docx.shared import Inches, Pt

doc = Document()
doc.add_heading('Document Title', 0)
doc.add_paragraph('A plain paragraph.')
doc.add_heading('Heading 1', level=1)

# Add table
table = doc.add_table(rows=3, cols=3)
cell = table.cell(0, 0)
cell.text = 'Cell content'

doc.save('output.docx')
```

## Critical Requirements

### Page Sizing
- Always set explicit dimensions
- US Letter: 12,240 × 15,840 DXA units
- Library defaults to A4

### Table Widths
- Use DXA units with `WidthType.DXA`
- Never percentages (Google Docs compatibility)

### Bullet Lists
- Use `LevelFormat.BULLET` with numbering
- Never insert unicode characters manually

### Images
- `type` parameter is mandatory (png, jpg, etc.)

### Smart Quotes
- Use XML entities: `&#x2019;` for professional typography

## Editing Existing Documents

1. Unpack XML from `.docx`
2. Edit content
3. Repack to `.docx`

## Tracking Changes

```xml
<!-- Insertion -->
<w:ins w:author="Claude">New text</w:ins>

<!-- Deletion -->
<w:del w:author="Claude">Deleted text</w:del>
```

Use "Claude" as author unless specified otherwise.

## Best Tools

| Language | Library |
|----------|---------|
| TypeScript | docx-js |
| Python | python-docx |
| CLI | pandoc |
