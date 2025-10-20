import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Test History</h1>
      <p class="text-gray-600">View your test history and performance analytics.</p>
    </div>
  `
})
export class TestHistoryComponent {}
