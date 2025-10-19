import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <div class="buttons-page">
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h2 class="text-2xl font-bold text-primary mb-2">Buttons</h2>
        <p class="text-secondary">Button variants, states, and accessibility</p>
      </div>

      <!-- Basic Buttons -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Basic Buttons</h3>
        <div class="flex flex-wrap gap-4">
          <button mat-button>Basic</button>
          <button mat-button color="primary">Primary</button>
          <button mat-button color="accent">Accent</button>
          <button mat-button color="warn">Warn</button>
          <button mat-button disabled>Disabled</button>
        </div>
      </div>

      <!-- Raised Buttons -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Raised Buttons</h3>
        <div class="flex flex-wrap gap-4">
          <button mat-raised-button>Basic</button>
          <button mat-raised-button color="primary">Primary</button>
          <button mat-raised-button color="accent">Accent</button>
          <button mat-raised-button color="warn">Warn</button>
          <button mat-raised-button disabled>Disabled</button>
        </div>
      </div>

      <!-- Stroked Buttons -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Stroked Buttons</h3>
        <div class="flex flex-wrap gap-4">
          <button mat-stroked-button>Basic</button>
          <button mat-stroked-button color="primary">Primary</button>
          <button mat-stroked-button color="accent">Accent</button>
          <button mat-stroked-button color="warn">Warn</button>
        </div>
      </div>

      <!-- Icon Buttons -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Icon Buttons</h3>
        <div class="flex flex-wrap gap-4 items-center">
          <button mat-icon-button><mat-icon>favorite</mat-icon></button>
          <button mat-icon-button color="primary"><mat-icon>home</mat-icon></button>
          <button mat-icon-button color="accent"><mat-icon>star</mat-icon></button>
          <button mat-icon-button color="warn"><mat-icon>delete</mat-icon></button>
        </div>
      </div>

      <!-- FAB Buttons -->
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">FAB Buttons</h3>
        <div class="flex flex-wrap gap-4 items-center">
          <button mat-fab><mat-icon>add</mat-icon></button>
          <button mat-fab color="primary"><mat-icon>edit</mat-icon></button>
          <button mat-fab color="accent"><mat-icon>favorite</mat-icon></button>
          <button mat-mini-fab><mat-icon>close</mat-icon></button>
          <button mat-mini-fab color="primary"><mat-icon>check</mat-icon></button>
        </div>
      </div>

      <!-- Buttons with Icons -->
      <div class="bg-card rounded-lg shadow-themed p-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Buttons with Icons</h3>
        <div class="flex flex-wrap gap-4">
          <button mat-raised-button color="primary">
            <mat-icon>save</mat-icon> Save
          </button>
          <button mat-raised-button color="accent">
            <mat-icon>upload</mat-icon> Upload
          </button>
          <button mat-raised-button color="warn">
            <mat-icon>delete</mat-icon> Delete
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Fix button text colors in dark mode */
    .dark mat-raised-button:not([color]) {
      background-color: var(--bg-tertiary) !important;
      color: var(--text-primary) !important;
    }

    .dark mat-raised-button:not([color]):hover {
      background-color: var(--bg-secondary) !important;
      color: var(--text-primary) !important;
    }

    .dark mat-button:not([color]) {
      color: var(--text-primary) !important;
    }

    .dark mat-button:not([color]):hover {
      background-color: var(--bg-tertiary) !important;
      color: var(--text-primary) !important;
    }

    .dark mat-stroked-button:not([color]) {
      border-color: var(--border-color) !important;
      color: var(--text-primary) !important;
    }

    .dark mat-stroked-button:not([color]):hover {
      background-color: var(--bg-tertiary) !important;
      border-color: var(--text-primary) !important;
      color: var(--text-primary) !important;
    }

    .dark mat-icon-button:not([color]) {
      color: var(--text-primary) !important;
    }

    .dark mat-icon-button:not([color]):hover {
      background-color: var(--bg-tertiary) !important;
      color: var(--text-primary) !important;
    }

    .dark mat-fab:not([color]) {
      background-color: var(--bg-tertiary) !important;
      color: var(--text-primary) !important;
    }

    .dark mat-fab:not([color]):hover {
      background-color: var(--bg-secondary) !important;
      color: var(--text-primary) !important;
    }

    .dark mat-mini-fab:not([color]) {
      background-color: var(--bg-tertiary) !important;
      color: var(--text-primary) !important;
    }

    .dark mat-mini-fab:not([color]):hover {
      background-color: var(--bg-secondary) !important;
      color: var(--text-primary) !important;
    }

    /* Ensure disabled buttons are properly styled in dark mode */
    .dark mat-button[disabled],
    .dark mat-raised-button[disabled],
    .dark mat-stroked-button[disabled] {
      color: var(--text-disabled) !important;
      background-color: transparent !important;
    }

    .dark mat-raised-button[disabled] {
      background-color: var(--bg-disabled) !important;
    }
  `]
})
export class ButtonsComponent {}

