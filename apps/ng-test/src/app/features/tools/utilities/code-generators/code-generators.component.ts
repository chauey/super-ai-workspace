import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-generators',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Code Generators</h1>
      <p class="text-gray-600">Generate code snippets and boilerplate code.</p>
    </div>
  `
})
export class CodeGeneratorsComponent {}
