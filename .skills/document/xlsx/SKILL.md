---
name: xlsx
description: Handle spreadsheet file creation, editing, and analysis for .xlsx, .xlsm, .csv, and .tsv formats. Use this skill when the user needs to create or modify Excel spreadsheets or CSV files.
license: Complete terms in LICENSE.txt
---

# XLSX Spreadsheet Guide

## Key Requirements

### Professional Standards
- Consistent professional fonts (Arial, Times New Roman)
- Zero formula errors (#REF!, #DIV/0!, #VALUE!)
- Preserve existing template formatting

### Financial Models
- **Color-coded text**:
  - Blue: Inputs
  - Black: Formulas
  - Green: Internal links
  - Red: External links
- Yellow backgrounds for key assumptions
- Years as text; currency in `$#,##0`; percentages at `0.0%`

### Critical Rules
- Use Excel formulas instead of hardcoding calculated values
- All assumptions in separate cells with formula references
- Spreadsheet must remain dynamic

## Tools

### openpyxl (Python)

```python
from openpyxl import Workbook, load_workbook
from openpyxl.styles import Font, Color, PatternFill

# Create workbook
wb = Workbook()
ws = wb.active

# Add formula
ws['C1'] = '=SUM(A1:B1)'

# Style cells
ws['A1'].font = Font(color='0000FF')  # Blue for inputs
ws['C1'].font = Font(color='000000')  # Black for formulas

# Save
wb.save('output.xlsx')
```

### pandas (Python)

```python
import pandas as pd

# Read Excel
df = pd.read_excel('input.xlsx')

# Process data
df['total'] = df['a'] + df['b']

# Write Excel
df.to_excel('output.xlsx', index=False)
```

## Formula Verification

After creating files with formulas, verify no errors:

```python
from openpyxl import load_workbook

wb = load_workbook('output.xlsx')
ws = wb.active

# Check for errors
for row in ws.iter_rows():
    for cell in row:
        if cell.value and str(cell.value).startswith('#'):
            print(f"Error in {cell.coordinate}: {cell.value}")
```

## Best Tools by Task

| Task | Recommended Tool |
|------|------------------|
| Data analysis | pandas |
| Complex formatting | openpyxl |
| Simple CSV | csv module |
