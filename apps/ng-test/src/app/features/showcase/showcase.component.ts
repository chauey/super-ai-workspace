import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="showcase-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Showcase
          </h1>
          <p class="text-xl text-secondary mb-6">
            Portfolio, demos, and achievements to showcase your skills and accomplishments.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <mat-card class="showcase-card" routerLink="portfolio">
          <mat-card-header>
            <mat-icon mat-card-avatar class="showcase-icon">folder</mat-icon>
            <mat-card-title>Portfolio</mat-card-title>
            <mat-card-subtitle>Professional portfolio and resume</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Showcase your professional portfolio, resume, projects, and skills matrix.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View Portfolio</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="showcase-card" routerLink="demos">
          <mat-card-header>
            <mat-icon mat-card-avatar class="showcase-icon">play_circle</mat-icon>
            <mat-card-title>Demos</mat-card-title>
            <mat-card-subtitle>Interactive demonstrations</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Explore interactive examples, live previews, and code samples.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View Demos</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="showcase-card" routerLink="achievements">
          <mat-card-header>
            <mat-icon mat-card-avatar class="showcase-icon">emoji_events</mat-icon>
            <mat-card-title>Achievements</mat-card-title>
            <mat-card-subtitle>Certifications and milestones</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Display your certifications, badges, and career milestones.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View Achievements</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .showcase-container {
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

    .showcase-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .showcase-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .showcase-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--accent-color);
    }

    .showcase-card mat-card-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .showcase-card mat-card-subtitle {
      color: var(--text-secondary);
    }

    .showcase-card mat-card-content p {
      color: var(--text-secondary);
      line-height: 1.5;
    }
  `]
})
export class ShowcaseComponent {}



