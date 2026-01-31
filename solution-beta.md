# Alchemy 知识炼金平台 - 解决方案文档

**版本**: Beta  
**创建时间**: 2025-01-31  
**最后更新**: 2025-01-31  
**状态**: MVP 设计阶段

---

## 1. 项目定位与核心洞察

### 1.1 现状分析

Alchemy（数据炼金平台）目前是一个基于 BestBlogs 的 RSS 聚合与内容归档系统：

- **已有能力**: 自动抓取、归档、生成静态站点
- **数据资产**: 高质量技术文章（含 AI 摘要、评分、标签）
- **技术栈**: Node.js + Nuxt 4 + GitHub Actions + Vercel
- **存储**: gh-pages 分支作为数据存储分支

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

### 1.4 核心使用场景（优先级排序）

**场景一：AI 编程案例库（最高优先级）**
- 构建含方法论、心得、总结的案例库
- AI 编程时并行查询 Context7 + Alchemy 案例库
- 获得高质量回答和灵感启发，突破原有套路

**场景二：研究报告生成**
- 具体引用减少幻觉
- 基于归档文章生成带来源的技术调研

**场景三：个人知识管理**
- 记录不同体系的方法论、心得
- 跨文章关联，形成个人知识网络

---

## 2. MVP 阶段简化架构

### 2.1 架构原则

基于个人维护、基础设施约束，MVP 遵循：
- **静态优先**: 所有数据可导出为 JSON/SQLite
- **渐进增强**: 先跑通核心流程，再优化体验
- **成本可控**: 优先使用免费/低成本方案
- **单兵作战**: 一人可维护，自动化程度高

### 2.2 数据规模预期

- **当前**: ~1000 篇文章，links.json ~300KB
- **增长**: ~100 篇/天（通过评分/关键词过滤控制）
- **存储**: gh-pages 分支（GitHub 建议 <1GB）

### 2.3 三层 MVP 架构

