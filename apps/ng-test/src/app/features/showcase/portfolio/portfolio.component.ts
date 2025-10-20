import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Portfolio</h1>
      <p class="text-gray-600">View my portfolio of projects and work.</p>
    </div>
  `
})
export class PortfolioComponent {}
