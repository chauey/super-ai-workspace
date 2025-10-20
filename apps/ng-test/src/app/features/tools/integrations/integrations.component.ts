import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="integrations-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Integrations
          </h1>
          <p class="text-xl text-secondary mb-6">
            Third-party integrations and services to extend your application capabilities.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <mat-card class="integration-card" routerLink="mcp-servers">
          <mat-card-header>
            <mat-icon mat-card-avatar class="integration-icon">hub</mat-icon>
            <mat-card-title>MCP Servers</mat-card-title>
            <mat-card-subtitle>Model Context Protocol server integrations</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Connect to various MCP servers for enhanced functionality and data access.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View Servers</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="integration-card" routerLink="api-connections">
          <mat-card-header>
            <mat-icon mat-card-avatar class="integration-icon">api</mat-icon>
            <mat-card-title>API Connections</mat-card-title>
            <mat-card-subtitle>API integration and connection tools</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Manage API connections, authentication, and data synchronization.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Manage APIs</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="integration-card" routerLink="third-party-services">
          <mat-card-header>
            <mat-icon mat-card-avatar class="integration-icon">extension</mat-icon>
            <mat-card-title>Third-party Services</mat-card-title>
            <mat-card-subtitle>Third-party service integrations</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Integrate with external services like payment processors, analytics, and more.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View Services</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .integrations-container {
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

    .integration-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .integration-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .integration-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--accent-color);
    }

    .integration-card mat-card-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .integration-card mat-card-subtitle {
      color: var(--text-secondary);
    }

    .integration-card mat-card-content p {
      color: var(--text-secondary);
      line-height: 1.5;
    }
  `]
})
export class IntegrationsComponent {}


