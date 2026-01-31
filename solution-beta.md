# Alchemy 知识炼金平台 - 解决方案文档

**版本**: Beta  
**创建时间**: 2025-01-31  
**最后更新**: 2025-01-31  
**状态**: 方案设计阶段

---

## 1. 项目定位与核心洞察

### 1.1 现状分析

Alchemy（数据炼金平台）目前是一个基于 BestBlogs 的 RSS 聚合与内容归档系统：

- **已有能力**: 自动抓取、归档、生成静态站点
- **数据资产**: 高质量技术文章（含 AI 摘要、评分、标签）
- **技术栈**: Node.js + Nuxt 4 + GitHub Actions + Vercel

### 1.2 核心洞察

BestBlogs 已提供：
- ✅ 高质量筛选（minScore 过滤垃圾内容）
- ✅ 结构化元数据（分类、标签、评分、阅读时间）
- ✅ AI 预处理摘要（结构化、中英双语）
- ✅ 时间序列（技术趋势的历史快照）

**这不是普通的 RSS 存档，这是一个自动增长的、经过 AI 预处理的、垂直领域语料库。**

### 1.3 演进方向

从"个人阅读器"进化为**"个人 AI 知识引擎"**:

```
传统 RSS 阅读器          Alchemy 知识炼金平台
─────────────────────────────────────────────────
被动接收                 → 主动归档 + 永久保存
单篇阅读                 → 语义关联 + 知识网络
人工搜索                 → 智能检索 + RAG问答
个人消费                 → AI语料库 + 案例库
```

---

## 2. 三层知识炼金架构

