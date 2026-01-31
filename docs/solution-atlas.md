# Alchemy Atlas 方案设计

> **版本**: v0.2.0
> **更新时间**: 2026-01-31 18:30 (UTC+8)
> **状态**: Draft
> **作者**: Alchemy Team

---

## 目录

1. [项目背景与定位](#1-项目背景与定位)
2. [现状诊断](#2-现状诊断)
3. [核心架构设计](#3-核心架构设计)
4. [分库架构设计](#4-分库架构设计)
5. [数据模型设计](#5-数据模型设计)
6. [产出物设计](#6-产出物设计)
7. [应用场景](#7-应用场景)
8. [技术选型](#8-技术选型)
9. [实施路径](#9-实施路径)
10. [成本估算](#10-成本估算)
11. [风险与应对](#11-风险与应对)
12. [附录](#附录)

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

### 1.3 与 BestBlogs 的关系

| 维度 | BestBlogs | Alchemy |
|------|-----------|---------|
| 角色 | 内容供应商 | 个人镜像+增强层 |
| 数据 | 实时查询 | 永久归档 |
| 控制 | 平台规则 | 完全自主 |
| 扩展 | 受限于 API | 无限自定义 |

**核心原则**：不重复 BestBlogs 的功能，而是利用其高质量元数据做个人化的内容重组与知识沉淀。

### 1.4 独特价值定位

| 维度 | BestBlogs 提供 | Alchemy 增值 |
|------|---------------|-------------|
| 时间维度 | 当前内容 | 历史归档 + 版本演进 |
| 空间维度 | 单篇文章 | 知识图谱 + 概念网络 |
| 个人维度 | 通用推荐 | 个人标注 + 阅读轨迹 |
| AI 维度 | 原始文本 | 结构化语料 + 微调数据 |

---

## 2. 现状诊断

### 2.1 代码能力现状

| 模块 | 状态 | 说明 |
|------|------|------|
| `server/fetch.js` | ✅ 完善 | API-First 混合抓取策略 |
| `server/archiver.js` | ✅ 完善 | 支持 `articles/YYYY/MM/{id}.json` 归档 |
| `site/` 前端 | ✅ 完善 | Nuxt 4 + Tailwind，阅读体验良好 |
| GitHub Actions | ✅ 运行中 | 每 2 小时定时抓取 |

### 2.2 数据现状

| 数据 | 现状 | 问题 |
|------|------|------|
| `links.json` | 212KB, 758 篇 | 单文件，按源分组，未扁平化 |
| `articles/` | **不在 master 分支** | 可能在 gh-pages 或未生成 |
| `rss.json` | 5 个源 | 配置正常 |
| `tags.json` | 6 个分类 | 关键词规则，可扩展 |

### 2.3 数据结构问题

**当前 links.json 结构**：
```json
[
  {
    "title": "精选文章 (BestBlogs)",
    "items": [
      {"title": "...", "link": "...", "date": "...", "summary": "..."},
      ...
    ]
  },
  {
    "title": "技术视频 (Tech Videos)",
    "items": [...]
  }
]
```

**问题**：
1. ❌ 嵌套结构，不利于全局检索
2. ❌ 单文件膨胀，Git diff 不友好
3. ❌ 无分库概念，混合存储
4. ❌ 缺少 `archive_path` 字段（archiver.js 已支持，但未启用）

### 2.4 archiver.js 归档的数据结构

```json
// data/articles/YYYY/MM/{id}.json
{
  "id": "e65e0b56",
  "title": "文章标题",
  "url": "原文链接",
  "date": "2026-01-29",
  "author": "作者",
  "siteName": "来源名称",
  "content": "清洗后的 HTML",
  "aiSummary": "AI 一句话摘要",
  "mainPoints": ["要点1", "要点2"],
  "tags": ["标签1", "标签2"],
  "readTime": 9,
  "score": 92,
  "wordCount": 2076,
  "domain": "bestblogs.dev",
  "category": "ai"
}
```

**优点**：BestBlogs API 数据已经足够丰富，可直接作为 Layer 1 基础。

---

## 3. 核心架构设计

### 3.1 四层知识炼金架构

```
┌─────────────────────────────────────────────────────────────────┐
│                     Layer 3: 产出层                             │
│                  (面向 AI 的结构化语料)                          │
├─────────────────────────────────────────────────────────────────┤
│  • 问答对数据集 (RAG 检索用)                                    │
│  • 案例库 (问题→方案→结果)                                      │
│  • 技术写作微调数据                                             │
│  • 知识图谱 (实体+关系网络)                                     │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                     Layer 2: 加工层                             │
│                  (Alchemy 增值处理)                              │
├─────────────────────────────────────────────────────────────────┤
│  • 向量化 Embedding (语义检索)                                  │
│  • 实体抽取 (技术/概念/人物/公司)                               │
│  • 跨文章关联 (主题聚类)                                        │
│  • 个人标注 (高亮/笔记/评分/阅读状态)                           │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                     Layer 1: 存档层                             │
│                  (BestBlogs 原料 + 永久归档)                     │
├─────────────────────────────────────────────────────────────────┤
│  • 文章/播客/视频/推文 (按类型分库)                             │
│  • AI 摘要 + 要点 + 引用                                        │
│  • 质量评分 + 分类标签                                          │
│  • Git 版本控制 (时间快照)                                      │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                     Layer 0: 基石层 (新增)                       │
│                  (数据治理 + 分库管理)                           │
├─────────────────────────────────────────────────────────────────┤
│  • 索引拆分 (master.json + 分库索引)                            │
│  • 目录规范 (libraries/ + articles/)                            │
│  • Schema 版本控制                                              │
│  • 数据迁移工具                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 数据流设计

```
BestBlogs API
     │
     ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Fetcher   │ → │  Archiver   │ → │  Indexer    │
│  (fetch.js) │    │(archiver.js)│    │   (新增)    │
└─────────────┘    └─────────────┘    └──────┬──────┘
                                              │
                          ┌───────────────────┼───────────────────┐
                          ▼                   ▼                   ▼
                   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
                   │  libraries/ │     │  articles/  │     │   index/    │
                   │  (分库配置)  │     │  (实际存储)  │     │  (多级索引)  │
                   └─────────────┘     └─────────────┘     └─────────────┘
                                              │
                   ┌──────────────────────────┼──────────────────────────┐
                   ▼                          ▼                          ▼
            ┌─────────────┐           ┌─────────────┐           ┌─────────────┐
            │  Embedding  │           │  Entities   │           │   Graph     │
            │  Generator  │           │  Extractor  │           │  Builder    │
            └─────────────┘           └─────────────┘           └─────────────┘
                   │                          │                          │
                   ▼                          ▼                          ▼
            ┌─────────────┐           ┌─────────────┐           ┌─────────────┐
            │  vectors/   │           │  entities/  │           │   graph/    │
            └─────────────┘           └─────────────┘           └─────────────┘
                   │                          │                          │
                   └──────────────────────────┼──────────────────────────┘
                                              ▼
                                      ┌─────────────┐
                                      │   Corpus    │
                                      │  Generator  │
                                      └─────────────┘
                                              │
                                              ▼
                                      ┌─────────────┐
                                      │   corpus/   │
                                      │ (qa, cases) │
                                      └─────────────┘
```

---

## 4. 分库架构设计

### 4.1 设计理念（借鉴 Context7）

Context7 的核心理念：
- 按 **库/项目** 分隔（如 `/mongodb/docs`、`/vercel/next.js`）
- 每个库独立维护、独立检索
- 支持精确查询特定库

**Alchemy 的分库维度**：

| 维度 | 分库方式 | 检索场景 |
|------|---------|---------|
| **按来源 (source)** | articles / videos / podcasts / tweets | "播客中关于 AI 的内容" |
| **按领域 (domain)** | ai-llm / architecture / frontend / devops | "AI 领域的所有内容" |

### 4.2 分库目录结构

```
data/
├── index/                              # 索引层
│   ├── master.json                     # 主索引 (id → 路径映射，轻量)
│   ├── by-source/                      # 按来源分索引
│   │   ├── articles.json               # 文章索引
│   │   ├── videos.json                 # 视频索引
│   │   ├── podcasts.json               # 播客索引
│   │   └── tweets.json                 # 推文索引
│   └── by-domain/                      # 按领域分索引 (虚拟，引用)
│       ├── ai-llm.json
│       ├── architecture.json
│       ├── frontend.json
│       ├── devops.json
│       └── product.json
│
├── libraries/                          # 分库配置
│   ├── manifest.json                   # 全局库清单
│   └── {library}/                      # 每个库的元信息
│       └── manifest.json
│
├── articles/                           # 文章存储 (实际数据)
│   └── {YYYY}/{MM}/{id}.json
│
├── vectors/                            # 向量存储
│   ├── global.db                       # 全局向量索引 (SQLite-vec)
│   └── by-library/                     # 分库向量 (可选，提升检索精度)
│       ├── articles.db
│       └── podcasts.db
│
├── graph/                              # 知识图谱
│   ├── nodes.json
│   ├── edges.json
│   └── clusters.json
│
├── corpus/                             # AI 语料产出
│   ├── qa.jsonl
│   └── cases.jsonl
│
└── personal/                           # 个人数据 (可选独立 Git 仓库)
    ├── reading-history.json
    ├── highlights.json
    └── notes.json
```

### 4.3 索引文件设计

#### 4.3.1 主索引 (index/master.json)

```jsonc
{
  "version": "1.0.0",
  "updatedAt": "2026-01-31T12:00:00Z",
  "totalCount": 758,
  "articles": {
    "e65e0b56": {
      "path": "articles/2026/01/e65e0b56.json",
      "source": "articles",
      "domain": "ai-llm",
      "date": "2026-01-29"
    }
    // ... 仅存路径映射，不存内容
  }
}
```

#### 4.3.2 分库索引 (index/by-source/articles.json)

```jsonc
{
  "library": "articles",
  "displayName": "精选文章",
  "description": "BestBlogs 精选高质量技术文章",
  "count": 137,
  "updatedAt": "2026-01-31T12:00:00Z",
  "items": [
    {
      "id": "e65e0b56",
      "title": "Google DeepMind 推出 ATLAS 缩放法则",
      "date": "2026-01-29",
      "score": 92,
      "domain": "ai-llm",
      "tags": ["LLM", "多语言"],
      "summary": "一句话摘要...",
      "path": "articles/2026/01/e65e0b56.json",
      // Layer 2 状态
      "hasEmbedding": true,
      "hasEntities": true,
      "cluster": "LLM-训练优化",
      // 个人状态
      "personal": {
        "status": "read",
        "rating": 5,
        "starred": true
      }
    }
  ]
}
```

#### 4.3.3 领域索引 (index/by-domain/ai-llm.json)

```jsonc
{
  "domain": "ai-llm",
  "displayName": "AI & 大模型",
  "keywords": ["AI", "GPT", "LLM", "Agent", "RAG"],
  "count": 245,
  "updatedAt": "2026-01-31T12:00:00Z",
  "items": [
    // 引用，结构同上
    {"id": "e65e0b56", "source": "articles", "path": "..."},
    {"id": "xyz123", "source": "podcasts", "path": "..."}
  ]
}
```

### 4.4 分库检索策略

```
查询: "在 AI 领域的播客中，有哪些关于 RAG 的内容？"

步骤:
1. 解析意图 → source=podcasts, domain=ai-llm, keyword=RAG
2. 加载索引 → index/by-source/podcasts.json ∩ index/by-domain/ai-llm.json
3. 向量检索 → vectors/by-library/podcasts.db (如有) 或 vectors/global.db
4. 返回结果 → Top-K 相关播客

查询: "所有关于 MCP 协议的内容"

步骤:
1. 解析意图 → keyword=MCP, source=all
2. 加载索引 → index/master.json (全局)
3. 向量检索 → vectors/global.db
4. 返回结果 → 跨库 Top-K
```

---

## 5. 数据模型设计

### 5.1 文章完整 Schema (Layer 1 + Layer 2)

```jsonc
// data/articles/{YYYY}/{MM}/{id}.json
{
  // ===== Layer 1: BestBlogs 原始数据 =====
  "id": "e65e0b56",
  "title": "Google DeepMind 推出 ATLAS 缩放法则",
  "url": "https://www.bestblogs.dev/article/e65e0b56",
  "originalUrl": "https://...",
  "date": "2026-01-29",
  "author": "作者名",
  "siteName": "机器之心",
  "domain": "bestblogs.dev",
  "category": "ai",

  // 内容
  "content": "清洗后的全文 HTML...",

  // BestBlogs AI 产出
  "aiSummary": "AI 一句话摘要...",
  "mainPoints": ["要点1", "要点2", "要点3"],
  "tags": ["LLM", "多语言", "DeepMind"],
  "readTime": 9,
  "score": 92,
  "wordCount": 2076,

  // ===== Layer 2: Alchemy 加工 =====
  "alchemy": {
    "embedding": {
      "status": "completed",       // pending | processing | completed | failed
      "model": "text-embedding-3-small",
      "dimensions": 1536,
      "updatedAt": "2026-01-30T10:00:00Z"
      // 注意：向量本身存在 vectors/global.db，不内嵌
    },

    "entities": [
      {"name": "DeepMind", "type": "company", "confidence": 0.98},
      {"name": "ATLAS", "type": "technology", "confidence": 0.95},
      {"name": "缩放法则", "type": "concept", "confidence": 0.90}
    ],

    "relations": [
      {"from": "ATLAS", "to": "DeepMind", "type": "created_by"},
      {"from": "ATLAS", "to": "缩放法则", "type": "is_a"}
    ],

    "similar": ["article_id_1", "article_id_2"],
    "cluster": "LLM-训练优化",

    "corpus": {
      "qaGenerated": true,
      "qaCount": 3,
      "caseExtracted": false,
      "lastProcessed": "2026-01-30T12:00:00Z"
    }
  },

  // ===== 个人数据 =====
  "personal": {
    "status": "read",           // unread | reading | read
    "rating": 5,                // 1-5，null 表示未评
    "readAt": "2026-01-30T10:00:00Z",
    "readDuration": 480,        // 秒
    "highlights": [
      {"text": "重要段落...", "note": "我的批注", "createdAt": "..."}
    ],
    "notes": "整体思考...",
    "tags": ["必读", "面试准备"],
    "starred": true
  },

  // ===== 元信息 =====
  "meta": {
    "source": "articles",       // 所属库
    "archivedAt": "2026-01-29T08:00:00Z",
    "updatedAt": "2026-01-30T12:00:00Z",
    "schemaVersion": "1.0.0"
  }
}
```

### 5.2 实体类型定义

```typescript
type EntityType =
  | 'person'      // 人物：Sam Altman, 李飞飞, Yann LeCun
  | 'company'     // 公司：OpenAI, Anthropic, Google DeepMind
  | 'technology'  // 技术：RAG, LoRA, MCP, Transformer
  | 'product'     // 产品：GPT-4, Claude, Gemini
  | 'concept';    // 概念：向量数据库, 微调, 缩放法则

type RelationType =
  | 'created_by'    // GPT-4 → created_by → OpenAI
  | 'uses'          // RAG → uses → Vector Embedding
  | 'competes'      // Claude → competes → GPT-4
  | 'depends_on'    // RAG → depends_on → LLM
  | 'evolved_from'  // GPT-4 → evolved_from → GPT-3
  | 'is_a';         // ATLAS → is_a → 缩放法则
```

---

## 6. 产出物设计

### 6.1 问答对数据集

**文件**: `data/corpus/qa.jsonl`

```jsonc
{
  "id": "qa_001",
  "question": "什么是 ATLAS 缩放法则？",
  "answer": "ATLAS 是 Google DeepMind 提出的多语言语言模型缩放框架...",
  "sources": ["e65e0b56"],
  "domain": "ai-llm",
  "difficulty": "intermediate",
  "generatedAt": "2026-01-30T12:00:00Z",
  "model": "claude-3-haiku"
}
```

**生成策略**:
- 从 `mainPoints` 生成 What/Why/How 问题
- 从文章对比生成 vs 类问题
- 跨文章生成综合性问题

### 6.2 案例库

**文件**: `data/corpus/cases.jsonl`

```jsonc
{
  "id": "case_001",
  "title": "多语言模型训练资源优化",
  "problem": "多语言模型训练时，400+ 语言的资源分配不均衡",
  "context": "计算资源有限，需要在模型规模和语言覆盖之间权衡",
  "solution": "使用 ATLAS 框架定义语言混合比例的缩放法则",
  "approach": ["进行 774 次受控训练运行", "测量不同语言混合比例的效果"],
  "result": "成功建立了可预测的多语言缩放法则",
  "technologies": ["LLM", "多语言NLP"],
  "sources": ["e65e0b56"],
  "domain": "ai-llm/training"
}
```

### 6.3 知识图谱

**节点**: `data/graph/nodes.json`
**边**: `data/graph/edges.json`
**聚类**: `data/graph/clusters.json`

（详细格式见附录）

---

## 7. 应用场景

### 7.1 场景矩阵

| 场景 | 数据来源 | 分库利用 | 输出 |
|------|---------|---------|------|
| **语义搜索** | vectors/ | 可指定库 | Top-K 相关文章 |
| **知识问答** | corpus/qa + RAG | 全局或指定域 | 带引用的回答 |
| **趋势分析** | index/ + 时间线 | 按领域聚合 | 趋势报告 |
| **案例查询** | corpus/cases | 按技术栈筛选 | 相似案例 |
| **关系探索** | graph/ | 实体跨库关联 | 关联图谱 |
| **个人周刊** | personal + mainPoints | 已读筛选 | 精华汇总 |
| **播客笔记** | by-source/podcasts | 仅播客库 | 可搜索笔记库 |

### 7.2 分库检索示例

```
场景 1: "AI 领域的播客中有什么关于 Agent 的讨论？"
→ source: podcasts
→ domain: ai-llm
→ keyword: Agent
→ 结果: 播客库 + AI领域 交集的语义搜索

场景 2: "最近一周的热门技术视频"
→ source: videos
→ timeFilter: 1w
→ sort: score desc
→ 结果: 视频库的时间筛选 + 评分排序

场景 3: "独立开发者关于变现的经验"
→ source: articles
→ domain: product
→ keyword: 变现, monetization
→ 结果: 文章库 + 产品领域 的案例检索
```

---

## 8. 技术选型

### 8.1 选型矩阵

| 组件 | 方案 | 备选 | 选择理由 |
|------|------|------|---------|
| **Embedding** | OpenAI `text-embedding-3-small` | 智谱 GLM | 便宜、中英文质量好 |
| **向量存储** | SQLite + `sqlite-vec` | ChromaDB | 单文件、Git 友好 |
| **实体抽取** | Claude Haiku | DeepSeek | 便宜、中文优化 |
| **问答生成** | Claude Sonnet | GPT-4o | 质量高 |
| **图谱存储** | JSON 文件 | Neo4j | 简单、静态优先 |

### 8.2 架构约束

- 保持"静态优先"：所有数据可导出为静态文件
- 单仓库原则：所有数据在一个 Git 仓库（向量除外）
- 向量外置：SQLite-vec 文件不提交 Git，通过构建生成

---

## 9. 实施路径

### 9.1 阶段规划

```
Phase 0 (v0.2)              Phase 1 (v0.3)             Phase 2 (v0.4)             Phase 3 (v0.5)
数据基石                     个人能力                    智能能力                    AI 产出
1-2 周                       2-3 周                      3-4 周                      4-6 周
─────────────────          ─────────────────         ─────────────────         ─────────────────
□ 确认 articles/ 存在       □ personal 字段            □ Embedding 生成          □ QA 自动生成
□ 索引拆分 (links→分库)     □ 阅读状态追踪             □ 语义搜索 API            □ 案例库抽取
□ 目录规范化                □ 个人评分组件             □ 实体抽取管道            □ 知识图谱构建
□ Schema 版本化             □ 高亮标注功能             □ 主题聚类                □ 图谱可视化
□ 数据迁移脚本              □ 个人标签系统             □ 相似推荐                □ RAG 问答
```

### 9.2 Phase 0 详细任务（数据基石）

**目标**: 夯实数据存储基础，解决当前结构问题

| 任务 | 描述 | 优先级 |
|------|------|--------|
| P0-1 | 确认 gh-pages 分支的 articles/ 数据 | P0 |
| P0-2 | 设计并实现索引拆分脚本 (links.json → 分库索引) | P0 |
| P0-3 | 创建 index/master.json 主索引 | P0 |
| P0-4 | 创建 index/by-source/*.json 分库索引 | P0 |
| P0-5 | 创建 index/by-domain/*.json 领域索引 | P1 |
| P0-6 | 更新 archiver.js 写入新目录结构 | P0 |
| P0-7 | 更新前端读取新索引 | P0 |
| P0-8 | Schema 版本化，添加迁移工具 | P1 |

### 9.3 Phase 1-3 任务

（保持原有规划，见前文）

---

## 10. 成本估算

### 10.1 一次性成本 (~758 篇)

| 项目 | 单价 | 用量 | 费用 |
|------|------|------|------|
| Embedding | $0.02/1M tokens | ~1.5M | ~$0.03 |
| 实体抽取 | $0.25/1M tokens | ~0.8M | ~$0.20 |
| QA 生成 | $3/1M tokens | ~0.4M | ~$1.20 |
| **合计** | | | **~$1.5** |

### 10.2 增量成本 (每日 ~20 篇)

| 项目 | 日费用 | 月费用 |
|------|--------|--------|
| Embedding | ~$0.001 | ~$0.03 |
| 实体抽取 | ~$0.005 | ~$0.15 |
| QA 生成 | ~$0.03 | ~$0.90 |
| **合计** | ~$0.04 | **~$1.1** |

---

## 11. 风险与应对

### 11.1 技术风险

| 风险 | 影响 | 应对 |
|------|------|------|
| BestBlogs API 变更 | 中 | 保持抽象层 |
| 向量模型升级 | 低 | 支持增量重建 |
| 分库过多性能问题 | 低 | 延迟加载 + 缓存 |

### 11.2 数据风险

| 风险 | 影响 | 应对 |
|------|------|------|
| 索引不一致 | 中 | 定期校验脚本 |
| Git 仓库膨胀 | 中 | 向量不入 Git |
| Schema 演进 | 中 | 版本化 + 迁移工具 |

---

## 附录

### A. Beta 方案评价与整合

**solution-beta.md 的优点**：
- ✅ 三层架构清晰
- ✅ Schema 设计详细
- ✅ TypeScript 类型定义专业
- ✅ 成本估算准确

**整合到本方案的部分**：
- 实体/关系的 TypeScript 类型定义
- Phase 划分思路
- 成本估算数据

**本方案增加的部分**：
- Layer 0 数据基石层
- 分库架构设计（借鉴 Context7）
- 现状诊断与问题分析
- 索引拆分方案

### B. BestBlogs API 能力

（同前文）

### C. 参考资源

- [Context7 MCP Server](https://github.com/upstash/context7) - 分库管理理念
- [BestBlogs RSS 文档](https://github.com/ginobefun/BestBlogs/blob/main/BestBlogs_RSS_Doc.md)
- [BestBlogs OpenAPI 文档](https://github.com/ginobefun/BestBlogs/blob/main/BestBlogs_OpenAPI_Doc.md)
- [sqlite-vec](https://github.com/asg017/sqlite-vec)

### D. 版本历史

| 版本 | 日期 | 变更说明 |
|------|------|---------|
| v0.1.0 | 2026-01-31 17:00 | 初始版本 |
| v0.2.0 | 2026-01-31 18:30 | 增加 Phase 0、分库架构、现状诊断、Beta 整合 |

---

*本文档持续更新中，如有问题请联系 Alchemy Team*
