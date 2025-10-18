import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-ai-900',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatChipsModule],
  template: `
    <div class="feature-container">
      <div class="bg-card rounded-lg shadow-themed p-8 max-w-4xl mx-auto">
        <div class="flex items-center gap-4 mb-6">
          <mat-icon class="text-primary text-5xl">psychology</mat-icon>
          <div>
            <h1 class="text-3xl font-bold text-primary">AI-900: Azure AI Fundamentals</h1>
            <p class="text-secondary">Microsoft Azure AI certification preparation</p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="flex gap-2 flex-wrap mb-6">
            <mat-chip>AI Fundamentals</mat-chip>
            <mat-chip>Machine Learning</mat-chip>
            <mat-chip>Computer Vision</mat-chip>
            <mat-chip>NLP</mat-chip>
            <mat-chip>Cognitive Services</mat-chip>
          </div>

          <div class="bg-content rounded-lg p-6">
            <h2 class="text-xl font-semibold text-primary mb-4">Exam Topics</h2>
            <p class="text-secondary mb-4">
              This section will cover all AI-900 exam objectives:
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">Describe Artificial Intelligence workloads and considerations</span>
              </li>
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">Describe fundamental principles of machine learning on Azure</span>
              </li>
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">Describe features of computer vision workloads on Azure</span>
              </li>
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">Describe features of Natural Language Processing (NLP) workloads on Azure</span>
              </li>
              <li class="flex items-start gap-2">
                <mat-icon class="text-primary">check_circle</mat-icon>
                <span class="text-secondary">Describe features of generative AI workloads on Azure</span>
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-subtle rounded-lg p-4">
              <h3 class="font-semibold text-primary mb-2">🎓 Certification</h3>
              <p class="text-secondary text-sm">
                Microsoft Certified: Azure AI Fundamentals
              </p>
            </div>
            <div class="bg-subtle rounded-lg p-4">
              <h3 class="font-semibold text-primary mb-2">⏱️ Exam Duration</h3>
              <p class="text-secondary text-sm">
                45 minutes • 40-60 questions
              </p>
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
export class Ai900Component {}

