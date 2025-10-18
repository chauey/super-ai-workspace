import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface SampleData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
  score: number;
}

@Component({
  selector: 'app-grids',
  standalone: true,
  imports: [
    CommonModule,
    AgGridAngular,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
  ],
  template: `
    <div class="grids-showcase">
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h2 class="text-2xl font-bold text-primary mb-2">Data Grids</h2>
        <p class="text-secondary mb-4">
          AG Grid integration with theme support and best practices
        </p>

        <div class="flex gap-2 flex-wrap">
          <button mat-raised-button color="primary" (click)="addRow()">
            <mat-icon>add</mat-icon> Add Row
          </button>
          <button mat-raised-button (click)="removeSelected()">
            <mat-icon>delete</mat-icon> Remove Selected
          </button>
          <button mat-raised-button (click)="exportCSV()">
            <mat-icon>download</mat-icon> Export CSV
          </button>
          <button mat-raised-button (click)="autoSizeColumns()">
            <mat-icon>fit_screen</mat-icon> Auto Size
          </button>
        </div>
      </div>

      <!-- AG Grid -->
      <div class="bg-card rounded-lg shadow-themed p-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Interactive Data Table</h3>

        <ag-grid-angular
          [class]="themeClass"
          style="height: 500px; width: 100%;"
          [rowData]="rowData"
          [columnDefs]="columnDefs"
          [defaultColDef]="defaultColDef"
          [gridOptions]="gridOptions"
          [rowSelection]="'multiple'"
          [animateRows]="true"
          [pagination]="true"
          [paginationPageSize]="10"
          (gridReady)="onGridReady($event)"
        >
        </ag-grid-angular>
      </div>

      <!-- Usage Example -->
      <div class="bg-card rounded-lg shadow-themed p-6 mt-6">
        <h3 class="text-lg font-semibold text-primary mb-4">Implementation</h3>

        <div class="space-y-4">
          <div>
            <h4 class="font-semibold text-primary mb-2">1. Install AG Grid</h4>
            <pre class="code-block"><code>npm install --save ag-grid-angular ag-grid-community</code></pre>
          </div>

          <div>
            <h4 class="font-semibold text-primary mb-2">2. Import Modules</h4>
            <pre class="code-block"><code>import {{ '{' }} AgGridAngular {{ '}' }} from 'ag-grid-angular';
import {{ '{' }} ColDef, GridOptions {{ '}' }} from 'ag-grid-community';</code></pre>
          </div>

          <div>
            <h4 class="font-semibold text-primary mb-2">3. Basic Usage</h4>
            <pre class="code-block"><code>&lt;ag-grid-angular
  [class]="themeClass"
  style="height: 500px;"
  [rowData]="rowData"
  [columnDefs]="columnDefs"
  [pagination]="true"
/&gt;</code></pre>
          </div>

          <div>
            <h4 class="font-semibold text-primary mb-2">4. Theme Integration</h4>
            <p class="text-secondary text-sm mb-2">
              AG Grid automatically respects the application theme:
            </p>
            <div class="flex gap-2">
              <mat-chip>Light Mode: ag-theme-alpine</mat-chip>
              <mat-chip>Dark Mode: ag-theme-alpine-dark</mat-chip>
            </div>
          </div>
        </div>
      </div>

      <!-- Features -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div class="bg-card rounded-lg shadow-themed p-6">
          <h3 class="text-lg font-semibold text-primary mb-4">Features</h3>
          <ul class="space-y-2">
            <li class="flex items-start gap-2">
              <mat-icon class="text-primary">check_circle</mat-icon>
              <span class="text-secondary">Sorting & Filtering</span>
            </li>
            <li class="flex items-start gap-2">
              <mat-icon class="text-primary">check_circle</mat-icon>
              <span class="text-secondary">Pagination</span>
            </li>
            <li class="flex items-start gap-2">
              <mat-icon class="text-primary">check_circle</mat-icon>
              <span class="text-secondary">Row Selection</span>
            </li>
            <li class="flex items-start gap-2">
              <mat-icon class="text-primary">check_circle</mat-icon>
              <span class="text-secondary">CSV Export</span>
            </li>
            <li class="flex items-start gap-2">
              <mat-icon class="text-primary">check_circle</mat-icon>
              <span class="text-secondary">Theme Support</span>
            </li>
            <li class="flex items-start gap-2">
              <mat-icon class="text-primary">check_circle</mat-icon>
              <span class="text-secondary">Responsive Design</span>
            </li>
          </ul>
        </div>

        <div class="bg-card rounded-lg shadow-themed p-6">
          <h3 class="text-lg font-semibold text-primary mb-4">Best Practices</h3>
          <ul class="space-y-2">
            <li class="flex items-start gap-2">
              <mat-icon class="text-primary">lightbulb</mat-icon>
              <span class="text-secondary">Use theme-aware class bindings</span>
            </li>
            <li class="flex items-start gap-2">
              <mat-icon class="text-primary">lightbulb</mat-icon>
              <span class="text-secondary">Enable pagination for large datasets</span>
            </li>
            <li class="flex items-start gap-2">
              <mat-icon class="text-primary">lightbulb</mat-icon>
              <span class="text-secondary">Implement virtual scrolling for performance</span>
            </li>
            <li class="flex items-start gap-2">
              <mat-icon class="text-primary">lightbulb</mat-icon>
              <span class="text-secondary">Use column definitions for type safety</span>
            </li>
            <li class="flex items-start gap-2">
              <mat-icon class="text-primary">lightbulb</mat-icon>
              <span class="text-secondary">Implement proper error handling</span>
            </li>
            <li class="flex items-start gap-2">
              <mat-icon class="text-primary">lightbulb</mat-icon>
              <span class="text-secondary">Add loading states for async data</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .code-block {
        @apply p-4 rounded overflow-x-auto text-sm font-mono;
        background-color: var(--bg-tertiary);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
      }
    `,
  ],
})
export class GridsComponent implements OnInit {
  private gridApi: any;
  themeClass = '';

