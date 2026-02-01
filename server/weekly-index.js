const fs = require('fs-extra')
const path = require('path')
const moment = require('moment')

const utils = require('./utils')

const WEEKLY_DIR = path.join(utils.PATH.RESP_PATH, 'data/index/weekly')

const ALLOWLIST = [
  'id',
  'title',
  'link',
  'date',
  'oneSentenceSummary',
  'summary',
  'archive_path',
  'topicTag',
  'category',
  'sourceName',
  'resourceType',
  'readTime',
  'score'
]

function slimWeeklyItem(item) {
  const slimmed = {}
  for (const key of ALLOWLIST) {
    if (item[key] !== undefined) slimmed[key] = item[key]
  }
  return slimmed
}

function getWeekKey(dateStr) {
  const d = moment(dateStr)
  if (!d.isValid()) return null
  const year = d.isoWeekYear()
  const week = String(d.isoWeek()).padStart(2, '0')
  return `${year}-W${week}`
}

function buildWeeklyIndex(linksJson) {
  const index = {}
  if (!Array.isArray(linksJson)) return { index }

  linksJson.forEach(group => {
    const items = Array.isArray(group.items) ? group.items : []
    items.forEach(item => {
      const key = getWeekKey(item.date)
      if (!key) return
      if (!index[key]) index[key] = []
      index[key].push(slimWeeklyItem(item))
    })
  })

  return { index }
}

async function writeWeeklyIndex(linksJson) {
  const { index } = buildWeeklyIndex(linksJson)
  await fs.ensureDir(WEEKLY_DIR)
  const keys = Object.keys(index).sort()
  for (const key of keys) {
    const filePath = path.join(WEEKLY_DIR, `${key}.json`)
    await fs.writeJson(filePath, index[key])
  }
  return keys
}

module.exports = { buildWeeklyIndex, writeWeeklyIndex }
