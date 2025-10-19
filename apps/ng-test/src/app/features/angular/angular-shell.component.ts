import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { filter } from 'rxjs';

interface AngularNavItem {
  id: string;
  title: string;
  icon: string;
  route?: string;
  tooltip?: string;
  badge?: string;
  badgeColor?: string;
  children?: AngularNavItem[];
}

@Component({
  selector: 'app-angular-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
  ],
  template: `
    <div class="angular-shell">
      <!-- Feature Header -->
      <mat-toolbar class="feature-toolbar">
        <div class="feature-header">
          <mat-icon class="feature-icon">code</mat-icon>
          <div class="feature-title">
            <h1>Angular</h1>
            <span class="feature-subtitle">Modern Web Development</span>
          </div>
        </div>

        <!-- Horizontal Navigation (Top Categories) -->
        <div class="feature-nav-horizontal">
          @for (category of angularCategories(); track category.id) {
            <button
              mat-button
              [class.active]="isActiveCategory(category.id)"
              (click)="navigateToCategory(category.id)"
              [matTooltip]="category.tooltip"
              class="category-btn">
              <mat-icon>{{ category.icon }}</mat-icon>
              <span>{{ category.title }}</span>
              @if (category.badge) {
                <mat-chip
                  class="nav-badge"
                  [class.badge-new]="category.badgeColor === 'accent'"
                  [class.badge-premium]="category.badgeColor === 'primary'">
                  {{ category.badge }}
                </mat-chip>
              }
            </button>
          }
        </div>
      </mat-toolbar>

      <!-- Layout: Sidebar + Content -->
      <div class="feature-layout">
        <!-- Right Sidebar Navigation -->
        <mat-sidenav-container class="feature-sidenav-container">
          <mat-sidenav
            mode="side"
            opened
            position="end"
            class="feature-sidenav">
            <div class="sidenav-content">
              <div class="sidenav-header">
                <mat-icon>list</mat-icon>
                <span>Quick Navigation</span>
              </div>

              <!-- Show items for active category -->
              @if (activeCategory(); as category) {
                @if (category.children) {
                  @for (item of category.children; track item.id) {
                    <a
                      mat-list-item
                      [routerLink]="item.route"
                      routerLinkActive="active-link"
                      class="nav-item"
                      [matTooltip]="item.tooltip"
                      matTooltipPosition="left">
                      <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
                      <span matListItemTitle>{{ item.title }}</span>
                      @if (item.badge) {
                        <mat-chip
                          matListItemMeta
                          class="item-badge"
                          [class.badge-new]="item.badgeColor === 'accent'">
                          {{ item.badge }}
                        </mat-chip>
                      }
                    </a>
                  }
                }
              } @else {
                <div class="no-selection">
                  <mat-icon>touch_app</mat-icon>
                  <p>Select a category above</p>
                </div>
              }
            </div>
          </mat-sidenav>

          <!-- Main Content Area -->
          <mat-sidenav-content class="feature-content">
            <div class="content-wrapper">
              <router-outlet />
            </div>
          </mat-sidenav-content>
        </mat-sidenav-container>
      </div>
    </div>
  `,
  styles: [`
    .angular-shell {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--bg-primary);
    }

    .feature-toolbar {
      background: var(--bg-secondary);
      border-bottom: 1px solid var(--border-color);
      padding: 1rem;
      min-height: auto;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .feature-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-shrink: 0;
    }

    .feature-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: var(--primary-color);
      flex-shrink: 0;
    }

    .feature-title {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      min-width: 0;
    }

    .feature-title h1 {
      margin: 0;
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--text-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .feature-subtitle {
      font-size: 0.875rem;
      color: var(--text-secondary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .feature-nav-horizontal {
      display: flex;
      gap: 0.5rem;
      overflow-x: auto;
      padding: 0.5rem 0;
      scrollbar-width: thin;

      &::-webkit-scrollbar {
        height: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--border-color);
        border-radius: 2px;
      }
    }

    .category-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      color: var(--text-secondary);
      transition: all 0.2s;
      white-space: nowrap;
      border: 1px solid transparent;

      mat-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }

      &:hover {
        background: var(--bg-tertiary);
        color: var(--text-primary);
        border-color: var(--border-color);
      }

      &.active {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);

        mat-icon {
          color: white;
        }
      }

      .nav-badge {
        font-size: 0.625rem;
        padding: 2px 6px;
        height: auto;
        min-height: 16px;
        margin-left: 4px;
        font-weight: 600;

        &.badge-new {
          background-color: var(--accent-color) !important;
          color: white !important;
        }

        &.badge-premium {
          background-color: #ffd700 !important;
          color: #000 !important;
        }
      }
    }

    .feature-layout {
      flex: 1;
      display: flex;
      overflow: hidden;
    }

    .feature-sidenav-container {
      flex: 1;
      background: var(--bg-primary);
    }

    .feature-sidenav {
      width: 280px;
      border-left: 1px solid var(--border-color);
      background: var(--bg-secondary);
    }

    .sidenav-content {
      padding: 1rem;
    }

    .sidenav-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      margin-bottom: 1rem;
      font-weight: 600;
      color: var(--text-primary);
      background: var(--bg-tertiary);
      border-radius: 8px;

      mat-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
        color: var(--primary-color);
      }
    }

    .nav-item {
      margin-bottom: 0.5rem;
      border-radius: 8px;
      color: var(--text-secondary);
      transition: all 0.2s;

      &:hover {
        background: var(--bg-tertiary);
        color: var(--text-primary);
      }

      &.active-link {
        background: rgba(63, 81, 181, 0.1);
        color: var(--primary-color);
        font-weight: 600;

        mat-icon {
          color: var(--primary-color);
        }
      }

      .item-badge {
        font-size: 0.625rem;
        padding: 2px 6px;
        height: auto;
        min-height: 16px;

        &.badge-new {
          background-color: var(--accent-color) !important;
          color: white !important;
        }
      }
    }

    .no-selection {
      text-align: center;
      padding: 2rem;
      color: var(--text-secondary);

      mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        margin-bottom: 1rem;
        opacity: 0.5;
      }

      p {
        margin: 0;
        font-size: 0.875rem;
      }
    }

    .feature-content {
      flex: 1;
      overflow: auto;
    }

    .content-wrapper {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    /* Mobile responsive */
    @media (max-width: 960px) {
      .feature-toolbar {
        min-height: auto;
      }

      .feature-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .feature-nav-horizontal {
        width: 100%;
      }

      .feature-sidenav {
        width: 100%;
      }
    }
  `]
})
export class AngularShellComponent implements OnInit {
  private router = inject(Router);

