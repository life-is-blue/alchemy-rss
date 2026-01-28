const { Feed } = require('feed')
const path = require('path')
const moment = require('moment')
const fs = require('fs-extra')

const utils = require('./utils')

async function createFeed(linksJson){
  const homePage = await utils.getHomePage()
  const feedUrl = `${homePage}/atom.xml`

  const feed = new Feed({
    title: 'Alchemy - 数据炼金平台',
    description: '将信息原矿提炼为知识纯金 (Inspired by ChanceYu/front-end-rss)',
    id: feedUrl,
    link: feedUrl,
    image: '',
    favicon: `${homePage}/static/favicon.ico`,
    copyright: `All rights reserved ${(new Date()).getFullYear()} by Alchemy Lab`,
    updated: new Date(),
    language: 'zh',
    feedLinks: {
      atom: feedUrl
    },
    author: {
      name: 'Alchemy Lab',
      email: 'contact@izoa.fun',
      link: 'https://github.com/life-is-blue/alchemy-rss'
    }
  })

  linksJson.reduce((prev, curr) => {
    return [
      ...prev,
      ...utils.filterBySkill(curr.items).map((post) => ({
        title: post.title,
        id: post.link,
        link: post.link,
        date: moment(post.date, 'YYYY-MM-DD').toDate(),
        published: moment(post.date, 'YYYY-MM-DD').toDate()
      }))
    ]
  }, []).sort((a, b) => {
    return a.date < b.date ? 1 : -1
  }).slice(0, 50).forEach((post) => {
    feed.addItem(post)
  })

  fs.outputFileSync(utils.PATH.FEED_PATH, feed.atom1())
}

module.exports = createFeed
