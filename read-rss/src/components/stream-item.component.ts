
import { Component, input, output, inject, signal, computed, effect, ChangeDetectionStrategy } from '@angular/core';
import { RssItem } from '../services/rss.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GeminiService } from '../services/gemini.service';
import { LanguageService } from '../services/language.service';
import { ThemeService } from '../services/theme.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-stream-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  template: `
    <div 
      [id]="'stream-item-' + item().guid"
      class="transition-all duration-300 relative bg-[var(--c-bg-paper)] overflow-hidden border border-transparent"
      [class.rounded-2xl]="true"
      [class.shadow-sm]="!isExpanded()"
      [class.hover:shadow-md]="!isExpanded()"
      [class.shadow-xl]="isExpanded()"
      [class.shadow-black-10]="isExpanded()"
      [class.z-10]="isExpanded()"
      [class.scale-[1.01]]="isExpanded()"
      [class.border-[var(--c-border)]]="isExpanded()">
      
      <!-- 1. Header / Trigger Area -->
      <div 
        (click)="onToggle.emit()"
        class="group cursor-pointer p-5 md:px-8 md:py-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 transition-colors"
        [class.bg-[var(--c-bg-paper)]]="!isExpanded()"
        [class.bg-[var(--c-bg-hover)]]="isExpanded()">
        
        <!-- Meta Info (Left) -->
        <div class="md:w-48 shrink-0 flex flex-row md:flex-col items-center md:items-start gap-2 text-xs md:text-sm text-[var(--c-text-muted)]">
           
           <!-- Feed Favicon & Title -->
           <div class="flex items-center gap-2 mb-1">
             <img 
               [src]="'https://www.google.com/s2/favicons?domain=' + getDomain(item().link) + '&sz=32'" 
               loading="lazy"
               class="w-4 h-4 rounded-sm opacity-80" 
               alt=""
               onerror="this.style.display='none'"
             />
             <span class="font-bold truncate max-w-[130px] text-[var(--c-text)]">{{ item().feedTitle }}</span>
           </div>

           <!-- Localized Date -->
           <span class="hidden md:inline text-[11px] opacity-60">
             {{ langService.formatDate(item().pubDate, 'medium') }}
           </span>
           
           <!-- Mobile meta -->
           <span class="md:hidden">•</span>
           <span class="md:hidden">{{ langService.formatDate(item().pubDate, 'time') }}</span>
        </div>

        <!-- Title & Snippet -->
        <div class="flex-1 min-w-0">
           <h3 class="font-serif font-bold text-lg md:text-xl leading-snug text-[var(--c-text)] mb-2 group-hover:text-[var(--c-accent)] transition-colors">
             {{ item().title }}
           </h3>
           @if (!isExpanded()) {
             <p class="text-sm text-[var(--c-text-muted)] line-clamp-2 opacity-80 font-sans leading-relaxed">
               {{ item().snippet }}
             </p>
           }
        </div>

        <!-- Toggle Icon -->
        <div class="shrink-0 pt-1 text-[var(--c-text-muted)] opacity-50 group-hover:opacity-100 transition-opacity">
          @if (isExpanded()) {
             <div class="p-1 rounded-full bg-[var(--c-bg-app)] text-[var(--c-accent)]">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-4">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
               </svg>
             </div>
          } @else {
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
               <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
             </svg>
          }
        </div>
      </div>

      <!-- 2. Expanded Content (Focus Mode) -->
      @if (isExpanded()) {
        <div class="animate-in fade-in slide-in-from-top-1 duration-300 bg-[var(--c-bg-paper)]">
           
           <div class="px-6 md:px-12 py-10 w-full">
             
             <!-- Inner Reading Container -->
             <div class="max-w-2xl mx-auto">
               
               <!-- Toolbar -->
               <div class="flex items-center justify-between mb-8 pb-4 border-b border-[var(--c-border)]">
                  <a [href]="item().link" target="_blank" class="text-sm font-medium text-[var(--c-accent)] hover:underline flex items-center gap-1">
                    {{ langService.t().reader.source }}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                      <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd" />
                      <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  
                  <button 
                    (click)="generateSummary()"
                    [disabled]="isSummarizing()"
                    class="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all border-[var(--c-border)] hover:bg-[var(--c-bg-hover)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] text-[var(--c-text-muted)] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3">
                      <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813a3.75 3.75 0 0 0 .544-.721l.813-2.846a.75.75 0 0 1 1.442 0l.813 2.846Z" clip-rule="evenodd" />
                    </svg>
                    {{ langService.t().reader.summaryBtn }}
                  </button>
               </div>

               <!-- AI Summary -->
               @if (summary() || isSummarizing()) {
                 <div class="mb-10 p-6 rounded-xl bg-[var(--c-bg-hover)] border border-[var(--c-border)] shadow-inner">
                    <div class="flex items-center gap-2 mb-3">
                       <div class="w-1 h-4 bg-[var(--c-accent)] rounded-full"></div>
                       <span class="text-xs font-bold text-[var(--c-text)] uppercase tracking-widest">AI Insight</span>
                    </div>
                    
                    @if (isSummarizing()) {
                       <div class="flex space-x-1 items-center h-5">
                          <div class="w-1.5 h-1.5 bg-[var(--c-text-muted)] rounded-full animate-bounce"></div>
                          <div class="w-1.5 h-1.5 bg-[var(--c-text-muted)] rounded-full animate-bounce delay-100"></div>
                          <div class="w-1.5 h-1.5 bg-[var(--c-text-muted)] rounded-full animate-bounce delay-200"></div>
                       </div>
                    } @else {
                       <div class="prose-sm font-medium text-[var(--c-text)] whitespace-pre-line leading-relaxed">{{ summary() }}</div>
                    }
                 </div>
               }

               <!-- Main Text Content -->
               <article class="prose prose-lg max-w-none font-serif text-[var(--c-text)]"
                 [style]="proseStyles">
                 <div [innerHTML]="sanitizedContent()"></div>
               </article>
               
               <!-- Footer Collapse -->
               <div class="mt-16 pt-8 border-t border-[var(--c-border)] flex justify-center">
                 <button 
                    (click)="onToggle.emit()"
                    class="group flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--c-bg-hover)] text-[var(--c-text-muted)] hover:text-[var(--c-text)] hover:shadow-md transition-all text-sm font-bold tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4 group-hover:-translate-y-0.5 transition-transform">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                    {{ langService.t().feedList.collapse }}
                 </button>
               </div>

             </div>
           </div>
        </div>
      }
    </div>
  `
})
export class StreamItemComponent {
  item = input.required<RssItem>();
  isExpanded = input.required<boolean>();
  onToggle = output<void>();

  langService = inject(LanguageService);
  themeService = inject(ThemeService); 
  private sanitizer: DomSanitizer = inject(DomSanitizer);
  private geminiService = inject(GeminiService);

  summary = signal<string>('');
  isSummarizing = signal<boolean>(false);

  // Style mapping
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

  sanitizedContent = computed(() => {
    return this.sanitizer.bypassSecurityTrustHtml(this.item().content);
  });
  
  getDomain(url: string): string {
    try { return new URL(url).hostname; } catch { return ''; }
  }

  async generateSummary() {
    if (this.summary()) return;
    this.isSummarizing.set(true);
    const result = await this.geminiService.summarize(this.item().content || this.item().snippet);
    this.summary.set(result);
    this.isSummarizing.set(false);
  }
}
