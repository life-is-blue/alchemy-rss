> **更新时间**: <%= obj.currentDate %> | [首页](/README.md) | [分类](/TAGS.md)

## <%= obj.title %>

<% if(obj.keywords){ %>> 关键词: <%= obj.keywords.replace(/(\?)|([：])/g, '').split('|').slice(0, 10).join(', ') %>
<% } %>

<% _.each(obj.items, function(item){ var itemTitle = obj.formatTitle(item.title); %>
### [<%= itemTitle %>](<%= item.link %>)

<%= item.date || '' %><% if(item.tags && item.tags.length){ %> | 标签: <%= item.tags.slice(0, 5).join(', ') %><% } %>

<% if(item.summary){ %>> <%= item.summary.replace(/\n/g, ' ').substring(0, 300) %><%= item.summary.length > 300 ? '...' : '' %>

<% } %>
<% }); %>
