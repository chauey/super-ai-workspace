import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Achievements</h1>
      <p class="text-gray-600">My professional achievements and certifications.</p>
    </div>
  `
})
export class AchievementsComponent {}
