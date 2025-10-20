import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formatters',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Formatters</h1>
      <p class="text-gray-600">Format and beautify your code and data.</p>
    </div>
  `
})
export class FormattersComponent {}
