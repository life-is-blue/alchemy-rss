# Alchemy 前端对接协议（v1）

> 面向新前端项目的对接规范。无需兼容历史数据格式，仅以当前结构为准。

## 1. 访问入口

### 1.1 主索引
`GET /data/links.json`

返回按源分组的索引列表，前端从此入口构建列表、筛选与搜索。

### 1.2 源配置
`GET /data/rss.json`

用于构建内容类型、分类与来源元信息（如 `type`、`category`）。

### 1.3 归档全文
`GET /{archive_path}`

当索引项存在 `archive_path` 时，优先从该路径读取归档全文。

### 1.4 动态读取（兜底）
`GET /api/reader?url={原文链接}`

当不存在 `archive_path` 时使用此接口读取并解析原文内容。

---

## 2. 数据结构

### 2.1 索引结构（links.json）

```json
[
  {
    "title": "AI 精选",
    "items": [
      {
        "id": "RAW_xxx",
        "title": "文章标题",
        "link": "https://example.com/article",
        "date": "2026-01-29 08:00:00",
        "oneSentenceSummary": "一句话摘要",
        "summary": "详细摘要",
        "tags": ["上游原始标签"],
        "topicTag": "ai-llm",
        "archive_path": "data/articles/2026/01/RAW_xxx.json",
        "readTime": 9,
        "score": 92,
        "wordCount": 2076,
        "domain": "example.com",
        "category": "Artificial_Intelligence",
        "aiSubCategory": "NEWS",
        "mainDomain": "Artificial_Intelligence",
        "sourceId": "SOURCE_xxx",
        "sourceName": "来源名称",
        "resourceType": "ARTICLE",
        "language": "zh_CN",
        "publishTimeStamp": 1750000000000,
        "publishDateStr": "01-29",
        "publishDateTimeStr": "2026-01-29 08:00:00",
        "qualified": true
      }
    ]
  }
]
```

字段说明（核心）
- `category`：上游主分类（稳定维度）
- `tags`：上游原始标签（不做聚合）
- `topicTag`：本地主题标签（用于标签页/主题聚合）
- `archive_path`：归档全文路径（优先读取）
- `resourceType`：`ARTICLE | VIDEO | PODCAST | TWITTER | rss`

### 2.2 源配置（rss.json）

```json
[
  {
    "title": "AI 精选",
    "type": "ARTICLE",
    "category": "Artificial_Intelligence",
    "qualifiedFilter": "true",
    "sortType": "score_desc",
    "timeFilter": "1d",
    "limit": 30
  }
]
```

字段说明（核心）
- `title`：源展示标题
- `type`：内容类型
- `category`：上游主分类

### 2.3 归档全文（archive_path 指向）

```json
{
  "id": "RAW_xxx",
  "title": "文章标题",
  "url": "https://example.com/article",
  "date": "2026-01-29 08:00:00",
  "author": "作者",
  "siteName": "来源名称",
  "content": "<html>...</html>",
  "oneSentenceSummary": "一句话摘要",
  "summary": "详细摘要",
  "aiSummary": "一句话摘要（兼容字段）",
  "mainPoints": [{ "point": "要点", "explanation": "解释" }],
  "keyQuotes": ["引用 1", "引用 2"],
  "tags": ["上游原始标签"],
  "topicTag": "ai-llm",
  "readTime": 9,
  "score": 92,
  "wordCount": 2076,
  "domain": "example.com",
  "category": "Artificial_Intelligence",
  "aiSubCategory": "NEWS",
  "mainDomain": "Artificial_Intelligence",
  "sourceId": "SOURCE_xxx",
  "sourceName": "来源名称",
  "resourceType": "ARTICLE",
  "language": "zh_CN",
  "publishTimeStamp": 1750000000000,
  "publishDateStr": "01-29",
  "publishDateTimeStr": "2026-01-29 08:00:00"
}
```

---

## 3. 使用建议

### 3.1 展示与筛选
- 一级分类：使用 `category`
- 标签/主题：使用 `topicTag`
- 原始标签：`tags` 仅用于展示或全文检索补充

### 3.2 阅读优先级
1. 若存在 `archive_path` → 直接读取归档
2. 否则调用 `/api/reader?url=...`

### 3.3 搜索策略
- 基础搜索：在 `title` 与 `summary` 上做关键词检索
- 高级搜索（未来）：结合 `topicTag` 与向量检索

---

## 4. 错误与异常

`/api/reader` 失败时返回 JSON：
```json
{ "error": "Failed to process article content" }
```

前端建议降级为“打开原文链接”。