```
┌─────────────────────────────────────────────────────────────┐
│                    第三层：智能应用层                          │
│                    (AI Agent 案例库)                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ 技术决策助手 │  │ 趋势分析引擎 │  │ 研究报告生成器       │  │
│  │ (RAG问答)   │  │ (时间线聚合) │  │ (结构化输出)        │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↑
┌─────────────────────────────────────────────────────────────┐
│                    第二层：知识网络层                          │
│              (Knowledge Graph + Vector Store)               │
│                                                             │
│  ┌─────────────────┐      ┌─────────────────────────────┐   │
│  │   实体关系图谱   │      │      语义向量索引            │   │
│  │  (JSON-LD/RDF)  │◄────►│  (SQLite-VSS/ChromaDB)      │   │
│  │                 │      │                             │   │
│  │ • Person/Company│      │ • title_vec (标题语义)      │   │
│  │ • Technology    │      │ • summary_vec (摘要语义)    │   │
│  │ • Concept       │      │ • chunks[] (内容分块)       │   │
│  │ • Product       │      │ • hybrid: 向量+关键词       │   │
│  └─────────────────┘      └─────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↑
┌─────────────────────────────────────────────────────────────┐
│                    第一层：数据基座层                          │
│              (Alchemy Archive + 增强字段)                     │
│                                                             │
│  data/articles/YYYY/MM/{id}.json                           │
│  ├── 原始 BestBlogs 数据 (title, summary, content...)       │
│  ├── 个人标注 (rating, highlights, notes, readStatus)       │
│  ├── 向量化状态 (embedding_status, model_version)           │
│  └── 实体索引 (extracted_entities[])                        │
│                                                             │
│  data/links.json → 增加 archive_path, ai_summary            │
│  data/graph/entities.json → 全局实体库                      │
│  data/graph/relations.json → 关系网络                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. 数据架构设计

### 3.1 核心数据文件

#### 3.1.1 文章归档 (articles/YYYY/MM/{id}.json)

```json
{
  "// ===== BestBlogs 原始数据 =====": "",
  "id": "RAW_xxx",
  "title": "文章标题",
  "originalTitle": "原标题（英文等）",
  "aiSummary": "AI生成摘要",
  "content": "清洗后的HTML/文本",
  "tags": ["AI", "RAG", "技术架构"],
  "score": 92,
  "readTime": 8,
  "wordCount": 2500,
  "publishDate": "2025-01-15",
  "sourceName": "来源名称",
  "sourceId": "SOURCE_xxx",
  "url": "原文链接",
  
  "// ===== 向量化数据（Phase 1 新增） =====": "",
  "embedding": {
    "model": "text-embedding-3-small",
    "version": "2025-01",
    "title_vec": [0.023, -0.156, "..."],
    "summary_vec": [0.045, 0.234, "..."],
    "chunks": [
      {"text": "段落1", "vec": ["..."], "index": 0},
      {"text": "段落2", "vec": ["..."], "index": 1}
    ],
    "createdAt": "2025-01-31T10:00:00Z"
  },
  
  "// ===== 知识图谱索引（Phase 2 新增） =====": "",
  "entities": [
    {"name": "RAG", "type": "TECHNOLOGY", "confidence": 0.95},
    {"name": "OpenAI", "type": "COMPANY", "confidence": 0.88},
    {"name": "向量数据库", "type": "CONCEPT", "confidence": 0.92}
  ],
  
  "// ===== 个人标注（Phase 1 新增） =====": "",
  "personal": {
    "readStatus": "completed",
    "rating": 5,
    "highlights": [
      {
        "text": "高亮文本",
        "location": "paragraph-3",
        "createdAt": "2025-01-20T08:30:00Z"
      }
    ],
    "notes": "我的思考...",
    "tags": ["必读", "面试准备"],
    "readAt": "2025-01-20T09:00:00Z"
  },
  
  "// ===== 关联数据（Phase 2 新增） =====": "",
  "related": ["RAW_yyy", "RAW_zzz"],
  "topicCluster": "RAG技术专题",
  "archivePath": "data/articles/2025/01/RAW_xxx.json"
}
```

#### 3.1.2 实体库 (data/graph/entities.json)

```json
{
  "version": "2025-01-31",
  "totalEntities": 150,
  "entities": [
    {
      "id": "ENT_001",
      "name": "RAG",
      "type": "TECHNOLOGY",
      "aliases": ["检索增强生成", "Retrieval-Augmented Generation"],
      "description": "一种将信息检索与文本生成结合的AI技术",
      "firstSeen": "2024-03-15",
      "lastSeen": "2025-01-31",
      "articleCount": 45,
      "relatedEntities": ["ENT_002", "ENT_003", "ENT_004"],
      "metadata": {
        "category": "Artificial_Intelligence",
        "confidence": 0.95
      }
    },
    {
      "id": "ENT_002",
      "name": "OpenAI",
      "type": "COMPANY",
      "aliases": [],
      "description": "人工智能研究公司",
      "firstSeen": "2024-01-01",
      "lastSeen": "2025-01-31",
      "articleCount": 120,
      "relatedEntities": ["ENT_005", "ENT_006"],
      "metadata": {
        "products": ["GPT-4", "GPT-3.5", "DALL-E"],
        "confidence": 0.98
      }
    }
  ],
  "entityTypes": {
    "PERSON": "人物",
    "COMPANY": "公司",
    "TECHNOLOGY": "技术",
    "PRODUCT": "产品",
    "CONCEPT": "概念"
  }
}
```

#### 3.1.3 关系网络 (data/graph/relations.json)

```json
{
  "version": "2025-01-31",
  "totalRelations": 280,
  "relations": [
    {
      "id": "REL_001",
      "source": "ENT_001",
      "target": "ENT_002",
      "type": "USES",
      "confidence": 0.95,
      "description": "RAG 使用 OpenAI 的 Embedding 技术",
      "articles": ["RAW_xxx", "RAW_yyy", "RAW_zzz"],
      "firstSeen": "2024-03-15",
      "lastSeen": "2025-01-20",
      "metadata": {
        "frequency": 15
      }
    },
    {
      "id": "REL_002",
      "source": "ENT_003",
      "target": "ENT_004",
      "type": "COMPETES",
      "confidence": 0.88,
      "description": "Claude 与 GPT-4 竞争关系",
      "articles": ["RAW_aaa"],
      "firstSeen": "2024-06-20",
      "lastSeen": "2025-01-15"
    },
    {
      "id": "REL_003",
      "source": "ENT_001",
      "target": "RAW_xxx",
      "type": "MENTIONED_IN",
      "confidence": 0.99,
      "description": "RAG 在文章中被提及",
      "articles": ["RAW_xxx"],
      "firstSeen": "2025-01-15",
      "lastSeen": "2025-01-15"
    }
  ],
  "relationTypes": {
    "CREATED_BY": "被创建",
    "USES": "使用",
    "COMPETES": "竞争",
    "MENTIONED_IN": "被提及",
    "DEPENDS_ON": "依赖",
    "EVOLVED_FROM": "演进自"
  }
}
```

#### 3.1.4 向量索引 (data/vectors/index.sqlite)

使用 SQLite-VSS 存储：
- 文章标题向量 (title_vec)
- 摘要向量 (summary_vec)
- 内容分块向量 (chunks[])
- 元数据 (article_id, publish_date, score)

### 3.2 数据流转

```
BestBlogs API
    ↓
