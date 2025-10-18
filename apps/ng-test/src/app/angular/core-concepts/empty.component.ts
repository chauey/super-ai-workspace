import { Component } from '@angular/core';

@Component({
  selector: 'app-empty',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Empty Page</h1>
      <p class="text-gray-600 dark:text-gray-300">This is an empty page component for testing purposes.</p>
    </div>
  `,
  styles: []
})
export class EmptyComponent {}

