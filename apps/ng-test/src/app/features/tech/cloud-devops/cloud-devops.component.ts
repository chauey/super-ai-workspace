import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cloud-devops',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Cloud & DevOps</h1>
      <p class="text-gray-600">Learn cloud computing and DevOps practices.</p>
    </div>
  `
})
export class CloudDevOpsComponent {}
