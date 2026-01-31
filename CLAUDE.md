# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Alchemy RSS 是一个数据聚合平台，从 RSS 源（主要是 BestBlogs.dev）抓取内容，通过 API 获取 AI 摘要和元数据，归档为静态 JSON 文件，并通过现代化阅读器界面展示。

## Development Commands

### Frontend (site/)
```bash
cd site
pnpm install          # 安装依赖
pnpm dev              # 开发服务器
pnpm generate         # 生成静态站点
pnpm preview          # 预览构建结果
```

### Crawler (server/)
```bash
cd server
pnpm install          # 安装依赖
pnpm run once         # 单次运行爬虫
```

### Root Level
```bash
pnpm run build        # 构建前端 (cd site && npx nuxi generate)
```

## Architecture

### Tech Stack
- **Frontend**: Nuxt 4 + Vue 3 + Tailwind CSS 4 + TypeScript
- **Crawler**: Node.js + rss-parser + BestBlogs API
- **Deployment**: Vercel (静态站点 + Serverless Functions) + GitHub Actions (每2小时定时抓取)

### Directory Structure
```
├── api/              # Vercel Serverless Functions (legacy reader)
├── data/             # 核心数据 (links.json, rss.json, tags.json)
├── server/           # 爬虫后端
│   ├── update.js     # 主爬虫编排
│   ├── fetch.js      # RSS 抓取 (API优先策略)
│   ├── archiver.js   # 内容归档 (BestBlogs API)
│   └── writemd.js    # Markdown 生成
├── site/             # Nuxt 4 前端
│   ├── app/
│   │   ├── app.vue           # 主布局
│   │   ├── components/       # ArticleCard, ReaderPanel, SourceGrid
│   │   └── composables/      # useArticles, useReadingSettings
│   └── server/
│       ├── api/              # articles.get.ts, reader.get.ts
│       └── routes/           # 数据代理路由
└── templates/        # Underscore.js 模板 (README, TAGS, DETAILS)
```

### Key Data Flow
1. **爬虫**: `server/once.js` → `update.js` → `fetch.js` + `archiver.js`
2. **归档**: 文章存储在 `data/articles/YYYY/MM/{id}.json`，索引在 `data/links.json`
3. **前端**: `useArticles.ts` 获取数据 → `ArticleCard.vue` 展示 → `ReaderPanel.vue` 阅读

### Crawler Strategy (API-First Hybrid)
爬虫按优先级尝试多种获取方式：
1. BestBlogs API (直接 ID 查询)
2. BestBlogs API (搜索回退)
3. 标准 RSS Parser
4. Regex 抓取 (Next.js 静态内容)
5. Mozilla Readability (jsdom)

## Environment Variables

- `BESTBLOGS_API_KEY` - BestBlogs API 密钥 (爬虫必需)
- `GITHUB_TOKEN` - GitHub API 访问令牌
- `WORKFLOW` - CI 模式标志 (禁用日志和自动提交)

## Important Patterns

- **静态归档**: 所有内容归档为 JSON，无需数据库，支持 CDN 分发
- **全局状态**: `useReadingSettings.ts` 在模块级别定义 reactive refs 实现全局状态
- **主题系统**: 阅读器主题 (white, sepia, parchment, night) 通过 CSS 变量动态切换
- **分页**: 客户端分页 (40条/页)，通过 "加载更多" 按钮触发
