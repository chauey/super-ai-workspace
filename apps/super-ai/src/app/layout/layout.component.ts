import { Component, OnInit, OnDestroy, signal, computed, inject, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    SidebarComponent
  ],
  template: `
    <div class="layout-container">
      <!-- Header -->
      <app-header
        (toggleSidebar)="toggleSidebar()"
        class="header">
      </app-header>

      <!-- Main Content Area -->
      <div class="content-container">
           <!-- Sidebar -->
           <app-sidebar
             #sidebar
             [isOpen]="sidebarOpen()"
             [sidenavMode]="sidenavMode()"
             (closeSidebar)="closeSidebar()"
             class="sidebar">
           </app-sidebar>

           <!-- Main Content -->
           <main
             class="main-content"
             [class.sidebar-open]="sidebarOpen() && !isMobile()"
             [class.sidebar-collapsed]="sidebar?.isCollapsed() && sidebarOpen() && !isMobile()"
             [style.margin-left.px]="getMainContentMargin()">
             <div class="content-wrapper">
               <router-outlet></router-outlet>
             </div>
           </main>

        <!-- Overlay for mobile -->
        <div
          class="sidebar-overlay"
          *ngIf="sidebarOpen() && isMobile()"
          (click)="closeSidebar()">
        </div>
      </div>
    </div>
  `,
  styles: [`
    .layout-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .header {
      flex-shrink: 0;
      z-index: 1001;
    }

    .content-container {
      flex: 1;
      display: flex;
      position: relative;
      overflow: hidden;
    }

    .sidebar {
      flex-shrink: 0;
      z-index: 1000;
    }

    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background: var(--mat-app-background-color);
      transition: margin-left 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    }

    .content-wrapper {
      flex: 1;
      overflow: auto;
      padding: 24px;
    }

    .sidebar-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      z-index: 999;
      cursor: pointer;
    }

    /* Desktop styles */
    @media (min-width: 769px) {
      .main-content {
        transition: margin-left 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
    }

    /* Tablet and mobile styles */
    @media (max-width: 768px) {
      .content-wrapper {
        padding: 16px;
      }
    }

    @media (max-width: 480px) {
      .content-wrapper {
        padding: 12px;
      }
    }
  `]
})
export class LayoutComponent implements OnInit, OnDestroy {
  private breakpointObserver = inject(BreakpointObserver);
  private destroy$ = new Subject<void>();

  // ViewChild reference to sidebar
  sidebar = viewChild<SidebarComponent>('sidebar');

  // Signals for reactive state management
  private _isMobile = signal(false);
  private _sidebarOpen = signal(true);

  // Computed properties
  isMobile = computed(() => this._isMobile());
  sidebarOpen = computed(() => this._sidebarOpen());
  sidenavMode = computed(() => this.isMobile() ? 'over' : 'side');

  ngOnInit(): void {
    // Monitor screen size changes
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        const wasMobile = this._isMobile();
        this._isMobile.set(result.matches);

        // Auto-close sidebar on mobile, auto-open on desktop
        if (!wasMobile && this._isMobile()) {
          // Switched to mobile
          this._sidebarOpen.set(false);
        } else if (wasMobile && !this._isMobile()) {
          // Switched to desktop
          this._sidebarOpen.set(true);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): void {
    this._sidebarOpen.set(!this._sidebarOpen());
  }

  closeSidebar(): void {
    this._sidebarOpen.set(false);
  }

  getMainContentMargin(): number {
    if (this.isMobile() || !this.sidebarOpen()) {
      return 0;
    }

    const sidebar = this.sidebar();
    if (!sidebar) return 0;

    if (sidebar.isCollapsed()) {
      return 64;
    }

    return sidebar.sidebarWidth();
  }
}
