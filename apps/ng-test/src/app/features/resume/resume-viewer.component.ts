import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resume-viewer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  template: `
    <div class="resume-viewer-container">
      <div class="resume-header">
        <div class="header-content">
          <mat-icon class="header-icon">description</mat-icon>
          <div class="header-text">
            <h1>{{ resumeTitle }}</h1>
            <p class="subtitle">{{ username }} - {{ slug }}</p>
          </div>
        </div>
        <div class="header-actions">
          <button mat-button (click)="goBack()">
            <mat-icon>arrow_back</mat-icon>
            Back to Resume
          </button>
          <button mat-button (click)="downloadResume()" [disabled]="loading()">
            <mat-icon>download</mat-icon>
            Download
          </button>
        </div>
      </div>

      <div class="resume-content">
        @if (loading()) {
          <div class="loading-container">
            <mat-spinner diameter="50"></mat-spinner>
            <p>Loading resume...</p>
          </div>
        } @else if (error()) {
          <div class="error-container">
            <mat-icon class="error-icon">error</mat-icon>
            <h2>Resume Not Found</h2>
            <p>{{ error() }}</p>
            <button mat-button color="primary" (click)="goBack()">
              <mat-icon>arrow_back</mat-icon>
              Back to Resume
            </button>
          </div>
        } @else {
          <mat-card class="resume-card">
            <mat-card-content>
              <div class="markdown-content" [innerHTML]="markdownContent()"></div>
            </mat-card-content>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .resume-viewer-container {
      padding: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .resume-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.5rem 2rem;
      margin-bottom: 2rem;
      box-shadow: var(--shadow-sm);
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .header-icon {
      font-size: 2.5rem;
      width: 2.5rem;
      height: 2.5rem;
      color: var(--primary-color);
    }

    .header-text h1 {
      margin: 0;
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .header-text .subtitle {
      margin: 0;
      color: var(--text-secondary);
      font-size: 1rem;
    }

    .header-actions {
      display: flex;
      gap: 1rem;
    }

    .resume-content {
      min-height: 400px;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      text-align: center;
    }

    .loading-container p {
      margin-top: 1rem;
      color: var(--text-secondary);
    }

    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      text-align: center;
    }

    .error-icon {
      font-size: 4rem;
      width: 4rem;
      height: 4rem;
      color: var(--warn-color);
      margin-bottom: 1rem;
    }

    .error-container h2 {
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .error-container p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }

    .resume-card {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
    }

    .markdown-content {
      color: var(--text-primary);
      line-height: 1.7;
      font-size: 1rem;
    }

    .markdown-content h1,
    .markdown-content h2,
    .markdown-content h3,
    .markdown-content h4,
    .markdown-content h5,
    .markdown-content h6 {
      color: var(--text-primary);
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    .markdown-content h1 {
      font-size: 2rem;
      border-bottom: 2px solid var(--border-color);
      padding-bottom: 0.5rem;
    }

    .markdown-content h2 {
      font-size: 1.5rem;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 0.25rem;
    }

    .markdown-content p {
      margin-bottom: 1rem;
      color: var(--text-secondary);
    }

    .markdown-content ul,
    .markdown-content ol {
      margin-bottom: 1rem;
      padding-left: 2rem;
    }

    .markdown-content li {
      margin-bottom: 0.5rem;
      color: var(--text-secondary);
    }

    .markdown-content strong {
      color: var(--text-primary);
      font-weight: 600;
    }

    .markdown-content code {
      background-color: var(--bg-tertiary);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
    }

    .markdown-content pre {
      background-color: var(--bg-tertiary);
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
      margin-bottom: 1rem;
    }

    .markdown-content blockquote {
      border-left: 4px solid var(--primary-color);
      padding-left: 1rem;
      margin: 1rem 0;
      color: var(--text-secondary);
      font-style: italic;
    }

    @media (max-width: 768px) {
      .resume-viewer-container {
        padding: 1rem;
      }

      .resume-header {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .header-actions {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class ResumeViewerComponent implements OnInit {
  username = '';
  slug = '';
  loading = signal(true);
  error = signal('');
  markdownContent = signal('');

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.slug = params['slug'];
      this.loadResume();
    });
  }

  get resumeTitle(): string {
    return this.slug === 'one-pager' ? 'One-Pager Resume' : 'Full Resume';
  }

  private loadResume() {
    this.loading.set(true);
    this.error.set('');

    const markdownPath = `/assets/resume/data/${this.username}/${this.slug}.md`;

    this.http.get(markdownPath, { responseType: 'text' }).subscribe({
      next: (content) => {
        this.markdownContent.set(this.parseMarkdown(content));
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading resume:', err);
        this.error.set(`Resume "${this.slug}" not found for user "${this.username}"`);
        this.loading.set(false);
      }
    });
  }

  private parseMarkdown(content: string): string {
    // Simple markdown parsing - convert to HTML
    return content
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
      .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
      .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(?!<[h|l])/gm, '<p>')
      .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
      .replace(/<\/p><p><\/p>/g, '')
      .replace(/<p><\/p>/g, '');
  }

  goBack() {
    window.history.back();
  }

  downloadResume() {
    const content = this.markdownContent();
    if (!content) return;

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${this.username}-${this.slug}.md`;
    link.click();
    window.URL.revokeObjectURL(url);

    this.snackBar.open('Resume downloaded successfully', 'Close', {
      duration: 3000
    });
  }
}
