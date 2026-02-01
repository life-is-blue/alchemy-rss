
import { Injectable, signal, effect } from '@angular/core';

export type ThemeType = 'light' | 'warm' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = signal<ThemeType>('light');

  // Define CSS variables for each theme
  private themes: Record<ThemeType, Record<string, string>> = {
    light: {
      '--c-bg-app': '#f3f4f6',      // gray-100
      '--c-bg-paper': '#ffffff',
      '--c-bg-sidebar': '#f9fafb',  // gray-50
      '--c-bg-hover': '#f3f4f6',    // gray-100
      '--c-text': '#111827',        // gray-900
      '--c-text-muted': '#6b7280',  // gray-500
      '--c-border': '#e5e7eb',      // gray-200
      '--c-accent': '#2563eb',      // blue-600
    },
    warm: {
      '--c-bg-app': '#f6f1e8',
      '--c-bg-paper': '#f6f1e8',
      '--c-bg-sidebar': '#f6f1e8',
      '--c-bg-hover': '#ece7de',
      '--c-text': '#433422',
      '--c-text-muted': '#8c7b66',
      '--c-border': '#e6e1d8',
      '--c-accent': '#2563eb',      // Keep blue for clear interaction
    },
    dark: {
      '--c-bg-app': '#1a1a1a',
      '--c-bg-paper': '#1a1a1a',
      '--c-bg-sidebar': '#141414',
      '--c-bg-hover': '#2a2a2a',
      '--c-text': '#e5e5e5',
      '--c-text-muted': '#9ca3af',  // gray-400
      '--c-border': '#333333',
      '--c-accent': '#60a5fa',      // blue-400
    }
  };

  constructor() {
    effect(() => {
      const t = this.theme();
      const vars = this.themes[t];
      const root = document.documentElement;

      // Apply all variables to root
      for (const [key, value] of Object.entries(vars)) {
        // Fix: Explicitly cast value to string to avoid "unknown" type error
        root.style.setProperty(key, value as string);
      }
    });
  }

  setTheme(t: ThemeType) {
    this.theme.set(t);
  }

  toggleDarkMode() {
    this.theme.update(current => current === 'dark' ? 'light' : 'dark');
  }
}
