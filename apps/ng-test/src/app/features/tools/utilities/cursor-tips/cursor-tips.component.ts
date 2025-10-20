import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

interface CursorTip {
  id: string;
  title: string;
  description: string;
  category: 'Productivity' | 'Navigation' | 'AI Features' | 'Customization' | 'Debugging';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  steps: string[];
  videoUrl?: string;
  shortcut?: string;
}

@Component({
  selector: 'app-cursor-tips',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule
  ],
  template: `
    <div class="cursor-tips-container">
      <div class="header">
        <h1>Cursor IDE Tips & Tricks</h1>
        <p>Boost your productivity with these powerful Cursor IDE features and shortcuts</p>
      </div>

      <div class="filters">
        <mat-chip-set>
          <mat-chip
            *ngFor="let category of categories"
            [class.selected]="selectedCategory() === category"
            (click)="filterByCategory(category)"
            class="filter-chip">
            {{ category }}
          </mat-chip>
        </mat-chip-set>
      </div>

      <div class="tips-grid">
        <mat-card *ngFor="let tip of filteredTips()" class="tip-card">
          <mat-card-header>
            <div class="tip-header">
              <h3>{{ tip.title }}</h3>
              <div class="tip-meta">
                <mat-chip [class]="'difficulty-' + tip.difficulty.toLowerCase()">
                  {{ tip.difficulty }}
                </mat-chip>
                <mat-chip class="category-chip">
                  {{ tip.category }}
                </mat-chip>
              </div>
            </div>
          </mat-card-header>

          <mat-card-content>
            <p class="description">{{ tip.description }}</p>

            <div class="shortcut" *ngIf="tip.shortcut">
              <mat-icon>keyboard</mat-icon>
              <span><strong>Shortcut:</strong> {{ tip.shortcut }}</span>
            </div>

            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>How to use</mat-panel-title>
              </mat-expansion-panel-header>
              <ol>
                <li *ngFor="let step of tip.steps">{{ step }}</li>
              </ol>
            </mat-expansion-panel>

            <div class="tags">
              <mat-chip-set>
                <mat-chip *ngFor="let tag of tip.tags" class="tag-chip">
                  {{ tag }}
                </mat-chip>
              </mat-chip-set>
            </div>

            <div class="actions" *ngIf="tip.videoUrl">
              <button mat-button color="primary" (click)="openVideo(tip.videoUrl!)">
                <mat-icon>play_circle</mat-icon>
                Watch Video
              </button>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .cursor-tips-container {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 32px;
    }

    .header h1 {
      color: var(--primary-color);
      margin-bottom: 8px;
    }

    .header p {
      color: var(--text-secondary);
      font-size: 1.1rem;
    }

    .filters {
      margin-bottom: 24px;
      display: flex;
      justify-content: center;
    }

    .filter-chip {
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .filter-chip:hover {
      transform: translateY(-2px);
    }

    .filter-chip.selected {
      background-color: var(--primary-color);
      color: white;
    }

    .tips-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      gap: 24px;
    }

    .tip-card {
      height: fit-content;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .tip-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .tip-header {
      width: 100%;
    }

    .tip-header h3 {
      margin: 0 0 12px 0;
      color: var(--text-primary);
    }

    .tip-meta {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .difficulty-beginner {
      background-color: #e8f5e8;
      color: #2e7d32;
    }

    .difficulty-intermediate {
      background-color: #fff3e0;
      color: #f57c00;
    }

    .difficulty-advanced {
      background-color: #ffebee;
      color: #c62828;
    }

    .category-chip {
      background-color: var(--primary-light);
      color: var(--primary-color);
    }

    .description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .shortcut {
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: var(--surface-variant);
      padding: 8px 12px;
      border-radius: 8px;
      margin-bottom: 16px;
      font-family: 'Courier New', monospace;
    }

    .shortcut mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    .tags {
      margin-top: 16px;
    }

    .tag-chip {
      font-size: 0.8rem;
      height: 24px;
    }

    .actions {
      margin-top: 16px;
      text-align: right;
    }

    .actions button {
      margin-left: 8px;
    }

    mat-expansion-panel {
      margin: 16px 0;
    }

    mat-expansion-panel ol {
      padding-left: 20px;
    }

    mat-expansion-panel li {
      margin-bottom: 8px;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      .tips-grid {
        grid-template-columns: 1fr;
      }

      .cursor-tips-container {
        padding: 16px;
      }
    }
  `]
})
export class CursorTipsComponent {
  selectedCategory = signal<string>('All');

