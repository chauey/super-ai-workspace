import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-third-party-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Third Party Services</h1>
      <p class="text-gray-600">Configure and manage third-party service integrations.</p>
    </div>
  `
})
export class ThirdPartyServicesComponent {}
