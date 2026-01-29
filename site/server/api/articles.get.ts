import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler((event) => {
  // 路径兼容逻辑：探测根目录的 data/links.json
  const possiblePaths = [
    resolve(process.cwd(), '../data/links.json'),
    resolve(process.cwd(), './data/links.json'),
    resolve(process.cwd(), '../../data/links.json'),
  ]

  for (const filePath of possiblePaths) {
    if (existsSync(filePath)) {
      try {
        const data = readFileSync(filePath, 'utf-8')
        return JSON.parse(data)
      } catch (error) {
        console.error('API Parse Error at:', filePath, error)
      }
    }
  }

  return { error: 'Failed to find articles data', checked: possiblePaths }
})