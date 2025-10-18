import { Injectable, signal, computed } from '@angular/core';

export type Theme = 'light' | 'dark' | 'system';
export type Layout = 'default' | 'compact' | 'minimal';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'ng-test-theme';
  private readonly LAYOUT_KEY = 'ng-test-layout';

  // Theme state
  private _theme = signal<Theme>('system');
  private _layout = signal<Layout>('default');

  // Computed values
  theme = this._theme.asReadonly();
  layout = this._layout.asReadonly();

  isDark = computed(() => {
    if (this._theme() === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return this._theme() === 'dark';
  });

  isLight = computed(() => !this.isDark());

  constructor() {
    this.loadTheme();
    this.loadLayout();
    this.watchSystemTheme();
  }

  setTheme(theme: Theme): void {
    this._theme.set(theme);
    localStorage.setItem(this.THEME_KEY, theme);
    this.applyTheme();
  }

  setLayout(layout: Layout): void {
    this._layout.set(layout);
    localStorage.setItem(this.LAYOUT_KEY, layout);
    this.applyLayout();
  }

  toggleTheme(): void {
    const current = this._theme();
    if (current === 'light') {
      this.setTheme('dark');
    } else if (current === 'dark') {
      this.setTheme('system');
    } else {
      this.setTheme('light');
    }
  }

  private loadTheme(): void {
    const saved = localStorage.getItem(this.THEME_KEY) as Theme;
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      this._theme.set(saved);
    }
    this.applyTheme();
  }

  private loadLayout(): void {
    const saved = localStorage.getItem(this.LAYOUT_KEY) as Layout;
    if (saved && ['default', 'compact', 'minimal'].includes(saved)) {
      this._layout.set(saved);
    }
    this.applyLayout();
  }

  private applyTheme(): void {
    const isDark = this.isDark();
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.setAttribute('data-theme', this._theme());
  }

  private applyLayout(): void {
    document.documentElement.setAttribute('data-layout', this._layout());
  }

  private watchSystemTheme(): void {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this._theme() === 'system') {
        this.applyTheme();
      }
    });
  }
}

