const ALLOWLIST = [
  'id',
  'title',
  'link',
  'date',
  'archive_path',
  'topicTag',
  'category',
  'score',
  'readTime',
  'sourceName',
  'resourceType',
  'domain'
]

function slimIndexItem(item) {
  if (!item || typeof item !== 'object') return item
  const slimmed = {}
  for (const key of ALLOWLIST) {
    if (item[key] !== undefined) {
      slimmed[key] = item[key]
    }
  }
  return slimmed
}

function slimLinksJson(linksJson) {
  if (!Array.isArray(linksJson)) return linksJson
  return linksJson.map(group => ({
    ...group,
    items: Array.isArray(group.items) ? group.items.map(slimIndexItem) : []
  }))
}

module.exports = { slimIndexItem, slimLinksJson }
