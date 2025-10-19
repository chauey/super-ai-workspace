import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

export interface LearningPathCard {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  iconColor?: string;
  route?: string;
  tags?: string[];
  badge?: 'new' | 'coming-soon' | null;
  status?: 'active' | 'coming-soon' | 'placeholder';
  actionText?: string;
}

@Component({
  selector: 'app-learning-path-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatChipsModule, MatIconModule],
  template: `
    <a
      [routerLink]="card.route || null"
      [class]="'learning-path-card ' + (card.status || 'active')"
      [class.no-link]="!card.route">

      <!-- Top gradient bar (appears on hover) -->
      <div class="card-gradient-bar"></div>

      <!-- Badge (New / Coming Soon) -->
      @if (card.badge) {
        <div class="card-badge">
          <mat-chip [class]="'badge-' + card.badge">
            {{ card.badge === 'new' ? 'New' : 'Coming Soon' }}
          </mat-chip>
        </div>
      }

      <!-- Icon -->
      <div class="card-icon-wrapper">
        <mat-icon
          class="card-icon"
          [style.color]="card.iconColor || 'var(--primary-color)'">
          {{ card.icon }}
        </mat-icon>
      </div>

      <!-- Title & Subtitle -->
      <h3 class="card-title">{{ card.title }}</h3>
      <p class="card-subtitle">{{ card.subtitle }}</p>

      <!-- Description -->
      <p class="card-description">{{ card.description }}</p>

      <!-- Tags -->
      @if (card.tags && card.tags.length > 0) {
        <div class="card-tags">
          @for (tag of card.tags; track tag) {
            <span class="tag">{{ tag }}</span>
          }
        </div>
      }

      <!-- Footer with action link -->
      <div class="card-footer">
        <span class="explore-link">
          {{ card.actionText || (card.status === 'coming-soon' ? 'Preview →' : 'Explore →') }}
        </span>
      </div>
    </a>
  `,
  styles: [`
    .learning-path-card {
      @apply rounded-lg p-6 border transition-all duration-300;
      background-color: var(--bg-card);
      border-color: var(--border-color);
      text-decoration: none;
      display: block;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      &.no-link {
        cursor: default;
      }

      /* Gradient bar at top (hidden by default) */
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        opacity: 0;
        transition: opacity 0.3s;
      }

      &:hover::before {
        opacity: 1;
      }

      /* Active cards (clickable) */
      &.active:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-hover);
        border-color: var(--primary-color);
      }

      /* Coming soon cards */
      &.coming-soon {
        &:hover {
          transform: translateY(-4px);
          border-color: var(--border-color);
        }
      }

      /* Placeholder cards */
      &.placeholder {
        border-style: dashed;
        opacity: 0.6;
        cursor: default;

        &:hover {
          transform: none;
        }
      }
    }

    .card-icon-wrapper {
      margin-bottom: 1.5rem;
    }

    .card-icon {
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
    }

    .card-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 1;
    }

    .badge-new {
      background-color: var(--accent-color) !important;
      color: white !important;
      font-weight: 600;
      font-size: 0.75rem;
    }

    .badge-coming-soon {
      background-color: var(--warn-color) !important;
      color: white !important;
      font-weight: 600;
      font-size: 0.75rem;
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .card-subtitle {
      font-size: 0.875rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .card-description {
      color: var(--text-primary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      min-height: 4.5rem;
    }

    .card-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .tag {
      @apply text-xs px-3 py-1 rounded-full;
      background-color: var(--bg-tertiary);
      color: var(--text-secondary);
      border: 1px solid var(--border-color);
      font-weight: 500;
    }

    .card-footer {
      display: flex;
      justify-content: flex-end;
    }

    .explore-link {
      color: var(--primary-color);
      font-weight: 600;
      font-size: 0.875rem;
      transition: transform 0.2s;
    }

    .learning-path-card:hover .explore-link {
      transform: translateX(4px);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .card-icon {
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
      }

      .card-title {
        font-size: 1.25rem;
      }

      .card-description {
        min-height: auto;
      }
    }
  `]
})
export class LearningPathCardComponent {
  @Input({ required: true }) card!: LearningPathCard;
}