  columnDefs: ColDef<SampleData>[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 80,
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    { field: 'name', headerName: 'Name', filter: true, sortable: true },
    { field: 'email', headerName: 'Email', filter: true, sortable: true },
    { field: 'role', headerName: 'Role', filter: true, sortable: true },
    {
      field: 'status',
      headerName: 'Status',
      filter: true,
      sortable: true,
      cellStyle: (params) => {
        if (params.value === 'Active') {
          return { color: '#4caf50', fontWeight: 'bold' };
        } else if (params.value === 'Inactive') {
          return { color: '#f44336', fontWeight: 'bold' };
        }
        return null;
      },
    },
    { field: 'joinDate', headerName: 'Join Date', filter: true, sortable: true },
    { field: 'score', headerName: 'Score', filter: true, sortable: true },
  ];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  };

  gridOptions: GridOptions = {
    suppressCellFocus: false,
    enableCellTextSelection: true,
  };

  rowData: SampleData[] = [];

  ngOnInit() {
    this.generateSampleData();
    this.updateTheme();
    this.watchThemeChanges();
  }

  generateSampleData() {
    const roles = ['Admin', 'User', 'Manager', 'Developer', 'Designer'];
    const statuses = ['Active', 'Inactive', 'Pending'];

    this.rowData = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: roles[Math.floor(Math.random() * roles.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      joinDate: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      score: Math.floor(Math.random() * 100),
    }));
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  addRow() {
    const newRow: SampleData = {
      id: this.rowData.length + 1,
      name: `New User ${this.rowData.length + 1}`,
      email: `newuser${this.rowData.length + 1}@example.com`,
      role: 'User',
      status: 'Active',
      joinDate: new Date().toISOString().split('T')[0],
      score: 0,
    };
    this.rowData = [...this.rowData, newRow];
  }

  removeSelected() {
    const selectedRows = this.gridApi.getSelectedRows();
    if (selectedRows.length > 0) {
      const selectedIds = selectedRows.map((row: SampleData) => row.id);
      this.rowData = this.rowData.filter((row) => !selectedIds.includes(row.id));
    }
  }

  exportCSV() {
    this.gridApi.exportDataAsCsv();
  }

  autoSizeColumns() {
    this.gridApi.autoSizeAllColumns();
  }

  updateTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    this.themeClass = isDark ? 'ag-theme-alpine-dark' : 'ag-theme-alpine';
  }

  watchThemeChanges() {
    const observer = new MutationObserver(() => {
      this.updateTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
}

