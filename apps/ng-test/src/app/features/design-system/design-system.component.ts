import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule,
    MatChipsModule,
  ],
  template: `
    <div class="design-system-feature-container">
      <!-- Feature Header -->
      <mat-toolbar class="feature-toolbar">
        <div class="feature-header-content">
          <mat-icon class="feature-icon">palette</mat-icon>
          <div class="feature-title-group">
            <h1 class="feature-title">Design System</h1>
            <span class="feature-subtitle">Component library, style guide, and UI patterns</span>
          </div>
        </div>
      </mat-toolbar>

      <mat-sidenav-container class="feature-sidenav-container">
        <!-- Main Content Area -->
        <mat-sidenav-content class="feature-content">
          <div class="content-wrapper">
            <router-outlet></router-outlet>
          </div>
        </mat-sidenav-content>

        <!-- Right Sidebar for Navigation -->
        <mat-sidenav mode="side" opened position="end" class="right-sidebar">
          <mat-card class="quick-nav-card">
            <mat-card-header>
              <mat-card-title><mat-icon>list</mat-icon> Quick Navigation</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <mat-nav-list>
                @for (link of navLinks; track link.path) {
                  <a mat-list-item [routerLink]="link.path" routerLinkActive="active" [matTooltip]="link.label" class="nav-link-item">
                    <mat-icon matListItemIcon>{{ link.icon }}</mat-icon>
                    <span matListItemTitle class="nav-link-text">{{ link.label }}</span>
                    <!-- @if (link.badge) {
                      <mat-chip matListItemMeta class="nav-badge" [class.badge-accent]="link.badgeColor === 'accent'" [class.badge-primary]="link.badgeColor === 'primary'">
                        {{ link.badge }}
                      </mat-chip>
                    } -->
                  </a>
                }
              </mat-nav-list>
            </mat-card-content>
          </mat-card>
        </mat-sidenav>
      </mat-sidenav-container>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .design-system-feature-container {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .feature-toolbar {
        background-color: var(--bg-primary);
        color: var(--text-primary);
        border-bottom: 1px solid var(--border-color);
        box-shadow: var(--shadow);
        height: auto;
        min-height: 80px;
        padding: 16px 24px;
        display: flex;
        align-items: center;
        z-index: 999;
      }

      .feature-header-content {
        display: flex;
        align-items: center;
        gap: 16px;
        width: 100%;
      }

      .feature-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        color: var(--primary-color);
        flex-shrink: 0;
      }

      .feature-title-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }

      .feature-title {
        margin: 0;
        font-size: 28px;
        font-weight: 600;
        line-height: 1.2;
      }

      .feature-subtitle {
        font-size: 14px;
        color: var(--text-secondary);
        line-height: 1.4;
      }

      .feature-sidenav-container {
        flex: 1;
        background-color: var(--bg-secondary);
      }

      .feature-content {
        padding: 24px;
        overflow: auto;
        height: 100%;
        box-sizing: border-box;
      }

      .content-wrapper {
        max-width: 1200px;
        margin: 0 auto;
      }

      .right-sidebar {
        width: 280px;
        background-color: var(--bg-sidebar);
        border-left: 1px solid var(--border-color);
        padding: 16px;
        box-sizing: border-box;
        overflow-y: auto;
      }

      .quick-nav-card {
        background-color: var(--bg-card);
        color: var(--text-primary);
        box-shadow: var(--shadow);
        border: 1px solid var(--border-color);
      }

      .quick-nav-card mat-card-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 18px;
        font-weight: 600;
        color: var(--text-primary);
      }

      .quick-nav-card mat-nav-list {
        padding-top: 8px;
      }

      .quick-nav-card .mat-list-item {
        color: var(--text-secondary) !important;
        border-radius: 4px;
        margin-bottom: 4px;
        transition: all 0.2s ease;
      }

      .quick-nav-card .mat-list-item:hover {
        background-color: var(--bg-tertiary);
        color: var(--text-primary) !important;
      }

      .quick-nav-card .mat-list-item.active {
        background-color: rgba(var(--primary-rgb), 0.15);
        color: var(--primary-color) !important;
        font-weight: 500;
      }


      .nav-badge {
        font-size: 0.75rem !important;
        height: 20px !important;
        min-height: 20px !important;
        padding: 0 8px !important;
        font-weight: 500 !important;
        background-color: var(--accent-color) !important;
        color: white !important;
        border: none !important;
        border-radius: 10px !important;
      }

      .nav-badge.badge-accent {
        background-color: var(--accent-color) !important;
        color: white !important;
      }

      .nav-badge.badge-primary {
        background-color: var(--primary-color) !important;
        color: white !important;
      }

      /* Force icon colors in dark mode - Using CSS Variables */
      .dark .quick-nav-card .mat-mdc-list-item mat-icon[matListItemIcon] {
        --mat-icon-color: #9ca3af !important;
        color: #9ca3af !important;
      }

      .dark .quick-nav-card .mat-mdc-list-item:hover mat-icon[matListItemIcon] {
        --mat-icon-color: #ffffff !important;
        color: #ffffff !important;
      }

      .dark .quick-nav-card .mat-mdc-list-item.active mat-icon[matListItemIcon] {
        --mat-icon-color: #3b82f6 !important;
        color: #3b82f6 !important;
      }

      /* Direct targeting of navigation text */
      .nav-link-item {
        color: var(--text-secondary) !important;
      }

      .nav-link-item:hover {
        color: var(--text-primary) !important;
      }

      .nav-link-item.active {
        color: var(--primary-color) !important;
      }

      .nav-link-text {
        color: inherit !important;
        font-weight: inherit !important;
      }
    `,
  ],
})
export class DesignSystemComponent {

  navLinks = [
    { path: 'overview', label: 'Overview', icon: 'dashboard' },
    { path: 'colors', label: 'Colors', icon: 'palette', badge: 'New', badgeColor: 'accent' },
    { path: 'typography', label: 'Typography', icon: 'text_fields' },
    { path: 'icons', label: 'Icons', icon: 'emoji_emotions' },
    { path: 'buttons', label: 'Buttons', icon: 'smart_button', badge: 'Updated', badgeColor: 'primary' },
    { path: 'forms', label: 'Forms', icon: 'edit_note' },
    { path: 'cards', label: 'Cards', icon: 'view_agenda', badge: 'New', badgeColor: 'accent' },
    { path: 'badges', label: 'Badges', icon: 'label', badge: 'New', badgeColor: 'accent' },
    { path: 'layouts', label: 'Layouts', icon: 'view_quilt' },
    { path: 'grids', label: 'Grids', icon: 'grid_on', badge: 'New', badgeColor: 'accent' },
    { path: 'theming', label: 'Theming', icon: 'dark_mode', badge: 'Updated', badgeColor: 'primary' },
  ];
}

