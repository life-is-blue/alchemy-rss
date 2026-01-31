<div align="center">
  <img width="120" src="/assets/rss.svg" />
  <h1>Alchemy</h1>
  <p>数据炼金平台：将信息原矿提炼为知识纯金</p>
</div>

<p align="center">
  <a href="https://github.com/life-is-blue/alchemy-rss/actions/workflows/server.yml">
    <img src="https://github.com/life-is-blue/alchemy-rss/actions/workflows/server.yml/badge.svg" alt="Build Status" />
  </a>
</p>

---

**在线阅读**: [<%= obj.homePage %>](<%= obj.homePage %>)

**订阅地址**: [<%= obj.feedUrl %>](<%= obj.feedUrl %>)

**更新时间**: <%= obj.currentDate %> | **新增**: +<%= obj.newData.length %> 篇 | [按标签分类](/TAGS.md)

---

## 文章来源

<% _.each(obj.linksJson, function(e){ var rssTitle = obj.formatTitle(e.title); var filename = e.title.replace(/[\\/]/g, '') + '.md'; %>
- [<%= rssTitle %>](/details/<%= filename %>)<% if (e.title in obj.newData.rss){ %> *(已更新)*<% } %><% }) %>
