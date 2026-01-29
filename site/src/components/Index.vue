<template>
  <div class="container">
    <div class="fixed-box">
      <a class="action-feed" href="/atom.xml" title="Feed 订阅"></a>
      <a class="action-github" href="https://github.com/life-is-blue/alchemy-rss" title="GitHub"></a>
      <div class="action-top" @click="toTop" title="返回顶部"><van-icon name="arrow-up" /></div>
    </div>

    <div class="header-box">
      <div class="search-wrapper">
        <van-search
          v-model="searchValue"
          placeholder="搜索知识情报"
          show-action
          @search="onSearch"
          @clear="onClear"
          class="search-box-md3"
        >
          <div slot="action" class="action-btn" @click="onSearch">搜索</div>
        </van-search>
      </div>

      <div class="tabs-container">
        <div 
          class="tab-item" 
          :class="{ active: currentTab === '全部' }"
          @click="selectTab('全部')"
        >全部</div>
        <div 
          v-for="item in rss" 
          :key="item.title"
          class="tab-item"
          :class="{ active: currentTab === item.title }"
          @click="selectTab(item.title)"
        >{{item.title}}</div>
      </div>
    </div>

     <div
      class="result-box"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="isBusy"
      infinite-scroll-distance="100"
    >

      <template v-if="!isLoad">
        <van-skeleton  v-for="(item, index) in skeletons" :key="index"  avatar avatar-size="20" title title-width="100%" :row="1" />
      </template>

       <div class="empty" v-if="isLoad && !results.length">
         <van-icon name="info-o" />
         <div class="title">没有搜索到文章，换个关键词试试<br />或者<span class="cate" @click="showCate = true">手动筛选</span></div>
       </div>

        <a
          v-for="(item, index) in results"
          :key="index"
          :href="item.link"
          target="_blank"
          class="item-link"
        >
          <van-cell is-link>
            <div slot="icon" class="item-order">{{index+1}}、</div>
            <div slot="label">{{item.date}}<span class="item-from">{{item.rssTitle}}</span> 
              <div v-if="item.summary" class="item-summary">{{item.summary}}</div>
            </div>
            <div slot="title" class="item-title" v-html="item.sotitle || item.title"></div>
          </van-cell>
        </a>

        <van-loading v-if="results.length && !isBusy && isLoad">加载中...</van-loading>
        <van-divider v-if="results.length && isBusy">没有更多了~</van-divider>

     </div>

  </div>
</template>

<script>
import dayjs from 'dayjs'

const getPlatform = () => /Android|iPhone/i.test(navigator.userAgent)
const isMobile = getPlatform()

window.addEventListener('resize', () => {
  if (isMobile !== getPlatform()) {
    location.reload()
  }
})

const sortArray = (arr) => {
  return arr.sort((a, b) => {
    return a.date < b.date ? 1 : -1
  })
}

const hotwords = ['React', 'Vue', 'JavaScript', 'Webpack', 'TypeScript', 'Node', 'CSS', 'Canvas', 'Flutter', 'ES6', '小程序', '浏览器']

const TODAY = dayjs().format('YYYY-MM-DD')
const ranges = [{
  title: '今天',
  dates: TODAY
}, {
  title: '最近两天',
  dates: [dayjs().subtract(2, 'days').format('YYYY-MM-DD'), TODAY]
}, {
  title: '最近一周',
  dates: [dayjs().subtract(7, 'days').format('YYYY-MM-DD'), TODAY]
}, {
  title: '最近一月',
  dates: [dayjs().subtract(31, 'days').format('YYYY-MM-DD'), TODAY]
}]

const rss = window.RSS_DATA
const tags = window.TAGS_DATA
const files = window.LIST_FILES

let results = []
let datesMap = {}
let rssMap = {}
let tagsMap = {}

