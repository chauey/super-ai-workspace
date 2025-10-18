import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
// import { TranslocoModule } from '@jsverse/transloco';

interface DashboardCard {
  title: string;
  value: string | number;
  icon: string;
  color: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

interface Activity {
  title: string;
  description: string;
  time: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressBarModule,
    MatChipsModule,
    // TranslocoModule
  ],
  template: `
    <div class="dashboard-container">
      <!-- Header Section -->
      <div class="dashboard-header">
        <div class="header-content">
          <h1 class="dashboard-title">Welcome to Super AI</h1>
          <p class="dashboard-subtitle">Your intelligent workspace</p>
        </div>
        <div class="header-actions">
          <button mat-raised-button color="primary">
            <mat-icon>add</mat-icon>
            New Project
          </button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="stats-grid">
        <mat-card
          *ngFor="let card of dashboardCards"
          class="stat-card"
          [ngClass]="'card-' + card.color">
          <mat-card-content>
            <div class="stat-content">
              <div class="stat-info">
                <div class="stat-value">{{ card.value }}</div>
                <div class="stat-title">{{ card.title }}</div>
                <div class="stat-trend" *ngIf="card.trend">
                  <mat-icon
                    [class.trend-up]="card.trend.isPositive"
                    [class.trend-down]="!card.trend.isPositive">
                    {{ card.trend.isPositive ? 'trending_up' : 'trending_down' }}
                  </mat-icon>
                  <span>{{ card.trend.value }}%</span>
                </div>
              </div>
              <div class="stat-icon">
                <mat-icon>{{ card.icon }}</mat-icon>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Main Content Grid -->
      <div class="content-grid">
        <!-- Chart Card -->
        <mat-card class="chart-card">
          <mat-card-header>
            <mat-card-title>Analytics Overview</mat-card-title>
            <mat-card-subtitle>Last 30 days performance</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="chart-placeholder">
              <mat-icon class="chart-icon">bar_chart</mat-icon>
              <p>Chart visualization would go here</p>
              <div class="progress-indicators">
                <div class="progress-item">
                  <span>CPU Usage</span>
                  <mat-progress-bar mode="determinate" value="75" color="primary"></mat-progress-bar>
                  <span>75%</span>
                </div>
                <div class="progress-item">
                  <span>Memory</span>
                  <mat-progress-bar mode="determinate" value="45" color="accent"></mat-progress-bar>
                  <span>45%</span>
                </div>
                <div class="progress-item">
                  <span>Storage</span>
                  <mat-progress-bar mode="determinate" value="60" color="warn"></mat-progress-bar>
                  <span>60%</span>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Activity Feed -->
        <mat-card class="activity-card">
          <mat-card-header>
            <mat-card-title>Recent Activity</mat-card-title>
            <mat-card-subtitle>Latest system events</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="activity-list">
              <div
                *ngFor="let activity of activities"
                class="activity-item">
                <div class="activity-icon" [ngClass]="'icon-' + activity.color">
                  <mat-icon>{{ activity.icon }}</mat-icon>
                </div>
                <div class="activity-content">
                  <div class="activity-title">{{ activity.title }}</div>
                  <div class="activity-description">{{ activity.description }}</div>
                  <div class="activity-time">{{ activity.time }}</div>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Quick Actions -->
        <mat-card class="actions-card">
          <mat-card-header>
            <mat-card-title>Quick Actions</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="actions-grid">
              <button mat-stroked-button class="action-btn">
                <mat-icon>person_add</mat-icon>
                Add User
              </button>
              <button mat-stroked-button class="action-btn">
                <mat-icon>folder_open</mat-icon>
                New Project
              </button>
              <button mat-stroked-button class="action-btn">
                <mat-icon>settings</mat-icon>
                Settings
              </button>
              <button mat-stroked-button class="action-btn">
                <mat-icon>help</mat-icon>
                Help
              </button>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Status Overview -->
        <mat-card class="status-card">
          <mat-card-header>
            <mat-card-title>System Status</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="status-items">
              <div class="status-item">
                <mat-chip-set>
                  <mat-chip color="primary">
                    <mat-icon matChipAvatar>cloud</mat-icon>
                    Online
                  </mat-chip>
                </mat-chip-set>
              </div>
              <div class="status-item">
                <mat-chip-set>
                  <mat-chip color="accent">
                    <mat-icon matChipAvatar>security</mat-icon>
                    Secure
                  </mat-chip>
                </mat-chip-set>
              </div>
              <div class="status-item">
                <mat-chip-set>
                  <mat-chip>
                    <mat-icon matChipAvatar>update</mat-icon>
                    Updated
                  </mat-chip>
                </mat-chip-set>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0;
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 32px;
      gap: 24px;
    }

    .header-content {
      flex: 1;
    }

    .dashboard-title {
      font-size: 32px;
      font-weight: 300;
      margin: 0 0 8px 0;
      color: var(--mat-primary-color);
    }

    .dashboard-subtitle {
      font-size: 16px;
      color: rgba(0,0,0,0.6);
      margin: 0;
    }

    .header-actions {
      flex-shrink: 0;
    }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
      margin-bottom: 32px;
    }

    .stat-card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      }
    }

    .stat-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .stat-info {
      flex: 1;
    }

    .stat-value {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .stat-title {
      font-size: 14px;
      color: rgba(0,0,0,0.6);
      margin-bottom: 8px;
    }

    .stat-trend {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;

      .trend-up {
        color: #4caf50;
      }

      .trend-down {
        color: #f44336;
      }
    }

    .stat-icon {
      mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        opacity: 0.6;
      }
    }

    /* Card Colors */
    .card-primary .stat-value { color: var(--mat-primary-color); }
    .card-accent .stat-value { color: var(--mat-accent-color); }
    .card-warn .stat-value { color: var(--mat-warn-color); }
    .card-success .stat-value { color: #4caf50; }

    /* Content Grid */
    .content-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: auto auto;
      gap: 24px;
    }

    .chart-card {
      grid-row: span 2;
    }

    .chart-placeholder {
      text-align: center;
      padding: 40px 20px;
      color: rgba(0,0,0,0.6);
    }

    .chart-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    .progress-indicators {
      margin-top: 32px;
      text-align: left;
    }

    .progress-item {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 16px;

      span:first-child {
        min-width: 80px;
        font-size: 14px;
      }

      mat-progress-bar {
        flex: 1;
      }

      span:last-child {
        min-width: 40px;
        font-size: 14px;
        font-weight: 500;
      }
    }

    /* Activity Feed */
    .activity-list {
      max-height: 400px;
      overflow-y: auto;
    }

    .activity-item {
      display: flex;
      gap: 16px;
      padding: 16px 0;
      border-bottom: 1px solid rgba(0,0,0,0.06);

      &:last-child {
        border-bottom: none;
      }
    }

    .activity-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      &.icon-primary { background: rgba(var(--mat-primary-color-rgb), 0.1); color: var(--mat-primary-color); }
      &.icon-accent { background: rgba(var(--mat-accent-color-rgb), 0.1); color: var(--mat-accent-color); }
      &.icon-warn { background: rgba(var(--mat-warn-color-rgb), 0.1); color: var(--mat-warn-color); }
      &.icon-success { background: rgba(76, 175, 80, 0.1); color: #4caf50; }

      mat-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }
    }

    .activity-content {
      flex: 1;
    }

    .activity-title {
      font-weight: 500;
      margin-bottom: 4px;
    }

    .activity-description {
      font-size: 14px;
      color: rgba(0,0,0,0.6);
      margin-bottom: 4px;
    }

    .activity-time {
      font-size: 12px;
      color: rgba(0,0,0,0.4);
    }

    /* Quick Actions */
    .actions-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .action-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 16px;
      height: auto;
      gap: 8px;

      mat-icon {
        font-size: 32px;
        width: 32px;
        height: 32px;
      }
    }

    /* Status Items */
    .status-items {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    /* Dark theme adjustments */
    :host-context(.dark-theme) {
      .dashboard-subtitle,
      .stat-title,
      .chart-placeholder,
      .activity-description {
        color: rgba(255,255,255,0.6);
      }

      .activity-time {
        color: rgba(255,255,255,0.4);
      }

      .activity-item {
        border-bottom-color: rgba(255,255,255,0.06);
      }
    }

    /* Responsive Design */
    @media (max-width: 1200px) {
      .content-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }

      .chart-card {
        grid-row: auto;
      }
    }

    @media (max-width: 768px) {
      .dashboard-header {
        flex-direction: column;
        align-items: stretch;
        gap: 16px;
      }

      .dashboard-title {
        font-size: 24px;
      }

      .stats-grid {
        grid-template-columns: 1fr;
        gap: 16px;
        margin-bottom: 24px;
      }

      .content-grid {
        gap: 16px;
      }

      .actions-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }

      .stat-content {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
      }

      .dashboard-title {
        font-size: 20px;
      }
    }
  `]
})
export class DashboardComponent {
  dashboardCards: DashboardCard[] = [
    {
      title: 'Users',
      value: '1,234',
      icon: 'people',
      color: 'primary',
      trend: { value: 12, isPositive: true }
    },
    {
      title: 'Projects',
      value: '56',
      icon: 'folder',
      color: 'accent',
      trend: { value: 8, isPositive: true }
    },
    {
      title: 'Tasks',
      value: '789',
      icon: 'task',
      color: 'warn',
      trend: { value: 3, isPositive: false }
    },
    {
      title: 'Revenue',
      value: '$45.2K',
      icon: 'attach_money',
      color: 'success',
      trend: { value: 15, isPositive: true }
    }
  ];

  activities: Activity[] = [
    {
      title: 'New user registered',
      description: 'John Doe joined the platform',
      time: '2 minutes ago',
      icon: 'person_add',
      color: 'primary'
    },
    {
      title: 'Project completed',
      description: 'AI Dashboard project has been completed',
      time: '1 hour ago',
      icon: 'check_circle',
      color: 'success'
    },
    {
      title: 'System update',
      description: 'Security patch applied successfully',
      time: '3 hours ago',
      icon: 'system_update',
      color: 'accent'
    },
    {
      title: 'Backup completed',
      description: 'Daily backup process finished',
      time: '1 day ago',
      icon: 'backup',
      color: 'warn'
    }
  ];
}
