import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="tools-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Tools
          </h1>
          <p class="text-xl text-secondary mb-6">
            Utilities, integrations, and settings to enhance your development workflow.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <mat-card class="tools-card" routerLink="utilities">
          <mat-card-header>
            <mat-icon mat-card-avatar class="tools-icon">handyman</mat-icon>
            <mat-card-title>Utilities</mat-card-title>
            <mat-card-subtitle>Development utilities and tools</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Code generators, formatters, validators, and other development utilities.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore Tools</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="tools-card" routerLink="integrations">
          <mat-card-header>
            <mat-icon mat-card-avatar class="tools-icon">hub</mat-icon>
            <mat-card-title>Integrations</mat-card-title>
            <mat-card-subtitle>Third-party integrations</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>MCP servers, API connections, and third-party service integrations.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View Integrations</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="tools-card" routerLink="settings">
          <mat-card-header>
            <mat-icon mat-card-avatar class="tools-icon">settings</mat-icon>
            <mat-card-title>Settings</mat-card-title>
            <mat-card-subtitle>Application preferences</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Theme configuration, layout preferences, and user settings.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Open Settings</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .tools-container {
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

    .tools-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .tools-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .tools-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--accent-color);
    }

    .tools-card mat-card-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .tools-card mat-card-subtitle {
      color: var(--text-secondary);
    }

    .tools-card mat-card-content p {
      color: var(--text-secondary);
      line-height: 1.5;
    }
  `]
})
export class ToolsComponent {}


