
export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing URL parameter' });
  }

  try {
    // 1. Impersonate a real browser to bypass User-Agent blocking (e.g. Bloomberg, Medium)
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    };

    const response = await fetch(url, { headers });
    
    if (!response.ok) {
        // Forward the status text for debugging
        throw new Error(`Upstream Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.text();

    // 2. Powerful Caching Strategy (Stale-While-Revalidate)
    // - Serve cached content instantly (s-maxage=600 -> 10 mins shared cache)
    // - Keep serving "stale" content for up to 1 hour while fetching new data in background
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=3600');
    
    // 3. CORS Headers (Allow your frontend to access this)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    // 4. Force Content-Type to XML so the parser doesn't choke
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    
    res.status(200).send(data);

  } catch (error) {
    console.error(`Proxy Error for ${url}:`, error);
    res.status(500).json({ 
      error: 'Failed to fetch feed', 
      details: error.message 
    });
  }
}
