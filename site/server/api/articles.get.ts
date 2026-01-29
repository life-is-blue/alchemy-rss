import { readFileSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler((event) => {
  // In Nuxt 4, process.cwd() should point to the project root
  const filePath = resolve(process.cwd(), '../data/links.json')
  try {
    const data = readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('API Error:', error)
    return { error: 'Failed to read articles data', path: filePath }
  }
})