fetch.js (RSS/API 抓取)
    ↓
archiver.js (内容归档)
    ↓
├─→ articles/YYYY/MM/{id}.json (原始数据)
├─→ embedding-processor.js (Phase 1)
│   └─→ 生成向量 → SQLite-VSS
├─→ entity-extractor.js (Phase 2)
│   └─→ 抽取实体 → entities.json
│   └─→ 构建关系 → relations.json
└─→ writemd.js (生成静态页面)
    ↓
Git 版本控制
    ↓
GitHub Actions (每2小时)
    ↓
gh-pages 分支 → Vercel 部署
```

---

## 4. 技术实现方案

### 4.1 Phase 1: 语义检索层 (2周)

#### 4.1.1 目标
实现基于向量的语义搜索能力

#### 4.1.2 技术选型

| 组件 | 选型 | 理由 |
|------|------|------|
| Embedding 模型 | OpenAI text-embedding-3-small | 性价比高，$0.02/1M tokens |
| 向量存储 | SQLite-VSS | 单文件，Git友好，符合静态优先 |
| 向量维度 | 1536 | text-embedding-3-small 标准维度 |
| 分块策略 | 512 tokens，重叠128 | 平衡检索精度与性能 |

#### 4.1.3 新增模块

**server/embeddings/processor.js**
```javascript
// 批量处理文章生成向量
// 增量更新新文章
// 支持多种 Embedding 提供商
```

**server/embeddings/search.js**
```javascript
// 语义搜索接口
// Hybrid 搜索：向量相似度 + 关键词匹配
// 支持过滤条件（时间、评分、标签）
```

**api/search.js** (Vercel Serverless)
```javascript
// POST /api/search
// Body: { query, filters, limit }
// Response: { results, total, query_embedding }
```

#### 4.1.4 前端组件

**site/components/SemanticSearch.vue**
- 智能搜索框（支持自然语言）
- 搜索结果展示（相似度分数、高亮）
- 过滤面板（时间范围、评分、标签）

#### 4.1.5 数据结构示例

```json
// 搜索结果
{
  "query": "RAG 和微调的区别",
  "query_embedding": [0.023, -0.156, "..."],
  "results": [
    {
      "article_id": "RAW_xxx",
      "title": "RAG vs Fine-tuning: 如何选择",
      "similarity": 0.92,
      "matched_chunk": "RAG 适合需要实时知识的场景...",
      "metadata": {
        "score": 95,
        "publishDate": "2025-01-15",
        "readTime": 8
      }
    }
  ],
  "total": 15,
  "search_time_ms": 45
}
```

### 4.2 Phase 2: 知识图谱层 (3-4周)

#### 4.2.1 目标
构建实体关系网络，支持结构化查询

#### 4.2.2 技术选型

| 组件 | 选型 | 理由 |
|------|------|------|
| 实体抽取 | Claude Haiku | 成本低，$0.001/文章 |
| 存储格式 | JSON (entities.json + relations.json) | Git版本控制，无需外部依赖 |
| 可视化 | D3.js / ECharts | 前端展示关系图 |

#### 4.2.3 实体 Schema

```typescript
interface Entity {
  id: string;              // ENT_001
  name: string;            // 显示名称
  type: EntityType;        // PERSON | COMPANY | TECHNOLOGY | PRODUCT | CONCEPT
  aliases: string[];       // 别名
  description: string;     // 描述
  firstSeen: string;       // 首次出现日期
  lastSeen: string;        // 最后出现日期
  articleCount: number;    // 关联文章数
  relatedEntities: string[]; // 关联实体ID
  metadata: {
    category?: string;
    confidence: number;
    [key: string]: any;
  };
}

