import { Routes } from '@angular/router';

export const developmentToolsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./development-tools.component').then(m => m.DevelopmentToolsComponent)
  },
  {
    path: 'documentation',
    loadChildren: () => import('../../docs/docs.routes').then(m => m.docsRoutes)
  },
  {
    path: 'api-documentation',
    loadChildren: () => import('./api-documentation/api-documentation.routes').then(m => m.apiDocumentationRoutes)
  }
];



