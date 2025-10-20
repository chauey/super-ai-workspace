import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="calendar-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Calendar
          </h1>
          <p class="text-xl text-secondary mb-6">
            Smart calendar application with advanced scheduling capabilities.
          </p>
        </div>
      </div>

      <div class="coming-soon-card">
        <mat-card class="construction-card">
          <mat-card-content>
            <div class="construction-content">
              <mat-icon class="construction-icon">construction</mat-icon>
              <h2>Coming Soon</h2>
              <p>This feature is under construction</p>
              <p>We're working hard to bring you this feature. Check back soon!</p>
              <div class="status-badges">
                <span class="status-badge">
                  <mat-icon>code</mat-icon>
                  In Development
                </span>
                <span class="status-badge">
                  <mat-icon>schedule</mat-icon>
                  Coming Q1 2025
                </span>
                <span class="status-badge">
                  <mat-icon>rocket_launch</mat-icon>
                  Stay Tuned
                </span>
              </div>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button color="primary" routerLink="/dashboard">
              <mat-icon>home</mat-icon>
              Back to Dashboard
            </button>
            <button mat-button routerLink="/design-system">
              <mat-icon>palette</mat-icon>
              Explore Design System
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .calendar-container {
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

    .coming-soon-card {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
    }

    .construction-card {
      max-width: 600px;
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-lg);
    }

    .construction-content {
      text-align: center;
      padding: 2rem;
    }

    .construction-icon {
      font-size: 4rem;
      width: 4rem;
      height: 4rem;
      color: var(--warn-color);
      margin-bottom: 1rem;
    }

    .construction-content h2 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .construction-content p {
      color: var(--text-secondary);
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .status-badges {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
      flex-wrap: wrap;
    }

    .status-badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: var(--bg-tertiary);
      color: var(--text-primary);
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .status-badge mat-icon {
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
    }
  `]
})
export class CalendarComponent {}
