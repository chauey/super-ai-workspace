import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { TranslocoModule } from '@jsverse/transloco';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    // TranslocoModule
  ],
  template: `
    <mat-sidenav
      class="sidebar"
      [class.collapsed]="isCollapsed()"
      [class.resizing]="isResizing()"
      [opened]="isOpen()"
      [mode]="sidenavMode()"
      [fixedInViewport]="true"
      [fixedTopGap]="64"
      [style.width.px]="sidebarWidth()"
      (closedStart)="closeSidebar.emit()">

      <!-- Resize Handle -->
      <div
        class="resize-handle"
        [class.dragging]="isResizing()"
        *ngIf="sidenavMode() === 'side' && !isCollapsed()"
        (mousedown)="startResize($event)"
        [matTooltip]="'Drag to resize'"
        matTooltipPosition="left">
      </div>

      <!-- Sidebar Header -->
      <div class="sidebar-header">
        <div class="header-content">
          <div class="logo-section" *ngIf="!isCollapsed()">
            <mat-icon class="logo-icon">psychology</mat-icon>
            <span class="logo-text">Super AI</span>
          </div>
          <button
            mat-icon-button
            class="collapse-btn"
            (click)="toggleCollapse()"
            *ngIf="sidenavMode() === 'side'"
            [matTooltip]="isCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
            matTooltipPosition="right">
            <mat-icon>{{ isCollapsed() ? 'chevron_right' : 'chevron_left' }}</mat-icon>
          </button>
        </div>
      </div>

      <!-- Sidebar Content -->
      <div class="sidebar-content">
        <!-- Navigation Menu -->
        <mat-nav-list class="nav-list">
          <div class="nav-section">
            <div class="nav-section-title" *ngIf="!isCollapsed()">Dashboard</div>

            <mat-list-item
              *ngFor="let item of menuItems"
              [routerLink]="item.route"
              routerLinkActive="active"
              class="nav-item"
              [matTooltip]="isCollapsed() ? item.label : ''"
              matTooltipPosition="right">
              <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
              <span matListItemTitle *ngIf="!isCollapsed()">{{ item.label }}</span>
            </mat-list-item>
          </div>

          <mat-divider class="nav-divider" *ngIf="!isCollapsed()"></mat-divider>

          <div class="nav-section">
            <div class="nav-section-title" *ngIf="!isCollapsed()">Management</div>

            <mat-list-item
              *ngFor="let item of managementItems"
              [routerLink]="item.route"
              routerLinkActive="active"
              class="nav-item"
              [matTooltip]="isCollapsed() ? item.label : ''"
              matTooltipPosition="right">
              <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
              <span matListItemTitle *ngIf="!isCollapsed()">{{ item.label }}</span>
            </mat-list-item>
          </div>
        </mat-nav-list>

        <!-- Footer -->
        <div class="sidebar-footer" *ngIf="!isCollapsed()">
          <div class="user-info">
            <div class="user-avatar">
              <mat-icon>account_circle</mat-icon>
            </div>
            <div class="user-details">
              <div class="user-name">John Doe</div>
              <div class="user-role">Administrator</div>
            </div>
          </div>
        </div>

        <!-- Collapsed Footer -->
        <div class="sidebar-footer-collapsed" *ngIf="isCollapsed()">
          <button mat-icon-button matTooltip="John Doe - Administrator" matTooltipPosition="right">
            <mat-icon>account_circle</mat-icon>
          </button>
        </div>
      </div>
    </mat-sidenav>
  `,
         styles: [`
           .sidebar {
             width: 220px;
             background: var(--mat-sidenav-container-background-color);
             border-right: 1px solid rgba(0,0,0,0.12);
             transition: width 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
             position: relative;
             min-width: 180px;
             max-width: 400px;
             overflow: hidden;

             &.collapsed {
               width: 64px;
             }

             &.resizing {
               transition: none;
             }
           }

           .resize-handle {
             position: absolute;
             top: 0;
             right: 0px;
             width: 4px;
             height: 100%;
             background: transparent;
             cursor: col-resize;
             z-index: 1001;
             border-radius: 2px;
             transition: all 0.2s ease;

             &:hover {
               background: rgba(63, 81, 181, 0.3);
               width: 6px;
             }

             &.dragging {
               background: rgba(63, 81, 181, 0.6);
               width: 6px;
             }

             &::before {
               content: '';
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
               width: 2px;
               height: 20px;
               background: rgba(63, 81, 181, 0.4);
               border-radius: 1px;
               opacity: 0;
               transition: opacity 0.2s ease;
             }

             &:hover::before {
               opacity: 1;
             }
           }

    .sidebar-header {
      padding: 12px 8px;
      border-bottom: 1px solid rgba(0,0,0,0.06);
      background: rgba(0,0,0,0.02);
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1;
    }

    .logo-icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: var(--mat-primary-color);
    }

    .logo-text {
      font-size: 18px;
      font-weight: 600;
      color: var(--mat-primary-color);
    }

    .collapse-btn {
      opacity: 0.7;
      transition: all 0.2s ease;
      width: 32px;
      height: 32px;
      border-radius: 6px;

      &:hover {
        opacity: 1;
        background: rgba(0,0,0,0.08);
      }

      mat-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }
    }

    .sidebar-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 8px 0;
    }

    .nav-list {
      flex: 1;
      padding: 0;
    }

    .nav-section {
      margin-bottom: 24px;
    }

    .nav-section-title {
      padding: 8px 16px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: rgba(0,0,0,0.6);
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .nav-item {
      margin: 0 8px 4px;
      border-radius: 8px;
      transition: all 0.2s ease;
      cursor: pointer;
      padding-right: 8px !important;

      &:hover {
        background: rgba(0,0,0,0.04);
      }

      &.active {
        background: rgba(var(--mat-primary-color-rgb), 0.1);
        color: var(--mat-primary-color);

        mat-icon {
          color: var(--mat-primary-color);
        }
      }

      mat-icon {
        color: rgba(0,0,0,0.6);
        margin-right: 12px;
      }
    }

    .nav-divider {
      margin: 16px 16px;
    }

    .sidebar-footer {
      padding: 16px;
      border-top: 1px solid rgba(0,0,0,0.12);
    }

    .sidebar-footer-collapsed {
      display: flex;
      justify-content: center;
      padding: 16px 8px;
      border-top: 1px solid rgba(0,0,0,0.12);
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .user-avatar {
      mat-icon {
        font-size: 40px;
        width: 40px;
        height: 40px;
        color: rgba(0,0,0,0.6);
      }
    }

    .user-details {
      flex: 1;
    }

    .user-name {
      font-weight: 500;
      margin-bottom: 2px;
    }

    .user-role {
      font-size: 12px;
      color: rgba(0,0,0,0.6);
    }

    :host-context(.dark-theme) {
      .sidebar {
        border-right-color: rgba(255,255,255,0.12);
      }

      .sidebar-header {
        border-bottom-color: rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.02);
      }

      .collapse-btn {
        &:hover {
          background: rgba(255,255,255,0.08);
        }
      }

      .nav-section-title {
        color: rgba(255,255,255,0.6);
      }

      .nav-item {
        &:hover {
          background: rgba(255,255,255,0.04);
        }

        mat-icon {
          color: rgba(255,255,255,0.6);
        }
      }

      .sidebar-footer,
      .sidebar-footer-collapsed {
        border-top-color: rgba(255,255,255,0.12);
      }

      .user-avatar mat-icon {
        color: rgba(255,255,255,0.6);
      }

      .user-role {
        color: rgba(255,255,255,0.6);
      }
    }

    @media (max-width: 768px) {
      .sidebar {
        width: 100vw;
        max-width: 320px;
      }
    }
  `]
})
export class SidebarComponent {
  isOpen = input<boolean>(true);
  sidenavMode = input<'over' | 'push' | 'side'>('side');
  closeSidebar = output<void>();

