import { Injectable, signal, computed } from '@angular/core';
import { NAVIGATION_CONFIG } from './navigation.constants';

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
  private _filteredItems = signal<NavigationItem[]>([]);
  private _searchQuery = signal<string>('');
  private _loading = signal<boolean>(false);

  // Readonly signals
  expandedPanels = this._expandedPanels.asReadonly();
  sidebarOpen = this._sidebarOpen.asReadonly();
  sidebarCompact = this._sidebarCompact.asReadonly();
  navigationItems = this._filteredItems.asReadonly();
  searchQuery = this._searchQuery.asReadonly();
  loading = this._loading.asReadonly();

  // Computed properties
  hasNavigationItems = computed(() => this._navigationItems().length > 0);

  constructor() {
    this.loadNavigation();
  }

  /**
   * Load navigation items from constants
   */
  private loadNavigation(): void {
    this._loading.set(true);
    
    // Load navigation from constants - single source of truth
    this._navigationItems.set(NAVIGATION_CONFIG);
    this._filteredItems.set(NAVIGATION_CONFIG);
    this._loading.set(false);
    
    // Start with all panels collapsed by default
    this._expandedPanels.set(new Set());
  }


  /**
   * Reload navigation from constants
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

  /**
   * Ensure a panel is expanded (open it if it's collapsed)
   */
  ensureExpanded(panelId: string): void {
    const current = this._expandedPanels();
    if (!current.has(panelId)) {
      const newSet = new Set(current);
      newSet.add(panelId);
      this._expandedPanels.set(newSet);
    }
  }

  // Sidebar management
  toggleSidebar(): void {
    this._sidebarOpen.update(open => !open);
  }

  toggleSidebarCompact(): void {
    this._sidebarCompact.update(compact => !compact);
  }

  // Search functionality
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

