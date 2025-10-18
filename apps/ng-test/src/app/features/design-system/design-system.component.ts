import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule, MatIconModule],
  template: `
    <div class="design-system-container">
      <!-- Header -->
      <header class="bg-card border-b border-default p-6 mb-6">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-center gap-4 mb-2">
            <mat-icon class="text-primary text-4xl">palette</mat-icon>
            <div>
              <h1 class="text-3xl font-bold text-primary">Design System</h1>
              <p class="text-secondary">
                Component library, style guide, and UI patterns
              </p>
            </div>
          </div>
        </div>
      </header>

      <!-- Navigation Tabs -->
      <div class="max-w-7xl mx-auto px-6">
        <nav mat-tab-nav-bar class="mb-6">
          <a
            mat-tab-link
            *ngFor="let link of navLinks"
            [routerLink]="link.path"
            routerLinkActive
            #rla="routerLinkActive"
            [active]="rla.isActive"
          >
            <mat-icon class="mr-2">{{ link.icon }}</mat-icon>
            {{ link.label }}
          </a>
        </nav>

        <!-- Content -->
        <div class="content-area">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Theme-aware styles using CSS custom properties */
      .design-system-container {
        min-height: 100vh;
        background-color: var(--bg-secondary);
      }

      .content-area {
        margin-bottom: 4rem;
      }

      mat-icon {
        vertical-align: middle;
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

