import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="not-found-container">
      <mat-card class="not-found-card">
        <mat-card-header>
          <div class="header-icon">
            <mat-icon>construction</mat-icon>
          </div>
          <mat-card-title>Coming Soon</mat-card-title>
          <mat-card-subtitle>This feature is under construction</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div class="content">
            <p class="message">
              We're working hard to bring you this feature. Check back soon!
            </p>
            <div class="features-grid">
              <div class="feature-item">
                <mat-icon>code</mat-icon>
                <span>In Development</span>
              </div>
              <div class="feature-item">
                <mat-icon>schedule</mat-icon>
                <span>Coming Q1 2025</span>
              </div>
              <div class="feature-item">
                <mat-icon>rocket_launch</mat-icon>
                <span>Stay Tuned</span>
              </div>
            </div>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" routerLink="/dashboard">
            <mat-icon>home</mat-icon>
            Back to Dashboard
          </button>
          <button mat-button routerLink="/design-system">
            Explore Design System
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: calc(100vh - 200px);
      padding: 2rem;
      background: var(--bg-secondary);
    }

    .not-found-card {
      max-width: 600px;
      width: 100%;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-lg);
      text-align: center;
    }

    .mat-mdc-card-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3rem 2rem 1rem;
    }

    .header-icon {
      margin-bottom: 1.5rem;

      mat-icon {
        font-size: 120px;
        width: 120px;
        height: 120px;
        color: var(--warn-color);
        animation: pulse 2s ease-in-out infinite;
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.7;
        transform: scale(1.05);
      }
    }

    .mat-mdc-card-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .mat-mdc-card-subtitle {
      font-size: 1.125rem;
      color: var(--text-secondary);
      margin-bottom: 0;
    }

    .content {
      padding: 2rem 1rem;
    }

    .message {
      font-size: 1rem;
      color: var(--text-primary);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .feature-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      background: var(--bg-secondary);
      border-radius: 8px;
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;

      mat-icon {
        font-size: 32px;
        width: 32px;
        height: 32px;
        color: var(--primary-color);
      }

      span {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--text-secondary);
      }

      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
        border-color: var(--primary-color);
      }
    }

    .mat-mdc-card-actions {
      display: flex;
      gap: 1rem;
      padding: 1.5rem 2rem 2rem;
      justify-content: center;
      flex-wrap: wrap;

      button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    @media (max-width: 600px) {
      .not-found-container {
        padding: 1rem;
      }

      .header-icon mat-icon {
        font-size: 80px;
        width: 80px;
        height: 80px;
      }

      .mat-mdc-card-title {
        font-size: 1.5rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }

      .mat-mdc-card-actions {
        flex-direction: column;

        button {
          width: 100%;
        }
      }
    }
  `]
})
export class NotFoundComponent {}

