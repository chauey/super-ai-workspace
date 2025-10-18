import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h1>Lazy Loading Demo</h1>
      <p>Demonstrating Angular lazy loading with dynamic imports</p>

      <div class="demo-section">
        <h2>Loading Strategies</h2>
        <div class="strategy-grid">
          <div class="strategy-card">
            <h3>🚀 Eager Loading</h3>
            <ul>
              <li>Loaded immediately with main bundle</li>
              <li>Faster navigation (no loading delay)</li>
              <li>Larger initial bundle size</li>
              <li>Good for critical/frequently used pages</li>
            </ul>
          </div>
          <div class="strategy-card">
            <h3>⚡ Lazy Loading</h3>
            <ul>
              <li>Loaded on demand with separate chunks</li>
              <li>Smaller initial bundle size</li>
              <li>Slight delay on first navigation</li>
              <li>Good for less frequently used pages</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>This App's Route Configuration</h2>
        <div class="route-grid">
          <div class="route-card">
            <h3>🚀 Eager Routes</h3>
            <ul>
              <li>Empty Page</li>
              <li>Control Flow</li>
            </ul>
          </div>
          <div class="route-card">
            <h3>⚡ Lazy Routes</h3>
            <ul>
              <li>Signals & Resources</li>
              <li>Reactive Forms</li>
              <li>HTTP Client</li>
              <li>All other pages...</li>
            </ul>
          </div>
        </div>

        <div class="code-example">
          <pre>{{ routeExample }}</pre>
        </div>
      </div>

      <div class="demo-section">
        <h2>Lazy Loading Benefits</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <h3>Performance</h3>
            <ul>
              <li>Smaller initial bundle</li>
              <li>Faster initial load</li>
              <li>On-demand loading</li>
            </ul>
          </div>
          <div class="benefit-card">
            <h3>User Experience</h3>
            <ul>
              <li>Faster page loads</li>
              <li>Better perceived performance</li>
              <li>Reduced memory usage</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Loading States</h2>
        <button (click)="simulateLoading()" [disabled]="isLoading()">
          {{ isLoading() ? 'Loading...' : 'Simulate Loading' }}
        </button>

        @if (isLoading()) {
          <div class="loading-state">
            Loading lazy component...
          </div>
        }

        @if (loadedComponent()) {
          <div class="success-state">
            Lazy component loaded successfully!
          </div>
        }
      </div>

      <div class="demo-section">
        <h2>Network Tab Demo</h2>
        <p>Open browser DevTools → Network tab and navigate to other routes to see:</p>
        <ul>
          <li>Separate chunk files being loaded</li>
          <li>Dynamic imports in action</li>
          <li>Code splitting benefits</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background: var(--bg-primary, white);
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h1 {
      color: var(--text-primary, #333);
      margin-bottom: 1rem;
    }

    .demo-section {
      margin: 2rem 0;
      padding: 1rem;
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
    }

    .strategy-grid, .route-grid, .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
      margin: 1rem 0;
    }

    .strategy-card, .route-card, .benefit-card {
      padding: 1rem;
      background: var(--bg-tertiary, #f8f9fa);
      border-radius: 4px;
    }

    .strategy-card h3, .route-card h3, .benefit-card h3 {
      margin: 0 0 0.5rem 0;
      color: #1976d2;
    }

    .strategy-card ul, .route-card ul, .benefit-card ul {
      margin: 0;
      padding-left: 1rem;
    }

    .strategy-card li, .route-card li, .benefit-card li {
      margin: 0.25rem 0;
      font-size: 0.875rem;
      color: var(--text-secondary, #666);
    }

    .code-example {
      margin: 1rem 0;
      padding: 1rem;
      background: var(--bg-tertiary, #f8f9fa);
      border-radius: 4px;
      overflow-x: auto;
    }

    .code-example pre {
      margin: 0;
      font-family: monospace;
      font-size: 0.875rem;
      color: var(--text-primary, #333);
    }

    button {
      padding: 0.5rem 1rem;
      background: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin: 1rem 0;
    }

    button:hover:not(:disabled) {
      background: #1565c0;
    }

    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .loading-state {
      padding: 1rem;
      background: rgba(255, 193, 7, 0.2);
      border: 1px solid #ffeaa7;
      border-radius: 4px;
      color: #856404;
      margin: 1rem 0;
    }

    .success-state {
      padding: 1rem;
      background: #d4edda;
      border: 1px solid #c3e6cb;
      border-radius: 4px;
      color: #155724;
      margin: 1rem 0;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      padding: 0.5rem;
      background: var(--bg-tertiary, #f8f9fa);
      border-radius: 4px;
      margin: 0.25rem 0;
    }
  `]
})
export class LazyLoadingComponent {
  isLoading = signal(false);
  loadedComponent = signal(false);

  routeExample = `// EAGER LOADING (non-lazy) - loaded immediately
import { EmptyComponent } from './pages/empty.component';

{ path: 'empty', component: EmptyComponent }

// LAZY LOADING - loaded on demand with separate chunks
{ path: 'signals',
  loadComponent: () => import('./pages/signals.component')
    .then(m => m.SignalsComponent) }

// Traditional module lazy loading (older approach)
{ path: 'feature',
  loadChildren: () => import('./feature/feature.module')
    .then(m => m.FeatureModule) }`;

  simulateLoading() {
    this.isLoading.set(true);
    this.loadedComponent.set(false);

    // Simulate async loading
    setTimeout(() => {
      this.isLoading.set(false);
      this.loadedComponent.set(true);
    }, 2000);
  }
}