  private _isCollapsed = signal(false);
  private _sidebarWidth = signal(220);
  private _isResizing = signal(false);

  isCollapsed(): boolean {
    return this._isCollapsed();
  }

  sidebarWidth(): number {
    return this.isCollapsed() ? 64 : this._sidebarWidth();
  }

  isResizing(): boolean {
    return this._isResizing();
  }

  toggleCollapse(): void {
    this._isCollapsed.set(!this._isCollapsed());
  }

  startResize(event: MouseEvent): void {
    if (this.isCollapsed()) return;

    event.preventDefault();
    event.stopPropagation();
    this._isResizing.set(true);

    const startX = event.clientX;
    const startWidth = this._sidebarWidth();

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const newWidth = startWidth + (e.clientX - startX);
      const clampedWidth = Math.max(180, Math.min(400, newWidth));
      this._sidebarWidth.set(clampedWidth);
    };

    const onMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      this._isResizing.set(false);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.body.style.pointerEvents = '';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    document.body.style.pointerEvents = 'none';
  }

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Analytics', icon: 'analytics', route: '/analytics' },
    { label: 'Reports', icon: 'assessment', route: '/reports' },
  ];

  managementItems: MenuItem[] = [
    { label: 'Users', icon: 'people', route: '/users' },
    { label: 'Projects', icon: 'folder', route: '/projects' },
    { label: 'Settings', icon: 'settings', route: '/settings' },
  ];
}
