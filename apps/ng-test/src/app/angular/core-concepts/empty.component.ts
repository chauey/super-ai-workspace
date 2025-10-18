import { Component } from '@angular/core';

@Component({
  selector: 'app-empty',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto p-8 bg-card rounded-lg shadow-md border border-default">
      <h1 class="text-3xl font-bold text-primary mb-4">Empty Page</h1>
      <p class="text-secondary">This is an empty page component for testing purposes.</p>
    </div>
  `,
  styles: []
})
export class EmptyComponent {}

