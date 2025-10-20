import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-examples',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Test Examples</h1>
      <p class="text-gray-600">Explore various Playwright test examples and patterns.</p>
    </div>
  `
})
export class TestExamplesComponent {}
