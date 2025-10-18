import { Component, signal } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, JsonPipe, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, JsonPipe, SlicePipe],
  template: `
    <div class="page-container">
      <h1>Pipes Demo</h1>
      <p>Demonstrating Angular built-in pipes</p>

      <div class="demo-section">
        <h2>String Pipes</h2>
        <div class="input-group">
          <label>Text Input:</label>
          <input [(ngModel)]="textInput" placeholder="Enter some text">
        </div>

        <div class="pipe-examples">
          <div class="pipe-item">
            <strong>Original:</strong> {{ textInput }}
          </div>
          <div class="pipe-item">
            <strong>Uppercase:</strong> {{ textInput | uppercase }}
          </div>
          <div class="pipe-item">
            <strong>Lowercase:</strong> {{ textInput | lowercase }}
          </div>
          <div class="pipe-item">
            <strong>Title Case:</strong> {{ textInput | titlecase }}
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Number Pipes</h2>
        <div class="input-group">
          <label>Number Input:</label>
          <input [(ngModel)]="numberInput" type="number" placeholder="Enter a number">
        </div>

        <div class="pipe-examples">
          <div class="pipe-item">
            <strong>Original:</strong> {{ numberInput }}
          </div>
          <div class="pipe-item">
            <strong>Decimal (2 places):</strong> {{ numberInput | number:'1.2-2' }}
          </div>
          <div class="pipe-item">
            <strong>Currency (USD):</strong> {{ numberInput | currency:'USD':'symbol':'1.2-2' }}
          </div>
          <div class="pipe-item">
            <strong>Currency (EUR):</strong> {{ numberInput | currency:'EUR':'symbol':'1.2-2' }}
          </div>
          <div class="pipe-item">
            <strong>Percent:</strong> {{ numberInput | percent:'1.2-2' }}
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Date Pipes</h2>
        <div class="input-group">
          <label>Date Input:</label>
          <input [(ngModel)]="dateInput" type="datetime-local">
        </div>

        <div class="pipe-examples">
          <div class="pipe-item">
            <strong>Original:</strong> {{ dateInput }}
          </div>
          <div class="pipe-item">
            <strong>Short Date:</strong> {{ dateInput | date:'short' }}
          </div>
          <div class="pipe-item">
            <strong>Medium Date:</strong> {{ dateInput | date:'medium' }}
          </div>
          <div class="pipe-item">
            <strong>Long Date:</strong> {{ dateInput | date:'long' }}
          </div>
          <div class="pipe-item">
            <strong>Custom Format:</strong> {{ dateInput | date:'yyyy-MM-dd HH:mm:ss' }}
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Array Pipes</h2>
        <div class="input-group">
          <label>Array Input (comma-separated):</label>
          <input [(ngModel)]="arrayInput" placeholder="Enter items separated by commas">
          <button (click)="updateArray()">Update Array</button>
        </div>

        <div class="pipe-examples">
          <div class="pipe-item">
            <strong>Original Array:</strong> {{ arrayItems() | json }}
          </div>
          <div class="pipe-item">
            <strong>Slice (first 3):</strong> {{ arrayItems() | slice:0:3 | json }}
          </div>
          <div class="pipe-item">
            <strong>Slice (last 2):</strong> {{ arrayItems() | slice:-2 | json }}
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Object Pipes</h2>
        <div class="pipe-examples">
          <div class="pipe-item">
            <strong>Object as JSON:</strong> {{ sampleObject() | json }}
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Async Pipe Simulation</h2>
        <button (click)="toggleAsyncData()">Toggle Async Data</button>
        <div class="pipe-examples">
          <div class="pipe-item">
            <strong>Async Data:</strong> {{ asyncData() }}
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

    .input-group {
      margin: 1rem 0;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
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

    button:hover {
      background: #1565c0;
    }

    .pipe-examples {
      margin-top: 1rem;
    }

    .pipe-item {
      margin: 0.5rem 0;
      padding: 0.75rem;
      background: #f8f9fa;
      border-radius: 4px;
      border-left: 4px solid #1976d2;
    }

    .pipe-item strong {
      color: #1976d2;
      margin-right: 0.5rem;
    }
  `]
})
export class PipesComponent {
  textInput = 'hello world';
  numberInput = 1234.5678;
  dateInput = new Date().toISOString().slice(0, 16);
  arrayInput = 'apple,banana,cherry,date,elderberry';
  arrayItems = signal<string[]>(['apple', 'banana', 'cherry', 'date', 'elderberry']);
  asyncData = signal<string>('Loading...');
  sampleObject = signal({
    name: 'John Doe',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'swimming', 'coding']
  });

  constructor() {
    // Simulate async data
    setInterval(() => {
      if (this.asyncData() !== 'Loading...') {
        this.asyncData.set(`Async data: ${new Date().toLocaleTimeString()}`);
      }
    }, 2000);
  }

  updateArray() {
    const items = this.arrayInput.split(',').map(item => item.trim()).filter(item => item);
    this.arrayItems.set(items);
  }

  toggleAsyncData() {
    if (this.asyncData() === 'Loading...') {
      this.asyncData.set('Async data loaded!');
    } else {
      this.asyncData.set('Loading...');
    }
  }
}
