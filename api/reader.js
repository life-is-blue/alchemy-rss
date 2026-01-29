const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  // 开启 Vercel CDN 缓存：s-maxage=86400 (CDN 缓存 1 天), stale-while-revalidate=604800 (过期后 1 周内仍可服务旧数据)
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');

  const apiKey = process.env.BESTBLOGS_API_KEY;
  
  // 1. 尝试 BestBlogs API 路径
  if (apiKey && url.includes('bestblogs.dev')) {
    try {
      // 从 URL 提取 ID (例如: https://www.bestblogs.dev/article/1628d64a -> 1628d64a)
      // 同时也支持原始 ID 格式如果存在
      const idMatch = url.match(/\/article\/([a-zA-Z0-9]+)/) || url.match(/\/status\/([0-9]+)/);
      
      if (idMatch) {
        const resourceId = idMatch[1];
        // 有些 ID 是纯数字 (status)，有些是哈希 (article)。API 可能需要特定前缀？
        // 根据文档，article id 通常是 "RAW_..." 或直接使用。先尝试直接用 ID。
        // 为了稳健，我们先尝试 meta 接口，因为它能确认 ID 是否有效
        
        // 由于我们拿到的可能是短 ID，而 API 需要长 ID (如 RAW_...),
        // 或者反过来。如果 URL 里的 ID 能直接用最好。
        // 假设 URL 里的 ID 可以直接用于 API (或者我们需要先 search 一下？)
        // 既然文档没说 URL ID 和 API ID 的映射，我们先假设 URL 里的 ID 就是 API ID 或者可以通过 search 搜到。
        // 但为了简单，先保留"正则暴力破解"作为兜底，这里先尝试用 scraping 模式，
        // 因为我们暂时无法确定 URL ID 到 API ID 的映射关系 (除非 URL 里的 ID 就是 API ID)。
        
        // 修正策略：BestBlogs 的 URL ID (如 1628d64a) 可能不是 API 需要的 ID (如 RAW_xxxx)。
        // 我们可以尝试用 list 接口搜索 url 来反查 ID。
        
        const searchResp = await fetch('https://api.bestblogs.dev/openapi/v1/resource/list', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': apiKey
          },
          body: JSON.stringify({
            pageSize: 1,
            keyword: url // 尝试用 URL 搜索
          })
        });
        
        const searchData = await searchResp.json();
        
        if (searchData.success && searchData.data.dataList.length > 0) {
          const meta = searchData.data.dataList[0].resourceMeta || searchData.data.dataList[0];
          const realId = meta.id;
          
          // 拿到 Real ID 后，获取全文
          const contentResp = await fetch(`https://api.bestblogs.dev/openapi/v1/resource/content?id=${realId}`, {
             headers: { 'X-API-KEY': apiKey }
          });
          const contentData = await contentResp.json();
          
          if (contentData.success && contentData.data) {
             return res.status(200).json({
               title: meta.title,
               content: contentData.data.displayDocument || meta.summary, // 优先用清洗后的 HTML
               excerpt: meta.summary,
               siteName: 'BestBlogs',
               byline: (meta.authors || []).join(', ')
             });
          }
        }
      }
    } catch (e) {
      console.warn('BestBlogs API failed, falling back to scraper:', e);
    }
  }

  // 2. 通用爬虫路径 (Fallback)
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const html = await response.text();

    // --- BestBlogs.dev 专用正则兜底 (针对 Next.js Hydration Data) ---
    if (url.includes('bestblogs.dev')) {
      const textMatches = html.match(///"text":"(.*?)(?<!\\)"///g);
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
            title: 'Alchemy 精选 (API Fallback)',
            content: `<div style="font-family: sans-serif; line-height: 1.8; color: #333;">${content}</div>`,
            siteName: 'BestBlogs'
          });
        }
      }
    }
    // ---------------------------------

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
    console.error('Reader API Error:', error);
    res.status(500).json({ error: 'Failed to process article content' });
  }
};