export default {
  name: 'Index',
  data () {
    return {
      searchValue: '',
      showCate: false,
      currentTab: '全部',
      // 默认只展示技能相关文章
      matchSkill: !!localStorage.getItem('matchSkill'),
      hotwords,
      ranges,
      rss: [],
      tags: [],
      pageNo: 1,
      pageSize: 20,
      isBusy: true,
      allList: [],
      results: [],
      isLoad: false,
      skeletons: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  watch: {
    matchSkill () {
      this.initLoadData()
      this.handlerSearch()
    }
  },
  methods: {
    toTop () {
      window.scrollTo(0, 0)
    },
    selectTab (title) {
      this.currentTab = title
      if (title === '全部') {
        this.searchValue = ''
      } else {
        this.searchValue = '[来源] ' + title
      }
      this.handlerSearch()
    },
    initLoadData (clear = true, list = window.LIST_DATA) {
      if (clear) {
        results = []
        datesMap = {}
        rssMap = {}
        tagsMap = {}
      }

      let rssArticle = {}

      const articles = list.reduce((prev, item) => {
        let isInTag = false
        let isFilter = !this.matchSkill

        rssArticle[item.rssTitle] = rssArticle[item.rssTitle] || []
        rssArticle[item.rssTitle].push(item)

        tags.forEach((tagItem) => {
          const isMatchSkill = this.matchSkill ? tagItem.skill : true
          if (tagItem.keywords && (new RegExp(tagItem.keywords, 'gi')).test(item.title)) {
            isInTag = true
            if (isMatchSkill) {
              isFilter = true
              tagsMap[tagItem.tag] = tagsMap[tagItem.tag] || []
              tagsMap[tagItem.tag].push(item)
              tagsMap[tagItem.tag] = sortArray(tagsMap[tagItem.tag])
            }
          }
        })

        if (!isInTag) {
          tagsMap['其它'] = tagsMap['其它'] || []
          tagsMap['其它'].push(item)
          tagsMap['其它'] = sortArray(tagsMap['其它'])
        }

        ranges.forEach((rangeItem) => {
          const dates = rangeItem.dates

          if ((typeof dates === 'string' && item.date === dates) || (typeof dates !== 'string' && item.date >= dates[0] && item.date <= dates[1])) {
            datesMap[rangeItem.title] = datesMap[rangeItem.title] || []
            datesMap[rangeItem.title].push(item)
            datesMap[rangeItem.title] = sortArray(datesMap[rangeItem.title])
          }
        })

        if (isFilter) {
          return [
            ...prev,
            item
          ]
        }

        return prev
      }, [])

      Object.keys(rssArticle).forEach((rssTitle) => {
        rssMap[rssTitle] = sortArray([...(rssMap[rssTitle] || []), ...rssArticle[rssTitle]])
      })

      results = results.concat(articles)

      results = sortArray(results)

      this.rss = rss
      this.tags = tags
      this.isLoad = true
    },
    loadMore () {
      const allLen = this.allList.length
      const resultsLen = this.results.length

      this.isBusy = allLen < this.pageSize || (resultsLen && this.results[resultsLen - 1].link === this.allList[allLen - 1].link)
      this.results = this.allList.slice(0, this.pageNo * this.pageSize)
      this.pageNo += 1
    },
    handlerCate (item) {
      let label = ''
      if (item.dates) {
        label = '[时间] ' + item.title
      } else if (item.tag) {
        label = '[分类] ' + item.tag
      } else if (item.rss) {
        label = '[来源] ' + item.title
      }

      if (typeof item === 'string') {
        this.searchValue = item
      } else {
        this.searchValue = label
      }

      this.handlerSearch()
      this.showCate = false
    },
    handlerSearch (reset = true) {
      const value = this.searchValue
      const matches = value.match(/^\[(时间|来源|分类)\]\s(.+)/)
      const matchValue = matches && matches[2]

      if (value) {
        let arr = []

        if (matches && datesMap[matchValue]) {
          arr = datesMap[matchValue]
        } else if (matches && rssMap[matchValue]) {
          arr = rssMap[matchValue]
        } else if (matches && tagsMap[matchValue]) {
          arr = tagsMap[matchValue]
        } else {
          results.forEach((item) => {
            let reg = null
            try {
            // eslint-disable-next-line
              reg = new RegExp('(' + value.replace(/([?\[\]])/g, '\\$1') + ')', 'gi')
            } catch (e) {}

            const matchSplit = (val) => {
              const exist = item.title.split(val)

              if (exist.length > 1) {
                arr.push({
                  ...item,
                  sotitle: exist.join(`<span class="red">${val}</span>`)
                })
                return true
              }
            }

            if (reg && reg.test(item.title)) {
              arr.push({
                ...item,
                sotitle: item.title.replace(reg, `<span class="red">$1</span>`)
              })
            } else if (matchSplit(value)) {
            } else if (matchSplit(value.toLowerCase())) {
            } else if (matchSplit(value.toUpperCase())) {
            }
          })
        }

        this.allList = [...arr]
      } else {
        this.allList = [...results]
      }

      if (reset) {
        if ((this.$route.query.q || '') !== value) {
          this.$router.replace({
            path: '/',
            query: value ? {
              q: value
            } : {}
          })
        }

        window.scrollTo(0, 0)

        this.pageNo = 1
        this.results = []
        this.loadMore()
      }
    },
    onSearch () {
      this.handlerSearch()
    },
    onClear () {
      this.handlerSearch()
    },
    changeSkill () {
      this.matchSkill = !this.matchSkill
      if (this.matchSkill) {
        localStorage.setItem('matchSkill', 'true')
      } else {
        localStorage.removeItem('matchSkill')
      }
    },
    async preloadList () {
      if (!files.length) return
      const tasks = await Promise.all(
        files.splice(0, 2).map((name) => fetch(name, { cache: 'no-store' }).then((response) => response.json()))
      )

      const items = tasks.reduce((prev, curr) => [...prev, ...curr], [])

      window.LIST_DATA = window.LIST_DATA.concat(items)
      this.initLoadData(false, items)
      this.handlerSearch(false)

      setTimeout(() => {
        this.preloadList()
      }, 200)
    }
  },
  mounted () {
    const { q } = this.$route.query

    this.searchValue = q || ''
    this.initLoadData()
    this.handlerSearch()

    setTimeout(() => {
      this.preloadList()
    }, 1000)
  }
}
</script>

<style>
:root {
  --md-sys-color-primary: #f57c00;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #ffdec1;
  --md-sys-color-on-primary-container: #331100;
  --md-sys-color-surface: #fef8f4;
  --md-sys-color-on-surface: #1f1b16;
  --md-sys-color-surface-variant: #f0e0d6;
  --md-sys-color-on-surface-variant: #4f4539;
  --md-sys-color-outline: #817567;
  --md-sys-color-background: #fffbff;
  --md-sys-color-on-background: #1f1b16;
}

.container {
    width: 50%;
    margin: 0 auto;
    background-color: var(--md-sys-color-background);
}

.header-box {
    position: fixed;
    top: 0;
    width: 50%;
    z-index: 10;
    background-color: var(--md-sys-color-surface);
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.search-wrapper {
    padding: 8px 16px 0;
}

.search-box-md3 {
    padding: 0 !important;
    background: transparent !important;
}

.search-box-md3 .van-search__content {
    background-color: var(--md-sys-color-surface-variant) !important;
    border-radius: 28px !important;
}

.tabs-container {
    display: flex;
    overflow-x: auto;
    padding: 12px 16px;
    gap: 8px;
    scrollbar-width: none; /* Firefox */
}

.tabs-container::-webkit-scrollbar {
    display: none; /* Safari/Chrome */
}

.tab-item {
    white-space: nowrap;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--md-sys-color-on-surface-variant);
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid var(--md-sys-color-outline);
}

.tab-item.active {
    background-color: var(--md-sys-color-primary-container);
    color: var(--md-sys-color-on-primary-container);
    border-color: var(--md-sys-color-primary);
}

.tab-item:hover {
    background-color: var(--md-sys-color-surface-variant);
}

.fixed-box {
    position: fixed;
    bottom: 6.25rem;
    right: 25%;
    z-index: 9
}

.fixed-box .action-feed,.fixed-box .action-github,.fixed-box .action-top {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    display: block;
    cursor: pointer;
    margin-top: .75rem;
    border-radius: .125rem;
    overflow: hidden;
    position: relative;
    left: 3.125rem;
    background-color: #f8f8f8
}

.fixed-box .action-feed:hover,.fixed-box .action-github:hover,.fixed-box .action-top:hover {
    background-color: #f5f5f5
}

.fixed-box .action-feed {
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url("/static/favicon.svg");
    background-size: 70% auto
}

.fixed-box .action-github {
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E");
    background-size: 70% auto
}

.fixed-box .action-top {
    color: #171717
}

.fixed-box .action-top .van-icon {
    font-weight: 700;
    vertical-align: middle
}

.search-modal {
    width: 24%;
    height: 100%
}

.search-modal .title-box .van-icon {
    font-size: 1.125rem;
    vertical-align: middle;
    margin-right: .375rem;
    position: relative;
    top: -.125rem
}

.search-modal .tag-group {
    padding: .375rem 0
}

.search-modal .van-tag {
    background: #bbb;
    margin: .25rem;
    cursor: pointer;
    padding: .25rem .5rem;
    font-size: .8125rem
}

.search-modal .van-tag:hover {
    background: #666
}

.search-modal .van-cell-group__title {
    font-size: .9375rem;
    color: #007fff;
    background: #f5f5f5
}

.search-modal .van-cell {
    font-size: .8125rem;
    color: #262626;
    text-align: left;
    cursor: pointer
}

.search-modal .van-cell:active,.search-modal .van-cell:hover {
    background: #f7f8fa
}

.search-modal .van-cell:not(:last-child):after {
    border-bottom-color: #f7f8fa
}

.search-modal .van-cell__label {
    font-size: .75rem;
    color: #999;
    word-break: break-all
}

.filter-row {
  display: flex;
  align-items: center;
}

.filter-cell {
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 4px 16px;
  display: flex;
  align-items: center;
  text-align: left;
}

.filter-cell .lbl {
  cursor: pointer;
  margin-left: 12px;
}

.filter-cell .desc {
  font-size: 12px;
  color: #999;
  display: block;
}

.result-box {
    padding: 120px 0 .375rem;
    background: var(--md-sys-color-background);
    min-height: 100vh;
    box-sizing: border-box;
    position: relative
}

.result-box .van-loading {
    margin-top: 1.25rem
}

.result-box .van-skeleton {
    padding: .375rem 2.75rem .375rem 1.25rem;
    margin-bottom: .125rem
}

.result-box .van-skeleton .van-skeleton__avatar {
    margin-top: .375rem;
    margin-right: .625rem;
    border-radius: 0
}

.result-box .van-skeleton .van-skeleton__row {
    width: 40%!important
}

.result-box .empty {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 30%
}

.result-box .empty .van-icon {
    color: #007fff;
    font-size: 3.125rem
}

.result-box .empty .title {
    display: block;
    margin-top: .625rem;
    line-height: 1.875rem;
    color: #999;
    font-size: .875rem;
    font-weight: 400
}

.result-box .empty .cate {
    cursor: pointer;
    color: #666;
    text-decoration: underline
}

.result-box .item-order {
    color: #999
}

.result-box .item-title {
    margin-bottom: .375rem
}

.result-box .item-from {
    display: inline-block;
    margin-left: .75rem
}

.result-box .item-summary {
    margin-top: 0.25rem;
    font-size: 0.8125rem;
    color: #666;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
}

.result-box .red {
    color: #f44336
}

.result-box .van-cell {
    font-size: 1.125rem;
    color: #262626;
    text-align: left;
    border-bottom: 1px dashed #f4f5f5;
    cursor: pointer
}

.result-box .van-cell:active,.result-box .van-cell:hover {
    background: #f7f8fa;
    border-bottom: 1px solid #f7f8fa
}

.result-box .item-link:last-of-type .van-cell {
    border-bottom: none
}

.result-box .van-cell:not(:last-child):after {
    border-bottom-color: #f7f8fa
}

.result-box .van-cell__label {
    font-size: .875rem;
    color: #999;
    word-break: break-all
}

.result-box .van-divider {
    margin: 1.25rem
}

.search-box-md3 {
    margin: 0 auto;
}

.search-box .van-cell {
    padding: .625rem 0
}

.search-box .van-cell .van-icon {
    font-size: 1.25rem
}

.search-box .van-cell .van-icon-clear {
    cursor: pointer;
    margin-right: .375rem
}

.search-box input {
    font-size: 1rem;
    color: #999
}

.search-box .van-search__action:active {
    background: none
}

.search-box .van-search__content {
    padding: 0
}

.search-box .van-field__left-icon {
    color: #007fff;
    margin-left: .5rem
}

.search-box .van-search__label {
    color: #007fff;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center
}

.search-box .van-search__label:active,.search-box .van-search__label:hover {
    color: #004dcd
}

.search-box .action-cate {
    cursor: pointer;
    padding: 0 .375rem
}

.search-box .action-cate .van-icon {
    vertical-align: middle;
    margin-right: .125rem;
    font-size: 1.25rem;
    position: relative;
    top: -.0625rem
}

.search-box .action-cate .lbl {
    vertical-align: middle
}

.search-box .action-btn {
    color: #007fff;
    cursor: pointer
}

@media screen and (max-width: 1200px) {
    .container,.header-box {
        width:70%
    }

    .fixed-box {
        right: 15%
    }
}

@media screen and (max-width: 800px) {
    .container,.header-box {
        width:100%;
        margin: 0 auto
    }

    .result-box {
        padding-top: 110px;
    }

    .fixed-box {
        bottom: 3.125rem;
        right: .625rem
    }

    .fixed-box .action-github,.fixed-box .action-top {
        left: 0;
        background-color: #f5f5f5
    }

    .fixed-box .action-top:hover {
        color: inherit;
        background: #f5f5f5
    }

    .search-modal {
        width: 70%
    }

    .search-box {
        width: 100%;
        padding: .625rem
    }

    .search-box .van-cell {
        padding: .625rem 0
    }

    .search-box input {
        font-size: .875rem
    }

    .result-box .van-skeleton {
        padding-right: 3.375rem
    }

    .result-box .van-skeleton .van-skeleton__row {
        width: 60%!important
    }

    .result-box .van-cell {
        font-size: 1rem
    }

    .result-box .van-cell__label {
        font-size: .75rem
    }
}
</style>
