import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-az-900',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatChipsModule],
  template: `
    <div class="feature-container">
      <div class="bg-card rounded-lg shadow-themed p-8 max-w-4xl mx-auto">
        <div class="flex items-center gap-4 mb-6">
          <mat-icon class="text-primary text-5xl">cloud</mat-icon>
          <div>
            <h1 class="text-3xl font-bold text-primary">AZ-900: Azure Fundamentals</h1>
            <p class="text-secondary">Microsoft Azure certification preparation</p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="flex gap-2 flex-wrap mb-6">
            <mat-chip>Cloud Concepts</mat-chip>
            <mat-chip>Azure Services</mat-chip>
            <mat-chip>Security</mat-chip>
            <mat-chip>Pricing</mat-chip>
            <mat-chip>Governance</mat-chip>
          </div>

          <div class="bg-content rounded-lg p-6">
            <h2 class="text-xl font-semibold text-primary mb-4">Exam Topics</h2>
            <p class="text-secondary mb-4">
              This section will cover all AZ-900 exam objectives:
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">Describe cloud concepts (25-30%)</span>
              </li>
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">Describe Azure architecture and services (35-40%)</span>
              </li>
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">Describe Azure management and governance (30-35%)</span>
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-subtle rounded-lg p-4">
              <h3 class="font-semibold text-primary mb-2">🎓 Certification</h3>
              <p class="text-secondary text-sm">
                Microsoft Certified: Azure Fundamentals
              </p>
            </div>
            <div class="bg-subtle rounded-lg p-4">
              <h3 class="font-semibold text-primary mb-2">⏱️ Exam Duration</h3>
              <p class="text-secondary text-sm">
                60 minutes • 40-60 questions
              </p>
            </div>
            <div class="bg-subtle rounded-lg p-4">
              <h3 class="font-semibold text-primary mb-2">💰 Cost</h3>
              <p class="text-secondary text-sm">
                $99 USD
              </p>
            </div>
          </div>

          <div class="bg-content rounded-lg p-6">
            <h3 class="text-lg font-semibold text-primary mb-4">Key Azure Services</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="flex items-start gap-2">
                <mat-icon class="text-primary text-sm">storage</mat-icon>
                <span class="text-secondary text-sm">Azure Virtual Machines</span>
              </div>
              <div class="flex items-start gap-2">
                <mat-icon class="text-primary text-sm">storage</mat-icon>
                <span class="text-secondary text-sm">Azure App Service</span>
              </div>
              <div class="flex items-start gap-2">
                <mat-icon class="text-primary text-sm">storage</mat-icon>
                <span class="text-secondary text-sm">Azure Functions</span>
              </div>
              <div class="flex items-start gap-2">
                <mat-icon class="text-primary text-sm">storage</mat-icon>
                <span class="text-secondary text-sm">Azure Storage</span>
              </div>
              <div class="flex items-start gap-2">
                <mat-icon class="text-primary text-sm">database</mat-icon>
                <span class="text-secondary text-sm">Azure SQL Database</span>
              </div>
              <div class="flex items-start gap-2">
                <mat-icon class="text-primary text-sm">network_check</mat-icon>
                <span class="text-secondary text-sm">Azure Networking</span>
              </div>
            </div>
          </div>

          <div class="bg-subtle rounded-lg p-6 border-l-4 border-primary">
            <h3 class="font-semibold text-primary mb-2">📚 Placeholder</h3>
            <p class="text-secondary text-sm">
              This is a placeholder page. Study materials and practice questions will be added in future updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .feature-container {
        padding: 2rem;
        min-height: 100vh;
        background-color: var(--bg-secondary);
      }
    `,
  ],
})
export class Az900Component {}

