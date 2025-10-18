import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Service interfaces
interface User {
  id: number;
  name: string;
  email: string;
}

interface NotificationService {
  show(message: string, type: 'success' | 'error' | 'info'): void;
}

interface DataService {
  getUsers(): User[];
  addUser(user: Omit<User, 'id'>): User;
  deleteUser(id: number): boolean;
}

// Service implementations
class NotificationServiceImpl implements NotificationService {
  show(message: string, type: 'success' | 'error' | 'info'): void {
    console.log(`[${type.toUpperCase()}] ${message}`);
  }
}

class DataServiceImpl implements DataService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];

  getUsers(): User[] {
    return [...this.users];
  }

  addUser(user: Omit<User, 'id'>): User {
    const newUser: User = {
      id: Math.max(...this.users.map(u => u.id)) + 1,
      ...user
    };
    this.users.push(newUser);
    return newUser;
  }

  deleteUser(id: number): boolean {
    const index = this.users.findIndex(u => u.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-container">
      <h1>Services Demo</h1>
      <p>Demonstrating Angular services and dependency injection</p>

      <div class="demo-section">
        <h2>User Management</h2>
        <div class="form-group">
          <input [(ngModel)]="newUser.name" placeholder="Name" name="name">
          <input [(ngModel)]="newUser.email" placeholder="Email" name="email" type="email">
          <button (click)="addUser()">Add User</button>
        </div>

        <div class="users-list">
          <h3>Users ({{ users().length }})</h3>
          @for (user of users(); track user.id) {
            <div class="user-item">
              <span>{{ user.name }} ({{ user.email }})</span>
              <button (click)="deleteUser(user.id)" class="delete-btn">Delete</button>
            </div>
          }
        </div>
      </div>

      <div class="demo-section">
        <h2>Service Status</h2>
        <button (click)="testNotificationService()">Test Notification</button>
        <button (click)="testDataService()">Test Data Service</button>
        <button (click)="clearLogs()">Clear Logs</button>

        <div class="logs">
          <h3>Service Logs</h3>
          <div class="log-container">
            @for (log of logs(); track $index) {
              <div class="log-entry" [class]="log.type">{{ log.message }}</div>
            }
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Service Statistics</h2>
        <p>Total Users: {{ users().length }}</p>
        <p>Service Calls: {{ serviceCalls() }}</p>
        <p>Last Action: {{ lastAction() }}</p>
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

    .form-group {
      display: flex;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #ddd;
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

    .delete-btn {
      background: #dc3545;
      font-size: 0.875rem;
      padding: 0.25rem 0.5rem;
    }

    .delete-btn:hover {
      background: #c82333;
    }

    .users-list {
      margin-top: 1rem;
    }

    .user-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      margin: 0.25rem 0;
      background: #f8f9fa;
      border-radius: 4px;
    }

    .logs {
      margin-top: 1rem;
    }

    .log-container {
      max-height: 200px;
      overflow-y: auto;
      background: #f8f9fa;
      border: 1px solid #ddd;
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

    .log-entry.info {
      background: #d1ecf1;
      color: #0c5460;
    }
  `]
})
export class ServicesComponent {
  users = signal<User[]>([]);
  logs = signal<{message: string, type: string}[]>([]);
  serviceCalls = signal(0);
  lastAction = signal('None');

  newUser = {
    name: '',
    email: ''
  };

  private notificationService: NotificationService = new NotificationServiceImpl();
  private dataService: DataService = new DataServiceImpl();

  constructor() {
    this.loadUsers();
  }

  loadUsers() {
    this.users.set(this.dataService.getUsers());
    this.addLog('Users loaded from service', 'info');
  }

  addUser() {
    if (this.newUser.name && this.newUser.email) {
      const user = this.dataService.addUser(this.newUser);
      this.users.set(this.dataService.getUsers());
      this.newUser = { name: '', email: '' };
      this.addLog(`User added: ${user.name}`, 'success');
      this.lastAction.set('User added');
      this.serviceCalls.update(calls => calls + 1);
    }
  }

  deleteUser(id: number) {
    const success = this.dataService.deleteUser(id);
    if (success) {
      this.users.set(this.dataService.getUsers());
      this.addLog(`User deleted: ID ${id}`, 'success');
      this.lastAction.set('User deleted');
    } else {
      this.addLog(`Failed to delete user: ID ${id}`, 'error');
      this.lastAction.set('Delete failed');
    }
    this.serviceCalls.update(calls => calls + 1);
  }

  testNotificationService() {
    this.notificationService.show('Test notification', 'info');
    this.addLog('Notification service tested', 'info');
    this.lastAction.set('Notification tested');
    this.serviceCalls.update(calls => calls + 1);
  }

  testDataService() {
    const userCount = this.dataService.getUsers().length;
    this.addLog(`Data service tested - ${userCount} users found`, 'info');
    this.lastAction.set('Data service tested');
    this.serviceCalls.update(calls => calls + 1);
  }

  clearLogs() {
    this.logs.set([]);
    this.lastAction.set('Logs cleared');
  }

  private addLog(message: string, type: string) {
    this.logs.update(logs => [...logs, { message, type }]);
  }
}
