import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-connections',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">API Connections</h1>
      <p class="text-gray-600">Manage API connections and integrations.</p>
    </div>
  `
})
export class ApiConnectionsComponent {}
