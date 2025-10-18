import { Component, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-http-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-container">
      <h1>HTTP Client Demo</h1>
      <p>Demonstrating Angular HTTP client with signals</p>

      <div class="demo-section">
        <h2>Fetch Users</h2>
        <button (click)="fetchUsers()" [disabled]="loading()">Fetch Users</button>
        <button (click)="clearUsers()">Clear</button>

        @if (loading()) {
          <div class="loading">Loading users...</div>
        }

        @if (error()) {
          <div class="error">Error: {{ error() }}</div>
        }

        @if (users().length > 0) {
          <div class="users-list">
            <h3>Users ({{ users().length }} found)</h3>
            @for (user of users(); track user.id) {
              <div class="user-card">
                <h4>{{ user.name }}</h4>
                <p>Email: {{ user.email }}</p>
                <p>Phone: {{ user.phone }}</p>
                <p>Website: {{ user.website }}</p>
              </div>
            }
          </div>
        }
      </div>

      <div class="demo-section">
        <h2>Create User</h2>
        <form (ngSubmit)="createUser()">
          <div class="form-group">
            <input
              [(ngModel)]="newUser.name"
              name="name"
              placeholder="Name"
              required
            >
          </div>
          <div class="form-group">
            <input
              [(ngModel)]="newUser.email"
              name="email"
              type="email"
              placeholder="Email"
              required
            >
          </div>
          <div class="form-group">
            <input
              [(ngModel)]="newUser.phone"
              name="phone"
              placeholder="Phone"
              required
            >
          </div>
          <div class="form-group">
            <input
              [(ngModel)]="newUser.website"
              name="website"
              placeholder="Website"
              required
            >
          </div>
          <button type="submit" [disabled]="creating()">
            {{ creating() ? 'Creating...' : 'Create User' }}
          </button>
        </form>

        @if (createdUser()) {
          <div class="success">
            <h3>User Created Successfully!</h3>
            <pre>{{ createdUser() | json }}</pre>
          </div>
        }
      </div>

      <div class="demo-section">
        <h2>HTTP Status</h2>
        <p>Loading: {{ loading() }}</p>
        <p>Creating: {{ creating() }}</p>
        <p>Error: {{ error() || 'None' }}</p>
        <p>Users Count: {{ users().length }}</p>
      </div>
    </div>
  `,
  styles: [`
    /* Theme-aware styles using CSS custom properties */
    /* Best Practice: Use CSS variables for all colors */

    .page-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background-color: var(--bg-primary);
      color: var(--text-primary);
      border-radius: 8px;
      box-shadow: var(--shadow);
    }

    h1, h2, h3 {
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    p {
      color: var(--text-primary);
    }

    .demo-section {
      margin: 2rem 0;
      padding: 1rem;
      background-color: var(--bg-secondary);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
      border-radius: 4px;
    }

    button {
      margin: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }

    button:hover:not(:disabled) {
      background: #1565c0;
    }

    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .form-group {
      margin: 0.5rem 0;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      font-size: 1rem;
      background-color: var(--bg-primary);
      color: var(--text-primary);

      &::placeholder {
        color: var(--text-disabled);
      }

      &:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
      }
    }

    .users-list {
      margin-top: 1rem;
    }

    .user-card {
      margin: 1rem 0;
      padding: 1rem;
      background-color: var(--bg-tertiary);
      color: var(--text-primary);
      border-radius: 4px;
      border-left: 4px solid var(--primary-color);
    }

    .user-card h4 {
      margin: 0 0 0.5rem 0;
      color: var(--primary-color);
    }

    .user-card p {
      margin: 0.25rem 0;
      color: var(--text-secondary);
    }

    .loading {
      color: #1976d2;
      font-style: italic;
    }

    .error {
      color: #dc3545;
      background: #f8d7da;
      padding: 1rem;
      border-radius: 4px;
      border: 1px solid #f5c6cb;
    }

    .success {
      color: #155724;
      background: #d4edda;
      padding: 1rem;
      border-radius: 4px;
      border: 1px solid #c3e6cb;
    }

    pre {
      background-color: var(--bg-tertiary);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
      margin-top: 1rem;
      font-family: 'Courier New', monospace;
    }
  `]
})
export class HttpClientComponent {
  users = signal<User[]>([]);
  loading = signal(false);
  creating = signal(false);
  error = signal<string | null>(null);
  createdUser = signal<any>(null);

  newUser = {
    name: '',
    email: '',
    phone: '',
    website: ''
  };

  constructor(private http: HttpClient) {}

  fetchUsers() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (users) => {
          this.users.set(users);
          this.loading.set(false);
        },
        error: (error: HttpErrorResponse) => {
          this.error.set(error.message);
          this.loading.set(false);
        }
      });
  }

  createUser() {
    this.creating.set(true);
    this.error.set(null);

    const userData = {
      ...this.newUser,
      id: Math.floor(Math.random() * 1000) + 100
    };

    this.http.post('https://jsonplaceholder.typicode.com/users', userData)
      .subscribe({
        next: (response) => {
          this.createdUser.set(response);
          this.creating.set(false);
          this.newUser = { name: '', email: '', phone: '', website: '' };
        },
        error: (error: HttpErrorResponse) => {
          this.error.set(error.message);
          this.creating.set(false);
        }
      });
  }

  clearUsers() {
    this.users.set([]);
    this.error.set(null);
    this.createdUser.set(null);
  }
}