type EntityType = 
  | 'PERSON'      // 人物：Sam Altman, 李飞飞
  | 'COMPANY'     // 公司：OpenAI, Anthropic
  | 'TECHNOLOGY'  // 技术：RAG, LoRA, MCP
  | 'PRODUCT'     // 产品：GPT-4, Claude
  | 'CONCEPT';    // 概念：向量数据库，微调
```

#### 4.2.4 关系 Schema

```typescript
interface Relation {
  id: string;              // REL_001
  source: string;          // 源实体ID
  target: string;          // 目标实体ID
  type: RelationType;      // 关系类型
  confidence: number;      // 置信度 0-1
  description: string;     // 关系描述
  articles: string[];      // 支撑文章ID列表
  firstSeen: string;       // 首次出现
  lastSeen: string;        // 最后出现
  metadata?: {
    frequency?: number;    // 出现频次
    [key: string]: any;
  };
}

type RelationType =
  | 'CREATED_BY'    // 被创建：GPT-4 → CREATED_BY → OpenAI
  | 'USES'          // 使用：RAG → USES → Vector Embedding
  | 'COMPETES'      // 竞争：Claude → COMPETES → GPT-4
  | 'MENTIONED_IN'  // 被提及：Entity → MENTIONED_IN → Article
  | 'DEPENDS_ON'    // 依赖：A → DEPENDS_ON → B
  | 'EVOLVED_FROM'; // 演进：GPT-4 → EVOLVED_FROM → GPT-3
```

#### 4.2.5 新增模块

**server/graph/extractor.js**
```javascript
// 从文章摘要中抽取实体和关系
// 使用 Claude Haiku API
// 增量更新图谱
```

**server/graph/query.js**
```javascript
// 图谱查询接口
// 支持：实体查找、关系遍历、路径发现
// 示例："Anthropic 最近做了什么？"
```

**api/graph.js** (Vercel Serverless)
```javascript
// GET /api/graph/entity?id=ENT_001
// GET /api/graph/relations?entity=ENT_001&type=USES
// POST /api/graph/query (复杂查询)
```

#### 4.2.6 前端组件

**site/components/KnowledgeGraph.vue**
- 交互式关系图（D3.js Force Layout）
- 实体详情面板
- 时间线视图

### 4.3 Phase 3: AI Agent 层 (持续迭代)

#### 4.3.1 目标
构建面向应用场景的智能助手

#### 4.3.2 应用场景

**场景1: 技术决策助手**
```
用户问："我想给 App 加 AI 功能，用 RAG 还是 Fine-tuning？"

处理流程：
1. 向量检索：RAG 相关文章 + Fine-tuning 相关文章
2. 图谱查询：两者的优缺点对比关系
3. LLM 总结：基于检索结果生成对比分析
4. 输出：结构化答案 + 引用来源
```

**场景2: 技术趋势分析**
```
用户问："2025 年 AI Agent 领域有什么变化？"

处理流程：
1. 时间线检索：2025 年所有 Agent 相关文章
2. 实体聚合：关键事件、产品发布
3. 趋势分析：热度变化曲线
4. 输出：时间线报告 + 关键文章
```

**场景3: 研究报告生成**
```
用户输入："帮我写一篇关于 MCP 协议的技术调研"

