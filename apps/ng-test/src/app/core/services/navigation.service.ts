import { Injectable, signal } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  icon: string;
  route?: string;
  children?: NavigationItem[];
  badge?: string;
  badgeColor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _expandedPanels = signal<Set<string>>(new Set());
  private _sidebarOpen = signal<boolean>(true);
  private _sidebarCompact = signal<boolean>(false);

  expandedPanels = this._expandedPanels.asReadonly();
  sidebarOpen = this._sidebarOpen.asReadonly();
  sidebarCompact = this._sidebarCompact.asReadonly();

  navigationItems: NavigationItem[] = [
    {
      id: 'core-concepts',
      title: 'Core Concepts',
      icon: 'build',
      children: [
        { id: 'empty', title: 'Empty Page', icon: 'description', route: '/core-concepts/empty' },
        { id: 'control-flow', title: 'Control Flow', icon: 'control_camera', route: '/core-concepts/control-flow' },
        { id: 'signals', title: 'Signals & Resources', icon: 'signal_cellular_alt', route: '/core-concepts/signals' }
      ]
    },
    {
      id: 'forms-data',
      title: 'Forms & Data',
      icon: 'description',
      children: [
        { id: 'reactive-forms', title: 'Reactive Forms', icon: 'edit', route: '/forms-data/reactive-forms' },
        { id: 'reactive-forms-signals', title: 'Forms + Signals', icon: 'signal_cellular_alt', route: '/forms-data/reactive-forms-signals' },
        { id: 'http-client', title: 'HTTP Client', icon: 'http', route: '/forms-data/http-client' }
      ]
    },
    {
      id: 'architecture',
      title: 'Architecture',
      icon: 'architecture',
      children: [
        { id: 'dependency-injection', title: 'Dependency Injection', icon: 'injection', route: '/architecture/dependency-injection' },
        { id: 'lifecycle-hooks', title: 'Lifecycle Hooks', icon: 'cycle', route: '/architecture/lifecycle-hooks' },
        { id: 'services', title: 'Services', icon: 'build', route: '/architecture/services' }
      ]
    },
    {
      id: 'advanced-features',
      title: 'Advanced Features',
      icon: 'extension',
      children: [
        { id: 'pipes', title: 'Pipes', icon: 'filter_list', route: '/advanced-features/pipes' },
        { id: 'guards-interceptors', title: 'Guards & Interceptors', icon: 'security', route: '/advanced-features/guards-interceptors' },
        { id: 'lazy-loading', title: 'Lazy Loading', icon: 'speed', route: '/advanced-features/lazy-loading' },
        { id: 'defer', title: '&#64;defer Directive', icon: 'schedule', route: '/advanced-features/defer' }
      ]
    },
    {
      id: 'playground',
      title: 'Playground',
      icon: 'play_arrow',
      children: [
        { id: 'testdome', title: 'TestDome Page 1', icon: 'science', route: '/playground/testdome', badge: 'New', badgeColor: 'accent' },
        { id: 'testdome2', title: 'TestDome Page 2', icon: 'experiment', route: '/playground/testdome2' }
      ]
    }
  ];

  constructor() {
    // Expand all panels by default
    this._expandedPanels.set(new Set(this.navigationItems.map(item => item.id)));
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
    this._expandedPanels.set(new Set(this.navigationItems.map(item => item.id)));
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
}
