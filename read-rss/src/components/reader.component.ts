
import { Component, input, output, signal, effect, inject, computed, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { RssItem, RssService } from '../services/rss.service';
import { ThemeService, ThemeType } from '../services/theme.service';
import { LanguageService } from '../services/language.service';
import { DatePipe } from '@angular/common';
import { GeminiService } from '../services/gemini.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-reader',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  template: `
    <div class="h-full relative flex flex-col transition-colors duration-300 bg-[var(--c-bg-paper)]">
         
      <!-- Empty State -->
      @if (!item()) {
        <div class="flex-1 flex flex-col items-center justify-center opacity-60">
           <div class="w-24 h-32 border-2 rounded-lg flex items-center justify-center mb-6 border-dashed border-[var(--c-text-muted)]">
              <span class="text-4xl font-serif text-[var(--c-text-muted)]">?</span>
           </div>
           <p class="text-lg font-serif text-[var(--c-text-muted)]">{{ langService.t().reader.emptyState }}</p>
        </div>
      } @else {
        <!-- Scrollable Content Area -->
        <div #scrollContainer 
             tabindex="-1"
             (scroll)="onScroll($event)"
             class="flex-1 overflow-y-auto no-scrollbar scroll-smooth outline-none">
             
          <div class="max-w-[800px] mx-auto px-8 md:px-12 py-20">
            
            <!-- Header -->
            <header class="mb-16 border-b pb-8 transition-colors border-[var(--c-border)]">
               <h1 class="font-bold mb-6 leading-tight tracking-tight transition-all duration-300 text-[var(--c-text)]"
                   [class.font-serif]="fontFamily() === 'serif'"
                   [class.font-sans]="fontFamily() === 'sans'"
                   [style.fontSize.rem]="titleFontSize()">
                 {{ item()?.title }}
               </h1>
               <div class="flex items-center gap-4 text-sm font-normal font-sans text-[var(--c-text-muted)]">
                  <span class="font-medium">{{ item()?.feedTitle }}</span>
                  <span aria-hidden="true">|</span>
                  <span>{{ item()?.pubDate | date:'mediumDate' }}</span>
                  @if (item()?.link) {
                    <span aria-hidden="true">|</span>
                    <a [href]="item()?.link" target="_blank" class="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 rounded" aria-label="Open original source in new tab">{{ langService.t().reader.source }} ↗</a>
                  }
               </div>
            </header>

            <!-- Loading State -->
            @if (isLoadingContent()) {
               <div class="flex flex-col items-center justify-center py-20 opacity-50 space-y-4">
                  <div class="w-8 h-8 border-2 border-[var(--c-accent)] border-t-transparent rounded-full animate-spin"></div>
                  <p class="text-sm text-[var(--c-text-muted)]">Fetching full article...</p>
               </div>
            } @else {

              <!-- AI Summary Card -->
              @if (summary() || isSummarizing()) {
                 <div class="mb-12 p-6 rounded-lg border transition-colors duration-300 text-[16px] leading-relaxed bg-[var(--c-bg-hover)] border-[var(--c-border)] text-[var(--c-text)]">
                      
                    <div class="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider opacity-90 text-[var(--c-accent)]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4" aria-hidden="true">
                        <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813a3.75 3.75 0 0 0 2.576-2.576l.813-2.846A.75.75 0 0 1 9 4.5Z" clip-rule="evenodd" />
                      </svg>
                      {{ langService.t().reader.aiInsight }}
                    </div>
                    @if (isSummarizing()) {
                      <div class="flex space-x-1 items-center h-6" [attr.aria-label]="langService.t().reader.generating">
                        <div class="w-1.5 h-1.5 bg-current rounded-full animate-bounce opacity-50"></div>
                        <div class="w-1.5 h-1.5 bg-current rounded-full animate-bounce delay-100 opacity-50"></div>
                        <div class="w-1.5 h-1.5 bg-current rounded-full animate-bounce delay-200 opacity-50"></div>
                      </div>
                    } @else {
                      <div class="whitespace-pre-line font-serif">{{ summary() }}</div>
                    }
                 </div>
              }

              <!-- Article Body -->
              <article class="prose max-w-none transition-all duration-300"
                       [class]="typographyClass()"
                       [style]="proseStyles">
                <div [innerHTML]="sanitizedContent()"></div>
              </article>

              <div class="mt-20 border-t pt-10 text-center opacity-50 font-serif italic transition-colors border-[var(--c-border)] text-[var(--c-text-muted)]">
                 {{ langService.t().reader.end }}
              </div>

            }
          </div>
        </div>

        <!-- Floating Toolbar -->
        @if (!isLoadingContent()) {
          <div class="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
             
             <!-- 1. AI Button -->
             <button 
               (click)="generateSummary()"
               [disabled]="isSummarizing()"
               class="w-10 h-10 rounded-full shadow-md border flex items-center justify-center transition-all tooltip-trigger bg-white hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
               [class.text-blue-600]="summary()"
               [class.text-gray-600]="!summary()"
               [class.border-gray-200]="true"
               [title]="langService.t().reader.summaryBtn">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                  <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813a3.75 3.75 0 0 0 .544-.721l.813-2.846a.75.75 0 0 1 1.442 0l.813 2.846Z" clip-rule="evenodd" />
               </svg>
             </button>

             <!-- 2. Appearance Button & Popover -->
             <div class="relative">
               <button 
                 (click)="toggleAppearanceMenu()"
                 class="w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-110 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                 [class.text-blue-600]="showAppearanceMenu()"
                 [title]="langService.t().reader.appearance">
                 <span class="font-serif font-bold text-lg">A</span>
               </button>

               @if (showAppearanceMenu()) {
                  <div class="absolute right-14 top-0 -translate-y-1/2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-200 z-[60]">
                     <div class="flex gap-2">
                        <button (click)="setTheme('light')" class="flex-1 h-8 rounded border border-gray-200 bg-white hover:border-blue-400"></button>
                        <button (click)="setTheme('warm')" class="flex-1 h-8 rounded border border-[#e6e1d8] bg-[#f6f1e8] hover:border-blue-400"></button>
                        <button (click)="setTheme('dark')" class="flex-1 h-8 rounded border border-gray-700 bg-[#333] hover:border-blue-400"></button>
                     </div>
                     <div class="flex items-center justify-between px-2 bg-gray-50 rounded-lg h-10">
                        <button (click)="changeFontSize(-1)" class="text-gray-500 hover:text-gray-900 font-serif text-sm px-2">A-</button>
                        <span class="text-xs text-gray-400">{{ fontSize() }}</span>
                        <button (click)="changeFontSize(1)" class="text-gray-500 hover:text-gray-900 font-serif text-lg px-2">A+</button>
                     </div>
                     <div class="flex gap-2">
                        <button (click)="fontFamily.set('serif')" class="flex-1 py-1.5 text-sm border rounded-lg transition-colors font-serif" [class.bg-blue-50]="fontFamily() === 'serif'" [class.text-blue-600]="fontFamily() === 'serif'" [class.border-blue-200]="fontFamily() === 'serif'">{{ langService.t().reader.serif }}</button>
                        <button (click)="fontFamily.set('sans')" class="flex-1 py-1.5 text-sm border rounded-lg transition-colors font-sans" [class.bg-blue-50]="fontFamily() === 'sans'" [class.text-blue-600]="fontFamily() === 'sans'" [class.border-blue-200]="fontFamily() === 'sans'">{{ langService.t().reader.sans }}</button>
                     </div>
                  </div>
               }
             </div>

             <!-- 3. Dark Mode Toggle -->
             <button 
               (click)="themeService.toggleDarkMode()"
               class="w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-110 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500" 
               [title]="langService.t().reader.darkMode">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
               </svg>
             </button>

             <!-- 4. Focus/Immersive Mode -->
              <button 
               (click)="onToggleFocus.emit()"
               class="w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-110 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500" 
               [class.text-blue-600]="isFocused()"
               [title]="isFocused() ? langService.t().reader.exitFocus : langService.t().reader.focus">
               @if (isFocused()) {
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                 </svg>
               } @else {
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                 </svg>
               }
             </button>
             
             @if (showScrollTop()) {
               <button 
                 (click)="scrollToTop()"
                 class="w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-in fade-in slide-in-from-bottom-4" 
                 [title]="langService.t().reader.top">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  </svg>
               </button>
             }
          </div>
        }
      }
    </div>
  `
})
export class ReaderComponent {
  item = input<RssItem | null>(null);
  isFocused = input<boolean>(false);
  onToggleFocus = output<void>();
  
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  themeService = inject(ThemeService);
  langService = inject(LanguageService);
  private geminiService = inject(GeminiService);
  private rssService = inject(RssService);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  // Appearance State
  summary = signal<string>('');
  isSummarizing = signal<boolean>(false);
  showAppearanceMenu = signal<boolean>(false);
  fontSize = signal<number>(3); // 1-5 scale
  fontFamily = signal<'serif' | 'sans'>('serif');
  showScrollTop = signal<boolean>(false);
  
