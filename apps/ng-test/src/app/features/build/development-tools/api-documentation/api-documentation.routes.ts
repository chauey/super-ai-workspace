import { Routes } from '@angular/router';

export const apiDocumentationRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./api-documentation.component').then(m => m.ApiDocumentationComponent)
  }
];
