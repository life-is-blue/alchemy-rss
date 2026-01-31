const fs = require('fs-extra');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const moment = require('moment');

const API_BASE = 'https://api.bestblogs.dev';

/**
 * 获取 API Key（延迟读取，确保环境变量已加载）
 */
function getApiKey() {
  return process.env.BESTBLOGS_API_KEY;
}

/**
 * 核心归档器：抓取 -> 清洗 -> 存储
 */
class Archiver {
  constructor(dataDir) {
    this.dataDir = dataDir;
    this.articlesDir = path.join(dataDir, 'articles');
    fs.ensureDirSync(this.articlesDir);
  }

  /**
   * 尝试归档一篇文章
   * @param {string} url 文章原始链接
   * @param {string} rssDate 文章发布时间
   * @param {string} [explicitId] 可选：直接传入 ID，跳过 URL 解析
   * @returns {Promise<object|null>} 返回精简的索引元数据，失败返回 null
   */
  async archive(url, rssDate, explicitId = null) {
    const apiKey = getApiKey();
    if (!apiKey) {
      console.warn('⚠️ No API Key, skipping archive for:', url);
      return null;
    }

    // 1. 生成 ID (优先使用显式 ID，否则从 URL 提取)
    const resourceId = explicitId || this.extractId(url);
    if (!resourceId) {
      console.warn('⚠️ Could not extract BestBlogs ID:', url);
      return null; // 非 BestBlogs 文章暂时跳过归档
    }

    // 2. 检查本地是否已存在 (幂等性)
    // 路径策略: data/articles/YYYY/MM/<id>.json
    const date = moment(rssDate);
    const year = date.format('YYYY');
    const month = date.format('MM');
    const relPath = `${year}/${month}/${resourceId}.json`;
    const absPath = path.join(this.articlesDir, relPath);

    if (fs.existsSync(absPath)) {
      // console.log('✅ Article already archived:', resourceId);
      // 即使文件存在，也返回索引数据，确保 links.json 能更新
      const cached = await fs.readJson(absPath);
      return this.buildIndexEntry(cached, resourceId, relPath);
    }

    console.log('📥 Archiving new article:', resourceId);

    // 3. 调用 API 获取数据 (Meta + Content)
    const data = await this.fetchFullData(resourceId);
    if (!data) return null;

    // 4. 写入文件
    await fs.ensureDir(path.dirname(absPath));
    await fs.writeJson(absPath, data, { spaces: 2 });
    console.log('💾 Saved to:', relPath);

    // 5. 返回索引条目
    return this.buildIndexEntry(data, resourceId, relPath);
  }

  extractId(url) {
    // 支持 article, status, video, podcast 等多种资源类型
    const match = url.match(/\/(article|status|video|podcast)\/([a-zA-Z0-9]+)/);
    return match ? match[2] : null;
  }

  async fetchFullData(id) {
    try {
      // 并行请求 Meta 和 Content
      const [metaResp, contentResp] = await Promise.all([
        this.callAPI(`/openapi/v1/resource/meta?id=${id}`, 'GET'),
        this.callAPI(`/openapi/v1/resource/content?id=${id}`, 'GET')
      ]);

      if (!metaResp?.success || !contentResp?.success) {
        console.warn('❌ API Fetch Failed for:', id);
        return null;
      }

      const meta = metaResp.data;
      const content = contentResp.data;

      // 组装完整数据 (这是给 ReaderPanel 用的)
      return {
        id: meta.id,
        title: meta.title,
        url: meta.url,
        date: meta.publishDateTimeStr,
        author: (meta.authors || []).join(', '),
        siteName: meta.sourceName,
        
        // 内容
        content: content.displayDocument, // 核心 HTML
        
        // AI 元数据
        aiSummary: meta.oneSentenceSummary,
        mainPoints: meta.mainPoints,
        tags: meta.tags,
        readTime: meta.readTime,
        score: meta.score,
        wordCount: meta.wordCount,
        
        // 原始元数据 (留底)
        domain: meta.domain,
        category: meta.category
      };
    } catch (e) {
      console.error('❌ Archiver Error:', e);
      return null;
    }
  }

  async callAPI(endpoint, method = 'POST', body) {
    const apiKey = getApiKey();
    try {
      const resp = await fetch(`${API_BASE}${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': apiKey
        },
        body: body ? JSON.stringify(body) : undefined
      });
      return await resp.json();
    } catch (e) {
      return null;
    }
  }

  /**
   * 构建 links.json 需要的轻量级索引
   */
  buildIndexEntry(fullData, id, archivePath) {
    return {
      id: id,
      title: fullData.title,
      link: fullData.url, // 原始链接
      date: fullData.date,
      rssTitle: fullData.siteName, // 保持兼容性
      
      // 新增字段
      archive_path: `data/articles/${archivePath}`, // 前端 fetch 的路径
      ai_summary: fullData.aiSummary, // 列表页直接展示 AI 摘要
      tags: fullData.tags,
      read_time: fullData.readTime
    };
  }
}

module.exports = Archiver;