  private _activeCategoryId = signal<string | null>(null);

  // Angular navigation structure
  private angularNav: AngularNavItem[] = [
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
        { id: 'testdome', title: 'TestDome Page 1', icon: 'science', route: '/angular/playground/testdome', tooltip: 'TestDome experiment page 1' },
        { id: 'testdome2', title: 'TestDome Page 2', icon: 'experiment', route: '/angular/playground/testdome2', tooltip: 'TestDome experiment page 2' }
      ]
    }
  ];

  angularCategories = signal<AngularNavItem[]>(this.angularNav);
  activeCategory = computed(() => {
    const id = this._activeCategoryId();
    if (!id) return null;
    return this.angularCategories().find(cat => cat.id === id) || null;
  });

  ngOnInit() {
    // Set initial active category based on current route
    this.updateActiveCategoryFromRoute(this.router.url);

    // Listen to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateActiveCategoryFromRoute(event.urlAfterRedirects);
      });
  }

  private updateActiveCategoryFromRoute(url: string) {
    // Extract category from URL (e.g., /angular/core-concepts/empty -> core-concepts)
    const match = url.match(/\/angular\/([^\/]+)/);
    if (match) {
      const category = match[1];
      this._activeCategoryId.set(category);
    }
  }

  toggleCategory(categoryId: string) {
    if (this._activeCategoryId() === categoryId) {
      this._activeCategoryId.set(null);
    } else {
      this._activeCategoryId.set(categoryId);
    }
  }

  navigateToCategory(categoryId: string) {
    // Navigate to the category landing page
    const category = this.angularCategories().find(cat => cat.id === categoryId);
    if (category) {
      this.router.navigate([`/angular/${categoryId}`]);
    }
  }

  isActiveCategory(categoryId: string): boolean {
    return this._activeCategoryId() === categoryId;
  }
}

