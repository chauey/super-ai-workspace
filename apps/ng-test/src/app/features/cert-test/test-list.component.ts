import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CertTestStore } from './store/test.store';

@Component({
  selector: 'app-test-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  template: `
    <div class="test-list-container">
      <!-- Hero Section -->
      <header class="hero-section">
        <div class="hero-content">
          <mat-icon class="hero-icon">quiz</mat-icon>
          <h1>Certification Tests</h1>
          <p class="hero-subtitle">
            Practice tests for certifications and job interviews
          </p>
          <p class="hero-description">
            Prepare for your next certification with our comprehensive practice tests.
            Track your progress, identify skill gaps, and achieve your goals.
          </p>
        </div>
      </header>

      <!-- Quick Stats -->
      <div class="stats-section">
        <mat-card class="stat-card">
          <mat-icon>assignment</mat-icon>
          <div class="stat-value">{{ availableTests().length }}</div>
          <div class="stat-label">Available Tests</div>
        </mat-card>

        <mat-card class="stat-card">
          <mat-icon>check_circle</mat-icon>
          <div class="stat-value">{{ totalAttempts() }}</div>
          <div class="stat-label">Tests Taken</div>
        </mat-card>

        <mat-card class="stat-card">
          <mat-icon>trending_up</mat-icon>
          <div class="stat-value">{{ passRate() }}%</div>
          <div class="stat-label">Pass Rate</div>
        </mat-card>

        <mat-card class="stat-card" [routerLink]="['/apps/certification-test']" class="clickable">
          <mat-icon>history</mat-icon>
          <div class="stat-value">View</div>
          <div class="stat-label">Test History</div>
        </mat-card>
      </div>

      <!-- Test Categories -->
      <section class="tests-section">
        <div class="section-header">
          <h2>Available Tests</h2>
          <p>Choose a certification test to begin practicing</p>
        </div>

        <div class="tests-grid">
          @for (test of availableTests(); track test.id) {
            <mat-card class="test-card">
              <mat-card-header>
                <div class="card-header-content">
                  <div class="test-icon">
                    <mat-icon>school</mat-icon>
                  </div>
                  <div class="test-title-section">
                    <mat-card-title>{{ test.title }}</mat-card-title>
                    @if (!test.isFree) {
                      <mat-chip class="price-chip">
                        <mat-icon>monetization_on</mat-icon>
                        {{ test.price | currency:test.currency }}
                      </mat-chip>
                    } @else {
                      <mat-chip class="free-chip">
                        <mat-icon>check</mat-icon>
                        FREE
                      </mat-chip>
                    }
                  </div>
                </div>
              </mat-card-header>

              <mat-card-content>
                <p class="test-description">{{ test.description }}</p>

                <div class="test-meta">
                  <div class="meta-item">
                    <mat-icon>schedule</mat-icon>
                    <span>{{ test.duration }} minutes</span>
                  </div>
                  <div class="meta-item">
                    <mat-icon>assignment</mat-icon>
                    <span>{{ test.questions.length }} questions</span>
                  </div>
                  <div class="meta-item">
                    <mat-icon>trending_up</mat-icon>
                    <span>Pass: {{ test.passingScore }}%</span>
                  </div>
                </div>

                <div class="test-info">
                  <mat-chip class="level-chip">{{ test.certificationLevel || 'Standard' }}</mat-chip>
                  <mat-chip>{{ test.category }}</mat-chip>
                  <mat-chip>v{{ test.version }}</mat-chip>
                </div>

                @if (test.skills.length > 0) {
                  <div class="skills-section">
                    <div class="skills-label">Skills Covered:</div>
                    <div class="skills-list">
                      @for (skill of test.skills.slice(0, 3); track skill.id) {
                        <mat-chip class="skill-chip" [matTooltip]="skill.description">
                          {{ skill.name }}
                        </mat-chip>
                      }
                      @if (test.skills.length > 3) {
                        <mat-chip class="more-chip">
                          +{{ test.skills.length - 3 }} more
                        </mat-chip>
                      }
                    </div>
                  </div>
                }
              </mat-card-content>

              <mat-card-actions>
                <button mat-button [routerLink]="['/apps/certification-test', test.id]">
                  <mat-icon>visibility</mat-icon>
                  View Details
                </button>
                <button mat-raised-button color="primary" [routerLink]="['/apps/certification-test', test.id, 'take']">
                  <mat-icon>play_arrow</mat-icon>
                  Start Test
                </button>
              </mat-card-actions>
            </mat-card>
          }
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <h2>Why Practice With Us?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <mat-icon>school</mat-icon>
            <h3>Skill-Based Learning</h3>
            <p>Track your performance by skill area and identify areas for improvement</p>
          </div>
          <div class="feature-card">
            <mat-icon>history</mat-icon>
            <h3>Progress Tracking</h3>
            <p>View your complete test history and monitor your improvement over time</p>
          </div>
          <div class="feature-card">
            <mat-icon>pause_circle</mat-icon>
            <h3>Pause & Resume</h3>
            <p>Take breaks during tests and resume exactly where you left off</p>
          </div>
          <div class="feature-card">
            <mat-icon>analytics</mat-icon>
            <h3>Detailed Analytics</h3>
            <p>Get comprehensive feedback with explanations for each question</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }

    .test-list-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: var(--density-padding-lg);
    }

    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
      color: white;
      padding: var(--density-padding-xl);
      border-radius: var(--border-radius);
      text-align: center;
      margin-bottom: var(--density-margin-xl);
      box-shadow: var(--shadow);
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
      margin-bottom: var(--density-margin-md);
    }

    .hero-section h1 {
      font-size: var(--density-font-size-h1);
      margin: 0 0 var(--density-margin-md) 0;
      font-weight: 700;
    }

    .hero-subtitle {
      font-size: var(--density-font-size-lg);
      margin-bottom: var(--density-margin-sm);
      opacity: 0.95;
    }

    .hero-description {
      font-size: var(--density-font-size-md);
      opacity: 0.9;
      line-height: var(--density-line-height-lg);
    }

    /* Stats Section */
    .stats-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--density-spacing-lg);
      margin-bottom: var(--density-margin-xl);
    }

    .stat-card {
      background-color: var(--bg-card);
      padding: var(--density-padding-lg);
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .stat-card.clickable {
      cursor: pointer;
    }

    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .stat-card mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: var(--primary-color);
      margin-bottom: var(--density-margin-sm);
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: var(--density-margin-xs);
    }

    .stat-label {
      font-size: var(--density-font-size-sm);
      color: var(--text-secondary);
    }

    /* Tests Section */
    .tests-section {
      margin-bottom: var(--density-margin-xl);
    }

    .section-header {
      margin-bottom: var(--density-margin-lg);
    }

    .section-header h2 {
      font-size: var(--density-font-size-h2);
      color: var(--text-primary);
      margin: 0 0 var(--density-margin-xs) 0;
    }

    .section-header p {
      font-size: var(--density-font-size-md);
      color: var(--text-secondary);
      margin: 0;
    }

    .tests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: var(--density-spacing-lg);
    }

    .test-card {
      background-color: var(--bg-card);
      display: flex;
      flex-direction: column;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .test-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .card-header-content {
      display: flex;
      align-items: flex-start;
      gap: var(--density-spacing-md);
      width: 100%;
    }

    .test-icon {
      background-color: var(--primary-color);
      color: white;
      border-radius: 50%;
      padding: var(--density-padding-sm);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .test-icon mat-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
    }

    .test-title-section {
      flex: 1;
    }

    mat-card-title {
      font-size: var(--density-font-size-h3);
      color: var(--text-primary);
      margin-bottom: var(--density-margin-xs);
    }

    .free-chip {
      background-color: var(--success-color) !important;
      color: white !important;
    }

    .price-chip {
      background-color: var(--accent-color) !important;
      color: white !important;
    }

    .test-description {
      font-size: var(--density-font-size-sm);
      color: var(--text-secondary);
      line-height: var(--density-line-height-md);
      margin-bottom: var(--density-margin-md);
    }

    .test-meta {
      display: flex;
      flex-wrap: wrap;
      gap: var(--density-spacing-md);
      margin-bottom: var(--density-margin-md);
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: var(--density-spacing-xs);
      font-size: var(--density-font-size-sm);
      color: var(--text-secondary);
    }

    .meta-item mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    .test-info {
      display: flex;
      flex-wrap: wrap;
      gap: var(--density-spacing-xs);
      margin-bottom: var(--density-margin-md);
    }

    .level-chip {
      background-color: var(--primary-color) !important;
      color: white !important;
    }

    .skills-section {
      border-top: 1px solid var(--border-color);
      padding-top: var(--density-padding-sm);
      margin-top: var(--density-margin-sm);
    }

    .skills-label {
      font-size: var(--density-font-size-xs);
      color: var(--text-secondary);
      font-weight: 600;
      margin-bottom: var(--density-margin-xs);
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: var(--density-spacing-xs);
    }

    .skill-chip {
      font-size: var(--density-font-size-xs);
      background-color: var(--bg-tertiary) !important;
    }

    .more-chip {
      font-size: var(--density-font-size-xs);
      background-color: var(--bg-tertiary) !important;
      color: var(--text-secondary) !important;
    }

    mat-card-actions {
      margin-top: auto;
      padding: var(--density-padding-md);
      border-top: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
    }

    /* Features Section */
    .features-section {
      background-color: var(--bg-secondary);
      padding: var(--density-padding-xl);
      border-radius: var(--border-radius);
      margin-top: var(--density-margin-xl);
    }

    .features-section h2 {
      font-size: var(--density-font-size-h2);
      color: var(--text-primary);
      text-align: center;
      margin-bottom: var(--density-margin-lg);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--density-spacing-lg);
    }

    .feature-card {
      text-align: center;
      padding: var(--density-padding-lg);
    }

    .feature-card mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: var(--primary-color);
      margin-bottom: var(--density-margin-md);
    }

    .feature-card h3 {
      font-size: var(--density-font-size-h4);
      color: var(--text-primary);
      margin: 0 0 var(--density-margin-sm) 0;
    }

    .feature-card p {
      font-size: var(--density-font-size-sm);
      color: var(--text-secondary);
      line-height: var(--density-line-height-md);
      margin: 0;
    }

    @media (max-width: 768px) {
      .tests-grid {
        grid-template-columns: 1fr;
      }

      .stats-section {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class TestListComponent {
  readonly store = inject(CertTestStore);

  availableTests = this.store.availableTests;

  totalAttempts = computed(() => {
    const history = this.store.testHistory();
    const userId = this.store.currentUserId();
    const userHistory = history.find(h => h.userId === userId);
    return userHistory?.attempts.length || 0;
  });

  passRate = computed(() => {
    const history = this.store.testHistory();
    const userId = this.store.currentUserId();
    const userHistory = history.find(h => h.userId === userId);

    if (!userHistory || userHistory.attempts.length === 0) return 0;

    const completedAttempts = userHistory.attempts.filter(a => a.status === 'Completed');
    if (completedAttempts.length === 0) return 0;

    const passedAttempts = completedAttempts.filter(a => a.passed);
    return Math.round((passedAttempts.length / completedAttempts.length) * 100);
  });
}

