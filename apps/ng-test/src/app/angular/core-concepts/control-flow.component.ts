import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Control Flow Demo</h1>
      <p class="text-gray-600 mb-8">Demonstrating Angular's new control flow syntax (&#64;if, &#64;for, &#64;switch)</p>

      <div class="mb-8 p-4 border border-gray-200 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">&#64;if Directive</h2>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2" (click)="toggleVisibility()">Toggle Visibility</button>
        @if (isVisible()) {
          <p class="text-green-600 font-bold mt-2">This text is conditionally visible!</p>
        } @else {
          <p class="text-red-500 italic mt-2">This text is hidden.</p>
        }
      </div>

      <div class="mb-8 p-4 border border-gray-200 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">&#64;for Directive</h2>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2" (click)="addItem()">Add Item</button>
        <button class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded" (click)="removeItem()">Remove Item</button>
        <ul class="list-none p-0 mt-4">
          @for (item of items(); track item.id) {
            <li class="p-2 my-1 bg-gray-100 rounded">{{ item.name }} (ID: {{ item.id }})</li>
          } @empty {
            <li class="p-2 my-1 bg-gray-100 rounded">No items available</li>
          }
        </ul>
      </div>

      <div class="mb-8 p-4 border border-gray-200 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">&#64;switch Directive</h2>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2" (click)="cycleStatus()">Cycle Status</button>
        <p class="text-gray-600 mb-4">Current status: {{ currentStatus() }}</p>
        @switch (currentStatus()) {
          @case ('loading') {
            <div class="p-4 rounded bg-yellow-100 text-yellow-800">Loading...</div>
          }
          @case ('success') {
            <div class="p-4 rounded bg-green-100 text-green-800">Success!</div>
          }
          @case ('error') {
            <div class="p-4 rounded bg-red-100 text-red-800">Error occurred</div>
          }
          @default {
            <div class="p-4 rounded bg-gray-100 text-gray-800">Unknown status</div>
          }
        }
      </div>
    </div>
  `,
  styles: []
})
export class ControlFlowComponent {
  isVisible = signal(true);
  items = signal([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);
  currentStatus = signal('loading');
  private statuses = ['loading', 'success', 'error'];
  private statusIndex = 0;

  toggleVisibility() {
    this.isVisible.update(visible => !visible);
  }

  addItem() {
    const newId = Math.max(...this.items().map(item => item.id)) + 1;
    this.items.update(items => [...items, { id: newId, name: `Item ${newId}` }]);
  }

  removeItem() {
    this.items.update(items => items.length > 0 ? items.slice(0, -1) : items);
  }

  cycleStatus() {
    this.statusIndex = (this.statusIndex + 1) % this.statuses.length;
    this.currentStatus.set(this.statuses[this.statusIndex]);
  }
}
