import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-build',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="build-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Build
          </h1>
          <p class="text-xl text-secondary mb-6">
            Development tools, design systems, and resources to help you build amazing applications.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <mat-card class="build-card" routerLink="design-system">
          <mat-card-header>
            <mat-icon mat-card-avatar class="build-icon">palette</mat-icon>
            <mat-card-title>Design System</mat-card-title>
            <mat-card-subtitle>UI Kit, style guide, and component library</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Comprehensive design system with colors, typography, components, and theming.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="build-card" routerLink="development-tools">
          <mat-card-header>
            <mat-icon mat-card-avatar class="build-icon">code</mat-icon>
            <mat-card-title>Development Tools</mat-card-title>
            <mat-card-subtitle>Documentation and API tools</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Documentation viewer, API documentation, and testing tools for developers.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="build-card" routerLink="playwright">
          <mat-card-header>
            <mat-icon mat-card-avatar class="build-icon">theater_comedy</mat-icon>
            <mat-card-title>Playwright</mat-card-title>
            <mat-card-subtitle>End-to-end testing framework</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Modern end-to-end testing with Playwright, including MCP integration.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .build-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-section {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-lg);
    }

    .hero-section h1 {
      font-size: 3rem;
      font-weight: 700;
      color: var(--primary-color);
    }

    .hero-section p {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .build-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .build-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .build-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--accent-color);
    }

    .build-card mat-card-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .build-card mat-card-subtitle {
      color: var(--text-secondary);
    }

    .build-card mat-card-content p {
      color: var(--text-secondary);
      line-height: 1.5;
    }
  `]
})
export class BuildComponent {}




