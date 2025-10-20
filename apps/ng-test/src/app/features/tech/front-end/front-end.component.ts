import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-front-end',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Front-end</h1>
      <p class="text-gray-600">Learn front-end development technologies and best practices.</p>
    </div>
  `
})
export class FrontEndComponent {}
