import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-resume-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="resume-home-container">
      <div class="hero-section">
        <mat-icon class="hero-icon">description</mat-icon>
        <h1>Resume Portfolio</h1>
        <p class="subtitle">Professional profiles and career highlights</p>
        <p class="description">
          Explore different versions of professional resumes, from concise one-pagers to comprehensive career portfolios.
        </p>
      </div>

      <div class="content-section">
        <h2>Available Resumes</h2>
        <div class="resume-cards">
          <mat-card class="resume-card">
            <mat-card-header>
              <mat-icon mat-card-avatar>person</mat-icon>
              <mat-card-title>Chauey</mat-card-title>
              <mat-card-subtitle>Software Developer</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>Professional software developer with expertise in Angular, .NET, and modern web technologies.</p>
              <div class="resume-links">
                <a mat-button color="primary" routerLink="/resume/chauey/one-pager">
                  <mat-icon>description</mat-icon>
                  One-Pager Resume
                </a>
                <a mat-button color="accent" routerLink="/resume/chauey/full">
                  <mat-icon>folder_open</mat-icon>
                  Full Resume
                </a>
              </div>
            </mat-card-content>
          </mat-card>
        </div>

        <div class="info-section">
          <h3>About Resume Formats</h3>
          <div class="format-info">
            <div class="format-item">
              <mat-icon>description</mat-icon>
              <div>
                <h4>One-Pager</h4>
                <p>Concise summary highlighting key skills, experience, and achievements in a single page format.</p>
              </div>
            </div>
            <div class="format-item">
              <mat-icon>folder_open</mat-icon>
              <div>
                <h4>Full Resume</h4>
                <p>Comprehensive career portfolio with detailed work history, projects, and accomplishments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .resume-home-container {
      padding: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .hero-section {
      background: linear-gradient(135deg, var(--primary-color-light), var(--primary-color));
      color: white;
      padding: 4rem 2rem;
      border-radius: 12px;
      margin-bottom: 2rem;
      text-align: center;
      box-shadow: var(--shadow-lg);
    }

    .hero-icon {
      font-size: 4rem;
      width: 4rem;
      height: 4rem;
      margin-bottom: 1rem;
    }

    .hero-section h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .hero-section .subtitle {
      font-size: 1.25rem;
      opacity: 0.9;
      margin-bottom: 1rem;
    }

    .hero-section .description {
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.7;
      opacity: 0.8;
    }

    .content-section {
      padding: 0 2rem;
    }

    .content-section h2 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .resume-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .resume-card {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
    }

    .resume-card mat-card-header {
      margin-bottom: 1rem;
    }

    .resume-card mat-card-title {
      color: var(--text-primary);
      font-size: 1.5rem;
      font-weight: 600;
    }

    .resume-card mat-card-subtitle {
      color: var(--text-secondary);
      font-size: 1rem;
    }

    .resume-card mat-card-content p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .resume-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .resume-links a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .info-section {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 2rem;
      box-shadow: var(--shadow-sm);
    }

    .info-section h3 {
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .format-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .format-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .format-item mat-icon {
      color: var(--primary-color);
      font-size: 2rem;
      width: 2rem;
      height: 2rem;
      margin-top: 0.25rem;
    }

    .format-item h4 {
      color: var(--text-primary);
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .format-item p {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .resume-home-container {
        padding: 1rem;
      }

      .hero-section {
        padding: 2rem 1rem;
      }

      .hero-section h1 {
        font-size: 2rem;
      }

      .content-section {
        padding: 0;
      }

      .resume-cards {
        grid-template-columns: 1fr;
      }

      .resume-links {
        flex-direction: column;
      }
    }
  `]
})
export class ResumeHomeComponent {
}
