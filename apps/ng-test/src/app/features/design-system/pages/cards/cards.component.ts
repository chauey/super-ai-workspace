import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { LearningPathCardComponent, LearningPathCard } from '../../../../shared/components/learning-path-card/learning-path-card.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    LearningPathCardComponent
  ],
  template: `
    <div class="cards-page">
      <header class="page-header">
        <h1>Cards</h1>
        <p>Reusable card components for consistent UI patterns</p>
      </header>

      <mat-tab-group class="demo-tabs">
        <!-- Learning Path Cards -->
        <mat-tab label="Learning Path Cards">
          <div class="tab-content">
            <section class="demo-section">
              <h2>Learning Path Cards</h2>
              <p>
                Feature cards used on the dashboard and landing pages to showcase learning paths,
                features, and content sections. Supports badges, tags, custom icons, and multiple states.
              </p>

              <h3>Active Card</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <app-learning-path-card [card]="activeCard" />
              </div>

              <h3>Card with Badge</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <app-learning-path-card [card]="newCard" />
              </div>

              <h3>Coming Soon Card</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <app-learning-path-card [card]="comingSoonCard" />
              </div>

              <h3>Custom Icon Color</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <app-learning-path-card [card]="customColorCard" />
              </div>

              <h3>All Cards Grid</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                @for (card of allCards; track card.title) {
                  <app-learning-path-card [card]="card" />
                }
              </div>
            </section>

            <section class="demo-section">
              <h2>Usage</h2>
              <mat-card class="code-card">
                <mat-card-header>
                  <mat-card-title>TypeScript</mat-card-title>
                </mat-card-header>
                <mat-card-content>
                  <pre><code>{{ typescriptCode }}</code></pre>
                </mat-card-content>
              </mat-card>

              <mat-card class="code-card">
                <mat-card-header>
                  <mat-card-title>Template</mat-card-title>
                </mat-card-header>
                <mat-card-content>
                  <pre><code>{{ templateCode }}</code></pre>
                </mat-card-content>
              </mat-card>
            </section>

            <section class="demo-section">
              <h2>Card Interface</h2>
              <mat-card class="code-card">
                <mat-card-content>
                  <pre><code>{{ interfaceCode }}</code></pre>
                </mat-card-content>
              </mat-card>
            </section>

            <section class="demo-section">
              <h2>Properties</h2>
              <div class="properties-table">
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Type</th>
                      <th>Required</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>title</code></td>
                      <td><code>string</code></td>
                      <td>Yes</td>
                      <td>Main card title</td>
                    </tr>
                    <tr>
                      <td><code>subtitle</code></td>
                      <td><code>string</code></td>
                      <td>Yes</td>
                      <td>Secondary heading (uppercase)</td>
                    </tr>
                    <tr>
                      <td><code>description</code></td>
                      <td><code>string</code></td>
                      <td>Yes</td>
                      <td>Card description text</td>
                    </tr>
                    <tr>
                      <td><code>icon</code></td>
                      <td><code>string</code></td>
                      <td>Yes</td>
                      <td>Material icon name</td>
                    </tr>
                    <tr>
                      <td><code>iconColor</code></td>
                      <td><code>string</code></td>
                      <td>No</td>
                      <td>CSS color for icon (default: primary)</td>
                    </tr>
                    <tr>
                      <td><code>route</code></td>
                      <td><code>string</code></td>
                      <td>No</td>
                      <td>Router link destination</td>
                    </tr>
                    <tr>
                      <td><code>tags</code></td>
                      <td><code>string[]</code></td>
                      <td>No</td>
                      <td>Array of tag labels</td>
                    </tr>
                    <tr>
                      <td><code>badge</code></td>
                      <td><code>'new' | 'coming-soon' | null</code></td>
                      <td>No</td>
                      <td>Badge to display in top-right</td>
                    </tr>
                    <tr>
                      <td><code>status</code></td>
                      <td><code>'active' | 'coming-soon' | 'placeholder'</code></td>
                      <td>No</td>
                      <td>Card interaction state</td>
                    </tr>
                    <tr>
                      <td><code>actionText</code></td>
                      <td><code>string</code></td>
                      <td>No</td>
                      <td>Custom footer link text</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </mat-tab>

        <!-- Material Cards -->
        <mat-tab label="Material Cards">
          <div class="tab-content">
            <section class="demo-section">
              <h2>Standard Material Cards</h2>
              <p>Basic Angular Material card examples</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <mat-card>
                  <mat-card-header>
                    <mat-card-title>Simple Card</mat-card-title>
                    <mat-card-subtitle>With header</mat-card-subtitle>
                  </mat-card-header>
                  <mat-card-content>
                    <p>This is a basic Material card with header and content.</p>
                  </mat-card-content>
                </mat-card>

                <mat-card>
                  <mat-card-header>
                    <mat-icon mat-card-avatar>account_circle</mat-icon>
                    <mat-card-title>Card with Avatar</mat-card-title>
                    <mat-card-subtitle>Icon avatar</mat-card-subtitle>
                  </mat-card-header>
                  <mat-card-content>
                    <p>Material card with an icon avatar in the header.</p>
                  </mat-card-content>
                  <mat-card-actions>
                    <button mat-button>ACTION</button>
                  </mat-card-actions>
                </mat-card>
              </div>
            </section>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .cards-page {
      padding: var(--density-padding-lg);
      max-width: 1400px;
      margin: 0 auto;
    }

    .page-header {
      margin-bottom: var(--density-margin-xl);
    }

    .page-header h1 {
      font-size: var(--density-font-size-h1);
      color: var(--text-primary);
      margin: 0 0 var(--density-margin-sm) 0;
    }

    .page-header p {
      font-size: var(--density-font-size-lg);
      color: var(--text-secondary);
      margin: 0;
    }

    .demo-tabs {
      margin-bottom: var(--density-margin-xl);
    }

    .tab-content {
      padding: var(--density-padding-lg) 0;
    }

    .demo-section {
      margin-bottom: var(--density-margin-xl);
    }

    .demo-section h2 {
      font-size: var(--density-font-size-h2);
      color: var(--text-primary);
      margin: 0 0 var(--density-margin-sm) 0;
    }

    .demo-section h3 {
      font-size: var(--density-font-size-h3);
      color: var(--text-primary);
      margin: var(--density-margin-lg) 0 var(--density-margin-md) 0;
    }

    .demo-section p {
      font-size: var(--density-font-size-md);
      color: var(--text-secondary);
      margin: 0 0 var(--density-margin-lg) 0;
      line-height: var(--density-line-height-md);
    }

    .code-card {
      background-color: var(--bg-card);
      margin-bottom: var(--density-margin-md);
    }

    pre {
      background-color: var(--bg-secondary);
      padding: var(--density-padding-md);
      border-radius: var(--border-radius);
      overflow-x: auto;
      margin: 0;
    }

    code {
      font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
      font-size: var(--density-font-size-sm);
      color: var(--text-primary);
    }

    .properties-table {
      overflow-x: auto;
      background-color: var(--bg-card);
      border-radius: var(--border-radius);
      padding: var(--density-padding-md);
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      text-align: left;
      padding: var(--density-padding-sm);
      border-bottom: 1px solid var(--border-color);
    }

    th {
      font-weight: 600;
      color: var(--text-primary);
      background-color: var(--bg-secondary);
    }

    td {
      color: var(--text-secondary);
    }

    td code {
      background-color: var(--bg-secondary);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: var(--density-font-size-xs);
    }
  `]
})
export class CardsComponent {
  activeCard: LearningPathCard = {
    title: 'Design System',
    subtitle: 'UI Kit & Component Library',
    description: 'Comprehensive design system with AG Grid, Material components, colors, typography, and full theming support.',
    icon: 'palette',
    route: '/design-system',
    tags: ['10 Pages', 'AG Grid', 'Dark Mode'],
    status: 'active'
  };

