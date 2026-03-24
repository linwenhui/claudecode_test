---
name: claude-api
description: Build apps with the Claude API or Anthropic SDK. TRIGGER when: code imports `anthropic`/`@anthropic-ai/sdk`/`claude_agent_sdk`, or user asks to use Claude API, Anthropic SDKs, or Agent SDK. DO NOT TRIGGER when: code imports `openai`/other AI SDK, general programming, or ML/data-science tasks.
license: Complete terms in LICENSE.txt
---

# Building LLM Applications with Claude

## Defaults

- **Model**: Use `claude-opus-4-6` unless user specifies otherwise
- **Thinking**: Use `thinking: {type: "adaptive"}` for complex tasks
- **Streaming**: Default to streaming for long inputs/outputs to prevent timeouts

## Which Surface to Use

| Use Case | Tier | Recommended Surface |
|----------|------|---------------------|
| Classification, summarization, extraction | Single call | **Claude API** |
| Multi-step pipelines | Workflow | **Claude API + tool use** |
| Custom agent with your tools | Agent | **Claude API agentic loop** |
| Agent with file/web/terminal access | Agent | **Agent SDK** |

## Architecture

Everything routes through `POST /v1/messages`:
- Tools and structured outputs are features of this endpoint
- User-defined tools use decorators (Python/TypeScript) or Zod schemas
- Server-side tools run on Anthropic's infrastructure

## Current Models

| Model | Model ID | Context | Input $/1M | Output $/1M |
|-------|----------|---------|------------|-------------|
| Claude Opus 4.6 | `claude-opus-4-6` | 200K | $5.00 | $25.00 |
| Claude Sonnet 4.6 | `claude-sonnet-4-6` | 200K | $3.00 | $15.00 |
| Claude Haiku 4.5 | `claude-haiku-4-5` | 200K | $1.00 | $5.00 |

## Language Detection

Detect project language from files:
- `.py`, `requirements.txt` → Python
- `.ts`, `package.json` → TypeScript
- `.java`, `pom.xml` → Java
- `.go`, `go.mod` → Go
- `.rb`, `Gemfile` → Ruby

## Thinking & Effort

- **Adaptive thinking**: Use `thinking: {type: "adaptive"}` - no `budget_tokens` needed
- **Effort**: Control via `output_config: {effort: "low"|"medium"|"high"|"max"}`
- Default is `high`; use `low` for subagents, `max` for deep reasoning

## Reading Guide

After detecting language:
1. Read language-specific `README.md` first
2. Consult `shared/tool-use-concepts.md` for function calling
3. Reference streaming/batches/files docs as needed
