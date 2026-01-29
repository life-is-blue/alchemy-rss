import { readFileSync, existsSync } from 'fs'
import { resolve, join } from 'path'
import { defineEventHandler, setHeader, createError } from 'h3'

export default defineEventHandler((event) => {
  const pathParam = event.context.params.path
  
  // 安全检查：防止目录遍历
  if (pathParam.includes('..')) {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  // 探测物理路径
  const possibleRoots = [
    resolve(process.cwd(), '../data'), // Dev (site/ -> data/)
    resolve(process.cwd(), 'data'),    // Prod (maybe)
    resolve(process.cwd(), '../../data')
  ]

  let filePath = null
  for (const root of possibleRoots) {
    const p = join(root, pathParam)
    if (existsSync(p)) {
      filePath = p
      break
    }
  }

  if (!filePath) {
    throw createError({ statusCode: 404, statusMessage: 'File not found' })
  }

  // 设置正确的 Content-Type
  if (filePath.endsWith('.json')) {
    setHeader(event, 'Content-Type', 'application/json')
  }

  return readFileSync(filePath)
})