  newCard: LearningPathCard = {
    title: 'Angular',
    subtitle: 'Modern Web Development',
    description: 'Master Angular with signals, reactive forms, services, routing, and advanced patterns with hands-on examples.',
    icon: 'code',
    route: '/angular',
    tags: ['15+ Pages', 'Signals', 'Best Practices'],
    badge: 'new',
    status: 'active'
  };

  comingSoonCard: LearningPathCard = {
    title: '.NET',
    subtitle: 'Backend Development',
    description: 'Learn C#, ASP.NET Core Web API, Entity Framework Core, Blazor, and modern .NET development patterns.',
    icon: 'terminal',
    route: '/dotnet',
    tags: ['C# 12', 'ASP.NET Core', 'Blazor'],
    badge: 'coming-soon',
    status: 'coming-soon',
    actionText: 'Preview →'
  };

  customColorCard: LearningPathCard = {
    title: 'Angular',
    subtitle: 'Custom Red Icon',
    description: 'Example with custom icon color using Angular brand color.',
    icon: 'code',
    iconColor: '#dd0031',
    route: '/angular',
    tags: ['Custom Color'],
    status: 'active'
  };

  allCards: LearningPathCard[] = [
    this.activeCard,
    this.newCard,
    {
      title: 'React',
      subtitle: 'JavaScript Library',
      description: 'Coming soon: React tutorials, hooks, context, and modern patterns.',
      icon: 'code',
      tags: ['Hooks', 'Context', 'Next.js'],
      badge: 'coming-soon',
      status: 'coming-soon'
    },
    {
      title: 'Vue.js',
      subtitle: 'Progressive Framework',
      description: 'Coming soon: Vue.js composition API, Pinia state management, and more.',
      icon: 'code',
      tags: ['Composition API', 'Pinia'],
      badge: 'coming-soon',
      status: 'coming-soon'
    },
    {
      title: 'Certification Test',
      subtitle: 'Practice & Learn',
      description: 'Practice tests for certifications and job interviews with detailed analytics.',
      icon: 'quiz',
      route: '/saas/cert-test',
      tags: ['Free', 'Analytics', 'Progress Tracking'],
      badge: 'new',
      status: 'active'
    },
    this.comingSoonCard
  ];

  typescriptCode = `import { LearningPathCardComponent, LearningPathCard } from './shared/components/learning-path-card/learning-path-card.component';

export class MyComponent {
  card: LearningPathCard = {
    title: 'Design System',
    subtitle: 'UI Kit & Component Library',
    description: 'Comprehensive design system...',
    icon: 'palette',
    route: '/design-system',
    tags: ['10 Pages', 'AG Grid', 'Dark Mode'],
    status: 'active'
  };
}`;

  templateCode = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <app-learning-path-card [card]="card" />
</div>`;

  interfaceCode = `export interface LearningPathCard {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  iconColor?: string;
  route?: string;
  tags?: string[];
  badge?: 'new' | 'coming-soon' | null;
  status?: 'active' | 'coming-soon' | 'placeholder';
  actionText?: string;
}`;
}
