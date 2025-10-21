import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-development-tools',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="development-tools-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Development Tools
          </h1>
          <p class="text-xl text-secondary mb-6">
            Documentation, API tools, and development utilities to enhance your workflow.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <mat-card class="tool-card" routerLink="documentation">
          <mat-card-header>
            <mat-icon mat-card-avatar class="tool-icon">menu_book</mat-icon>
            <mat-card-title>Documentation</mat-card-title>
            <mat-card-subtitle>Developer guides and documentation</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Comprehensive developer guides, styling guides, and best practices documentation.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View Docs</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="tool-card" routerLink="api-documentation">
          <mat-card-header>
            <mat-icon mat-card-avatar class="tool-icon">api</mat-icon>
            <mat-card-title>API Documentation</mat-card-title>
            <mat-card-subtitle>API development and documentation tools</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>OpenAPI Specification, Swagger tools, and API development resources.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore APIs</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .development-tools-container {
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

    .tool-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .tool-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .tool-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--accent-color);
    }

    .tool-card mat-card-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .tool-card mat-card-subtitle {
      color: var(--text-secondary);
    }

    .tool-card mat-card-content p {
      color: var(--text-secondary);
      line-height: 1.5;
    }
  `]
})
export class DevelopmentToolsComponent {}



