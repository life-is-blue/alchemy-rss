
import { Component, input, output, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { ThemeService } from '../services/theme.service';

export type PageMode = 'home' | 'reading';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  template: `
    <header class="h-16 w-full border-b flex items-center justify-between px-6 shrink-0 transition-colors bg-[var(--c-bg-paper)] border-[var(--c-border)] z-40">
      
      <!-- Logo & Brand -->
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm select-none">
          {{ langService.t().appName.charAt(0) }}
        </div>
        <span class="font-serif font-bold text-lg tracking-tight hidden md:block text-[var(--c-text)]">
          {{ langService.t().appName }}
        </span>
      </div>

      <!-- Center Navigation -->
      <nav class="flex items-center gap-1 bg-[var(--c-bg-app)] p-1 rounded-full border border-[var(--c-border)]">
        <button 
          (click)="onNavigate.emit('home')"
          class="px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
          [class.bg-[var(--c-bg-paper)]]="activePage() === 'home'"
          [class.text-[var(--c-text)]]="activePage() === 'home'"
          [class.shadow-sm]="activePage() === 'home'"
          [class.text-[var(--c-text-muted)]]="activePage() !== 'home'"
          [class.hover:text-[var(--c-text)]]="activePage() !== 'home'">
          {{ langService.t().nav.home }}
        </button>
        <button 
          (click)="onNavigate.emit('reading')"
          class="px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
          [class.bg-[var(--c-bg-paper)]]="activePage() === 'reading'"
          [class.text-[var(--c-text)]]="activePage() === 'reading'"
          [class.shadow-sm]="activePage() === 'reading'"
          [class.text-[var(--c-text-muted)]]="activePage() !== 'reading'"
          [class.hover:text-[var(--c-text)]]="activePage() !== 'reading'">
          {{ langService.t().nav.reading }}
        </button>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-3">
         <!-- Theme -->
         <button 
           (click)="themeService.toggleDarkMode()"
           class="p-2 rounded-full hover:bg-[var(--c-bg-hover)] text-[var(--c-text-muted)] transition-colors"
           [title]="langService.t().reader.darkMode">
            @if (themeService.theme() === 'dark') {
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            }
         </button>

         <!-- Lang -->
         <button 
          (click)="langService.toggleLang()"
          class="w-8 h-8 text-xs font-bold flex items-center justify-center rounded border transition-colors text-[var(--c-text-muted)] border-[var(--c-border)] hover:text-[var(--c-text)] hover:bg-[var(--c-bg-hover)]">
          {{ langService.currentLang() === 'en' ? '中' : 'En' }}
        </button>
      </div>
    </header>
  `
})
export class TopNavComponent {
  activePage = input<PageMode>('home');
  onNavigate = output<PageMode>();
  
  langService = inject(LanguageService);
  themeService = inject(ThemeService);
}
