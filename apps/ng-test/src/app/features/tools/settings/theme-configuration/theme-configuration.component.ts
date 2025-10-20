import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-configuration',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Theme Configuration</h1>
      <p class="text-gray-600">Customize the application theme and appearance.</p>
    </div>
  `
})
export class ThemeConfigurationComponent {}
