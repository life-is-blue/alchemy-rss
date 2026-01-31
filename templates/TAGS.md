> 基于文章标签自动分类

**更新时间**: <%= obj.currentDate %> | [返回首页](/README.md)

---

## 分类导航

<% _.each(obj.tags, function(e){ if(e.items.length > 0){ %>- [<%= e.tag %>](#<%= e.filename %>) (<%= e.items.length %>)
<% }}); %>

---

<% _.each(obj.tags, function(e){ %>
## <a id="<%= e.filename %>"></a><%= e.tag %>

<% if(e.keywords){ %>> 关键词: <%= e.keywords.replace(/(\?)|([：])/g, '').split('|').slice(0, 8).join(', ') %>
<% } %>
<% _.each(e.items.slice(0,20), function(item){ var itemTitle = obj.formatTitle(item.title); %>
- [<%= itemTitle %>](<%= item.link %>) - <%= item.rssTitle %><% }); %>
<% if(e.items.length > 20){ %>
- [查看全部 <%= e.items.length %> 篇...](/details/tags/<%= e.filename %>.md)<% } %>

<% }); %>
