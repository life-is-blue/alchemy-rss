# AGENTS.md

本文件为 AI 助手提供该代码库的工作指南。

## 项目概述

Alchemy（数据炼金平台）是一个 RSS 聚合与内容提炼平台，从多个 RSS 源获取文章，进行归档整理，并以精选的 Web 界面展示。

**线上地址:** https://alchemy-rss.vercel.app

## 架构说明

这是一个 monorepo 项目，包含三个主要部分：

### 1. Server (`/server/`)
基于 Node.js 的 RSS 爬虫和内容处理器。

- **入口文件:** `once.js` - 运行单次更新周期
- **核心逻辑:** `update.js` - 协调抓取-处理-归档流程
- **RSS 抓取:** `fetch.js` - 抓取 RSS 源，集成 BestBlogs API
- **内容归档:** `archiver.js` - 通过 BestBlogs API 归档文章
- **Markdown 生成:** `writemd.js` - 生成 README.md、TAGS.md 和详情页
- **Atom 订阅:** `feed.js` - 生成 atom.xml
- **工具函数:** `utils.js` - 共享工具和路径常量

**关键数据文件:**
- `data/rss.json` - RSS 源配置
- `data/links.json` - 已归档文章的元数据
- `data/tags.json` - 用于分类的标签/类别定义
- `data/articles/YYYY/MM/<id>.json` - 归档的文章内容

### 2. Site (`/site/`)
Nuxt 4 + Vue 3 + Tailwind CSS 前端。

- **框架:** Nuxt 4，静态生成 (`nuxt generate`)
- **样式:** Tailwind CSS v4
- **入口:** `app/app.vue`
- **组件:** `app/components/`
- **组合式函数:** `app/composables/`

### 3. API (`/api/`)
用于 Vercel 部署的无服务器函数。

- `reader.js` - 文章内容读取器（BestBlogs API + 降级爬虫）
- `u.js` - URL 短链/跳转服务

## 常用命令

### 根目录
```bash
# 安装站点依赖（用于 Vercel）
npm run vercel-install

# 构建生产版本
npm run build
```

### Server (`cd server/`)
```bash
# 安装依赖
pnpm install

# 运行单次更新（抓取 RSS、归档、生成 markdown）
node once.js
# 或
npm run once
```

**环境变量（在 `/server/` 下创建 `.env` 文件）:**
- `BESTBLOGS_API_KEY` - BestBlogs.dev API 密钥
- `GITHUB_TOKEN` - GitHub token，用于获取仓库元数据
- `RSS_CONFIG` - JSON 字符串，用于覆盖 RSS 配置
- `WORKFLOW` - 在 CI/GitHub Actions 中运行时设为 `true`

### Site (`cd site/`)
```bash
# 安装依赖
pnpm install

# 开发服务器
pnpm dev

# 生产构建
pnpm build

# 静态生成
pnpm generate

# 预览生产构建
pnpm preview
```

## 开发工作流

### 本地开发
1. Server 从 `data/rss.json` 定义的源抓取 RSS
2. 通过 BestBlogs API 将文章归档到 `data/articles/`
3. 生成 Markdown 文件（README.md、TAGS.md、details/）
4. 站点从 `data/links.json` 和归档文章读取数据

### 数据流转
1. `rss.json` 定义 RSS 源（BestBlogs 订阅）
2. `fetch.js` 抓取订阅（优先 BestBlogs API，降级 RSS）
3. `archiver.js` 将新文章归档到 `data/articles/YYYY/MM/<id>.json`
4. `writemd.js` 从模板生成 markdown 文件
5. `feed.js` 生成 `atom.xml`
6. 站点从 `links.json` 和归档文章展示数据

### GitHub Actions 工作流
- **文件:** `.github/workflows/server.yml`
- **定时:** 每 2 小时运行一次 (`0 */2 * * *`)
- **步骤:**
  1. 运行爬虫 (`server/once.js`)
  2. 如数据或代码有变更则构建前端
  3. 部署到 `gh-pages` 分支

## 关键模式

### RSS 源配置 (`data/rss.json`)
```json
[
  {
    "title": "精选文章 (BestBlogs)",
    "rss": "https://www.bestblogs.dev/feeds/rss?type=article&sort=hot&limit=20"
  }
]
```

### 标签分类 (`data/tags.json`)
标签使用正则关键词根据标题自动分类文章。

### 文章归档结构
```
data/articles/
  2026/
    01/
      <article-id>.json
```

### 环境检测
- `utils.WORKFLOW` - 检测是否在 GitHub Actions 中运行（通过 `WORKFLOW` 环境变量设置）
- 当 `WORKFLOW=true` 时，减少日志输出并在完成后退出进程

## 部署

- **前端:** Vercel（从 `gh-pages` 分支部署静态站点）
- **API:** Vercel 无服务器函数 (`/api/`)
- **CI/CD:** GitHub Actions 部署到 `gh-pages` 分支

## Vercel 配置 (`vercel.json`)
- API 路由从 `/api/` 提供
- 静态资源从 `data/`、`details/`、`assets/` 提供
- SPA 回退到 `index.html`
