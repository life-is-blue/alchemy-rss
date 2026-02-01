
import { Component, input, output, computed, signal, inject, effect, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { RssItem, Feed } from '../services/rss.service';
import { ThemeService } from '../services/theme.service';
import { LanguageService } from '../services/language.service';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { StreamItemComponent } from './stream-item.component';

@Component({
  selector: 'app-feed-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, TitleCasePipe, StreamItemComponent],
  template: `
    <div class="h-full flex flex-col transition-colors duration-300 bg-[var(--c-bg-app)] relative">
         
      <!-- Header Area (Sticky) -->
      <div class="px-8 pt-6 pb-4 flex flex-col gap-4 sticky top-0 z-20 backdrop-blur transition-colors bg-[var(--c-bg-app)]/95">
        
        <!-- Header Content -->
        <div class="flex items-center justify-between max-w-5xl mx-auto w-full">
           <h2 class="font-serif font-bold text-2xl md:text-3xl tracking-tight transition-colors text-[var(--c-text)] truncate">
              {{ displayTitle() }}
              <span class="text-sm font-sans font-normal text-[var(--c-text-muted)] ml-2 opacity-60">
                ({{ filteredItems().length }} {{ langService.t().feedList.articlesCount }})
              </span>
          </h2>
        </div>

        <!-- Category Tabs -->
        @if (showCategoryTabs()) {
          <div class="max-w-5xl mx-auto w-full flex items-center gap-6 overflow-x-auto no-scrollbar pb-px">
            @for (cat of categories; track cat) {
                <button 
                (click)="setCategory(cat)"
                class="text-sm font-medium whitespace-nowrap transition-all px-4 py-1.5 rounded-full"
                [class.bg-[var(--c-text)]]="category() === cat"
                [class.text-[var(--c-bg-paper)]]="category() === cat"
                [class.shadow-md]="category() === cat"
                [class.bg-[var(--c-bg-paper)]]="category() !== cat"
                [class.text-[var(--c-text-muted)]]="category() !== cat"
                [class.hover:bg-[var(--c-bg-hover)]]="category() !== cat">
                {{ getCategoryLabel(cat) }}
              </button>
            }
          </div>
        }
      </div>

      <!-- Stream Content Area -->
      <div #scrollContainer class="flex-1 overflow-y-auto no-scrollbar scroll-smooth" role="list" (scroll)="onScroll()">
        
        <div class="max-w-5xl mx-auto w-full px-4 md:px-8 pb-32"> 
          
          @if (isLoading()) {
            <div class="p-12 text-center animate-pulse text-[var(--c-text-muted)]" role="status">
              {{ langService.t().feedList.loading }}
            </div>
          } @else if (filteredItems().length === 0) {
             <div class="p-16 text-center opacity-60 font-light text-[var(--c-text)]">
               {{ langService.t().feedList.noArticles }}
             </div>
          } @else {
            <!-- Stream List -->
            <div class="flex flex-col gap-4">
              <!-- Render only the 'renderedItems' subset for performance -->
              @for (item of renderedItems(); track item.guid) {
                <app-stream-item 
                  [item]="item" 
                  [isExpanded]="expandedId() === item.guid"
                  (onToggle)="toggleExpand(item.guid)">
                </app-stream-item>
              }
              
              <!-- Loading Indicator at bottom -->
              @if (hasMoreItems()) {
                <div class="py-8 text-center text-[var(--c-text-muted)] opacity-50 text-sm animate-pulse">
                   Loading more...
                </div>
              }
            </div>
          }
        </div>
      </div>

      <!-- Floating Toolbar -->
      <div class="absolute right-8 bottom-8 flex flex-col gap-3 z-30 transition-all duration-300"
           [class.translate-y-20]="!showToolbar()"
           [class.opacity-0]="!showToolbar()">
        
        @if (expandedId()) {
          <button 
            (click)="expandedId.set(null)"
            class="w-12 h-12 bg-[var(--c-bg-paper)] rounded-full shadow-lg border border-[var(--c-border)] flex items-center justify-center text-[var(--c-text-muted)] hover:text-[var(--c-accent)] hover:scale-110 transition-all active:scale-95"
            [title]="langService.t().feedList.collapse">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
            </svg>
          </button>
        }

        <button 
          (click)="scrollToTop()"
          class="w-12 h-12 bg-[var(--c-bg-paper)] rounded-full shadow-lg border border-[var(--c-border)] flex items-center justify-center text-[var(--c-text-muted)] hover:text-[var(--c-accent)] hover:scale-110 transition-all active:scale-95 group"
          [title]="langService.t().reader.top">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6 group-hover:-translate-y-0.5 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </button>
      </div>

    </div>
  `
})
export class FeedListComponent {
  themeService = inject(ThemeService);
  langService = inject(LanguageService);
  
  title = input<string>(''); 
  items = input<RssItem[]>([]);
  isLoading = input<boolean>(false);
  category = input<string>('all');
  activeFeed = input<Feed | null>(null); 
  showCategoryTabs = input<boolean>(false);
  onCategoryChange = output<string>();

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  expandedId = signal<string | null>(null);
  showToolbar = signal<boolean>(false);
  
  // Infinite Scroll State
  private readonly BATCH_SIZE = 20;
  visibleCount = signal<number>(this.BATCH_SIZE);

  categories = ['all', 'article', 'blog', 'video', 'social'];

  constructor() {
    // Reset visible count when filters change
    effect(() => {
        this.category();
        this.activeFeed();
        this.items();
        // Reset to initial batch size whenever data context changes
        this.visibleCount.set(this.BATCH_SIZE);
        this.scrollToTop();
    }, { allowSignalWrites: true });

    effect((onCleanup) => {
        const handleKey = (e: KeyboardEvent) => {
            if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
            const rendered = this.renderedItems();
            if (rendered.length === 0) return;

            if (e.key === 'j' || e.key === 'k') {
                const currentId = this.expandedId();
                let idx = -1;
                if (currentId) idx = rendered.findIndex(i => i.guid === currentId);

                let nextIdx = idx;
                if (e.key === 'j') nextIdx = idx === -1 ? 0 : Math.min(rendered.length - 1, idx + 1);
                else if (e.key === 'k') nextIdx = Math.max(0, idx - 1);

                if (nextIdx !== idx || idx === -1) {
                    const nextItem = rendered[nextIdx];
                    this.toggleExpand(nextItem.guid);
                    setTimeout(() => {
                        const el = document.getElementById(`stream-item-${nextItem.guid}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 50);
                }
            }
        };
        window.addEventListener('keydown', handleKey);
        onCleanup(() => window.removeEventListener('keydown', handleKey));
    });
  }

  setCategory(c: string) {
    this.onCategoryChange.emit(c);
    this.expandedId.set(null);
  }

  toggleExpand(id: string) {
    this.expandedId.update(current => current === id ? null : id);
  }

  getCategoryLabel(cat: string): string {
    if (cat === 'all') return this.langService.t().feedList.all;
    return (this.langService.t().categories as any)[cat] || cat;
  }

  displayTitle = computed(() => {
    if (this.activeFeed()) return this.activeFeed()!.title;
    if (this.category() !== 'all') return this.getCategoryLabel(this.category());
    return this.title() || this.langService.t().feedList.all;
  });

  // 1. Get ALL filtered items
  filteredItems = computed(() => {
    const specificFeed = this.activeFeed();
    let result: RssItem[] = [];
    
    if (specificFeed) {
      result = [...specificFeed.items];
    } else {
      const all = this.items();
      const cat = this.category();
      result = cat === 'all' ? all : all.filter(i => i.category === cat);
    }
    
    return result.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  });

  // 2. Slice them for rendering (Infinite Scroll)
  renderedItems = computed(() => {
    return this.filteredItems().slice(0, this.visibleCount());
  });

  hasMoreItems = computed(() => {
    return this.renderedItems().length < this.filteredItems().length;
  });

  onScroll() {
    if (!this.scrollContainer) return;
    const el = this.scrollContainer.nativeElement;
    const scrollTop = el.scrollTop;
    
    // Toolbar visibility logic
    this.showToolbar.set(scrollTop > 300 || this.expandedId() !== null);

    // Infinite Scroll Logic
    // Check if we are near the bottom (within 200px)
    if (this.hasMoreItems()) {
        const scrollHeight = el.scrollHeight;
        const clientHeight = el.clientHeight;
        
        if (scrollTop + clientHeight >= scrollHeight - 200) {
            // Load next batch
            this.visibleCount.update(c => c + this.BATCH_SIZE);
        }
    }
  }

  scrollToTop() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