```
┌─────────────────────────────────────────────────────────────┐
│                    第三层：应用层（Phase 3）                    │
│                    (个人 AI 助手接口)                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ 案例库查询   │  │ 研究报告生成 │  │ 编程助手 API        │  │
│  │ /api/cases  │  │ /api/report │  │ /api/assistant      │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↑
┌─────────────────────────────────────────────────────────────┐
│                    第二层：索引层（Phase 2）                    │
│              (向量检索 + 领域分区)                             │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              search.sqlite                          │   │
│  │  • 向量索引 (title + summary + chunks)              │   │
│  │  • 全文索引 (content)                               │   │
│  │  • 元数据过滤 (domain, score, date)                 │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  领域分区（逻辑分区，非物理）:                               │
│  • ai (人工智能)                                           │
│  • frontend (前端技术)                                     │
│  • backend (后端架构)                                      │
│  • devops (运维/DevOps)                                    │
│  • product (产品/商业)                                     │
└─────────────────────────────────────────────────────────────┘
                              ↑
┌─────────────────────────────────────────────────────────────┐
│                    第一层：存储层（Phase 1）                    │
│              (gh-pages 分支数据存储)                          │
│                                                             │
│  data/                                                      │
│  ├── articles/                                              │
│  │   └── {domain}/           # 按领域分区（新增）             │
│  │       └── {YYYY}/{MM}/{id}.json                          │
│  ├── index/                                                 │
│  │   ├── links.json          # 主索引（精简）                │
│  │   ├── links.by-domain.json # 领域分区索引                 │
│  │   └── search.sqlite       # 向量+全文检索（新增）          │
│  ├── corpus/                                                │
│  │   ├── cases.jsonl         # 案例库（MVP核心）             │
│  │   └── qa.jsonl            # 问答对（可选）                │
│  └── personal/               # 个人数据（独立）              │
│      ├── notes.json          # 个人笔记                      │
│      └── highlights.json     # 高亮标注                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. 数据架构详细设计

### 3.1 文章归档 (articles/{domain}/{YYYY}/{MM}/{id}.json)

```json
{
  "// ===== 基础数据（BestBlogs） =====": "",
  "id": "RAW_xxx",
  "title": "文章标题",
  "url": "原文链接",
  "sourceName": "来源名称",
  "publishDate": "2025-01-15",
  "score": 92,
  "category": "Artificial_Intelligence",
  "tags": ["AI", "RAG", "技术架构"],
  "aiSummary": "AI生成摘要",
  "mainPoints": ["要点1", "要点2"],
  "content": "清洗后的HTML/文本",
  "wordCount": 2500,
  "readTime": 9,
  
  "// ===== 领域分类（MVP新增） =====": "",
  "domain": "ai",
  "domainConfidence": 0.95,
  
  "// ===== 案例提取（Phase 2新增） =====": "",
  "caseExtracted": true,
  "caseId": "CASE_001",
  
  "// ===== 元信息 =====": "",
  "archivedAt": "2025-01-15T08:00:00Z",
  "updatedAt": "2025-01-15T08:00:00Z",
  "version": 1
}
```

### 3.2 领域分区定义

```json
// data/domains.json
{
  "domains": [
    {
      "id": "ai",
      "name": "人工智能",
      "keywords": ["AI", "LLM", "机器学习", "深度学习", "神经网络", "GPT", "Claude"],
      "categories": ["Artificial_Intelligence"],
      "articleCount": 450
    },
    {
      "id": "frontend",
      "name": "前端技术",
      "keywords": ["React", "Vue", "Angular", "CSS", "JavaScript", "TypeScript", "前端"],
      "categories": ["Programming_Technology"],
      "articleCount": 320
    },
    {
      "id": "backend",
      "name": "后端架构",
      "keywords": ["后端", "架构", "微服务", "API", "数据库", "缓存", "分布式"],
      "categories": ["Programming_Technology"],
      "articleCount": 280
    },
    {
      "id": "devops",
      "name": "运维/DevOps",
      "keywords": ["Docker", "K8s", "CI/CD", "DevOps", "监控", "日志"],
      "categories": ["Programming_Technology"],
      "articleCount": 150
    },
    {
      "id": "product",
      "name": "产品/商业",
      "keywords": ["产品", "运营", "增长", "商业", "创业", "SaaS"],
      "categories": ["Product_Development", "Business_Tech"],
      "articleCount": 200
    }
  ]
}
```

### 3.3 案例库 Schema (corpus/cases.jsonl)

```json
{
  "id": "CASE_001",
  "title": "多语言模型训练资源优化案例",
  "domain": "ai",
  "problem": "多语言模型训练时，400+ 语言的资源分配不均衡",
  "context": "计算资源有限，需要在模型规模和语言覆盖之间权衡",
  "solution": "使用 ATLAS 框架定义语言混合比例的缩放法则",
  "approach": [
    "进行 774 次受控训练运行",
    "测量不同语言混合比例的效果",
    "建立数学模型描述缩放关系"
  ],
  "result": "成功建立了可预测的多语言缩放法则",
  "metrics": {
    "languages": 400,
    "experiments": 774
  },
  "technologies": ["LLM", "多语言NLP", "缩放法则"],
  "methodology": ["实验设计", "数据分析", "数学建模"],
  "insights": ["低资源语言需要特殊处理", "语言家族聚类可提升效率"],
  "sources": ["RAW_xxx"],
  "extractedAt": "2025-01-31T10:00:00Z",
  "qualityScore": 92
}
```

### 3.4 索引文件 (index/links.json)

```json
[
  {
    "id": "RAW_xxx",
    "title": "文章标题",
    "date": "2025-01-15",
    "domain": "ai",
    "score": 92,
    "tags": ["LLM", "训练"],
    "summary": "一句话摘要",
    "archivePath": "articles/ai/2025/01/RAW_xxx.json",
    "hasCase": true,
    "caseId": "CASE_001",
    "personal": {
      "status": "read",
      "rating": 5,
      "starred": true
    }
  }
]
```

---

## 4. MVP 实施路径

### Phase 1: 基础存储优化（1-2周）

**目标**: 建立按领域分区的存储结构

| 任务 | 描述 | 文件 | 优先级 |
|------|------|------|--------|
| P1-1 | 实现领域自动分类 | server/domain-classifier.js | P0 |
| P1-2 | 重构 articles/ 目录结构 | 按 domain/YYYY/MM/ 组织 | P0 |
| P1-3 | 更新 archiver.js 支持分区 | server/archiver.js | P0 |
| P1-4 | 生成领域分区索引 | index/links.by-domain.json | P1 |

**领域分类算法**（简单规则版）：
```javascript
function classifyDomain(article) {
  const text = article.title + ' ' + article.tags.join(' ')
  
  for (const domain of domains) {
    const matchCount = domain.keywords.filter(k => 
      text.toLowerCase().includes(k.toLowerCase())
    ).length
    if (matchCount >= 2) return domain.id
  }
  
  // Fallback: 使用 BestBlogs category
  return categoryToDomain[article.category] || 'general'
}
```

### Phase 2: 向量检索（2-3周）

**目标**: 实现语义搜索能力

| 任务 | 描述 | 文件 | 优先级 |
|------|------|------|--------|
| P2-1 | 集成 SQLite-vec | server/embedding.js | P0 |
| P2-2 | Embedding 生成管道 | 批量处理现有文章 | P0 |
| P2-3 | 语义搜索 API | /api/search | P0 |
| P2-4 | 前端搜索界面 | components/Search.vue | P1 |
| P2-5 | 案例提取脚本 | server/case-extractor.js | P1 |

**技术选型**:
- Embedding: OpenAI text-embedding-3-small ($0.02/1M tokens)
- 向量存储: SQLite-vec（单文件，Git 友好）
- 案例提取: Claude Haiku ($0.001/文章)

### Phase 3: AI 助手接口（2-3周）

**目标**: 对外提供案例库查询接口

| 任务 | 描述 | 文件 | 优先级 |
|------|------|------|--------|
| P3-1 | 案例库查询 API | /api/cases | P0 |
| P3-2 | 研究报告生成 | /api/report | P1 |
| P3-3 | MCP 协议支持 | /api/mcp | P1 |
| P3-4 | 编程助手接口 | /api/assistant | P2 |

---

## 5. 成本估算

### 5.1 一次性成本

| 项目 | 单价 | 数量 | 费用 |
|------|------|------|------|
| Embedding 生成 | $0.02/1M tokens | ~2M tokens | ~$0.04 |
| 案例提取 | $0.001/文章 | 1000 篇 | ~$1 |
| **合计** | | | **~$1** |

### 5.2 月度成本（~3000篇/月）

| 项目 | 月费用 |
|------|--------|
| Embedding | ~$0.12 |
| 案例提取 | ~$3 |
| **合计** | **~$3.1** |

### 5.3 基础设施

| 项目 | 费用 |
|------|------|
| GitHub Pages | 免费 |
| Vercel Hobby | 免费 |
| **合计** | **免费** |

---

## 6. 与 Context7 的集成设想

### 6.1 定位差异

| 维度 | Context7 | Alchemy 案例库 |
|------|----------|----------------|
| 内容 | 官方文档、API | 实战经验、案例 |
| 形式 | 参考手册 | 问题-方案-结果 |
| 更新 | 实时同步 | 每日批量 |
| 查询 | 精确匹配 | 语义相似 |

### 6.2 并行查询示例

```javascript
// AI 编程助手查询流程
async function queryWithContext(question) {
  const [context7Result, alchemyResult] = await Promise.all([
    // 查询官方文档
    context7.query({ question, libraries: ['react', 'node'] }),
    // 查询案例库
    fetch('/api/cases', {
      method: 'POST',
      body: JSON.stringify({ question, domain: 'frontend' })
    })
  ])
  
  return {
    docs: context7Result,      // 官方用法
    cases: alchemyResult,      // 实战经验
    combined: mergeResults(context7Result, alchemyResult)
  }
}
```

---

## 7. 风险与应对

| 风险 | 影响 | 应对 |
|------|------|------|
| gh-pages 大小限制 | 中 | 定期归档旧数据到 releases |
| SQLite-vec 性能 | 低 | 预留迁移到 Pinecone 的路径 |
| 领域分类不准确 | 中 | 人工审核 + 持续优化规则 |
| API 成本超支 | 低 | 设置评分阈值，低分文章不处理 |

---

## 8. 附录

### 8.1 版本历史

| 版本 | 日期 | 变更 |
|------|------|------|
| Beta | 2025-01-31 | MVP 简化版，聚焦案例库 |

### 8.2 参考文档

- BestBlogs RSS: https://github.com/ginobefun/BestBlogs/blob/main/BestBlogs_RSS_Doc.md
- BestBlogs OpenAPI: https://github.com/ginobefun/BestBlogs/blob/main/BestBlogs_OpenAPI_Doc.md
- SQLite-vec: https://github.com/asg017/sqlite-vec

---

**下一步**: 确定 Phase 1 开始时间，我可以协助实现领域分类器。
