const assert = require('assert')

const { slimIndexItem, slimLinksJson } = require('../link-slimmer')

function sortKeys(obj) {
  return Object.keys(obj).sort()
}

// Test: slimIndexItem keeps only allowlisted fields
{
  const input = {
    id: 'RAW_123',
    title: 'Hello',
    link: 'https://example.com',
    date: '2026-02-01 12:00:00',
    archive_path: 'data/articles/2026/02/RAW_123.json',
    topicTag: 'ai-llm',
    category: 'Artificial_Intelligence',
    score: 92,
    readTime: 8,
    sourceName: 'Example',
    resourceType: 'ARTICLE',
    domain: 'example.com',
    summary: 'should drop',
    tags: ['x'],
    extra: 'drop'
  }

  const expected = {
    id: 'RAW_123',
    title: 'Hello',
    link: 'https://example.com',
    date: '2026-02-01 12:00:00',
    archive_path: 'data/articles/2026/02/RAW_123.json',
    topicTag: 'ai-llm',
    category: 'Artificial_Intelligence',
    score: 92,
    readTime: 8,
    sourceName: 'Example',
    resourceType: 'ARTICLE',
    domain: 'example.com'
  }

  const actual = slimIndexItem(input)
  assert.deepStrictEqual(actual, expected)
  assert.deepStrictEqual(sortKeys(actual), sortKeys(expected))
}

// Test: slimLinksJson transforms items per group
{
  const input = [
    {
      title: 'AI 精选',
      items: [
        { id: '1', title: 'A', link: 'L', date: 'D', summary: 'S' }
      ]
    }
  ]

  const actual = slimLinksJson(input)
  assert.strictEqual(actual.length, 1)
  assert.strictEqual(actual[0].title, 'AI 精选')
  assert.strictEqual(actual[0].items.length, 1)
  assert.ok(!('summary' in actual[0].items[0]))
}

console.log('link-slimmer tests passed')
