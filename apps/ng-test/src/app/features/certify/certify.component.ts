import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-certify',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="certify-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Certify
          </h1>
          <p class="text-xl text-secondary mb-6">
            Prepare for professional certifications with practice tests, study materials, and progress tracking.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <mat-card class="certify-card" routerLink="practice-tests">
          <mat-card-header>
            <mat-icon mat-card-avatar class="certify-icon">quiz</mat-icon>
            <mat-card-title>Practice Tests</mat-card-title>
            <mat-card-subtitle>Test your knowledge</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Take practice tests for various certifications including Azure, AI, and cloud platforms.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Start Testing</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="certify-card" routerLink="study-materials">
          <mat-card-header>
            <mat-icon mat-card-avatar class="certify-icon">menu_book</mat-icon>
            <mat-card-title>Study Materials</mat-card-title>
            <mat-card-subtitle>Learn and prepare</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Access comprehensive study guides, exam preparation materials, and reference resources.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Study Now</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="certify-card" routerLink="test-history">
          <mat-card-header>
            <mat-icon mat-card-avatar class="certify-icon">history</mat-icon>
            <mat-card-title>Test History</mat-card-title>
            <mat-card-subtitle>Track your progress</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>View your test attempts, track progress, and analyze performance with detailed analytics.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View History</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .certify-container {
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

    .certify-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .certify-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .certify-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--accent-color);
    }

    .certify-card mat-card-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .certify-card mat-card-subtitle {
      color: var(--text-secondary);
    }

    .certify-card mat-card-content p {
      color: var(--text-secondary);
      line-height: 1.5;
    }
  `]
})
export class CertifyComponent {}