  // Content Loading State
  isLoadingContent = signal<boolean>(false);
  fullContent = signal<string>('');

  // Computed
  typographyClass = computed(() => {
    const size = this.fontSize();
    const family = this.fontFamily();
    const sizeClass = size === 1 ? 'prose-sm' : size === 2 ? 'prose-base' : size === 3 ? 'prose-lg' : size === 4 ? 'prose-xl' : 'prose-2xl';
    const fontClass = family === 'serif' ? 'font-serif' : 'font-sans';
    return `${sizeClass} ${fontClass}`;
  });

  titleFontSize = computed(() => {
    return 1.5 + (this.fontSize() * 0.25); 
  });
  
  sanitizedContent = computed(() => {
    return this.sanitizer.bypassSecurityTrustHtml(this.fullContent() || '');
  });

  proseStyles = {
    '--tw-prose-body': 'var(--c-text)',
    '--tw-prose-headings': 'var(--c-text)',
    '--tw-prose-lead': 'var(--c-text-muted)',
    '--tw-prose-links': 'var(--c-accent)',
    '--tw-prose-bold': 'var(--c-text)',
    '--tw-prose-counters': 'var(--c-text-muted)',
    '--tw-prose-bullets': 'var(--c-text-muted)',
    '--tw-prose-hr': 'var(--c-border)',
    '--tw-prose-quotes': 'var(--c-text)',
    '--tw-prose-quote-borders': 'var(--c-border)',
    '--tw-prose-captions': 'var(--c-text-muted)',
    '--tw-prose-code': 'var(--c-text)',
    '--tw-prose-pre-code': 'var(--c-text)',
    '--tw-prose-pre-bg': 'var(--c-bg-hover)',
    '--tw-prose-th-borders': 'var(--c-border)',
    '--tw-prose-td-borders': 'var(--c-border)',
  };

