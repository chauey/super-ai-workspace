import { Component, signal, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeService, Theme, Layout } from './core/services/theme.service';
import { NavigationService } from './core/navigation/navigation.service';
import { DensityStore, DensityMode } from './store/density/density.store';
import { StoreInitializerService } from './core/services/store-initializer.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-test');

  // Services
  private themeService = inject(ThemeService);
  public navigationService = inject(NavigationService);
  readonly densityStore = inject(DensityStore);
  private storeInitializer = inject(StoreInitializerService); // This will initialize the store

  // Computed values
  sidebarMode = computed(() => this.sidebarCompact() ? 'over' : 'side');
  sidebarWidth = computed(() => this.sidebarCompact() ? '64px' : '280px');

  // Density mode from store
  densityMode = this.densityStore.mode;

  // Theme and layout state
  get theme() { return this.themeService.theme; }
  get layout() { return this.themeService.layout; }
  get isDark() { return this.themeService.isDark; }
  get isLight() { return this.themeService.isLight; }

  // Navigation state
  get expandedPanels() { return this.navigationService.expandedPanels; }
  get sidebarOpen() { return this.navigationService.sidebarOpen; }
  get sidebarCompact() { return this.navigationService.sidebarCompact; }
  get navigationItems() { return this.navigationService.navigationItems; }


  // Theme methods
  setTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  setLayout(layout: Layout): void {
    this.themeService.setLayout(layout);
  }

  // Navigation methods
  togglePanel(panelId: string): void {
    this.navigationService.togglePanel(panelId);
  }

  expandAll(): void {
    this.navigationService.expandAll();
  }

  collapseAll(): void {
    this.navigationService.collapseAll();
  }

  toggleSidebar(): void {
    this.navigationService.toggleSidebar();
  }

  toggleSidebarCompact(): void {
    this.navigationService.toggleSidebarCompact();
  }

  isPanelExpanded(panelId: string): boolean {
    return this.navigationService.isPanelExpanded(panelId);
  }

  ensureExpanded(panelId: string): void {
    this.navigationService.ensureExpanded(panelId);
  }

  handleSectionClick(item: any, event: Event): void {
    // If the item has children, toggle the panel
    if (item.children) {
      this.togglePanel(item.id);
    }

    // If the item has a route and no children, navigate
    if (item.route && !item.children) {
      // Navigation will be handled by the routerLink
    }
  }

  // Density methods
  setDensity(mode: DensityMode): void {
    this.densityStore.setMode(mode);
  }
}
