
import { Component, input, output, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { Feed, FeedCategory } from '../services/rss.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-source-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="h-full overflow-y-auto no-scrollbar bg-[var(--c-bg-sidebar)] border-r border-[var(--c-border)]">
      
      <!-- Header -->
      <div class="p-4 border-b border-[var(--c-border)] sticky top-0 bg-[var(--c-bg-sidebar)] z-10 flex items-center justify-between">
        <h2 class="font-serif font-bold text-lg text-[var(--c-text)]">{{ langService.t().sidebar.reader }}</h2>
      </div>

      <div class="py-3 px-2 space-y-6">
        
        <!-- 1. Unified 'Timeline' Option -->
        <div>
            <button 
              (click)="onSelect.emit(null)"
              class="w-full text-left px-3 py-2 rounded-md text-sm transition-all flex items-center gap-3 group relative"
              [class.bg-[var(--c-bg-paper)]]="activeFeed() === null"
              [class.shadow-sm]="activeFeed() === null"
              [class.text-[var(--c-text)]]="activeFeed() === null"
              [class.font-bold]="activeFeed() === null"
              [class.text-[var(--c-text-muted)]]="activeFeed() !== null"
              [class.hover:bg-[var(--c-bg-hover)]]="activeFeed() !== null">
              
              <!-- Icon Container -->
              <div class="w-5 h-5 flex items-center justify-center transition-colors opacity-80"
                   [class.text-[var(--c-accent)]]="activeFeed() === null">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                   </svg>
              </div>
              
              <span class="flex-1">{{ langService.t().feedList.all }}</span>
            </button>
            
            <!-- Separator -->
            <div class="mt-3 mx-3 border-b border-[var(--c-border)] opacity-60"></div>
        </div>

        <!-- 2. Feed Groups -->
        @for (group of feedGroups(); track group.category) {
          <div class="animate-in slide-in-from-left-2 duration-300">
            <div class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--c-text-muted)] opacity-50 mb-1">
              {{ getGroupLabel(group.category) }}
            </div>
            <div class="space-y-0.5">
              @for (feed of group.feeds; track feed.url) {
                <button 
                  (click)="onSelect.emit(feed)"
                  class="w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-3 group relative"
                  [class.bg-[var(--c-bg-paper)]]="activeFeed()?.url === feed.url"
                  [class.text-[var(--c-text)]]="activeFeed()?.url === feed.url"
                  [class.font-medium]="activeFeed()?.url === feed.url"
                  [class.shadow-sm]="activeFeed()?.url === feed.url"
                  [class.text-[var(--c-text-muted)]]="activeFeed()?.url !== feed.url"
                  [class.hover:bg-[var(--c-bg-hover)]]="activeFeed()?.url !== feed.url">
                  
                  <!-- Favicon -->
                  <img 
                    [src]="'https://www.google.com/s2/favicons?domain=' + getDomain(feed.url) + '&sz=32'" 
                    loading="lazy"
                    class="w-4 h-4 rounded-sm opacity-70 shrink-0 transition-opacity group-hover:opacity-100" 
                    alt=""
                    onerror="this.style.display='none'"
                  />
                  
                  <span class="truncate flex-1">{{ feed.title }}</span>
                  
                  <!-- Count Badge -->
                  @if (feed.items.length > 0) {
                     <span class="text-[10px] bg-[var(--c-bg-hover)] text-[var(--c-text-muted)] px-1.5 py-0.5 rounded-full font-medium min-w-[20px] text-center border border-[var(--c-border)] shadow-sm">
                       {{ feed.items.length }}
                     </span>
                  }
                </button>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class SourceListComponent {
  langService = inject(LanguageService);
  
  feeds = input<Feed[]>([]);
  activeFeed = input<Feed | null>(null);
  onSelect = output<Feed | null>();

  getGroupLabel(cat: string): string {
    return (this.langService.t().feedList.sourceGroup as any)[cat] || cat;
  }

  getDomain(url: string): string {
    try { return new URL(url).hostname; } catch { return ''; }
  }

  feedGroups = computed(() => {
    const groups: {category: string, feeds: Feed[]}[] = [];
    const feeds = this.feeds();
    const cats: FeedCategory[] = ['article', 'blog', 'video', 'social'];
    
    cats.forEach(c => {
      const catFeeds = feeds.filter(f => f.category === c);
      if (catFeeds.length > 0) {
        catFeeds.sort((a, b) => a.title.localeCompare(b.title));
        groups.push({ category: c, feeds: catFeeds });
      }
    });
    
    const otherFeeds = feeds.filter(f => !cats.includes(f.category));
    if (otherFeeds.length > 0) {
       groups.push({ category: 'Other', feeds: otherFeeds });
    }
    return groups;
  });
}
