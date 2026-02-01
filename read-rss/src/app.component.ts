
import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { SidebarComponent } from './components/sidebar.component';
import { FeedListComponent } from './components/feed-list.component';
import { SourceListComponent } from './components/source-list.component';
import { TopNavComponent, PageMode } from './components/top-nav.component';
import { RssService, RssItem, FeedCategory, Feed } from './services/rss.service';
import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';
import { DatePipe } from '@angular/common';

type UnifiedPageMode = 'home' | 'reader';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SidebarComponent, FeedListComponent, SourceListComponent, TopNavComponent, DatePipe],
  host: {
    '(window:keydown)': 'handleKeydown($event)'
  },
  template: `
    <div class="flex flex-col h-screen w-screen overflow-hidden transition-colors duration-300 bg-[var(--c-bg-app)]">
      
      <!-- Top Navigation -->
      <app-top-nav 
        [activePage]="currentPage() === 'reader' ? 'reading' : 'home'" 
        (onNavigate)="navigateTo($event)">
      </app-top-nav>

      <!-- Main Content Area -->
      <div class="flex-1 flex overflow-hidden relative">
        
        <!-- === MODE 1: HOME (Briefing) === -->
        @if (currentPage() === 'home') {
          <div class="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
            <div class="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in zoom-in-95 duration-300">
              
              <!-- 1. Header & Greeting -->
              <header class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                 <div>
                    <h1 class="text-3xl font-serif font-bold text-[var(--c-text)]">
                      {{ greeting() }}
                    </h1>
                    <p class="text-[var(--c-text-muted)] mt-1 font-medium opacity-80">
                      {{ langService.formatDate(today, 'medium') }}
                    </p>
                 </div>
              </header>

              <!-- 2. Filter Chips -->
              <div class="mb-8 flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 mask-linear-fade">
                 <button 
                    (click)="homeCategory.set('all')"
                    class="px-5 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap"
                    [class.bg-[var(--c-accent)]]="homeCategory() === 'all'"
                    [class.text-white]="homeCategory() === 'all'"
                    [class.border-transparent]="homeCategory() === 'all'"
                    [class.bg-[var(--c-bg-paper)]]="homeCategory() !== 'all'"
                    [class.text-[var(--c-text-muted)]]="homeCategory() !== 'all'"
                    [class.border-[var(--c-border)]]="homeCategory() !== 'all'"
                    [class.hover:bg-[var(--c-bg-hover)]]="homeCategory() !== 'all'">
                    {{ langService.t().home.filters.forYou }}
                 </button>

                 @for (cat of categories; track cat) {
                   <button 
                      (click)="homeCategory.set(cat)"
                      class="px-5 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap capitalize"
                      [class.bg-[var(--c-accent)]]="homeCategory() === cat"
                      [class.text-white]="homeCategory() === cat"
                      [class.border-transparent]="homeCategory() === cat"
                      [class.bg-[var(--c-bg-paper)]]="homeCategory() !== cat"
                      [class.text-[var(--c-text-muted)]]="homeCategory() !== cat"
                      [class.border-[var(--c-border)]]="homeCategory() !== cat"
                      [class.hover:bg-[var(--c-bg-hover)]]="homeCategory() !== cat">
                      {{ getCategoryLabel(cat) }}
                   </button>
                 }
              </div>

              <!-- Content Check -->
              @if (homeDisplayItems().length === 0) {
                 <div class="flex flex-col items-center justify-center py-24 text-center opacity-60">
                    <!-- Loading or Empty State handled by FeedList logic, here just simple check -->
                    @if (rssService.loading()) {
                         <p class="text-[var(--c-text-muted)] animate-pulse">{{ langService.t().feedList.loading }}</p>
                    } @else {
                        <p class="text-[var(--c-text-muted)]">{{ langService.t().home.noContent }}</p>
                    }
                 </div>
              } @else {

                <!-- 3. Briefing Layout -->
                
                <!-- SECTION: Top Stories -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
                   
                   @if (homeDisplayItems()[0]; as hero) {
                     <div class="lg:col-span-8 group cursor-pointer" (click)="goToReaderWithItem(hero)">
                        <article class="h-full flex flex-col justify-between bg-[var(--c-bg-paper)] rounded-2xl p-6 border border-[var(--c-border)] shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                           <div class="absolute top-0 left-0 w-1.5 h-full bg-[var(--c-accent)] opacity-80"></div>
                           <div class="pl-4">
                             <div class="flex items-center gap-2 mb-4">
                                <span class="text-xs font-bold uppercase tracking-wider text-[var(--c-accent)]">{{ hero.feedTitle }}</span>
                                <span class="text-[var(--c-text-muted)] text-xs">•</span>
                                <span class="text-[var(--c-text-muted)] text-xs">
                                  {{ langService.formatDate(hero.pubDate, 'time') }}
                                </span>
                             </div>

                             <h2 class="text-2xl md:text-4xl font-serif font-bold leading-tight mb-4 group-hover:text-[var(--c-accent)] transition-colors text-[var(--c-text)]">
                               {{ hero.title }}
                             </h2>

                             <p class="text-base md:text-lg leading-relaxed text-[var(--c-text-muted)] line-clamp-4 md:line-clamp-6 mb-6">
                               {{ hero.snippet }}
                             </p>

                             <div class="mt-auto">
                               <span class="inline-flex items-center text-sm font-semibold text-[var(--c-text)] group-hover:underline">
                                 {{ langService.t().home.readMore }} 
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-1">
                                    <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
                                  </svg>
                               </span>
                             </div>
                           </div>
                        </article>
                     </div>
                   }

                   <div class="lg:col-span-4 flex flex-col gap-4">
                      @for (item of homeDisplayItems().slice(1, 4); track item.guid) {
                        <article 
                          (click)="goToReaderWithItem(item)"
                          class="flex-1 bg-[var(--c-bg-paper)] rounded-xl p-5 border border-[var(--c-border)] shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-center">
                           
                           <h3 class="font-serif font-bold text-lg leading-snug mb-2 group-hover:text-[var(--c-accent)] transition-colors text-[var(--c-text)] line-clamp-3">
                             {{ item.title }}
                           </h3>
                           
                           <div class="flex items-center justify-between mt-2">
                              <div class="flex items-center gap-2 text-xs text-[var(--c-text-muted)]">
                                <span class="font-medium truncate max-w-[100px]">{{ item.feedTitle }}</span>
                                <span>•</span>
                                <span>{{ langService.formatDate(item.pubDate, 'time') }}</span>
                              </div>
                           </div>
                        </article>
                      }
                   </div>
                </div>

                <!-- SECTION: More Headlines -->
                <h3 class="text-xl font-bold mb-6 text-[var(--c-text)] flex items-center gap-2">
                  <span class="w-1.5 h-6 bg-[var(--c-text)] rounded-full"></span>
                  {{ langService.t().home.more }}
                </h3>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  @for (item of homeDisplayItems().slice(4); track item.guid) {
                    <article 
                      (click)="goToReaderWithItem(item)"
                      class="bg-[var(--c-bg-paper)] rounded-lg p-5 border border-[var(--c-border)] hover:border-[var(--c-accent)] transition-all cursor-pointer group flex flex-col h-full">
                       
                       <div class="flex items-center gap-2 mb-2">
                          <img 
                            [src]="'https://www.google.com/s2/favicons?domain=' + getDomain(item.link) + '&sz=32'" 
                            loading="lazy"
                            class="w-4 h-4 opacity-70" 
                            alt=""
                            onerror="this.style.display='none'"
                          />
                          <span class="text-xs font-medium text-[var(--c-text-muted)] truncate">{{ item.feedTitle }}</span>
                       </div>

                       <h4 class="font-serif font-semibold text-base leading-snug mb-3 group-hover:text-[var(--c-accent)] transition-colors text-[var(--c-text)] line-clamp-3">
                         {{ item.title }}
                       </h4>
                       
                       <div class="mt-auto pt-3 border-t border-[var(--c-border)] flex items-center justify-between text-xs text-[var(--c-text-muted)]">
                          <span>{{ langService.formatDate(item.pubDate, 'short') }}</span>
                          <span class="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--c-accent)] font-medium">Read</span>
                       </div>
                    </article>
                  }
                </div>
              }
            </div>
          </div>
        } 
        
        <!-- === MODE 2: READER (Unified View) === -->
        @else {
          <!-- 1. App Navigation Sidebar (Always visible) -->
          <div [class.hidden]="false" class="h-full shrink-0">
            <app-sidebar (onSelect)="handleSidebarNav($event)"></app-sidebar>
          </div>

          <!-- 2. Split Pane Content -->
          <div class="flex-1 flex h-full relative z-20 overflow-hidden bg-[var(--c-bg-paper)]">
              
              <!-- LEFT PANEL: Source List -->
              <div class="w-[280px] shrink-0 h-full hidden md:block border-r border-[var(--c-border)] animate-in slide-in-from-left-4 duration-300">
                 <app-source-list 
                    [feeds]="rssService.feeds()" 
                    [activeFeed]="selectedFeed()"
                    (onSelect)="selectFeedFromList($event)">
                 </app-source-list>
              </div>

              <!-- RIGHT PANEL: Feed Stream -->
              <div class="flex-1 h-full min-w-0">
                 <app-feed-list
                  [title]="listTitle()"
                  [items]="displayItems()"
                  [isLoading]="rssService.loading()"
                  [category]="activeCategory()"
                  [activeFeed]="selectedFeed()"
                  [showCategoryTabs]="selectedFeed() === null" 
                  (onCategoryChange)="activeCategory.set($event)">
                </app-feed-list>
              </div>
          </div>
        }
      </div>
    </div>
  `
})
export class AppComponent {
  rssService = inject(RssService);
  themeService = inject(ThemeService);
  langService = inject(LanguageService);
  
