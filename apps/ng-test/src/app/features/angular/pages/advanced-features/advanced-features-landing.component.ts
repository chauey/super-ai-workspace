import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LearningPathCardComponent, LearningPathCard } from '../../../../shared/components/learning-path-card/learning-path-card.component';

@Component({
  selector: 'app-advanced-features-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, LearningPathCardComponent],
  template: `
    <div class="category-landing">
      <div class="hero-section">
        <h1 class="hero-title">Advanced Features</h1>
        <p class="hero-subtitle">Power User Techniques</p>
        <p class="hero-description">
          Take your Angular skills to the next level with advanced features like pipes, guards,
          interceptors, lazy loading, and deferrable views for optimized applications.
        </p>
      </div>

      <div class="topics-section">
        <h2 class="section-title">Topics to Explore</h2>
        <div class="topics-grid">
          @for (topic of topics; track topic.title) {
            <app-learning-path-card [card]="topic" />
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .category-landing { padding: 2rem; max-width: 1400px; margin: 0 auto; }
    .hero-section { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); border-radius: 16px; padding: 3rem; margin-bottom: 3rem; color: white; }
    .hero-title { font-size: 3rem; font-weight: 700; margin: 0 0 0.5rem 0; }
    .hero-subtitle { font-size: 1.5rem; margin: 0 0 1.5rem 0; opacity: 0.95; }
    .hero-description { font-size: 1.125rem; line-height: 1.7; max-width: 800px; opacity: 0.9; }
    .topics-section { margin-bottom: 3rem; }
    .section-title { font-size: 2rem; font-weight: 600; margin-bottom: 2rem; color: var(--text-primary); }
    .topics-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 2rem; }
    @media (max-width: 768px) { .hero-section { padding: 2rem; } .hero-title { font-size: 2rem; } .topics-grid { grid-template-columns: 1fr; } }
  `]
})
export class AdvancedFeaturesLandingComponent {
  topics: LearningPathCard[] = [
    { title: 'Pipes', subtitle: 'Data Transformation', description: 'Create custom pipes for data transformation and formatting in templates.', icon: 'filter_list', iconColor: '#ef4444', route: '/angular/advanced-features/pipes', tags: ['Advanced', 'Utility'], status: 'active' },
    { title: 'Guards & Interceptors', subtitle: 'Security & HTTP', description: 'Implement route guards and HTTP interceptors for security and request/response handling.', icon: 'security', iconColor: '#dc2626', route: '/angular/advanced-features/guards-interceptors', tags: ['Advanced', 'Security'], status: 'active' },
    { title: 'Lazy Loading', subtitle: 'Performance', description: 'Optimize app performance with lazy-loaded modules and code splitting.', icon: 'speed', iconColor: '#b91c1c', route: '/angular/advanced-features/lazy-loading', tags: ['Advanced', 'Performance'], status: 'active' },
    { title: '@defer Directive', subtitle: 'Deferred Loading', description: 'Use deferrable views for progressive loading and improved initial load time.', icon: 'schedule', iconColor: '#991b1b', route: '/angular/advanced-features/defer', tags: ['Advanced', 'Modern'], status: 'active', badge: 'new' },
  ];
}

