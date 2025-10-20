import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="angular-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Angular Development
          </h1>
          <p class="text-xl text-secondary mb-6">
            Comprehensive Angular development resources covering core concepts, forms, architecture, and advanced features.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Core Concepts -->
        <mat-card class="learning-path-card" routerLink="core-concepts">
          <mat-card-header>
            <mat-icon mat-card-avatar class="path-icon">build</mat-icon>
            <mat-card-title>Core Concepts</mat-card-title>
            <mat-card-subtitle>Angular fundamentals</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Components, templates, data binding, and core Angular concepts.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>

        <!-- Forms & Data -->
        <mat-card class="learning-path-card" routerLink="forms-data">
          <mat-card-header>
            <mat-icon mat-card-avatar class="path-icon">dynamic_form</mat-icon>
            <mat-card-title>Forms & Data</mat-card-title>
            <mat-card-subtitle>User input and data handling</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Reactive forms, template-driven forms, and HTTP client integration.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>

        <!-- Architecture -->
        <mat-card class="learning-path-card" routerLink="architecture">
          <mat-card-header>
            <mat-icon mat-card-avatar class="path-icon">architecture</mat-icon>
            <mat-card-title>Architecture</mat-card-title>
            <mat-card-subtitle>Application structure</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Dependency injection, services, and lifecycle hooks.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>

        <!-- Advanced Features -->
        <mat-card class="learning-path-card" routerLink="advanced-features">
          <mat-card-header>
            <mat-icon mat-card-avatar class="path-icon">extension</mat-icon>
            <mat-card-title>Advanced Features</mat-card-title>
            <mat-card-subtitle>Powerful Angular capabilities</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Pipes, guards, interceptors, lazy loading, and defer blocks.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>

        <!-- Playground -->
        <mat-card class="learning-path-card" routerLink="playground">
          <mat-card-header>
            <mat-icon mat-card-avatar class="path-icon">play_arrow</mat-icon>
            <mat-card-title>Playground</mat-card-title>
            <mat-card-subtitle>Interactive examples</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Hands-on examples and interactive demos.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>

        <!-- Practice Test -->
        <mat-card class="learning-path-card" routerLink="/apps/certification-test">
          <mat-card-header>
            <mat-icon mat-card-avatar class="path-icon">quiz</mat-icon>
            <mat-card-title>Angular 20 Practice Test</mat-card-title>
            <mat-card-subtitle>Test your knowledge</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>50-question practice test covering Angular 20 concepts.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Start Test</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .angular-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-section {
      background: linear-gradient(135deg, var(--primary-color, #1976d2) 0%, var(--accent-color, #ff4081) 100%);
      color: white;
    }

    .learning-path-card {
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      cursor: pointer;
    }

    .learning-path-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .path-icon {
      background-color: var(--primary-color, #1976d2);
      color: white;
    }

    .text-primary {
      color: var(--primary-color, #1976d2);
    }

    .text-secondary {
      color: var(--secondary-color, #666);
    }

    .bg-card {
      background-color: var(--card-background, #fff);
    }

    .shadow-themed {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class AngularComponent {}
