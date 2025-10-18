import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="typography-page">
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h2 class="text-2xl font-bold text-primary mb-2">Typography</h2>
        <p class="text-secondary">Font families, sizes, weights, and text styles</p>
      </div>

      <!-- Headings -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Headings</h3>
        <div class="space-y-4">
          <div>
            <h1 class="text-4xl font-bold text-primary">Heading 1</h1>
            <code class="text-sm text-secondary">text-4xl font-bold</code>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-primary">Heading 2</h2>
            <code class="text-sm text-secondary">text-3xl font-bold</code>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-primary">Heading 3</h3>
            <code class="text-sm text-secondary">text-2xl font-semibold</code>
          </div>
          <div>
            <h4 class="text-xl font-semibold text-primary">Heading 4</h4>
            <code class="text-sm text-secondary">text-xl font-semibold</code>
          </div>
          <div>
            <h5 class="text-lg font-medium text-primary">Heading 5</h5>
            <code class="text-sm text-secondary">text-lg font-medium</code>
          </div>
          <div>
            <h6 class="text-base font-medium text-primary">Heading 6</h6>
            <code class="text-sm text-secondary">text-base font-medium</code>
          </div>
        </div>
      </div>

      <!-- Body Text -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Body Text</h3>
        <div class="space-y-4">
          <div>
            <p class="text-lg text-primary">Large body text - text-lg</p>
          </div>
          <div>
            <p class="text-base text-primary">Regular body text - text-base</p>
          </div>
          <div>
            <p class="text-sm text-secondary">Small body text - text-sm</p>
          </div>
          <div>
            <p class="text-xs text-secondary">Extra small text - text-xs</p>
          </div>
        </div>
      </div>

      <!-- Font Weights -->
      <div class="bg-card rounded-lg shadow-themed p-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Font Weights</h3>
        <div class="space-y-2">
          <p class="font-light text-primary">Light (300) - font-light</p>
          <p class="font-normal text-primary">Normal (400) - font-normal</p>
          <p class="font-medium text-primary">Medium (500) - font-medium</p>
          <p class="font-semibold text-primary">Semibold (600) - font-semibold</p>
          <p class="font-bold text-primary">Bold (700) - font-bold</p>
        </div>
      </div>
    </div>
  `,
})
export class TypographyComponent {}

