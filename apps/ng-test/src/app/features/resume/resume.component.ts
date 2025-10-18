import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { marked } from 'marked';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <div class="resume-container">
      <!-- Header -->
      <header class="resume-header">
        <div class="header-content">
          <mat-icon class="header-icon">description</mat-icon>
          <div>
            <h1 class="header-title">Resume</h1>
            <p class="header-subtitle">
              Professional resume with download options
            </p>
          </div>
        </div>
        <div class="header-actions">
          <button mat-raised-button color="primary" (click)="downloadPDF()" class="download-btn">
            <mat-icon>picture_as_pdf</mat-icon>
            Download PDF
          </button>
          <button mat-raised-button color="accent" (click)="downloadWord()" class="download-btn">
            <mat-icon>description</mat-icon>
            Download Word
          </button>
        </div>
      </header>

      <!-- Tabs -->
      <mat-tab-group class="resume-tabs" [selectedIndex]="selectedTab()" (selectedIndexChange)="onTabChange($event)">
        <mat-tab label="One Page Resume">
          <div class="resume-content">
            @if (loading1Page()) {
              <div class="loading-container">
                <mat-progress-spinner mode="indeterminate" diameter="50"></mat-progress-spinner>
                <p>Loading resume...</p>
              </div>
            } @else if (error1Page()) {
              <mat-card class="error-card">
                <mat-card-content>
                  <mat-icon color="warn">error</mat-icon>
                  <p>{{ error1Page() }}</p>
                </mat-card-content>
              </mat-card>
            } @else {
              <div class="markdown-content" [innerHTML]="resume1PageHtml()"></div>
            }
          </div>
        </mat-tab>

        <mat-tab label="Full Resume">
          <div class="resume-content">
            @if (loadingFull()) {
              <div class="loading-container">
                <mat-progress-spinner mode="indeterminate" diameter="50"></mat-progress-spinner>
                <p>Loading resume...</p>
              </div>
            } @else if (errorFull()) {
              <mat-card class="error-card">
                <mat-card-content>
                  <mat-icon color="warn">error</mat-icon>
                  <p>{{ errorFull() }}</p>
                </mat-card-content>
              </mat-card>
            } @else {
              <div class="markdown-content" [innerHTML]="resumeFullHtml()"></div>
            }
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }

    .resume-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: var(--bg-secondary);
    }

    .resume-header {
      background-color: var(--bg-primary);
      border-bottom: 1px solid var(--border-color);
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .header-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--primary-color);
    }

    .header-title {
      margin: 0;
      font-size: 28px;
      font-weight: 600;
      color: var(--text-primary);
    }

    .header-subtitle {
      margin: 4px 0 0 0;
      font-size: 14px;
      color: var(--text-secondary);
    }

    .header-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .download-btn {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .resume-tabs {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .resume-tabs ::ng-deep .mat-mdc-tab-body-wrapper {
      flex: 1;
    }

    .resume-content {
      padding: 24px;
      max-width: 900px;
      margin: 0 auto;
      width: 100%;
      box-sizing: border-box;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px;
      gap: 16px;
      color: var(--text-secondary);
    }

    .error-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      margin: 24px 0;
    }

    .error-card mat-card-content {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .markdown-content {
      background-color: var(--bg-primary);
      padding: 48px;
      border-radius: 8px;
      box-shadow: var(--shadow);
      color: var(--text-primary);
      line-height: 1.8;
    }

    .markdown-content h1 {
      color: var(--primary-color);
      font-size: 32px;
      margin-top: 0;
      margin-bottom: 8px;
    }

    .markdown-content h2 {
      color: var(--text-primary);
      font-size: 24px;
      margin-top: 32px;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--border-color);
    }

    .markdown-content h3 {
      color: var(--text-primary);
      font-size: 20px;
      margin-top: 24px;
      margin-bottom: 12px;
    }

    .markdown-content h4 {
      color: var(--text-primary);
      font-size: 16px;
      margin-top: 16px;
      margin-bottom: 8px;
    }

    .markdown-content p {
      margin: 12px 0;
      color: var(--text-primary);
    }

    .markdown-content strong {
      font-weight: 600;
      color: var(--text-primary);
    }

    .markdown-content ul, .markdown-content ol {
      margin: 12px 0;
      padding-left: 24px;
    }

    .markdown-content li {
      margin: 8px 0;
      color: var(--text-primary);
    }

    .markdown-content hr {
      border: none;
      border-top: 1px solid var(--border-color);
      margin: 24px 0;
    }

    .markdown-content a {
      color: var(--primary-color);
      text-decoration: none;
    }

    .markdown-content a:hover {
      text-decoration: underline;
    }

    .markdown-content code {
      background-color: var(--bg-tertiary);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
    }

    .markdown-content pre {
      background-color: var(--bg-tertiary);
      padding: 16px;
      border-radius: 6px;
      overflow-x: auto;
    }

    .markdown-content pre code {
      background-color: transparent;
      padding: 0;
    }

    @media (max-width: 768px) {
      .resume-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .header-actions {
        width: 100%;
      }

      .download-btn {
        flex: 1;
      }

      .markdown-content {
        padding: 24px 16px;
      }

      .resume-content {
        padding: 16px;
      }
    }

    @media print {
      .resume-header,
      .resume-tabs ::ng-deep .mat-mdc-tab-header {
        display: none;
      }

      .markdown-content {
        box-shadow: none;
        padding: 0;
      }
    }
  `]
})
export class ResumeComponent implements OnInit {
  private http = inject(HttpClient);

  resume1PageHtml = signal<string>('');
  resumeFullHtml = signal<string>('');
  loading1Page = signal<boolean>(true);
  loadingFull = signal<boolean>(false);
  error1Page = signal<string>('');
  errorFull = signal<string>('');
  selectedTab = signal<number>(0);

  ngOnInit() {
    this.loadResume('1page');
  }

  onTabChange(index: number) {
    this.selectedTab.set(index);
    if (index === 0 && !this.resume1PageHtml()) {
      this.loadResume('1page');
    } else if (index === 1 && !this.resumeFullHtml()) {
      this.loadResume('full');
    }
  }

  async loadResume(type: '1page' | 'full') {
    const file = type === '1page' ? 'resume-1page.md' : 'resume-full.md';
    const loading = type === '1page' ? this.loading1Page : this.loadingFull;
    const error = type === '1page' ? this.error1Page : this.errorFull;
    const html = type === '1page' ? this.resume1PageHtml : this.resumeFullHtml;

    loading.set(true);
    error.set('');

    try {
      const markdown = await this.http.get(`/assets/${file}`, { responseType: 'text' }).toPromise();
      if (markdown) {
        const renderedHtml = await marked(markdown);
        html.set(renderedHtml);
      }
    } catch (err) {
      console.error('Error loading resume:', err);
      error.set('Failed to load resume. Please try again later.');
    } finally {
      loading.set(false);
    }
  }

  downloadPDF() {
    // In a real application, you would generate a PDF from the markdown
    // For now, we'll just show an alert
    alert('PDF download functionality would be implemented here.\n\nOptions:\n1. Use a library like jsPDF or pdfmake\n2. Use a server-side service to generate PDF\n3. Use browser print to PDF feature');
    window.print();
  }

  downloadWord() {
    // In a real application, you would generate a Word document
    // For now, we'll just show an alert
    alert('Word document download functionality would be implemented here.\n\nOptions:\n1. Use a library like docx\n2. Use a server-side service to generate DOCX\n3. Convert markdown to HTML and download as .doc');
  }
}

