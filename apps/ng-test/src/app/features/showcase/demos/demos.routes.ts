import { Routes } from '@angular/router';

export const demosRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./demos.component').then(m => m.DemosComponent)
  }
];
