import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="layouts-page">
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h2 class="text-2xl font-bold text-primary mb-2">Layout Patterns</h2>
        <p class="text-secondary">Grid systems and responsive layout examples</p>
      </div>

      <!-- Grid Layouts -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Responsive Grid</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div *ngFor="let item of [1,2,3,4,5,6,7,8]" class="demo-box">
            Item {{ item }}
          </div>
        </div>
      </div>

      <!-- Flex Layouts -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Flex Layout</h3>
        <div class="flex flex-wrap gap-4">
          <div *ngFor="let item of [1,2,3]" class="demo-box flex-1">
            Flex {{ item }}
          </div>
        </div>
      </div>

      <!-- Two Column Layout -->
      <div class="bg-card rounded-lg shadow-themed p-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Two Column Layout</h3>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 demo-box">Main Content (2/3)</div>
          <div class="demo-box">Sidebar (1/3)</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-box {
      @apply p-6 rounded text-center;
      background-color: var(--bg-secondary);
      border: 1px solid var(--border-color);
      color: var(--text-primary);
      min-height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `],
})
export class LayoutsComponent {}

