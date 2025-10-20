import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-study-materials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Study Materials</h1>
      <p class="text-gray-600">Study materials and resources for certification preparation.</p>
    </div>
  `
})
export class StudyMaterialsComponent {}
