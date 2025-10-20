import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-preferences',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">User Preferences</h1>
      <p class="text-gray-600">Manage your personal preferences and settings.</p>
    </div>
  `
})
export class UserPreferencesComponent {}
