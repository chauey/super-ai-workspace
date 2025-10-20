import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-saas',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule],
  template: `
    <div class="saas-container">
      <header class="hero-section">
        <mat-icon class="hero-icon">web_asset</mat-icon>
        <h1>SaaS Applications</h1>
        <p class="subtitle">Full-stack web applications showcasing modern development practices</p>
      </header>

      <div class="content-grid">
        <mat-card class="app-card" [routerLink]="['/apps/certification-test']">
          <div class="card-header">
            <mat-icon class="card-icon">quiz</mat-icon>
            <mat-chip color="accent">NEW</mat-chip>
          </div>
          <h2>Certification Test</h2>
          <p>Practice tests for certifications and job interviews. Track progress, review mistakes, and master your skills.</p>
          <ul class="feature-list">
            <li><mat-icon>check_circle</mat-icon> Skill-based learning</li>
            <li><mat-icon>check_circle</mat-icon> Progress tracking</li>
            <li><mat-icon>check_circle</mat-icon> Detailed analytics</li>
            <li><mat-icon>check_circle</mat-icon> Free & paid tests</li>
          </ul>
          <button mat-raised-button color="primary">
            Start Testing
            <mat-icon>arrow_forward</mat-icon>
          </button>
        </mat-card>

        <mat-card class="app-card placeholder">
          <div class="card-header">
            <mat-icon class="card-icon">calendar_month</mat-icon>
          </div>
          <h2>Smart Calendar</h2>
          <p>Coming soon: AI-powered scheduling, event management, and calendar integration.</p>
          <ul class="feature-list">
            <li><mat-icon>schedule</mat-icon> Smart scheduling</li>
            <li><mat-icon>event</mat-icon> Event management</li>
            <li><mat-icon>group</mat-icon> Team collaboration</li>
            <li><mat-icon>notifications</mat-icon> Reminders & alerts</li>
          </ul>
          <div class="coming-soon-badge">Coming Soon</div>
        </mat-card>

        <mat-card class="app-card placeholder">
          <div class="card-header">
            <mat-icon class="card-icon">task_alt</mat-icon>
          </div>
          <h2>Task Management</h2>
          <p>Coming soon: Gamified task and project management with team collaboration.</p>
          <ul class="feature-list">
            <li><mat-icon>sports_esports</mat-icon> Gamification</li>
            <li><mat-icon>leaderboard</mat-icon> Leaderboards</li>
            <li><mat-icon>psychology</mat-icon> Productivity insights</li>
            <li><mat-icon>groups</mat-icon> Team boards</li>
          </ul>
          <div class="coming-soon-badge">Coming Soon</div>
        </mat-card>
      </div>

      <section class="tech-stack">
        <h2>Built With Modern Technologies</h2>
        <div class="tech-grid">
          <div class="tech-item">
            <mat-icon>code</mat-icon>
            <span>Angular 20+</span>
          </div>
          <div class="tech-item">
            <mat-icon>storage</mat-icon>
            <span>NgRx SignalStore</span>
          </div>
          <div class="tech-item">
            <mat-icon>palette</mat-icon>
            <span>Angular Material</span>
          </div>
          <div class="tech-item">
            <mat-icon>brush</mat-icon>
            <span>Tailwind CSS</span>
          </div>
          <div class="tech-item">
            <mat-icon>api</mat-icon>
            <span>RESTful APIs</span>
          </div>
          <div class="tech-item">
            <mat-icon>cloud</mat-icon>
            <span>Cloud Ready</span>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .saas-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: var(--density-padding-xl);
    }

    .hero-section {
      text-align: center;
      padding: var(--density-padding-xl) 0;
      margin-bottom: var(--density-margin-xl);
    }

    .hero-icon {
      font-size: 72px;
      width: 72px;
      height: 72px;
      color: var(--primary-color);
      margin-bottom: var(--density-margin-md);
    }

    h1 {
      font-size: var(--density-font-size-h1);
      color: var(--text-primary);
      margin: 0 0 var(--density-margin-sm) 0;
    }

    .subtitle {
      font-size: var(--density-font-size-lg);
      color: var(--text-secondary);
      margin: 0;
    }

    .content-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--density-spacing-lg);
      margin-bottom: var(--density-margin-xl);
    }

    .app-card {
      background-color: var(--bg-card);
      padding: var(--density-padding-xl);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      cursor: pointer;
      display: flex;
      flex-direction: column;

      &:hover:not(.placeholder) {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }

      &.placeholder {
        opacity: 0.7;
        cursor: default;
      }
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: var(--density-margin-md);
    }

    .card-icon {
      font-size: 56px;
      width: 56px;
      height: 56px;
      color: var(--primary-color);
    }

    h2 {
      font-size: var(--density-font-size-h2);
      color: var(--text-primary);
      margin: 0 0 var(--density-margin-sm) 0;
    }

    p {
      font-size: var(--density-font-size-md);
      color: var(--text-secondary);
      line-height: var(--density-line-height-md);
      margin-bottom: var(--density-margin-md);
      flex: 1;
    }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0 0 var(--density-margin-lg) 0;

      li {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--text-secondary);
        font-size: var(--density-font-size-sm);
        margin-bottom: 8px;

        mat-icon {
          font-size: 18px;
          width: 18px;
          height: 18px;
          color: var(--success-color);
        }
      }
    }

    .coming-soon-badge {
      display: inline-block;
      padding: 8px 16px;
      background-color: var(--accent-color);
      color: white;
      border-radius: 16px;
      font-size: 14px;
      font-weight: 500;
      margin-top: auto;
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: auto;
      width: fit-content;
    }

    .tech-stack {
      background-color: var(--bg-secondary);
      padding: var(--density-padding-xl);
      border-radius: var(--border-radius);
      text-align: center;

      h2 {
        margin-bottom: var(--density-margin-lg);
      }
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: var(--density-spacing-md);
    }

    .tech-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: var(--density-padding-md);
      background-color: var(--bg-card);
      border-radius: var(--border-radius);

      mat-icon {
        font-size: 32px;
        width: 32px;
        height: 32px;
        color: var(--primary-color);
      }

      span {
        font-size: var(--density-font-size-sm);
        color: var(--text-primary);
        font-weight: 500;
      }
    }
  `]
})
export class SaaSComponent {}

