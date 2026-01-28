<div align="center">
  <img width="120" src="/assets/rss.svg" />
  <h1>Alchemy</h1>
  <p>数据炼金平台：将信息原矿提炼为知识纯金</p>
</div>

## 

在线浏览：[<%= obj.homePage %>](<%= obj.homePage %>)

订阅地址：[<%= obj.feedUrl %>](<%= obj.feedUrl %>) 

##

[![](https://github.com/ChanceYu/front-end-rss/actions/workflows/server.yml/badge.svg)](https://github.com/ChanceYu/front-end-rss/actions/workflows/server.yml)

:alarm_clock: 更新时间: <%= obj.currentDate %>，:rocket: 更新条数: +<%= obj.newData.length %>， ![](/assets/dot.png) 表示有更新，[文章分类](/TAGS.md)

## 文章来源
<% _.each(obj.linksJson, function(e){ var rssTitle = obj.formatTitle(e.title); %>
- [<%= rssTitle %>](#<%= rssTitle.toLowerCase() %>)<% if (e.title in obj.newData.rss){ %>![](/assets/dot.png) <% } %>  <% }) %>
