/**
 * API 测试脚本
 * 用法: BESTBLOGS_API_KEY=xxx node test-api.js
 */

const apiFetcher = require('./api-fetcher')

async function test() {
  console.log('=== BestBlogs API 测试 ===\n')

  // 检查 API Key
  const apiKey = apiFetcher.getApiKey()
  if (!apiKey) {
    console.error('❌ BESTBLOGS_API_KEY 未配置')
    console.log('用法: BESTBLOGS_API_KEY=your_key node test-api.js')
    process.exit(1)
  }
  console.log(`✅ API Key: ${apiKey.substring(0, 10)}...`)

  // 测试获取资源列表
  console.log('\n--- 测试 fetchResourceList ---')
  try {
    const items = await apiFetcher.fetchResourceList({
      category: 'Artificial_Intelligence',
      sortType: 'score_desc',
      timeFilter: '3d',
      qualifiedFilter: 'true',
      pageSize: 5
    })
    console.log(`✅ 获取到 ${items.length} 篇文章`)
    if (items.length > 0) {
      console.log('\n第一篇文章:')
      console.log(`  ID: ${items[0].id}`)
      console.log(`  标题: ${items[0].title}`)
      console.log(`  评分: ${items[0].score}`)
      console.log(`  URL: ${items[0].url}`)
    }
  } catch (e) {
    console.error(`❌ fetchResourceList 失败: ${e.message}`)
  }

  // 测试获取完整资源
  console.log('\n--- 测试 fetchFullResource ---')
  try {
    const items = await apiFetcher.fetchResourceList({
      pageSize: 1,
      qualifiedFilter: 'true'
    })
    if (items.length > 0) {
      const id = items[0].id
      console.log(`正在获取文章详情: ${id}`)
      const full = await apiFetcher.fetchFullResource(id)
      if (full) {
        console.log(`✅ 获取成功`)
        console.log(`  标题: ${full.title}`)
        console.log(`  摘要: ${full.aiSummary?.substring(0, 50)}...`)
        console.log(`  内容长度: ${full.content?.length || 0} 字符`)
        console.log(`  标签: ${full.tags?.join(', ')}`)
      } else {
        console.log('❌ 获取详情失败')
      }
    }
  } catch (e) {
    console.error(`❌ fetchFullResource 失败: ${e.message}`)
  }

  console.log('\n=== 测试完成 ===')
}

// 加载 .env
require('dotenv').config({ multiline: true })

test().catch(console.error)
