import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="icons-page">
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h2 class="text-2xl font-bold text-primary mb-2">Icons</h2>
        <p class="text-secondary">Material Icons library and usage examples</p>
      </div>

      <!-- Common Icons -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Common Icons</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div *ngFor="let icon of commonIcons" class="icon-card">
            <mat-icon class="text-primary text-4xl mb-2">{{ icon.name }}</mat-icon>
            <p class="text-xs text-secondary">{{ icon.name }}</p>
          </div>
        </div>
      </div>

      <!-- Usage -->
      <div class="bg-card rounded-lg shadow-themed p-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Usage</h3>
        <pre class="code-block"><code>&lt;mat-icon&gt;home&lt;/mat-icon&gt;
&lt;mat-icon class="text-primary"&gt;favorite&lt;/mat-icon&gt;
&lt;mat-icon [color]="'primary'"&gt;star&lt;/mat-icon&gt;</code></pre>
      </div>
    </div>
  `,
  styles: [`
    .icon-card {
      @apply flex flex-col items-center p-4 rounded border;
      background-color: var(--bg-secondary);
      border-color: var(--border-color);
    }
    .code-block {
      @apply p-4 rounded text-sm font-mono;
      background-color: var(--bg-tertiary);
      color: var(--text-primary);
    }
  `],
})
export class IconsComponent {
  commonIcons = [
    { name: 'home' }, { name: 'search' }, { name: 'settings' },
    { name: 'favorite' }, { name: 'star' }, { name: 'person' },
    { name: 'shopping_cart' }, { name: 'notifications' }, { name: 'email' },
    { name: 'phone' }, { name: 'location_on' }, { name: 'calendar_today' },
    { name: 'check_circle' }, { name: 'error' }, { name: 'warning' },
    { name: 'info' }, { name: 'delete' }, { name: 'edit' },
    { name: 'add' }, { name: 'remove' }, { name: 'close' },
    { name: 'menu' }, { name: 'more_vert' }, { name: 'arrow_forward' },
  ];
}

