import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-utilities',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="utilities-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Utilities
          </h1>
          <p class="text-xl text-secondary mb-6">
            Development utilities and tools to enhance your coding workflow.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <mat-card class="utility-card" routerLink="code-generators">
          <mat-card-header>
            <mat-icon mat-card-avatar class="utility-icon">auto_fix_high</mat-icon>
            <mat-card-title>Code Generators</mat-card-title>
            <mat-card-subtitle>Code generation tools and templates</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Generate code templates, boilerplate, and scaffolding for various frameworks and patterns.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Generate Code</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="utility-card" routerLink="formatters">
          <mat-card-header>
            <mat-icon mat-card-avatar class="utility-icon">format_align_left</mat-icon>
            <mat-card-title>Formatters</mat-card-title>
            <mat-card-subtitle>Code formatting and beautification tools</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Format and beautify your code with various formatting tools and standards.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Format Code</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="utility-card" routerLink="validators">
          <mat-card-header>
            <mat-icon mat-card-avatar class="utility-icon">check_circle</mat-icon>
            <mat-card-title>Validators</mat-card-title>
            <mat-card-subtitle>Code validation and linting tools</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Validate and lint your code for errors, style issues, and best practices.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Validate Code</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="utility-card" routerLink="cursor-tips">
          <mat-card-header>
            <mat-icon mat-card-avatar class="utility-icon">tips_and_updates</mat-icon>
            <mat-card-title>Cursor Tips</mat-card-title>
            <mat-card-subtitle>Cursor IDE tips and productivity tricks</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Boost your productivity with powerful Cursor IDE features, shortcuts, and AI-powered tools.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View Tips</button>
          </mat-card-actions>
        </mat-card>
      </div>

      <!-- Router outlet for child routes -->
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .utilities-container {
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

    .utility-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .utility-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .utility-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--accent-color);
    }

    .utility-card mat-card-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .utility-card mat-card-subtitle {
      color: var(--text-secondary);
    }

    .utility-card mat-card-content p {
      color: var(--text-secondary);
      line-height: 1.5;
    }
  `]
})
export class UtilitiesComponent {}


