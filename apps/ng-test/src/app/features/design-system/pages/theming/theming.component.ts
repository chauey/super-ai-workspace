import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ThemeService } from '../../../../core/services/theme.service';

@Component({
  selector: 'app-theming',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatChipsModule],
  template: `
    <div class="theming-page">
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h2 class="text-2xl font-bold text-primary mb-2">Theming System</h2>
        <p class="text-secondary">Dark mode, themes, and customization</p>
      </div>

      <!-- Theme Toggle -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Theme Control</h3>
        <div class="flex gap-4 flex-wrap">
          <button
            mat-raised-button
            [color]="themeService.theme() === 'light' ? 'primary' : ''"
            (click)="themeService.setTheme('light')">
            <mat-icon>light_mode</mat-icon> Light
          </button>
          <button
            mat-raised-button
            [color]="themeService.theme() === 'dark' ? 'primary' : ''"
            (click)="themeService.setTheme('dark')">
            <mat-icon>dark_mode</mat-icon> Dark
          </button>
          <button
            mat-raised-button
            [color]="themeService.theme() === 'system' ? 'primary' : ''"
            (click)="themeService.setTheme('system')">
            <mat-icon>brightness_auto</mat-icon> System
          </button>
        </div>
        <p class="text-secondary mt-4">
          Current: <mat-chip>{{ themeService.theme() }}</mat-chip>
        </p>
      </div>

      <!-- CSS Variables -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">CSS Variables</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div *ngFor="let variable of cssVariables" class="variable-card">
            <div class="flex items-center justify-between mb-2">
              <code class="text-sm">{{ variable.name }}</code>
              <div [style.background]="'var(' + variable.name + ')'" class="w-8 h-8 rounded border border-default"></div>
            </div>
            <p class="text-xs text-secondary">{{ variable.description }}</p>
          </div>
        </div>
      </div>

      <!-- Documentation -->
      <div class="bg-card rounded-lg shadow-themed p-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Implementation</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-semibold text-primary mb-2">1. Use CSS Variables</h4>
            <pre class="code-block"><code>.my-component &#123;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
&#125;</code></pre>
          </div>

          <div>
            <h4 class="font-semibold text-primary mb-2">2. Use Custom Utilities</h4>
            <pre class="code-block"><code>&lt;div class="bg-card text-primary border-default"&gt;
  Content automatically respects theme
&lt;/div&gt;</code></pre>
          </div>

          <div>
            <h4 class="font-semibold text-primary mb-2">3. Material Components</h4>
            <p class="text-secondary text-sm">Material components automatically adapt to the theme.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .variable-card {
      @apply p-4 rounded border;
      background-color: var(--bg-secondary);
      border-color: var(--border-color);
    }
    .code-block {
      @apply p-4 rounded text-sm font-mono;
      background-color: var(--bg-tertiary);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
    }

    /* Ensure chip visibility in dark mode */
    mat-chip {
      background-color: var(--accent-color) !important;
      color: white !important;
      border: none !important;
      font-weight: 500 !important;
      font-size: 0.875rem !important;
      height: 24px !important;
      min-height: 24px !important;
      padding: 0 12px !important;
      border-radius: 12px !important;
    }
  `],
})
export class ThemingComponent {
  themeService = inject(ThemeService);

  cssVariables = [
    { name: '--primary-color', description: 'Primary brand color' },
    { name: '--accent-color', description: 'Accent/secondary color' },
    { name: '--bg-primary', description: 'Primary background (cards)' },
    { name: '--bg-secondary', description: 'Secondary background' },
    { name: '--bg-tertiary', description: 'Tertiary background' },
    { name: '--text-primary', description: 'Primary text color' },
    { name: '--text-secondary', description: 'Secondary text color' },
    { name: '--border-color', description: 'Border color' },
  ];
}