  constructor() {
    effect(() => {
      const currentItem = this.item();
      
      // Reset State
      this.summary.set('');
      this.isSummarizing.set(false);
      this.showAppearanceMenu.set(false);
      this.showScrollTop.set(false);

      if (currentItem) {
        // Load Content (Async)
        this.isLoadingContent.set(true);
        this.fullContent.set(''); // Clear previous
        
        // If content is already present in object (e.g. RSS v1 or preloaded), use it immediately
        if (currentItem.content && !currentItem.archive_path) {
            this.fullContent.set(currentItem.content);
            this.isLoadingContent.set(false);
        } else {
            // Fetch via service (Alchemy Protocol)
            this.rssService.getArticleContent(currentItem).then(content => {
                this.fullContent.set(content);
                this.isLoadingContent.set(false);
            });
        }

        // Focus
        setTimeout(() => {
          if (this.scrollContainer?.nativeElement) {
            this.scrollContainer.nativeElement.focus();
          }
        }, 100);
      }
    });
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    this.showScrollTop.set(target.scrollTop > 300);
  }

  scrollToTop() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleAppearanceMenu() {
    this.showAppearanceMenu.update(v => !v);
  }

  setTheme(t: ThemeType) {
    this.themeService.setTheme(t);
  }

  changeFontSize(delta: number) {
    this.fontSize.update(v => {
      const newVal = v + delta;
      return Math.max(1, Math.min(5, newVal));
    });
  }

  async generateSummary() {
    const text = this.fullContent() || this.item()?.snippet;
    if (!text) return;

    this.isSummarizing.set(true);
    const result = await this.geminiService.summarize(text);
    this.summary.set(result);
    this.isSummarizing.set(false);
  }
}
