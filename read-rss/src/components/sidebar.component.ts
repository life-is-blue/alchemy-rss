
import { Component, output, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <nav aria-label="Tool Navigation" class="h-full flex flex-col items-center py-6 border-r w-16 md:w-20 shrink-0 z-30 transition-colors duration-300 bg-[var(--c-bg-sidebar)] border-[var(--c-border)]">
      
      <!-- Nav Items -->
      <div class="flex flex-col gap-6 w-full items-center">
        
        <!-- Home / Briefing -->
        <button 
          (click)="onSelect.emit('home')"
          class="group relative flex flex-col items-center justify-center text-[var(--c-text-muted)] hover:text-[var(--c-text)] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
          [title]="langService.t().sidebar.home"
          [attr.aria-label]="langService.t().sidebar.home">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-7 group-hover:stroke-2 transition-all">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span class="text-[10px] mt-1 opacity-70 group-hover:opacity-100 hidden md:block">{{ langService.t().sidebar.home }}</span>
        </button>

        <!-- Reader -->
        <button 
          (click)="onSelect.emit('reader')"
          class="group relative flex flex-col items-center justify-center text-[var(--c-text-muted)] hover:text-[var(--c-text)] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
          [title]="langService.t().sidebar.reader"
          [attr.aria-label]="langService.t().sidebar.reader">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-7 group-hover:stroke-2 transition-all">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
          <span class="text-[10px] mt-1 opacity-70 group-hover:opacity-100 hidden md:block">{{ langService.t().sidebar.reader }}</span>
        </button>
      </div>
    </nav>
  `
})
export class SidebarComponent {
  onSelect = output<string>();
  langService = inject(LanguageService);
}
