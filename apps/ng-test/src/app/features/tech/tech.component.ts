import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="learn-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Tech
          </h1>
          <p class="text-xl text-secondary mb-6">
            Comprehensive educational content covering frontend development, backend technologies, cloud platforms, and AI/ML tools.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <mat-card class="learning-path-card" routerLink="front-end">
          <mat-card-header>
            <mat-icon mat-card-avatar class="path-icon">web</mat-icon>
            <mat-card-title>Front-end</mat-card-title>
            <mat-card-subtitle>Modern web frameworks and libraries</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Angular, React, Vue.js and modern frontend development practices.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="learning-path-card" routerLink="back-end">
          <mat-card-header>
            <mat-icon mat-card-avatar class="path-icon">dns</mat-icon>
            <mat-card-title>Back-end</mat-card-title>
            <mat-card-subtitle>Server-side technologies and frameworks</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>.NET, Node.js, Python and backend development best practices.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="learning-path-card" routerLink="cloud-devops">
          <mat-card-header>
            <mat-icon mat-card-avatar class="path-icon">cloud</mat-icon>
            <mat-card-title>Cloud & DevOps</mat-card-title>
            <mat-card-subtitle>Cloud platforms and DevOps practices</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Azure certifications, DevOps tools, and cloud deployment strategies.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="learning-path-card" routerLink="ai-machine-learning">
          <mat-card-header>
            <mat-icon mat-card-avatar class="path-icon">psychology</mat-icon>
            <mat-card-title>AI & Machine Learning</mat-card-title>
            <mat-card-subtitle>AI tools and ML resources</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>AI tools, agents, MCP servers, and machine learning frameworks.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Explore</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .learn-container {
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

    .learning-path-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .learning-path-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .path-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--accent-color);
    }

    .learning-path-card mat-card-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .learning-path-card mat-card-subtitle {
      color: var(--text-secondary);
    }

    .learning-path-card mat-card-content p {
      color: var(--text-secondary);
      line-height: 1.5;
    }
  `]
})
export class TechComponent {}
