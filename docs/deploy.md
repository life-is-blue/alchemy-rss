# Vercel 部署指南

本文档描述如何将 Angular 前端 (`read-rss/`) 部署到 Vercel。

## 部署架构

```
GitHub Actions 构建流程:
master 分支 → 构建 Angular → 推送到 gh-pages

Vercel 静态托管 (gh-pages 分支):
├── index.html, *.js     # Angular 构建产物
├── data/                # 爬虫数据 (links.json, articles/)
├── api/                 # Vercel Serverless Functions
└── details/             # 文章详情
```

## 构建流程

**GitHub Actions** (`server.yml`) 负责：
1. 从 `gh-pages` 恢复 `data/` 目录
2. 运行爬虫更新数据
3. 构建 Angular 前端 (`read-rss/`)
4. 将所有内容推送到 `gh-pages`

**Vercel** 只做静态托管，不执行构建：
- `buildCommand: ""` - 跳过构建
- `outputDirectory: "."` - 直接使用根目录

## Vercel Dashboard 配置

| 配置项 | 值 |
|--------|-----|
| **Production Branch** | `gh-pages` |
| **Framework Preset** | `Other` |

其他配置通过 `vercel.json` 管理。

## Rewrites 配置

SPA 路由通过 `vercel.json` 配置：

```json
{
  "buildCommand": "",
  "outputDirectory": ".",
  "rewrites": [
    { "source": "/api/reader", "destination": "/api/reader" },
    { "source": "/(data|details|assets|static)/:path*", "destination": "/$1/:path*" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 本地开发

```bash
cd read-rss
npm install
npm run dev
# 访问 http://localhost:3000
```

开发环境通过 `proxy.conf.json` 代理 `/data` 和 `/api` 请求到线上服务 `https://rss.izoa.fun`。

## 验证步骤

### 本地验证
1. 启动开发服务器
2. 检查文章列表是否加载 (代理到线上 `/data/links.json`)
3. 点击文章验证全文加载 (archive_path)

### Vercel 预览
1. 推送到新分支
2. Vercel 自动创建 Preview 部署
3. 验证 `/data/links.json` 可访问
4. 验证文章全文加载
5. 验证 `/api/reader` 回退机制

## 数据流

1. **索引加载**: Angular 请求 `/data/links.json` 获取文章列表
2. **全文加载**: 点击文章时请求 `/data/articles/YYYY/MM/{id}.json`
3. **回退机制**: 如果归档不存在，调用 `/api/reader?url=...` 动态抓取
