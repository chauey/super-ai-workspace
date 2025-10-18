import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dotnet',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="feature-container">
      <div class="bg-card rounded-lg shadow-themed p-8 max-w-4xl mx-auto">
        <div class="flex items-center gap-4 mb-6">
          <mat-icon class="text-primary text-5xl">code</mat-icon>
          <div>
            <h1 class="text-3xl font-bold text-primary">.NET Learning Path</h1>
            <p class="text-secondary">C#, ASP.NET Core, and .NET ecosystem</p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-content rounded-lg p-6">
            <h2 class="text-xl font-semibold text-primary mb-4">Coming Soon</h2>
            <p class="text-secondary mb-4">
              This section will include comprehensive .NET tutorials and examples:
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">C# Fundamentals</span>
              </li>
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">ASP.NET Core Web API</span>
              </li>
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">Entity Framework Core</span>
              </li>
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">Blazor WebAssembly</span>
              </li>
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">Clean Architecture</span>
              </li>
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">Testing & Best Practices</span>
              </li>
            </ul>
          </div>

          <div class="bg-subtle rounded-lg p-6 border-l-4 border-primary">
            <h3 class="font-semibold text-primary mb-2">📚 Placeholder</h3>
            <p class="text-secondary text-sm">
              This is a placeholder page. Content will be added in future updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .feature-container {
        padding: 2rem;
        min-height: 100vh;
        background-color: var(--bg-secondary);
      }
    `,
  ],
})
export class DotnetComponent {}

