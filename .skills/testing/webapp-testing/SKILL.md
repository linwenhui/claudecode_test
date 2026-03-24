---
name: webapp-testing
description: Automate testing of local web applications using Playwright with Python. Use this skill when you need to test frontend functionality, debug UI behavior, capture screenshots, or view browser logs.
license: Complete terms in LICENSE.txt
---

# Web Application Testing Toolkit

## Overview

Automated testing of local web applications using Playwright with Python.

## Workflow

### 1. Reconnaissance First

1. Navigate to the application
2. Wait for network to become idle (`networkidle`)
3. Take a screenshot to inspect the current state
4. Discover selectors from the rendered page

### 2. Testing Pattern

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()

    # Navigate and wait for network idle
    page.goto("http://localhost:3000", wait_until="networkidle")

    # Take screenshot
    page.screenshot(path="screenshot.png")

    # Interact with elements
    page.click("#submit-button")
    page.fill("#username", "test")

    # Capture console logs
    logs = []
    page.on("console", lambda msg: logs.append(msg.text))

    browser.close()
```

### 3. Best Practices

- **Always** wait for `networkidle` before inspecting DOM
- Use `--help` flag with helper scripts first
- Treat helper scripts as black boxes
- Capture screenshots for debugging
- Monitor browser console logs

### Common Selectors

```python
# By ID
page.click("#submit-btn")

# By CSS class
page.click(".btn-primary")

# By text content
page.click("text=Submit")

# By role
page.click("role=button[name='Submit']")
```

## Tools

- **Playwright**: Browser automation library
- **python-docx**: Document manipulation
- **Scripts**: Helper utilities for server management
