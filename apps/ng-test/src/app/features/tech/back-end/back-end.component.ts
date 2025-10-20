import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-end',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Back-end</h1>
      <p class="text-gray-600">Learn back-end development technologies and server-side programming.</p>
    </div>
  `
})
export class BackEndComponent {}