  currentPage = signal<UnifiedPageMode>('home');
  
  // State for Reader Mode
  homeCategory = signal<string>('all'); 
  activeCategory = signal<string>('all'); 
  selectedFeed = signal<Feed | null>(null);

  categories: FeedCategory[] = ['article', 'blog', 'video', 'social'];
  today = new Date();

  get greeting() {
    return computed(() => {
      const h = this.today.getHours();
      const t = this.langService.t().home.greeting;
      if (h < 12) return t.morning;
      if (h < 18) return t.afternoon;
      return t.evening;
    });
  }

  getDomain(url: string): string {
    try { return new URL(url).hostname; } catch { return ''; }
  }

  // Handle TopNav Navigation (Home / Reading switch)
  navigateTo(page: 'home' | 'reading') {
    if (page === 'reading') {
      this.currentPage.set('reader');
    } else {
      this.currentPage.set('home');
    }
  }

  // Handle Sidebar Navigation
  handleSidebarNav(mode: string) {
    if (mode === 'home') this.currentPage.set('home');
    else if (mode === 'reader') this.currentPage.set('reader');
  }

  // Handle Feed Selection from Source List
  selectFeedFromList(feed: Feed | null) {
    this.selectedFeed.set(feed);
    if (feed === null) {
      this.activeCategory.set('all');
    }
  }

