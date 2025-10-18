import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
// import { TranslocoModule } from '@jsverse/transloco';
import { ThemeService } from '../../core/services/theme.service';
import { LanguageSelectorComponent } from '../../shared/components/language-selector/language-selector.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule,
    // TranslocoModule,
    LanguageSelectorComponent
  ],
  template: `
    <mat-toolbar class="header-toolbar">
      <!-- Menu Toggle -->
      <button
        mat-icon-button
        class="menu-toggle"
        (click)="toggleSidebar.emit()"
        aria-label="Menu">
        <mat-icon>menu</mat-icon>
      </button>

      <!-- Logo and Title -->
      <div class="logo-section">
        <div class="logo">
          <mat-icon class="logo-icon">smart_toy</mat-icon>
        </div>
        <span class="title">Super AI</span>
      </div>

      <!-- Spacer -->
      <div class="spacer"></div>

      <!-- Search -->
      <button
        mat-icon-button
        class="search-btn"
        aria-label="Search">
        <mat-icon>search</mat-icon>
      </button>

      <!-- Language Selector -->
      <app-language-selector></app-language-selector>

      <!-- Theme Toggle -->
      <button
        mat-icon-button
        (click)="toggleTheme()"
        aria-label="Toggle Theme">
        <mat-icon>{{ themeService.isDarkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
      </button>

      <!-- Notifications -->
      <button
        mat-icon-button
        [matMenuTriggerFor]="notificationMenu"
        aria-label="Notifications">
        <mat-icon matBadge="3" matBadgeColor="warn" matBadgeSize="small">notifications</mat-icon>
      </button>

      <!-- Profile Menu -->
      <button
        mat-icon-button
        [matMenuTriggerFor]="profileMenu"
        class="profile-btn">
        <mat-icon>account_circle</mat-icon>
      </button>
    </mat-toolbar>

    <!-- Notification Menu -->
    <mat-menu #notificationMenu="matMenu" class="notification-menu">
      <div class="notification-header">
        <span>Notifications</span>
      </div>
      <div class="notification-item">
        <mat-icon class="notification-icon">info</mat-icon>
        <div class="notification-content">
          <div class="notification-title">Welcome to Super AI</div>
          <div class="notification-time">2 minutes ago</div>
        </div>
      </div>
      <div class="notification-item">
        <mat-icon class="notification-icon">update</mat-icon>
        <div class="notification-content">
          <div class="notification-title">System update available</div>
          <div class="notification-time">1 hour ago</div>
        </div>
      </div>
    </mat-menu>

    <!-- Profile Menu -->
    <mat-menu #profileMenu="matMenu">
      <button mat-menu-item>
        <mat-icon>person</mat-icon>
        <span>Profile</span>
      </button>
      <button mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>Settings</span>
      </button>
      <mat-divider></mat-divider>
      <button mat-menu-item>
        <mat-icon>logout</mat-icon>
        <span>Logout</span>
      </button>
    </mat-menu>
  `,
  styles: [`
    .header-toolbar {
      background: var(--mat-toolbar-container-background-color);
      color: var(--mat-toolbar-container-text-color);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 1000;
      position: relative;
      padding: 0 16px;
      height: 64px;
      min-height: 64px;
    }

    .menu-toggle {
      margin-right: 16px;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo {
      display: flex;
      align-items: center;
    }

    .logo-icon {
      font-size: 28px;
      width: 28px;
      height: 28px;
      color: var(--mat-primary-color);
    }

    .title {
      font-size: 20px;
      font-weight: 500;
      margin: 0;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .search-btn,
    .profile-btn {
      margin-left: 8px;
    }

    .notification-menu {
      width: 320px;
      max-height: 400px;
    }

    .notification-header {
      padding: 16px;
      font-weight: 500;
      border-bottom: 1px solid rgba(0,0,0,0.12);
      background: rgba(0,0,0,0.04);
    }

    .notification-item {
      display: flex;
      align-items: flex-start;
      padding: 12px 16px;
      gap: 12px;
      border-bottom: 1px solid rgba(0,0,0,0.06);
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background: rgba(0,0,0,0.04);
      }
    }

    .notification-icon {
      margin-top: 2px;
      color: var(--mat-primary-color);
    }

    .notification-content {
      flex: 1;
    }

    .notification-title {
      font-weight: 500;
      margin-bottom: 4px;
    }

    .notification-time {
      font-size: 12px;
      color: rgba(0,0,0,0.6);
    }

    :host-context(.dark-theme) {
      .notification-header {
        background: rgba(255,255,255,0.04);
        border-bottom-color: rgba(255,255,255,0.12);
      }

      .notification-item {
        border-bottom-color: rgba(255,255,255,0.06);

        &:hover {
          background: rgba(255,255,255,0.04);
        }
      }

      .notification-time {
        color: rgba(255,255,255,0.6);
      }
    }

    @media (max-width: 768px) {
      .title {
        display: none;
      }

      .search-btn {
        display: none;
      }
    }

    @media (max-width: 480px) {
      .header-toolbar {
        padding: 0 8px;
      }
    }
  `]
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  toggleSidebar = output<void>();

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
