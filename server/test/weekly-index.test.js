const assert = require('assert')

const { buildWeeklyIndex } = require('../weekly-index')

// Week bucketing: items in same ISO week go to same key
{
  const linksJson = [
    {
      title: 'AI 精选',
      items: [
        { id: 'a', title: 'A', link: 'L1', date: '2026-01-27 10:00:00', summary: 's1' },
        { id: 'b', title: 'B', link: 'L2', date: '2026-01-29 12:00:00', summary: 's2' }
      ]
    },
    {
      title: '编程 精选',
      items: [
        { id: 'c', title: 'C', link: 'L3', date: '2026-02-03 09:00:00', summary: 's3' }
      ]
    }
  ]

  const { index } = buildWeeklyIndex(linksJson)
  assert.ok(index['2026-W05'])
  assert.strictEqual(index['2026-W05'].length, 2)
  assert.ok(index['2026-W06'])
  assert.strictEqual(index['2026-W06'].length, 1)
}

// Slim fields for weekly index
{
  const linksJson = [
    {
      title: 'AI 精选',
      items: [
        {
          id: 'a',
          title: 'A',
          link: 'L1',
          date: '2026-01-27 10:00:00',
          summary: 's1',
          oneSentenceSummary: 'os',
          archive_path: 'data/articles/2026/01/a.json',
          topicTag: 'ai-llm',
          category: 'Artificial_Intelligence',
          sourceName: 'X',
          resourceType: 'ARTICLE',
          readTime: 5,
          score: 90,
          extra: 'drop'
        }
      ]
    }
  ]

  const { index } = buildWeeklyIndex(linksJson)
  const item = index['2026-W05'][0]
  assert.ok(!('extra' in item))
  assert.ok('summary' in item)
  assert.strictEqual(item.title, 'A')
  assert.strictEqual(item.topicTag, 'ai-llm')
}

console.log('weekly-index tests passed')
