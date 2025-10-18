import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
  ],
  template: `
    <div class="home-container">
      <!-- Hero Section -->
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Welcome to Super AI Guide
          </h1>
          <p class="text-xl text-secondary mb-6">
            Your comprehensive learning platform for AI, Front-end, Back-end, and Azure certifications
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <button mat-raised-button color="primary" routerLink="/design-system">
              <mat-icon>palette</mat-icon>
              Explore Design System
            </button>
            <button mat-raised-button routerLink="/angular">
              <mat-icon>code</mat-icon>
              Start Learning
            </button>
          </div>
        </div>
      </div>

      <!-- Main Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Design System -->
        <a routerLink="/design-system" class="feature-card">
          <div class="card-header">
            <mat-icon class="feature-icon">palette</mat-icon>
            <mat-chip class="badge-new">New</mat-chip>
          </div>
          <h2 class="card-title">Design System</h2>
          <p class="card-subtitle">UI Kit & Component Library</p>
          <p class="card-description">
            Comprehensive design system with AG Grid, Material components, and theming support.
          </p>
          <div class="card-features">
            <span class="feature-tag">Colors</span>
            <span class="feature-tag">Typography</span>
            <span class="feature-tag">Components</span>
            <span class="feature-tag">AG Grid</span>
          </div>
        </a>

        <!-- Angular -->
        <a routerLink="/angular" class="feature-card">
          <div class="card-header">
            <mat-icon class="feature-icon">code</mat-icon>
          </div>
          <h2 class="card-title">Angular</h2>
          <p class="card-subtitle">Modern web development</p>
          <p class="card-description">
            Master Angular with comprehensive tutorials, examples, and best practices.
          </p>
          <div class="card-features">
            <span class="feature-tag">Signals</span>
            <span class="feature-tag">Forms</span>
            <span class="feature-tag">Services</span>
            <span class="feature-tag">Routing</span>
          </div>
        </a>

        <!-- .NET -->
        <a routerLink="/dotnet" class="feature-card">
          <div class="card-header">
            <mat-icon class="feature-icon">terminal</mat-icon>
            <mat-chip class="badge-coming">Coming Soon</mat-chip>
          </div>
          <h2 class="card-title">.NET</h2>
          <p class="card-subtitle">Backend development</p>
          <p class="card-description">
            Learn C#, ASP.NET Core, Entity Framework, and modern .NET development.
          </p>
          <div class="card-features">
            <span class="feature-tag">C#</span>
            <span class="feature-tag">ASP.NET Core</span>
            <span class="feature-tag">EF Core</span>
            <span class="feature-tag">Blazor</span>
          </div>
        </a>

        <!-- AI-900 -->
        <a routerLink="/ai-900" class="feature-card">
          <div class="card-header">
            <mat-icon class="feature-icon">psychology</mat-icon>
            <mat-chip class="badge-coming">Coming Soon</mat-chip>
          </div>
          <h2 class="card-title">AI-900</h2>
          <p class="card-subtitle">Azure AI Fundamentals</p>
          <p class="card-description">
            Prepare for Microsoft Azure AI Fundamentals certification exam.
          </p>
          <div class="card-features">
            <span class="feature-tag">Machine Learning</span>
            <span class="feature-tag">Computer Vision</span>
            <span class="feature-tag">NLP</span>
            <span class="feature-tag">Practice Exams</span>
          </div>
        </a>

        <!-- AZ-900 -->
        <a routerLink="/az-900" class="feature-card">
          <div class="card-header">
            <mat-icon class="feature-icon">cloud</mat-icon>
            <mat-chip class="badge-coming">Coming Soon</mat-chip>
          </div>
          <h2 class="card-title">AZ-900</h2>
          <p class="card-subtitle">Azure Fundamentals</p>
          <p class="card-description">
            Master Azure cloud fundamentals for Microsoft certification.
          </p>
          <div class="card-features">
            <span class="feature-tag">Cloud Concepts</span>
            <span class="feature-tag">Azure Services</span>
            <span class="feature-tag">Security</span>
            <span class="feature-tag">Practice Exams</span>
          </div>
        </a>

        <!-- Placeholder for future -->
        <div class="feature-card placeholder-card">
          <div class="card-header">
            <mat-icon class="feature-icon">add_circle</mat-icon>
          </div>
          <h2 class="card-title">More Coming Soon</h2>
          <p class="card-subtitle">Stay tuned</p>
          <p class="card-description">
            React, Vue, Python, AWS certifications, and more on the way!
          </p>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="stats-section bg-card rounded-lg shadow-themed p-6">
        <h3 class="text-xl font-semibold text-primary mb-4 text-center">Platform Features</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="stat-item">
            <mat-icon class="stat-icon">library_books</mat-icon>
            <div class="stat-value">25+</div>
            <div class="stat-label">Tutorial Pages</div>
          </div>
          <div class="stat-item">
            <mat-icon class="stat-icon">widgets</mat-icon>
            <div class="stat-value">50+</div>
            <div class="stat-label">Components</div>
          </div>
          <div class="stat-item">
            <mat-icon class="stat-icon">dark_mode</mat-icon>
            <div class="stat-value">100%</div>
            <div class="stat-label">Dark Mode</div>
          </div>
          <div class="stat-item">
            <mat-icon class="stat-icon">speed</mat-icon>
            <div class="stat-value">Lazy</div>
            <div class="stat-label">Loaded</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
      background-color: var(--bg-secondary);
      min-height: 100vh;
    }

    .hero-section {
      animation: fadeIn 0.5s ease-in;
    }

    .feature-card {
      @apply block rounded-lg p-6 border transition-all cursor-pointer;
      background-color: var(--bg-card);
      border-color: var(--border-color);
      text-decoration: none;
      animation: fadeIn 0.5s ease-in;

      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-hover);
      }

      &.placeholder-card {
        opacity: 0.6;
        cursor: default;
        border-style: dashed;

        &:hover {
          transform: none;
        }
      }
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .feature-icon {
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
      color: var(--primary-color);
    }

    .badge-new {
      background-color: var(--accent-color) !important;
      color: white !important;
      font-weight: 600;
    }

    .badge-coming {
      background-color: var(--warn-color) !important;
      color: white !important;
      font-weight: 600;
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .card-subtitle {
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 600;
    }

    .card-description {
      color: var(--text-primary);
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .card-features {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .feature-tag {
      @apply text-xs px-2 py-1 rounded;
      background-color: var(--bg-tertiary);
      color: var(--text-secondary);
      border: 1px solid var(--border-color);
    }

    .stats-section {
      animation: fadeIn 0.8s ease-in;
    }

    .stat-item {
      text-align: center;
    }

    .stat-icon {
      font-size: 2.5rem;
      width: 2.5rem;
      height: 2.5rem;
      color: var(--primary-color);
      margin: 0 auto 0.5rem;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .home-container {
        padding: 1rem;
      }

      .hero-section {
        padding: 2rem 1rem;
      }

      .feature-icon {
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
      }
    }
  `],
})
export class HomeComponent {}

