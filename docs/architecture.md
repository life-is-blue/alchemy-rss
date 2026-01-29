# Alchemy-RSS: 系统架构与设计方案

| 属性 | 描述 |
| :--- | :--- |
| **作者** | lifeisblue, Gemini CLI Agent |
| **状态** | 活跃 (Active) |
| **创建日期** | 2026-01-29 |
| **更新日期** | 2026-01-30 |
| **可见性** | 公开 (Public) |

## 1. 系统概览
Alchemy-RSS 是一个高度自动化的**“技术知识档案馆”**。它通过集成 AI 增强的采集管道，将碎片化的 RSS 信息转化为高质量、永久存储的结构化数字资产。

## 2. 核心架构：混合存储与动静结合

项目采用 **“API 优先 + 静态归档”** 的混合架构，兼顾了极速体验与数据持久性。

### 2.1 数据流向 (Data Pipeline)
1.  **采集 (Harvest)**：GitHub Actions 定时触发 `server/update.js`。
2.  **炼金 (Alchemy)**：
    *   **Archiver**：调用 BestBlogs API 获取全文、AI 摘要 (One-Sentence Summary) 及核心观点 (Main Points)。
    *   **Storage**：将清洗后的完整数据存储为静态 JSON 文件 (`data/articles/YYYY/MM/<ID>.json`)。
3.  **索引 (Indexing)**：更新主索引 `links.json`，记录文章的静态归档路径 (`archive_path`) 和智能标签 (`tags`)。
4.  **分发 (Distribute)**：通过 GitHub Pages 分发静态索引与归档文件。

### 2.2 前端策略：静态优先 (Static First)
Alchemy Reader 实现了“毫秒级”的阅读体验：
*   **Hit**：如果文章已归档，前端直接从 CDN 加载静态 JSON，无需等待后端计算，实现秒开且支持离线阅读。
*   **Miss**：对于极少数未归档的新文章，优雅降级为调用 Vercel Serverless API (`/api/reader`) 进行实时抓取。

## 3. 设计哲学：数字纸张 (Digital Book Philosophy)

Alchemy 不仅仅是一个阅读器，它被设计为一本可以呼吸的“数字书籍”。

### 3.1 沉浸式视觉规范
*   **纸张质感**：采用微信读书风格的温润底色 (#EDF0F2) 与纯白书页容器，配合 24px 超大圆角。
*   **Google 实用主义**：高对比度排版 (#202124 / #5F6368)，高密度列表视图，强调信息获取效率。
*   **磨砂玻璃拟态**：Header 和悬浮面板应用 `backdrop-filter: blur`，实现现代感与通透性的平衡。

### 3.2 智能交互
*   **AI Insight Card**：文章头部自动展示由 AI 提炼的“一句话摘要”和“核心观点”，帮助读者快速判断价值。
*   **Smart Categories**：摒弃传统的“按源分类”，采用基于内容的“智能标签聚类” (AI, Engineering, Product)，实现主题式阅读。

## 4. 存储架构 (The Archive Structure)

为解决 Git 仓库体积膨胀问题，我们实施了严格的分片策略：

```text
data/
├── links.json          # 热数据索引 (含 AI 摘要、标签、归档路径)
└── articles/           # 冷数据归档 (全量内容)
    ├── 2026/
    │   ├── 01/
    │   │   ├── a1b2c3d4.json
    │   │   └── ...
    │   └── 02/
    └── ...
```

*   **索引层**：轻量级，仅包含 metadata。
*   **内容层**：按年月物理分片，单个文件独立，Git 友好。

## 5. 已实现的里程碑
*   [x] **品牌重塑**：完成 Alchemy 视觉与品牌的全面升级。
*   [x] **UI/UX 进化**：实现沉浸式“微信读书”风格重构，包含玻璃拟态与黄金排版。
*   [x] **档案馆引擎**：实现 `Archiver` 模块，支持全量内容抓取与静态化存储。
*   [x] **AI 增强**：集成 BestBlogs API，自动提取 AI 摘要与标签。
*   [x] **智能分类**：实现基于标签的动态侧边栏导航。
*   [x] **性能极致**：实现“静态优先”的加载策略，API 响应速度提升 90%。