  goToReaderWithItem(item: RssItem) {
    this.currentPage.set('reader');
    this.activeCategory.set('all');
    this.selectedFeed.set(null); 
  }

  handleKeydown(event: KeyboardEvent) {
    // Global shortcuts if needed
  }

  getCategoryLabel(cat: string): string {
    return (this.langService.t().categories as any)[cat] || cat;
  }

  listTitle = computed(() => {
    if (this.selectedFeed()) {
      return this.selectedFeed()!.title;
    }
    if (this.activeCategory() !== 'all') {
      return this.getCategoryLabel(this.activeCategory());
    }
    return this.langService.t().feedList.all;
  });

  // Home Items
  homeDisplayItems = computed(() => {
    const cat = this.homeCategory();
    const allFeeds = this.rssService.feeds();
    let items = allFeeds.flatMap(feed => feed.items);
    if (cat !== 'all') items = items.filter(i => i.category === cat);
    return items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  });

  // Reader Items 
  displayItems = computed(() => {
    // 1. If we have a selected feed
    const specificFeed = this.selectedFeed();
    if (specificFeed) {
       return [...specificFeed.items].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
    }

    // 2. If viewing "Timeline" (All), apply category filter
    const cat = this.activeCategory();
    const allFeeds = this.rssService.feeds();
    let items = allFeeds.flatMap(feed => feed.items);
    
    if (cat !== 'all') {
      items = items.filter(i => i.category === cat);
    }

    return items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  });
}
