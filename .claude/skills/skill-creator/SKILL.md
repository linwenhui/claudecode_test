# Skill Creator

**Description**: A system for developing, testing, and refining Claude skills through iterative improvement cycles. Use this skill when you need to create new skills, improve existing skills, or run skill evaluations.

## Core Workflow

### 1. Capture Intent
- Understand what the skill should do
- Identify when it should trigger
- Define expected outputs
- Determine if test cases are needed

### 2. Interview & Research
- Ask about edge cases
- Clarify input/output formats
- Define success criteria

### 3. Write SKILL.md
Create a skill file with:
- **Name**: Lowercase identifier (e.g., `my-skill`)
- **Description**: What it does and when to use it (1-2 sentences)
- **Instructions**: Clear markdown instructions for Claude

Keep SKILL.md under ~500 lines. Bundle repetitive patterns in `scripts/`.

### 4. Test & Evaluate
Run test cases:
- Spawn with-skill and baseline runs in parallel
- Grade outputs using objective criteria
- Collect quantitative metrics (pass rates, timing, tokens)

### 5. Improve
- Review user feedback
- Analyze benchmark data
- Revise instructions
- Look for patterns across test runs

### 6. Optimize Description
- Refine the description field for better triggering accuracy
- Test with diverse eval queries

## Key Principles

**Progressive Disclosure**: Keep SKILL.md concise. Reference external docs in `references/` and assets in `assets/`.

**Theory of Mind**: Explain *why* each instruction matters so models can generalize beyond test cases. Avoid rigid MUST/ALWAYS directives.

**Generalization**: Avoid overfitting to narrow examples. Bundle repeated patterns that appear across multiple test runs.

## Usage

To use this skill:
1. `/skill skill-creator` or mention "use skill-creator"
2. Describe the skill you want to create
3. Follow the iterative workflow above

## Files Structure

```
skill-creator/
├── SKILL.md          # This file - skill definition
├── agents/           # Agent implementations
├── assets/           # Static assets
├── eval-viewer/      # Evaluation viewer
├── references/       # Reference docs
└── scripts/          # Utility scripts
```
