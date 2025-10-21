import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="settings-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Settings
          </h1>
          <p class="text-xl text-secondary mb-6">
            Application settings and preferences to customize your experience.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <mat-card class="setting-card" routerLink="theme-configuration">
          <mat-card-header>
            <mat-icon mat-card-avatar class="setting-icon">palette</mat-icon>
            <mat-card-title>Theme Configuration</mat-card-title>
            <mat-card-subtitle>Theme and appearance settings</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Customize colors, fonts, and overall appearance of the application.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Configure Theme</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="setting-card" routerLink="layout-preferences">
          <mat-card-header>
            <mat-icon mat-card-avatar class="setting-icon">view_quilt</mat-icon>
            <mat-card-title>Layout Preferences</mat-card-title>
            <mat-card-subtitle>Layout and UI preferences</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Adjust layout settings, sidebar preferences, and UI customization options.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Adjust Layout</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="setting-card" routerLink="user-preferences">
          <mat-card-header>
            <mat-icon mat-card-avatar class="setting-icon">person</mat-icon>
            <mat-card-title>User Preferences</mat-card-title>
            <mat-card-subtitle>User account and preference settings</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Manage your account settings, notifications, and personal preferences.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Manage Account</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .settings-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-section {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-lg);
    }

    .hero-section h1 {
      font-size: 3rem;
      font-weight: 700;
      color: var(--primary-color);
    }

    .hero-section p {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .setting-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .setting-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .setting-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--accent-color);
    }

    .setting-card mat-card-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .setting-card mat-card-subtitle {
      color: var(--text-secondary);
    }

    .setting-card mat-card-content p {
      color: var(--text-secondary);
      line-height: 1.5;
    }
  `]
})
export class SettingsComponent {}



