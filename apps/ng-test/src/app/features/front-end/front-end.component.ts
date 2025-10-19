import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-front-end',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="front-end-container">
      <header class="hero-section">
        <mat-icon class="hero-icon">web</mat-icon>
        <h1>Front-End Development</h1>
        <p class="subtitle">Modern frameworks, libraries, and best practices</p>
      </header>

      <div class="content-grid">
        <mat-card class="framework-card" [routerLink]="['/angular']">
          <mat-icon class="card-icon">code</mat-icon>
          <h2>Angular</h2>
          <p>Comprehensive Angular tutorials, examples, and best practices. Learn standalone components, signals, NgRx, and more.</p>
          <button mat-raised-button color="primary">
            Explore Angular
            <mat-icon>arrow_forward</mat-icon>
          </button>
        </mat-card>

        <mat-card class="framework-card placeholder">
          <mat-icon class="card-icon">code</mat-icon>
          <h2>React</h2>
          <p>Coming soon: React tutorials, hooks, context, and modern patterns.</p>
          <div class="coming-soon-badge">Coming Soon</div>
        </mat-card>

        <mat-card class="framework-card placeholder">
          <mat-icon class="card-icon">code</mat-icon>
          <h2>Vue.js</h2>
          <p>Coming soon: Vue.js composition API, Pinia state management, and more.</p>
          <div class="coming-soon-badge">Coming Soon</div>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .front-end-container {
      max-width: 1200px;
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
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--density-spacing-lg);
    }

    .framework-card {
      background-color: var(--bg-card);
      padding: var(--density-padding-xl);
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      cursor: pointer;
      position: relative;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }

      &.placeholder {
        opacity: 0.7;
        cursor: default;

        &:hover {
          transform: none;
          box-shadow: none;
        }
      }
    }

    .card-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
      color: var(--primary-color);
      margin-bottom: var(--density-margin-md);
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
      margin-bottom: var(--density-margin-lg);
    }

    .coming-soon-badge {
      display: inline-block;
      padding: 8px 16px;
      background-color: var(--accent-color);
      color: white;
      border-radius: 16px;
      font-size: 14px;
      font-weight: 500;
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0 auto;
    }
  `]
})
export class FrontEndComponent {}

