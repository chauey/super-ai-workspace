import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LearningPathCardComponent, LearningPathCard } from '../../../../shared/components/learning-path-card/learning-path-card.component';

@Component({
  selector: 'app-forms-data-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, LearningPathCardComponent],
  template: `
    <div class="category-landing">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Forms & Data</h1>
          <p class="hero-subtitle">Data Handling & HTTP Communication</p>
          <p class="hero-description">
            Learn how to build robust forms and manage data flow in Angular applications. From reactive forms
            to HTTP client integration, master the patterns for handling user input and server communication.
          </p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-value">3</span>
              <span class="stat-label">Topics</span>
            </div>
            <div class="stat">
              <span class="stat-value">~3h</span>
              <span class="stat-label">Total Time</span>
            </div>
            <div class="stat">
              <span class="stat-value">Intermediate</span>
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
              <h3>Reactive Forms Basics</h3>
              <p>Learn form controls, validators, and form groups</p>
            </div>
          </div>
          <div class="path-divider">↓</div>
          <div class="path-item">
            <div class="path-number">2</div>
            <div class="path-content">
              <h3>Forms with Signals</h3>
              <p>Combine reactive forms with Angular signals for better reactivity</p>
            </div>
          </div>
          <div class="path-divider">↓</div>
          <div class="path-item">
            <div class="path-number">3</div>
            <div class="path-content">
              <h3>HTTP Client</h3>
              <p>Integrate with backend APIs and handle data fetching</p>
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
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
      border-color: #10b981;
      transform: translateX(8px);
    }

    .path-number {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #10b981;
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
      color: #10b981;
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
export class FormsDataLandingComponent {
  topics: LearningPathCard[] = [
    {
      title: 'Reactive Forms',
      subtitle: 'Form Management',
      description: 'Build powerful, type-safe forms with FormControls, FormGroups, and validators.',
      icon: 'edit',
      iconColor: '#10b981',
      route: '/angular/forms-data/reactive-forms',
      tags: ['Intermediate', 'Forms'],
      status: 'active',
    },
    {
      title: 'Forms + Signals',
      subtitle: 'Modern Forms',
      description: 'Combine reactive forms with Angular signals for enhanced reactivity and simplicity.',
      icon: 'signal_cellular_alt',
      iconColor: '#059669',
      route: '/angular/forms-data/reactive-forms-signals',
      tags: ['Advanced', 'Signals'],
      status: 'active',
      badge: 'new',
    },
    {
      title: 'HTTP Client',
      subtitle: 'API Integration',
      description: 'Connect to REST APIs, handle responses, errors, and implement interceptors.',
      icon: 'http',
      iconColor: '#047857',
      route: '/angular/forms-data/http-client',
      tags: ['Intermediate', 'API'],
      status: 'active',
    },
  ];
}

