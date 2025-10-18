import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface DocFile {
  id: string;
  title: string;
  path: string;
  category: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <div class="docs-container">
      <!-- Header -->
      <div class="docs-header bg-card rounded-lg shadow-themed p-6 mb-6">
        <div class="flex items-center gap-4 mb-4">
          <mat-icon class="text-primary text-5xl">menu_book</mat-icon>
          <div>
            <h1 class="text-3xl font-bold text-primary">Documentation</h1>
            <p class="text-secondary">Developer guides, architecture, and best practices</p>
          </div>
        </div>
        <div class="flex gap-2 flex-wrap">
          <button
            mat-raised-button
            [color]="selectedCategory() === 'all' ? 'primary' : ''"
            (click)="filterByCategory('all')">
            <mat-icon>all_inbox</mat-icon> All
          </button>
          <button
            mat-raised-button
            [color]="selectedCategory() === 'styling' ? 'primary' : ''"
            (click)="filterByCategory('styling')">
            <mat-icon>palette</mat-icon> Styling
          </button>
          <button
            mat-raised-button
            [color]="selectedCategory() === 'architecture' ? 'primary' : ''"
            (click)="filterByCategory('architecture')">
            <mat-icon>architecture</mat-icon> Architecture
          </button>
          <button
            mat-raised-button
            [color]="selectedCategory() === 'features' ? 'primary' : ''"
            (click)="filterByCategory('features')">
            <mat-icon>widgets</mat-icon> Features
          </button>
        </div>
      </div>

      <div class="docs-layout">
        <!-- Sidebar with doc list -->
        <div class="docs-sidebar bg-card rounded-lg shadow-themed p-4">
          <h3 class="text-lg font-semibold text-primary mb-4">Documents</h3>
          <mat-nav-list>
            @for (doc of filteredDocs(); track doc.id) {
              <a
                mat-list-item
                (click)="loadDoc(doc)"
                [class.active]="selectedDoc()?.id === doc.id"
                class="doc-item">
                <mat-icon matListItemIcon>{{ doc.icon }}</mat-icon>
                <div matListItemTitle class="doc-title">{{ doc.title }}</div>
                <mat-chip matListItemMeta class="category-chip">{{ doc.category }}</mat-chip>
              </a>
            }
            @empty {
              <div class="text-center text-secondary py-4">
                <mat-icon class="text-4xl">description</mat-icon>
                <p>No documents found</p>
              </div>
            }
          </mat-nav-list>
        </div>

        <!-- Content area -->
        <div class="docs-content bg-card rounded-lg shadow-themed">
          @if (loading()) {
            <div class="loading-state">
              <mat-spinner diameter="50"></mat-spinner>
              <p class="text-secondary mt-4">Loading documentation...</p>
            </div>
          } @else if (selectedDoc()) {
            <div class="doc-header">
              <div class="flex items-center gap-3 mb-2">
                <mat-icon class="text-primary text-3xl">{{ selectedDoc()!.icon }}</mat-icon>
                <h2 class="text-2xl font-bold text-primary">{{ selectedDoc()!.title }}</h2>
              </div>
              <p class="text-secondary mb-4">{{ selectedDoc()!.description }}</p>
              <mat-chip class="category-badge">{{ selectedDoc()!.category }}</mat-chip>
            </div>
            <div class="doc-body markdown-content" [innerHTML]="renderedContent()"></div>
          } @else {
            <div class="empty-state">
              <mat-icon class="text-6xl text-primary mb-4">menu_book</mat-icon>
              <h3 class="text-xl font-semibold text-primary mb-2">Select a document</h3>
              <p class="text-secondary">Choose a document from the sidebar to view its contents</p>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .docs-container {
      padding: 2rem;
      max-width: 1600px;
      margin: 0 auto;
      background-color: var(--bg-secondary);
      min-height: 100vh;
    }

    .docs-layout {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 1.5rem;
    }

    .docs-sidebar {
      height: fit-content;
      max-height: calc(100vh - 300px);
      overflow-y: auto;
      position: sticky;
      top: 1rem;
    }

    .doc-item {
      border-radius: 8px;
      margin-bottom: 0.5rem;
      transition: all 0.2s;

      &:hover {
        background-color: var(--bg-tertiary) !important;
      }

      &.active {
        background-color: var(--primary-color) !important;
        color: white !important;

        mat-icon {
          color: white !important;
        }

        .category-chip {
          background-color: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
        }
      }
    }

    .doc-title {
      font-weight: 500;
    }

    .category-chip {
      font-size: 0.7rem;
      padding: 2px 8px;
      height: auto;
      min-height: 20px;
    }

    .docs-content {
      padding: 2rem;
      min-height: 600px;
    }

    .doc-header {
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 2rem;
    }

    .category-badge {
      background-color: var(--primary-color) !important;
      color: white !important;
    }

    .doc-body {
      line-height: 1.8;
    }

    .loading-state,
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      text-align: center;
    }

    /* Markdown Styles */
    .markdown-content {
      color: var(--text-primary);

      h1, h2, h3, h4, h5, h6 {
        color: var(--text-primary);
        font-weight: 700;
        margin-top: 2rem;
        margin-bottom: 1rem;
        line-height: 1.3;
      }

      h1 { font-size: 2.5rem; }
      h2 { font-size: 2rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; }
      h3 { font-size: 1.5rem; }
      h4 { font-size: 1.25rem; }

      p {
        margin-bottom: 1rem;
        color: var(--text-primary);
      }

      a {
        color: var(--primary-color);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }

      code {
        background-color: var(--bg-tertiary);
        color: var(--text-primary);
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
      }

      pre {
        background-color: var(--bg-tertiary);
        color: var(--text-primary);
        padding: 1rem;
        border-radius: 8px;
        overflow-x: auto;
        margin: 1.5rem 0;
        border: 1px solid var(--border-color);

        code {
          background: none;
          padding: 0;
        }
      }

      ul, ol {
        margin-bottom: 1rem;
        padding-left: 2rem;
        color: var(--text-primary);
      }

      li {
        margin-bottom: 0.5rem;
      }

      blockquote {
        border-left: 4px solid var(--primary-color);
        padding-left: 1rem;
        margin: 1.5rem 0;
        color: var(--text-secondary);
        font-style: italic;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
        background-color: var(--bg-primary);
      }

      th, td {
        padding: 0.75rem;
        text-align: left;
        border: 1px solid var(--border-color);
      }

      th {
        background-color: var(--bg-secondary);
        font-weight: 600;
        color: var(--text-primary);
      }

      td {
        color: var(--text-primary);
      }

      hr {
        border: none;
        border-top: 2px solid var(--border-color);
        margin: 2rem 0;
      }

      img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 1rem 0;
      }

      .highlight {
        background-color: rgba(255, 193, 7, 0.2);
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
      }
    }

    @media (max-width: 1024px) {
      .docs-layout {
        grid-template-columns: 1fr;
      }

      .docs-sidebar {
        position: static;
        max-height: none;
      }
    }

    @media (max-width: 768px) {
      .docs-container {
        padding: 1rem;
      }

      .docs-content {
        padding: 1rem;
      }
    }
  `],
})
export class DocsComponent implements OnInit {
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  selectedDoc = signal<DocFile | null>(null);
  selectedCategory = signal<string>('all');
  loading = signal(false);
  renderedContent = signal<SafeHtml>('');

  docs: DocFile[] = [
    {
      id: 'styling-architecture',
      title: 'Styling Architecture',
      path: 'STYLING-ARCHITECTURE.md',
      category: 'styling',
      icon: 'palette',
      description: 'Complete guide to our Tailwind + Material + Custom CSS architecture'
    },
    {
      id: 'styling-cheatsheet',
      title: 'Styling Cheat Sheet',
      path: 'STYLING-CHEATSHEET.md',
      category: 'styling',
      icon: 'style',
      description: 'Quick reference for common styling patterns and utilities'
    },
    {
      id: 'theming-guide',
      title: 'Theming Guide',
      path: 'THEMING-GUIDE.md',
      category: 'styling',
      icon: 'dark_mode',
      description: 'Enterprise-grade theming system with dark mode support'
    },
    {
      id: 'design-system',
      title: 'Design System Overview',
      path: 'DESIGN-SYSTEM-SUMMARY.md',
      category: 'features',
      icon: 'dashboard',
      description: 'Comprehensive UI Kit with AG Grid and component library'
    },
    {
      id: 'design-system-readme',
      title: 'Design System Implementation',
      path: 'src/app/angular/design-system/README.md',
      category: 'features',
      icon: 'construction',
      description: 'Technical implementation details and usage guide'
    },
    {
      id: 'top-level-nav',
      title: 'Top-Level Navigation',
      path: 'TOP-LEVEL-NAVIGATION-SUMMARY.md',
      category: 'architecture',
      icon: 'account_tree',
      description: 'Navigation structure and routing architecture'
    },
    {
      id: 'readme-styling',
      title: 'Styling System Overview',
      path: 'README-STYLING.md',
      category: 'styling',
      icon: 'info',
      description: 'Quick start guide to the styling system'
    }
  ];

  filteredDocs = signal<DocFile[]>(this.docs);

  ngOnInit() {
    // Load first doc by default
    if (this.docs.length > 0) {
      this.loadDoc(this.docs[0]);
    }
  }

  filterByCategory(category: string) {
    this.selectedCategory.set(category);
    if (category === 'all') {
      this.filteredDocs.set(this.docs);
    } else {
      this.filteredDocs.set(this.docs.filter(doc => doc.category === category));
    }
  }

  async loadDoc(doc: DocFile) {
    this.selectedDoc.set(doc);
    this.loading.set(true);

    try {
      // Try to load from assets first, fallback to root
      const content = await this.http.get(`assets/docs/${doc.path}`, { responseType: 'text' }).toPromise()
        .catch(() => this.http.get(doc.path, { responseType: 'text' }).toPromise());

      if (content) {
        const html = await marked.parse(content);
        this.renderedContent.set(this.sanitizer.sanitize(1, html) || '');
      }
    } catch (error) {
      console.error('Error loading document:', error);
      const errorHtml = `
        <div class="error-message">
          <h3>📄 Document Preview</h3>
          <p>Document: <strong>${doc.title}</strong></p>
          <p>Category: <strong>${doc.category}</strong></p>
          <p>Path: <code>${doc.path}</code></p>
          <hr>
          <p><em>Note: This is a preview. The actual markdown file will be loaded once the assets are properly configured.</em></p>
        </div>
      `;
      this.renderedContent.set(this.sanitizer.sanitize(1, errorHtml) || '');
    } finally {
      this.loading.set(false);
    }
  }
}

