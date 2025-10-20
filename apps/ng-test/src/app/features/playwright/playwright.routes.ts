import { Routes } from '@angular/router';

export const playwrightRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./playwright.component').then(m => m.PlaywrightComponent)
  },
  {
    path: 'getting-started',
    loadComponent: () => import('./getting-started/getting-started.component').then(m => m.GettingStartedComponent)
  },
  {
    path: 'test-examples',
    loadComponent: () => import('./test-examples/test-examples.component').then(m => m.TestExamplesComponent)
  },
  {
    path: 'best-practices',
    loadComponent: () => import('./best-practices/best-practices.component').then(m => m.BestPracticesComponent)
  },
  {
    path: 'mcp-integration',
    loadComponent: () => import('./mcp-integration/mcp-integration.component').then(m => m.McpIntegrationComponent)
  }
];
