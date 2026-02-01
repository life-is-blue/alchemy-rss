# Alchemy Atlas 方案设计

> **版本**: v0.3.0
> **更新时间**: 2026-01-31 19:30 (UTC+8)
> **状态**: Draft
> **作者**: Alchemy Team

---

## 目录

1. [项目背景与定位](#1-项目背景与定位)
2. [现状诊断](#2-现状诊断)
3. [核心使用场景](#3-核心使用场景)
4. [MVP 架构设计](#4-mvp-架构设计)
5. [数据模型设计](#5-数据模型设计)
6. [技术选型](#6-技术选型)
7. [实施路径](#7-实施路径)
8. [成本估算](#8-成本估算)
9. [风险与应对](#9-风险与应对)
10. [附录](#附录)

---

## 1. 项目背景与定位

### 1.1 第一性原理思考

个人知识管理的本质链路：

```
获取 → 筛选 → 阅读 → 留存 → 复用
```

当前技术生态中：
- **BestBlogs** 解决了"获取"和"筛选"（AI 评分、多源聚合、智能摘要）
- **Alchemy** 的机会在于"留存"和"复用"

### 1.2 核心定位

```
BestBlogs = 智能矿场 (挖矿 + 初筛 + 粗加工)
Alchemy   = 个人炼金厂 (精炼 + 铸造 + 永久储备)
```

**一句话定位**：把 BestBlogs 的流水内容，炼成个人永久知识资产 + AI 可用语料。

### 1.3 设计原则（MVP 导向）

| 原则 | 说明 |
|------|------|
| **个人维护优先** | 方案简洁，避免过度工程 |
| **静态优先** | 数据可导出为静态文件，Git 友好 |
| **增量演进** | 先跑通基础，再逐步增强 |
| **复用现有设施** | 最大化利用 BestBlogs API、GitHub Actions、Vercel |

### 1.4 数据规模预期

| 指标 | 当前 | 预期 |
|------|------|------|
| 日增量 | ~20 篇 | ~100 篇（可通过 minScore 过滤控制） |
| 总量 | 758 篇 | 数万篇（长期） |
| links.json | 300KB | 可接受，暂不拆分 |

---

## 2. 现状诊断

### 2.1 代码能力现状

| 模块 | 状态 | 说明 |
|------|------|------|
| `server/fetch.js` | ✅ 完善 | API-First 混合抓取策略 |
| `server/update.js` | ⚠️ 待验证 | 归档逻辑已内置，但 articles/ 数据需验证 |
| `site/` 前端 | ✅ 完善 | Nuxt 4 + Tailwind，阅读体验良好 |
| GitHub Actions | ✅ 运行中 | 每 2 小时定时抓取 |

### 2.2 数据现状

| 数据 | 现状 | 问题 |
|------|------|------|
| `links.json` | 300KB, 758 篇 | 按源分组，结构可用 |
| `articles/` | **gh-pages 分支无数据** | 归档逻辑未正确运行，需修复 |
| `rss.json` | 5 个源 | 配置正常 |
| `tags.json` | 主题标签配置 | 关键词规则，可扩展 |

### 2.3 关键问题：归档未生效

**update.js 归档逻辑分析**：

```javascript
// 路径策略: data/articles/YYYY/MM/<id>.json
const relPath = `${year}/${month}/${article.id}.json`;
const absPath = `${ARTICLES_DIR}/${relPath}`;
```

**可能原因**：
1. `update.js` 归档分支未触发（API Key 缺失或源类型不支持归档）
2. GitHub Actions 工作流未触发归档步骤
3. 归档结果未正确提交到 gh-pages

**需要修复**：这是 Phase 0 的核心任务。

---

## 3. 核心使用场景

### 3.1 场景优先级

| 优先级 | 场景 | 描述 | 数据需求 |
|--------|------|------|---------|
| **P0** | AI 编程案例库 | 编程遇到问题时，查询案例获得思路启发 | 归档 + 语义检索 |
| **P1** | 研究报告引用 | 写报告时引用具体文章，减少幻觉 | 归档 + 全文检索 |
| **P2** | 个人笔记整合 | 整合方法论、心得、总结 | 个人数据层 |

### 3.2 场景详解

#### 场景 1: AI 编程案例库 (P0)

```
使用流程:
1. Claude Code 遇到架构/设计问题
2. 并行查询: Context7 (官方文档) + Alchemy (案例库)
3. 获得:
   - Context7: 标准用法、API 文档
   - Alchemy: 实战案例、方法论、心得、踩坑经验

价值: 突破"标准答案"，获得创新思路和实战智慧
```

**所需能力**:
- 文章全文归档 ✓ (update.js 已支持)
- 语义检索 (需实现)
- MCP Server 接口 (可选，后期)

#### 场景 2: 研究报告引用 (P1)

```
使用流程:
1. 写研究报告时提问: "MCP 协议的最新进展"
2. 系统返回:
   - 相关文章列表 (按时间/相关性排序)
   - 每篇文章的 AI 摘要 + 要点
   - 可直接引用的链接
3. 写入报告，附带来源

价值: 有据可查，减少 AI 幻觉
```

**所需能力**:
- 文章全文归档 ✓
- 时间线检索 (links.json 已支持)
- 语义检索 (需实现)

#### 场景 3: 个人笔记整合 (P2)

```
使用流程:
1. 将个人方法论笔记导入系统
2. 与 BestBlogs 文章关联
3. 形成个人知识体系

价值: 构建个人"第二大脑"
```

**所需能力**:
- 个人数据存储 (后期实现)
- 关联机制 (后期实现)

---

## 4. MVP 架构设计

### 4.1 简化的两层架构

```
┌─────────────────────────────────────────────────────────────────┐
│                     Layer 1: 检索层                             │
│                  (语义检索 + 案例查询)                           │
├─────────────────────────────────────────────────────────────────┤
│  • 向量化 Embedding (语义检索)                                  │
│  • 全文检索 (关键词匹配)                                        │
│  • 时间线检索 (按日期筛选)                                      │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                     Layer 0: 存档层                             │
│                  (BestBlogs 原料 + 永久归档)                     │
├─────────────────────────────────────────────────────────────────┤
│  • 文章全文归档 (articles/YYYY/MM/{id}.json)                    │
│  • 索引文件 (links.json)                                        │
│  • AI 摘要 + 要点 (来自 BestBlogs)                              │
└─────────────────────────────────────────────────────────────────┘
```

**MVP 精简决策**：
- ❌ 暂不做分库（links.json 300KB 可接受）
- ❌ 暂不做知识图谱（复杂度高，收益不明确）
- ❌ 暂不做个人标注（后期再加）
- ✅ 聚焦：归档 + 语义检索

### 4.2 数据流（MVP）

```
BestBlogs API
     │
     ▼
┌─────────────┐    ┌─────────────┐
│   Fetcher   │ → │  Archiver   │
│  (fetch.js) │    │(update.js)│
└─────────────┘    └──────┬──────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
   │ links.json  │ │  articles/  │ │  vectors/   │
   │   (索引)    │ │  (全文归档)  │ │  (向量库)   │
   └─────────────┘ └─────────────┘ └─────────────┘
          │               │               │
          └───────────────┼───────────────┘
                          ▼
                   ┌─────────────┐
                   │  检索 API   │
                   │ /api/search │
                   └─────────────┘
```

### 4.3 目录结构（MVP）

```
data/
├── links.json              # 主索引（保持现有结构）
├── rss.json                # RSS 源配置
├── tags.json               # 主题标签配置
├── articles/               # 文章归档【需修复】
│   └── {YYYY}/{MM}/{id}.json
└── vectors/                # 向量存储【新增】
    └── index.db            # SQLite-vec 索引
```

**简化说明**：
- 保持 `links.json` 现有结构，不拆分
- `articles/` 修复归档逻辑
- `vectors/` 仅一个全局索引文件

---

## 5. 数据模型设计

### 5.1 文章归档 Schema（已有，由 update.js 归档生成）

```json
// data/articles/YYYY/MM/{id}.json
{
  "id": "e65e0b56",
  "title": "文章标题",
  "url": "https://www.bestblogs.dev/article/e65e0b56",
  "date": "2026-01-29",
  "author": "作者",
  "siteName": "来源名称",

  // 核心内容
  "content": "清洗后的 HTML 全文",

  // BestBlogs AI 产出
  "oneSentenceSummary": "AI 一句话摘要",
  "summary": "AI 详细摘要",
  "aiSummary": "AI 一句话摘要（兼容字段）",
  "mainPoints": ["要点1", "要点2", "要点3"],
  "keyQuotes": ["引用1", "引用2"],
  "tags": ["标签1", "标签2"],           // 上游原始标签（API/RSS）
  "topicTag": "ai-llm",                // 本地主题标签（关键词匹配）
  "readTime": 9,
  "score": 92,
  "wordCount": 2076,
  "domain": "bestblogs.dev",
  "category": "Artificial_Intelligence"
}
```

**说明**：update.js 已实现此结构，无需修改 Schema。

### 5.2 索引 Schema（现有 links.json）

```json
[
  {
    "title": "精选文章 (BestBlogs)",
    "items": [
      {
        "title": "文章标题",
        "link": "https://www.bestblogs.dev/article/xxx",
        "date": "2026-01-29",
        "summary": "RSS 摘要...",
        // 新增字段（update.js 已支持）
        "id": "xxx",
        "archive_path": "data/articles/2026/01/xxx.json",
        "oneSentenceSummary": "AI 一句话摘要",
        "summary": "AI 详细摘要",
        "tags": ["标签"],               // 上游原始标签（API/RSS）
        "topicTag": "ai-llm",           // 本地主题标签
        "readTime": 9,
        "category": "Artificial_Intelligence"
      }
    ]
  }
]
```

**说明**：
- `category` 为 BestBlogs 上游分类（主类）
- `topicTag` 为本地主题标签（用于 TAGS.md/详情页聚合）

### 5.3 向量索引（新增）

使用 SQLite-vec，存储结构：

```sql
CREATE TABLE articles (
  id TEXT PRIMARY KEY,
  title TEXT,
  summary TEXT,
  embedding BLOB,  -- 1536 维向量
  date TEXT,
  score INTEGER,
  category TEXT
);

CREATE INDEX idx_date ON articles(date);
CREATE INDEX idx_score ON articles(score);
```

---

## 6. 技术选型

### 6.1 MVP 选型

| 组件 | 方案 | 理由 |
|------|------|------|
| **Embedding** | OpenAI `text-embedding-3-small` | 便宜、效果好 |
| **向量存储** | SQLite + `sqlite-vec` | 单文件、零运维 |
| **检索 API** | Nuxt Server API | 复用现有架构 |
| **部署** | Vercel + gh-pages | 现有设施 |

### 6.2 暂不引入

| 组件 | 原因 |
|------|------|
| ChromaDB/Pinecone | 增加复杂度，SQLite 够用 |
| 实体抽取/图谱 | MVP 不需要，后期再加 |
| 分库架构 | 数据量不大，暂不需要 |

---

## 7. 实施路径

### 7.1 阶段规划（精简版）

```
Phase 0 (v0.2)              Phase 1 (v0.3)             Phase 2 (v0.4)
归档修复                     语义检索                    增强能力
1 周                         2 周                        持续
─────────────────          ─────────────────         ─────────────────
■ 诊断归档失效原因          □ Embedding 生成          □ MCP Server 接口
■ 修复 archiver 调用链     □ SQLite-vec 集成         □ 个人笔记整合
■ 验证归档数据生成          □ /api/search 实现        □ 高级检索过滤
■ 补跑历史文章归档          □ 前端搜索界面            □ 分库（如需要）
```

### 7.2 Phase 0 详细任务（归档修复）

**目标**: 确保 articles/ 正确生成并持久化

| 任务 | 描述 | 优先级 |
|------|------|--------|
| P0-1 | 分析 update.js，确认 archiver 调用链 | P0 |
| P0-2 | 检查 GitHub Actions 工作流 | P0 |
| P0-3 | 本地测试归档流程 | P0 |
| P0-4 | 修复问题（可能需要重构） | P0 |
| P0-5 | 补跑历史 758 篇文章归档 | P0 |
| P0-6 | 验证 gh-pages 分支数据 | P0 |

### 7.3 Phase 1 详细任务（语义检索）

**目标**: 实现基于语义的文章检索

| 任务 | 描述 | 优先级 |
|------|------|--------|
| P1-1 | Embedding 生成脚本 (`server/embedding.js`) | P0 |
| P1-2 | SQLite-vec 集成 (`server/vectordb.js`) | P0 |
| P1-3 | 批量处理现有文章 | P0 |
| P1-4 | 检索 API (`site/server/api/search.ts`) | P0 |
| P1-5 | 前端搜索界面 | P1 |
| P1-6 | 增量更新机制（新文章自动向量化） | P1 |

### 7.4 Phase 2 任务（增强能力）

**目标**: 扩展使用场景

| 任务 | 描述 | 优先级 |
|------|------|--------|
| P2-1 | MCP Server 接口（供 Claude Code 调用） | P1 |
| P2-2 | 个人笔记整合 | P2 |
| P2-3 | 高级检索过滤（按来源、时间、评分） | P1 |
| P2-4 | 分库架构（如数据量增长需要） | P2 |

---

## 8. 成本估算

### 8.1 一次性成本（~758 篇）

| 项目 | 单价 | 用量 | 费用 |
|------|------|------|------|
| Embedding | $0.02/1M tokens | ~1.5M | ~$0.03 |
| **合计** | | | **~$0.03** |

### 8.2 增量成本（每日 ~100 篇）

| 项目 | 日费用 | 月费用 |
|------|--------|--------|
| Embedding | ~$0.002 | ~$0.06 |
| **合计** | ~$0.002 | **~$0.06** |

### 8.3 基础设施

| 项目 | 费用 |
|------|------|
| Vercel | 免费 |
| GitHub Actions | 免费 |
| **合计** | **免费** |

**结论**: MVP 阶段成本可忽略不计。

---

## 9. 风险与应对

### 9.1 技术风险

| 风险 | 影响 | 应对 |
|------|------|------|
| 归档修复复杂 | 中 | 如必要可重构 update.js |
| SQLite-vec 学习曲线 | 低 | 文档完善，示例充分 |
| Vercel 函数限制 | 低 | 向量库可本地构建后部署 |

### 9.2 数据风险

| 风险 | 影响 | 应对 |
|------|------|------|
| BestBlogs API 变更 | 中 | api-fetcher.js 已有抽象层 |
| 文章删除/下架 | 低 | 本地归档不受影响 |

---

## 附录

### A. 关键文件说明

| 文件 | 作用 | 状态 |
|------|------|------|
| `server/fetch.js` | RSS/API 抓取 | ✅ 正常 |
| `server/update.js` | 文章归档 | ⚠️ 归档逻辑内置，调用链待验证 |
| `server/update.js` | 主流程编排 | ⚠️ 待检查 archiver 调用 |
| `.github/workflows/server.yml` | CI/CD | ⚠️ 待检查归档步骤 |

### B. BestBlogs API 能力

**RSS 参数**（用于控制输入量）：
- `minScore`: 0-100，建议 85+ 过滤低质量
- `category`: ai, programming, product, business
- `timeFilter`: 1d, 3d, 1w, 1m, 3m
- `type`: article, podcast, video, twitter

**OpenAPI 端点**：
- `GET /resource/meta` - 元数据
- `GET /resource/content` - 全文内容

### C. 参考资源

- [BestBlogs RSS 文档](https://github.com/ginobefun/BestBlogs/blob/main/BestBlogs_RSS_Doc.md)
- [BestBlogs OpenAPI 文档](https://github.com/ginobefun/BestBlogs/blob/main/BestBlogs_OpenAPI_Doc.md)
- [sqlite-vec](https://github.com/asg017/sqlite-vec)
- [Context7 MCP Server](https://github.com/upstash/context7)

### D. 版本历史

| 版本 | 日期 | 变更说明 |
|------|------|---------|
| v0.1.0 | 2026-01-31 17:00 | 初始版本 |
| v0.2.0 | 2026-01-31 18:30 | 增加 Phase 0、分库架构、现状诊断 |
| v0.3.0 | 2026-01-31 19:30 | **MVP 精简版**：聚焦归档修复+语义检索，移除分库/图谱等复杂设计 |

---

### E. 与 v0.2.0 的主要变更

| 项目 | v0.2.0 | v0.3.0 (MVP) |
|------|--------|-------------|
| 架构层级 | 四层 (L0-L3) | 两层 (存档+检索) |
| 分库 | 详细设计 | 暂不实现 |
| 知识图谱 | 详细设计 | 暂不实现 |
| 个人标注 | 详细设计 | 暂不实现 |
| 核心聚焦 | 全面规划 | 归档修复 + 语义检索 |
| Phase 数量 | 4 个 | 3 个 |

**精简原因**：
1. 个人维护，避免过度工程
2. 先跑通基础，验证价值
3. 数据量可控，暂不需要分库
4. 知识图谱收益不明确，后期再评估

---

*本文档为 MVP 精简版，后续根据实际使用反馈迭代*
