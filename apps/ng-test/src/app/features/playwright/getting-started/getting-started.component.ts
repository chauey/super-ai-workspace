import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Getting Started with Playwright</h1>
      <p class="text-gray-600">Learn how to get started with Playwright testing framework.</p>
    </div>
  `
})
export class GettingStartedComponent {}
