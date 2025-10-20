import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Demos</h1>
      <p class="text-gray-600">Interactive demos and live examples of my work.</p>
    </div>
  `
})
export class DemosComponent {}
