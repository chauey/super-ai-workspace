import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice-tests',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Practice Tests</h1>
      <p class="text-gray-600">Practice tests for various certifications will be available here.</p>
    </div>
  `
})
export class PracticeTestsComponent {}
