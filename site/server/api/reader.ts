import { JSDOM } from 'jsdom'
import { Readability } from '@mozilla/readability'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const url = query.url as string

  if (!url) {
    throw createError({
      statusCode: 400,
      statusMessage: 'URL is required',
    })
  }

  try {
    const html = await $fetch<string>(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    })

    const dom = new JSDOM(html, { url })
    const reader = new Readability(dom.window.document)
    const article = reader.parse()

    return {
      title: article?.title,
      content: article?.content,
      excerpt: article?.excerpt,
      siteName: article?.siteName,
      byline: article?.byline
    }
  } catch (error) {
    console.error('Failed to fetch or parse article:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to process article content',
    })
  }
})
