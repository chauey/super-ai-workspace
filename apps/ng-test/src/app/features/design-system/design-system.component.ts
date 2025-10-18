import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

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
                  <a mat-list-item [routerLink]="link.path" routerLinkActive="active" [matTooltip]="link.label">
                    <mat-icon matListItemIcon>{{ link.icon }}</mat-icon>
                    <span matListItemTitle>{{ link.label }}</span>
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
        height: 64px;
        min-height: 64px;
        padding: 0 24px;
        display: flex;
        align-items: center;
        z-index: 999;
      }

      .feature-header-content {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
      }

      .feature-icon {
        font-size: 32px;
        width: 32px;
        height: 32px;
        color: var(--primary-color);
      }

      .feature-title-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .feature-title {
        margin: 0;
        font-size: 24px;
        font-weight: 600;
        line-height: 1.2;
      }

      .feature-subtitle {
        font-size: 14px;
        color: var(--text-secondary);
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
        color: var(--text-secondary);
        border-radius: 4px;
        margin-bottom: 4px;
      }

      .quick-nav-card .mat-list-item:hover {
        background-color: var(--bg-tertiary);
        color: var(--text-primary);
      }

      .quick-nav-card .mat-list-item.active {
        background-color: rgba(var(--primary-rgb), 0.15);
        color: var(--primary-color);
        font-weight: 500;
      }

      .quick-nav-card .mat-list-item.active mat-icon {
        color: var(--primary-color);
      }

      .quick-nav-card .mat-list-item mat-icon {
        color: var(--text-icon);
      }
    `,
  ],
})
export class DesignSystemComponent {
  navLinks = [
    { path: 'overview', label: 'Overview', icon: 'dashboard' },
    { path: 'colors', label: 'Colors', icon: 'palette' },
    { path: 'typography', label: 'Typography', icon: 'text_fields' },
    { path: 'icons', label: 'Icons', icon: 'emoji_emotions' },
    { path: 'buttons', label: 'Buttons', icon: 'smart_button' },
    { path: 'forms', label: 'Forms', icon: 'edit_note' },
    { path: 'cards', label: 'Cards', icon: 'view_agenda' },
    { path: 'layouts', label: 'Layouts', icon: 'view_quilt' },
    { path: 'grids', label: 'Grids', icon: 'grid_on' },
    { path: 'theming', label: 'Theming', icon: 'dark_mode' },
  ];
}