  categories = ['All', 'Productivity', 'Navigation', 'AI Features', 'Customization', 'Debugging'];

  cursorTips: CursorTip[] = [
    {
      id: '1',
      title: 'Quick File Navigation',
      description: 'Use Cmd+P (Mac) or Ctrl+P (Windows/Linux) to quickly open any file in your project without using the file explorer.',
      category: 'Navigation',
      difficulty: 'Beginner',
      tags: ['shortcuts', 'navigation', 'files'],
      steps: [
        'Press Cmd+P (Mac) or Ctrl+P (Windows/Linux)',
        'Start typing the file name',
        'Use arrow keys to navigate through results',
        'Press Enter to open the selected file'
      ],
      shortcut: 'Cmd+P / Ctrl+P'
    },
    {
      id: '2',
      title: 'AI Code Generation',
      description: 'Use Cursor\'s AI to generate code by describing what you want in natural language. The AI understands context and can generate complex functions.',
      category: 'AI Features',
      difficulty: 'Beginner',
      tags: ['ai', 'code-generation', 'productivity'],
      steps: [
        'Place your cursor where you want the code',
        'Press Cmd+K (Mac) or Ctrl+K (Windows/Linux)',
        'Describe what you want the code to do',
        'Press Enter to generate the code',
        'Review and modify as needed'
      ],
      shortcut: 'Cmd+K / Ctrl+K'
    },
    {
      id: '3',
      title: 'Multi-Cursor Editing',
      description: 'Select multiple lines or positions and edit them simultaneously. This is incredibly powerful for refactoring and bulk changes.',
      category: 'Productivity',
      difficulty: 'Intermediate',
      tags: ['multi-cursor', 'editing', 'refactoring'],
      steps: [
        'Hold Alt and click on multiple positions',
        'Or select text and press Alt+Shift+I to add cursors to each line',
        'Type to edit all positions simultaneously',
        'Use Ctrl+U (Cmd+U on Mac) to undo the last cursor'
      ],
      shortcut: 'Alt+Click / Alt+Shift+I'
    },
    {
      id: '4',
      title: 'AI Chat for Code Explanation',
      description: 'Use Cursor\'s AI chat to get explanations of complex code, ask questions about your codebase, or get suggestions for improvements.',
      category: 'AI Features',
      difficulty: 'Beginner',
      tags: ['ai', 'chat', 'explanation', 'learning'],
      steps: [
        'Select the code you want to understand',
        'Press Cmd+L (Mac) or Ctrl+L (Windows/Linux)',
        'Ask questions about the selected code',
        'The AI will provide detailed explanations and suggestions'
      ],
      shortcut: 'Cmd+L / Ctrl+L'
    },
    {
      id: '5',
      title: 'Quick Symbol Navigation',
      description: 'Navigate to any function, class, or variable definition quickly using the symbol search feature.',
      category: 'Navigation',
      difficulty: 'Beginner',
      tags: ['symbols', 'navigation', 'go-to-definition'],
      steps: [
        'Press Cmd+Shift+O (Mac) or Ctrl+Shift+O (Windows/Linux)',
        'Type the symbol name you\'re looking for',
        'Use arrow keys to navigate through results',
        'Press Enter to jump to the definition'
      ],
      shortcut: 'Cmd+Shift+O / Ctrl+Shift+O'
    },
    {
      id: '6',
      title: 'AI Code Refactoring',
      description: 'Use AI to refactor your code for better performance, readability, or to follow best practices.',
      category: 'AI Features',
      difficulty: 'Intermediate',
      tags: ['ai', 'refactoring', 'optimization', 'best-practices'],
      steps: [
        'Select the code you want to refactor',
        'Press Cmd+K (Mac) or Ctrl+K (Windows/Linux)',
        'Ask the AI to refactor the code (e.g., "Make this more efficient" or "Follow TypeScript best practices")',
        'Review the suggested changes',
        'Accept or modify the refactored code'
      ],
      shortcut: 'Cmd+K / Ctrl+K'
    },
    {
      id: '7',
      title: 'Split Editor Views',
      description: 'Work with multiple files side by side or in different layouts to improve your workflow.',
      category: 'Productivity',
      difficulty: 'Beginner',
      tags: ['layout', 'multi-file', 'productivity'],
      steps: [
        'Right-click on a file tab',
        'Select "Split Right" or "Split Down"',
        'Or use Cmd+\\ (Mac) or Ctrl+\\ (Windows/Linux)',
        'Drag files between panes as needed',
        'Use Cmd+1, Cmd+2, etc. to focus on different panes'
      ],
      shortcut: 'Cmd+\\ / Ctrl+\\'
    },
    {
      id: '8',
      title: 'AI Test Generation',
      description: 'Generate comprehensive unit tests for your functions and components using AI assistance.',
      category: 'AI Features',
      difficulty: 'Intermediate',
      tags: ['ai', 'testing', 'unit-tests', 'automation'],
      steps: [
        'Select the function or component you want to test',
        'Press Cmd+K (Mac) or Ctrl+K (Windows/Linux)',
        'Ask the AI to "Generate unit tests for this function"',
        'Specify the testing framework (Jest, Mocha, etc.)',
        'Review and customize the generated tests'
      ],
      shortcut: 'Cmd+K / Ctrl+K'
    },
    {
      id: '9',
      title: 'Quick Command Palette',
      description: 'Access all Cursor commands and features through the command palette for maximum efficiency.',
      category: 'Productivity',
      difficulty: 'Beginner',
      tags: ['commands', 'palette', 'shortcuts'],
      steps: [
        'Press Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows/Linux)',
        'Type any command name or description',
        'Use arrow keys to navigate through results',
        'Press Enter to execute the command'
      ],
      shortcut: 'Cmd+Shift+P / Ctrl+Shift+P'
    },
    {
      id: '10',
      title: 'AI Code Documentation',
      description: 'Generate comprehensive documentation for your code including JSDoc comments, README files, and API documentation.',
      category: 'AI Features',
      difficulty: 'Intermediate',
      tags: ['ai', 'documentation', 'jsdoc', 'api-docs'],
      steps: [
        'Select the code you want to document',
        'Press Cmd+K (Mac) or Ctrl+K (Windows/Linux)',
        'Ask the AI to "Generate JSDoc documentation" or "Create API documentation"',
        'Specify the documentation style and format',
        'Review and customize the generated documentation'
      ],
      shortcut: 'Cmd+K / Ctrl+K'
    },
    {
      id: '11',
      title: 'Advanced Find and Replace',
      description: 'Use regex patterns and advanced search options to find and replace text across your entire project.',
      category: 'Productivity',
      difficulty: 'Advanced',
      tags: ['search', 'replace', 'regex', 'bulk-editing'],
      steps: [
        'Press Cmd+Shift+F (Mac) or Ctrl+Shift+F (Windows/Linux)',
        'Enable regex mode by clicking the regex button',
        'Enter your search pattern',
        'Enter your replacement pattern',
        'Use the preview to review changes before applying',
        'Click "Replace All" to apply changes'
      ],
      shortcut: 'Cmd+Shift+F / Ctrl+Shift+F'
    },
    {
      id: '12',
      title: 'AI Code Review',
      description: 'Use AI to review your code for potential bugs, security issues, and improvements.',
      category: 'AI Features',
      difficulty: 'Intermediate',
      tags: ['ai', 'code-review', 'security', 'bugs'],
      steps: [
        'Select the code you want reviewed',
        'Press Cmd+L (Mac) or Ctrl+L (Windows/Linux)',
        'Ask the AI to "Review this code for potential issues"',
        'The AI will identify bugs, security vulnerabilities, and suggest improvements',
        'Address the issues and suggestions provided'
      ],
      shortcut: 'Cmd+L / Ctrl+L'
    }
  ];

  filteredTips = signal<CursorTip[]>(this.cursorTips);

  filterByCategory(category: string) {
    this.selectedCategory.set(category);
    if (category === 'All') {
      this.filteredTips.set(this.cursorTips);
    } else {
      this.filteredTips.set(this.cursorTips.filter(tip => tip.category === category));
    }
  }

  openVideo(url: string) {
    window.open(url, '_blank');
  }
}
