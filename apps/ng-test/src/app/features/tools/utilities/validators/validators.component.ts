import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validators',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Validators</h1>
      <p class="text-gray-600">Validate and check your code and data.</p>
    </div>
  `
})
export class ValidatorsComponent {}
