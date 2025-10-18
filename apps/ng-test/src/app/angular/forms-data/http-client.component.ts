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
    .page-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h1 {
      color: #333;
      margin-bottom: 1rem;
    }

    .demo-section {
      margin: 2rem 0;
      padding: 1rem;
      border: 1px solid #ddd;
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
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }

    .users-list {
      margin-top: 1rem;
    }

    .user-card {
      margin: 1rem 0;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 4px;
      border-left: 4px solid #1976d2;
    }

    .user-card h4 {
      margin: 0 0 0.5rem 0;
      color: #1976d2;
    }

    .user-card p {
      margin: 0.25rem 0;
      color: #666;
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
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
      margin-top: 1rem;
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
