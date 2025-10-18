import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface NavigationItem {
  id: string;
  title: string;
  icon: string;
  route?: string;
  tooltip?: string;
  children?: NavigationItem[];
  badge?: string;
  badgeColor?: string;
}

export interface NavigationConfig {
  navigation: NavigationItem[];
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _expandedPanels = signal<Set<string>>(new Set());
  private _sidebarOpen = signal<boolean>(true);
  private _sidebarCompact = signal<boolean>(false);
  private _navigationItems = signal<NavigationItem[]>([]);
  private _loading = signal<boolean>(false);

  // Readonly signals
  expandedPanels = this._expandedPanels.asReadonly();
  sidebarOpen = this._sidebarOpen.asReadonly();
  sidebarCompact = this._sidebarCompact.asReadonly();
  navigationItems = this._navigationItems.asReadonly();
  loading = this._loading.asReadonly();

  // Computed properties
  hasNavigationItems = computed(() => this._navigationItems().length > 0);

  constructor(private http: HttpClient) {
    this.loadNavigation();
  }

  /**
   * Load navigation items from JSON file
   */
  private loadNavigation(): void {
    this._loading.set(true);

    this.http.get<NavigationConfig>('/assets/navigation.json')
      .pipe(
        map(config => config.navigation),
        catchError(() => {
          // Fallback to embedded navigation if JSON file fails to load
          console.warn('Failed to load navigation.json, using embedded navigation');
          return of(this.getEmbeddedNavigation());
        })
      )
      .subscribe({
        next: (items) => {
          this._navigationItems.set(items);
          this._loading.set(false);
          // Expand all panels by default
          this._expandedPanels.set(new Set(items.map(item => item.id)));
        },
        error: (error) => {
          console.error('Error loading navigation:', error);
          this._navigationItems.set(this.getEmbeddedNavigation());
          this._loading.set(false);
        }
      });
  }

  /**
   * Fallback embedded navigation (same as JSON structure)
   */
  private getEmbeddedNavigation(): NavigationItem[] {
    return [
      {
        id: 'core-concepts',
        title: 'Core Concepts',
        icon: 'build',
        tooltip: 'Angular core concepts and fundamentals',
        children: [
          {
            id: 'empty',
            title: 'Empty Page',
            icon: 'description',
            route: '/angular/core-concepts/empty',
            tooltip: 'Empty page template'
          },
          {
            id: 'control-flow',
            title: 'Control Flow',
            icon: 'control_camera',
            route: '/angular/core-concepts/control-flow',
            tooltip: 'Angular control flow syntax'
          },
          {
            id: 'signals',
            title: 'Signals & Resources',
            icon: 'signal_cellular_alt',
            route: '/angular/core-concepts/signals',
            tooltip: 'Angular signals and resources'
          }
        ]
      },
      {
        id: 'forms-data',
        title: 'Forms & Data',
        icon: 'description',
        tooltip: 'Angular forms and data handling',
        children: [
          {
            id: 'reactive-forms',
            title: 'Reactive Forms',
            icon: 'edit',
            route: '/angular/forms-data/reactive-forms',
            tooltip: 'Angular reactive forms'
          },
          {
            id: 'reactive-forms-signals',
            title: 'Forms + Signals',
            icon: 'signal_cellular_alt',
            route: '/angular/forms-data/reactive-forms-signals',
            tooltip: 'Reactive forms with signals'
          },
          {
            id: 'http-client',
            title: 'HTTP Client',
            icon: 'http',
            route: '/angular/forms-data/http-client',
            tooltip: 'Angular HTTP client'
          }
        ]
      },
      {
        id: 'architecture',
        title: 'Architecture',
        icon: 'architecture',
        tooltip: 'Angular architecture patterns',
        children: [
          {
            id: 'dependency-injection',
            title: 'Dependency Injection',
            icon: 'injection',
            route: '/angular/architecture/dependency-injection',
            tooltip: 'Angular dependency injection'
          },
          {
            id: 'lifecycle-hooks',
            title: 'Lifecycle Hooks',
            icon: 'cycle',
            route: '/angular/architecture/lifecycle-hooks',
            tooltip: 'Angular component lifecycle hooks'
          },
          {
            id: 'services',
            title: 'Services',
            icon: 'build',
            route: '/angular/architecture/services',
            tooltip: 'Angular services'
          }
        ]
      },
      {
        id: 'advanced-features',
        title: 'Advanced Features',
        icon: 'extension',
        tooltip: 'Advanced Angular features',
        children: [
          {
            id: 'pipes',
            title: 'Pipes',
            icon: 'filter_list',
            route: '/angular/advanced-features/pipes',
            tooltip: 'Angular pipes'
          },
          {
            id: 'guards-interceptors',
            title: 'Guards & Interceptors',
            icon: 'security',
            route: '/angular/advanced-features/guards-interceptors',
            tooltip: 'Angular guards and interceptors'
          },
          {
            id: 'lazy-loading',
            title: 'Lazy Loading',
            icon: 'speed',
            route: '/angular/advanced-features/lazy-loading',
            tooltip: 'Angular lazy loading'
          },
          {
            id: 'defer',
            title: '@defer Directive',
            icon: 'schedule',
            route: '/angular/advanced-features/defer',
            tooltip: 'Angular @defer directive'
          }
        ]
      },
      {
        id: 'playground',
        title: 'Playground',
        icon: 'play_arrow',
        tooltip: 'Experimental features and testing',
        children: [
          {
            id: 'testdome',
            title: 'TestDome Page 1',
            icon: 'science',
            route: '/angular/playground/testdome',
            tooltip: 'TestDome experiment page 1',
            badge: 'New',
            badgeColor: 'accent'
          },
          {
            id: 'testdome2',
            title: 'TestDome Page 2',
            icon: 'experiment',
            route: '/angular/playground/testdome2',
            tooltip: 'TestDome experiment page 2'
          }
        ]
      }
    ];
  }

  /**
   * Reload navigation from JSON file
   */
  reloadNavigation(): void {
    this.loadNavigation();
  }

  /**
   * Get navigation item by ID
   */
  getNavigationItem(id: string): NavigationItem | undefined {
    const items = this._navigationItems();
    return this.findNavigationItem(items, id);
  }

  /**
   * Find navigation item recursively
   */
  private findNavigationItem(items: NavigationItem[], id: string): NavigationItem | undefined {
    for (const item of items) {
      if (item.id === id) {
        return item;
      }
      if (item.children) {
        const found = this.findNavigationItem(item.children, id);
        if (found) {
          return found;
        }
      }
    }
    return undefined;
  }

  // Panel management
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
    const items = this._navigationItems();
    this._expandedPanels.set(new Set(items.map(item => item.id)));
  }

  collapseAll(): void {
    this._expandedPanels.set(new Set());
  }

  isPanelExpanded(panelId: string): boolean {
    return this._expandedPanels().has(panelId);
  }

  // Sidebar management
  toggleSidebar(): void {
    this._sidebarOpen.update(open => !open);
  }

  toggleSidebarCompact(): void {
    this._sidebarCompact.update(compact => !compact);
  }
}

