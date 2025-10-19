import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Signals & Resources Demo</h1>
      <p class="text-gray-600 mb-8">Demonstrating Angular signals, computed values, and effects</p>

      <div class="mb-8 p-4 border border-gray-200 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Basic Signals</h2>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2" (click)="increment()">Increment</button>
        <button class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2" (click)="decrement()">Decrement</button>
        <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" (click)="reset()">Reset</button>
        <p class="text-gray-800 mt-4">Count: {{ count() }}</p>
        <p class="text-gray-600">Double count: {{ doubleCount() }}</p>
      </div>

      <div class="mb-8 p-4 border border-gray-200 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Computed Signals</h2>
        <input class="w-full p-2 border border-gray-300 rounded mb-2" [(ngModel)]="firstName" placeholder="First Name">
        <input class="w-full p-2 border border-gray-300 rounded mb-4" [(ngModel)]="lastName" placeholder="Last Name">
        <p class="text-gray-800">Full Name: {{ fullName() }}</p>
        <p class="text-gray-600">Name Length: {{ nameLength() }}</p>
      </div>

      <div class="mb-8 p-4 border border-gray-200 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Signal Effects</h2>
        <p class="text-gray-600 mb-4">Check console for effect logs</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" (click)="updateEffectValue()">Update Effect Value</button>
        <p class="text-gray-800 mt-4">Effect Value: {{ effectValue() }}</p>
      </div>

      <div class="mb-8 p-4 border border-gray-200 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Signal Arrays</h2>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2" (click)="addTodo()">Add Todo</button>
        <button class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded" (click)="toggleTodo(0)">Toggle First Todo</button>
        <ul class="list-none p-0 mt-4">
          @for (todo of todos(); track todo.id) {
            <li class="p-2 my-1 bg-gray-100 rounded" [class.line-through]="todo.completed" [class.text-gray-500]="todo.completed">
              {{ todo.text }} ({{ todo.completed ? 'Done' : 'Pending' }})
            </li>
          }
        </ul>
        <p class="text-gray-800 mt-4">Total todos: {{ todos().length }}</p>
        <p class="text-gray-600">Completed todos: {{ completedTodos() }}</p>
      </div>
    </div>
  `,
  styles: []
})
export class SignalsComponent {
  // Basic signals
  count = signal(0);
  firstName = '';
  lastName = '';
  effectValue = signal(0);
  todos = signal([
    { id: 1, text: 'Learn Angular Signals', completed: false },
    { id: 2, text: 'Build a demo app', completed: true },
    { id: 3, text: 'Write tests', completed: false }
  ]);

  // Computed signals
  doubleCount = computed(() => this.count() * 2);
  fullName = computed(() => `${this.firstName} ${this.lastName}`.trim());
  nameLength = computed(() => this.fullName().length);
  completedTodos = computed(() => this.todos().filter(todo => todo.completed).length);

  constructor() {
    // Effect to log changes
    effect(() => {
      console.log('Count changed to:', this.count());
    });

    effect(() => {
      console.log('Effect value changed to:', this.effectValue());
    });
  }

  increment() {
    this.count.update(c => c + 1);
  }

  decrement() {
    this.count.update(c => c - 1);
  }

  reset() {
    this.count.set(0);
  }

  updateEffectValue() {
    this.effectValue.update(v => v + 1);
  }

  addTodo() {
    const newId = Math.max(...this.todos().map(todo => todo.id)) + 1;
    this.todos.update(todos => [...todos, {
      id: newId,
      text: `New Todo ${newId}`,
      completed: false
    }]);
  }

  toggleTodo(index: number) {
    this.todos.update(todos =>
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
}
