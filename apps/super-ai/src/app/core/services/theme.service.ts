import { Injectable, signal, effect, DOCUMENT, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'theme';

  // Signal to track current theme
  public theme = signal<Theme>(this.getInitialTheme());

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Effect to apply theme changes to the document
    effect(() => {
      this.applyTheme(this.theme());
    });
  }

  private getInitialTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }

    // Check localStorage first
    const stored = localStorage.getItem(this.storageKey) as Theme;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }

  private applyTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Remove existing theme classes
    this.document.documentElement.classList.remove('light-theme', 'dark-theme');

    // Add new theme class
    this.document.documentElement.classList.add(`${theme}-theme`);

    // Store in localStorage
    localStorage.setItem(this.storageKey, theme);
  }

  public toggleTheme(): void {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }

  public setTheme(theme: Theme): void {
    this.theme.set(theme);
  }

  public isDarkMode(): boolean {
    return this.theme() === 'dark';
  }
}
