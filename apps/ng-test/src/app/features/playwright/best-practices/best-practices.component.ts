import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-best-practices',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Best Practices</h1>
      <p class="text-gray-600">Learn Playwright best practices and testing strategies.</p>
    </div>
  `
})
export class BestPracticesComponent {}
