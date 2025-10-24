import { Routes } from '@angular/router';

export const routes: Routes = [
  // Dashboard - Landing page with all top-level features
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.dashboardRoutes)
  },

  // Tech - Educational content
  {
    path: 'tech',
    loadChildren: () => import('./features/tech/tech.routes').then(m => m.techRoutes)
  },

  // Build - Development tools and resources
  {
    path: 'build',
    loadChildren: () => import('./features/build/build.routes').then(m => m.buildRoutes)
  },

  // Certify - Certification preparation
  {
    path: 'certify',
    loadChildren: () => import('./features/certify/certify.routes').then(m => m.certifyRoutes)
  },

  // Showcase - Portfolio and demos
  {
    path: 'showcase',
    loadChildren: () => import('./features/showcase/showcase.routes').then(m => m.showcaseRoutes)
  },

  // Apps - SaaS applications and utilities
  {
    path: 'apps',
    loadChildren: () => import('./features/apps/apps.routes').then(m => m.appsRoutes)
  },

  // Tools - Utilities and integrations
  {
    path: 'tools',
    loadChildren: () => import('./features/tools/tools.routes').then(m => m.toolsRoutes)
  },

  // Design System - Top level (moved from Build for backward compatibility)
  {
    path: 'design-system',
    loadChildren: () => import('./features/design-system/design-system.routes').then(m => m.designSystemRoutes)
  },

  // Angular routes are now properly nested under /tech/front-end/angular/
  // Removed direct /angular/ route to maintain consistent hierarchy

  // .NET Learning Path
  {
    path: 'dotnet',
    loadChildren: () => import('./features/dotnet/dotnet.routes').then(m => m.dotnetRoutes)
  },

  // AI-900: Azure AI Fundamentals
  {
    path: 'ai-900',
    loadChildren: () => import('./features/ai-900/ai-900.routes').then(m => m.ai900Routes)
  },

  // AZ-900: Azure Fundamentals
  {
    path: 'az-900',
    loadChildren: () => import('./features/az-900/az-900.routes').then(m => m.az900Routes)
  },

  // AZ-204: Azure Developer Associate (placeholder)
  {
    path: 'az-204',
    loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  },

  // AZ-400: Azure DevOps Engineer Expert (placeholder)
  {
    path: 'az-400',
    loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  },

  // Documentation
  {
    path: 'docs',
    loadChildren: () => import('./features/docs/docs.routes').then(m => m.docsRoutes)
  },

  // Resume
  {
    path: 'resume',
    loadChildren: () => import('./features/resume/resume.routes').then(m => m.resumeRoutes)
  },

  // Front-end Landing Page (moved to /tech/front-end)
  // This route is now handled by tech.routes.ts

  // SaaS Landing Page (legacy - redirect to apps)
  {
    path: 'saas',
    redirectTo: 'apps',
    pathMatch: 'full'
  },

  // Certification Test (legacy - redirect to apps)
  {
    path: 'saas/cert-test',
    redirectTo: 'apps/certification-test',
    pathMatch: 'full'
  },

  // Playwright - Under Learn/E2E Testing
  {
    path: 'playwright',
    loadChildren: () => import('./features/playwright/playwright.routes').then(m => m.playwrightRoutes)
  },

  // E2E Testing (legacy - redirect to playwright)
  {
    path: 'e2e',
    redirectTo: 'playwright',
    pathMatch: 'full'
  },

  // 404 / Coming Soon - Catch all undefined routes
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
