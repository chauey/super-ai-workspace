import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="colors-page">
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h2 class="text-2xl font-bold text-primary mb-2">Color Palette</h2>
        <p class="text-secondary">
          Our color system is built with CSS variables for seamless dark mode support
        </p>
      </div>

      <!-- Brand Colors -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Brand Colors</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div *ngFor="let color of brandColors" class="color-card">
            <div [style.backgroundColor]="'var(' + color.var + ')'" class="color-swatch"></div>
            <h4 class="font-semibold text-primary mt-3">{{ color.name }}</h4>
            <p class="text-sm text-secondary">{{ color.var }}</p>
            <p class="text-xs text-secondary mt-1">{{ color.usage }}</p>
          </div>
        </div>
      </div>

      <!-- Theme Colors -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Theme Colors</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div *ngFor="let color of themeColors" class="color-card">
            <div [style.backgroundColor]="'var(' + color.var + ')'" class="color-swatch"></div>
            <h4 class="font-semibold text-primary mt-3">{{ color.name }}</h4>
            <p class="text-sm text-secondary">{{ color.var }}</p>
            <p class="text-xs text-secondary mt-1">{{ color.usage }}</p>
          </div>
        </div>
      </div>

      <!-- Text Colors -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Text Colors</h3>
        <div class="space-y-4">
          <div *ngFor="let text of textColors" class="flex items-center justify-between p-4 rounded border border-default">
            <div>
              <p [style.color]="'var(' + text.var + ')'" class="font-semibold">{{ text.name }}</p>
              <p class="text-sm text-secondary">{{ text.var }} - {{ text.usage }}</p>
            </div>
            <code class="text-sm bg-subtle px-3 py-1 rounded">var({{ text.var }})</code>
          </div>
        </div>
      </div>

      <!-- Usage Example -->
      <div class="bg-card rounded-lg shadow-themed p-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Usage</h3>
        <pre class="code-block"><code>/* In Component Styles */
.my-element &#123;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
&#125;

/* In Templates (Tailwind) */
&lt;div class="bg-card text-primary border-default"&gt;
  Content
&lt;/div&gt;</code></pre>
      </div>
    </div>
  `,
  styles: [
    `
      .color-swatch {
        @apply w-full h-24 rounded border;
        border-color: var(--border-color);
      }

      .color-card {
        @apply p-4 rounded border;
        background-color: var(--bg-secondary);
        border-color: var(--border-color);
      }

      .code-block {
        @apply p-4 rounded overflow-x-auto text-sm font-mono;
        background-color: var(--bg-tertiary);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
      }
    `,
  ],
})
export class ColorsComponent {
  brandColors = [
    { name: 'Primary', var: '--primary-color', usage: 'Primary actions, links' },
    { name: 'Accent', var: '--accent-color', usage: 'Highlights, CTAs' },
    { name: 'Warning', var: '--warn-color', usage: 'Errors, destructive actions' },
  ];

  themeColors = [
    { name: 'Background Primary', var: '--bg-primary', usage: 'Cards, modals, surfaces' },
    { name: 'Background Secondary', var: '--bg-secondary', usage: 'Sections, backgrounds' },
    { name: 'Background Tertiary', var: '--bg-tertiary', usage: 'Hover states, subtle backgrounds' },
  ];

  textColors = [
    { name: 'Primary Text', var: '--text-primary', usage: 'Main content text' },
    { name: 'Secondary Text', var: '--text-secondary', usage: 'Labels, descriptions' },
    { name: 'Disabled Text', var: '--text-disabled', usage: 'Disabled elements' },
  ];
}

