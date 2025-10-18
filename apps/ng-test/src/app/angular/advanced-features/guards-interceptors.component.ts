import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Mock services for demonstration
class AuthService {
  private isAuthenticated = false;
  private userRole = 'guest';

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.userRole = 'admin';
      return true;
    } else if (username === 'user' && password === 'user') {
      this.isAuthenticated = true;
      this.userRole = 'user';
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userRole = 'guest';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): string {
    return this.userRole;
  }

  hasRole(role: string): boolean {
    return this.userRole === role;
  }
}

class LoggingService {
  log(message: string, type: 'info' | 'warning' | 'error' = 'info'): void {
    console.log(`[${type.toUpperCase()}] ${new Date().toISOString()}: ${message}`);
  }
}

@Component({
  selector: 'app-guards-interceptors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-container">
      <h1>Guards & Interceptors Demo</h1>
      <p>Demonstrating route guards and HTTP interceptors concepts</p>

      <div class="demo-section">
        <h2>Authentication Guard Simulation</h2>
        <div class="auth-form">
          <input [(ngModel)]="username" placeholder="Username" name="username">
          <input [(ngModel)]="password" type="password" placeholder="Password" name="password">
          <button (click)="login()">Login</button>
          <button (click)="logout()">Logout</button>
        </div>

        <div class="auth-status">
          <p>Status: {{ authStatus() }}</p>
          <p>Role: {{ userRole() }}</p>
          <p>Can Access Admin: {{ canAccessAdmin() }}</p>
          <p>Can Access User: {{ canAccessUser() }}</p>
        </div>
      </div>

      <div class="demo-section">
        <h2>Route Protection Simulation</h2>
        <div class="route-buttons">
          <button (click)="navigateToRoute('public')" [class]="getRouteClass('public')">
            Public Route
          </button>
          <button (click)="navigateToRoute('user')" [class]="getRouteClass('user')">
            User Route
          </button>
          <button (click)="navigateToRoute('admin')" [class]="getRouteClass('admin')">
            Admin Route
          </button>
        </div>

        <div class="route-status">
          <p>Current Route: {{ currentRoute() }}</p>
          <p>Route Access: {{ routeAccess() }}</p>
        </div>
      </div>

      <div class="demo-section">
        <h2>HTTP Interceptor Simulation</h2>
        <div class="interceptor-controls">
          <button (click)="makeRequest('public')">Public Request</button>
          <button (click)="makeRequest('protected')">Protected Request</button>
          <button (click)="makeRequest('admin')">Admin Request</button>
          <button (click)="clearRequests()">Clear Requests</button>
        </div>

        <div class="request-log">
          <h3>Request Log</h3>
          <div class="log-container">
            @for (request of requests(); track $index) {
              <div class="log-entry" [class]="request.status">
                <strong>{{ request.method }}</strong> {{ request.url }}
                <span class="timestamp">{{ request.timestamp }}</span>
                <span class="status">{{ request.status }}</span>
              </div>
            }
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Guard Types Demonstration</h2>
        <div class="guard-types">
          <div class="guard-item">
            <h4>CanActivate Guard</h4>
            <p>Checks if user can access a route</p>
            <button (click)="testCanActivate()">Test CanActivate</button>
            <p>Result: {{ canActivateResult() }}</p>
          </div>

          <div class="guard-item">
            <h4>CanDeactivate Guard</h4>
            <p>Checks if user can leave a route</p>
            <button (click)="testCanDeactivate()">Test CanDeactivate</button>
            <p>Result: {{ canDeactivateResult() }}</p>
          </div>

          <div class="guard-item">
            <h4>Resolve Guard</h4>
            <p>Loads data before route activation</p>
            <button (click)="testResolve()">Test Resolve</button>
            <p>Result: {{ resolveResult() }}</p>
          </div>
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

    .auth-form {
      display: flex;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
    }

    button {
      padding: 0.5rem 1rem;
      background: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background: #1565c0;
    }

    .route-buttons {
      display: flex;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    .route-button {
      padding: 0.5rem 1rem;
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
      cursor: pointer;
      background: var(--bg-primary, white);
    }

    .route-button.accessible {
      background: #d4edda;
      color: #155724;
    }

    .route-button.inaccessible {
      background: #f8d7da;
      color: #721c24;
    }

    .interceptor-controls {
      display: flex;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    .log-container {
      max-height: 200px;
      overflow-y: auto;
      background: var(--bg-tertiary, #f8f9fa);
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
      padding: 1rem;
    }

    .log-entry {
      margin: 0.25rem 0;
      padding: 0.5rem;
      border-radius: 4px;
      font-family: monospace;
      font-size: 0.875rem;
    }

    .log-entry.success {
      background: #d4edda;
      color: #155724;
    }

    .log-entry.error {
      background: #f8d7da;
      color: #721c24;
    }

    .log-entry.warning {
      background: rgba(255, 193, 7, 0.2);
      color: #856404;
    }

    .timestamp {
      color: var(--text-secondary, #666);
      font-size: 0.75rem;
    }

    .status {
      float: right;
      font-weight: bold;
    }

    .guard-types {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    .guard-item {
      padding: 1rem;
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
      background: var(--bg-tertiary, #f8f9fa);
    }

    .guard-item h4 {
      margin: 0 0 0.5rem 0;
      color: #1976d2;
    }
  `]
})
export class GuardsInterceptorsComponent {
  username = '';
  password = '';
  currentRoute = signal('public');
  requests = signal<any[]>([]);
  canActivateResult = signal<string>('');
  canDeactivateResult = signal<string>('');
  resolveResult = signal<string>('');

  private authService = new AuthService();
  private loggingService = new LoggingService();

  authStatus = signal('Not authenticated');
  userRole = signal('guest');

  canAccessAdmin = () => this.authService.hasRole('admin');
  canAccessUser = () => this.authService.hasRole('user') || this.authService.hasRole('admin');

  login() {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.authStatus.set('Authenticated');
      this.userRole.set(this.authService.getUserRole());
      this.loggingService.log(`User ${this.username} logged in`, 'info');
    } else {
      this.loggingService.log(`Failed login attempt for ${this.username}`, 'error');
    }
  }

  logout() {
    this.authService.logout();
    this.authStatus.set('Not authenticated');
    this.userRole.set('guest');
    this.currentRoute.set('public');
    this.loggingService.log('User logged out', 'info');
  }

  navigateToRoute(route: string) {
    if (this.canNavigateToRoute(route)) {
      this.currentRoute.set(route);
      this.loggingService.log(`Navigated to ${route} route`, 'info');
    } else {
      this.loggingService.log(`Access denied to ${route} route`, 'error');
    }
  }

  canNavigateToRoute(route: string): boolean {
    switch (route) {
      case 'public':
        return true;
      case 'user':
        return this.authService.isLoggedIn();
      case 'admin':
        return this.authService.hasRole('admin');
      default:
        return false;
    }
  }

  getRouteClass(route: string): string {
    const baseClass = 'route-button';
    return this.canNavigateToRoute(route) ? `${baseClass} accessible` : `${baseClass} inaccessible`;
  }

  routeAccess = () => {
    const route = this.currentRoute();
    if (route === 'public') return 'Always accessible';
    if (route === 'user') return this.authService.isLoggedIn() ? 'Accessible' : 'Requires authentication';
    if (route === 'admin') return this.authService.hasRole('admin') ? 'Accessible' : 'Requires admin role';
    return 'Unknown route';
  };

  makeRequest(type: string) {
    const timestamp = new Date().toLocaleTimeString();
    let status = 'success';
    let method = 'GET';
    let url = '';

    switch (type) {
      case 'public':
        url = '/api/public';
        break;
      case 'protected':
        url = '/api/protected';
        if (!this.authService.isLoggedIn()) {
          status = 'error';
        }
        break;
      case 'admin':
        url = '/api/admin';
        if (!this.authService.hasRole('admin')) {
          status = 'error';
        }
        break;
    }

    const request = {
      method,
      url,
      timestamp,
      status
    };

    this.requests.update(requests => [...requests, request]);
    this.loggingService.log(`HTTP ${method} ${url} - ${status}`, status === 'success' ? 'info' : 'error');
  }

  clearRequests() {
    this.requests.set([]);
  }

  testCanActivate() {
    const canActivate = this.authService.isLoggedIn();
    this.canActivateResult.set(canActivate ? 'Can activate route' : 'Cannot activate route - not authenticated');
  }

  testCanDeactivate() {
    const canDeactivate = this.currentRoute() !== 'admin' || this.authService.hasRole('admin');
    this.canDeactivateResult.set(canDeactivate ? 'Can deactivate route' : 'Cannot deactivate route - unsaved changes');
  }

  testResolve() {
    const data = this.authService.isLoggedIn() ? 'User data loaded' : 'No data available';
    this.resolveResult.set(data);
  }
}
