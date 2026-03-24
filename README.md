# ClaudeCode 个人技能库

个人 Claude Code 技能集合，用于增强 AI 辅助编程能力。

## 技能目录结构

```
.
├── .skills/            # 技能主目录（按分类组织）
│   ├── core/           # 核心技能 - 高频使用
│   │   ├── claude-api/
│   │   ├── frontend-design/
│   │   └── skill-creator/
│   ├── document/       # 文档处理
│   │   ├── pdf/
│   │   ├── docx/
│   │   └── xlsx/
│   ├── media/          # 媒体生成
│   │   ├── ai-image-generation/
│   │   ├── videoagent-video-studio/
│   │   └── ffmpeg/
│   ├── testing/        # 测试相关
│   │   ├── mcp-builder/
│   │   └── webapp-testing/
│   └── utility/        # 工具类
│       ├── git-commit/
│       ├── changelog-generator/
│       ├── web-scraping/
│       └── find-skills/
│
└── .claude/skills/     # 符号链接指向 .skills/ (Claude Code 读取)
```

## 技能列表

### Core (核心技能)

| 技能 | 触发场景 | 说明 |
|-----|---------|------|
| `claude-api` | 使用 Anthropic SDK/API | 构建 Claude API 应用，支持多模型路由 |
| `frontend-design` | 构建 Web 界面 | 创建高质量前端界面，避免通用 AI 美学 |
| `skill-creator` | 创建新技能 | 技能开发辅助工具 |

### Document (文档处理)

| 技能 | 触发场景 | 说明 |
|-----|---------|------|
| `pdf` | 处理 PDF 文件 | 读取、合并、拆分、OCR PDF |
| `docx` | 处理 Word 文档 | 创建、编辑 Word 文档 |
| `xlsx` | 处理 Excel 表格 | 创建、编辑 .xlsx/.csv 文件 |

### Media (媒体生成)

| 技能 | 触发场景 | 说明 |
|-----|---------|------|
| `ai-image-generation` | 生成 AI 图像 | FLUX/Gemini/Grok 等 50+ 模型 |
| `videoagent-video-studio` | 生成 AI 视频 | 文本/图像转视频，支持 7+ 后端 |
| `ffmpeg` | 音视频处理 | 格式转换、压缩、音频提取 |

### Testing (测试相关)

| 技能 | 触发场景 | 说明 |
|-----|---------|------|
| `mcp-builder` | 构建 MCP 服务器 | 创建外部服务集成工具 |
| `webapp-testing` | 测试前端功能 | Playwright 自动化测试 |

### Utility (工具类)

| 技能 | 触发场景 | 说明 |
|-----|---------|------|
| `git-commit` | Git 提交代码 | Conventional Commits 规范提交 |
| `changelog-generator` | 生成变更日志 | Git 提交 → 用户友好日志 |
| `web-scraping` | 爬取网页内容 | 级联爬取策略，反爬绕过 |
| `find-skills` | 查找新技能 | 发现并安装社区技能 |

## 使用指南

### 技能触发方式

技能通过以下任一方式触发:

1. **自动触发** - 当检测到相关代码模式时
   - 例：导入 `anthropic` 模块 → 触发 `claude-api` 技能

2. **手动触发** - 通过技能命令
   ```
   /skill <skill-name>
   ```

3. **上下文触发** - 用户请求中提及相关功能
   - 例："生成一张图片" → 触发 `ai-image-generation`

### 技能使用示例

**AI 图像生成**:
```bash
# 使用 FLUX 生成图片
infsh app run falai/flux-dev-lora --input '{"prompt": "a cat astronaut"}'
```

**AI 视频生成**:
```bash
# 文本转视频
node tools/generate.js --mode text-to-video --prompt "cat walking in rain" --duration 5
```

**Git 提交**:
```bash
# 自动分析变更并生成规范提交
git commit -m "feat: add user authentication"
```

## 环境配置

### 必需配置

| 变量 | 说明 |
|-----|------|
| `INFERENCE_SH_TOKEN` | inference.sh API Token (图像/视频生成) |

### 可选配置

| 变量 | 说明 |
|-----|------|
| `VIDEO_STUDIO_PROXY_URL` | 视频代理 URL |
| `VIDEO_STUDIO_TOKEN` | 视频代理 Token |

## 添加新技能

1. 在 `.claude/skills/` 或 `.agents/skills/` 创建技能目录
2. 添加 `SKILL.md` 定义技能元数据和指南
3. (可选) 添加 `references/` 和 `tools/` 子目录

技能模板结构:
```markdown
---
name: skill-name
description: 技能描述
tags: [tag1, tag2]
---

# Skill Name

## 使用场景
## 快速开始
## 示例
```

## 技能管理

### 查看已安装技能
```bash
# 列出所有技能
find . -name "SKILL.md" -exec dirname {} \;
```

### 技能更新
```bash
# 拉取最新技能 (如从远程仓库)
git pull origin main
```

## 项目状态

- ✅ 核心文档技能已配置 (PDF/DOCX/XLSX)
- ✅ 媒体生成技能已配置 (图片/视频)
- ✅ 开发辅助技能已配置 (Git/MCP/Testing)
- 🔄 持续添加新技能...

## License

各技能使用独立的许可条款，详见各技能目录下的 `LICENSE.txt` 或 `SKILL.md`。