处理流程：
1. 检索所有 MCP 相关存档
2. 提取核心观点、技术要点
3. 生成结构化报告（背景、原理、应用、对比）
4. 输出：带引用的 Markdown 报告
```

#### 4.3.3 新增模块

**api/ask.js** (Vercel Serverless)
```javascript
// POST /api/ask
// Body: { question, context, format }
// Response: { answer, sources, confidence }
```

**server/agent/decision-helper.js**
**server/agent/trend-analyzer.js**
**server/agent/report-generator.js**

---

## 5. 成本估算

### 5.1 一次性成本（现有文章处理）

假设现有 1000 篇文章：

| 项目 | 单价 | 数量 | 总成本 |
|------|------|------|--------|
| Embedding (OpenAI) | $0.02/1M tokens | ~100M tokens | ~$2 |
| 实体抽取 (Claude Haiku) | $0.001/文章 | 1000 篇 | ~$1 |
| **总计** | | | **~$3** |

### 5.2 增量成本（每2小时更新）

假设每次更新 10 篇新文章：

| 项目 | 单价 | 数量 | 单次成本 |
|------|------|------|----------|
| Embedding | $0.02/1M tokens | ~1M tokens | ~$0.02 |
| 实体抽取 | $0.001/文章 | 10 篇 | ~$0.01 |
| **单次总计** | | | **~$0.03** |

每月（360次更新）：~$10

### 5.3 基础设施成本

| 组件 | 方案 | 成本 |
|------|------|------|
| 向量存储 | SQLite-VSS | 免费 |
| 图谱存储 | JSON 文件 | 免费 |
| 部署 | Vercel + GitHub Pages | 免费 |
| **总计** | | **免费** |

---

## 6. 实施路线图

### Phase 1: 语义检索层 (2周)

**Week 1: 向量化基础设施**
- [ ] 集成 SQLite-VSS 到项目
- [ ] 实现 embedding-processor.js
- [ ] 批量处理现有文章（1000篇）
- [ ] 增量更新管道（集成到 archiver.js）

**Week 2: 搜索能力上线**
- [ ] 实现 /api/search 接口
- [ ] 开发 SemanticSearch.vue 组件
- [ ] 实现 Hybrid 搜索（向量 + 关键词）
- [ ] 前端集成搜索功能

**产出**: 可通过自然语言搜索文章

### Phase 2: 知识图谱层 (3-4周)

**Week 3-4: 实体抽取**
- [ ] 设计 Entity/Relation Schema
- [ ] 实现 entity-extractor.js（Claude Haiku）
- [ ] 批量处理现有文章抽取实体
- [ ] 人工审核高质量实体

**Week 5-6: 图谱可视化**
- [ ] 实现 /api/graph 接口
- [ ] 开发 KnowledgeGraph.vue 组件（D3.js）
- [ ] 实体详情页（关联文章时间线）
- [ ] 前端集成图谱浏览

**产出**: 可浏览技术概念关系网络

### Phase 3: AI Agent 层 (持续)

**持续迭代**
- [ ] 实现 /api/ask RAG 问答接口
- [ ] 开发技术决策助手
- [ ] 开发趋势分析引擎
- [ ] 开发研究报告生成器

**产出**: 可向知识库提问并获得智能回答

---

## 7. 风险与建议

### 7.1 技术风险

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| API 成本超支 | 中 | 使用低成本模型，设置预算上限 |
| 向量检索性能 | 低 | SQLite-VSS 支持百万级向量 |
| 实体抽取准确性 | 中 | 人工审核 + 置信度阈值 |

### 7.2 数据风险

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| 数据文件过大 | 中 | 定期归档旧数据，分层存储 |
| Git 仓库膨胀 | 低 | 向量存 SQLite，不提交 Git |
| 数据丢失 | 低 | Git 版本控制 + 定期备份 |

### 7.3 建议

1. **先做 Embedding + 语义检索**——这是立竿见影的能力提升
2. **图谱可以慢慢积累**——随着数据增长自然形成价值
3. **保持"静态优先"哲学**——向量和图谱都可以是文件，Git 版本控制
4. **关注成本控制**——使用 Haiku 而非 GPT-4 做实体抽取

---

## 8. 附录

### 8.1 相关文档

- BestBlogs RSS 文档: https://github.com/ginobefun/BestBlogs/blob/main/BestBlogs_RSS_Doc.md
- BestBlogs OpenAPI 文档: https://github.com/ginobefun/BestBlogs/blob/main/BestBlogs_OpenAPI_Doc.md

### 8.2 参考技术

- SQLite-VSS: https://github.com/asg017/sqlite-vss
- OpenAI Embeddings: https://platform.openai.com/docs/guides/embeddings
- Claude API: https://docs.anthropic.com/
- D3.js: https://d3js.org/

### 8.3 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| Beta | 2025-01-31 | 初始版本，融合双方案 |

---

**文档维护**: 本文档随项目迭代更新，最新版本请查看 Git 历史。
