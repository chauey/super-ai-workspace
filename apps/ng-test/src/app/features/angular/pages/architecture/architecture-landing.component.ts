import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LearningPathCardComponent, LearningPathCard } from '../../../../shared/components/learning-path-card/learning-path-card.component';

@Component({
  selector: 'app-architecture-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, LearningPathCardComponent],
  template: `
    <div class="category-landing">
      <div class="hero-section">
        <h1 class="hero-title">Architecture</h1>
        <p class="hero-subtitle">Building Scalable Angular Applications</p>
        <p class="hero-description">
          Learn the architectural patterns and best practices for building maintainable Angular applications.
          Master dependency injection, lifecycle hooks, and service-oriented architecture.
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
    .hero-section { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 16px; padding: 3rem; margin-bottom: 3rem; color: white; }
    .hero-title { font-size: 3rem; font-weight: 700; margin: 0 0 0.5rem 0; }
    .hero-subtitle { font-size: 1.5rem; margin: 0 0 1.5rem 0; opacity: 0.95; }
    .hero-description { font-size: 1.125rem; line-height: 1.7; max-width: 800px; opacity: 0.9; }
    .topics-section { margin-bottom: 3rem; }
    .section-title { font-size: 2rem; font-weight: 600; margin-bottom: 2rem; color: var(--text-primary); }
    .topics-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 2rem; }
    @media (max-width: 768px) { .hero-section { padding: 2rem; } .hero-title { font-size: 2rem; } .topics-grid { grid-template-columns: 1fr; } }
  `]
})
export class ArchitectureLandingComponent {
  topics: LearningPathCard[] = [
    { title: 'Dependency Injection', subtitle: 'DI System', description: 'Master Angular\'s powerful dependency injection system for loosely coupled code.', icon: 'injection', iconColor: '#f59e0b', route: '/angular/architecture/dependency-injection', tags: ['Intermediate', 'Core'], status: 'active' },
    { title: 'Lifecycle Hooks', subtitle: 'Component Lifecycle', description: 'Understand component lifecycle and when to use each hook for optimal performance.', icon: 'cycle', iconColor: '#d97706', route: '/angular/architecture/lifecycle-hooks', tags: ['Intermediate', 'Essential'], status: 'active' },
    { title: 'Services', subtitle: 'Business Logic', description: 'Build reusable services for data access, state management, and business logic.', icon: 'build', iconColor: '#b45309', route: '/angular/architecture/services', tags: ['Intermediate', 'Patterns'], status: 'active' },
  ];
}

