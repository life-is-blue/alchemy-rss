
/**
 * RSS Crawler Script - Alchemy Protocol v1
 * Generates:
 * 1. src/assets/data/links.json (Index)
 * 2. src/assets/data/archives/<id>.json (Full Content)
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { XMLParser } = require('fast-xml-parser');

// Config
const CONFIG_FILE = path.join(__dirname, '../feeds.config.json');
const DATA_DIR = path.join(__dirname, '../src/assets/data');
const ARCHIVE_DIR = path.join(DATA_DIR, 'archives');
const LINKS_FILE = path.join(DATA_DIR, 'links.json');

// Ensure dirs
if (!fs.existsSync(ARCHIVE_DIR)) {
  fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
}

function generateId(url) {
  // Generate a deterministic short ID from URL
  const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 12);
  return `RAW_${hash}`;
}

async function fetchFeed(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const response = await fetch(url, { 
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AlchemyBot/1.0)' }
    });
    clearTimeout(timeout);
    if (!response.ok) throw new Error(`${response.status}`);
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${url}: ${error.message}`);
    return null;
  }
}

function parseRSS(xmlData, feedConfig) {
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });
  const jsonObj = parser.parse(xmlData);
  let channel = jsonObj.rss?.channel || jsonObj.feed;
  if (!channel) return null;

  const feedTitle = channel.title || 'Unknown Source';
  let items = channel.item || channel.entry || [];
  if (!Array.isArray(items)) items = [items];

  // Process items
  const alchemyItems = [];

  items.slice(0, 30).forEach(item => {
    // 1. Extract Basic Info
    let link = '';
    if (typeof item.link === 'string') link = item.link;
    else if (Array.isArray(item.link)) {
        const alt = item.link.find(l => l['@_rel'] === 'alternate') || item.link[0];
        link = alt['@_href'] || '';
    } else if (item.link?.['@_href']) link = item.link['@_href'];
    
    if (!link) return;

    const title = item.title || 'Untitled';
    const id = generateId(link);
    const pubDate = item.pubDate || item.published || item.updated || new Date().toISOString();
    
    // 2. Extract Content
    let content = '';
    if (item['content:encoded']) content = item['content:encoded'];
    else if (item.content?.['#text']) content = item.content['#text'];
    else if (typeof item.content === 'string') content = item.content;
    else if (item.description) content = item.description;

    const snippet = (content || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').slice(0, 120) + '...';

    // 3. Create Archive File
    const archivePathRelative = `data/archives/${id}.json`; // Web path
    const archiveFile = path.join(ARCHIVE_DIR, `${id}.json`); // Disk path

    const archiveData = {
      id,
      title,
      url: link,
      date: pubDate,
      content: content || snippet, // Fallback to snippet if empty
      summary: snippet,
      sourceName: feedTitle,
      resourceType: 'ARTICLE', // Default
      // Alchemy standard fields
      publishDateTimeStr: pubDate
    };

    fs.writeFileSync(archiveFile, JSON.stringify(archiveData, null, 2));

    // 4. Create Index Item
    alchemyItems.push({
      id,
      title,
      link,
      date: pubDate,
      summary: snippet, // Short summary for index
      archive_path: archivePathRelative,
      category: feedConfig.category,
      resourceType: 'ARTICLE',
      sourceName: feedTitle,
      publishDateTimeStr: pubDate
    });
  });

  return {
    title: feedTitle,
    items: alchemyItems
  };
}

async function main() {
  const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  const allGroups = [];

  console.log(`Starting Alchemy Protocol crawl...`);

  for (const feedConfig of config.feeds) {
    console.log(`Fetching ${feedConfig.url}...`);
    const xml = await fetchFeed(feedConfig.url);
    if (xml) {
      const group = parseRSS(xml, feedConfig);
      if (group && group.items.length > 0) {
        allGroups.push(group);
      }
    }
  }

  fs.writeFileSync(LINKS_FILE, JSON.stringify(allGroups, null, 2));
  console.log(`Done. Index written to ${LINKS_FILE}`);
}

main();
