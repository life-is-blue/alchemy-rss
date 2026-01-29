const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const html = await response.text();

    // --- BestBlogs.dev 专用解密逻辑 ---
    if (url.includes('bestblogs.dev')) {
      // 提取 JSON 中的 text 字段，这是 Next.js 存储正文的地方
      const textMatches = html.match(/"text":"(.*?)(?<!\\)"/g);
      if (textMatches && textMatches.length > 0) {
        const content = textMatches
          .map(m => {
            try {
              // 提取引号内的内容并还原转义
              let t = m.slice(8, -1);
              return t.replace(/\\n/g, '<br/>')
                      .replace(/\\\"/g, '"')
                      .replace(/\\u003c/g, '<')
                      .replace(/\\u003e/g, '>')
                      .replace(/\\u0026/g, '&');
            } catch(e) { return ""; }
          })
          .filter(t => t.length > 40) // 过滤掉短小的标签或噪音
          .join('<br/><br/>');

        if (content.length > 100) {
          return res.status(200).json({
            title: 'Alchemy 精选提炼',
            content: `<div style="font-family: sans-serif; line-height: 1.8; color: #333;">${content}</div>`,
            siteName: 'BestBlogs'
          });
        }
      }
    }
    // ---------------------------------

    // 通用解析逻辑
    const dom = new JSDOM(html, { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    res.status(200).json({
      title: article?.title || '无法获取标题',
      content: article?.content || '<p>抱歉，该站点采用了强力反爬或动态加载技术，目前无法直接阅读正文。请点击左下角“查看原文”跳转阅读。</p>',
      excerpt: article?.excerpt,
      siteName: article?.siteName,
      byline: article?.byline
    });
  } catch (error) {
    console.error('Reader API Error:', error);
    res.status(500).json({ error: 'Failed to process article content' });
  }
};
