# Vercel 部署指南

本文档描述如何将 Angular 前端 (`read-rss/`) 部署到 Vercel。

## 部署架构

```
Vercel 部署结构:
├── read-rss/dist/       # Angular 静态文件 (index.html, *.js)
├── data/                # 爬虫数据 (links.json, articles/)
└── api/                 # Vercel Serverless Functions
```

Angular 直接通过 `/data/links.json` 访问数据，无需复制。

## Vercel Dashboard 配置

在 Vercel Dashboard → Project Settings → General 中配置：

| 配置项 | 值 | 说明 |
|--------|-----|------|
| **Framework Preset** | `Other` | Angular 非官方预设 |
| **Build Command** | `cd read-rss && npm install && npm run build` | 进入子目录构建 |
| **Output Directory** | `read-rss/dist` | Angular 输出目录 |
| **Install Command** | `npm install` | 根目录安装 (可选) |

## Rewrites 配置

在 Settings → Rewrites 中添加以下规则实现 SPA 路由：

| Source | Destination |
|--------|-------------|
| `/((?!data\|api\|assets).*)` | `/index.html` |

此规则将所有非 `/data`、`/api`、`/assets` 开头的请求重写到 `index.html`，支持 Angular 客户端路由。

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
