import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h1>&#64;defer Directive Demo</h1>
      <p>Demonstrating Angular's &#64;defer with &#64;loading, &#64;error, and &#64;placeholder blocks</p>

      <div class="demo-section">
        <h2>Basic &#64;defer with &#64;placeholder</h2>
        <p>Content loads after 2 seconds with a placeholder shown initially:</p>

        @defer (on timer(2s)) {
          <div class="success-content">
            <h3>Deferred Content Loaded!</h3>
            <p>This content was loaded after 2 seconds using &#64;defer.</p>
            <p>Timestamp: {{ currentTime() }}</p>
          </div>
        } @placeholder {
          <div class="placeholder-content">
            <h3>Placeholder Content</h3>
            <p>This is shown while the deferred content is loading...</p>
            <div class="spinner"></div>
          </div>
        }
      </div>

      <div class="demo-section">
        <h2>&#64;defer with &#64;loading and &#64;error</h2>
        <p>Simulating a component that might fail to load:</p>

        <button (click)="toggleDefer()">
          {{ shouldLoad() ? 'Reset Defer' : 'Load Deferred Content' }}
        </button>

        @defer (when shouldLoad()) {
          <div class="success-content">
            <h3>Successfully Loaded!</h3>
            <p>This content loaded successfully.</p>
            <p>Load time: {{ loadTime() }}ms</p>
          </div>
        } @loading (after 100ms) {
          <div class="loading-content">
            <h3>Loading...</h3>
            <p>Please wait while content loads...</p>
            <div class="spinner"></div>
          </div>
        } @error {
          <div class="error-content">
            <h3>Error Loading Content</h3>
            <p>Something went wrong while loading the deferred content.</p>
            <button (click)="retryLoad()">Retry</button>
          </div>
        } @placeholder {
          <div class="placeholder-content">
            <h3>Placeholder</h3>
            <p>Click the button above to load deferred content.</p>
          </div>
        }
      </div>

      <div class="demo-section">
        <h2>&#64;defer with Viewport Trigger</h2>
        <p>Content loads when it comes into viewport:</p>

        <div class="viewport-container">
          <div class="scroll-area">
            <div class="scroll-content">
              <p>Scroll down to trigger viewport loading</p>
            </div>
            @defer (on viewport) {
              <div class="success-content">
                <h3>Viewport Triggered!</h3>
                <p>This content loaded when it came into the viewport.</p>
                <p>Triggered at: {{ viewportTime() }}</p>
              </div>
            } @placeholder {
              <div class="placeholder-content">
                <h3>Scroll down to see me!</h3>
                <p>This content will load when it becomes visible.</p>
              </div>
            }
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>&#64;defer with Interaction Trigger</h2>
        <p>Content loads when user interacts with the trigger element:</p>

        @defer (on interaction(trigger)) {
          <div class="success-content">
            <h3>Interaction Triggered!</h3>
            <p>This content loaded when you interacted with the button.</p>
            <p>Interaction time: {{ interactionTime() }}</p>
          </div>
        } @placeholder {
          <button #trigger class="interaction-trigger">
            Click me to load content!
          </button>
        }
      </div>

      <div class="demo-section">
        <h2>&#64;defer with Hover Trigger</h2>
        <p>Content loads when user hovers over the trigger:</p>

        @defer (on hover(trigger)) {
          <div class="success-content">
            <h3>Hover Triggered!</h3>
            <p>This content loaded when you hovered over the area.</p>
            <p>Hover time: {{ hoverTime() }}</p>
          </div>
        } @placeholder {
          <div #trigger class="hover-trigger">
            <h3>Hover over me to load content!</h3>
            <p>Move your mouse over this area...</p>
          </div>
        }
      </div>

      <div class="demo-section">
        <h2>Multiple Triggers</h2>
        <p>Content loads on any of multiple conditions:</p>

        @defer (on timer(5s); on viewport; on interaction(trigger)) {
          <div class="success-content">
            <h3>Multiple Triggers!</h3>
            <p>This content loaded due to one of the triggers:</p>
            <ul>
              <li>• Timer (5s)</li>
              <li>• Viewport visibility</li>
              <li>• Button interaction</li>
            </ul>
            <p>Triggered at: {{ multiTriggerTime() }}</p>
          </div>
        } @placeholder {
          <div class="multi-trigger-demo">
            <h3>Multiple Trigger Demo</h3>
            <p>This will load in 5 seconds, when scrolled into view, or when you click the button:</p>
            <button #trigger class="interaction-trigger">Click me!</button>
          </div>
        }
      </div>

      <div class="demo-section">
        <h2>&#64;defer Configuration Examples</h2>
        <div class="code-example">
          <pre>{{ deferExamples }}</pre>
        </div>
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

    .success-content {
      padding: 1rem;
      background: #d4edda;
      border: 1px solid #c3e6cb;
      border-radius: 4px;
      color: #155724;
    }

    .loading-content {
      padding: 1rem;
      background: rgba(255, 193, 7, 0.2);
      border: 1px solid #ffeaa7;
      border-radius: 4px;
      color: #856404;
    }

    .error-content {
      padding: 1rem;
      background: #f8d7da;
      border: 1px solid #f5c6cb;
      border-radius: 4px;
      color: #721c24;
    }

    .placeholder-content {
      padding: 1rem;
      background: var(--bg-tertiary, #f8f9fa);
      border: 1px solid #dee2e6;
      border-radius: 4px;
      color: #495057;
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid #f3f3f3;
      border-top: 2px solid #1976d2;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 10px auto;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
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

    button:hover {
      background: #1565c0;
    }

    .viewport-container {
      height: 200px;
      overflow-y: auto;
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
      padding: 1rem;
    }

    .scroll-area {
      height: 300px;
    }

    .scroll-content {
      height: 100px;
      background: linear-gradient(135deg, #f8f9fa, #e9ecef);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      color: var(--text-secondary, #666);
    }

    .interaction-trigger {
      padding: 0.5rem 1rem;
      background: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .interaction-trigger:hover {
      background: #1565c0;
    }

    .hover-trigger {
      padding: 2rem;
      background: var(--bg-tertiary, #f8f9fa);
      border: 2px dashed #1976d2;
      border-radius: 8px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .hover-trigger:hover {
      background: #e3f2fd;
      border-color: #1565c0;
    }

    .multi-trigger-demo {
      padding: 2rem;
      background: var(--bg-tertiary, #f8f9fa);
      border-radius: 8px;
      text-align: center;
    }

    .code-example {
      background: var(--bg-tertiary, #f8f9fa);
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
    }

    .code-example pre {
      margin: 0;
      font-family: monospace;
      font-size: 0.875rem;
      color: var(--text-primary, #333);
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      padding: 0.25rem 0;
    }
  `]
})
export class DeferComponent {
  shouldLoad = signal(false);
  currentTime = signal(new Date().toLocaleTimeString());
  loadTime = signal(0);
  viewportTime = signal('');
  interactionTime = signal('');
  hoverTime = signal('');
  multiTriggerTime = signal('');

  deferExamples = `// Basic @defer with @placeholder
@defer (on timer(2s)) {
  <div>Deferred content</div>
} @placeholder {
  <div>Loading placeholder</div>
}

// @defer with @loading and @error
@defer (when condition) {
  <div>Success content</div>
} @loading (after 100ms) {
  <div>Loading state</div>
} @error {
  <div>Error state</div>
} @placeholder {
  <div>Initial placeholder</div>
}

// Multiple triggers
@defer (on timer(5s); on viewport; on interaction(trigger)) {
  <div>Content</div>
} @placeholder {
  <button #trigger>Click me</button>
}

// Viewport trigger
@defer (on viewport) {
  <div>Viewport content</div>
} @placeholder {
  <div>Scroll to see me</div>
}

// Interaction trigger
@defer (on interaction(trigger)) {
  <div>Interaction content</div>
} @placeholder {
  <button #trigger>Hover or click</button>
}

// Hover trigger
@defer (on hover(trigger)) {
  <div>Hover content</div>
} @placeholder {
  <div #trigger>Hover over me</div>
}`;

  constructor() {
    // Update time every second
    setInterval(() => {
      this.currentTime.set(new Date().toLocaleTimeString());
    }, 1000);
  }

  toggleDefer() {
    if (this.shouldLoad()) {
      this.shouldLoad.set(false);
    } else {
      const startTime = Date.now();
      this.shouldLoad.set(true);

      // Simulate loading time
      setTimeout(() => {
        this.loadTime.set(Date.now() - startTime);
      }, Math.random() * 1000 + 500);
    }
  }

  retryLoad() {
    this.shouldLoad.set(false);
    setTimeout(() => {
      this.toggleDefer();
    }, 100);
  }

  ngOnInit() {
    // Set up viewport trigger time
    setTimeout(() => {
      this.viewportTime.set(new Date().toLocaleTimeString());
    }, 3000);

    // Set up interaction trigger time
    setTimeout(() => {
      this.interactionTime.set(new Date().toLocaleTimeString());
    }, 2000);

    // Set up hover trigger time
    setTimeout(() => {
      this.hoverTime.set(new Date().toLocaleTimeString());
    }, 4000);

    // Set up multi-trigger time
    setTimeout(() => {
      this.multiTriggerTime.set(new Date().toLocaleTimeString());
    }, 6000);
  }
}
