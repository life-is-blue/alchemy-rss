
import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'en' | 'zh';

const translations = {
  en: {
    appName: 'WeRead RSS',
    nav: {
      home: 'Briefing', 
      reading: 'Reader',
    },
    home: {
      greeting: {
        morning: 'Good morning',
        afternoon: 'Good afternoon',
        evening: 'Good evening'
      },
      filters: {
        forYou: 'For you',
        all: 'All News'
      },
      latest: 'Top Stories',
      more: 'More Headlines',
      readMore: 'Full coverage',
      noContent: 'Your briefing is empty. Go to "Reader" to subscribe to content.',
    },
    sidebar: {
      home: 'Briefing',
      reader: 'Reader',
      add: 'Add Feed',
    },
    feedList: {
      all: 'Timeline',
      loading: 'Updating feed...',
      noFeeds: 'No feeds here.',
      noArticles: 'No articles.',
      backToAll: 'All Sources', 
      articlesCount: 'articles',
      latestUpdate: 'Latest',
      collapse: 'Collapse', 
      expand: 'Read',
      sourceGroup: {
        article: 'Technology & News',
        blog: 'Indie Blogs',
        video: 'Channels',
        social: 'Social Feeds'
      }
    },
    reader: {
      emptyState: 'Select an article to start reading',
      source: 'Source',
      aiInsight: 'AI Insight',
      generating: 'Generating summary',
      end: '- End of Article -',
      summaryBtn: 'AI Summary',
      appearance: 'Appearance',
      light: 'Light',
      warm: 'Warm',
      dark: 'Dark',
      serif: 'Serif',
      sans: 'Sans',
      darkMode: 'Toggle Dark Mode',
      focus: 'Focus Mode',
      exitFocus: 'Exit Focus Mode',
      top: 'Back to Top'
    },
    add: {
      title: 'Add Source',
      urlPlaceholder: 'https://site.com/feed.xml',
      category: 'Category',
      subscribe: 'Follow',
      connecting: 'Connecting...',
      urlError: 'Please enter a valid URL starting with http:// or https://'
    },
    categories: {
      article: 'Technology',
      blog: 'Blogs',
      video: 'Videos',
      social: 'Social'
    },
    titles: {
      timeline: 'Timeline',
      bookshelf: 'My Sources',
      add: 'Add Source'
    }
  },
  zh: {
    appName: '阅 RSS',
    nav: {
      home: '今日简报',
      reading: '阅读器',
    },
    home: {
      greeting: {
        morning: '早上好',
        afternoon: '下午好',
        evening: '晚上好'
      },
      filters: {
        forYou: '为你推荐',
        all: '所有新闻'
      },
      latest: '头条新闻',
      more: '更多资讯',
      readMore: '查看全文',
      noContent: '暂无简报内容，请前往“阅读器”添加订阅源。',
    },
    sidebar: {
      home: '简报',
      reader: '阅读',
      add: '添加',
    },
    feedList: {
      all: '综合时间线',
      loading: '刷新中...',
      noFeeds: '该分类下暂无订阅',
      noArticles: '该分类下暂无文章',
      backToAll: '所有订阅源', 
      articlesCount: '篇文章',
      latestUpdate: '最新',
      collapse: '收起', 
      expand: '阅读', 
      sourceGroup: {
        article: '科技资讯',
        blog: '独立博客',
        video: '视频频道',
        social: '社交动态'
      }
    },
    reader: {
      emptyState: '选择一篇文章开始阅读',
      source: '查看原文',
      aiInsight: 'AI 智能摘要',
      generating: '正在生成摘要',
      end: '- 全文完 -',
      summaryBtn: 'AI 摘要',
      appearance: '阅读设置',
      light: '轻盈',
      warm: '羊皮纸',
      dark: '暗夜',
      serif: '宋体',
      sans: '黑体',
      darkMode: '切换深色模式',
      focus: '专注模式',
      exitFocus: '退出专注',
      top: '回到顶部'
    },
    add: {
      title: '添加订阅源',
      urlPlaceholder: '请输入 RSS 地址',
      category: '分类',
      subscribe: '关注',
      connecting: '连接中...',
      urlError: '请输入以 http:// 或 https:// 开头的有效网址'
    },
    categories: {
      article: '科技',
      blog: '博客',
      video: '视频',
      social: '动态'
    },
    titles: {
      timeline: '时间线',
      bookshelf: '我的订阅',
      add: '添加订阅'
    }
  }
};

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<Lang>('zh');
  
  t = computed(() => translations[this.currentLang()]);

  toggleLang() {
    this.currentLang.update(l => l === 'en' ? 'zh' : 'en');
  }

  // Helper for consistent date formatting based on current language
  formatDate(dateStr: string | Date, format: 'short' | 'medium' | 'time' = 'medium'): string {
    const date = new Date(dateStr);
    const lang = this.currentLang();
    const locale = lang === 'zh' ? 'zh-CN' : 'en-US';

    if (isNaN(date.getTime())) return '';

    if (format === 'time') {
       return new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: 'numeric' }).format(date);
    }

    if (format === 'short') {
      // e.g. Feb 1 or 2月1日
      return new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric' }).format(date);
    }

    // medium
    // e.g. Feb 1, 14:00 or 2月1日 14:00
    const d = new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric' }).format(date);
    const t = new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: 'numeric', hour12: false }).format(date);
    
    return lang === 'zh' ? `${d} ${t}` : `${d}, ${t}`;
  }
}
