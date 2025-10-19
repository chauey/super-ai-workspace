import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testdome2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-container">
      <h1>TestDome Page 2</h1>
      <p>Advanced Angular concepts and testing scenarios.</p>

      <div class="demo-section">
        <h2>Component Communication Challenge</h2>
        <div class="communication-demo">
          <h3>Parent Component</h3>
          <input [(ngModel)]="parentMessage" placeholder="Enter message for child">
          <button (click)="sendToChild()">Send to Child</button>
          <p>Child Response: {{ childResponse() }}</p>

          <div class="child-component">
            <h4>Child Component</h4>
            <p>Message from parent: {{ childMessage() }}</p>
            <input [(ngModel)]="childInput" placeholder="Respond to parent">
            <button (click)="respondToParent()">Send Response</button>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Service Injection Challenge</h2>
        <div class="service-demo">
          <h3>Data Service Demo</h3>
          <button (click)="loadData()">Load Data</button>
          <button (click)="saveData()">Save Data</button>
          <button (click)="clearData()">Clear Data</button>

          <div class="data-display">
            <h4>Current Data:</h4>
            <ul>
              <li *ngFor="let item of dataItems()">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Form Validation Challenge</h2>
        <div class="form-demo">
          <form #userForm="ngForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label>Name:</label>
              <input [(ngModel)]="user.name" name="name" required minlength="2" #nameInput="ngModel">
              <div *ngIf="nameInput.invalid && nameInput.touched" class="error">
                Name is required and must be at least 2 characters.
              </div>
            </div>

            <div class="form-group">
              <label>Email:</label>
              <input [(ngModel)]="user.email" name="email" required email #emailInput="ngModel">
              <div *ngIf="emailInput.invalid && emailInput.touched" class="error">
                Please enter a valid email address.
              </div>
            </div>

            <div class="form-group">
              <label>Age:</label>
              <input [(ngModel)]="user.age" name="age" type="number" required min="18" max="100" #ageInput="ngModel">
              <div *ngIf="ageInput.invalid && ageInput.touched" class="error">
                Age must be between 18 and 100.
              </div>
            </div>

            <button type="submit" [disabled]="userForm.invalid">Submit</button>
          </form>

          <div *ngIf="formSubmitted()" class="form-result">
            <h4>Form Submitted Successfully!</h4>
            <p>Name: {{ user.name }}</p>
            <p>Email: {{ user.email }}</p>
            <p>Age: {{ user.age }}</p>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Performance Optimization Challenge</h2>
        <div class="performance-demo">
          <h3>Large List Rendering</h3>
          <button (click)="generateItems()">Generate Items</button>
          <button (click)="clearItems()">Clear Items</button>
          <p>Total items: {{ items().length }}</p>

          <div class="items-container">
            <div *ngFor="let item of items(); trackBy: trackByFn" class="item">
              {{ item.id }}: {{ item.name }}
            </div>
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

    .communication-demo {
      padding: 1rem;
      background: var(--bg-tertiary, #f8f9fa);
      border-radius: 4px;
    }

    .child-component {
      margin: 1rem 0;
      padding: 1rem;
      background: #e9ecef;
      border-radius: 4px;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
      margin: 0.5rem 0;
    }

    button {
      padding: 0.5rem 1rem;
      background: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin: 0.5rem;
    }

    button:hover:not(:disabled) {
      background: #1565c0;
    }

    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .service-demo {
      padding: 1rem;
      background: var(--bg-tertiary, #f8f9fa);
      border-radius: 4px;
    }

    .data-display {
      margin: 1rem 0;
      padding: 1rem;
      background: #e9ecef;
      border-radius: 4px;
    }

    .form-demo {
      padding: 1rem;
      background: var(--bg-tertiary, #f8f9fa);
      border-radius: 4px;
    }

    .form-group {
      margin: 1rem 0;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    .error {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .form-result {
      margin: 1rem 0;
      padding: 1rem;
      background: #d4edda;
      border: 1px solid #c3e6cb;
      border-radius: 4px;
    }

    .performance-demo {
      padding: 1rem;
      background: var(--bg-tertiary, #f8f9fa);
      border-radius: 4px;
    }

    .items-container {
      max-height: 300px;
      overflow-y: auto;
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
      padding: 1rem;
    }

    .item {
      padding: 0.5rem;
      border-bottom: 1px solid #eee;
    }

    .item:last-child {
      border-bottom: none;
    }
  `]
})
export class Testdome2Component {
  parentMessage = '';
  childMessage = signal('');
  childResponse = signal('');
  childInput = '';
  dataItems = signal<string[]>([]);
  items = signal<any[]>([]);
  formSubmitted = signal(false);

  user = {
    name: '',
    email: '',
    age: null as number | null
  };

  sendToChild() {
    this.childMessage.set(this.parentMessage);
  }

  respondToParent() {
    this.childResponse.set(this.childInput);
  }

  loadData() {
    const sampleData = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    this.dataItems.set(sampleData);
  }

  saveData() {
    // Simulate saving data
    console.log('Data saved:', this.dataItems());
  }

  clearData() {
    this.dataItems.set([]);
  }

  onSubmit() {
    this.formSubmitted.set(true);
    console.log('Form submitted:', this.user);
  }

  generateItems() {
    const newItems = [];
    for (let i = 0; i < 1000; i++) {
      newItems.push({
        id: i + 1,
        name: `Item ${i + 1}`
      });
    }
    this.items.set(newItems);
  }

  clearItems() {
    this.items.set([]);
  }

  trackByFn(index: number, item: any): any {
    return item.id;
  }
}
