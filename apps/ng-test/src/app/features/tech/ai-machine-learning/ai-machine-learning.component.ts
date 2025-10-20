import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-machine-learning',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">AI & Machine Learning</h1>
      <p class="text-gray-600">Learn artificial intelligence and machine learning concepts and applications.</p>
    </div>
  `
})
export class AiMachineLearningComponent {}
