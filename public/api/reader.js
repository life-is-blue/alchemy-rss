const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// 正则常量
const REGEX_BESTBLOGS_ID = /\/(article|status)\/([a-zA-Z0-9]+)/;
const REGEX_NEXTJS_TEXT = /"text":"(.*?)(?<!\\)"/g;

module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');

  const apiKey = process.env.BESTBLOGS_API_KEY;
  
  // 1. 优先尝试 BestBlogs API
  if (apiKey && url.includes('bestblogs.dev')) {
    try {
      console.log('🔍 [Reader] Trying BestBlogs API for:', url);
      const idMatch = url.match(REGEX_BESTBLOGS_ID);
      const resourceId = idMatch ? idMatch[2] : null;

      if (resourceId) {
        console.log('🚀 [Reader] Attempting direct fetch by ID:', resourceId);
        
        // 路径 A: 优先直连 ID (并发获取 Content 和 Meta)
        const [contentResp, metaResp] = await Promise.all([
          callBestBlogsAPI(`/openapi/v1/resource/content?id=${resourceId}`, apiKey, null, 'GET'),
          callBestBlogsAPI(`/openapi/v1/resource/meta?id=${resourceId}`, apiKey, null, 'GET')
        ]);

        if (contentResp?.success && contentResp.data) {
          console.log('✅ [Reader] Direct fetch success! Length:', contentResp.data.displayDocument?.length);
          const meta = metaResp?.success ? metaResp.data : { id: resourceId };
          return res.status(200).json(buildArticleResponse(contentResp.data, meta));
        }

        // 路径 B: 搜索反查 (兜底)
        console.log('⚠️ [Reader] Direct fetch failed, falling back to Search API...');
        let searchResp = await callBestBlogsAPI('/openapi/v1/resource/list', apiKey, {
          pageSize: 1,
          keyword: resourceId
        });

        if (!searchResp?.success || !searchResp.data?.dataList?.length) {
           searchResp = await callBestBlogsAPI('/openapi/v1/resource/list', apiKey, {
             pageSize: 1,
             keyword: url
           });
        }

        if (searchResp?.success && searchResp.data?.dataList?.length > 0) {
          const item = searchResp.data.dataList[0];
          const meta = item.resourceMeta || item;
          console.log('✅ [Reader] Found ID via Search:', meta.id);

          const retryContentResp = await callBestBlogsAPI(`/openapi/v1/resource/content?id=${meta.id}`, apiKey, null, 'GET');
          if (retryContentResp?.success && retryContentResp.data) {
            return res.status(200).json(buildArticleResponse(retryContentResp.data, meta));
          }
        }
      }
    } catch (e) {
      console.warn('⚠️ [Reader] BestBlogs API logic failed, falling back to scraper', e);
    }
  }

  // 2. 降级到通用爬虫
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const html = await response.text();

    if (url.includes('bestblogs.dev')) {
      const textMatches = html.match(REGEX_NEXTJS_TEXT);
      if (textMatches && textMatches.length > 0) {
        const content = textMatches
          .map(m => {
            try {
              let t = m.slice(8, -1);
              return t.replace(/\\n/g, '<br/>')
                      .replace(/\\\"/g, '"')
                      .replace(/\\u003c/g, '<')
                      .replace(/\\u003e/g, '>')
                      .replace(/\\u0026/g, '&');
            } catch(e) { return ""; }
          })
          .filter(t => t.length > 40)
          .join('<br/><br/>');

        if (content.length > 100) {
          return res.status(200).json({
            title: 'Alchemy 精选 (Regex Fallback)',
            content: `<div style="font-family: sans-serif; line-height: 1.8; color: #333;">${content}</div>`,
            siteName: 'BestBlogs'
          });
        }
      }
    }

    const dom = new JSDOM(html, { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    res.status(200).json({
      title: article?.title || '无法获取标题',
      content: article?.content || '<p>无法抓取该内容，请点击原文链接阅读。</p>',
      excerpt: article?.excerpt,
      siteName: article?.siteName,
      byline: article?.byline
    });
  } catch (error) {
    console.error('❌ [Reader] Scraper Error:', error);
    res.status(500).json({ error: 'Failed to process article content' });
  }
};

function buildArticleResponse(contentData, meta) {
  return {
    title: meta.title || contentData.title || 'Alchemy Refined',
    content: contentData.displayDocument || meta.summary,
    siteName: 'BestBlogs (API)',
    byline: (meta.authors || []).join(', '),
    aiSummary: meta.oneSentenceSummary,
    mainPoints: meta.mainPoints,
    tags: meta.tags,
    readTime: meta.readTime,
    score: meta.score,
    wordCount: meta.wordCount
  };
}

async function callBestBlogsAPI(endpoint, apiKey, body, method = 'POST') {
  try {
    const resp = await fetch(`https://api.bestblogs.dev${endpoint}`, {
      method,
      headers: { 'Content-Type': 'application/json', 'X-API-KEY': apiKey },
      body: method === 'POST' ? JSON.stringify(body) : undefined
    });
    return await resp.json();
  } catch (e) {
    console.error(`❌ [Reader] BestBlogs API Error (${endpoint}):`, e);
    return null;
  }
}