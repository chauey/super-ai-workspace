import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface NavigationItem {
  id: string;
  title: string;
  icon: string;
  route?: string;
  children?: NavigationItem[];
  badge?: string;
  badgeColor?: string;
  tooltip?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private http = inject(HttpClient);

  private _navigationItems = signal<NavigationItem[]>([]);
  private _filteredItems = signal<NavigationItem[]>([]);
  private _searchQuery = signal<string>('');
  private _loading = signal<boolean>(true);
  private _expandedPanels = signal<Set<string>>(new Set());
  private _sidebarOpen = signal<boolean>(true);
  private _sidebarCompact = signal<boolean>(false);

  navigationItems = this._filteredItems.asReadonly();
  searchQuery = this._searchQuery.asReadonly();
  loading = this._loading.asReadonly();
  expandedPanels = this._expandedPanels.asReadonly();
  sidebarOpen = this._sidebarOpen.asReadonly();
  sidebarCompact = this._sidebarCompact.asReadonly();

  constructor() {
    this.loadNavigation();
  }

  private loadNavigation(): void {
    this.http.get<{ navigation: NavigationItem[] }>('/assets/navigation.json')
      .subscribe({
        next: (data) => {
          this._navigationItems.set(data.navigation);
          this._filteredItems.set(data.navigation);
          this._loading.set(false);
          // Expand top-level items by default
          this._expandedPanels.set(new Set(data.navigation.map(item => item.id)));
        },
        error: (error) => {
          console.warn('Failed to load navigation.json, using embedded navigation', error);
          const fallback = this.getFallbackNavigation();
          this._navigationItems.set(fallback);
          this._filteredItems.set(fallback);
          this._loading.set(false);
          this._expandedPanels.set(new Set(fallback.map(item => item.id)));
        }
      });
  }

  private getFallbackNavigation(): NavigationItem[] {
    return [
      {
        id: 'core-concepts',
        title: 'Core Concepts',
        icon: 'build',
        tooltip: 'Angular core concepts and fundamentals',
        children: [
          { id: 'empty', title: 'Empty Page', icon: 'description', route: '/angular/core-concepts/empty', tooltip: 'Empty page template' },
          { id: 'control-flow', title: 'Control Flow', icon: 'control_camera', route: '/angular/core-concepts/control-flow', tooltip: 'Angular control flow syntax' },
          { id: 'signals', title: 'Signals & Resources', icon: 'signal_cellular_alt', route: '/angular/core-concepts/signals', tooltip: 'Angular signals and resources' }
        ]
      },
      {
        id: 'forms-data',
        title: 'Forms & Data',
        icon: 'description',
        tooltip: 'Angular forms and data handling',
        children: [
          { id: 'reactive-forms', title: 'Reactive Forms', icon: 'edit', route: '/angular/forms-data/reactive-forms', tooltip: 'Angular reactive forms' },
          { id: 'reactive-forms-signals', title: 'Forms + Signals', icon: 'signal_cellular_alt', route: '/angular/forms-data/reactive-forms-signals', tooltip: 'Reactive forms with signals' },
          { id: 'http-client', title: 'HTTP Client', icon: 'http', route: '/angular/forms-data/http-client', tooltip: 'Angular HTTP client' }
        ]
      },
      {
        id: 'architecture',
        title: 'Architecture',
        icon: 'architecture',
        tooltip: 'Angular architecture patterns',
        children: [
          { id: 'dependency-injection', title: 'Dependency Injection', icon: 'injection', route: '/angular/architecture/dependency-injection', tooltip: 'Angular dependency injection' },
          { id: 'lifecycle-hooks', title: 'Lifecycle Hooks', icon: 'cycle', route: '/angular/architecture/lifecycle-hooks', tooltip: 'Angular component lifecycle hooks' },
          { id: 'services', title: 'Services', icon: 'build', route: '/angular/architecture/services', tooltip: 'Angular services' }
        ]
      },
      {
        id: 'advanced-features',
        title: 'Advanced Features',
        icon: 'extension',
        tooltip: 'Advanced Angular features',
        children: [
          { id: 'pipes', title: 'Pipes', icon: 'filter_list', route: '/angular/advanced-features/pipes', tooltip: 'Angular pipes' },
          { id: 'guards-interceptors', title: 'Guards & Interceptors', icon: 'security', route: '/angular/advanced-features/guards-interceptors', tooltip: 'Angular guards and interceptors' },
          { id: 'lazy-loading', title: 'Lazy Loading', icon: 'speed', route: '/angular/advanced-features/lazy-loading', tooltip: 'Angular lazy loading' },
          { id: 'defer', title: '@defer Directive', icon: 'schedule', route: '/angular/advanced-features/defer', tooltip: 'Angular @defer directive' }
        ]
      },
      {
        id: 'playground',
        title: 'Playground',
        icon: 'play_arrow',
        tooltip: 'Experimental features and testing',
        children: [
          { id: 'testdome', title: 'TestDome Page 1', icon: 'science', route: '/angular/playground/testdome', tooltip: 'TestDome experiment page 1', badge: 'New', badgeColor: 'accent' },
          { id: 'testdome2', title: 'TestDome Page 2', icon: 'experiment', route: '/angular/playground/testdome2', tooltip: 'TestDome experiment page 2' }
        ]
      }
    ];
  }

  hasNavigationItems(): boolean {
    return this._navigationItems().length > 0;
  }

  togglePanel(panelId: string): void {
    const current = this._expandedPanels();
    const newSet = new Set(current);
    if (newSet.has(panelId)) {
      newSet.delete(panelId);
    } else {
      newSet.add(panelId);
    }
    this._expandedPanels.set(newSet);
  }

  expandAll(): void {
    const allIds = this._navigationItems().map(item => item.id);
    this._expandedPanels.set(new Set(allIds));
  }

  collapseAll(): void {
    this._expandedPanels.set(new Set());
  }

  toggleSidebar(): void {
    this._sidebarOpen.update(open => !open);
  }

  toggleSidebarCompact(): void {
    this._sidebarCompact.update(compact => !compact);
  }

  isPanelExpanded(panelId: string): boolean {
    return this._expandedPanels().has(panelId);
  }

  setSearchQuery(query: string): void {
    this._searchQuery.set(query);
    this.filterNavigationItems(query);
  }

  clearSearch(): void {
    this._searchQuery.set('');
    this._filteredItems.set(this._navigationItems());
  }

  private filterNavigationItems(query: string): void {
    if (!query.trim()) {
      this._filteredItems.set(this._navigationItems());
      return;
    }

    const filtered = this._navigationItems().map(item => this.filterItem(item, query.toLowerCase())).filter((item): item is NavigationItem => item !== null);
    this._filteredItems.set(filtered);
  }

  private filterItem(item: NavigationItem, query: string): NavigationItem | null {
    const matchesTitle = item.title.toLowerCase().includes(query);
    const matchesTooltip = item.tooltip?.toLowerCase().includes(query) || false;

    // Check if any children match
    const filteredChildren = item.children?.map(child => this.filterItem(child, query)).filter((child): child is NavigationItem => child !== null) || [];

    // Include item if it matches or has matching children
    if (matchesTitle || matchesTooltip || filteredChildren.length > 0) {
      return {
        ...item,
        children: filteredChildren.length > 0 ? filteredChildren : item.children
      };
    }

    return null;
  }
}
