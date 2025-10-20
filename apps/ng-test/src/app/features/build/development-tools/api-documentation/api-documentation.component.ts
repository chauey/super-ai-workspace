import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-documentation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">API Documentation</h1>
      <p class="text-gray-600">Browse and explore API documentation and references.</p>
    </div>
  `
})
export class ApiDocumentationComponent {}
