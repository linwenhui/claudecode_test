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
│   ├── utility/        # 工具类
│   │   ├── git-commit/
│   │   ├── changelog-generator/
│   │   ├── web-scraping/
│   │   ├── find-skills/
│   │   ├── browser/
│   │   ├── video-processor/
│   │   ├── docx-format-replicator/
│   │   └── release-skills/
│   ├── baoyu/          # 宝玉技能
│   │   ├── baoyu-compress-image/
│   │   ├── baoyu-format-markdown/
│   │   ├── baoyu-markdown-to-html/
│   │   ├── baoyu-translate/
│   │   ├── baoyu-url-to-markdown/
│   │   ├── baoyu-youtube-transcript/
│   │   └── baoyu-danger-*/
│   └── social/         # 社交媒体发布
│       ├── baoyu-post-to-wechat/
│       ├── baoyu-post-to-weibo/
│       ├── baoyu-post-to-x/
│       └── wechat-article-writer/
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
| `browser` | 浏览器自动化 | Chrome CDP 浏览器控制、截图、DOM 提取 |
| `video-processor` | 音视频处理 | YouTube 下载、格式转换、Whisper 转录 |
| `docx-format-replicator` | Word 格式复制 | 提取 Word 格式并生成新文档 |
| `release-skills` | 项目发布 | 自动检测版本、生成多语言 changelog |

### BaoYu Skills (宝玉技能)

| 技能 | 触发场景 | 说明 |
|-----|---------|------|
| `baoyu-compress-image` | 压缩图片 | 图片压缩为 WebP/PNG，自动选择最佳工具 |
| `baoyu-format-markdown` | 格式化 Markdown | 添加 frontmatter、标题、摘要、排版优化 |
| `baoyu-markdown-to-html` | Markdown 转 HTML | 转为带样式的 HTML，支持微信外链转底部引用 |
| `baoyu-translate` | 翻译文章 | 快速/普通/精细三种翻译模式，支持术语表 |
| `baoyu-url-to-markdown` | URL 转 Markdown | 网页抓取转 Markdown，支持登录后可见内容 |
| `baoyu-youtube-transcript` | YouTube 字幕 | 下载字幕/封面，支持多语言和章节分段 |
| `baoyu-danger-gemini-web` | Gemini 生成 | 文本/图像生成，支持参考图片输入 |
| `baoyu-danger-x-to-markdown` | X 转 Markdown | 推文/文章转 Markdown，需用户同意 |

### Social/Posting (社交媒体发布)

| 技能 | 触发场景 | 说明 |
|-----|---------|------|
| `baoyu-post-to-wechat` | 发布公众号 | 微信公众号文章/图文发布，支持 API 和浏览器 |
| `baoyu-post-to-weibo` | 发布微博 | 微博/头条文章发布，支持 Markdown |
| `baoyu-post-to-x` | 发布 X | X 推文/长文章发布，支持图片/视频 |
| `wechat-article-writer` | 公众号写作 | 资料搜索、文章撰写、爆款标题、排版优化 |

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
