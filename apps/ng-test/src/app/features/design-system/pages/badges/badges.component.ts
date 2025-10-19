import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
  ],
  template: `
    <div class="badges-container">
      <div class="page-header">
        <h1>Badges & Chips</h1>
        <p class="page-description">
          Badges and chips are compact elements that represent an input, attribute, or action.
          They provide visual cues and help users understand the status or category of content.
        </p>
      </div>

      <div class="content-section">
        <h2>Basic Badges</h2>
        <p>Simple badges for status indicators and labels.</p>

        <div class="demo-section">
          <div class="demo-item">
            <h3>Status Badges</h3>
            <div class="badge-examples">
              <mat-chip class="status-badge status-success">Active</mat-chip>
              <mat-chip class="status-badge status-warning">Pending</mat-chip>
              <mat-chip class="status-badge status-error">Inactive</mat-chip>
              <mat-chip class="status-badge status-info">Processing</mat-chip>
            </div>
          </div>

          <div class="demo-item">
            <h3>Category Badges</h3>
            <div class="badge-examples">
              <mat-chip class="category-badge category-primary">Primary</mat-chip>
              <mat-chip class="category-badge category-secondary">Secondary</mat-chip>
              <mat-chip class="category-badge category-accent">Accent</mat-chip>
              <mat-chip class="category-badge category-warn">Warning</mat-chip>
            </div>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h2>Interactive Chips</h2>
        <p>Chips that can be selected, removed, or clicked for user interaction.</p>

        <div class="demo-section">
          <div class="demo-item">
            <h3>Selectable Chips</h3>
            <div class="chip-examples">
              <mat-chip
                *ngFor="let chip of selectableChips"
                [class.selected]="chip.selected"
                (click)="toggleChip(chip)"
                class="selectable-chip">
                {{ chip.label }}
              </mat-chip>
            </div>
          </div>

          <div class="demo-item">
            <h3>Removable Chips</h3>
            <div class="chip-examples">
              <mat-chip
                *ngFor="let chip of removableChips; let i = index"
                (removed)="removeChip(i)"
                class="removable-chip">
                {{ chip.label }}
                <mat-icon matChipRemove>cancel</mat-icon>
              </mat-chip>
            </div>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h2>Size Variations</h2>
        <p>Different sizes for various use cases and contexts.</p>

        <div class="demo-section">
          <div class="demo-item">
            <h3>Small Badges</h3>
            <div class="badge-examples">
              <mat-chip class="badge-small">Small</mat-chip>
              <mat-chip class="badge-small status-success">Active</mat-chip>
              <mat-chip class="badge-small category-primary">Primary</mat-chip>
            </div>
          </div>

          <div class="demo-item">
            <h3>Medium Badges (Default)</h3>
            <div class="badge-examples">
              <mat-chip class="badge-medium">Medium</mat-chip>
              <mat-chip class="badge-medium status-success">Active</mat-chip>
              <mat-chip class="badge-medium category-primary">Primary</mat-chip>
            </div>
          </div>

          <div class="demo-item">
            <h3>Large Badges</h3>
            <div class="badge-examples">
              <mat-chip class="badge-large">Large</mat-chip>
              <mat-chip class="badge-large status-success">Active</mat-chip>
              <mat-chip class="badge-large category-primary">Primary</mat-chip>
            </div>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h2>Usage Guidelines</h2>
        <div class="guidelines">
          <div class="guideline-item">
            <h3>When to Use</h3>
            <ul>
              <li>Show status or state information</li>
              <li>Display categories or tags</li>
              <li>Indicate filters or selections</li>
              <li>Show counts or notifications</li>
            </ul>
          </div>

          <div class="guideline-item">
            <h3>Best Practices</h3>
            <ul>
              <li>Keep text concise and clear</li>
              <li>Use consistent colors for similar states</li>
              <li>Provide clear visual hierarchy</li>
              <li>Ensure sufficient contrast for accessibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .badges-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .page-header {
      margin-bottom: 3rem;
      text-align: center;
    }

    .page-header h1 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .page-description {
      font-size: 1.125rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .content-section {
      margin-bottom: 3rem;
    }

    .content-section h2 {
      font-size: 1.875rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .content-section p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
      font-size: 1rem;
    }

    .demo-section {
      display: grid;
      gap: 2rem;
    }

    .demo-item {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: var(--shadow-sm);
    }

    .demo-item h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .badge-examples,
    .chip-examples {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
    }

    /* Status Badges */
    .status-badge {
      font-weight: 500;
      border: none;
    }

    .status-success {
      background-color: #10b981 !important;
      color: white !important;
    }

    .status-warning {
      background-color: #f59e0b !important;
      color: white !important;
    }

    .status-error {
      background-color: #ef4444 !important;
      color: white !important;
    }

    .status-info {
      background-color: #3b82f6 !important;
      color: white !important;
    }

    /* Category Badges */
    .category-badge {
      font-weight: 500;
      border: none;
    }

    .category-primary {
      background-color: var(--primary-color) !important;
      color: white !important;
    }

    .category-secondary {
      background-color: var(--text-secondary) !important;
      color: white !important;
    }

    .category-accent {
      background-color: var(--accent-color) !important;
      color: white !important;
    }

    .category-warn {
      background-color: var(--warn-color) !important;
      color: white !important;
    }

    /* Interactive Chips */
    .selectable-chip {
      cursor: pointer;
      transition: all 0.2s ease;
      border: 2px solid transparent;
    }

    .selectable-chip:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .selectable-chip.selected {
      background-color: var(--primary-color) !important;
      color: white !important;
      border-color: var(--primary-color);
    }

    .removable-chip {
      background-color: var(--bg-tertiary) !important;
      color: var(--text-primary) !important;
      border: 1px solid var(--border-color);
    }

    .removable-chip mat-icon {
      color: var(--text-secondary) !important;
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    /* Size Variations */
    .badge-small {
      font-size: 0.75rem !important;
      height: 20px !important;
      min-height: 20px !important;
      padding: 0 8px !important;
    }

    .badge-medium {
      font-size: 0.875rem !important;
      height: 24px !important;
      min-height: 24px !important;
      padding: 0 12px !important;
    }

    .badge-large {
      font-size: 1rem !important;
      height: 32px !important;
      min-height: 32px !important;
      padding: 0 16px !important;
    }

    /* Guidelines */
    .guidelines {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .guideline-item {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: var(--shadow-sm);
    }

    .guideline-item h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .guideline-item ul {
      list-style: none;
      padding: 0;
    }

    .guideline-item li {
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
    }

    .guideline-item li::before {
      content: '•';
      color: var(--primary-color);
      font-weight: bold;
      position: absolute;
      left: 0;
    }

    /* Dark mode adjustments */
    .dark .removable-chip {
      background-color: var(--bg-secondary) !important;
      color: var(--text-primary) !important;
    }

    .dark .selectable-chip:not(.selected) {
      background-color: var(--bg-tertiary) !important;
      color: var(--text-primary) !important;
    }
  `],
})
export class BadgesComponent {
  selectableChips = [
    { label: 'Angular', selected: false },
    { label: 'React', selected: true },
    { label: 'Vue', selected: false },
    { label: 'Svelte', selected: false },
  ];

  removableChips = [
    { label: 'Frontend' },
    { label: 'JavaScript' },
    { label: 'TypeScript' },
    { label: 'CSS' },
  ];

  toggleChip(chip: any) {
    chip.selected = !chip.selected;
  }

  removeChip(index: number) {
    this.removableChips.splice(index, 1);
  }
}
