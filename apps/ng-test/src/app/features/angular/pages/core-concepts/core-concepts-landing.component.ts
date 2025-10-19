import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LearningPathCardComponent, LearningPathCard } from '../../../../shared/components/learning-path-card/learning-path-card.component';

@Component({
  selector: 'app-core-concepts-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, LearningPathCardComponent],
  template: `
    <div class="category-landing">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Core Concepts</h1>
          <p class="hero-subtitle">Angular Fundamentals & Building Blocks</p>
          <p class="hero-description">
            Master the essential building blocks of Angular applications. Learn about control flow,
            signals, resources, and other fundamental concepts that form the foundation of modern Angular development.
          </p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-value">3</span>
              <span class="stat-label">Topics</span>
            </div>
            <div class="stat">
              <span class="stat-value">~2h</span>
              <span class="stat-label">Total Time</span>
            </div>
            <div class="stat">
              <span class="stat-value">Beginner</span>
              <span class="stat-label">Level</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Topics Grid -->
      <div class="topics-section">
        <h2 class="section-title">Topics to Explore</h2>
        <div class="topics-grid">
          @for (topic of topics; track topic.title) {
            <app-learning-path-card [card]="topic" />
          }
        </div>
      </div>

      <!-- Learning Path -->
      <div class="learning-path-section">
        <h2 class="section-title">Recommended Learning Path</h2>
        <div class="learning-path">
          <div class="path-item">
            <div class="path-number">1</div>
            <div class="path-content">
              <h3>Start with Empty Page</h3>
              <p>Understand the basic component structure and setup</p>
            </div>
          </div>
          <div class="path-divider">↓</div>
          <div class="path-item">
            <div class="path-number">2</div>
            <div class="path-content">
              <h3>Learn Control Flow</h3>
              <p>Master &#64;if, &#64;for, &#64;switch and conditional rendering</p>
            </div>
          </div>
          <div class="path-divider">↓</div>
          <div class="path-item">
            <div class="path-number">3</div>
            <div class="path-content">
              <h3>Explore Signals & Resources</h3>
              <p>Dive into Angular's reactive primitives for state management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .category-landing {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .hero-section {
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
      border-radius: 16px;
      padding: 3rem;
      margin-bottom: 3rem;
      color: white;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin: 0 0 0.5rem 0;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      margin: 0 0 1.5rem 0;
      opacity: 0.95;
    }

    .hero-description {
      font-size: 1.125rem;
      line-height: 1.7;
      max-width: 800px;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .hero-stats {
      display: flex;
      gap: 3rem;
      margin-top: 2rem;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 0.875rem;
      opacity: 0.85;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .topics-section {
      margin-bottom: 3rem;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 2rem;
      color: var(--text-primary);
    }

    .topics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }

    .learning-path-section {
      background: var(--bg-card);
      border-radius: 16px;
      padding: 2rem;
      border: 1px solid var(--border-color);
    }

    .learning-path {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .path-item {
      display: flex;
      gap: 1.5rem;
      align-items: flex-start;
      padding: 1.5rem;
      background: var(--bg-secondary);
      border-radius: 12px;
      border: 2px solid var(--border-color);
      transition: all 0.3s ease;
    }

    .path-item:hover {
      border-color: var(--primary-color);
      transform: translateX(8px);
    }

    .path-number {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--primary-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      flex-shrink: 0;
    }

    .path-content h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
      color: var(--text-primary);
    }

    .path-content p {
      margin: 0;
      color: var(--text-secondary);
    }

    .path-divider {
      text-align: center;
      font-size: 2rem;
      color: var(--primary-color);
      margin: 0.5rem 0;
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 2rem;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1.25rem;
      }

      .hero-stats {
        flex-direction: column;
        gap: 1rem;
      }

      .topics-grid {
        grid-template-columns: 1fr;
      }

      .path-item:hover {
        transform: none;
      }
    }
  `]
})
export class CoreConceptsLandingComponent {
  topics: LearningPathCard[] = [
    {
      title: 'Empty Page',
      subtitle: 'Component Structure',
      description: 'Start with a clean slate and understand the basic structure of an Angular component.',
      icon: 'description',
      iconColor: '#6366f1',
      route: '/angular/core-concepts/empty',
      tags: ['Beginner', 'Quick Start'],
      status: 'active',
    },
    {
      title: 'Control Flow',
      subtitle: 'Conditional Rendering',
      description: 'Master Angular\'s built-in control flow syntax including @if, @for, @switch, and more.',
      icon: 'control_camera',
      iconColor: '#8b5cf6',
      route: '/angular/core-concepts/control-flow',
      tags: ['Beginner', 'Essential'],
      status: 'active',
    },
    {
      title: 'Signals & Resources',
      subtitle: 'Reactive Primitives',
      description: 'Learn about Angular\'s modern reactive primitives for efficient state management.',
      icon: 'signal_cellular_alt',
      iconColor: '#a855f7',
      route: '/angular/core-concepts/signals',
      tags: ['Intermediate', 'Modern'],
      status: 'active',
      badge: 'new',
    },
  ];
}

