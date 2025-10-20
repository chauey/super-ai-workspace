import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-playwright',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="playwright-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Playwright
          </h1>
          <p class="text-xl text-secondary mb-6">
            Modern end-to-end testing framework for web applications with MCP integration.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <mat-card class="playwright-card" routerLink="getting-started">
          <mat-card-header>
            <mat-icon mat-card-avatar class="playwright-icon">play_arrow</mat-icon>
            <mat-card-title>Getting Started</mat-card-title>
            <mat-card-subtitle>Setup and basics</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Learn how to set up Playwright and write your first tests.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Start Learning</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="playwright-card" routerLink="test-examples">
          <mat-card-header>
            <mat-icon mat-card-avatar class="playwright-icon">science</mat-icon>
            <mat-card-title>Test Examples</mat-card-title>
            <mat-card-subtitle>Real-world test patterns</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Explore comprehensive test examples and patterns for common scenarios.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View Examples</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="playwright-card" routerLink="best-practices">
          <mat-card-header>
            <mat-icon mat-card-avatar class="playwright-icon">star</mat-icon>
            <mat-card-title>Best Practices</mat-card-title>
            <mat-card-subtitle>Testing best practices</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Learn industry best practices for writing maintainable and reliable tests.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Learn More</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="playwright-card" routerLink="mcp-integration">
          <mat-card-header>
            <mat-icon mat-card-avatar class="playwright-icon">hub</mat-icon>
            <mat-card-title>MCP Integration</mat-card-title>
            <mat-card-subtitle>Model Context Protocol</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Integrate Playwright with MCP servers for enhanced testing capabilities.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .playwright-container {
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

    .playwright-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .playwright-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .playwright-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--accent-color);
    }

    .playwright-card mat-card-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .playwright-card mat-card-subtitle {
      color: var(--text-secondary);
    }

    .playwright-card mat-card-content p {
      color: var(--text-secondary);
      line-height: 1.5;
    }
  `]
})
export class PlaywrightComponent {}
