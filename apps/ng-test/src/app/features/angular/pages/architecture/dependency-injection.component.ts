import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Service interfaces
interface Logger {
  log(message: string): void;
}

interface DataService {
  getData(): string;
}

// Service implementations
class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[ConsoleLogger] ${message}`);
  }
}

class FileLogger implements Logger {
  log(message: string): void {
    console.log(`[FileLogger] ${message} (would write to file)`);
  }
}

class ApiDataService implements DataService {
  getData(): string {
    return 'Data from API';
  }
}

class MockDataService implements DataService {
  getData(): string {
    return 'Mock data';
  }
}

@Component({
  selector: 'app-dependency-injection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h1>Dependency Injection Demo</h1>
      <p>Demonstrating Angular dependency injection with inject() function</p>

      <div class="demo-section">
        <h2>Service Injection</h2>
        <button (click)="testLogger()">Test Logger</button>
        <button (click)="testDataService()">Test Data Service</button>
        <button (click)="switchLogger()">Switch Logger</button>
        <button (click)="switchDataService()">Switch Data Service</button>

        <div class="output">
          <h3>Output:</h3>
          <div class="log-container">
            @for (log of logs(); track $index) {
              <div class="log-entry">{{ log }}</div>
            }
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Current Services</h2>
        <p>Logger: {{ currentLogger() }}</p>
        <p>Data Service: {{ currentDataService() }}</p>
        <p>Data: {{ currentData() }}</p>
      </div>

      <div class="demo-section">
        <h2>Manual Service Creation</h2>
        <button (click)="createManualServices()">Create Services Manually</button>
        <p>Manual Logger: {{ manualLogger() }}</p>
        <p>Manual Data: {{ manualData() }}</p>
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

    .output {
      margin-top: 1rem;
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
      padding: 0.25rem;
      background: var(--bg-primary, white);
      border-radius: 2px;
      font-family: monospace;
      font-size: 0.875rem;
    }
  `]
})
export class DependencyInjectionComponent {
  logs = signal<string[]>([]);
  currentLogger = signal<string>('ConsoleLogger');
  currentDataService = signal<string>('ApiDataService');
  currentData = signal<string>('');
  manualLogger = signal<string>('');
  manualData = signal<string>('');

  private logger: Logger = new ConsoleLogger();
  private dataService: DataService = new ApiDataService();

  constructor() {
    this.currentData.set(this.dataService.getData());
  }

  testLogger() {
    this.logger.log('Test message from logger');
    this.addLog(`Logger tested: ${this.currentLogger()}`);
  }

  testDataService() {
    const data = this.dataService.getData();
    this.currentData.set(data);
    this.addLog(`Data service tested: ${data}`);
  }

  switchLogger() {
    this.logger = this.logger instanceof ConsoleLogger ? new FileLogger() : new ConsoleLogger();
    this.currentLogger.set(this.logger instanceof ConsoleLogger ? 'ConsoleLogger' : 'FileLogger');
    this.addLog(`Switched to: ${this.currentLogger()}`);
  }

  switchDataService() {
    this.dataService = this.dataService instanceof ApiDataService ? new MockDataService() : new ApiDataService();
    this.currentDataService.set(this.dataService instanceof ApiDataService ? 'ApiDataService' : 'MockDataService');
    this.currentData.set(this.dataService.getData());
    this.addLog(`Switched to: ${this.currentDataService()}`);
  }

  createManualServices() {
    // Manual service creation without DI
    const manualLogger = new FileLogger();
    const manualDataService = new MockDataService();

    this.manualLogger.set('FileLogger (manual)');
    this.manualData.set(manualDataService.getData());

    manualLogger.log('Manual service created');
    this.addLog('Manual services created');
  }

  private addLog(message: string) {
    this.logs.update(logs => [...logs, `${new Date().toLocaleTimeString()}: ${message}`]);
  }
}
