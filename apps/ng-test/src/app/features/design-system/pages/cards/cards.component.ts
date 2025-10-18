import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="cards-page">
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h2 class="text-2xl font-bold text-primary mb-2">Cards</h2>
        <p class="text-secondary">Card layouts and content patterns</p>
      </div>

      <!-- Material Cards -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Material Cards</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <mat-card>
            <mat-card-header>
              <mat-card-title>Basic Card</mat-card-title>
              <mat-card-subtitle>With header</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>This is a basic Material card with header and content.</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button color="primary">ACTION</button>
            </mat-card-actions>
          </mat-card>

          <mat-card>
            <img mat-card-image src="https://via.placeholder.com/300x200" alt="Placeholder">
            <mat-card-content>
              <h4 class="font-semibold text-primary mb-2">Card with Image</h4>
              <p class="text-secondary">Image cards are great for visual content.</p>
            </mat-card-content>
          </mat-card>

          <mat-card>
            <mat-card-header>
              <mat-icon mat-card-avatar>account_circle</mat-icon>
              <mat-card-title>Avatar Card</mat-card-title>
              <mat-card-subtitle>With avatar icon</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>Cards can include avatar icons in the header.</p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <!-- Custom Cards -->
      <div>
        <h3 class="text-lg font-semibold text-primary mb-4">Custom Tailwind Cards</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-card rounded-lg shadow-themed p-6 border border-default">
            <h4 class="text-lg font-semibold text-primary mb-2">Simple Card</h4>
            <p class="text-secondary">Built with Tailwind utilities and CSS variables.</p>
          </div>

          <div class="bg-card rounded-lg shadow-themed overflow-hidden">
            <div class="h-32 bg-primary"></div>
            <div class="p-6">
              <h4 class="text-lg font-semibold text-primary mb-2">Header Card</h4>
              <p class="text-secondary">With colored header section.</p>
            </div>
          </div>

          <div class="bg-card rounded-lg shadow-themed p-6 hover:shadow-themed-hover transition-shadow">
            <mat-icon class="text-primary text-4xl mb-4">star</mat-icon>
            <h4 class="text-lg font-semibold text-primary mb-2">Icon Card</h4>
            <p class="text-secondary">Hover for shadow effect.</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CardsComponent {}

