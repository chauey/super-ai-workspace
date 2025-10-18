import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, RouterModule],
  template: `
    <div class="overview-container">
      <div class="bg-card rounded-lg shadow-themed p-8 mb-6">
        <h2 class="text-2xl font-bold text-primary mb-4">Welcome to the Design System</h2>
        <p class="text-secondary mb-4">
          This design system provides a comprehensive set of reusable components, patterns,
          and guidelines for building consistent, accessible user interfaces.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="stat-card">
            <mat-icon class="text-primary text-4xl mb-2">palette</mat-icon>
            <h3 class="text-xl font-semibold text-primary">10+</h3>
            <p class="text-secondary text-sm">Component Categories</p>
          </div>
          <div class="stat-card">
            <mat-icon class="text-primary text-4xl mb-2">brush</mat-icon>
            <h3 class="text-xl font-semibold text-primary">50+</h3>
            <p class="text-secondary text-sm">UI Components</p>
          </div>
          <div class="stat-card">
            <mat-icon class="text-primary text-4xl mb-2">dark_mode</mat-icon>
            <h3 class="text-xl font-semibold text-primary">2</h3>
            <p class="text-secondary text-sm">Theme Modes</p>
          </div>
        </div>
      </div>

      <h3 class="text-xl font-bold text-primary mb-4">Quick Navigation</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          *ngFor="let section of sections"
          [routerLink]="section.path"
          class="section-card"
        >
          <mat-icon class="text-primary text-3xl mb-3">{{ section.icon }}</mat-icon>
          <h4 class="text-lg font-semibold text-primary mb-2">{{ section.title }}</h4>
          <p class="text-secondary text-sm">{{ section.description }}</p>
        </a>
      </div>

      <div class="bg-card rounded-lg shadow-themed p-6 mt-6">
        <h3 class="text-xl font-bold text-primary mb-4">Architecture</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 class="font-semibold text-primary mb-2">🎨 Tailwind CSS</h4>
            <p class="text-secondary text-sm">Layout, spacing, responsive design</p>
          </div>
          <div>
            <h4 class="font-semibold text-primary mb-2">🎯 Angular Material</h4>
            <p class="text-secondary text-sm">UI components, interactions</p>
          </div>
          <div>
            <h4 class="font-semibold text-primary mb-2">🌗 Custom Theme</h4>
            <p class="text-secondary text-sm">Dark mode, CSS variables</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .stat-card {
        @apply text-center p-4 rounded border;
        background-color: var(--bg-secondary);
        border-color: var(--border-color);
      }

      .section-card {
        @apply block p-6 rounded-lg border transition-all cursor-pointer;
        background-color: var(--bg-card);
        border-color: var(--border-color);
        text-decoration: none;

        &:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-2px);
        }
      }
    `,
  ],
})
export class OverviewComponent {
  sections = [
    {
      path: '/design-system/colors',
      icon: 'palette',
      title: 'Colors',
      description: 'Color palette, variables, and usage guidelines',
    },
    {
      path: '/design-system/typography',
      icon: 'text_fields',
      title: 'Typography',
      description: 'Font families, sizes, weights, and text styles',
    },
    {
      path: '/design-system/icons',
      icon: 'emoji_emotions',
      title: 'Icons',
      description: 'Material icons library and usage examples',
    },
    {
      path: '/design-system/buttons',
      icon: 'smart_button',
      title: 'Buttons',
      description: 'Button variants, states, and accessibility',
    },
    {
      path: '/design-system/forms',
      icon: 'edit_note',
      title: 'Forms',
      description: 'Input fields, validation, and form patterns',
    },
    {
      path: '/design-system/cards',
      icon: 'view_agenda',
      title: 'Cards',
      description: 'Card layouts and content patterns',
    },
    {
      path: '/design-system/layouts',
      icon: 'view_quilt',
      title: 'Layouts',
      description: 'Grid systems and layout patterns',
    },
    {
      path: '/design-system/grids',
      icon: 'grid_on',
      title: 'Data Grids',
      description: 'AG Grid integration and table components',
    },
    {
      path: '/design-system/theming',
      icon: 'dark_mode',
      title: 'Theming',
      description: 'Dark mode, themes, and customization',
    },
  ];
}

