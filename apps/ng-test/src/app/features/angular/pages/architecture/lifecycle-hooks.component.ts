import { Component, signal, OnInit, OnDestroy, OnChanges, SimpleChanges, AfterViewInit, AfterContentInit, DoCheck, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Child Component
@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="child-component">
      <h3>Child Component</h3>
      <p>Input: {{ inputValue }}</p>
      <button (click)="emitOutput()">Emit Output</button>
      <button (click)="updateInternalState()">Update Internal State</button>
      <p>Internal State: {{ internalState() }}</p>
    </div>
  `,
  styles: [`
    .child-component {
      margin: 1rem 0;
      padding: 1rem;
      background: var(--bg-tertiary, #f8f9fa);
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
    }

    button {
      margin: 0.5rem;
      padding: 0.5rem 1rem;
      background: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background: #218838;
    }
  `]
})
export class ChildComponentComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit, DoCheck {
  @Input() inputValue = '';
  @Output() outputEvent = new EventEmitter<string>();
  internalState = signal(0);

  ngOnInit() {
    console.log('Child: ngOnInit called');
  }

  ngOnDestroy() {
    console.log('Child: ngOnDestroy called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Child: ngOnChanges called', changes);
  }

  ngAfterViewInit() {
    console.log('Child: ngAfterViewInit called');
  }

  ngAfterContentInit() {
    console.log('Child: ngAfterContentInit called');
  }

  ngDoCheck() {
    console.log('Child: ngDoCheck called');
  }

  emitOutput() {
    const value = `Output ${Date.now()}`;
    this.outputEvent.emit(value);
  }

  updateInternalState() {
    this.internalState.update(state => state + 1);
  }
}

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [CommonModule, ChildComponentComponent],
  template: `
    <div class="page-container">
      <h1>Lifecycle Hooks Demo</h1>
      <p>Demonstrating Angular component lifecycle hooks</p>

      <div class="demo-section">
        <h2>Component Lifecycle</h2>
        <button (click)="toggleComponent()">
          {{ showChild() ? 'Hide' : 'Show' }} Child Component
        </button>
        <button (click)="updateInput()">Update Input</button>
        <button (click)="clearLogs()">Clear Logs</button>

        @if (showChild()) {
          <app-child-component
            [inputValue]="inputValue()"
            (outputEvent)="onChildOutput($event)"
          ></app-child-component>
        }
      </div>

      <div class="demo-section">
        <h2>Lifecycle Logs</h2>
        <div class="log-container">
          @for (log of logs(); track $index) {
            <div class="log-entry" [class]="log.type">{{ log.message }}</div>
          }
        </div>
      </div>

      <div class="demo-section">
        <h2>Current State</h2>
        <p>Input Value: {{ inputValue() }}</p>
        <p>Child Output: {{ childOutput() }}</p>
        <p>Component Visible: {{ showChild() }}</p>
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

    .log-container {
      max-height: 300px;
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

    .log-entry.ngOnInit {
      background: #d4edda;
      color: #155724;
    }

    .log-entry.ngOnDestroy {
      background: #f8d7da;
      color: #721c24;
    }

    .log-entry.ngOnChanges {
      background: #d1ecf1;
      color: #0c5460;
    }

    .log-entry.ngAfterViewInit {
      background: rgba(255, 193, 7, 0.2);
      color: #856404;
    }

    .log-entry.ngAfterContentInit {
      background: #e2e3e5;
      color: #383d41;
    }

    .log-entry.ngDoCheck {
      background: #f8d7da;
      color: #721c24;
    }
  `]
})
export class LifecycleHooksComponent implements OnInit, OnDestroy {
  showChild = signal(false);
  inputValue = signal('Initial Value');
  childOutput = signal('');
  logs = signal<{message: string, type: string}[]>([]);

  ngOnInit() {
    this.addLog('Parent: ngOnInit called', 'ngOnInit');
  }

  ngOnDestroy() {
    this.addLog('Parent: ngOnDestroy called', 'ngOnDestroy');
  }

  toggleComponent() {
    this.showChild.update(show => !show);
    this.addLog(`Parent: Child component ${this.showChild() ? 'shown' : 'hidden'}`, 'ngOnInit');
  }

  updateInput() {
    this.inputValue.update(value => value + ' Updated');
    this.addLog('Parent: Input value updated', 'ngOnChanges');
  }

  onChildOutput(value: string) {
    this.childOutput.set(value);
    this.addLog(`Parent: Received output from child: ${value}`, 'ngOnChanges');
  }

  clearLogs() {
    this.logs.set([]);
  }

  private addLog(message: string, type: string) {
    this.logs.update(logs => [...logs, { message, type }]);
  }
}
