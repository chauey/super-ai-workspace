import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-dashboard',
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
    <div class="dashboard-container">
      <!-- Hero Section -->
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 md:p-12 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <div class="flex justify-center mb-4">
            <mat-icon class="hero-icon">dashboard</mat-icon>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Super AI Guide</h1>
          <p class="text-xl md:text-2xl text-secondary mb-6">
            All-in-one AI/Full-Stackdeveloper hub: Learn modern web technologies, master cloud
            certifications, explore AI tools, build SaaS applications, and showcase skills with
            interactive tutorials and real-world projects.
          </p>
          <p class="text-base text-secondary mb-8 mx-auto">
            Master modern web development with hands-on tutorials, best practices, and certification
            preparation materials.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <button mat-raised-button color="primary" routerLink="/design-system" class="hero-btn">
              <mat-icon>palette</mat-icon>
              Design System
            </button>
            <button mat-raised-button color="accent" routerLink="/angular" class="hero-btn">
              <mat-icon>code</mat-icon>
              Start Learning
            </button>
          </div>
        </div>
      </div>

      <!-- Main Features Grid -->
      <h2 class="text-2xl font-bold text-primary mb-6">Learning Paths</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Design System -->
        <a routerLink="/design-system" class="feature-card active">
          <div class="card-icon-wrapper">
            <mat-icon class="card-icon">palette</mat-icon>
          </div>
          <div class="card-badge">
            <mat-chip class="badge-new">New</mat-chip>
          </div>
          <h3 class="card-title">Design System</h3>
          <p class="card-subtitle">UI Kit & Component Library</p>
          <p class="card-description">
            Comprehensive design system with AG Grid, Material components, colors, typography, and
            full theming support.
          </p>
          <div class="card-tags">
            <span class="tag">10 Pages</span>
            <span class="tag">AG Grid</span>
            <span class="tag">Dark Mode</span>
          </div>
          <div class="card-footer">
            <span class="explore-link">Explore →</span>
          </div>
        </a>

        <!-- Angular -->
        <a routerLink="/angular" class="feature-card active">
          <div class="card-icon-wrapper">
            <mat-icon class="card-icon angular-icon">code</mat-icon>
          </div>
          <h3 class="card-title">Angular</h3>
          <p class="card-subtitle">Modern Web Development</p>
          <p class="card-description">
            Master Angular with signals, reactive forms, services, routing, and advanced patterns
            with hands-on examples.
          </p>
          <div class="card-tags">
            <span class="tag">15+ Pages</span>
            <span class="tag">Signals</span>
            <span class="tag">Best Practices</span>
          </div>
          <div class="card-footer">
            <span class="explore-link">Explore →</span>
          </div>
        </a>

        <!-- .NET -->
        <a routerLink="/dotnet" class="feature-card coming-soon">
          <div class="card-icon-wrapper">
            <mat-icon class="card-icon">terminal</mat-icon>
          </div>
          <div class="card-badge">
            <mat-chip class="badge-coming">Coming Soon</mat-chip>
          </div>
          <h3 class="card-title">.NET</h3>
          <p class="card-subtitle">Backend Development</p>
          <p class="card-description">
            Learn C#, ASP.NET Core Web API, Entity Framework Core, Blazor, and modern .NET
            development patterns.
          </p>
          <div class="card-tags">
            <span class="tag">C# 12</span>
            <span class="tag">ASP.NET Core</span>
            <span class="tag">Blazor</span>
          </div>
          <div class="card-footer">
            <span class="explore-link">Preview →</span>
          </div>
        </a>

        <!-- AI-900 -->
        <a routerLink="/ai-900" class="feature-card coming-soon">
          <div class="card-icon-wrapper">
            <mat-icon class="card-icon">psychology</mat-icon>
          </div>
          <div class="card-badge">
            <mat-chip class="badge-coming">Coming Soon</mat-chip>
          </div>
          <h3 class="card-title">AI-900</h3>
          <p class="card-subtitle">Azure AI Fundamentals</p>
          <p class="card-description">
            Prepare for Microsoft Azure AI Fundamentals certification with study guides, practice
            exams, and AI workloads.
          </p>
          <div class="card-tags">
            <span class="tag">Certification</span>
            <span class="tag">AI/ML</span>
            <span class="tag">Practice Tests</span>
          </div>
          <div class="card-footer">
            <span class="explore-link">Preview →</span>
          </div>
        </a>

        <!-- AZ-900 -->
        <a routerLink="/az-900" class="feature-card coming-soon">
          <div class="card-icon-wrapper">
            <mat-icon class="card-icon">cloud</mat-icon>
          </div>
          <div class="card-badge">
            <mat-chip class="badge-coming">Coming Soon</mat-chip>
          </div>
          <h3 class="card-title">AZ-900</h3>
          <p class="card-subtitle">Azure Fundamentals</p>
          <p class="card-description">
            Master Azure cloud fundamentals for Microsoft certification with cloud concepts,
            services, and governance.
          </p>
          <div class="card-tags">
            <span class="tag">Certification</span>
            <span class="tag">Cloud</span>
            <span class="tag">Azure</span>
          </div>
          <div class="card-footer">
            <span class="explore-link">Preview →</span>
          </div>
        </a>

        <!-- Documentation -->
        <a routerLink="/docs" class="feature-card active">
          <div class="card-icon-wrapper">
            <mat-icon class="card-icon">menu_book</mat-icon>
          </div>
          <h3 class="card-title">Documentation</h3>
          <p class="card-subtitle">Developer Guides</p>
          <p class="card-description">
            Complete documentation including styling guides, architecture patterns, and best
            practices for developers.
          </p>
          <div class="card-tags">
            <span class="tag">Styling Guide</span>
            <span class="tag">Architecture</span>
            <span class="tag">Best Practices</span>
          </div>
          <div class="card-footer">
            <span class="explore-link">Explore →</span>
          </div>
        </a>
      </div>

      <!-- Stats Section -->
      <div class="stats-container bg-card rounded-lg shadow-themed p-8 mb-8">
        <h2 class="text-2xl font-bold text-primary mb-6 text-center">Platform Statistics</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <mat-icon class="stat-icon">library_books</mat-icon>
            </div>
            <div class="stat-value">25+</div>
            <div class="stat-label">Tutorial Pages</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <mat-icon class="stat-icon">widgets</mat-icon>
            </div>
            <div class="stat-value">50+</div>
            <div class="stat-label">UI Components</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <mat-icon class="stat-icon">dark_mode</mat-icon>
            </div>
            <div class="stat-value">100%</div>
            <div class="stat-label">Dark Mode</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <mat-icon class="stat-icon">speed</mat-icon>
            </div>
            <div class="stat-value">Lazy</div>
            <div class="stat-label">Loaded</div>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <h2 class="text-2xl font-bold text-primary mb-6">Key Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="info-card">
          <mat-icon class="info-icon">palette</mat-icon>
          <h3 class="info-title">Beautiful UI</h3>
          <p class="info-description">
            Modern design with Angular Material, Tailwind CSS, and custom theming
          </p>
        </div>
        <div class="info-card">
          <mat-icon class="info-icon">wb_sunny</mat-icon>
          <h3 class="info-title">Dark Mode</h3>
          <p class="info-description">
            Full theme support with light, dark, and system preference modes
          </p>
        </div>
        <div class="info-card">
          <mat-icon class="info-icon">code</mat-icon>
          <h3 class="info-title">Best Practices</h3>
          <p class="info-description">
            Learn enterprise-ready patterns and modern development techniques
          </p>
        </div>
        <div class="info-card">
          <mat-icon class="info-icon">school</mat-icon>
          <h3 class="info-title">Certification Prep</h3>
          <p class="info-description">
            Study materials and practice tests for Azure certifications
          </p>
        </div>
        <div class="info-card">
          <mat-icon class="info-icon">grid_on</mat-icon>
          <h3 class="info-title">AG Grid</h3>
          <p class="info-description">
            Enterprise-grade data grid with sorting, filtering, and more
          </p>
        </div>
        <div class="info-card">
          <mat-icon class="info-icon">rocket_launch</mat-icon>
          <h3 class="info-title">Performance</h3>
          <p class="info-description">Lazy loading, code splitting, and optimized bundle sizes</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .dashboard-container {
        padding: 2rem;
        max-width: 1400px;
        margin: 0 auto;
        background-color: var(--bg-secondary);
        min-height: 100vh;
      }

      /* Hero Section */
      .hero-section {
        animation: fadeInUp 0.6s ease-out;
      }

      .hero-icon {
        font-size: 4rem;
        width: 4rem;
        height: 4rem;
        color: var(--primary-color);
      }

      .hero-btn {
        padding: 0 2rem !important;
        height: 48px;
      }

      /* Feature Cards */
      .feature-card {
        @apply block rounded-xl p-6 border transition-all;
        background-color: var(--bg-card);
        border-color: var(--border-color);
        text-decoration: none;
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
          opacity: 0;
          transition: opacity 0.3s;
        }

        &:hover::before {
          opacity: 1;
        }

        &.active:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-hover);
          border-color: var(--primary-color);
        }

        &.coming-soon {
          &:hover {
            transform: translateY(-4px);
            border-color: var(--border-color);
          }
        }

        &.placeholder {
          border-style: dashed;
          opacity: 0.6;
          cursor: default;

          &:hover {
            transform: none;
          }
        }
      }

      .card-icon-wrapper {
        margin-bottom: 1.5rem;
      }

      .card-icon {
        font-size: 3rem;
        width: 3rem;
        height: 3rem;
        color: var(--primary-color);
      }

      .angular-icon {
        color: #dd0031;
      }

      .card-badge {
        position: absolute;
        top: 1rem;
        right: 1rem;
      }

      .badge-new {
        background-color: var(--accent-color) !important;
        color: white !important;
        font-weight: 600;
        font-size: 0.75rem;
      }

      .badge-coming {
        background-color: var(--warn-color) !important;
        color: white !important;
        font-weight: 600;
        font-size: 0.75rem;
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
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .card-description {
        color: var(--text-primary);
        line-height: 1.6;
        margin-bottom: 1.5rem;
        min-height: 4.5rem;
      }

      .card-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .tag {
        @apply text-xs px-3 py-1 rounded-full;
        background-color: var(--bg-tertiary);
        color: var(--text-secondary);
        border: 1px solid var(--border-color);
        font-weight: 500;
      }

      .card-footer {
        display: flex;
        justify-content: flex-end;
      }

      .explore-link {
        color: var(--primary-color);
        font-weight: 600;
        font-size: 0.875rem;
        transition: transform 0.2s;
      }

      .feature-card:hover .explore-link {
        transform: translateX(4px);
      }

      /* Stats Section */
      .stats-container {
        animation: fadeInUp 0.8s ease-out;
      }

      .stat-card {
        text-align: center;
        padding: 1rem;
      }

      .stat-icon-wrapper {
        margin-bottom: 1rem;
      }

      .stat-icon {
        font-size: 3rem;
        width: 3rem;
        height: 3rem;
        color: var(--primary-color);
        margin: 0 auto;
      }

      .stat-value {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .stat-label {
        font-size: 0.875rem;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      /* Info Cards */
      .info-card {
        @apply rounded-lg p-6 border;
        background-color: var(--bg-card);
        border-color: var(--border-color);
        text-align: center;
        transition: all 0.3s;

        &:hover {
          border-color: var(--primary-color);
          box-shadow: var(--shadow);
        }
      }

      .info-icon {
        font-size: 2.5rem;
        width: 2.5rem;
        height: 2.5rem;
        color: var(--primary-color);
        margin: 0 auto 1rem;
      }

      .info-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .info-description {
        font-size: 0.875rem;
        color: var(--text-secondary);
        line-height: 1.5;
      }

      /* Animations */
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Responsive */
      @media (max-width: 768px) {
        .dashboard-container {
          padding: 1rem;
        }

        .hero-section {
          padding: 2rem 1rem;
        }

        .hero-icon {
          font-size: 3rem;
          width: 3rem;
          height: 3rem;
        }

        .card-icon {
          font-size: 2rem;
          width: 2rem;
          height: 2rem;
        }

        .stat-value {
          font-size: 2rem;
        }
      }
    `,
  ],
})
export class DashboardComponent {
  themeService = inject(ThemeService);
}
