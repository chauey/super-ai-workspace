import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="apps-container">
      <div class="hero-section bg-card rounded-lg shadow-themed p-8 mb-8">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-4">
            Apps
          </h1>
          <p class="text-xl text-secondary mb-6">
            SaaS applications and utilities to help you manage your work and personal life.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <mat-card class="app-card" routerLink="calendar">
          <mat-card-header>
            <mat-icon mat-card-avatar class="app-icon">calendar_month</mat-icon>
            <mat-card-title>Calendar</mat-card-title>
            <mat-card-subtitle>Smart calendar with scheduling</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Manage your schedule with a smart calendar application featuring advanced scheduling capabilities.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Open App</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="app-card" routerLink="task-management">
          <mat-card-header>
            <mat-icon mat-card-avatar class="app-icon">task_alt</mat-icon>
            <mat-card-title>Task Management</mat-card-title>
            <mat-card-subtitle>Gamified project management</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Organize and track your tasks with a gamified project management system.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Open App</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="app-card" routerLink="certification-test">
          <mat-card-header>
            <mat-icon mat-card-avatar class="app-icon">quiz</mat-icon>
            <mat-card-title>Certification Test</mat-card-title>
            <mat-card-subtitle>Practice tests and assessments</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Practice for certifications and job interviews with comprehensive test preparation tools.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Open App</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="app-card" routerLink="family-tree">
          <mat-card-header>
            <mat-icon mat-card-avatar class="app-icon">family_restroom</mat-icon>
            <mat-card-title>Family Tree</mat-card-title>
            <mat-card-subtitle>Genealogy and family history</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Build and explore your family tree with genealogy and family history management tools.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Open App</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="app-card" routerLink="job-board">
          <mat-card-header>
            <mat-icon mat-card-avatar class="app-icon">work</mat-icon>
            <mat-card-title>Job Board</mat-card-title>
            <mat-card-subtitle>Job search and application tracking</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Search for jobs and track your applications with our comprehensive job board platform.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Open App</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="app-card" routerLink="lists">
          <mat-card-header>
            <mat-icon mat-card-avatar class="app-icon">list</mat-icon>
            <mat-card-title>Lists</mat-card-title>
            <mat-card-subtitle>General list management</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Create and organize lists for any purpose with our flexible list management system.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Open App</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="app-card" routerLink="chat">
          <mat-card-header>
            <mat-icon mat-card-avatar class="app-icon">chat</mat-icon>
            <mat-card-title>Chat</mat-card-title>
            <mat-card-subtitle>Messaging and communication</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Connect and communicate with our messaging and communication platform.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">Open App</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .apps-container {
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

    .app-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .app-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .app-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--accent-color);
    }

    .app-card mat-card-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .app-card mat-card-subtitle {
      color: var(--text-secondary);
    }

    .app-card mat-card-content p {
      color: var(--text-secondary);
      line-height: 1.5;
    }
  `]
})
export class AppsComponent {}



