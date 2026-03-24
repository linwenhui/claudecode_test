---
name: mcp-builder
description: Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK).
license: Complete terms in LICENSE.txt
---

# MCP Server Development Guide

## Overview

Create MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools.

## Process

### Phase 1: Research & Planning

1. **Study MCP Protocol Documentation**
   - Review MCP specification and architecture
   - Understand transport mechanisms (streamable HTTP, stdio)

2. **Recommended Stack**
   - **Language**: TypeScript (best SDK support)
   - **Transport**: Streamable HTTP for remote, stdio for local

3. **Plan Implementation**
   - Review service API documentation
   - List endpoints to implement
   - Design tool naming conventions

### Phase 2: Implementation

#### Project Structure
```typescript
// TypeScript example
import { McpServer } from "@modelcontextprotocol/sdk";

const server = new McpServer({
  name: "my-server",
  version: "1.0.0",
});
```

#### Tool Design
- Use Zod for input schemas
- Include clear descriptions
- Add annotations: `readOnlyHint`, `destructiveHint`, `idempotentHint`

### Phase 3: Review & Test

- Verify code quality and type coverage
- Test with MCP Inspector: `npx @modelcontextprotocol/inspector`

### Phase 4: Create Evaluations

Create 10 complex, realistic test questions to verify LLMs can use your server effectively.

## Key Principles

- **Comprehensive API coverage** - Balance endpoint coverage with workflow tools
- **Clear tool naming** - Use consistent prefixes (e.g., `github_create_issue`)
- **Actionable error messages** - Guide users toward solutions
- **Proper pagination** - Support filtering and result limits
